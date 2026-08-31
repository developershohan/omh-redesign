import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { POSTS_TAG } from "@/lib/sanity/client";

// Sanity calls this when a post is published, updated or deleted. It clears the
// blog cache tag so the next request rebuilds those pages, which is why the
// pages themselves can be cached indefinitely and served with no Sanity call.
//
// Set SANITY_REVALIDATE_SECRET here and in the webhook's Secret field; requests
// that fail the signature check are rejected.
export async function POST(request: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string; slug?: { current?: string } }>(
      request,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    // 'max' = stale-while-revalidate: visitors keep getting an instant cached
    // page while the new one renders in the background.
    revalidateTag(POSTS_TAG, "max");

    return NextResponse.json({
      revalidated: true,
      tag: POSTS_TAG,
      type: body._type,
      slug: body.slug?.current,
    });
  } catch (error) {
    console.error("Revalidation failed", error);
    return NextResponse.json({ message: "Revalidation failed" }, { status: 500 });
  }
}
