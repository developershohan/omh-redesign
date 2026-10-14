/* eslint-disable */
// @ts-nocheck
/*
  Behaviour for the /ai-voice-agents/[industry] pages: the design file's own
  script, kept verbatim apart from (1) the theme toggle and mobile menu, which
  the site header owns, (2) per-page wording via `copy`, and (3) the booking
  forms posting to /api/enquiry. The timer, frame and observer globals are
  parameters so IndustryScript.tsx can track and cancel them on unmount.
*/
export function runIndustryScript({ setTimeout, setInterval, requestAnimationFrame, IntersectionObserver, copy }) {
(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var gbp = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
  var num = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 });

  /* ---------------------------------------------------------- Analytics */
  function track(event, detail) {
    var payload = Object.assign({ event: event }, detail || {});
    if (Array.isArray(window.dataLayer)) window.dataLayer.push(payload);
    return payload;
  }

  function trackDetail(el) {
    var detail = {};
    if (el.dataset.trackName) detail.name = el.dataset.trackName;
    var section = el.closest('[data-component]');
    if (section) detail.component = section.dataset.component;
    if (el.matches('input, select')) {
      detail.value = el.type === 'checkbox' || el.type === 'radio' ? (el.checked ? el.value : '') : el.value;
      if (el.tagName === 'SELECT' && el.selectedOptions[0]) detail.name = el.selectedOptions[0].dataset.name || el.selectedOptions[0].text;
    }
    if (el.hasAttribute('aria-pressed')) detail.pressed = el.getAttribute('aria-pressed');
    if (el.hasAttribute('aria-checked')) detail.checked = el.getAttribute('aria-checked');
    return detail;
  }

  function initTracking() {
    document.addEventListener('click', function (e) {
      var el = e.target.closest('[data-track]');
      if (!el || el.matches('input, select, details')) return;
      // Defer so components can update their state before it is read.
      setTimeout(function () { track(el.dataset.track, trackDetail(el)); }, 0);
    });
    document.addEventListener('change', function (e) {
      var el = e.target.closest('input[data-track], select[data-track]');
      if (el) track(el.dataset.track, trackDetail(el));
    });
    var ready = false; // Ignore the toggle fired for items that are open on load.
    setTimeout(function () { ready = true; }, 500);
    document.addEventListener('toggle', function (e) {
      var el = e.target;
      if (!ready) return;
      if (!el.matches || !el.matches('details')) return;
      var name = el.dataset.track || (el.matches('[data-faq-item]') ? 'faq_toggle' : '');
      if (name) track(name, { name: el.dataset.trackName || '', open: el.open });
    }, true);
  }

  /* ---------------------------------------------------------- Hero call */
  function initHeroCall() {
    var root = $('[data-call-demo]');
    if (!root) return;
    var items = $$('[data-call-line], [data-call-outcome]', root);
    var timerEl = $('[data-call-timer]', root);
    var status = $('[data-call-status]', root);
    var toggle = $('[data-call-toggle]', root);
    var toggleLabel = $('[data-call-toggle-label]', root);
    var replay = $('[data-call-replay]', root);
    if (reduceMotion.matches) return; // The finished call is shown as static content.

    var TOTAL = 31; // seconds shown on the call timer when the call ends
    var step = 0, elapsed = 0, playing = false, stepTimer = null, clock = null, started = false;
    var delays = items.map(function (el) {
      if (el.hasAttribute('data-call-outcome')) return 650;
      return Math.min(3000, 1100 + el.textContent.length * 16);
    });

    function fmt(s) { return '00:' + String(Math.min(s, TOTAL)).padStart(2, '0'); }
    function setPlaying(on) {
      playing = on;
      var speaking = on && step < items.length && step > 0 && items[step - 1].hasAttribute('data-call-line');
      status.classList.toggle('is-speaking', speaking);
      toggle.hidden = step >= items.length;
      replay.hidden = step < items.length;
      toggleLabel.textContent = on ? 'Pause' : 'Play';
      $('use', toggle).setAttribute('href', on ? '#i-pause' : '#i-play');
      toggle.dataset.track = on ? 'hero_call_pause' : 'hero_call_play';
      clearInterval(clock);
      if (on) clock = setInterval(function () { elapsed += 1; timerEl.textContent = fmt(elapsed); }, 1000);
    }
    function next() {
      if (step >= items.length) { finish(); return; }
      items[step].classList.add('is-shown');
      step += 1;
      setPlaying(true);
      stepTimer = setTimeout(next, delays[step - 1]);
    }
    function finish() {
      clearTimeout(stepTimer);
      setPlaying(false);
      timerEl.textContent = fmt(TOTAL);
    }
    function reset() {
      clearTimeout(stepTimer);
      step = 0; elapsed = 0;
      items.forEach(function (el) { el.classList.remove('is-shown'); });
      timerEl.textContent = fmt(0);
    }
    function start() {
      reset();
      root.classList.add('is-animated');
      stepTimer = setTimeout(next, 500);
      setPlaying(true);
    }

    toggle.addEventListener('click', function () {
      if (playing) { clearTimeout(stepTimer); setPlaying(false); }
      else { setPlaying(true); stepTimer = setTimeout(next, 300); }
    });
    replay.addEventListener('click', function () { start(); toggle.focus(); });
    // A city switch rewrites the call, then plays it again from the start.
    root.addEventListener('call:restart', function () {
      if (reduceMotion.matches) return;
      started = true;
      if (io) io.disconnect();
      start();
    });

    var io = null;
    if (!('IntersectionObserver' in window)) return;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !started) { started = true; start(); io.disconnect(); }
      });
    }, { threshold: 0.35 });
    io.observe(root);
    // Stop the animation if the visitor switches to reduced motion mid-call.
    reduceMotion.addEventListener('change', function (e) {
      if (!e.matches) return;
      clearTimeout(stepTimer); clearInterval(clock);
      root.classList.remove('is-animated');
      status.classList.remove('is-speaking');
      toggle.hidden = true; replay.hidden = true;
      timerEl.textContent = fmt(TOTAL);
    });
  }

  /* ----------------------------------------------------------- Call log */
  function initLedger() {
    var root = $('[data-ledger]');
    if (!root) return;
    var inputs = $$('[data-ledger-input]', root);
    var rows = $$('[data-ledger-row]', root);
    var answered = $('[data-ledger-answered]', root);
    var booked = $('[data-ledger-booked]', root);
    var totals = { without: [0, 0], with: [rows.length, $$('[data-ledger-with] .icon use[href="#i-calendar"]', root).length] };
    var pending = [];

    function apply(mode, animate) {
      pending.forEach(clearTimeout); pending = [];
      root.dataset.mode = mode;
      function swap(row) {
        $('[data-ledger-without]', row).hidden = mode === 'with';
        $('[data-ledger-with]', row).hidden = mode !== 'with';
      }
      if (animate && !reduceMotion.matches) {
        rows.forEach(function (row, i) {
          pending.push(setTimeout(function () {
            var cell = $('.ledger-status', row);
            cell.style.opacity = '0';
            pending.push(setTimeout(function () { swap(row); cell.style.opacity = '1'; }, 160));
          }, i * 130));
        });
        pending.push(setTimeout(function () { setTotals(mode); }, rows.length * 130 + 160));
      } else {
        rows.forEach(swap);
        setTotals(mode);
      }
    }
    function setTotals(mode) {
      answered.textContent = totals[mode][0];
      booked.textContent = totals[mode][1];
    }
    inputs.forEach(function (input) {
      input.addEventListener('change', function () { if (input.checked) { touched = true; apply(input.value, true); } });
    });

    // Play the switch once when the log scrolls into view, unless the visitor got there first.
    var touched = false;
    if ('IntersectionObserver' in window && !reduceMotion.matches) {
      var io = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        setTimeout(function () {
          if (touched) return;
          var withInput = inputs.filter(function (i) { return i.value === 'with'; })[0];
          withInput.checked = true;
          apply('with', true);
        }, 1400);
      }, { threshold: 0.6 });
      io.observe(root);
    }
  }

  /* ------------------------------------------------------- Video facade */
  function initVideoFacade() {
    $$('[data-video]').forEach(function (box) {
      var btn = $('[data-video-play]', box);
      var fallback = $('[data-video-fallback]', box);
      btn.addEventListener('click', function () {
        var id = box.dataset.videoId || '';
        if (!/^[\w-]{6,}$/.test(id)) { // No real video ID yet.
          btn.hidden = true; fallback.hidden = false;
          fallback.setAttribute('tabindex', '-1'); fallback.focus();
          return;
        }
        var frame = document.createElement('iframe');
        frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
        frame.title = box.dataset.videoTitle || 'Video';
        frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share';
        frame.allowFullscreen = true;
        frame.className = 'absolute inset-0 h-full w-full';
        frame.setAttribute('loading', 'lazy');
        box.innerHTML = '';
        box.appendChild(frame);
        frame.focus();
      });
    });
  }

  /* ---------------------------------------------------------- Video pop-up */
  function initVideoModal() {
    var dialog = $('[data-video-modal]');
    if (!dialog || typeof dialog.showModal !== 'function') return;
    var title = $('[data-video-modal-title]', dialog);
    var meta = $('[data-video-modal-meta]', dialog);
    var player = $('[data-video-modal-player]', dialog);
    var opener = null;

    function open(btn) {
      opener = btn;
      var id = btn.dataset.videoId || '';
      title.textContent = btn.dataset.videoTitle || 'Video testimonial';
      meta.textContent = btn.dataset.videoMeta || '';
      player.innerHTML = '';
      if (/^[\w-]{6,}$/.test(id)) {
        var frame = document.createElement('iframe');
        frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
        frame.title = btn.dataset.videoTitle || 'Video testimonial';
        frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share';
        frame.allowFullscreen = true;
        frame.className = 'absolute inset-0 h-full w-full';
        player.appendChild(frame);
      } else {
        var note = document.createElement('div');
        note.className = 'absolute inset-0 grid place-items-center p-6 text-center';
        note.innerHTML = '<div><p class="font-display text-[22px] font-semibold">This video is on its way</p>' +
          '<p class="mx-auto mt-2 max-w-[30rem] text-[16.5px] text-band-muted">It will go live once we have verified this client\'s results. Until then, ring our demo agent to hear one for yourself.</p></div>';
        player.appendChild(note);
      }
      dialog.showModal();
      $('[data-video-modal-close]', dialog).focus();
    }

    $$('[data-video-modal-open]').forEach(function (btn) {
      btn.addEventListener('click', function () { open(btn); });
    });
    $('[data-video-modal-close]', dialog).addEventListener('click', function () { dialog.close(); });
    // A click on the dimmed backdrop (the dialog element itself) closes it.
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', function () {
      player.innerHTML = ''; // Stops playback.
      if (opener) opener.focus();
    });
  }

  /* ---------------------------------------------------- Industry filter */
  function initIndustryFilter() {
    var bar = $('[data-industry-filters]');
    if (!bar) return;
    var buttons = $$('[data-filter]', bar);
    var cards = $$('[data-industry]');
    var count = $('[data-industry-count]');
    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      var group = btn.dataset.filter;
      var shown = 0;
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      cards.forEach(function (card) {
        var match = group === 'all' || card.dataset.group === group;
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (count) count.textContent = 'Showing ' + shown + (shown === 1 ? ' industry' : ' industries');
    });
  }

  /* --------------------------------------------------------------- Tabs */
  function initTabs() {
    $$('[data-tabs]').forEach(function (root) {
      var tabs = $$('[data-tab]', root);
      var panels = $$('[data-tab-panel]', root);
      function select(i, focus) {
        tabs.forEach(function (tab, n) {
          tab.setAttribute('aria-selected', String(n === i));
          tab.tabIndex = n === i ? 0 : -1;
          panels[n].hidden = n !== i;
        });
        if (focus) tabs[i].focus();
      }
      tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () { select(i, false); });
        tab.addEventListener('keydown', function (e) {
          var to = null;
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % tabs.length;
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + tabs.length) % tabs.length;
          else if (e.key === 'Home') to = 0;
          else if (e.key === 'End') to = tabs.length - 1;
          if (to === null) return;
          e.preventDefault();
          select(to, true);
        });
      });
    });
  }

  /* ---------------------------------------------------------- Call flows */
  function initFlows() {
    $$('[data-flow-wrap]').forEach(function (wrap) {
      var caption = $('[data-flow-caption-text]', wrap);
      var holder = $('[data-flow-caption]', wrap);
      var pinned = null;
      function trace(svg, id) {
        var nodes = $$('[data-flow-node]', svg);
        var edges = $$('[data-flow-edge]', svg);
        svg.classList.toggle('is-tracing', !!id);
        nodes.forEach(function (n) { n.classList.remove('is-lit', 'is-on'); });
        edges.forEach(function (e) { e.classList.remove('is-lit'); });
        if (!id) return;
        var lit = {}; lit[id] = true;
        edges.forEach(function (e) {
          if (e.dataset.from === id || e.dataset.to === id) {
            e.classList.add('is-lit'); lit[e.dataset.from] = true; lit[e.dataset.to] = true;
          }
        });
        nodes.forEach(function (n) {
          if (lit[n.dataset.flowNode]) n.classList.add('is-lit');
          if (n.dataset.flowNode === id) n.classList.add('is-on');
        });
      }
      function show(node) {
        $$('[data-flow]', wrap).forEach(function (svg) { trace(svg, node ? node.dataset.flowNode : null); });
        caption.textContent = node ? node.dataset.detail : (pinned ? pinned.dataset.detail : holder.dataset.default);
      }
      $$('[data-flow-node]', wrap).forEach(function (node) {
        node.addEventListener('mouseenter', function () { show(node); });
        node.addEventListener('focus', function () { show(node); });
        node.addEventListener('mouseleave', function () { show(pinned); });
        node.addEventListener('blur', function () { show(pinned); });
        function pick() {
          pinned = pinned && pinned.dataset.flowNode === node.dataset.flowNode ? null : node;
          show(pinned || node);
          track('solution_flow_step', { name: node.getAttribute('aria-label'), component: 'Solutions' });
        }
        node.addEventListener('click', pick);
        node.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
        });
      });
    });
  }

  /* -------------------------------------------------------- Tone switch */
  function initToneSwitch() {
    $$('[data-tone]').forEach(function (root) {
      var buttons = $$('[data-tone-btn]', root);
      var texts = $$('[data-tone-text]', root);
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
          texts.forEach(function (t) { t.hidden = t.dataset.toneText !== btn.dataset.toneBtn; });
        });
      });
    });
  }

  /* ----------------------------------------------------- Pricing toggle */
  function initPricingToggle() {
    var root = $('[data-pricing]');
    if (!root) return;
    var toggle = $('[data-billing-toggle]', root);
    function set(annual) {
      var mode = annual ? 'annual' : 'monthly';
      root.dataset.billing = mode;
      toggle.setAttribute('aria-checked', String(annual));
      $$('[data-price]', root).forEach(function (el) { el.textContent = el.dataset[mode]; });
      $$('[data-billing-note]', root).forEach(function (el) { el.textContent = el.dataset[mode + 'Text']; });
      $$('[data-billing-label]', root).forEach(function (el) {
        el.classList.toggle('text-muted', el.dataset.billingLabel !== mode);
      });
    }
    toggle.addEventListener('click', function () { set(toggle.getAttribute('aria-checked') !== 'true'); });
  }

  /* --------------------------------------------------------- Calculator */
  function initCalculator() {
    var root = $('[data-calc]');
    if (!root) return;
    var field = function (name) { return $('[data-calc-input="' + name + '"]', root); };
    var out = function (name) { return $('[data-calc-result="' + name + '"]', root); };
    var industry = $('[data-calc-industry]', root);
    var message = $('[data-calc-message]', root);
    var netLabel = $('[data-calc-net-label]', root);
    var invalid = false;

    function read(name, max) {
      var el = field(name);
      var err = $('[data-calc-error="' + name + '"]', root);
      var raw = el.value.trim();
      var value = Number(raw);
      var bad = raw === '' || !isFinite(value) || value < 0;
      if (err) { err.hidden = !bad; el.setAttribute('aria-invalid', String(bad)); }
      if (bad) { invalid = true; var box = el.closest('details'); if (box) box.open = true; return 0; }
      return Math.min(value, max);
    }
    // "25%" becomes "About 1 in 4" so the slider reads in plain words.
    function plain(pct, noun) {
      if (pct === 0) return 'None';
      if (pct === 100) return 'Every ' + noun.replace(/s$/, '');
      var opts = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 10], [3, 10], [7, 10], [9, 10], [1, 20]];
      var best = opts[0], diff = 1;
      opts.forEach(function (o) { var d = Math.abs(o[0] / o[1] - pct / 100); if (d < diff) { diff = d; best = o; } });
      return 'About ' + best[0] + ' in ' + best[1] + ' ' + noun;
    }
    function syncPressed(attr, value) {
      $$('[' + attr + ']', root).forEach(function (b) { b.setAttribute('aria-pressed', String(Number(b.getAttribute(attr)) === value)); });
    }
    function update() {
      invalid = false;
      var calls = Math.round(read('calls', 100000));
      var value = read('value', 1000000);
      var plan = read('plan', 100000);
      var missedPct = read('missed', 100);
      var convPct = read('conv', 100);
      $('[data-calc-output="missed"]', root).textContent = missedPct + '%';
      $('[data-calc-output="conv"]', root).textContent = convPct + '%';
      $('[data-calc-plain="missed"]', root).textContent = plain(missedPct, 'calls');
      $('[data-calc-plain="conv"]', root).textContent = plain(convPct, 'callers');
      syncPressed('data-calc-preset', calls);
      syncPressed('data-calc-plan', plan);

      var missedCalls = Math.round(calls * missedPct / 100);
      var customers = Math.round(missedCalls * convPct / 100 * 10) / 10;
      var lost = missedCalls * (convPct / 100) * value;
      var net = lost - plan;

      $('[data-calc-f="calls"]', root).textContent = num.format(calls);
      $('[data-calc-f="missed"]', root).textContent = num.format(missedCalls);
      $('[data-calc-f="customers"]', root).textContent = customers % 1 ? customers.toFixed(1) : num.format(customers);
      var top = Math.max(calls, 1);
      $('[data-calc-fbar="calls"]', root).style.width = (calls > 0 ? 100 : 0) + '%';
      $('[data-calc-fbar="missed"]', root).style.width = Math.max(missedCalls ? 2 : 0, missedCalls / top * 100) + '%';
      $('[data-calc-fbar="customers"]', root).style.width = Math.max(customers ? 2 : 0, customers / top * 100) + '%';

      out('missedCalls').textContent = num.format(missedCalls);
      out('lost').textContent = gbp.format(lost);
      $('[data-calc-year]', root).textContent = gbp.format(lost * 12);
      $('[data-calc-plan-out]', root).textContent = gbp.format(plan);
      out('net').textContent = (net < 0 ? '−' : '') + gbp.format(Math.abs(net));
      netLabel.textContent = net < 0 ? 'Shortfall after the plan' : 'Left over after the plan';
      out('net').classList.toggle('text-band-miss', net < 0);
      out('net').classList.toggle('text-band-ok', net >= 0);

      if (invalid) {
        message.textContent = 'One of your entries is not a usable number, so we have counted it as zero. Correct the highlighted field to see your result.';
      } else if (lost === 0) {
        message.textContent = 'On these numbers you are not losing work to missed calls. A voice agent may still save your team time, but it would not pay for itself this way.';
      } else if (net < 0) {
        message.textContent = 'On these numbers the plan would cost more than the work it recovers. That is worth knowing before you buy, and we would say the same on a call.';
      } else if (plan > 0 && lost / plan < 2) {
        message.textContent = 'The agent would roughly cover its own cost on these numbers. The margin is thin, so check your figures with us before deciding.';
      } else {
        message.textContent = 'The plan would pay for itself about ' + (plan > 0 ? num.format(Math.floor(lost / plan)) + ' times over' : 'many times over') + ', if those callers booked at your rate.';
      }
    }

    industry.addEventListener('change', function () { field('value').value = industry.value; update(); });
    $$('[data-calc-input]', root).forEach(function (el) { el.addEventListener('input', update); });
    $$('[data-calc-preset]', root).forEach(function (b) {
      b.addEventListener('click', function () { field('calls').value = b.dataset.calcPreset; update(); });
    });
    $$('[data-calc-plan]', root).forEach(function (b) {
      b.addEventListener('click', function () { field('plan').value = b.dataset.calcPlan; update(); });
    });
    $('[data-calc-form]', root).addEventListener('submit', function (e) { e.preventDefault(); });
    update();
  }

  /* ----------------------------------------------------------- Area map */
  function initAreaMap() {
    var root = $('[data-area-map]');
    if (!root) return;
    var cards = $$('[data-city]', root);
    function set(slug) {
      $$('[data-map-pin]', root).forEach(function (pin) { pin.classList.toggle('is-active', pin.dataset.mapPin === slug); });
      cards.forEach(function (card) { card.classList.toggle('is-active', card.dataset.city === slug); });
    }
    cards.forEach(function (card) {
      card.addEventListener('mouseenter', function () { set(card.dataset.city); });
      card.addEventListener('focusin', function () { set(card.dataset.city); });
    });
    root.addEventListener('mouseleave', function () { set(null); });
    root.addEventListener('focusout', function (e) { if (!root.contains(e.relatedTarget)) set(null); });
  }

  /* ------------------------------------------------------ Billing slider */
  function initBilling() {
    var root = $('[data-bill]');
    if (!root) return;
    var price = Number(root.dataset.billPrice), included = Number(root.dataset.billIncluded);
    var rate = Number(root.dataset.billRate), max = Number(root.dataset.billMax);
    var input = $('[data-bill-input]', root);
    var pounds = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });
    function set(sel, text) { $(sel, root).textContent = text; }
    function update() {
      var used = Number(input.value);
      var extra = Math.max(0, used - included);
      var extraCost = Math.round(extra * rate * 100) / 100;
      var subtotal = price + extraCost;
      var vat = Math.round(subtotal * 20) / 100;
      var total = subtotal + vat;
      set('[data-bill-output]', num.format(used) + ' min');
      set('[data-bill-used]', num.format(used));
      set('[data-bill-extra]', num.format(extra));
      set('[data-bill-extra-cost]', pounds.format(extraCost));
      set('[data-bill-vat]', pounds.format(vat));
      set('[data-bill-total]', pounds.format(total));
      $('[data-bill-bar-in]', root).style.width = (Math.min(used, included) / max * 100) + '%';
      var over = $('[data-bill-bar-over]', root);
      over.style.left = (included / max * 100) + '%';
      over.style.width = (extra / max * 100) + '%';
      set('[data-bill-summary]', extra > 0
        ? num.format(extra) + ' minutes over your plan adds ' + pounds.format(extraCost) + ' before VAT. Total ' + pounds.format(total) + ' including VAT.'
        : 'Within your ' + num.format(included) + ' included minutes, so you pay the plan price only: ' + pounds.format(total) + ' including VAT.');
    }
    input.addEventListener('input', update);
    update();
  }

  /* ---------------------------------------------------- Branding builder */
  function initBrandBuilder() {
    var root = $('[data-brand]');
    if (!root) return;
    var biz = JSON.parse(root.dataset.brandBiz);
    var state = { biz: biz[0].id, tone: 'warm' };
    var typing = null, clock = null;
    function greet(b, t) {
      if (t === 'brisk') return b.name + ', ' + b.agent + " speaking. I'm the " + b.kind + ' AI assistant. What can I do for you?';
      if (t === 'formal') return 'Good morning. You have reached ' + b.name + '. I am ' + b.agent + ', the ' + b.kind + ' AI assistant. How may I direct your call?';
      return 'Good morning, ' + b.name + ". I'm " + b.agent + ', the ' + b.kind + ' AI assistant. How can I help you today?';
    }
    function set(sel, text) { $(sel, root).textContent = text; }
    function speak(text) {
      var out = $('[data-brand-greeting]', root);
      clearInterval(typing); clearInterval(clock);
      set('[data-brand-live]', text);
      if (reduceMotion.matches) { out.textContent = text; root.classList.remove('is-speaking'); return; }
      var i = 0, secs = 0;
      out.textContent = '';
      set('[data-brand-timer]', '00:00');
      root.classList.add('is-speaking');
      clock = setInterval(function () { secs += 1; set('[data-brand-timer]', '00:' + String(secs).padStart(2, '0')); }, 1000);
      typing = setInterval(function () {
        i += 2;
        out.textContent = text.slice(0, i);
        if (i >= text.length) { clearInterval(typing); clearInterval(clock); root.classList.remove('is-speaking'); }
      }, 32);
    }
    var own = $('[data-brand-own]', root);
    function initials(name) {
      var w = name.replace(/&/g, ' ').split(/\s+/).filter(Boolean);
      return ((w[0] || '?')[0] + (w[1] ? w[1][0] : '')).toUpperCase();
    }
    function render(animate) {
      var b = Object.assign({}, biz.filter(function (x) { return x.id === state.biz; })[0]);
      var typed = own ? own.value.trim().replace(/\s+/g, ' ') : '';
      if (typed) { b.name = typed; b.initials = initials(typed); }
      set('[data-brand-name]', b.name); set('[data-brand-num]', b.num); set('[data-brand-city]', b.city);
      set('[data-brand-initials]', b.initials); set('[data-brand-agent]', b.agent);
      set('[data-brand-voice]', b.voice); set('[data-brand-never]', b.never); set('[data-brand-transfer]', b.transfer);
      var text = greet(b, state.tone);
      if (animate) speak(text); else { set('[data-brand-greeting]', text); }
    }
    $$('[data-brand-group]', root).forEach(function (group) {
      var opts = $$('[data-brand-opt]', group);
      function choose(btn, focus) {
        opts.forEach(function (o) { var on = o === btn; o.setAttribute('aria-checked', String(on)); o.tabIndex = on ? 0 : -1; });
        state[group.dataset.brandGroup] = btn.dataset.brandOpt;
        if (focus) btn.focus();
        render(true);
      }
      opts.forEach(function (btn, i) {
        btn.addEventListener('click', function () { choose(btn, false); });
        btn.addEventListener('keydown', function (e) {
          var to = null;
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % opts.length;
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + opts.length) % opts.length;
          if (to === null) return;
          e.preventDefault(); choose(opts[to], true);
        });
      });
    });
    $('[data-brand-replay]', root).addEventListener('click', function () { render(true); });
    var mainPlay = $('[data-brand-replay-main]', root);
    if (mainPlay) mainPlay.addEventListener('click', function () {
      // On small screens the phone sits below the form, so bring it into view first.
      var phone = $('.brand-phone', root);
      var r = phone.getBoundingClientRect();
      if (r.top > window.innerHeight * 0.6 || r.bottom < 0) phone.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'center' });
      render(true);
    });
    var typingTimer = null;
    if (own) own.addEventListener('input', function () {
      render(false);
      clearTimeout(typingTimer);
      typingTimer = setTimeout(function () { render(true); }, 700);
    });
    // Play the greeting once when the phone first scrolls into view.
    if ('IntersectionObserver' in window && !reduceMotion.matches) {
      var io = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { io.disconnect(); render(true); }
      }, { threshold: 0.5 });
      io.observe($('.brand-phone', root));
    }
  }

  /* ---------------------------------------------------------- Fit check */
  function initFitCheck() {
    var root = $('[data-fit]');
    if (!root) return;
    var form = $('[data-fit-form]', root);
    var result = $('[data-fit-result]', root);
    var arc = $('[data-fit-arc]', root);
    var needle = $('[data-fit-needle]', root);
    var total = 5, len = Number(arc.dataset.arc);
    var copy = {
      empty: ['Answer to see your fit', 'Your result appears here as you go. Nothing is sent anywhere.'],
      strong: ['Strong fit', 'A voice agent is likely to earn its keep. Book a demo and hear one set up for your calls.'],
      maybe: ['Worth a chat', 'Some of your calls could suit an agent. A 30-minute call will tell us which ones.'],
      low: ['Probably not yet', 'On these answers an agent may not pay for itself. We would rather tell you that now.'],
      no: ['Not the right fit', 'Every agent we build tells callers it is an AI. If that matters to you, we are the wrong people to ask.'],
    };
    function update() {
      var answered = 0, yes = 0, aiNo = false;
      for (var i = 0; i < total; i++) {
        var picked = $('input[data-fit-q="' + i + '"]:checked', form);
        if (!picked) continue;
        answered += 1;
        if (picked.value === 'yes') yes += 1;
        if (i === total - 1 && picked.value === 'no') aiNo = true;
      }
      var state = answered === 0 ? 'empty' : aiNo ? 'no' : yes >= 4 ? 'strong' : yes >= 2 ? 'maybe' : (answered < total ? 'maybe' : 'low');
      if (answered > 0 && answered < 3 && !aiNo) state = 'maybe';
      result.dataset.state = state;
      $('[data-fit-title]', result).textContent = answered > 0 && answered < total && !aiNo ? 'So far: ' + copy[state][0].toLowerCase() : copy[state][0];
      $('[data-fit-text]', result).textContent = copy[state][1];
      $('[data-fit-count]', result).textContent = answered + ' of ' + total + ' answered';
      $('[data-fit-cta]', result).hidden = !(state === 'strong' || state === 'maybe') || answered < total;
      var share = yes / total;
      arc.style.strokeDashoffset = String(len * (1 - share));
      needle.style.transform = 'rotate(' + (-90 + share * 180) + 'deg)';
      $('[data-fit-gauge]', result).setAttribute('aria-label', 'Fit gauge: ' + yes + ' of ' + total + ' answered yes');
      if (answered === total) track('fit_check_result', { name: state, component: 'RightFit' });
    }
    form.addEventListener('change', update);
    form.addEventListener('reset', function () { setTimeout(update, 0); });
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    update();
  }

  /* ---------------------------------------------------------- White label */
  function initWhiteLabel() {
    var root = $('[data-wl]');
    if (!root) return;
    var gbp0 = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
    var period = 'monthly';
    function planCost() { return Number(root.dataset[period === 'annual' ? 'wlAnnual' : 'wlMonthly']); }
    function update() {
      var cost = planCost();
      $('[data-wl-price]', root).textContent = cost;
      $('[data-wl-note]', root).textContent = period === 'annual'
        ? 'Billed ' + gbp0.format(Number(root.dataset.wlYear)) + ' a year. Then 8p a minute after 3,000 included minutes.'
        : 'Billed monthly. Then 8p a minute after 3,000 included minutes.';
      var clients = Number($('[data-wl-input="clients"]', root).value);
      var charge = Number($('[data-wl-input="charge"]', root).value);
      var revenue = clients * charge;
      var margin = revenue - cost;
      $('[data-wl-out="clients"]', root).textContent = clients;
      $('[data-wl-out="charge"]', root).textContent = gbp0.format(charge);
      $('[data-wl-revenue]', root).textContent = gbp0.format(revenue);
      $('[data-wl-cost]', root).textContent = gbp0.format(cost);
      $('[data-wl-margin]', root).textContent = (margin < 0 ? '\u2212' : '') + gbp0.format(Math.abs(margin));
    }
    $$('[data-wl-period]', root).forEach(function (r) {
      r.addEventListener('change', function () { if (r.checked) { period = r.value; update(); } });
    });
    $$('[data-wl-input]', root).forEach(function (el) { el.addEventListener('input', update); });
    update();
  }

  /* ------------------------------------------------------------ Compare */
  function initCompare() {
    var root = $('[data-cmp]');
    if (!root) return;
    var opts = $$('[data-cmp-opt]', root);
    function choose(btn, focus) {
      opts.forEach(function (o) { var on = o === btn; o.setAttribute('aria-checked', String(on)); o.tabIndex = on ? 0 : -1; });
      var n = btn.dataset.cmpOpt;
      $$('[data-cmp-cell]', root).forEach(function (c) { c.hidden = c.dataset.cmpCell !== n; });
      $('[data-cmp-name]', root).textContent = btn.dataset.trackName;
      if (focus) btn.focus();
    }
    opts.forEach(function (btn, i) {
      btn.addEventListener('click', function () { choose(btn, false); });
      btn.addEventListener('keydown', function (e) {
        var to = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % opts.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + opts.length) % opts.length;
        if (to === null) return;
        e.preventDefault(); choose(opts[to], true);
      });
    });
  }

  /* ---------------------------------------------------------------- FAQ */
  function initFaq() {
    var root = $('[data-faq]');
    if (!root) return;
    var items = $$('[data-faq-item]', root);
    var search = $('[data-faq-search]', root);
    var filters = $$('[data-faq-filter]', root);
    var expand = $('[data-faq-expand]', root);
    var cat = 'all';
    var more = $('[data-faq-more]', root);
    var showAll = false;
    if (more) more.addEventListener('click', function () {
      showAll = true; apply();
      var first = items.filter(function (i) { return i.hasAttribute('data-faq-extra'); })[0];
      if (first) $('summary', first).focus();
    });
    filters.forEach(function (f) {
      var k = f.dataset.faqFilter;
      $('[data-faq-count]', f).textContent = k === 'all' ? items.length : items.filter(function (i) { return i.dataset.cat === k; }).length;
    });
    function apply() {
      var q = search.value.trim().toLowerCase();
      var shown = 0;
      // Only the first eight show until the visitor asks for more, searches or filters.
      var collapsed = !showAll && !q && cat === 'all';
      items.forEach(function (item) {
        var match = (cat === 'all' || item.dataset.cat === cat) && (!q || item.textContent.toLowerCase().indexOf(q) !== -1);
        item.hidden = !match || (collapsed && item.hasAttribute('data-faq-extra'));
        if (item.hidden) return;
        shown += 1;
        if (q) item.open = true;
      });
      if (more) more.hidden = !collapsed;
      $('[data-faq-empty]', root).hidden = shown > 0;
      $('[data-faq-status]', root).textContent = shown === items.length ? 'Showing all ' + shown + ' questions' : 'Showing ' + shown + ' of ' + items.length + ' questions';
      syncExpand();
    }
    function visible() { return items.filter(function (i) { return !i.hidden; }); }
    function syncExpand() {
      var v = visible();
      var allOpen = v.length > 0 && v.every(function (i) { return i.open; });
      expand.textContent = allOpen ? 'Close all' : 'Open all';
      expand.hidden = v.length === 0;
    }
    filters.forEach(function (f) {
      f.addEventListener('click', function () {
        cat = f.dataset.faqFilter;
        filters.forEach(function (b) { b.setAttribute('aria-pressed', String(b === f)); });
        apply();
      });
    });
    var timer = null;
    search.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(apply, 120); });
    expand.addEventListener('click', function () {
      var v = visible();
      var open = !v.every(function (i) { return i.open; });
      v.forEach(function (i) { i.open = open; });
      syncExpand();
    });
    items.forEach(function (i) { i.addEventListener('toggle', syncExpand); });
    apply();
  }

  /* --------------------------------------------------- Related services */
  function initRelated() {
    var root = $('[data-related]');
    if (!root) return;
    function light(key) {
      root.classList.toggle('is-tracing', !!key);
      $$('[data-related-line]', root).forEach(function (l) { l.classList.toggle('is-lit', l.dataset.relatedLine === key); });
    }
    $$('[data-related-card]', root).forEach(function (card) {
      card.addEventListener('mouseenter', function () { light(card.dataset.relatedCard); });
      card.addEventListener('focus', function () { light(card.dataset.relatedCard); });
      card.addEventListener('mouseleave', function () { light(null); });
      card.addEventListener('blur', function () { light(null); });
    });
  }

  /* --------------------------------------------------------- Demo form */
  function initDemoForm() {
    var root = $('[data-demo]');
    if (!root) return;
    var form = $('[data-demo-form]', root);
    var success = $('[data-demo-success]', root);
    var messages = {
      name: 'Enter your name.',
      business: 'Enter your ' + copy.org + ' name.',
      industry: 'Choose your industry.',
      city: 'Choose where you are based.',
      phone: 'Enter a UK phone number, for example 0161 496 0123.',
      email: 'Enter an email address, for example name@business.co.uk.',
      consent: 'Tick the box so we can contact you about the demo.',
    };
    function check(el) {
      var v = el.type === 'checkbox' ? el.checked : el.value.trim();
      var ok = !!v;
      if (ok && el.name === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (ok && el.name === 'phone') ok = v.replace(/[^0-9]/g, '').length >= 10;
      var err = document.getElementById('demo-' + el.name + '-err');
      el.setAttribute('aria-invalid', String(!ok));
      if (err) { err.textContent = ok ? '' : messages[el.name]; err.hidden = ok; }
      return ok;
    }
    var fields = $$('[data-demo-field]', form);
    fields.forEach(function (el) {
      // Re-check while the visitor types, so error messages clear in place
      // instead of collapsing on blur and shifting the layout under the pointer.
      el.addEventListener('input', function () { if (el.getAttribute('aria-invalid') === 'true') check(el); });
      el.addEventListener('change', function () { if (el.getAttribute('aria-invalid') === 'true') check(el); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      fields.forEach(function (el) { if (!check(el) && !firstBad) firstBad = el; });
      if (firstBad) { firstBad.focus(); track('demo_form_error', { component: 'FinalCTA' }); return; }
      var data = new FormData(form);
      track('demo_form_submit', { component: 'FinalCTA', industry: data.get('industry'), city: data.get('city') });
      // Next.js: post the form data to your form handler or CRM here.
      var name = String(data.get('name') || '').trim().split(' ')[0];
      $('[data-demo-success-title]', root).textContent = name ? 'Thanks, ' + name + ", we've got it" : "Thanks, we've got it";
      form.hidden = true; success.hidden = false; success.focus();
    });
  }

  /* ------------------------------------------------- Hero city switch */
  function pickHeroCity(slug, focus) {
    var root = $('[data-call-demo]');
    var group = $('[data-call-cities]');
    if (!root || !group) return;
    var calls = JSON.parse(root.dataset.calls);
    var c = calls.filter(function (x) { return x.slug === slug; })[0];
    if (!c) return;
    $$('[data-call-city]', group).forEach(function (b) {
      var on = b.dataset.callCity === slug;
      b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    });
    $('[data-call-number]', root).textContent = c.num;
    $('[data-call-time]', root).textContent = c.time;
    $('[data-call-chip]', root).textContent = c.chip;
    $('[data-call-biz]', root).textContent = c.biz;
    $('[data-call-sub]', root).textContent = c.city + '. Answered by ' + c.agent + ', AI assistant';
    $$('[data-call-line]', root).forEach(function (li, i) {
      $('[data-call-label]', li).textContent = c.lines[i][0] === 'agent' ? c.agent : 'Caller';
      $('[data-call-text]', li).textContent = c.lines[i][1];
    });
    $$('[data-call-outcome-text]', root).forEach(function (el, i) { el.textContent = c.outcomes[i]; });
    root.setAttribute('aria-label', 'Example call answered by a voice agent for ' + c.biz + ' in ' + c.city);
    root.dispatchEvent(new CustomEvent('call:restart'));
  }
  function initHeroCities() {
    var group = $('[data-call-cities]');
    if (!group) return;
    var opts = $$('[data-call-city]', group);
    opts.forEach(function (b, i) {
      b.addEventListener('click', function () { pickHeroCity(b.dataset.callCity, false); });
      b.addEventListener('keydown', function (e) {
        var to = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % opts.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + opts.length) % opts.length;
        if (to === null) return;
        e.preventDefault(); pickHeroCity(opts[to].dataset.callCity, true);
      });
    });
  }

  /* --------------------------------------------------- Areas explorer */
  function initAreas() {
    var root = $('[data-areas]');
    if (!root) return;
    var tabs = $$('[data-area-tab]', root);
    function select(slug, focus) {
      tabs.forEach(function (t) {
        var on = t.dataset.areaTab === slug;
        t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus();
      });
      $$('[data-area-panel]', root).forEach(function (p) { p.hidden = p.dataset.areaPanel !== slug; });
      $$('[data-area-pin]', root).forEach(function (p) { p.classList.toggle('is-active', p.dataset.areaPin === slug); });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t.dataset.areaTab, false); });
      t.addEventListener('keydown', function (e) {
        var to = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % tabs.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') to = 0; else if (e.key === 'End') to = tabs.length - 1;
        if (to === null) return;
        e.preventDefault(); select(tabs[to].dataset.areaTab, true);
      });
    });
    $$('[data-area-pick]', root).forEach(function (pin) {
      pin.addEventListener('click', function () { select(pin.dataset.areaPick, false); });
    });
    // "Play this call" sends the visitor to the hero with that city's call.
    $$('[data-area-play]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        var demo = $('[data-call-demo]');
        if (!demo) return;
        demo.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'center' });
        pickHeroCity(b.dataset.areaPlay, false);
      });
    });
    // City links in the hero trust strip open that city here.
    $$('[data-city-jump]').forEach(function (a) {
      a.addEventListener('click', function () { select(a.dataset.cityJump, false); });
    });
  }

  /* -------------------------------------------------- Industry picker */
  function initIndustryPicker() {
    var root = $('[data-ind]');
    if (!root) return;
    var tabs = $$('[data-ind-tab]', root);
    function select(i, focus) {
      tabs.forEach(function (t, n) {
        var on = n === i;
        t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
        $('[data-ind-panel="' + t.dataset.indTab + '"]', root).hidden = !on;
      });
      if (focus) tabs[i].focus();
      // On small screens the detail sits below the tiles, so bring it into view.
      if (!focus && window.innerWidth < 1024) {
        var panel = $('[data-ind-panel="' + tabs[i].dataset.indTab + '"]', root);
        panel.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
      }
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(i, false); });
      t.addEventListener('keydown', function (e) {
        var to = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % tabs.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') to = 0; else if (e.key === 'End') to = tabs.length - 1;
        if (to === null) return;
        e.preventDefault(); select(to, true);
      });
    });
  }

  /* ------------------------------------------------ How it works art */
  function initHowSteps() {
    var chart = $('[data-how]');
    var picks = chart ? $$('[data-how-pick]', chart) : [];
    var auto = null;
    function stopAuto() { clearInterval(auto); auto = null; }
    function play(el) {
      el.classList.remove('is-playing');
      void el.offsetWidth; // restart the animation
      el.classList.add('is-playing');
    }
    function select(i) {
      chart.dataset.howActive = String(i);
      picks.forEach(function (p, n) {
        var on = n === i;
        p.setAttribute('aria-pressed', String(on));
        if (on) play(p); else p.classList.remove('is-playing');
      });
    }
    picks.forEach(function (p, i) {
      p.addEventListener('click', function () { stopAuto(); select(i); });
      p.addEventListener('mouseenter', function () { stopAuto(); select(i); });
      p.addEventListener('focus', function () { stopAuto(); select(i); });
    });
    // Mobile cards: play each one as it scrolls into view, and again on tap.
    var cards = $$('[data-how-card]');
    cards.forEach(function (c) { c.addEventListener('click', function () { play(c); }); });
    if (!('IntersectionObserver' in window)) { cards.forEach(play); if (picks.length) select(0); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        if (e.target === chart) {
          // Walk through the four steps once, then rest on step 1.
          var n = 0;
          select(0);
          if (reduceMotion.matches) return;
          auto = setInterval(function () { n += 1; if (n > 3) { stopAuto(); select(0); return; } select(n); }, 1800);
        } else play(e.target);
      });
    }, { threshold: 0.4 });
    if (chart) io.observe(chart);
    cards.forEach(function (c) { io.observe(c); });
  }

  /* ------------------------------------------------------ Booking block */
  function initBooking() {
    var root = $('[data-bk]');
    if (!root) return;
    // Paths (tabs)
    var paths = $$('[data-bk-path]', root);
    function choosePath(i, focus) {
      paths.forEach(function (p, n) {
        var on = n === i;
        p.setAttribute('aria-selected', String(on)); p.tabIndex = on ? 0 : -1;
        $('[data-bk-panel="' + p.dataset.bkPath + '"]', root).hidden = !on;
      });
      if (focus) paths[i].focus();
    }
    paths.forEach(function (p, i) {
      p.addEventListener('click', function () { choosePath(i, false); });
      p.addEventListener('keydown', function (e) {
        var to = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % paths.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + paths.length) % paths.length;
        if (to === null) return;
        e.preventDefault(); choosePath(to, true);
      });
    });

    // Radio-style button groups
    function radioGroup(group, onPick) {
      var opts = $$('[role="radio"]', group);
      function pick(btn, focus) {
        opts.forEach(function (o) { var on = o === btn; o.setAttribute('aria-checked', String(on)); o.tabIndex = on ? 0 : -1; });
        if (focus) btn.focus();
        onPick(btn);
      }
      opts.forEach(function (o, i) {
        o.tabIndex = o.getAttribute('aria-checked') === 'true' || (i === 0 && !opts.some(function (x) { return x.getAttribute('aria-checked') === 'true'; })) ? 0 : -1;
        o.addEventListener('click', function () { pick(o, false); });
        o.addEventListener('keydown', function (e) {
          var to = null;
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % opts.length;
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + opts.length) % opts.length;
          if (to === null) return;
          e.preventDefault(); pick(opts[to], true);
        });
      });
    }

    // Next five working days
    var daysBox = $('[data-bk-days]', root);
    var d = new Date(); var made = 0;
    var dayFmt = new Intl.DateTimeFormat('en-GB', { weekday: 'short' });
    var dateFmt = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' });
    var longFmt = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
    while (made < 5) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() === 0 || d.getDay() === 6) continue;
      var b = document.createElement('button');
      b.type = 'button'; b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false');
      b.className = 'bk-slot flex min-h-[60px] flex-col items-center justify-center rounded-[10px] border border-[var(--line-strong)] leading-tight aria-checked:border-ink aria-checked:bg-ink aria-checked:text-paper';
      b.dataset.bkDay = longFmt.format(d);
      b.dataset.track = 'booking_day'; b.dataset.trackName = dayFmt.format(d);
      b.innerHTML = '<span class="text-[13.5px] font-semibold opacity-75">' + dayFmt.format(d) + '</span><span class="font-display text-[16px] font-semibold">' + dateFmt.format(d) + '</span>';
      daysBox.appendChild(b); made += 1;
    }
    var slot = { day: '', time: '' };
    var sumSlot = $('[data-bk-sum-slot]', root);
    function syncSummary() {
      sumSlot.textContent = slot.day && slot.time ? slot.day + ' at ' + slot.time : slot.day ? slot.day + ', pick a time' : slot.time ? slot.time + ', pick a day' : 'Pick a day and time';
      if (slot.day && slot.time) $('[data-bk-slot-err]', root).hidden = true;
    }
    radioGroup(daysBox, function (b) { slot.day = b.dataset.bkDay; syncSummary(); });
    radioGroup($('[data-bk-times]', root), function (b) { slot.time = b.dataset.bkTime; syncSummary(); });

    // Steps
    var form = $('[data-bk-form]', root);
    function showStep(n) {
      $$('[data-bk-step]', form).forEach(function (f) { f.hidden = f.dataset.bkStep !== String(n); });
      $$('[data-bk-step-label]', form).forEach(function (l) {
        var on = Number(l.dataset.bkStepLabel) <= n;
        l.classList.toggle('text-muted', !on);
        var dot = $('span', l);
        dot.className = 'grid h-7 w-7 place-items-center rounded-full ' + (on ? 'bg-gold text-navy' : 'border border-[var(--line-strong)]');
      });
    }
    $('[data-bk-next]', form).addEventListener('click', function () {
      if (!slot.day || !slot.time) { $('[data-bk-slot-err]', root).hidden = false; return; }
      prefill();
      showStep(2);
      $('#bk-name').focus();
    });
    $('[data-bk-back]', form).addEventListener('click', function () { showStep(1); $('[data-bk-next]', form).focus(); });

    // Pre-fill industry and city from what the visitor chose higher up the page.
    function prefill() {
      var ind = $('#bk-industry'); var city = $('#bk-city');
      var calc = $('[data-calc-industry]');
      if (calc && !ind.value) {
        var name = calc.selectedOptions[0] && calc.selectedOptions[0].dataset.name;
        $$('option', ind).forEach(function (o) { if (name && o.textContent.replace('&', 'and') === name.replace('&', 'and')) ind.value = o.value; });
      }
      var heroCity = $('[data-call-city][aria-checked="true"]');
      if (heroCity && !city.value) city.value = heroCity.dataset.callCity;
    }
    var whoEl = $('[data-bk-sum-who]', root);
    function syncWho() {
      var biz = ($('#bk-business') ? $('#bk-business').value.trim() : '');
      var c = $('#bk-city'); var cityName = c.value ? c.selectedOptions[0].textContent : '';
      whoEl.textContent = biz && cityName ? biz + ', ' + cityName : biz || cityName || 'Your ' + copy.org;
    }
    ['#bk-business', '#bk-city'].forEach(function (sel) { $(sel).addEventListener('input', syncWho); $(sel).addEventListener('change', syncWho); });

    var messages = {
      name: 'Enter your name.', business: 'Enter your ' + copy.org + ' name.', industry: 'Choose your industry.',
      city: 'Choose where you are based.', phone: 'Enter a UK phone number, for example 0161 496 0123.',
      email: 'Enter an email address, for example name@business.co.uk.', consent: 'Tick the box so we can contact you about the demo.',
      'cb-name': 'Enter your name.', practice: 'Choose your type of ' + copy.org + '.', surgeries: 'Choose how many ' + copy.units + ' you have.', 'cb-phone': 'Enter a UK phone number, for example 0161 496 0123.',
    };
    function check(el) {
      var v = el.type === 'checkbox' ? el.checked : el.value.trim();
      var ok = !!v;
      if (ok && el.name === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (ok && /phone/.test(el.name)) ok = String(v).replace(/[^0-9]/g, '').length >= 10;
      var err = document.getElementById('bk-' + el.name + '-err');
      el.setAttribute('aria-invalid', String(!ok));
      if (err) { err.textContent = ok ? '' : messages[el.name]; err.hidden = ok; }
      return ok;
    }
    function wire(f) {
      var fields = $$('[data-bk-field]', f);
      fields.forEach(function (el) {
        el.addEventListener('input', function () { if (el.getAttribute('aria-invalid') === 'true') check(el); });
        el.addEventListener('change', function () { if (el.getAttribute('aria-invalid') === 'true') check(el); });
      });
      return function () {
        var bad = null;
        fields.forEach(function (el) { if (!check(el) && !bad) bad = el; });
        if (bad) bad.focus();
        return !bad;
      };
    }
    var validMain = wire(form);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validMain()) { track('demo_form_error', { component: 'FinalCTA' }); return; }
      var data = new FormData(form);
      track('demo_form_submit', { component: 'FinalCTA', industry: data.get('industry'), city: data.get('city'), slot: slot.day + ' ' + slot.time });
      var submit = $('button[type="submit"]', form);
      submit.disabled = true;
      sendEnquiry('AI voice agent demo (' + copy.org + ')', form, { 'Demo slot': slot.day + ' at ' + slot.time }).then(function (sent) {
        submit.disabled = false;
        var first = String(data.get('name') || '').trim().split(' ')[0];
        $('[data-bk-done-title]', form).textContent = !sent ? "We couldn't send that just now" : first ? 'Thanks, ' + first + ', request sent' : 'Request sent';
        $('[data-bk-done-slot]', form).textContent = sent ? slot.day + ' at ' + slot.time : 'Please call 020 3489 3934 and we will book it with you.';
        $$('[data-bk-step]', form).forEach(function (f) { f.hidden = true; });
        $('ol[aria-label="Progress"]', form).hidden = true;
        var done = $('[data-bk-done]', form); done.hidden = false; done.focus();
      });
    });

    // Call back
    var cb = $('[data-bk-back-form]', root);
    var when = 'Morning';
    radioGroup($('[data-bk-when]', cb), function (b) { when = b.dataset.bkWhenOpt; });
    var validCb = wire(cb);
    cb.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validCb()) return;
      track('callback_request', { component: 'FinalCTA', when: when });
      var submit = $('button[type="submit"]', cb);
      submit.disabled = true;
      sendEnquiry('AI voice agent call back (' + copy.org + ')', cb, { 'Best time': when }).then(function (sent) {
        submit.disabled = false;
        var ok = $('[data-bk-back-done]', cb);
        if (sent) { $('[data-bk-back-when]', cb).textContent = when.toLowerCase(); submit.hidden = true; }
        else ok.textContent = "We couldn't send that just now. Please call 020 3489 3934.";
        ok.hidden = false; ok.focus();
      });
    });
  }

  // Posts the visible fields, labelled as the visitor saw them, to the site's enquiry route.
  function sendEnquiry(name, f, extra) {
    var fields = {};
    $$('[data-bk-field]', f).forEach(function (el) {
      var label = $('label[for="' + el.id + '"]');
      var value = el.type === 'checkbox' ? (el.checked ? 'Yes' : 'No') : el.tagName === 'SELECT' && el.value ? el.selectedOptions[0].textContent : el.value;
      fields[label ? label.textContent.trim() : el.name] = value;
    });
    Object.assign(fields, extra);
    var hp = $('[name="hp"]', f);
    return fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form: name, page: location.pathname, hp: hp ? hp.value : '', fields: fields }),
    }).then(function (r) { return r.ok; }, function () { return false; });
  }

  /* --------------------------------------------------- Client stories */
  function initFeedback() {
    var root = $('[data-fb]');
    if (!root) return;
    var more = $('[data-fb-more]', root);
    if (!more) return;
    more.addEventListener('click', function () {
      var extra = $$('[data-fb-extra]', root);
      extra.forEach(function (li) { li.hidden = false; });
      more.hidden = true;
      if (extra[0]) $('button', extra[0]).focus();
    });
  }

  /* -------------------------------------------------- Section menu */
  function initSectionNav() {
    var nav = $('[data-section-nav]');
    if (!nav) return;
    var links = $$('[data-section-link]', nav);
    var bar = $('[data-section-progress]', nav);
    var targets = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
    function onScroll() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
      var line = 150, current = -1;
      targets.forEach(function (t, i) { if (t && t.getBoundingClientRect().top <= line) current = i; });
      links.forEach(function (a, i) {
        var on = i === current;
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        if (on && a.dataset.scrolled !== '1') {
          var list = a.parentElement.parentElement;
          if (list.scrollWidth > list.clientWidth) list.scrollTo({ left: a.offsetLeft - 16, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
        }
        a.dataset.scrolled = on ? '1' : '';
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }

  /* --------------------------------------------------------- Sticky bar */
  function initStickyBar() {
    var bar = $('[data-sticky-bar]');
    var hero = $('#hero');
    var end = $('#book-demo');
    if (!bar || !hero || !end || !('IntersectionObserver' in window)) return;
    var pastHero = false, nearEnd = false;
    function sync() {
      var show = pastHero && !nearEnd;
      bar.classList.toggle('is-visible', show);
      bar.inert = !show;
    }
    new IntersectionObserver(function (entries) {
      pastHero = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
      sync();
    }).observe(hero);
    new IntersectionObserver(function (entries) {
      // Hide for the final CTA and everything after it.
      nearEnd = entries[0].isIntersecting || entries[0].boundingClientRect.top < 0;
      sync();
    }, { rootMargin: '0px 0px -10% 0px' }).observe(end);
  }

  /* ----------------------------------------------- Partner margin */
  function initPartnerMargin() {
    var root = $('[data-wl2]');
    if (!root) return;
    var stage = $('[data-wl2-stage]', root);
    var input = $('[data-wl2-price]', root);
    var cost = (+root.getAttribute('data-wl2-minutes') * +root.getAttribute('data-wl2-rate')) / 100;
    var money = function (n) { return (n < 0 ? '-£' : '£') + Math.abs(n).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','); };
    function render(price, shown) {
      var margin = price - cost;
      if (shown !== undefined) { $('[data-wl2-out="margin"]', root).textContent = money(shown); return; }
      $('[data-wl2-out="price"]', root).textContent = money(price);
      $('[data-wl2-out="margin"]', root).textContent = money(margin);
      $('[data-wl2-out="note"]', root).textContent = margin < 0 ? 'a loss on each client' : 'a month, per client';
      root.classList.toggle('wl2-neg', margin < 0);
    }
    input.addEventListener('input', function () {
      var v = parseFloat(input.value);
      if (isNaN(v) || v < 0) v = 0;
      if (v > 5000) v = 5000;
      render(v);
    });

    if (reduceMotion.matches || !('IntersectionObserver' in window)) return;
    root.classList.add('js-wl2');
    var target = parseFloat(input.value) || 0;
    var io = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      stage.classList.add('is-in');
      render(target, 0);
      // Count the margin up once the sum card has landed.
      var start = null;
      setTimeout(function () {
        function step(t) {
          if (start === null) start = t;
          var k = Math.min((t - start) / 700, 1);
          var eased = 1 - Math.pow(1 - k, 3);
          if (document.activeElement !== input) render(target, (target - cost) * eased);
          if (k < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }, 650);
    }, { threshold: 0.25 });
    io.observe(stage);
  }

  /* ------------------------------------------------------ Scroll reveal */
  function initReveal() {
    var groups = $$('[data-reveal-group]');
    if (!groups.length || reduceMotion.matches || !('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('js-reveal');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        // Also reveal anything the visitor has already scrolled past (fast scrolls, anchor jumps).
        if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) return;
        var el = entry.target;
        var order = $$('[data-reveal]', el.closest('[data-reveal-group]')).indexOf(el);
        el.style.transitionDelay = Math.min(order, 5) * 80 + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { threshold: 0.12 });
    $$('[data-reveal]').forEach(function (el) { io.observe(el); });
  }

  window.track = track;
  initTracking();
  initPartnerMargin();
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
  initHeroCities();
  initAreas();
  initIndustryPicker();
  initHowSteps();
  initBooking();
  initFeedback();
  initSectionNav();
  initStickyBar();
  initReveal();
})();

/* ===================== Dental Clinics page ===================== */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var gbp = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
  var num = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 });

  /* Hero: live front desk steps */
  function initFrontDesk() {
    var root = $('[data-fd]');
    if (!root) return;
    var steps = $$('[data-fd-step]', root);
    function show(n) {
      steps.forEach(function (s, i) {
        s.classList.toggle('is-done', i < n);
        s.classList.toggle('is-current', i === n);
      });
    }
    if (reduce.matches) { show(steps.length); return; }
    var i = 0, paused = false;
    show(0);
    root.addEventListener('mouseenter', function () { paused = true; });
    root.addEventListener('mouseleave', function () { paused = false; });
    setInterval(function () {
      if (paused || document.hidden) return;
      i = (i + 1) % (steps.length + 2); // hold on "all done" for a beat
      show(Math.min(i, steps.length));
    }, 1400);
  }

  /* Hear it: practice greeting */
  function initHear() {
    var root = $('[data-hear]');
    if (!root) return;
    var form = $('[data-hear-form]', root), input = $('[data-hear-name]', root);
    var out = $('[data-hear-text]', root), nameEl = $('[data-hear-practice]', root), ini = $('[data-hear-initials]', root);
    var timer = null;
    function initials(n) {
      var w = n.replace(/&/g, ' ').split(/\s+/).filter(Boolean);
      return ((w[0] || '?')[0] + (w[1] ? w[1][0] : '')).toUpperCase();
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = input.value.trim().replace(/\s+/g, ' ') || copy.demoName;
      var hour = new Date().getHours();
      var part = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
      var text = '“' + part + ', ' + name + '. ' + copy.greeting + '”';
      nameEl.textContent = name;
      ini.textContent = initials(name);
      clearInterval(timer);
      if (window.speechSynthesis && window.SpeechSynthesisUtterance) {
        try {
          speechSynthesis.cancel();
          var u = new SpeechSynthesisUtterance(text.replace(/[“”]/g, ''));
          u.lang = 'en-GB'; u.rate = 0.98;
          var gb = speechSynthesis.getVoices().filter(function (v) { return /en-GB/i.test(v.lang); })[0];
          if (gb) u.voice = gb;
          speechSynthesis.speak(u);
        } catch (err) {}
      }
      if (reduce.matches) { out.textContent = text; return; }
      var i = 0;
      root.classList.add('is-speaking');
      out.textContent = '';
      timer = setInterval(function () {
        i += 2; out.textContent = text.slice(0, i);
        if (i >= text.length) { clearInterval(timer); setTimeout(function () { root.classList.remove('is-speaking'); }, 600); }
      }, 34);
    });
  }

  /* Missed calls calculator */
  function initCalc() {
    var root = $('[data-dc-root]');
    if (!root) return;
    function v(k) { return parseFloat($('[data-dc="' + k + '"]', root).value) || 0; }
    function set(k, t) { $('[data-dc-res="' + k + '"]', root).textContent = t; }
    function update() {
      ['calls', 'missed', 'newp', 'book'].forEach(function (k) { $('[data-dc-out="' + k + '"]', root).textContent = num.format(v(k)); });
      var valEl = $('[data-dc="value"]', root);
      var value = Math.min(Math.max(v('value'), 0), 20000);
      valEl.setAttribute('aria-invalid', String(v('value') < 0 || v('value') > 20000));
      var missed = v('calls') * v('missed') / 100;
      var newN = missed * v('newp') / 100;
      var bookN = newN * v('book') / 100;
      set('missedN', num.format(missed)); set('newN', num.format(newN)); set('bookN', num.format(bookN));
      var max = Math.max(missed, 1);
      $('[data-dc-bar="missedN"]', root).style.width = '100%';
      $('[data-dc-bar="newN"]', root).style.width = (newN / max * 100) + '%';
      $('[data-dc-bar="bookN"]', root).style.width = (bookN / max * 100) + '%';
      var lost = bookN * value;
      set('lost', gbp.format(lost)); set('year', gbp.format(lost * 12));
      // About three minutes a call, for the calls the agent would pick up.
      var minutes = missed * 3;
      var plan = minutes <= 300 ? 'Starter' : minutes <= 800 ? 'Growth' : 'Scale';
      set('plan', 'About ' + num.format(minutes) + ' minutes a month. The ' + plan + ' plan would cover these calls.');
    }
    $$('[data-dc]', root).forEach(function (el) { el.addEventListener('input', update); });
    update();
  }

  /* How it works: steps that play through */
  function initHow() {
    var root = $('[data-hw3]');
    if (!root) return;
    root.classList.add('js-hw3');
    var picks = $$('[data-hw3-pick]', root), cards = $$('[data-hw3-card]', root);
    var fill = $('[data-hw3-fill]', root), dot = $('[data-hw3-dot]', root);
    var n = cards.length, timer = null, current = 0;
    function show(i) {
      current = i;
      picks.forEach(function (p, k) { p.setAttribute('aria-pressed', String(k === i)); p.classList.toggle('is-done', k < i); });
      cards.forEach(function (c, k) {
        var on = k === i;
        c.classList.remove('is-active');
        if (on) { void c.offsetWidth; c.classList.add('is-active'); } // restart the reveal
      });
      var pct = (i / (n - 1)) * 100;
      fill.style.width = pct + '%';
      dot.style.left = pct + '%';
    }
    function stop() { clearInterval(timer); timer = null; }
    function play() {
      stop();
      if (reduce.matches) { show(0); return; }
      show(0);
      timer = setInterval(function () {
        if (current >= n - 1) { stop(); return; }
        show(current + 1);
      }, 3200);
    }
    picks.forEach(function (p) { p.addEventListener('click', function () { stop(); show(+p.dataset.hw3Pick); }); });
    cards.forEach(function (c) {
      c.addEventListener('click', function (e) { if (e.target.closest('button')) return; stop(); show(+c.dataset.hw3Card); });
    });
    // Booking or urgent outcome inside step 2
    $$('[data-hw3-type]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        stop();
        $$('[data-hw3-type]', root).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        $$('[data-hw3-out]', root).forEach(function (o) { o.hidden = o.dataset.hw3Out !== b.dataset.hw3Type; });
        show(1);
      });
    });
    $('[data-hw3-replay]', root).addEventListener('click', play);
    show(0);
    if (reduce.matches || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io.disconnect(); play(); } }, { threshold: 0.45 });
    io.observe(root);
  }

  /* Front desk day chart */
  function initDay() {
    var root = $('[data-pd]');
    if (!root) return;
    var tip = $('[data-pd-tip]', root), plot = tip.parentElement, bars = $$('[data-pd-bar]', root);
    function pad(h) { return (h < 10 ? '0' : '') + h + ':00'; }
    function show(b) {
      bars.forEach(function (x) { x.classList.toggle('is-hot', x === b); });
      var h = +b.dataset.h, c = +b.dataset.c, m = +b.dataset.m, agent = root.dataset.mode === 'agent';
      var closed = b.parentElement.classList.contains('is-closed');
      tip.innerHTML = '<p class="font-semibold">' + pad(h) + ' to ' + pad(h + 1) + (closed ? ' <span class="font-normal text-muted">(closed)</span>' : '') + '</p>' +
        '<p class="mt-1 flex justify-between gap-3"><span class="text-muted">Calls</span><span class="font-semibold tnum">' + c + '</span></p>' +
        '<p class="flex justify-between gap-3"><span class="text-muted">Your team</span><span class="font-semibold tnum">' + (c - m) + '</span></p>' +
        '<p class="flex justify-between gap-3"><span class="text-muted">' + (agent ? 'Your AI agent' : 'Missed') + '</span><span class="font-semibold tnum">' + m + '</span></p>';
      tip.classList.remove('hidden');
      var pr = plot.getBoundingClientRect(), br = b.getBoundingClientRect();
      var left = br.left - pr.left + br.width / 2 - tip.offsetWidth / 2;
      left = Math.max(0, Math.min(left, pr.width - tip.offsetWidth));
      var top = br.top - pr.top - tip.offsetHeight - 10;
      if (top < 0) top = 0;
      tip.style.left = left + 'px'; tip.style.top = top + 'px';
    }
    function hide() { tip.classList.add('hidden'); bars.forEach(function (x) { x.classList.remove('is-hot'); }); }
    bars.forEach(function (b) {
      b.addEventListener('mouseenter', function () { show(b); });
      b.addEventListener('focus', function () { show(b); });
      b.addEventListener('click', function () { show(b); });
      b.addEventListener('blur', hide);
    });
    plot.addEventListener('mouseleave', hide);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
    $$('[data-pd-mode]', root).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mode = btn.dataset.pdMode;
        root.dataset.mode = mode;
        $$('[data-pd-mode]', root).forEach(function (x) { x.setAttribute('aria-pressed', String(x === btn)); });
        $$('[data-pd-legend]', root).forEach(function (x) { x.hidden = x.dataset.pdLegend !== mode; });
        $$('[data-pd-sum]', root).forEach(function (x) { x.hidden = x.dataset.pdSum !== mode; });
        bars.forEach(function (b) {
          var c = +b.dataset.c, m = +b.dataset.m;
          b.setAttribute('aria-label', b.getAttribute('aria-label').replace(/, \d+ (missed|answered by your AI agent)/, ', ' + m + (mode === 'agent' ? ' answered by your AI agent' : ' missed')));
        });
        hide();
      });
    });
  }

  /* Your team: when it answers */
  function initTeam() {
    var root = $('[data-team]');
    if (!root) return;
    var opts = $$('[data-team-mode]', root);
    function pick(o, focus) {
      opts.forEach(function (x) { var on = x === o; x.setAttribute('aria-checked', String(on)); x.tabIndex = on ? 0 : -1; });
      $$('[data-team-panel]', root).forEach(function (p) { p.hidden = p.dataset.teamPanel !== o.dataset.teamMode; });
      if (focus) o.focus();
    }
    opts.forEach(function (o, i) {
      o.addEventListener('click', function () { pick(o, false); });
      o.addEventListener('keydown', function (e) {
        var to = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') to = (i + 1) % opts.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') to = (i - 1 + opts.length) % opts.length;
        if (to === null) return;
        e.preventDefault(); pick(opts[to], true);
      });
    });
  }

  /* Getting started checklist */
  function initChecklist() {
    var root = $('[data-ck]');
    if (!root) return;
    var items = $$('[data-ck-item]', root);
    function sync() {
      var n = items.filter(function (i) { return i.checked; }).length;
      $('[data-ck-bar]', root).style.width = (n / items.length * 100) + '%';
      $('[data-ck-status]', root).textContent = n === items.length ? 'All ' + n + ' ready. You could be set up quickly.' : n + ' of ' + items.length + ' ready';
    }
    items.forEach(function (i) { i.addEventListener('change', sync); });
    sync();
  }

  /* Features filter */
  function initFeatures() {
    var root = $('[data-ft]');
    if (!root) return;
    var btns = $$('[data-ft-filter]', root), cards = $$('[data-ft-who]', root), status = $('[data-ft-status]', root);
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.dataset.ftFilter, shown = 0;
        btns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        cards.forEach(function (c) {
          var on = k === 'all' || c.dataset.ftWho === k;
          c.hidden = !on;
          c.classList.remove('is-shown');
          if (on) { shown++; void c.offsetWidth; c.classList.add('is-shown'); }
        });
        status.textContent = 'Showing ' + shown + ' features';
      });
    });
  }

  /* Workflows hub */
  function initWorkflows() {
    var root = $('[data-wf-root]');
    if (!root) return;
    var cards = $$('[data-wf]', root);
    cards.forEach(function (c) {
      c.addEventListener('click', function () {
        cards.forEach(function (x) { x.setAttribute('aria-pressed', String(x === c)); });
        $$('[data-wf-panel]', root).forEach(function (p) { p.hidden = p.dataset.wfPanel !== c.dataset.wf; });
        // On smaller screens the details sit below all six cards, so bring them into view.
        if (window.innerWidth < 1024) $('#wf-panel').scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'start' });
      });
    });
  }

  initFrontDesk();
  initHear();
  initCalc();
  initWorkflows();
  initHow();
  initFeatures();
  initDay();
  initTeam();
  initChecklist();
})();

