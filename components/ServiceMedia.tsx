import Image from "next/image";
import { Reveal } from "@/components/Reveal";

// Global media primitives shared by service pages and future landing pages.

type MediaKind = "image" | "video" | "screen";
type MediaTheme = "wordpress" | "shopify" | "maintenance" | "ppc" | "amazon" | "seo";

const themeStyles: Record<MediaTheme, { frame: string; badge: string; icon: string; line: string }> = {
  wordpress: {
    frame: "border-ink/25 bg-tint-amber text-ink",
    badge: "border-ink/15 bg-surface/85 text-ink/65",
    icon: "border-ink/20 bg-surface/80 text-amber-deep",
    line: "bg-teal",
  },
  shopify: {
    frame: "border-[#7fb49b]/45 bg-tint-green text-ink",
    badge: "border-[#173d2f]/15 bg-surface/85 text-ink/70",
    icon: "border-[#173d2f]/20 bg-surface/85 text-[#24744f]",
    line: "bg-[#e46f55]",
  },
  maintenance: {
    frame: "border-[#f2c675]/40 bg-[#111d2d] text-oninverse",
    badge: "border-oninverse/15 bg-[#0c1624]/85 text-oninverse/70",
    icon: "border-[#f2c675]/35 bg-[#0c1624]/90 text-[#f2c675]",
    line: "bg-[#f2c675]",
  },
  ppc: {
    frame: "border-[#b8ef3e]/45 bg-[#11130f] text-oninverse",
    badge: "border-[#b8ef3e]/25 bg-black/65 text-[#d7ff7b]",
    icon: "border-[#b8ef3e]/40 bg-black/70 text-[#b8ef3e]",
    line: "bg-[#b8ef3e]",
  },
  amazon: {
    frame: "border-[#ff9900]/55 bg-[#17130e] text-oninverse",
    badge: "border-[#ffb84d]/30 bg-black/65 text-[#ffc66d]",
    icon: "border-[#ff9900]/45 bg-black/70 text-[#ffb84d]",
    line: "bg-[#ff9900]",
  },
  seo: {
    frame: "border-[#76a9e8]/50 bg-[#0e2035] text-oninverse",
    badge: "border-[#9bc3f3]/25 bg-[#081626]/75 text-[#b8d8ff]",
    icon: "border-[#76a9e8]/45 bg-[#081626]/85 text-[#8fc0f7]",
    line: "bg-[#ee8c67]",
  },
};

