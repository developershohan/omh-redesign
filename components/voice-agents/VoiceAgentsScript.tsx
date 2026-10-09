"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/*
  Behaviour for the AI voice agents page, also used by the AI services page,
  which shares its design. The markup arrives as HTML (lib/content/
  ai-voice-agents-markup.ts, lib/content/ai-services-markup.ts), so this finds
  each widget by its data-* hooks inside #va-page, as the original design
  file's script did. Each widget is skipped when its page doesn't have it. The
  site header replaces the file's own theme toggle and mobile menu.

  Everything it starts (listeners, timers, observers) is torn down on unmount,
  so leaving the page by client-side navigation leaves nothing running.
*/

type DataLayerWindow = Window & { dataLayer?: unknown[] };

export function VoiceAgentsScript() {
  const router = useRouter();

  useEffect(() => {
    const page = document.getElementById("va-page");
    if (!page) return;
    return init(page, (href) => router.push(href));
  }, [router]);

  return null;
}

function init(page: HTMLElement, navigate: (href: string) => void) {
  const cleanups: (() => void)[] = [];
  const timers = new Set<number>();

  const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = page) => root.querySelector(sel) as T;
  const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = page) =>
    Array.from(root.querySelectorAll<T>(sel)) as T[];

  function on<K extends keyof HTMLElementEventMap>(
    target: EventTarget,
    type: K | string,
    fn: (e: HTMLElementEventMap[K]) => void,
    opts?: AddEventListenerOptions | boolean,
  ) {
    target.addEventListener(type, fn as EventListener, opts);
    cleanups.push(() => target.removeEventListener(type, fn as EventListener, opts));
  }
  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(() => {
      timers.delete(id);
      fn();
    }, ms);
    timers.add(id);
    return id;
  };
  const every = (fn: () => void, ms: number) => {
    const id = window.setInterval(fn, ms);
    timers.add(id);
    return id;
  };
  const observe = (fn: IntersectionObserverCallback, opts?: IntersectionObserverInit) => {
    const io = new IntersectionObserver(fn, opts);
    cleanups.push(() => io.disconnect());
    return io;
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const gbp = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
  const num = new Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 });

  /* ---------------------------------------------------------- Analytics */
  function track(event: string, detail?: Record<string, unknown>) {
    const payload = Object.assign({ event }, detail || {});
    const dl = (window as DataLayerWindow).dataLayer;
    if (Array.isArray(dl)) dl.push(payload);
    return payload;
  }

  function trackDetail(el: HTMLElement) {
    const detail: Record<string, unknown> = {};
    if (el.dataset.trackName) detail.name = el.dataset.trackName;
    const section = el.closest<HTMLElement>("[data-component]");
    if (section) detail.component = section.dataset.component;
    if (el instanceof HTMLInputElement) {
      detail.value = el.type === "checkbox" || el.type === "radio" ? (el.checked ? el.value : "") : el.value;
    } else if (el instanceof HTMLSelectElement) {
      detail.value = el.value;
      const opt = el.selectedOptions[0];
      if (opt) detail.name = opt.dataset.name || opt.text;
    }
    if (el.hasAttribute("aria-pressed")) detail.pressed = el.getAttribute("aria-pressed");
    if (el.hasAttribute("aria-checked")) detail.checked = el.getAttribute("aria-checked");
    return detail;
  }

  function initTracking() {
    on(page, "click", (e) => {
      const el = (e.target as Element).closest<HTMLElement>("[data-track]");
      if (!el || el.matches("input, select, details")) return;
      // Defer so components can update their state before it is read.
      later(() => track(el.dataset.track!, trackDetail(el)), 0);
    });
    on(page, "change", (e) => {
      const el = (e.target as Element).closest<HTMLElement>("input[data-track], select[data-track]");
      if (el) track(el.dataset.track!, trackDetail(el));
    });
    let ready = false; // Ignore the toggle fired for items that are open on load.
    later(() => (ready = true), 500);
    on(
      page,
      "toggle",
      (e) => {
        const el = e.target as HTMLDetailsElement;
        if (!ready || !el.matches?.("details")) return;
        const name = el.dataset.track || (el.matches("[data-faq-item]") ? "faq_toggle" : "");
        if (name) track(name, { name: el.dataset.trackName || "", open: el.open });
      },
      true,
    );
  }

  /* ------------------------------------------- In-site links, no reload */
  function initLinks() {
    on(page, "click", (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest<HTMLAnchorElement>("a[href^='/']");
      if (!a || a.target || a.hasAttribute("download")) return;
      e.preventDefault();
      navigate(a.getAttribute("href")!);
    });
  }

  /* ---------------------------------------------------------- Hero call */
  function initHeroCall() {
    const root = $("[data-call-demo]");
    if (!root) return;
    const items = $$("[data-call-line], [data-call-outcome]", root);
    const timerEl = $("[data-call-timer]", root);
    const status = $("[data-call-status]", root);
    const toggle = $("[data-call-toggle]", root);
    const toggleLabel = $("[data-call-toggle-label]", root);
    const replay = $("[data-call-replay]", root);
    if (reduceMotion.matches) return; // The finished call is shown as static content.

    const TOTAL = 31; // seconds shown on the call timer when the call ends
    let step = 0,
      elapsed = 0,
      playing = false,
      stepTimer = 0,
      clock = 0,
      started = false;
    const delays = items.map((el) =>
      el.hasAttribute("data-call-outcome") ? 650 : Math.min(3000, 1100 + (el.textContent?.length ?? 0) * 16),
    );

    const fmt = (s: number) => "00:" + String(Math.min(s, TOTAL)).padStart(2, "0");
    function setPlaying(isOn: boolean) {
      playing = isOn;
      const speaking = isOn && step < items.length && step > 0 && items[step - 1].hasAttribute("data-call-line");
      status.classList.toggle("is-speaking", speaking);
      toggle.hidden = step >= items.length;
      replay.hidden = step < items.length;
      toggleLabel.textContent = isOn ? "Pause" : "Play";
      $("use", toggle).setAttribute("href", isOn ? "#i-pause" : "#i-play");
      toggle.dataset.track = isOn ? "hero_call_pause" : "hero_call_play";
      clearInterval(clock);
      if (isOn)
        clock = every(() => {
          elapsed += 1;
          timerEl.textContent = fmt(elapsed);
        }, 1000);
    }
    function next() {
      if (step >= items.length) {
        finish();
        return;
      }
      items[step].classList.add("is-shown");
      step += 1;
      setPlaying(true);
      stepTimer = later(next, delays[step - 1]);
    }
    function finish() {
      clearTimeout(stepTimer);
      setPlaying(false);
      timerEl.textContent = fmt(TOTAL);
    }
    function reset() {
      clearTimeout(stepTimer);
      step = 0;
      elapsed = 0;
      items.forEach((el) => el.classList.remove("is-shown"));
      timerEl.textContent = fmt(0);
    }
    function start() {
      reset();
      root.classList.add("is-animated");
      stepTimer = later(next, 500);
      setPlaying(true);
    }

    on(toggle, "click", () => {
      if (playing) {
        clearTimeout(stepTimer);
        setPlaying(false);
      } else {
        setPlaying(true);
        stepTimer = later(next, 300);
      }
    });
    on(replay, "click", () => {
      start();
      toggle.focus();
    });

    const io = observe(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            start();
            io.disconnect();
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(root);
    // Stop the animation if the visitor switches to reduced motion mid-call.
    on(reduceMotion, "change", (e) => {
      if (!(e as unknown as MediaQueryListEvent).matches) return;
      clearTimeout(stepTimer);
      clearInterval(clock);
      root.classList.remove("is-animated");
      status.classList.remove("is-speaking");
      toggle.hidden = true;
      replay.hidden = true;
      timerEl.textContent = fmt(TOTAL);
    });
  }

  /* ----------------------------------------------------------- Call log */
  function initLedger() {
    const root = $("[data-ledger]");
    if (!root) return;
    const inputs = $$<HTMLInputElement>("[data-ledger-input]", root);
    const rows = $$("[data-ledger-row]", root);
    const answered = $("[data-ledger-answered]", root);
    const booked = $("[data-ledger-booked]", root);
    const totals: Record<string, [number, number]> = {
      without: [0, 0],
      with: [rows.length, $$('[data-ledger-with] .icon use[href="#i-calendar"]', root).length],
    };
    let pending: number[] = [];
    let touched = false;

    function setTotals(mode: string) {
      answered.textContent = String(totals[mode][0]);
      booked.textContent = String(totals[mode][1]);
    }
    function apply(mode: string, animate: boolean) {
      pending.forEach(clearTimeout);
      pending = [];
      root.dataset.mode = mode;
      const swap = (row: HTMLElement) => {
        $("[data-ledger-without]", row).hidden = mode === "with";
        $("[data-ledger-with]", row).hidden = mode !== "with";
      };
      if (animate && !reduceMotion.matches) {
        rows.forEach((row, i) => {
          pending.push(
            later(() => {
              const cell = $(".ledger-status", row);
              cell.style.opacity = "0";
              pending.push(
                later(() => {
                  swap(row);
                  cell.style.opacity = "1";
                }, 160),
              );
            }, i * 130),
          );
        });
        pending.push(later(() => setTotals(mode), rows.length * 130 + 160));
      } else {
        rows.forEach(swap);
        setTotals(mode);
      }
    }
    inputs.forEach((input) => {
      on(input, "change", () => {
        if (input.checked) {
          touched = true;
          apply(input.value, true);
        }
      });
    });

    // Play the switch once when the log scrolls into view, unless the visitor got there first.
    if (!reduceMotion.matches) {
      const io = observe(
        (entries) => {
          if (!entries[0].isIntersecting) return;
          io.disconnect();
          later(() => {
            if (touched) return;
            const withInput = inputs.find((i) => i.value === "with");
            if (!withInput) return;
            withInput.checked = true;
            apply("with", true);
          }, 1400);
        },
        { threshold: 0.6 },
      );
      io.observe(root);
    }
  }

  function youtubeFrame(id: string, title: string) {
    const frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0";
    frame.title = title;
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.className = "absolute inset-0 h-full w-full";
    return frame;
  }

  /* ------------------------------------------------------- Video facade */
  function initVideoFacade() {
    $$("[data-video]").forEach((box) => {
      const btn = $("[data-video-play]", box);
      const fallback = $("[data-video-fallback]", box);
      on(btn, "click", () => {
        const id = box.dataset.videoId || "";
        if (!/^[\w-]{6,}$/.test(id)) {
          // No real video ID yet.
          btn.hidden = true;
          fallback.hidden = false;
          fallback.setAttribute("tabindex", "-1");
          fallback.focus();
          return;
        }
        const frame = youtubeFrame(id, box.dataset.videoTitle || "Video");
        frame.setAttribute("loading", "lazy");
        box.innerHTML = "";
        box.appendChild(frame);
        frame.focus();
      });
    });
  }

  /* ---------------------------------------------------------- Video pop-up */
  function initVideoModal() {
    const dialog = $<HTMLDialogElement>("[data-video-modal]");
    if (!dialog || typeof dialog.showModal !== "function") return;
    const title = $("[data-video-modal-title]", dialog);
    const meta = $("[data-video-modal-meta]", dialog);
    const player = $("[data-video-modal-player]", dialog);
    const close = $("[data-video-modal-close]", dialog);
    let opener: HTMLElement | null = null;

    function open(btn: HTMLElement) {
      opener = btn;
      const id = btn.dataset.videoId || "";
      title.textContent = btn.dataset.videoTitle || "Video testimonial";
      meta.textContent = btn.dataset.videoMeta || "";
      player.innerHTML = "";
      if (/^[\w-]{6,}$/.test(id)) {
        player.appendChild(youtubeFrame(id, btn.dataset.videoTitle || "Video testimonial"));
      } else {
        const note = document.createElement("div");
        note.className = "absolute inset-0 grid place-items-center p-6 text-center";
        note.innerHTML =
          '<div><p class="font-display text-[22px] font-semibold">This video is on its way</p>' +
          '<p class="mx-auto mt-2 max-w-[30rem] text-[16.5px] text-band-muted">It will go live once we have verified this client\'s results. Until then, ring our demo agent to hear one for yourself.</p></div>';
        player.appendChild(note);
      }
      dialog.showModal();
      close.focus();
    }

    $$("[data-video-modal-open]").forEach((btn) => on(btn, "click", () => open(btn)));
    on(close, "click", () => dialog.close());
    // A click on the dimmed backdrop (the dialog element itself) closes it.
    on(dialog, "click", (e) => {
      if (e.target === dialog) dialog.close();
    });
    on(dialog, "close", () => {
      player.innerHTML = ""; // Stops playback.
      opener?.focus();
    });
    cleanups.push(() => dialog.open && dialog.close());
  }

  /* ---------------------------------------------------- Industry filter */
  function initIndustryFilter() {
    const bar = $("[data-industry-filters]");
    if (!bar) return;
    const buttons = $$("[data-filter]", bar);
    const cards = $$("[data-industry]");
    const count = $("[data-industry-count]");
    on(bar, "click", (e) => {
      const btn = (e.target as Element).closest<HTMLElement>("[data-filter]");
      if (!btn) return;
      const group = btn.dataset.filter;
      let shown = 0;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      cards.forEach((card) => {
        const match = group === "all" || card.dataset.group === group;
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (count) count.textContent = "Showing " + shown + (shown === 1 ? " industry" : " industries");
    });
  }

  // Arrow-key movement shared by the tab lists and radio-style button groups.
  function arrowTarget(e: KeyboardEvent, i: number, length: number, homeEnd = false) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") return (i + 1) % length;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") return (i - 1 + length) % length;
    if (homeEnd && e.key === "Home") return 0;
    if (homeEnd && e.key === "End") return length - 1;
    return null;
  }

  /* --------------------------------------------------------------- Tabs */
  function initTabs() {
    $$("[data-tabs]").forEach((root) => {
      const tabs = $$("[data-tab]", root);
      const panels = $$("[data-tab-panel]", root);
      function select(i: number, focus: boolean) {
        tabs.forEach((tab, n) => {
          tab.setAttribute("aria-selected", String(n === i));
          tab.tabIndex = n === i ? 0 : -1;
          panels[n].hidden = n !== i;
        });
        if (focus) tabs[i].focus();
      }
      tabs.forEach((tab, i) => {
        on(tab, "click", () => select(i, false));
        on(tab, "keydown", (e) => {
          const to = arrowTarget(e as KeyboardEvent, i, tabs.length, true);
          if (to === null) return;
          e.preventDefault();
          select(to, true);
        });
      });
    });
  }

  /* ---------------------------------------------------------- Call flows */
  function initFlows() {
    $$("[data-flow-wrap]").forEach((wrap) => {
      const caption = $("[data-flow-caption-text]", wrap);
      const holder = $("[data-flow-caption]", wrap);
      let pinned: HTMLElement | null = null;
      function trace(svg: Element, id: string | null) {
        const nodes = $$("[data-flow-node]", svg);
        const edges = $$("[data-flow-edge]", svg);
        svg.classList.toggle("is-tracing", !!id);
        nodes.forEach((n) => n.classList.remove("is-lit", "is-on"));
        edges.forEach((edge) => edge.classList.remove("is-lit"));
        if (!id) return;
        const lit: Record<string, boolean> = { [id]: true };
        edges.forEach((edge) => {
          if (edge.dataset.from === id || edge.dataset.to === id) {
            edge.classList.add("is-lit");
            lit[edge.dataset.from!] = true;
            lit[edge.dataset.to!] = true;
          }
        });
        nodes.forEach((n) => {
          if (lit[n.dataset.flowNode!]) n.classList.add("is-lit");
          if (n.dataset.flowNode === id) n.classList.add("is-on");
        });
      }
      function show(node: HTMLElement | null) {
        $$("[data-flow]", wrap).forEach((svg) => trace(svg, node ? node.dataset.flowNode! : null));
        caption.textContent = node ? node.dataset.detail! : pinned ? pinned.dataset.detail! : holder.dataset.default!;
      }
      $$("[data-flow-node]", wrap).forEach((node) => {
        on(node, "mouseenter", () => show(node));
        on(node, "focus", () => show(node));
        on(node, "mouseleave", () => show(pinned));
        on(node, "blur", () => show(pinned));
        function pick() {
          pinned = pinned && pinned.dataset.flowNode === node.dataset.flowNode ? null : node;
          show(pinned || node);
          track("solution_flow_step", { name: node.getAttribute("aria-label"), component: "Solutions" });
        }
        on(node, "click", pick);
        on(node, "keydown", (e) => {
          const key = (e as KeyboardEvent).key;
          if (key === "Enter" || key === " ") {
            e.preventDefault();
            pick();
          }
        });
      });
    });
  }

  /* -------------------------------------------------------- Tone switch */
  function initToneSwitch() {
    $$("[data-tone]").forEach((root) => {
      const buttons = $$("[data-tone-btn]", root);
      const texts = $$("[data-tone-text]", root);
      buttons.forEach((btn) => {
        on(btn, "click", () => {
          buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
          texts.forEach((t) => (t.hidden = t.dataset.toneText !== btn.dataset.toneBtn));
        });
      });
    });
  }

  /* ----------------------------------------------------- Pricing toggle */
  function initPricingToggle() {
    const root = $("[data-pricing]");
    if (!root) return;
    const toggle = $("[data-billing-toggle]", root);
    function set(annual: boolean) {
      const mode = annual ? "annual" : "monthly";
      root.dataset.billing = mode;
      toggle.setAttribute("aria-checked", String(annual));
      $$("[data-price]", root).forEach((el) => (el.textContent = el.dataset[mode] ?? ""));
      $$("[data-billing-note]", root).forEach((el) => (el.textContent = el.dataset[mode + "Text"] ?? ""));
      $$("[data-billing-label]", root).forEach((el) => el.classList.toggle("text-muted", el.dataset.billingLabel !== mode));
    }
    on(toggle, "click", () => set(toggle.getAttribute("aria-checked") !== "true"));
  }

  /* --------------------------------------------------------- Calculator */
  function initCalculator() {
    const root = $("[data-calc]");
    if (!root) return;
    const field = (name: string) => $<HTMLInputElement>('[data-calc-input="' + name + '"]', root);
    const out = (name: string) => $('[data-calc-result="' + name + '"]', root);
    const industry = $<HTMLSelectElement>("[data-calc-industry]", root);
    const message = $("[data-calc-message]", root);
    const netLabel = $("[data-calc-net-label]", root);
    let invalid = false;

    // Returns a safe number, and flags the field when the entry is unusable.
    function read(name: string, max: number) {
      const el = field(name);
      const err = $('[data-calc-error="' + name + '"]', root);
      const raw = el.value.trim();
      const value = Number(raw);
      const bad = raw === "" || !isFinite(value) || value < 0;
      if (err) {
        err.hidden = !bad;
        el.setAttribute("aria-invalid", String(bad));
      }
      if (bad) {
        invalid = true;
        return 0;
      }
      return Math.min(value, max);
    }

    function update() {
      invalid = false;
      const calls = Math.round(read("calls", 100000));
      const value = read("value", 1000000);
      const plan = read("plan", 100000);
      const missedPct = read("missed", 100);
      const convPct = read("conv", 100);
      $('[data-calc-output="missed"]', root).textContent = missedPct + "%";
      $('[data-calc-output="conv"]', root).textContent = convPct + "%";

      const missedCalls = Math.round((calls * missedPct) / 100);
      const lost = missedCalls * (convPct / 100) * value;
      const net = lost - plan;

      out("missedCalls").textContent = num.format(missedCalls);
      out("lost").textContent = gbp.format(lost);
      out("net").textContent = (net < 0 ? "−" : "") + gbp.format(Math.abs(net));
      netLabel.textContent = net < 0 ? "Shortfall after plan cost" : "Net gain after plan cost";

      if (invalid) {
        message.textContent =
          "One of your entries is not a usable number, so we have counted it as zero. Correct the highlighted field to see your result.";
      } else if (lost === 0) {
        message.textContent =
          "On these numbers you are not losing revenue to missed calls. A voice agent may still save your team time, but it would not pay for itself this way.";
      } else if (net < 0) {
        message.textContent =
          "On these numbers the plan would cost more than the revenue it recovers. That is worth knowing before you buy, and we would say the same on a call.";
      } else {
        message.textContent =
          "If the agent answered those calls and they converted at your rate, it would cover its monthly cost about " +
          (plan > 0 ? num.format(Math.floor(lost / plan)) + " times over." : "many times over.");
        if (plan > 0 && lost / plan < 2)
          message.textContent =
            "The agent would roughly cover its own cost on these numbers. The margin is thin, so check your figures with us before deciding.";
      }

      const top = Math.max(lost, plan, 1);
      $('[data-calc-bar="lost"]', root).style.width = Math.round((lost / top) * 78) + "%";
      $('[data-calc-bar="plan"]', root).style.width = Math.round((plan / top) * 78) + "%";
      $('[data-calc-bar-label="lost"]', root).textContent = gbp.format(lost);
      $('[data-calc-bar-label="plan"]', root).textContent = gbp.format(plan);
      $("[data-calc-chart]", root).setAttribute(
        "aria-label",
        "Monthly lost revenue " + gbp.format(lost) + " compared with a monthly plan cost of " + gbp.format(plan),
      );
    }

    on(industry, "change", () => {
      field("value").value = industry.value;
      update();
    });
    $$("[data-calc-input]", root).forEach((el) => on(el, "input", update));
    on($("[data-calc-form]", root), "submit", (e) => e.preventDefault());
    update();
  }

  /* ----------------------------------------------------------- Area map */
  function initAreaMap() {
    const root = $("[data-area-map]");
    if (!root) return;
    const cards = $$("[data-city]", root);
    function set(slug: string | null) {
      $$("[data-map-pin]", root).forEach((pin) => pin.classList.toggle("is-active", pin.dataset.mapPin === slug));
      cards.forEach((card) => card.classList.toggle("is-active", card.dataset.city === slug));
    }
    cards.forEach((card) => {
      on(card, "mouseenter", () => set(card.dataset.city!));
      on(card, "focusin", () => set(card.dataset.city!));
    });
    on(root, "mouseleave", () => set(null));
    on(root, "focusout", (e) => {
      if (!root.contains((e as FocusEvent).relatedTarget as Node)) set(null);
    });
  }

  /* ------------------------------------------------------ Billing slider */
  function initBilling() {
    const root = $("[data-bill]");
    if (!root) return;
    const price = Number(root.dataset.billPrice),
      included = Number(root.dataset.billIncluded);
    const rate = Number(root.dataset.billRate),
      max = Number(root.dataset.billMax);
    const input = $<HTMLInputElement>("[data-bill-input]", root);
    const pounds = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });
    const set = (sel: string, text: string) => ($(sel, root).textContent = text);
    function update() {
      const used = Number(input.value);
      const extra = Math.max(0, used - included);
      const extraCost = Math.round(extra * rate * 100) / 100;
      const subtotal = price + extraCost;
      const vat = Math.round(subtotal * 20) / 100;
      const total = subtotal + vat;
      set("[data-bill-output]", num.format(used) + " min");
      set("[data-bill-used]", num.format(used));
      set("[data-bill-extra]", num.format(extra));
      set("[data-bill-extra-cost]", pounds.format(extraCost));
      set("[data-bill-vat]", pounds.format(vat));
      set("[data-bill-total]", pounds.format(total));
      $("[data-bill-bar-in]", root).style.width = (Math.min(used, included) / max) * 100 + "%";
      const over = $("[data-bill-bar-over]", root);
      over.style.left = (included / max) * 100 + "%";
      over.style.width = (extra / max) * 100 + "%";
      set(
        "[data-bill-summary]",
        extra > 0
          ? num.format(extra) +
              " minutes over your plan adds " +
              pounds.format(extraCost) +
              " before VAT. Total " +
              pounds.format(total) +
              " including VAT."
          : "Within your " +
              num.format(included) +
              " included minutes, so you pay the plan price only: " +
              pounds.format(total) +
              " including VAT.",
      );
    }
    on(input, "input", update);
    update();
  }

  /* ---------------------------------------------------- Branding builder */
  type Biz = {
    id: string;
    name: string;
    agent: string;
    kind: string;
    num: string;
    city: string;
    initials: string;
    voice: string;
    never: string;
    transfer: string;
  };
  function initBrandBuilder() {
    const root = $("[data-brand]");
    if (!root) return;
    const biz = JSON.parse(root.dataset.brandBiz!) as Biz[];
    const state: Record<string, string> = { biz: biz[0].id, tone: "warm" };
    let typing = 0,
      clock = 0;
    function greet(b: Biz, t: string) {
      if (t === "brisk") return b.name + ", " + b.agent + " speaking. I'm the " + b.kind + " AI assistant. What can I do for you?";
      if (t === "formal")
        return "Good morning. You have reached " + b.name + ". I am " + b.agent + ", the " + b.kind + " AI assistant. How may I direct your call?";
      return "Good morning, " + b.name + ". I'm " + b.agent + ", the " + b.kind + " AI assistant. How can I help you today?";
    }
    const set = (sel: string, text: string) => ($(sel, root).textContent = text);
    function speak(text: string) {
      const out = $("[data-brand-greeting]", root);
      clearInterval(typing);
      clearInterval(clock);
      set("[data-brand-live]", text);
      if (reduceMotion.matches) {
        out.textContent = text;
        root.classList.remove("is-speaking");
        return;
      }
      let i = 0,
        secs = 0;
      out.textContent = "";
      set("[data-brand-timer]", "00:00");
      root.classList.add("is-speaking");
      clock = every(() => {
        secs += 1;
        set("[data-brand-timer]", "00:" + String(secs).padStart(2, "0"));
      }, 1000);
      typing = every(() => {
        i += 2;
        out.textContent = text.slice(0, i);
        if (i >= text.length) {
          clearInterval(typing);
          clearInterval(clock);
          root.classList.remove("is-speaking");
        }
      }, 32);
    }
    function render(animate: boolean) {
      const b = biz.find((x) => x.id === state.biz)!;
      set("[data-brand-name]", b.name);
      set("[data-brand-num]", b.num);
      set("[data-brand-city]", b.city);
      set("[data-brand-initials]", b.initials);
      set("[data-brand-agent]", b.agent);
      set("[data-brand-voice]", b.voice);
      set("[data-brand-never]", b.never);
      set("[data-brand-transfer]", b.transfer);
      const text = greet(b, state.tone);
      if (animate) speak(text);
      else set("[data-brand-greeting]", text);
    }
    $$("[data-brand-group]", root).forEach((group) => {
      const opts = $$("[data-brand-opt]", group);
      function choose(btn: HTMLElement, focus: boolean) {
        opts.forEach((o) => {
          const isOn = o === btn;
          o.setAttribute("aria-checked", String(isOn));
          o.tabIndex = isOn ? 0 : -1;
        });
        state[group.dataset.brandGroup!] = btn.dataset.brandOpt!;
        if (focus) btn.focus();
        render(true);
      }
      opts.forEach((btn, i) => {
        on(btn, "click", () => choose(btn, false));
        on(btn, "keydown", (e) => {
          const to = arrowTarget(e as KeyboardEvent, i, opts.length);
          if (to === null) return;
          e.preventDefault();
          choose(opts[to], true);
        });
      });
    });
    on($("[data-brand-replay]", root), "click", () => render(true));
    // Play the greeting once when the phone first scrolls into view.
    if (!reduceMotion.matches) {
      const io = observe(
        (entries) => {
          if (entries[0].isIntersecting) {
            io.disconnect();
            render(true);
          }
        },
        { threshold: 0.5 },
      );
      io.observe($(".brand-phone", root));
    }
  }

  /* ---------------------------------------------------------- Fit check */
  function initFitCheck() {
    const root = $("[data-fit]");
    if (!root) return;
    const form = $<HTMLFormElement>("[data-fit-form]", root);
    const result = $("[data-fit-result]", root);
    const arc = $<SVGElement & HTMLElement>("[data-fit-arc]", root);
    const needle = $<SVGElement & HTMLElement>("[data-fit-needle]", root);
    const total = 5,
      len = Number(arc.dataset.arc);
    const copy: Record<string, [string, string]> = {
      empty: ["Answer to see your fit", "Your result appears here as you go. Nothing is sent anywhere."],
      strong: ["Strong fit", "A voice agent is likely to earn its keep. Book a demo and hear one set up for your calls."],
      maybe: ["Worth a chat", "Some of your calls could suit an agent. A 30-minute call will tell us which ones."],
      low: ["Probably not yet", "On these answers an agent may not pay for itself. We would rather tell you that now."],
      no: [
        "Not the right fit",
        "Every agent we build tells callers it is an AI. If that matters to you, we are the wrong people to ask.",
      ],
    };
    function update() {
      let answered = 0,
        yes = 0,
        aiNo = false;
      for (let i = 0; i < total; i++) {
        const picked = form.querySelector<HTMLInputElement>('input[data-fit-q="' + i + '"]:checked');
        if (!picked) continue;
        answered += 1;
        if (picked.value === "yes") yes += 1;
        if (i === total - 1 && picked.value === "no") aiNo = true;
      }
      let state =
        answered === 0 ? "empty" : aiNo ? "no" : yes >= 4 ? "strong" : yes >= 2 ? "maybe" : answered < total ? "maybe" : "low";
      if (answered > 0 && answered < 3 && !aiNo) state = "maybe";
      result.dataset.state = state;
      $("[data-fit-title]", result).textContent =
        answered > 0 && answered < total && !aiNo ? "So far: " + copy[state][0].toLowerCase() : copy[state][0];
      $("[data-fit-text]", result).textContent = copy[state][1];
      $("[data-fit-count]", result).textContent = answered + " of " + total + " answered";
      $("[data-fit-cta]", result).hidden = !(state === "strong" || state === "maybe") || answered < total;
      const share = yes / total;
      arc.style.strokeDashoffset = String(len * (1 - share));
      needle.style.transform = "rotate(" + (-90 + share * 180) + "deg)";
      $("[data-fit-gauge]", result).setAttribute("aria-label", "Fit gauge: " + yes + " of " + total + " answered yes");
      if (answered === total) track("fit_check_result", { name: state, component: "RightFit" });
    }
    on(form, "change", update);
    on(form, "reset", () => later(update, 0));
    on(form, "submit", (e) => e.preventDefault());
    update();
  }

  /* ---------------------------------------------------------- White label */
  function initWhiteLabel() {
    const root = $("[data-wl]");
    if (!root) return;
    const gbp0 = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
    let period = "monthly";
    const planCost = () => Number(root.dataset[period === "annual" ? "wlAnnual" : "wlMonthly"]);
    function update() {
      const cost = planCost();
      $("[data-wl-price]", root).textContent = String(cost);
      $("[data-wl-note]", root).textContent =
        period === "annual"
          ? "Billed " + gbp0.format(Number(root.dataset.wlYear)) + " a year. Then 8p a minute after 3,000 included minutes."
          : "Billed monthly. Then 8p a minute after 3,000 included minutes.";
      const clients = Number($<HTMLInputElement>('[data-wl-input="clients"]', root).value);
      const charge = Number($<HTMLInputElement>('[data-wl-input="charge"]', root).value);
      const revenue = clients * charge;
      const margin = revenue - cost;
      $('[data-wl-out="clients"]', root).textContent = String(clients);
      $('[data-wl-out="charge"]', root).textContent = gbp0.format(charge);
      $("[data-wl-revenue]", root).textContent = gbp0.format(revenue);
      $("[data-wl-cost]", root).textContent = gbp0.format(cost);
      $("[data-wl-margin]", root).textContent = (margin < 0 ? "−" : "") + gbp0.format(Math.abs(margin));
    }
    $$<HTMLInputElement>("[data-wl-period]", root).forEach((r) => {
      on(r, "change", () => {
        if (r.checked) {
          period = r.value;
          update();
        }
      });
    });
    $$("[data-wl-input]", root).forEach((el) => on(el, "input", update));
    update();
  }

  /* ------------------------------------------------------------ Compare */
  function initCompare() {
    const root = $("[data-cmp]");
    if (!root) return;
    const opts = $$("[data-cmp-opt]", root);
    function choose(btn: HTMLElement, focus: boolean) {
      opts.forEach((o) => {
        const isOn = o === btn;
        o.setAttribute("aria-checked", String(isOn));
        o.tabIndex = isOn ? 0 : -1;
      });
      const n = btn.dataset.cmpOpt;
      $$("[data-cmp-cell]", root).forEach((c) => (c.hidden = c.dataset.cmpCell !== n));
      $("[data-cmp-name]", root).textContent = btn.dataset.trackName ?? "";
      if (focus) btn.focus();
    }
    opts.forEach((btn, i) => {
      on(btn, "click", () => choose(btn, false));
      on(btn, "keydown", (e) => {
        const to = arrowTarget(e as KeyboardEvent, i, opts.length);
        if (to === null) return;
        e.preventDefault();
        choose(opts[to], true);
      });
    });
  }

  /* ---------------------------------------------------------------- FAQ */
  function initFaq() {
    const root = $("[data-faq]");
    if (!root) return;
    const items = $$<HTMLDetailsElement>("[data-faq-item]", root);
    const search = $<HTMLInputElement>("[data-faq-search]", root);
    const filters = $$("[data-faq-filter]", root);
    const expand = $("[data-faq-expand]", root);
    let cat = "all";
    let timer = 0;
    filters.forEach((f) => {
      const k = f.dataset.faqFilter;
      $("[data-faq-count]", f).textContent = String(k === "all" ? items.length : items.filter((i) => i.dataset.cat === k).length);
    });
    const visible = () => items.filter((i) => !i.hidden);
    function syncExpand() {
      const v = visible();
      const allOpen = v.length > 0 && v.every((i) => i.open);
      expand.textContent = allOpen ? "Close all" : "Open all";
      expand.hidden = v.length === 0;
    }
    function apply() {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      items.forEach((item) => {
        const match = (cat === "all" || item.dataset.cat === cat) && (!q || (item.textContent ?? "").toLowerCase().includes(q));
        item.hidden = !match;
        if (match) shown += 1;
        if (match && q) item.open = true;
      });
      $("[data-faq-empty]", root).hidden = shown > 0;
      $("[data-faq-status]", root).textContent =
        shown === items.length ? "Showing all " + shown + " questions" : "Showing " + shown + " of " + items.length + " questions";
      syncExpand();
    }
    filters.forEach((f) => {
      on(f, "click", () => {
        cat = f.dataset.faqFilter!;
        filters.forEach((b) => b.setAttribute("aria-pressed", String(b === f)));
        apply();
      });
    });
    on(search, "input", () => {
      clearTimeout(timer);
      timer = later(apply, 120);
    });
    on(expand, "click", () => {
      const v = visible();
      const open = !v.every((i) => i.open);
      v.forEach((i) => (i.open = open));
      syncExpand();
    });
    items.forEach((i) => on(i, "toggle", syncExpand));
    apply();
  }

  /* --------------------------------------------------- Related services */
  function initRelated() {
    const root = $("[data-related]");
    if (!root) return;
    function light(key: string | null) {
      root.classList.toggle("is-tracing", !!key);
      $$("[data-related-line]", root).forEach((l) => l.classList.toggle("is-lit", l.dataset.relatedLine === key));
    }
    $$("[data-related-card]", root).forEach((card) => {
      on(card, "mouseenter", () => light(card.dataset.relatedCard!));
      on(card, "focus", () => light(card.dataset.relatedCard!));
      on(card, "mouseleave", () => light(null));
      on(card, "blur", () => light(null));
    });
  }

  /* --------------------------------------------------------- Demo form */
  function initDemoForm() {
    const root = $("[data-demo]");
    if (!root) return;
    const form = $<HTMLFormElement>("[data-demo-form]", root);
    const success = $("[data-demo-success]", root);
    const sendError = $("[data-demo-send-error]", root);
    const submit = $<HTMLButtonElement>('button[type="submit"]', form);
    const messages: Record<string, string> = {
      name: "Enter your name.",
      business: "Enter your business name.",
      industry: "Choose your industry.",
      city: "Choose where you are based.",
      phone: "Enter a UK phone number, for example 0161 496 0123.",
      email: "Enter an email address, for example name@business.co.uk.",
      consent: "Tick the box so we can contact you about the demo.",
    };
    type Field = HTMLInputElement | HTMLSelectElement;
    function check(el: Field) {
      const v = el instanceof HTMLInputElement && el.type === "checkbox" ? el.checked : el.value.trim();
      let ok = !!v;
      if (ok && el.name === "email") ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v));
      if (ok && el.name === "phone") ok = String(v).replace(/[^0-9]/g, "").length >= 10;
      const err = document.getElementById("demo-" + el.name + "-err");
      el.setAttribute("aria-invalid", String(!ok));
      if (err) {
        err.textContent = ok ? "" : el.dataset.demoMessage || messages[el.name] || "Complete this field.";
        err.hidden = ok;
      }
      return ok;
    }
    const fields = $$<Field>("[data-demo-field]", form);
    fields.forEach((el) => {
      // Re-check while the visitor types, so error messages clear in place
      // instead of collapsing on blur and shifting the layout under the pointer.
      on(el, "input", () => el.getAttribute("aria-invalid") === "true" && check(el));
      on(el, "change", () => el.getAttribute("aria-invalid") === "true" && check(el));
    });
    // Service links elsewhere on the page (data-pick-service) pre-fill the
    // form's service field, when the form has one.
    const serviceField = form.querySelector<HTMLSelectElement>('select[name="service"]');
    if (serviceField)
      on(page, "click", (e) => {
        const pick = (e.target as Element).closest<HTMLElement>("[data-pick-service]");
        if (!pick) return;
        serviceField.value = pick.dataset.pickService!;
        if (serviceField.getAttribute("aria-invalid") === "true") check(serviceField);
      });
    // Posts to /api/enquiry like every other form on the site, with the
    // visible labels as field names so the email reads as the form did.
    const label = (el: Field) =>
      el.id ? (form.querySelector(`label[for="${el.id}"]`)?.textContent?.trim() ?? el.name) : "Consent to contact";
    const shown = (el: Field) =>
      el instanceof HTMLSelectElement
        ? (el.selectedOptions[0]?.text ?? el.value)
        : el.type === "checkbox"
          ? (el as HTMLInputElement).checked
            ? "Yes"
            : "No"
          : el.value.trim();
    on(form, "submit", async (e) => {
      e.preventDefault();
      let firstBad: Field | null = null;
      fields.forEach((el) => {
        if (!check(el) && !firstBad) firstBad = el;
      });
      if (firstBad) {
        (firstBad as Field).focus();
        track("demo_form_error", { component: "FinalCTA" });
        return;
      }
      const data = new FormData(form);
      track("demo_form_submit", {
        component: "FinalCTA",
        industry: data.get("industry"),
        city: data.get("city"),
        service: data.get("service"),
      });

      sendError.hidden = true;
      submit.disabled = true;
      let message = "";
      try {
        const response = await fetch("/api/enquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            form: root.dataset.demoFormName || "AI voice agent demo",
            page: window.location.pathname,
            hp: String(data.get("hp") ?? ""),
            fields: Object.fromEntries(fields.map((el) => [label(el), shown(el)])),
          }),
        });
        if (!response.ok)
          message =
            response.status === 503
              ? "We couldn't send that just now. Please call 020 3489 3934 and we'll take the details."
              : "Something went wrong sending that. Please try again, or call 020 3489 3934.";
      } catch {
        message = "No connection. Please try again, or call 020 3489 3934.";
      }
      submit.disabled = false;
      if (message) {
        sendError.textContent = message;
        sendError.hidden = false;
        return;
      }
      const name = String(data.get("name") || "").trim().split(" ")[0];
      $("[data-demo-success-title]", root).textContent = name ? "Thanks, " + name + ", we've got it" : "Thanks, we've got it";
      form.hidden = true;
      success.hidden = false;
      success.focus();
    });
  }

  /* --------------------------------------------------------- Sticky bar */
  function initStickyBar() {
    const bar = $("[data-sticky-bar]");
    const hero = $("#hero");
    const end = $("#book-demo");
    if (!bar || !hero || !end) return;
    let pastHero = false,
      nearEnd = false;
    function sync() {
      const show = pastHero && !nearEnd;
      bar.classList.toggle("is-visible", show);
      bar.inert = !show;
    }
    observe((entries) => {
      pastHero = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
      sync();
    }).observe(hero);
    observe(
      (entries) => {
        // Hide for the final CTA and everything after it.
        nearEnd = entries[0].isIntersecting || entries[0].boundingClientRect.top < 0;
        sync();
      },
      { rootMargin: "0px 0px -10% 0px" },
    ).observe(end);
  }

  /* ------------------------------------------------------ Scroll reveal */
  function initReveal() {
    const groups = $$("[data-reveal-group]");
    if (!groups.length || reduceMotion.matches) return;
    page.classList.add("js-reveal");
    cleanups.push(() => page.classList.remove("js-reveal"));
    const io = observe(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const order = $$("[data-reveal]", el.closest("[data-reveal-group]")!).indexOf(el);
          el.style.transitionDelay = Math.min(order, 5) * 80 + "ms";
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.12 },
    );
    $$("[data-reveal]").forEach((el) => io.observe(el));
  }

  initTracking();
  initLinks();
  initHeroCall();
  initLedger();
  initVideoFacade();
  initVideoModal();
  initIndustryFilter();
  initTabs();
  initFlows();
  initToneSwitch();
  initBrandBuilder();
  initPricingToggle();
  initCalculator();
  initBilling();
  initFitCheck();
  initWhiteLabel();
  initCompare();
  initFaq();
  initRelated();
  initDemoForm();
  initAreaMap();
  initStickyBar();
  initReveal();

  return () => {
    cleanups.forEach((fn) => fn());
    timers.forEach((id) => {
      clearTimeout(id);
      clearInterval(id);
    });
  };
}