/* ===================== Dental Clinics v2 ===================== */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var gbp = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
  var num = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 });

  /* Patient journey: the path fills as you scroll */
  function initJourney() {
    var root = $('[data-journey]');
    if (!root) return;
    var stops = $$('[data-journey-stop]', root);
    var fill = $('[data-journey-fill]', root), fillM = $('[data-journey-fill-m]', root);
    var ticking = false;
    function sync() {
      ticking = false;
      var vh = window.innerHeight, line = vh * 0.62, lit = 0;
      var desktop = window.innerWidth >= 1024;
      if (desktop) {
        var r = root.getBoundingClientRect();
        var p = Math.min(1, Math.max(0, (line - (r.top + 200)) / (r.height * 0.55)));
        lit = Math.round(p * (stops.length - 1)) + (p > 0 ? 1 : 0);
        fill.style.width = (p * 100) + '%';
      } else {
        stops.forEach(function (s, i) { if (s.getBoundingClientRect().top < line) lit = i + 1; });
        var first = stops[0].getBoundingClientRect(), last = stops[stops.length - 1].getBoundingClientRect();
        var pm = Math.min(1, Math.max(0, (line - first.top) / Math.max(1, last.top - first.top)));
        fillM.style.height = (pm * 100) + '%';
      }
      stops.forEach(function (s, i) { s.classList.toggle('is-on', i < lit); });
    }
    if (reduce.matches) {
      stops.forEach(function (s) { s.classList.add('is-on'); });
      fill.style.width = '100%'; fillM.style.height = '100%';
      return;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(sync); } }, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  }

  /* Treatment flip cards */
  function initFlips() {
    $$('[data-flip-btn]').forEach(function (b) {
      b.addEventListener('click', function () {
        var on = b.getAttribute('aria-pressed') !== 'true';
        b.setAttribute('aria-pressed', String(on));
        $('[data-face="front"]', b).setAttribute('aria-hidden', String(on));
        $('[data-face="back"]', b).setAttribute('aria-hidden', String(!on));
      });
    });
  }

  /* Diary: replay last night's cancellation being filled */
  function initDiary() {
    var root = $('[data-diary]');
    if (!root) return;
    var status = $('[data-diary-status]', root), t1, t2;
    root.classList.add('is-filled');
    $('[data-diary-play]', root).addEventListener('click', function () {
      clearTimeout(t1); clearTimeout(t2);
      root.classList.remove('is-filled');
      $$('.dslot.is-ai', root).forEach(function (s) { s.classList.remove('is-pop'); });
      status.textContent = '18:31: a patient cancels Thursday 10:00. Amy offers the slot to the waitlist.';
      t1 = setTimeout(function () {
        $$('.dslot.is-ai', root).forEach(function (s, i) { setTimeout(function () { s.classList.add('is-pop'); }, reduce.matches ? 0 : i * 180); });
      }, reduce.matches ? 0 : 300);
      t2 = setTimeout(function () {
        root.classList.add('is-filled');
        status.textContent = '18:47: Mr Evans takes the slot. 5 bookings made by Amy overnight, 1 cancellation filled.';
      }, reduce.matches ? 0 : 1600);
    });
  }

  /* Chair-time calculator */
  function initChairCalc() {
    var root = $('[data-cc-root]');
    if (!root) return;
    function v(k) { return parseFloat($('[data-cc="' + k + '"]', root).value) || 0; }
    function set(k, t) { $('[data-cc-res="' + k + '"]', root).textContent = t; }
    function update() {
      ['calls', 'missed', 'book', 'appts', 'fta'].forEach(function (k) { $('[data-cc-out="' + k + '"]', root).textContent = num.format(v(k)); });
      var valueIn = v('value');
      $('[data-cc="value"]', root).setAttribute('aria-invalid', String(valueIn < 0 || valueIn > 5000));
      var value = Math.min(Math.max(valueIn, 0), 5000);
      var missed = v('calls') * v('missed') / 100;
      var lostBook = missed * v('book') / 100;
      var fta = v('appts') * v('fta') / 100;
      set('missedN', num.format(missed)); set('lostBook', num.format(lostBook)); set('ftaN', num.format(fta));
      set('hours', num.format((lostBook + fta) * 0.5));
      var month = (lostBook + fta) * value;
      set('value', gbp.format(month)); set('year', gbp.format(month * 12));
    }
    $$('[data-cc]', root).forEach(function (el) { el.addEventListener('input', update); });
    update();
  }

  initJourney();
  initFlips();
  initDiary();
  initChairCalc();
})();
}
