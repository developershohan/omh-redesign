import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Button, TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Proof";
import { InsightMeta } from "@/components/insights/InsightMeta";
import { featuredInsights, insightTopics, insightsIndex } from "@/lib/content/insights-index";
import { insightHref, type InsightIndexEntry } from "@/lib/content/insights-types";

const pageSize = 12;

function archiveHref({ topic, query, page }: { topic?: string; query?: string; page?: number }) {
  const params = new URLSearchParams();
  if (topic) params.set("topic", topic);
  if (query) params.set("q", query);
  if (page && page > 1) params.set("page", String(page));
  const search = params.toString();
  return search ? `/insights?${search}` : "/insights";
}

function InsightImage({ post, priority = false }: { post: InsightIndexEntry; priority?: boolean }) {
  if (!post.featuredImage) {
    return <span className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgb(215_154_55/0.24),transparent_28%),linear-gradient(145deg,#f8eddc,#efe1c9)]" />;
  }

  return (
    <Image
      src={post.featuredImage.src}
      alt={post.featuredImage.alt}
      fill
      priority={priority}
      sizes="(max-width: 1024px) 100vw, 62vw"
      className="object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.035]"
    />
  );
}

function FeaturedStories() {
  const [lead, ...picks] = featuredInsights;
  if (!lead) return null;

  return (
    <section className="border-b border-line bg-white">
      <div className="container-omh section-md">
        <Reveal>
          <div className="mb-10 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.17em] text-muted">
            <span className="h-0.5 w-7 bg-amber" />
            Featured insight
            <span className="h-px flex-1 bg-line" />
          </div>
          <Link
            href={insightHref(lead)}
            className="group grid grid-cols-12 items-center gap-x-12 gap-y-8 max-lg:block"
          >
            <span className="relative col-span-7 block aspect-[16/10] overflow-hidden rounded-media border border-line bg-soft max-lg:mb-8">
              <InsightImage post={lead} priority />
            </span>
            <span className="col-span-5 block">
              <InsightMeta post={lead} />
              <span className="mt-6 block max-w-[17ch] font-sans text-[clamp(32px,26px+1.45vw,50px)] font-semibold leading-[1.08] text-balance">
                {lead.title}
              </span>
              <span className="mt-5 block text-[18px] leading-relaxed text-ink/70">{lead.summary}</span>
              <span className="mt-7 inline-flex items-center gap-2 font-semibold text-amber-deep">
                Read the insight
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </span>
          </Link>

          <div className="mt-12 grid grid-cols-2 border-y border-line max-md:grid-cols-1 max-md:divide-y max-md:divide-line md:divide-x md:divide-line">
            {picks.map((post, index) => (
              <Link
                key={post.slug}
                href={insightHref(post)}
                className={`insight-row group flex min-h-[270px] flex-col justify-between py-8 ${index === 0 ? "md:pr-10" : "md:pl-10"}`}
              >
                <span>
                  <InsightMeta post={post} />
                  <span className="mt-5 block max-w-[26ch] font-sans text-[clamp(25px,22px+0.65vw,31px)] font-semibold leading-tight">
                    {post.title}
                  </span>
                </span>
                <span className="mt-8 flex items-end justify-between gap-6">
                  <span className="max-w-[44ch] text-[16.5px] leading-relaxed text-ink/68">{post.summary}</span>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-warm text-amber-deep transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-ink">
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TopicNavigation({ activeTopic, query }: { activeTopic: string; query: string }) {
  const topics = [{ slug: "", name: "All", postCount: insightsIndex.length }, ...insightTopics];

  return (
    <nav aria-label="Insight topics" className="overflow-x-auto border-b border-line">
      <div className="container-omh flex min-w-max items-stretch">
        {topics.map((topic) => {
          const active = topic.slug === activeTopic;
          return (
            <Link
              key={topic.slug || "all"}
              href={archiveHref({ topic: topic.slug, query: query || undefined })}
              aria-current={active ? "page" : undefined}
              className={`relative flex min-h-14 items-center gap-2 px-5 text-[14px] font-semibold transition-colors first:pl-0 ${
                active ? "text-ink" : "text-muted hover:text-amber-deep"
              }`}
            >
              {topic.name}
              <span className="text-[11px] font-medium text-muted/75">{topic.postCount}</span>
              {active && <span className="absolute inset-x-5 bottom-0 h-0.5 bg-teal first:left-0" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function ArchiveRow({ post }: { post: InsightIndexEntry }) {
  return (
    <Link
      href={insightHref(post)}
      className="insight-row group grid grid-cols-[150px_minmax(0,1fr)_190px_auto] items-center gap-7 border-b border-line py-7 max-lg:grid-cols-[120px_minmax(0,1fr)_150px_auto] max-md:grid-cols-[1fr_auto] max-md:gap-x-4 max-md:gap-y-5"
    >
      <span className="max-md:col-start-1 max-md:col-span-1 max-md:row-start-2">
        <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-amber-deep">{post.topic.name}</span>
        <time dateTime={post.publishedAt} className="mt-2 block text-[13px] text-muted">
          {new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(post.publishedAt))}
        </time>
        <span className="mt-1 block text-[13px] text-muted">{post.readingTime} min read</span>
      </span>

      <span className="max-md:col-start-1 max-md:col-span-2 max-md:row-start-3">
        <span className="block max-w-[34ch] font-sans text-[clamp(22px,20px+0.35vw,27px)] font-semibold leading-tight">{post.title}</span>
        <span className="mt-3 block max-w-[68ch] text-[16px] leading-relaxed text-ink/66">{post.summary}</span>
      </span>

      <span className="relative block aspect-[16/10] overflow-hidden rounded-[8px] border border-line bg-soft max-md:col-start-1 max-md:col-span-2 max-md:row-start-1">
        <InsightImage post={post} />
      </span>

      <span className="flex size-10 items-center justify-center rounded-full border border-line text-amber-deep transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-ink max-md:col-start-2 max-md:row-start-2 max-md:self-start">
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

function Pagination({ currentPage, pageCount, topic, query }: { currentPage: number; pageCount: number; topic: string; query: string }) {
  if (pageCount <= 1) return null;

  return (
    <nav aria-label="Insights pagination" className="mt-10 flex flex-wrap items-center justify-between gap-5">
      {currentPage > 1 ? (
        <TextLink href={archiveHref({ topic, query, page: currentPage - 1 })} className="[&_svg]:rotate-180">
          Previous
        </TextLink>
      ) : (
        <span />
      )}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
          <Link
            key={page}
            href={archiveHref({ topic, query, page })}
            aria-current={page === currentPage ? "page" : undefined}
            className={`flex size-10 items-center justify-center rounded-full border text-[14px] font-semibold transition-colors ${
              page === currentPage ? "border-teal bg-teal text-ink" : "border-line bg-white text-muted hover:border-teal hover:text-amber-deep"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>
      {currentPage < pageCount ? (
        <TextLink href={archiveHref({ topic, query, page: currentPage + 1 })}>Next</TextLink>
      ) : (
        <span />
      )}
    </nav>
  );
}

export function InsightsHub({ topic = "", query = "", page = 1 }: { topic?: string; query?: string; page?: number }) {
  const activeTopic = insightTopics.some((candidate) => candidate.slug === topic) ? topic : "";
  const cleanQuery = query.trim();
  const needle = cleanQuery.toLocaleLowerCase("en-GB");
  const showingCurated = !activeTopic && !needle;
  const archiveSource = showingCurated ? insightsIndex.filter((post) => !post.featured) : insightsIndex;
  const filtered = archiveSource.filter((post) => {
    if (activeTopic && post.topic.slug !== activeTopic) return false;
    if (!needle) return true;
    return [post.title, post.summary, post.topic.name, ...post.categories.map((category) => category.name)]
      .join(" ")
      .toLocaleLowerCase("en-GB")
      .includes(needle);
  });
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(Math.max(1, Number.isFinite(page) ? Math.floor(page) : 1), pageCount);
  const pagePosts = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const resultStart = filtered.length ? (currentPage - 1) * pageSize + 1 : 0;
  const resultEnd = Math.min(currentPage * pageSize, filtered.length);

  return (
    <>
      <section className="overflow-hidden border-b border-line bg-soft/35">
        <div className="container-omh section-md">
          <Reveal>
            <Eyebrow>Insights</Eyebrow>
            <div className="mt-8 grid grid-cols-12 items-end gap-x-12 gap-y-8 max-lg:block">
              <div className="col-span-8">
                <h1 className="max-w-[18ch] font-sans text-h1 font-semibold text-balance">Practical thinking for better marketing decisions.</h1>
                <p className="mt-6 max-w-[66ch] text-lead leading-relaxed text-ink/72">
                  Plain-English guidance on websites, SEO, paid media and digital growth — written to help you judge options, ask better questions and choose the clearest next step.
                </p>
              </div>
              <p className="col-span-4 border-t border-line pt-6 font-serif text-[clamp(22px,19px+0.65vw,28px)] leading-snug text-ink/72">
                Useful when you are planning the work — and when you need to challenge it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {showingCurated && currentPage === 1 && <FeaturedStories />}

      <section className="bg-warm">
        <TopicNavigation activeTopic={activeTopic} query={cleanQuery} />
        <div className="container-omh section-md">
          <Reveal>
            <div className="flex items-end justify-between gap-10 max-lg:block">
              <div>
                <Eyebrow>{activeTopic || cleanQuery ? "Filtered archive" : "All insights"}</Eyebrow>
                <h2 className="mt-5 font-sans text-h2 font-semibold">
                  {activeTopic ? insightTopics.find((candidate) => candidate.slug === activeTopic)?.name : cleanQuery ? `Results for “${cleanQuery}”` : "Browse the archive"}
                </h2>
                <p className="mt-3 text-[15px] text-muted">
                  Showing {resultStart}–{resultEnd} of {filtered.length} {filtered.length === 1 ? "article" : "articles"}
                </p>
              </div>

              <form action="/insights" className="flex w-full max-w-[430px] items-center rounded-button border border-line bg-white p-1.5 max-lg:mt-7 max-lg:max-w-none">
                {activeTopic && <input type="hidden" name="topic" value={activeTopic} />}
                <Search className="ml-3 size-5 shrink-0 text-muted" aria-hidden />
                <label htmlFor="insights-search" className="sr-only">Search insights</label>
                <input
                  id="insights-search"
                  name="q"
                  type="search"
                  defaultValue={cleanQuery}
                  placeholder="Search the archive"
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-[16px] outline-none placeholder:text-muted/75"
                />
                <button type="submit" className="button-motion rounded-button bg-ink px-4 py-2.5 text-[14px] font-semibold text-white hover:bg-teal hover:text-ink">
                  Search
                </button>
              </form>
            </div>

            {pagePosts.length ? (
              <div className="mt-10 border-t border-line">
                {pagePosts.map((post) => <ArchiveRow key={post.slug} post={post} />)}
              </div>
            ) : (
              <div className="mt-10 rounded-card border border-line bg-white p-8">
                <h3 className="font-sans text-h4 font-semibold">No matching insights</h3>
                <p className="mt-3 text-ink/68">Try a broader phrase or return to the complete archive.</p>
                <div className="mt-5"><TextLink href="/insights">View all insights</TextLink></div>
              </div>
            )}

            <Pagination currentPage={currentPage} pageCount={pageCount} topic={activeTopic} query={cleanQuery} />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-omh section-md grid grid-cols-12 items-center gap-10 max-lg:block">
          <Reveal className="col-span-8">
            <h2 className="max-w-[18ch] font-sans text-h2 font-semibold">Need help applying this to your business?</h2>
            <p className="mt-5 max-w-[60ch] text-lead leading-relaxed text-white/70">
              Tell us what you are working on, what is getting in the way, and how you will measure success. We will recommend a practical next step.
            </p>
          </Reveal>
          <Reveal className="col-span-4 max-lg:mt-8">
            <Button href="/contact" variant="inverse" arrow>Book a Growth Consultation</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
