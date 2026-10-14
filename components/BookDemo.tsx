"use client";

import Link from "next/link";
import { useId, useMemo, useState, useSyncExternalStore, type ComponentProps, type FormEvent, type KeyboardEvent, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { Calendar, Check, Clock, MapPin, Phone, PhoneForwarded, PhoneIncoming } from "lucide-react";
import { ArrowRight } from "@/components/ui/Button";
import { demoTimes } from "@/lib/book-demo";
import { Honeypot, sendEnquiry } from "@/lib/send-enquiry";

/*
  The three ways to start from the AI voice agents page (ai-voice-agents-v5.html
  #book-demo): the tabs and their forms only, on the ink ground, with no heading,
  so it can sit under any page's closing CTA. Drop <BookDemo /> into a page.

  Book a demo: posts to /api/enquiry (stored + emailed, with the page it came
  from) and to /api/book-demo, which adds the slot to OMH's Google Calendar.
  Ring now: static until the demo line exists. Call back: posts to /api/enquiry.
*/

// ponytail: placeholder until the demo line exists; set both and the tab works.
const demoLine = { display: "[DEMO NUMBER]", href: "tel:" };

const paths = [
  { id: "call", icon: Calendar, badge: "Most popular", title: "Book a 30-minute demo", body: "Pick a time. We show you an agent set up for your calls." },
  { id: "ring", icon: PhoneIncoming, title: "Ring our demo agent now", body: "Hear one in action straight away, any time of day." },
  { id: "back", icon: PhoneForwarded, title: "Ask for a call back", body: "Leave your number and a good time. Takes 20 seconds." },
];
const industries = ["Estate & Letting Agents", "Dental Clinics", "Clinics & Healthcare", "Plumbers", "Heating & HVAC", "Contractors & Builders", "Law Firms", "Car Dealerships"];
const cities = ["London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Bristol", "Elsewhere in the UK"];
const onTheCall = ["Ask who rings you and what gets missed", "Play you an agent set up for your type of business", "Follow up with a clear price in writing"];
const thingsToTry = ["Book a boiler service for next week.", "Ask to speak to a person.", "Ask something it can't know, and hear how it handles it."];
const ringTimes = ["Morning", "Afternoon", "Evening"];

const messages: Record<string, string> = {
  "Your name": "Enter your name.",
  "Business name": "Enter your business name.",
  Industry: "Choose your industry.",
  "Where you're based": "Choose where you are based.",
  Phone: "Enter a UK phone number, for example 0161 496 0123.",
  Email: "Enter an email address, for example name@business.co.uk.",
  Consent: "Tick the box so we can contact you about the demo.",
};

const btnPrimary =
  "button-motion group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-button border-[1.5px] border-transparent bg-teal px-7 py-4 text-body font-semibold leading-none text-white hover:bg-teal-dark disabled:cursor-wait disabled:opacity-70";
const btnSecondary =
  "button-motion inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-button border-[1.5px] border-ink px-7 py-4 text-body font-semibold leading-none text-ink hover:bg-ink/5";
const slotCls =
  "flex cursor-pointer items-center justify-center rounded-[10px] border-[1.5px] border-line leading-tight transition-colors hover:border-ink/50 aria-checked:border-ink aria-checked:bg-ink aria-checked:text-surface";
const panelCls = "rounded-[20px] bg-surface text-ink dark:border dark:border-oninverse/12";

type Day = { iso: string; short: string; date: string; long: string };

// The five working days after `d`.
function nextWorkingDays(d: Date): Day[] {
  const days: Day[] = [];
  while (days.length < 5) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() % 6 === 0) continue;
    days.push({
      iso: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`,
      short: d.toLocaleDateString("en-GB", { weekday: "short" }),
      date: d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      long: d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }),
    });
  }
  return days;
}

const subscribeNever = () => () => {};

// Arrow keys move through a tablist or radiogroup, selecting as they go.
function roving(e: KeyboardEvent<HTMLButtonElement>, i: number, pick: (to: number) => void) {
  const step = ({ ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 } as Record<string, number>)[e.key];
  if (!step) return;
  e.preventDefault();
  const items = e.currentTarget.parentElement!.children;
  const to = (i + step + items.length) % items.length;
  pick(to);
  (items[to] as HTMLElement).focus();
}

type Checkable = HTMLInputElement | HTMLSelectElement;

function problem(el: Checkable) {
  const value = el.type === "checkbox" ? ((el as HTMLInputElement).checked ? "yes" : "") : el.value.trim();
  let ok = Boolean(value);
  if (ok && el.name === "Email") ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (ok && el.name === "Phone") ok = value.replace(/\D/g, "").length >= 10;
  return ok ? "" : messages[el.name];
}

// Checks every [data-check] control on submit, then re-checks a flagged one as it is fixed.
function useChecks() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  return {
    errors,
    validate(form: HTMLFormElement) {
      const fields = [...form.querySelectorAll<Checkable>("[data-check]")];
      const next = Object.fromEntries(fields.map((el) => [el.name, problem(el)]));
      setErrors(next);
      const bad = fields.find((el) => next[el.name]);
      bad?.focus();
      return !bad;
    },
    recheck(e: FormEvent<HTMLFormElement>) {
      const el = e.target as Checkable;
      if (errors[el.name]) setErrors((prev) => ({ ...prev, [el.name]: problem(el) }));
    },
  };
}

// Label, control and error. `name` is the label, so the enquiry email reads as the questions asked.
function Control({ label, error, options, ...props }: { label: string; error?: string; options?: string[] } & ComponentProps<"input">) {
  const id = useId();
  const shared = {
    id,
    name: label,
    required: true,
    "data-check": "",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-err` : undefined,
    className: `mt-1.5 min-h-12 w-full rounded-input border-[1.5px] bg-warm px-3.5 text-body text-ink ${error ? "border-error" : "border-line"}`,
  };
  return (
    <div>
      <label htmlFor={id} className="block text-label font-semibold">
        {label}
      </label>
      {options ? (
        <select {...shared} defaultValue="">
          <option value="">Choose one</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input {...shared} {...props} />
      )}
      {error && (
        <p id={`${id}-err`} className="mt-1 text-bsm font-semibold text-error">
          {error}
        </p>
      )}
    </div>
  );
}

function Radio({ checked, first, index, onPick, className, children }: { checked: boolean; first: boolean; index: number; onPick: (to: number) => void; className: string; children: ReactNode }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      tabIndex={checked || first ? 0 : -1}
      onClick={() => onPick(index)}
      onKeyDown={(e) => roving(e, index, onPick)}
      className={`${slotCls} ${className}`}
    >
      {children}
    </button>
  );
}

