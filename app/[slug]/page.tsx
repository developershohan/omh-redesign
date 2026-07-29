import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticle } from "@/components/insights/InsightArticle";
import { getInsight, insightPosts } from "@/lib/content/insights-posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.seo.description ?? post.summary,
    authors: [{ name: post.author.name }],
    alternates: { canonical: `https://onlinemarketinghelp.co.uk/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.seo.description ?? post.summary,
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      images: post.featuredImage ? [{ url: post.featuredImage.src, alt: post.featuredImage.alt }] : undefined,
    },
  };
}

export default async function InsightPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();
  return <InsightArticle post={post} />;
}

