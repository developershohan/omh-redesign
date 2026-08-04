import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { formatInsightDate } from "@/components/insights/InsightMeta";
import { ArrowRight, TextLink } from "@/components/ui/Button";
import { FinalCta } from "@/components/ui/FinalCta";
import { Eyebrow } from "@/components/ui/Proof";
import { withContents } from "@/lib/content/insight-toc";
import { getRelatedInsights } from "@/lib/content/insights-posts";
import { insightHref, type InsightPost } from "@/lib/content/insights-types";

export function InsightArticle({ post }: { post: InsightPost }) {
  const related = getRelatedInsights(post);
  const wasUpdated = post.modifiedAt.slice(0, 10) !== post.publishedAt.slice(0, 10);
  const { html, items } = withContents(post.contentHtml);

  return (
    <article>
      <div aria-hidden className="read-progress" />

      <header className="border-b border-line bg-warm">
        <div className="container-omh section-md">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 text-[14px] text-muted"
            >
              <Link href="/insights" className="hover:text-amber-deep hover:underline underline-offset-4">
                Insights
              </Link>
              <span aria-hidden>/</span>
              <span>{post.topic.name}</span>
            </nav>

            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
              <span className="text-amber-deep">{post.topic.name}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.publishedAt}>{formatInsightDate(post.publishedAt)}</time>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
                <Clock3 className="size-4" aria-hidden />
                {post.readingTime} min read
              </span>
            </p>

            {/* Title left, lead image right: the heading row used to leave the
                whole right-hand half of the hero empty. */}
            <div className="mt-6 grid grid-cols-12 items-center gap-x-12 gap-y-9 max-lg:block">
              <div className={post.featuredImage ? "col-span-7" : "col-span-9"}>
                <h1 className="font-sans text-h1 font-semibold text-balance">{post.title}</h1>
                <p className="mt-7 max-w-[56ch] text-lead leading-relaxed text-ink/72">
                  {post.summary}
                </p>
              </div>

              {post.featuredImage && (
                <div className="col-span-5 max-lg:mt-9">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-media border border-line bg-soft shadow-[0_30px_70px_-50px_rgb(16_24_40/0.55)]">
                    <Image
                      src={post.featuredImage.src}
                      alt={post.featuredImage.alt || post.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 44vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* One byline strip instead of a floating meta panel — the old 3-column
                card left a tall empty gap beside the heading on every post. */}
            <dl className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-6 text-body">
              <div className="flex items-center gap-2.5">
                <dt className="text-muted">Written by</dt>
                <dd className="font-semibold">{post.author.name}</dd>
              </div>
              <div className="flex items-center gap-2.5">
                <dt className="text-muted">Published</dt>
                <dd className="font-semibold">{formatInsightDate(post.publishedAt)}</dd>
              </div>
              {wasUpdated && (
                <div className="flex items-center gap-2.5">
                  <dt className="text-muted">Updated</dt>
                  <dd className="font-semibold">{formatInsightDate(post.modifiedAt)}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
      </header>

      <section className="border-b border-line bg-surface">
        <div className="container-omh section-md">
          {/* Full container width: contents rail plus a body column that fills
              whatever is left, rather than a narrow centred island. */}
          <div className="grid grid-cols-[minmax(200px,240px)_minmax(0,1fr)] gap-x-[clamp(48px,5vw,88px)] gap-y-10 max-lg:block">
            <aside className="max-lg:mb-12">
              <div className="sticky top-28 max-lg:static">
                {items.length > 1 && (
                  <nav aria-labelledby="article-contents" className="border-t border-line pt-5">
                    <p
                      id="article-contents"
                      className="text-[13px] font-semibold uppercase tracking-[0.15em] text-muted"
                    >
                      On this page
                    </p>
                    <ol className="mt-4 grid gap-2.5 max-lg:mt-5">
                      {items.slice(0, 9).map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="block border-l-2 border-line py-0.5 pl-4 text-body leading-snug text-ink/68 transition-colors hover:border-amber hover:text-amber-deep"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}

                <div className="mt-8 border-t border-line pt-5">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-muted">
                    Filed under
                  </p>
                  <p className="mt-2 font-sans text-body font-semibold text-amber-deep">
                    {post.topic.name}
                  </p>
                  {post.categories.length > 0 && (
                    <p className="mt-3 text-body leading-relaxed text-ink/65">
                      {post.categories.map((category) => category.name).join(" · ")}
                    </p>
                  )}
                </div>

                <div className="mt-8 border-t border-line pt-5">
                  <TextLink href="/insights">All insights</TextLink>
                </div>
              </div>
            </aside>

            <Reveal className="min-w-0">
              <div className="insight-prose" dangerouslySetInnerHTML={{ __html: html }} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-warm">
        <div className="container-omh section-md">
          <Reveal>
            <div className="flex items-end justify-between gap-8 max-lg:block">
              <div>
                <Eyebrow>Keep reading</Eyebrow>
                <h2 className="mt-5 font-sans text-h2 font-semibold">Related insights</h2>
              </div>
              <div className="max-lg:mt-5">
                <TextLink href="/insights">Browse the full archive</TextLink>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-lg:grid-cols-1">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={insightHref(item)}
                  className="surface-card group flex flex-col rounded-card border border-line bg-surface p-7"
                >
                  <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-amber-deep">
                    {item.topic.name}
                  </p>
                  <h3 className="mt-4 font-sans text-h4 font-semibold leading-snug text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-body leading-relaxed text-ink/66">{item.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-body font-semibold text-amber-deep">
                    Read article
                    <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Turn useful ideas into a practical growth plan."
        titleAccent="a practical growth plan."
        body="Tell us what you want to improve and what you have tried so far. We will help you identify the clearest next step."
        primary={{ label: "Discuss Your Priorities", event: "insight_cta_click" }}
        contactEvents={{ phone: "insight_phone_click", email: "insight_email_click" }}
      />
    </article>
  );
}
