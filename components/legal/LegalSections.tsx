import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Proof";
import type { LegalBlock, LegalDoc } from "@/lib/content/legal";

/*
  One layout for all three policy documents (user preference, 11 Aug 2026): split
  masthead, then a sticky numbered contents rail beside the prose column. Legal
  text is the one place where a consistent, boring, scannable layout is the right
  answer — someone looking for a clause should find it the same way every time.
*/

// Clause headings often start with a number ("2. Methods of collection"), which
// yields an id like `2-methods`. Browsers accept it, but it is an invalid CSS
// selector, so anything doing querySelector('#'+id) throws. Prefix to avoid it.
function slug(heading: string) {
  const base = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return /^\d/.test(base) ? `s-${base}` : base;
}

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return (
      <p className="mt-4 text-body leading-relaxed text-ink/75 first:mt-0 whitespace-pre-line">
        {block}
      </p>
    );
  }
  return (
    <ul className="mt-4 flex list-none flex-col gap-2.5 first:mt-0">
      {block.list.map((item) => (
        <li key={item} className="flex gap-3 text-body leading-relaxed text-ink/75">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <main>
      <section className="border-b border-line bg-surface">
        <div className="container-omh section-md">
          <Reveal>
            <div className="grid grid-cols-12 items-end gap-x-12 gap-y-8 max-lg:block">
              <div className="col-span-7">
                <Eyebrow>Policy</Eyebrow>
                <h1 className="mt-7 max-w-[18ch] font-sans text-display font-semibold text-balance">
                  {doc.title}
                </h1>
                <p className="mt-6 max-w-[58ch] text-lead leading-relaxed text-ink/75">
                  {doc.intro}
                </p>
              </div>
              <div className="col-span-5 max-lg:mt-9">
                <div className="rounded-card border border-line bg-warm p-7 max-sm:p-6">
                  <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
                    In this document
                  </p>
                  <p className="mt-4 font-sans text-[44px] font-semibold leading-none tabular-nums text-amber-deep">
                    {String(doc.sections.length).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-body text-ink/70">sections, listed in the contents</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container-omh section-md grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
        <nav aria-label="Contents" className="col-span-3">
          <div className="lg:sticky lg:top-24">
            <p className="mb-4 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-muted">
              Contents
            </p>
            <ol className="border-t border-line">
              {doc.sections.map((section, i) => (
                <li key={section.heading} className="border-b border-line">
                  <a
                    href={`#${slug(section.heading)}`}
                    className="flex gap-3 py-2.5 text-[14.5px] leading-snug text-ink/70 transition-colors hover:text-amber-deep"
                  >
                    <span className="shrink-0 tabular-nums text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="col-span-9 max-lg:mt-10">
          {doc.sections.map((section, i) => (
            <section
              key={section.heading}
              id={slug(section.heading)}
              className="mt-14 max-w-[74ch] first:mt-0"
            >
              <h2 className="mb-5 font-sans text-h3 font-semibold">{section.heading}</h2>
              {section.body.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
