"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Proof";
import Link from "next/link";
import { ArchiveRow } from "@/components/insights/ArchiveRow";
import type { InsightIndexEntry, InsightTopic } from "@/lib/content/insights-types";

// The archive filters as you type. The server still renders the first paint from
// the URL, so a shared or crawled /insights?q=... is correct without JavaScript;
// this only takes over once it hydrates.

const pageSize = 12;

function archiveHref({ topic, query, page }: { topic?: string; query?: string; page?: number }) {
  const params = new URLSearchParams();
  if (topic) params.set("topic", topic);
  if (query) params.set("q", query);
  if (page && page > 1) params.set("page", String(page));
  const search = params.toString();
  return search ? `/insights?${search}` : "/insights";
}

function TopicNavigation({
  activeTopic,
  query,
  topics: insightTopics,
  totalCount,
}: {
  activeTopic: string;
  query: string;
  topics: Array<InsightTopic & { postCount: number }>;
  totalCount: number;
}) {
  const topics = [{ slug: "", name: "All", postCount: totalCount }, ...insightTopics];

  return (
    <nav aria-label="Insight topics" className="overflow-x-auto border-b border-line">
      <div className="container-omh flex min-w-max items-stretch">
        {topics.map((topic) => {
          const active = topic.slug === activeTopic;
          return (
            <Link
              key={topic.slug || "all"}
              href={archiveHref({ topic: topic.slug, query: query || undefined })}
              // The filter row is already on screen when it is used; the router's
              // default scroll-to-top threw the reader back to the hero each time.
              scroll={false}
              aria-current={active ? "page" : undefined}
              className={`relative flex min-h-14 items-center gap-2 px-5 text-label font-semibold transition-colors first:pl-0 ${
                active ? "text-ink" : "text-muted hover:text-amber-deep"
              }`}
            >
              {topic.name}
              <span className="text-[14px] font-medium text-muted/75">{topic.postCount}</span>
              {active && <span className="absolute inset-x-5 bottom-0 h-0.5 bg-teal first:left-0" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function InsightsArchive({
  entries,
  topics,
  activeTopic,
  initialQuery,
  initialPage,
  featured,
}: {
  entries: InsightIndexEntry[];
  topics: Array<InsightTopic & { postCount: number }>;
  activeTopic: string;
  initialQuery: string;
  initialPage: number;
  featured: React.ReactNode;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [page, setPage] = useState(initialPage);

  const cleanQuery = query.trim();
  const needle = cleanQuery.toLocaleLowerCase("en-GB");
  const showingCurated = !activeTopic && !needle;

  const filtered = useMemo(() => {
    const source = showingCurated ? entries.filter((post) => !post.featured) : entries;
    return source.filter((post) => {
      if (activeTopic && post.topic.slug !== activeTopic) return false;
      if (!needle) return true;
      return [post.title, post.summary, post.topic.name, ...post.categories.map((c) => c.name)]
        .join(" ")
        .toLocaleLowerCase("en-GB")
        .includes(needle);
    });
  }, [entries, activeTopic, needle, showingCurated]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), pageCount);
  const pagePosts = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const resultStart = filtered.length ? (currentPage - 1) * pageSize + 1 : 0;
  const resultEnd = Math.min(currentPage * pageSize, filtered.length);

  // Keep the address bar shareable without navigating — replace, so typing does
  // not fill the back button with one entry per keystroke.
  useEffect(() => {
    const timer = setTimeout(() => {
      window.history.replaceState(
        null,
        "",
        archiveHref({ topic: activeTopic, query: cleanQuery, page: currentPage }),
      );
    }, 250);
    return () => clearTimeout(timer);
  }, [cleanQuery, currentPage, activeTopic]);

  const heading = activeTopic
    ? topics.find((candidate) => candidate.slug === activeTopic)?.name
    : cleanQuery
      ? `Results for “${cleanQuery}”`
      : "Browse the archive";

  return (
    <>
      {showingCurated && currentPage === 1 && featured}

      <section id="archive" className="scroll-mt-24 bg-warm">
        <TopicNavigation
          activeTopic={activeTopic}
          query={cleanQuery}
          topics={topics}
          totalCount={entries.length}
        />
        <div className="container-omh section-md">
        <div className="flex items-end justify-between gap-10 max-lg:block">
          <div>
            <Eyebrow>{activeTopic || cleanQuery ? "Filtered archive" : "All insights"}</Eyebrow>
            <h2 className="mt-5 font-sans text-h2 font-semibold">{heading}</h2>
            <p className="mt-3 text-body text-muted">
              Showing {resultStart}–{resultEnd} of {filtered.length}{" "}
              {filtered.length === 1 ? "article" : "articles"}
            </p>
          </div>

          <form
            action="/insights"
            onSubmit={(event) => event.preventDefault()}
            role="search"
            className="field-shell flex w-full max-w-[430px] items-center rounded-button border border-line bg-surface p-1.5 transition-colors max-lg:mt-7 max-lg:max-w-none"
          >
            {activeTopic && <input type="hidden" name="topic" value={activeTopic} />}
            <Search className="ml-3 size-5 shrink-0 text-muted" aria-hidden />
            <label htmlFor="insights-search" className="sr-only">
              Search insights
            </label>
            <input
              id="insights-search"
              name="q"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search the archive"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-body outline-none placeholder:text-muted/75"
            />
          </form>
        </div>

        {pagePosts.length ? (
          <div className="mt-10 border-t border-line">{pagePosts.map((post) => <ArchiveRow key={post.slug} post={post} />)}</div>
        ) : (
          <div className="mt-10 rounded-card border border-line bg-surface p-8">
            <h3 className="font-sans text-h4 font-semibold">No matching insights</h3>
            <p className="mt-3 text-ink/68">Try a broader phrase or return to the complete archive.</p>
            <div className="mt-5">
              <TextLink
                href="/insights"
                onClick={(event) => {
                  event.preventDefault();
                  setQuery("");
                  setPage(1);
                }}
              >
                View all insights
              </TextLink>
            </div>
          </div>
        )}

        {pageCount > 1 && (
          <nav
            aria-label="Insights pagination"
            className="mt-10 flex flex-wrap items-center justify-between gap-5"
          >
            {currentPage > 1 ? (
              <button
                type="button"
                onClick={() => setPage(currentPage - 1)}
                className="group inline-flex cursor-pointer items-center gap-2 font-semibold text-amber-deep transition-colors duration-500 hover:underline underline-offset-4"
              >
                Previous
              </button>
            ) : (
              <span />
            )}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
                <button
                  key={number}
                  type="button"
                  onClick={() => setPage(number)}
                  aria-current={number === currentPage ? "page" : undefined}
                  className={`flex size-10 cursor-pointer items-center justify-center rounded-full border text-[18px] font-semibold transition-colors ${
                    number === currentPage
                      ? "border-teal bg-teal text-white"
                      : "border-line bg-surface text-muted hover:border-teal hover:text-amber-deep"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
            {currentPage < pageCount ? (
              <button
                type="button"
                onClick={() => setPage(currentPage + 1)}
                className="group inline-flex cursor-pointer items-center gap-2 font-semibold text-amber-deep transition-colors duration-500 hover:underline underline-offset-4"
              >
                Next
              </button>
            ) : (
              <span />
            )}
          </nav>
        )}
        </div>
      </section>
    </>
  );
}
