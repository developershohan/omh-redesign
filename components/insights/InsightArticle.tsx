import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { InsightMeta, formatInsightDate } from "@/components/insights/InsightMeta";
import { ArrowRight, Button, TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Proof";
import { getRelatedInsights } from "@/lib/content/insights-posts";
import { insightHref, type InsightPost } from "@/lib/content/insights-types";

export function InsightArticle({ post }: { post: InsightPost }) {
  const related = getRelatedInsights(post);
  const wasUpdated = post.modifiedAt.slice(0, 10) !== post.publishedAt.slice(0, 10);

  return (
    <article>
      <header className="border-b border-line bg-soft/35">
        <div className="container-omh section-md">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-9 flex flex-wrap items-center gap-2 text-[13px] text-muted">
              <Link href="/insights" className="hover:text-amber-deep hover:underline">Insights</Link>
              <span aria-hidden>/</span>
              <span>{post.topic.name}</span>
            </nav>
            <div className="grid grid-cols-12 gap-x-12 gap-y-9 max-lg:block">
              <div className="col-span-9">
                <InsightMeta post={post} />
                <h1 className="mt-6 max-w-[22ch] font-sans text-h1 font-semibold text-balance">{post.title}</h1>
                <p className="mt-6 max-w-[70ch] text-lead leading-relaxed text-ink/72">{post.summary}</p>
              </div>
              <dl className="col-span-3 self-end border-y border-line py-5 text-[14px]">
                <div className="flex justify-between gap-4"><dt className="text-muted">Written by</dt><dd className="font-semibold text-right">{post.author.name}</dd></div>
                <div className="mt-3 flex justify-between gap-4"><dt className="text-muted">Published</dt><dd className="font-semibold text-right">{formatInsightDate(post.publishedAt)}</dd></div>
                {wasUpdated && <div className="mt-3 flex justify-between gap-4"><dt className="text-muted">Updated</dt><dd className="font-semibold text-right">{formatInsightDate(post.modifiedAt)}</dd></div>}
              </dl>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="border-b border-line bg-white">
        <div className="container-omh section-md">
          {post.featuredImage && (
            <Reveal>
              <div className="relative mx-auto aspect-[16/7] max-w-[1180px] overflow-hidden rounded-media border border-line bg-soft max-md:aspect-[16/10]">
                <Image
                  src={post.featuredImage.src}
                  alt={post.featuredImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1440px) 92vw, 1180px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}

          <div className="mx-auto mt-14 grid max-w-[1120px] grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
            <aside className="col-span-3 max-lg:mb-10">
              <div className="sticky top-28 border-t border-line pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">Filed under</p>
                <p className="mt-2 font-sans text-[18px] font-semibold text-amber-deep">{post.topic.name}</p>
                {post.categories.length > 0 && (
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">Original categories</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{post.categories.map((category) => category.name).join(" · ")}</p>
                  </div>
                )}
                <div className="mt-6 border-t border-line pt-5"><TextLink href="/insights">All insights</TextLink></div>
              </div>
            </aside>

            <Reveal className="col-span-9">
              <div className="insight-prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-warm">
        <div className="container-omh section-md">
          <Reveal>
            <div className="flex items-end justify-between gap-8 max-lg:block">
              <div><Eyebrow>Keep reading</Eyebrow><h2 className="mt-5 font-sans text-h2 font-semibold">Related insights</h2></div>
              <div className="max-lg:mt-5"><TextLink href="/insights">Browse the full archive</TextLink></div>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-lg:grid-cols-1">
              {related.map((item) => (
                <Link key={item.slug} href={insightHref(item)} className="surface-card group flex min-h-[310px] flex-col rounded-card border border-line bg-white p-7">
                  <InsightMeta post={item} />
                  <h3 className="mt-6 font-sans text-h4 font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-ink/66">{item.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-amber-deep">Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-omh section-md grid grid-cols-12 items-center gap-10 max-lg:block">
          <Reveal className="col-span-8"><h2 className="max-w-[20ch] font-sans text-h2 font-semibold">Turn useful ideas into a practical growth plan.</h2><p className="mt-5 max-w-[58ch] text-lead leading-relaxed text-white/70">Tell us what you want to improve and what you have tried so far. We will help you identify the clearest next step.</p></Reveal>
          <Reveal className="col-span-4 max-lg:mt-8"><Button href="/contact" variant="inverse" arrow>Discuss Your Priorities</Button></Reveal>
        </div>
      </section>
    </article>
  );
}