function MediaIcon({ kind, className }: { kind: MediaKind; className: string }) {
  if (kind === "video") {
    return (
      <span className={`flex size-14 items-center justify-center rounded-full border backdrop-blur-sm ${className}`}>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="ml-1 size-5"><path d="M8 5.5v13l10-6.5-10-6.5Z" /></svg>
      </span>
    );
  }
  if (kind === "screen") {
    return (
      <span className={`flex size-14 items-center justify-center rounded-xl border backdrop-blur-sm ${className}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className="size-6"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>
      </span>
    );
  }
  return (
    <span className={`flex size-14 items-center justify-center rounded-xl border backdrop-blur-sm ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className="size-6"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m6 17 4-4 3 3 2-2 3 3M8.5 9.5h.01" /></svg>
    </span>
  );
}

export function MediaFrame({
  kind,
  theme,
  title,
  note,
  ratio = "16/10",
  className = "",
  source,
  poster,
  alt,
}: {
  kind: MediaKind;
  theme: MediaTheme;
  title: string;
  note: string;
  ratio?: string;
  className?: string;
  source?: string;
  poster?: string;
  alt?: string;
}) {
  const styles = themeStyles[theme];
  const hasMedia = Boolean(source);
  return (
    <div
      role={hasMedia ? undefined : "img"}
      aria-label={hasMedia ? undefined : `${kind === "video" ? "Video" : kind === "screen" ? "Screen" : "Image"} placeholder: ${title}. ${note}`}
      data-media-kind={kind}
      style={{ aspectRatio: ratio }}
      className={`service-media-frame group relative flex min-h-[180px] w-full min-w-0 max-w-full items-center justify-center overflow-hidden rounded-[18px] border-2 sm:min-h-[220px] ${styles.frame} ${className}`}
    >
      {source && kind === "video" ? (
        <video controls preload="metadata" poster={poster} aria-label={alt ?? title} className="absolute inset-0 size-full object-cover">
          <source src={source} />
        </video>
      ) : source ? (
        <Image src={source} alt={alt ?? title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div aria-hidden className="absolute inset-5 rounded-[12px] border border-current opacity-10" />
        </>
      )}
      <span className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.15em] backdrop-blur-sm ${styles.badge}`}>
        {kind}
      </span>
      {kind === "screen" && (
        <span aria-hidden className="absolute left-0 right-0 top-0 flex h-8 items-center gap-1.5 border-b border-current/10 px-4">
          <i className="size-1.5 rounded-full bg-current opacity-30" /><i className="size-1.5 rounded-full bg-current opacity-30" /><i className="size-1.5 rounded-full bg-current opacity-30" />
        </span>
      )}
      {!hasMedia && <div className="relative z-10 mx-auto max-w-[78%] text-center">
        <MediaIcon kind={kind} className={styles.icon} />
        <p className="mt-5 font-sans text-[clamp(18px,1.6vw,24px)] font-semibold">{title}</p>
      </div>}
      {kind === "video" && !hasMedia && (
        <div aria-hidden className="absolute inset-x-5 bottom-5 flex items-center gap-3">
          <span className="text-[10px] font-semibold tabular-nums opacity-55">00:00</span>
          <span className="h-1 flex-1 overflow-hidden rounded-full bg-current/15"><span className={`block h-full w-[22%] rounded-full ${styles.line}`} /></span>
          <span className="text-[10px] font-semibold tabular-nums opacity-55">00:45</span>
        </div>
      )}
    </div>
  );
}

export function WordPressVisualStory() {
  return (
    <section className="overflow-hidden border-b border-line bg-tint-amber">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-10 gap-y-7 max-lg:block">
            <div className="col-span-5 max-lg:mb-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber-deep">WordPress build story</p>
              <h2 className="mt-5 max-w-[15ch] font-serif text-[clamp(32px,25px+1.9vw,48px)] leading-[1.05]">See the thinking, the build and the editable result.</h2>
              <p className="mt-5 max-w-[48ch] text-body leading-relaxed text-ink/70">From the first wireframe to a live, editable website — the same process behind every WordPress build we deliver.</p>
            </div>
            <div className="col-span-7">
              <MediaFrame kind="video" theme="wordpress" ratio="16/9" title="45-second WordPress project overview" note="Replace with a concise planning-to-launch video." />
            </div>
          </div>
          <div className="mt-7 grid grid-cols-12 gap-7">
            <MediaFrame kind="image" theme="wordpress" ratio="5/4" title="Planning and wireframe" note="Add an approved sitemap, wireframe or workshop photograph." className="col-span-5 max-md:col-span-12" />
            <MediaFrame kind="screen" theme="wordpress" ratio="16/8" title="Responsive website reveal" note="Show desktop and mobile views from a real WordPress project." className="col-span-7 max-md:col-span-12" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ShopifyStorefrontShowcase() {
  return (
    <section className="overflow-hidden bg-[#16382c] text-oninverse">
      <div className="container-omh section-md">
        <Reveal>
          <div className="flex items-end justify-between gap-10 max-md:block">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#ef9a83]">Storefront showcase</p>
              <h2 className="mt-5 max-w-[18ch] font-sans text-h2 font-semibold">Let products and buying journeys do more of the explaining.</h2>
            </div>
            <p className="max-w-[42ch] text-body leading-relaxed text-oninverse/68 max-md:mt-5">From product discovery through to a completed checkout — every step of the storefront built to convert.</p>
          </div>
          <div className="mt-11 grid grid-cols-12 gap-5 max-md:block">
            <MediaFrame kind="image" theme="shopify" ratio="3/4" title="Product page" note="Approved product or collection image." className="col-span-3 max-md:mb-5" />
            <MediaFrame kind="video" theme="shopify" ratio="16/11" title="Store journey walkthrough" note="Replace with a mobile or desktop shopping-flow video." className="col-span-6 max-md:mb-5" />
            <MediaFrame kind="image" theme="shopify" ratio="3/4" title="Mobile checkout" note="Approved checkout or cart screen." className="col-span-3" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-5 max-sm:grid-cols-1">
            {["Discovery", "Product confidence", "Checkout"].map((label, index) => <div key={label} className="border-t border-oninverse/20 pt-4"><span className="mr-3 text-[11px] font-semibold text-[#ef9a83]">0{index + 1}</span><span className="text-[14px] font-semibold uppercase tracking-[0.1em] text-oninverse/75">{label}</span></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function MaintenanceControlRoom() {
  return (
    <section className="overflow-hidden bg-[#0b1523] text-oninverse">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-10 gap-y-8 max-lg:block">
            <div className="col-span-4 max-lg:mb-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f2c675]">Maintenance control room</p>
              <h2 className="mt-5 max-w-[13ch] font-sans text-h2 font-semibold">Show the work that normally happens quietly.</h2>
              <p className="mt-5 max-w-[42ch] text-body leading-relaxed text-oninverse/65">Uptime monitoring, update logs and a monthly report you can actually read — the ongoing care that keeps a site reliable.</p>
              <div className="mt-8 grid gap-3 text-[13px]">
                {["Uptime and fault alerts", "Updates and backup checks", "Monthly work summary"].map((label) => <div key={label} className="flex items-center gap-3 rounded-lg border border-oninverse/10 bg-oninverse/[0.035] px-4 py-3"><span className="size-2 rounded-full bg-[#f2c675] shadow-[0_0_14px_rgba(242,198,117,.65)]" />{label}</div>)}
              </div>
            </div>
            <div className="col-span-8 grid grid-cols-8 gap-5">
              <MediaFrame kind="screen" theme="maintenance" ratio="16/9" title="Monitoring and maintenance dashboard" note="Replace with an approved, anonymised status or reporting screen." className="col-span-8" />
              <MediaFrame kind="video" theme="maintenance" ratio="16/10" title="Monthly report walkthrough" note="Add a short screen-recorded client update." className="col-span-5 max-sm:col-span-8" />
              <MediaFrame kind="image" theme="maintenance" ratio="4/5" title="Update log" note="Use a clear before-and-after maintenance record." className="col-span-3 max-sm:col-span-8" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PpcCampaignStudio() {
  return (
    <section className="overflow-hidden bg-[#090a08] text-oninverse">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 items-center gap-x-12 gap-y-9 max-lg:block">
            <div className="col-span-6 max-lg:mb-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.17em] text-[#b8ef3e]">Campaign studio</p>
              <h2 className="mt-5 max-w-[13ch] font-sans text-[clamp(34px,27px+2vw,52px)] font-semibold leading-[1.02]">Watch how a search becomes a measured action.</h2>
              <p className="mt-6 max-w-[52ch] text-body leading-relaxed text-oninverse/66">From the initial campaign structure through search-term review to the landing page it drives traffic to.</p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {['Search intent', 'Ad message', 'Landing page', 'Conversion'].map((label, index) => <span key={label} className="rounded-full border border-[#b8ef3e]/25 px-3 py-2 text-[12px] font-semibold text-[#d7ff7b]"><b className="mr-2 opacity-45">0{index + 1}</b>{label}</span>)}
              </div>
            </div>
            <MediaFrame kind="video" theme="ppc" ratio="16/10" title="Google Ads campaign walkthrough" note="Replace with a concise, anonymised screen recording." className="col-span-6" />
          </div>
          <div className="mt-7 grid grid-cols-12 gap-5">
            <MediaFrame kind="screen" theme="ppc" ratio="16/8" title="Search-term and budget view" note="Show the decisions, not unsupported results." className="col-span-7 max-md:col-span-12" />
            <MediaFrame kind="image" theme="ppc" ratio="5/3" title="Landing-page annotation" note="Add a real campaign page with approved callouts." className="col-span-5 max-md:col-span-12" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AmazonMarketplaceWorkbench() {
  return (
    <section className="overflow-hidden bg-[#17130e] text-oninverse">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-12 gap-y-9 max-lg:block">
            <div className="col-span-5 max-lg:mb-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.17em] text-[#ffb84d]">Marketplace workbench</p>
              <h2 className="mt-5 max-w-[14ch] font-sans text-[clamp(34px,27px+2vw,52px)] font-semibold leading-[1.02]">See the listing, campaign and search term together.</h2>
              <p className="mt-6 max-w-[48ch] text-body leading-relaxed text-oninverse/68">Catalogue, campaign and listing performance reviewed together — because on Amazon they can’t be managed apart.</p>
            </div>
            <MediaFrame kind="video" theme="amazon" ratio="16/10" title="Amazon campaign walkthrough" note="Add a concise, anonymised account and optimisation review." className="col-span-7" />
          </div>
          <div className="mt-7 grid grid-cols-12 gap-5">
            <MediaFrame kind="image" theme="amazon" ratio="4/3" title="Product listing review" note="Replace with an approved listing, storefront or catalogue image." className="col-span-5 max-md:col-span-12" />
            <MediaFrame kind="screen" theme="amazon" ratio="16/8" title="Search-term and ACoS view" note="Show real decisions with dates, spend and metric definitions visible." className="col-span-7 max-md:col-span-12" />
          </div>
          <div className="mt-6 grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {["Catalogue readiness", "Search intent", "Bid control", "Sales context"].map((label, index) => (
              <div key={label} className="border-t border-oninverse/15 pt-4">
                <span className="mr-3 text-[11px] font-semibold text-[#ffb84d]">0{index + 1}</span>
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-oninverse/72">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SeoSearchLandscape() {
  return (
    <section className="overflow-hidden border-b border-[#cad9eb] bg-tint-blue text-ink">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-12 gap-y-9 max-lg:block">
            <div className="col-span-5 max-lg:mb-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.17em] text-amber-deep">Search landscape</p>
              <h2 className="mt-5 max-w-[15ch] font-sans text-[clamp(34px,27px+2vw,52px)] font-semibold leading-[1.02]">Make the route from search to useful page visible.</h2>
              <p className="mt-6 max-w-[48ch] text-body leading-relaxed text-ink/68">How a site is crawled, how it performs in search, and how its content is structured — three views of the same picture.</p>
            </div>
            <MediaFrame kind="screen" theme="seo" ratio="16/10" title="Organic search performance view" note="Use an anonymised Search Console or reporting screen with dates and metric definitions." className="col-span-7" />
          </div>
          <div className="mt-7 grid grid-cols-12 gap-5">
            <MediaFrame kind="image" theme="seo" ratio="5/4" title="Crawl and architecture map" note="Add a real sitemap, crawl visual or annotated page hierarchy." className="col-span-5 max-md:col-span-12" />
            <MediaFrame kind="video" theme="seo" ratio="16/8" title="SEO review walkthrough" note="Replace with a short audit-to-priority screen recording." className="col-span-7 max-md:col-span-12" />
          </div>
          <div className="mt-6 grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {["Discover", "Understand", "Choose a page", "Take action"].map((label, index) => (
              <div key={label} className="border-t border-[#10243a]/15 pt-4">
                <span className="mr-3 text-[11px] font-semibold text-amber-deep">0{index + 1}</span>
                <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink/72">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