export function BookDemo() {
  const uid = useId();
  const [tab, setTab] = useState(0);

  // Book a demo
  // Read in the browser only: the page is static, so dates rendered on the
  // server would freeze at build time. The server snapshot is null (no days).
  const today = useSyncExternalStore(subscribeNever, () => new Date().toDateString(), () => null);
  const days = useMemo(() => (today ? nextWorkingDays(new Date(today)) : []), [today]);
  const [day, setDay] = useState<Day | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [slotError, setSlotError] = useState(false);
  const [who, setWho] = useState("Your business");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [doneName, setDoneName] = useState<string | null>(null);
  const booking = useChecks();

  // Call back
  const [when, setWhen] = useState(ringTimes[0]);
  const [cbSending, setCbSending] = useState(false);
  const [cbError, setCbError] = useState<string | null>(null);
  const [cbDone, setCbDone] = useState(false);
  const callback = useChecks();

  const slot = day && time ? `${day.long} at ${time}` : null;
  const summary = slot ?? (day ? `${day.long}, pick a time` : time ? `${time}, pick a day` : "Pick a day and time");
  const done = doneName !== null;

  async function submitBooking(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!day || !time || !booking.validate(form)) return;
    setSending(true);
    setSendError(null);
    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const [lead, calendar] = await Promise.all([
      sendEnquiry(form, "Demo booking"),
      fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: day.iso,
          time,
          name: field("Your name"),
          business: field("Business name"),
          industry: field("Industry"),
          city: field("Where you're based"),
          phone: field("Phone"),
          email: field("Email"),
          page: window.location.href,
          hp: field("hp"),
        }),
      }).then(
        (r) => r.ok,
        () => false,
      ),
    ]);
    setSending(false);
    // Either one landing means OMH has the request.
    if (!lead.ok && !calendar) return setSendError(lead.message);
    setDoneName(field("Your name").split(" ")[0]);
  }

  async function submitCallback(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!callback.validate(form)) return;
    setCbSending(true);
    setCbError(null);
    const result = await sendEnquiry(form, "Call back request");
    setCbSending(false);
    if (!result.ok) return setCbError(result.message);
    setCbDone(true);
  }

  const dot = (on: boolean) =>
    `grid size-7 place-items-center rounded-full ${on ? "bg-amber text-inverse" : "border-[1.5px] border-line"}`;

  return (
    <section aria-label="Book a demo" className="bg-inverse text-oninverse">
      <div className="container-omh">
        <div className="section-sm border-y border-oninverse/12">
          <div role="tablist" aria-label="How would you like to start?" className="grid gap-3 md:grid-cols-3">
            {paths.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                id={`${uid}-tab-${p.id}`}
                aria-controls={`${uid}-panel-${p.id}`}
                aria-selected={tab === i}
                tabIndex={tab === i ? 0 : -1}
                onClick={() => setTab(i)}
                onKeyDown={(e) => roving(e, i, setTab)}
                data-event={`book_demo_${p.id}_tab`}
                className="group flex cursor-pointer items-start gap-4 rounded-[16px] border border-oninverse/15 bg-oninverse/[0.04] p-5 text-left transition-colors hover:border-oninverse/40 aria-selected:border-amber aria-selected:shadow-[0_0_0_1px_var(--color-amber)]"
              >
                <span
                  aria-hidden
                  className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-amber/20 text-[#f2c675] group-aria-selected:bg-amber group-aria-selected:text-inverse"
                >
                  <p.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  {p.badge && (
                    <span className="mb-1.5 inline-block rounded-full bg-amber px-2.5 py-0.5 text-[14px] font-semibold text-inverse">
                      {p.badge}
                    </span>
                  )}
                  <span className="block font-sans text-[20px] font-semibold leading-tight">{p.title}</span>
                  <span className="mt-1 block text-body leading-snug text-oninverse/65">{p.body}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-5">
            {/* Book a demo */}
            <div
              role="tabpanel"
              id={`${uid}-panel-call`}
              aria-labelledby={`${uid}-tab-call`}
              hidden={tab !== 0}
              className={`${panelCls} grid overflow-hidden shadow-[0_40px_90px_-40px_rgb(0_0_0/0.7)] lg:grid-cols-[minmax(0,1.3fr)_minmax(0,.7fr)]`}
            >
              <form
                noValidate
                onSubmit={submitBooking}
                onChange={(e) => {
                  booking.recheck(e);
                  const f = e.currentTarget.elements;
                  const biz = (f.namedItem("Business name") as HTMLInputElement).value.trim();
                  const city = (f.namedItem("Where you're based") as HTMLSelectElement).value;
                  setWho(biz && city ? `${biz}, ${city}` : biz || city || "Your business");
                }}
                className="p-6 sm:p-8"
              >
                <ol aria-label="Progress" hidden={done} className="flex items-center gap-3 font-sans text-[16px] font-semibold">
                  <li className="flex items-center gap-2" aria-current={step === 1 ? "step" : undefined}>
                    <span className={dot(true)}>1</span>Pick a time
                  </li>
                  <li aria-hidden className="h-px w-8 bg-line" />
                  <li className={`flex items-center gap-2 ${step === 2 ? "" : "text-muted"}`} aria-current={step === 2 ? "step" : undefined}>
                    <span className={dot(step === 2)}>2</span>Your details
                  </li>
                </ol>

                <fieldset hidden={step !== 1 || done} className="mt-6">
                  <legend className="font-sans text-h4 font-semibold">When suits you?</legend>
                  <p className="mt-1 text-body text-muted">These are UK times. We&apos;ll confirm by email, or suggest another if it&apos;s taken.</p>

                  <p id={`${uid}-day`} className="mt-5 text-[14px] font-semibold text-muted">
                    Day
                  </p>
                  <div role="radiogroup" aria-labelledby={`${uid}-day`} className="mt-2 grid min-h-[60px] grid-cols-3 gap-2 sm:grid-cols-5">
                    {days.map((d, i) => (
                      <Radio key={d.iso} index={i} checked={day?.iso === d.iso} first={!day && i === 0} onPick={(to) => setDay(days[to])} className="min-h-[60px] flex-col">
                        <span className="text-[14px] font-semibold opacity-75">{d.short}</span>
                        <span className="font-sans text-[17px] font-semibold">{d.date}</span>
                      </Radio>
                    ))}
                  </div>

                  <p id={`${uid}-time`} className="mt-5 text-[14px] font-semibold text-muted">
                    Time
                  </p>
                  <div role="radiogroup" aria-labelledby={`${uid}-time`} className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {demoTimes.map((t, i) => (
                      <Radio key={t} index={i} checked={time === t} first={!time && i === 0} onPick={(to) => setTime(demoTimes[to])} className="min-h-12 font-sans text-[17px] font-semibold tabular-nums">
                        {t}
                      </Radio>
                    ))}
                  </div>

                  {slotError && !slot && (
                    <p role="alert" className="mt-3 text-bsm font-semibold text-error">
                      Pick a day and a time to carry on.
                    </p>
                  )}
                  <button
                    type="button"
                    data-next=""
                    data-event="book_demo_next"
                    onClick={(e) => {
                      if (!slot) return setSlotError(true);
                      const form = e.currentTarget.form!;
                      flushSync(() => setStep(2));
                      (form.elements.namedItem("Your name") as HTMLInputElement).focus();
                    }}
                    className={`${btnPrimary} mt-7 max-sm:w-full`}
                  >
                    Next: your details
                    <ArrowRight className="size-4" />
                  </button>
                </fieldset>

                <fieldset hidden={step !== 2 || done} className="mt-6">
                  <legend className="font-sans text-h4 font-semibold">Who should we speak to?</legend>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <Control label="Your name" autoComplete="name" error={booking.errors["Your name"]} />
                    <Control label="Business name" autoComplete="organization" error={booking.errors["Business name"]} />
                    <Control label="Industry" options={industries} error={booking.errors.Industry} />
                    <Control label="Where you're based" options={cities} error={booking.errors["Where you're based"]} />
                    <Control label="Phone" type="tel" inputMode="tel" autoComplete="tel" error={booking.errors.Phone} />
                    <Control label="Email" type="email" autoComplete="email" error={booking.errors.Email} />
                  </div>
                  <label className="mt-5 flex items-start gap-3 text-body leading-snug text-muted">
                    <input
                      type="checkbox"
                      name="Consent"
                      value="Yes"
                      required
                      data-check=""
                      aria-invalid={booking.errors.Consent ? true : undefined}
                      aria-describedby={booking.errors.Consent ? `${uid}-consent-err` : undefined}
                      className="mt-1 size-5 shrink-0 accent-[#b97822]"
                    />
                    <span>
                      I&apos;m happy for OMH to contact me about this demo. See our{" "}
                      <Link href="/privacy" className="font-semibold text-ink underline decoration-amber decoration-2 underline-offset-2">
                        privacy policy
                      </Link>
                      .
                    </span>
                  </label>
                  {booking.errors.Consent && (
                    <p id={`${uid}-consent-err`} className="mt-1 text-bsm font-semibold text-error">
                      {booking.errors.Consent}
                    </p>
                  )}
                  {/* What the enquiry email shows as the requested slot. */}
                  <input type="hidden" name="Demo time" value={slot ? `${slot} (UK time)` : ""} />
                  <Honeypot />
                  {sendError && (
                    <p role="alert" className="mt-5 text-bsm font-semibold text-error">
                      {sendError}
                    </p>
                  )}
                  <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      data-event="book_demo_back"
                      onClick={(e) => {
                        const form = e.currentTarget.form!;
                        flushSync(() => setStep(1));
                        form.querySelector<HTMLButtonElement>("[data-next]")?.focus();
                      }}
                      className={btnSecondary}
                    >
                      <ArrowRight className="size-4 rotate-180" />
                      Back
                    </button>
                    <button type="submit" disabled={sending} data-event="book_demo_submit" className={`${btnPrimary} sm:flex-1`}>
                      {sending ? "Sending…" : "Request this demo"}
                    </button>
                  </div>
                </fieldset>

                {done && (
                  <div ref={(el) => el?.focus()} tabIndex={-1} role="status" className="py-6 text-center outline-none">
                    <span aria-hidden className="mx-auto grid size-16 place-items-center rounded-full bg-success text-white">
                      <Check className="size-8" />
                    </span>
                    <h3 className="mt-5 font-sans text-h3 font-semibold">{doneName ? `Thanks, ${doneName}, request sent` : "Request sent"}</h3>
                    <p className="mt-2 text-body text-muted">
                      We&apos;ll email to confirm <strong className="font-semibold text-ink">{slot}</strong> within one working day.
                    </p>
                  </div>
                )}
              </form>

              <aside aria-label="Your demo" className="border-t border-line bg-warm p-6 sm:p-8 lg:border-l lg:border-t-0">
                <p className="font-sans text-[20px] font-semibold">Your demo</p>
                <div aria-live="polite" className="mt-4 rounded-[14px] border border-line bg-surface p-4">
                  <p className="flex items-center gap-2 text-body font-semibold">
                    <Calendar aria-hidden className="size-5 shrink-0 text-amber-deep" />
                    {summary}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-body text-muted">
                    <Clock aria-hidden className="size-5 shrink-0 text-amber-deep" />
                    30 minutes, by video or phone
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-body text-muted">
                    <MapPin aria-hidden className="size-5 shrink-0 text-amber-deep" />
                    {who}
                  </p>
                </div>
                <p className="mt-6 font-sans text-[18px] font-semibold">On the call we</p>
                <ul className="mt-2 space-y-2 text-body leading-snug">
                  {onTheCall.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-amber-deep" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            {/* Ring the demo agent */}
            <div role="tabpanel" id={`${uid}-panel-ring`} aria-labelledby={`${uid}-tab-ring`} hidden={tab !== 1} className={`${panelCls} p-6 sm:p-10`}>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-sans text-h3 font-semibold">Ring it from any phone</h3>
                  <p className="mt-2 text-body text-muted">
                    It&apos;s set up as a fictional heating company in Leeds and answers day and night. Standard call rates apply.
                  </p>
                  <a
                    href={demoLine.href}
                    data-event="book_demo_ring_click"
                    className="mt-6 flex min-h-16 items-center justify-center gap-3 rounded-[14px] bg-amber px-5 font-sans text-[clamp(1.3rem,1.1rem+1vw,1.75rem)] font-semibold text-inverse tabular-nums"
                  >
                    <Phone aria-hidden className="size-6" />
                    {demoLine.display}
                  </a>
                </div>
                <div className="rounded-[16px] bg-warm p-5">
                  <p className="font-sans text-[18px] font-semibold">Three things to try</p>
                  <ol className="mt-3 space-y-3 text-body leading-snug">
                    {thingsToTry.map((t, i) => (
                      <li key={t} className="flex gap-3">
                        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface text-[14px] font-semibold text-amber-deep">{i + 1}</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Call back */}
            <div role="tabpanel" id={`${uid}-panel-back`} aria-labelledby={`${uid}-tab-back`} hidden={tab !== 2} className={`${panelCls} p-6 sm:p-10`}>
              <div className="grid items-start gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-sans text-h3 font-semibold">We&apos;ll ring you</h3>
                  <p className="mt-2 text-body text-muted">A person from our UK team, not a robot. We&apos;ll ring within one working day.</p>
                </div>
                <form noValidate onSubmit={submitCallback} onChange={callback.recheck}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Control label="Your name" autoComplete="name" error={callback.errors["Your name"]} />
                    <Control label="Phone" type="tel" inputMode="tel" autoComplete="tel" error={callback.errors.Phone} />
                  </div>
                  <p id={`${uid}-when`} className="mt-5 text-label font-semibold">
                    Best time to ring
                  </p>
                  <div role="radiogroup" aria-labelledby={`${uid}-when`} className="mt-2 grid grid-cols-3 gap-2">
                    {ringTimes.map((t, i) => (
                      <Radio key={t} index={i} checked={when === t} first={false} onPick={(to) => setWhen(ringTimes[to])} className="min-h-12 font-sans text-[17px] font-semibold">
                        {t}
                      </Radio>
                    ))}
                  </div>
                  <input type="hidden" name="Best time to ring" value={when} />
                  <Honeypot />
                  {cbError && (
                    <p role="alert" className="mt-5 text-bsm font-semibold text-error">
                      {cbError}
                    </p>
                  )}
                  {cbDone ? (
                    <p ref={(el) => el?.focus()} tabIndex={-1} role="status" className="mt-7 text-center text-body font-semibold text-success outline-none">
                      Thanks. We&apos;ll ring you in the {when.toLowerCase()}.
                    </p>
                  ) : (
                    <button type="submit" disabled={cbSending} data-event="book_demo_callback_submit" className={`${btnPrimary} mt-7 w-full`}>
                      {cbSending ? "Sending…" : "Ring me back"}
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
