// Body of the AI voice agents page, ported from the standalone design file
// (ai-voice-agents-v4.html) without its stand-in header and footer. Rendered as
// HTML by app/ai-voice-agents/page.tsx; the interactive parts are wired up by
// components/voice-agents/VoiceAgentsScript.tsx, which finds them by data-*.
// Styles: app/ai-voice-agents/voice-agents.css (everything under .va-page).
// [CONFIRM] / [PLACEHOLDER] chips mark copy the client still has to confirm.
export const voiceAgentsMarkup = String.raw`
<svg xmlns="http://www.w3.org/2000/svg" class="hidden" aria-hidden="true">
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></symbol>
  <symbol id="i-phone-missed" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="m16 2 6 6M22 2l-6 6"/></symbol>
  <symbol id="i-phone-incoming" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M16 2v6h6M22 2l-6 6"/></symbol>
  <symbol id="i-phone-forwarded" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14 6h8M18 2l4 4-4 4"/></symbol>
  <symbol id="i-play" viewBox="0 0 24 24"><polygon points="6 3 20 12 6 21 6 3"/></symbol>
  <symbol id="i-pause" viewBox="0 0 24 24"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></symbol>
  <symbol id="i-replay" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></symbol>
  <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></symbol>
  <symbol id="i-moon" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></symbol>
  <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>
  <symbol id="i-minus" viewBox="0 0 24 24"><path d="M5 12h14"/></symbol>
  <symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></symbol>
  <symbol id="i-arrow-up-right" viewBox="0 0 24 24"><path d="M7 7h10v10M7 17 17 7"/></symbol>
  <symbol id="i-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></symbol>
  <symbol id="i-calendar" viewBox="0 0 24 24"><path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></symbol>
  <symbol id="i-map-pin" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></symbol>
  <symbol id="i-message" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></symbol>
  <symbol id="i-home" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></symbol>
  <symbol id="i-tooth" viewBox="0 0 24 24"><path d="M12 5.5c1.5-1.5 4-2.5 6-1 2.5 1.8 2 5 1 7-1 2-1.5 4.5-2 8-.3 1.6-2 1.7-2.5.2L13.5 15c-.5-1.5-2.5-1.5-3 0l-1 4.7c-.5 1.5-2.2 1.4-2.5-.2-.5-3.5-1-6-2-8-1-2-1.5-5.2 1-7 2-1.5 4.5-.5 6 1z"/></symbol>
  <symbol id="i-stethoscope" viewBox="0 0 24 24"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></symbol>
  <symbol id="i-wrench" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></symbol>
  <symbol id="i-flame" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></symbol>
  <symbol id="i-hard-hat" viewBox="0 0 24 24"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/></symbol>
  <symbol id="i-scale" viewBox="0 0 24 24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></symbol>
  <symbol id="i-car" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></symbol>
  <symbol id="i-plus-star" viewBox="0 0 24 24"><path d="M12 2 C12.6 8 16 11.4 22 12 C16 12.6 12.6 16 12 22 C11.4 16 8 12.6 2 12 C8 11.4 11.4 8 12 2 Z" fill="currentColor" stroke="none"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></symbol>
</svg>

<section id="hero" data-component="Hero" class="relative">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 grid items-center gap-12 pb-16 pt-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] lg:gap-14 lg:pb-24 lg:pt-20">
    <div>
      <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>AI voice agents for UK service businesses</p>
      <h1>An AI receptionist that answers, books and follows up, <span class="hl">day and night</span></h1>
      <p class="mt-6 max-w-[34rem] text-[20px] leading-[1.55] text-muted">When your team can't get to the phone, your voice agent picks up in your business's name, books the appointment into your diary and passes anything complicated to a person. OMH builds it, tests it and manages it for you.</p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href="/contact?service=ai-voice-agents" class="btn btn-primary" data-track="hero_book_demo">Book a Voice Agent Demo</a>
        <a href="#video" class="btn btn-secondary" data-track="hero_hear_sample"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-play"/></svg>Hear a sample call</a>
      </div>
      <p class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[16.5px] text-muted">
        Or call our demo agent now:
        <a href="tel:" class="text-link tnum" data-demo-number data-track="hero_demo_number_call"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-phone"/></svg>[DEMO NUMBER]</a><span class="flag">[PLACEHOLDER]</span>
      </p>
      <dl class="mt-10 grid max-w-[36rem] grid-cols-3 border-t border-line">
        <div class="pr-3 pt-5">
          <dd class="font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] font-semibold leading-none tracking-tight tnum">98%</dd>
          <dt class="mt-2 text-[15px] leading-snug text-muted">of calls answered</dt>
        </div>
        <div class="border-l border-line px-3 pt-5 sm:px-5">
          <dd class="font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] font-semibold leading-none tracking-tight tnum">2 sec</dd>
          <dt class="mt-2 text-[15px] leading-snug text-muted">average time to pick up</dt>
        </div>
        <div class="border-l border-line pl-3 pt-5 sm:pl-5">
          <dd class="font-display text-[clamp(1.5rem,1.1rem+1.6vw,2.25rem)] font-semibold leading-none tracking-tight tnum">340</dd>
          <dt class="mt-2 text-[15px] leading-snug text-muted">bookings made a month</dt>
        </div>
      </dl>
    </div>

        <div data-call-demo class="card relative overflow-hidden shadow-[0_24px_60px_-28px_rgb(16_24_40/0.35)]" role="group" aria-label="Example call answered by a voice agent">
      <div class="flex items-center justify-between gap-3 border-b border-line bg-sand px-5 py-3.5 text-[15px]">
        <span class="flex items-center gap-2 font-semibold"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-phone-incoming"/></svg><span class="tnum">0161 496 0123</span></span>
        <span class="flex items-center gap-2 text-muted"><span class="tnum">Tue 19:42</span><span class="chip !py-0.5">Practice closed</span></span>
      </div>
      <div class="flex items-center justify-between gap-4 px-5 pt-5">
        <div>
          <p class="font-display text-[19px] font-semibold leading-tight">Albion Square Dental</p>
          <p class="text-[15px] text-muted">Manchester. Answered by Amy, AI assistant</p>
        </div>
        <div class="flex items-center gap-3" data-call-status>
          <span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
          <span class="font-display text-[17px] font-semibold tnum" data-call-timer aria-hidden="true">00:31</span>
        </div>
      </div>
      <ol class="space-y-3 px-5 pb-2 pt-5 text-[16.5px] leading-[1.45]">
        <li data-call-line data-speaker="agent" class="max-w-[88%]"><span class="mb-1 block text-[13px] font-semibold text-hl">Amy</span><span class="block rounded-[4px_14px_14px_14px] bg-sand px-3.5 py-2.5">Good evening, Albion Square Dental. I'm Amy, the practice's AI assistant. How can I help?</span></li>
        <li data-call-line data-speaker="caller" class="ml-auto max-w-[80%]"><span class="mb-1 block text-right text-[13px] font-semibold text-muted">Caller</span><span class="block rounded-[14px_4px_14px_14px] border border-line px-3.5 py-2.5">Hi, I've chipped a tooth. Can I get an appointment this week?</span></li>
        <li data-call-line data-speaker="agent" class="max-w-[88%]"><span class="mb-1 block text-[13px] font-semibold text-hl">Amy</span><span class="block rounded-[4px_14px_14px_14px] bg-sand px-3.5 py-2.5">Of course. I can book you in with a dentist. I have Thursday at 9:10 or Friday at 2:30. Which suits you?</span></li>
        <li data-call-line data-speaker="caller" class="ml-auto max-w-[80%]"><span class="mb-1 block text-right text-[13px] font-semibold text-muted">Caller</span><span class="block rounded-[14px_4px_14px_14px] border border-line px-3.5 py-2.5">Thursday morning, please.</span></li>
        <li data-call-line data-speaker="agent" class="max-w-[88%]"><span class="mb-1 block text-[13px] font-semibold text-hl">Amy</span><span class="block rounded-[4px_14px_14px_14px] bg-sand px-3.5 py-2.5">That's booked: Thursday at 9:10 with Dr Patel. I'll text you a confirmation now.</span></li>
      </ol>
      <ul class="mx-5 mb-4 mt-3 grid gap-1.5 border-t border-line pt-4 text-[15.5px] font-semibold">
        <li data-call-outcome class="flex items-center gap-2 text-ok"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span class="text-ink">Appointment booked, Thu 09:10</span></li>
        <li data-call-outcome class="flex items-center gap-2 text-ok"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span class="text-ink">Confirmation text sent</span></li>
        <li data-call-outcome class="flex items-center gap-2 text-ok"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span class="text-ink">Summary sent to reception</span></li>
      </ul>
      <div class="flex items-center justify-between gap-3 border-t border-line px-3 py-1.5">
        <div class="flex items-center">
          <button type="button" class="inline-flex min-h-[44px] items-center gap-2 rounded-[10px] px-3 text-[15px] font-semibold hover:bg-ink/5" data-call-toggle data-track="hero_call_pause" hidden><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-pause"/></svg><span data-call-toggle-label>Pause</span></button>
          <button type="button" class="inline-flex min-h-[44px] items-center gap-2 rounded-[10px] px-3 text-[15px] font-semibold hover:bg-ink/5" data-call-replay data-track="hero_call_replay" hidden><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-replay"/></svg>Replay</button>
        </div>
        <span class="pr-2 text-[13.5px] text-muted">Illustrative call</span>
      </div>
    </div>
  </div>

  <div class="border-y border-line">
    <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 flex flex-col gap-x-8 gap-y-2 py-5 text-[16px] text-muted md:flex-row md:items-center md:justify-between">
      <p class="flex items-start gap-2"><svg class="icon mt-1 text-hl" aria-hidden="true" focusable="false"><use href="#i-map-pin"/></svg><span>Voice agents for businesses in <strong class="font-semibold text-ink">London, Birmingham, Manchester, Leeds, Liverpool and Bristol</strong></span></p>
      <p class="md:text-right">Built and managed remotely from Essex by a UK team</p>
    </div>
  </div>
</section>

<section id="overview" data-component="Overview" class="on-band bg-band text-band-ink">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 grid gap-12 py-20 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:py-28">
    <div>
      <p class="eyebrow eyebrow-band"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>What a voice agent is</p>
      <h2>The calls you miss are customers <span class="hl">ringing someone else</span></h2>
      <div class="mt-6 space-y-4 text-band-muted">
        <p>An AI voice agent is a phone assistant that answers your business line and talks to callers in natural speech. It understands what they need, answers from the information you have approved, books appointments into your diary and sends your team a written summary of every call.</p>
        <p>It matters because most callers don't leave a voicemail. Someone with a leaking pipe, a broken tooth or a viewing to arrange wants it sorted now, so they try the next number on the list. You never find out that the call happened.</p>
        <p class="text-band-ink">A voice agent answers on the first ring, at lunchtime, at 9pm and on bank holidays. Your team keeps the conversations that need a person.</p>
      </div>
    </div>

        <div data-ledger data-mode="without" class="self-start rounded-[14px] border border-band-line bg-band-surface">
      <div class="flex flex-col gap-4 border-b border-band-line p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="font-display text-[19px] font-semibold leading-tight">Aire Valley Heating, Leeds</p>
          <p class="text-[15px] text-band-muted">Calls after 5:30pm on a Tuesday. Illustrative example.</p>
        </div>
        <fieldset class="shrink-0">
          <legend class="sr-only">Show the evening's calls</legend>
          <div class="inline-grid grid-cols-2 rounded-[10px] border border-band-line p-1 text-[15px] font-semibold">
            <label class="relative">
              <input type="radio" name="ledger-mode" value="without" class="peer sr-only" checked data-ledger-input data-track="ledger_toggle" data-track-name="without">
              <span class="flex min-h-[40px] items-center justify-center rounded-[7px] px-3 text-band-muted peer-checked:bg-band-ink peer-checked:text-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-band-hl dark:peer-checked:text-[#14120e]">Without an agent</span>
            </label>
            <label class="relative">
              <input type="radio" name="ledger-mode" value="with" class="peer sr-only" data-ledger-input data-track="ledger_toggle" data-track-name="with">
              <span class="flex min-h-[40px] items-center justify-center rounded-[7px] px-3 text-band-muted peer-checked:bg-gold peer-checked:text-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-band-hl">With an agent</span>
            </label>
          </div>
        </fieldset>
      </div>
      <ul class="divide-y divide-band-line">
        <li data-ledger-row class="grid grid-cols-[3.4rem_minmax(0,1fr)] items-start gap-x-3 px-5 py-3.5 sm:grid-cols-[3.4rem_8.6rem_minmax(0,1fr)]">
          <span class="font-display text-[16px] font-semibold tnum">17:48</span>
          <span class="text-[15.5px] text-band-muted tnum max-sm:col-start-2">0113 496 0188</span>
          <span class="ledger-status text-[16px] leading-snug max-sm:col-start-2">
            <span data-ledger-without class="flex items-start gap-2 text-band-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-phone-missed"/></svg><span>Missed, no voicemail</span></span>
            <span data-ledger-with hidden class="flex items-start gap-2"><svg class="icon mt-[3px] text-band-ok" aria-hidden="true" focusable="false"><use href="#i-calendar"/></svg><span><strong class="font-semibold text-band-ok">Booked.</strong> Boiler service booked, Thu 08:00</span></span>
          </span>
        </li>
        <li data-ledger-row class="grid grid-cols-[3.4rem_minmax(0,1fr)] items-start gap-x-3 px-5 py-3.5 sm:grid-cols-[3.4rem_8.6rem_minmax(0,1fr)]">
          <span class="font-display text-[16px] font-semibold tnum">18:15</span>
          <span class="text-[15.5px] text-band-muted tnum max-sm:col-start-2">07700 900412</span>
          <span class="ledger-status text-[16px] leading-snug max-sm:col-start-2">
            <span data-ledger-without class="flex items-start gap-2 text-band-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-phone-missed"/></svg><span>Missed, no voicemail</span></span>
            <span data-ledger-with hidden class="flex items-start gap-2"><svg class="icon mt-[3px] text-band-ok" aria-hidden="true" focusable="false"><use href="#i-phone-forwarded"/></svg><span><strong class="font-semibold text-band-ok">Transferred.</strong> No heating: put through to the on-call engineer</span></span>
          </span>
        </li>
        <li data-ledger-row class="grid grid-cols-[3.4rem_minmax(0,1fr)] items-start gap-x-3 px-5 py-3.5 sm:grid-cols-[3.4rem_8.6rem_minmax(0,1fr)]">
          <span class="font-display text-[16px] font-semibold tnum">18:52</span>
          <span class="text-[15.5px] text-band-muted tnum max-sm:col-start-2">0113 496 0107</span>
          <span class="ledger-status text-[16px] leading-snug max-sm:col-start-2">
            <span data-ledger-without class="flex items-start gap-2 text-band-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-phone-missed"/></svg><span>Voicemail, no message left</span></span>
            <span data-ledger-with hidden class="flex items-start gap-2"><svg class="icon mt-[3px] text-band-ok" aria-hidden="true" focusable="false"><use href="#i-calendar"/></svg><span><strong class="font-semibold text-band-ok">Booked.</strong> Quote visit booked, Mon 14:30</span></span>
          </span>
        </li>
        <li data-ledger-row class="grid grid-cols-[3.4rem_minmax(0,1fr)] items-start gap-x-3 px-5 py-3.5 sm:grid-cols-[3.4rem_8.6rem_minmax(0,1fr)]">
          <span class="font-display text-[16px] font-semibold tnum">19:30</span>
          <span class="text-[15.5px] text-band-muted tnum max-sm:col-start-2">07700 900265</span>
          <span class="ledger-status text-[16px] leading-snug max-sm:col-start-2">
            <span data-ledger-without class="flex items-start gap-2 text-band-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-phone-missed"/></svg><span>Missed</span></span>
            <span data-ledger-with hidden class="flex items-start gap-2"><svg class="icon mt-[3px] text-band-ok" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span><strong class="font-semibold text-band-ok">Answered.</strong> Service plan question answered, details sent by text</span></span>
          </span>
        </li>
        <li data-ledger-row class="grid grid-cols-[3.4rem_minmax(0,1fr)] items-start gap-x-3 px-5 py-3.5 sm:grid-cols-[3.4rem_8.6rem_minmax(0,1fr)]">
          <span class="font-display text-[16px] font-semibold tnum">20:07</span>
          <span class="text-[15.5px] text-band-muted tnum max-sm:col-start-2">0113 496 0154</span>
          <span class="ledger-status text-[16px] leading-snug max-sm:col-start-2">
            <span data-ledger-without class="flex items-start gap-2 text-band-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-phone-missed"/></svg><span>Missed, rang again at 20:09</span></span>
            <span data-ledger-with hidden class="flex items-start gap-2"><svg class="icon mt-[3px] text-band-ok" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span><strong class="font-semibold text-band-ok">Answered.</strong> Message taken for accounts</span></span>
          </span>
        </li>
        <li data-ledger-row class="grid grid-cols-[3.4rem_minmax(0,1fr)] items-start gap-x-3 px-5 py-3.5 sm:grid-cols-[3.4rem_8.6rem_minmax(0,1fr)]">
          <span class="font-display text-[16px] font-semibold tnum">21:41</span>
          <span class="text-[15.5px] text-band-muted tnum max-sm:col-start-2">07700 900731</span>
          <span class="ledger-status text-[16px] leading-snug max-sm:col-start-2">
            <span data-ledger-without class="flex items-start gap-2 text-band-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-phone-missed"/></svg><span>Missed</span></span>
            <span data-ledger-with hidden class="flex items-start gap-2"><svg class="icon mt-[3px] text-band-ok" aria-hidden="true" focusable="false"><use href="#i-calendar"/></svg><span><strong class="font-semibold text-band-ok">Booked.</strong> Radiator repair booked, Wed 11:00</span></span>
          </span>
        </li>
      </ul>
      <div class="grid grid-cols-3 border-t border-band-line text-center" aria-live="polite" data-ledger-summary>
        <p class="px-2 py-4"><span class="block font-display text-[28px] font-semibold leading-none tnum">6</span><span class="text-[14.5px] text-band-muted">calls</span></p>
        <p class="border-l border-band-line px-2 py-4"><span class="block font-display text-[28px] font-semibold leading-none tnum" data-ledger-answered>0</span><span class="text-[14.5px] text-band-muted">answered</span></p>
        <p class="border-l border-band-line px-2 py-4"><span class="block font-display text-[28px] font-semibold leading-none tnum text-band-hl" data-ledger-booked>0</span><span class="text-[14.5px] text-band-muted">jobs booked</span></p>
      </div>
    </div>
  </div>
</section>

<section id="video" data-component="VideoOverview" class="bg-surface">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28">
    <div class="max-w-[46rem]">
      <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>See it and hear it</p>
      <h2>Two minutes of video, or one <span class="hl">phone call</span></h2>
      <p class="mt-5 text-muted">Watch a short walkthrough of a real call from start to finish. Better still, ring the demo agent and test it with your own questions.</p>
    </div>
    <div class="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10">
      <div>
        <div class="relative aspect-video overflow-hidden rounded-[14px] bg-navy dark:border dark:border-line dark:bg-[#0f0d0a]" data-video data-video-id="[PLACEHOLDER]" data-video-title="AI voice agents explained by OMH">
          <button type="button" class="group absolute inset-0 grid place-items-center text-cream" data-video-play data-track="video_play" aria-label="Play video: AI voice agents explained (loads YouTube)">
            <span class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-left sm:p-7">
              <span>
                <span class="block font-display text-[clamp(1.25rem,1rem+1.2vw,1.9rem)] font-semibold leading-tight">How a voice agent answers your phone</span>
                <span class="mt-1 block text-[15px] text-cream/75">One call, from first ring to booked appointment</span>
              </span>
              <span class="shrink-0 font-display text-[15px] font-semibold tnum text-cream/75">2:00</span>
            </span>
            <span class="grid h-[76px] w-[76px] place-items-center rounded-full bg-gold text-navy transition-transform group-hover:scale-105"><svg class="icon !h-7 !w-7 translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-play"/></svg></span>
            <span class="absolute left-5 top-5 flex items-center gap-2 sm:left-7 sm:top-7" aria-hidden="true"><span class="wave"><i style="height:8px"></i><i style="height:20px"></i><i style="height:12px"></i><i style="height:22px"></i><i style="height:9px"></i></span></span>
          </button>
          <p class="absolute inset-0 grid place-items-center p-6 text-center text-cream" data-video-fallback hidden>The video is on its way. Until then, ring the demo agent to hear it for yourself.</p>
        </div>
        <p class="mt-3 text-[15px] text-muted">The video loads from YouTube's privacy-enhanced player only when you press play. Video ID <span class="flag">[PLACEHOLDER]</span></p>
        <details class="mt-5 rounded-[14px] border border-line" data-track="video_transcript_toggle">
          <summary class="flex min-h-[56px] items-center justify-between gap-4 px-5 font-display text-[17.5px] font-semibold">Read the transcript <svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></summary>
          <div class="space-y-4 border-t border-line px-5 py-5 text-[17px] text-muted">
            <p><span class="flag">[PLACEHOLDER]</span> Draft transcript. Replace with the final wording once the video is recorded.</p>
            <p>It's twenty to eight on a Tuesday evening and a dental practice in Manchester closed over an hour ago. The phone rings. In the past that call went to voicemail, and most callers hung up before the beep.</p>
            <p>Tonight the practice's voice agent answers. It says who it is, including that it's an AI assistant, and asks how it can help. The caller has chipped a tooth and wants to be seen this week.</p>
            <p>The agent checks the diary, offers two times and books the one the caller chooses. It sends a confirmation text and emails a summary to reception, ready for the morning.</p>
            <p>If the caller had asked a clinical question, the agent would not have answered it. It would have taken a message for the team, or put the call through to the emergency line the practice has chosen.</p>
            <p>That's the whole job: answer, help where it can, book, and hand over to a person when it should.</p>
          </div>
        </details>
      </div>

      <aside class="rounded-[14px] border border-line bg-paper p-6 sm:p-7" aria-labelledby="try-title">
        <h3 id="try-title">Try it yourself</h3>
        <p class="mt-3 text-[17px] text-muted">Our demo agent is set up as a fictional heating company. Call it from any phone.</p>
        <a href="tel:" class="mt-5 flex min-h-[64px] items-center gap-3 rounded-[10px] border-[1.5px] border-[var(--va-line-strong)] px-4 font-display text-[clamp(1.25rem,1.1rem+.8vw,1.6rem)] font-semibold tnum hover:border-ink" data-demo-number data-track="try_demo_number_call"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-phone"/></svg>[DEMO NUMBER]</a>
        <p class="mt-2 text-[15px] text-muted">Demo number <span class="flag">[PLACEHOLDER]</span> Standard call rates apply.</p>
        <p class="mt-6 font-display text-[16.5px] font-semibold">Three things to ask</p>
        <ol class="mt-2 divide-y divide-line border-y border-line">
          <li class="flex gap-4 py-3.5 text-[17px] leading-snug"><span class="num text-[15px] leading-[1.6]">01</span><span>Ask it to book a boiler service for next week.</span></li>
          <li class="flex gap-4 py-3.5 text-[17px] leading-snug"><span class="num text-[15px] leading-[1.6]">02</span><span>Ask what happens if you would rather speak to a person.</span></li>
          <li class="flex gap-4 py-3.5 text-[17px] leading-snug"><span class="num text-[15px] leading-[1.6]">03</span><span>Ask something it can't know, and listen to how it handles it.</span></li>
        </ol>
        <p class="mt-4 text-[15px] text-muted">The demo tells you it is an AI at the start of the call, the same as every agent we build.</p>
      </aside>
    </div>
  </div>
</section>

<section id="industries" data-component="Industries">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28">
    <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      <div>
        <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Industries</p>
        <h2>Built for businesses that live on <span class="hl">the phone</span></h2>
      </div>
      <p class="text-muted lg:pt-10">We set up AI voice agents for estate and letting agents, dental clinics, healthcare clinics, plumbers, heating engineers, builders, law firms and car dealerships. Each agent is scripted around the calls your sector actually gets.</p>
    </div>

    <div role="group" aria-label="Filter industries by group" class="mt-10 flex flex-wrap gap-2" data-industry-filters>
      <button type="button" class="filter-btn min-h-[48px] rounded-full border border-[var(--va-line-strong)] px-5 text-[16.5px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-filter="all" aria-pressed="true" data-track="industry_filter" data-track-name="all">All industries</button>
      <button type="button" class="filter-btn min-h-[48px] rounded-full border border-[var(--va-line-strong)] px-5 text-[16.5px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-filter="property" aria-pressed="false" data-track="industry_filter" data-track-name="property">Property</button>
      <button type="button" class="filter-btn min-h-[48px] rounded-full border border-[var(--va-line-strong)] px-5 text-[16.5px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-filter="health" aria-pressed="false" data-track="industry_filter" data-track-name="health">Health</button>
      <button type="button" class="filter-btn min-h-[48px] rounded-full border border-[var(--va-line-strong)] px-5 text-[16.5px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-filter="trades" aria-pressed="false" data-track="industry_filter" data-track-name="trades">Trades</button>
      <button type="button" class="filter-btn min-h-[48px] rounded-full border border-[var(--va-line-strong)] px-5 text-[16.5px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-filter="professional" aria-pressed="false" data-track="industry_filter" data-track-name="professional">Professional &amp; Motor</button>
    </div>
    <p class="sr-only" aria-live="polite" data-industry-count></p>

    <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-industry-list>
      <article class="flex flex-col rounded-[14px] border border-line bg-sand p-6" data-industry data-group="property">
        <span class="grid h-11 w-11 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon !h-[22px] !w-[22px]" aria-hidden="true" focusable="false"><use href="#i-home"/></svg></span>
        <h3 class="mt-8 !text-[24px]">Estate &amp; Letting Agents</h3>
        <p class="mt-3 text-[17px] leading-[1.5] text-muted">Catch every viewing request and landlord enquiry while the team is out on appointments.</p>
        <ul class="mt-5 space-y-2 text-[16.5px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Book viewings and valuations</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Qualify buyers and tenants</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Log tenant maintenance calls</span></li>
        </ul>
        
                <div class="mt-auto pt-6">
          <a href="/contact?service=ai-voice-agents&amp;industry=estate-letting-agents" data-future-href="/ai-voice-agents/estate-letting-agents" class="text-link" data-track="industry_click" data-track-name="Estate &amp; Letting Agents">Learn more<span class="sr-only"> about voice agents for estate &amp; letting agents</span><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          <span class="mt-1 block"><span class="flag">[PLACEHOLDER] industry page</span></span>
        </div>
      </article>
      <article class="flex flex-col rounded-[14px] border border-line bg-sand p-6" data-industry data-group="health">
        <span class="grid h-11 w-11 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon !h-[22px] !w-[22px]" aria-hidden="true" focusable="false"><use href="#i-tooth"/></svg></span>
        <h3 class="mt-8 !text-[24px]">Dental Clinics</h3>
        <p class="mt-3 text-[17px] leading-[1.5] text-muted">An AI receptionist for dentists that keeps the front desk free for the patients in the room.</p>
        <ul class="mt-5 space-y-2 text-[16.5px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Book check-ups and hygiene visits</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Move and cancel appointments</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Route urgent calls to your emergency line</span></li>
        </ul>
        <p class="mt-4 flex items-center gap-2 rounded-[10px] border border-line bg-surface px-3 py-2.5 text-[15px] font-semibold"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-shield"/></svg><span>No clinical or medical advice given.</span></p>
                <div class="mt-auto pt-6">
          <a href="/contact?service=ai-voice-agents&amp;industry=dental-clinics" data-future-href="/ai-voice-agents/dental-clinics" class="text-link" data-track="industry_click" data-track-name="Dental Clinics">Learn more<span class="sr-only"> about voice agents for dental clinics</span><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          <span class="mt-1 block"><span class="flag">[PLACEHOLDER] industry page</span></span>
        </div>
      </article>
      <article class="flex flex-col rounded-[14px] border border-line bg-sand p-6" data-industry data-group="health">
        <span class="grid h-11 w-11 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon !h-[22px] !w-[22px]" aria-hidden="true" focusable="false"><use href="#i-stethoscope"/></svg></span>
        <h3 class="mt-8 !text-[24px]">Clinics &amp; Healthcare</h3>
        <p class="mt-3 text-[17px] leading-[1.5] text-muted">Takes booking and admin calls so reception can focus on the patients in front of them.</p>
        <ul class="mt-5 space-y-2 text-[16.5px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Book across practitioners</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Opening hours and directions</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Confirmation calls to cut no-shows</span></li>
        </ul>
        <p class="mt-4 flex items-center gap-2 rounded-[10px] border border-line bg-surface px-3 py-2.5 text-[15px] font-semibold"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-shield"/></svg><span>No clinical or medical advice given.</span></p>
                <div class="mt-auto pt-6">
          <a href="/contact?service=ai-voice-agents&amp;industry=clinics-healthcare" data-future-href="/ai-voice-agents/clinics-healthcare" class="text-link" data-track="industry_click" data-track-name="Clinics &amp; Healthcare">Learn more<span class="sr-only"> about voice agents for clinics &amp; healthcare</span><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          <span class="mt-1 block"><span class="flag">[PLACEHOLDER] industry page</span></span>
        </div>
      </article>
      <article class="flex flex-col rounded-[14px] border border-line bg-sand p-6" data-industry data-group="trades">
        <span class="grid h-11 w-11 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon !h-[22px] !w-[22px]" aria-hidden="true" focusable="false"><use href="#i-wrench"/></svg></span>
        <h3 class="mt-8 !text-[24px]">Plumbers</h3>
        <p class="mt-3 text-[17px] leading-[1.5] text-muted">An answering service for plumbers that picks up while your hands are full.</p>
        <ul class="mt-5 space-y-2 text-[16.5px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Capture call-outs while you are on a job</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Put emergencies through to the plumber on call</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Book quote visits</span></li>
        </ul>
        
                <div class="mt-auto pt-6">
          <a href="/contact?service=ai-voice-agents&amp;industry=plumbers" data-future-href="/ai-voice-agents/plumbers" class="text-link" data-track="industry_click" data-track-name="Plumbers">Learn more<span class="sr-only"> about voice agents for plumbers</span><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          <span class="mt-1 block"><span class="flag">[PLACEHOLDER] industry page</span></span>
        </div>
      </article>
      <article class="flex flex-col rounded-[14px] border border-line bg-sand p-6" data-industry data-group="trades">
        <span class="grid h-11 w-11 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon !h-[22px] !w-[22px]" aria-hidden="true" focusable="false"><use href="#i-flame"/></svg></span>
        <h3 class="mt-8 !text-[24px]">Heating &amp; HVAC</h3>
        <p class="mt-3 text-[17px] leading-[1.5] text-muted">Answers breakdown and service calls through the winter rush, day and night.</p>
        <ul class="mt-5 space-y-2 text-[16.5px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Book annual services and repairs</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Record make, model and fault code</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Put no-heating calls first</span></li>
        </ul>
        
                <div class="mt-auto pt-6">
          <a href="/contact?service=ai-voice-agents&amp;industry=heating-hvac" data-future-href="/ai-voice-agents/heating-hvac" class="text-link" data-track="industry_click" data-track-name="Heating &amp; HVAC">Learn more<span class="sr-only"> about voice agents for heating &amp; hvac</span><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          <span class="mt-1 block"><span class="flag">[PLACEHOLDER] industry page</span></span>
        </div>
      </article>
      <article class="flex flex-col rounded-[14px] border border-line bg-sand p-6" data-industry data-group="trades">
        <span class="grid h-11 w-11 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon !h-[22px] !w-[22px]" aria-hidden="true" focusable="false"><use href="#i-hard-hat"/></svg></span>
        <h3 class="mt-8 !text-[24px]">Contractors &amp; Builders</h3>
        <p class="mt-3 text-[17px] leading-[1.5] text-muted">Takes project enquiries properly while the team is on site.</p>
        <ul class="mt-5 space-y-2 text-[16.5px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Take the brief: type, size, budget, timing</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Book site visits and quotes</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Route clients to their site manager</span></li>
        </ul>
        
                <div class="mt-auto pt-6">
          <a href="/contact?service=ai-voice-agents&amp;industry=contractors-builders" data-future-href="/ai-voice-agents/contractors-builders" class="text-link" data-track="industry_click" data-track-name="Contractors &amp; Builders">Learn more<span class="sr-only"> about voice agents for contractors &amp; builders</span><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          <span class="mt-1 block"><span class="flag">[PLACEHOLDER] industry page</span></span>
        </div>
      </article>
      <article class="flex flex-col rounded-[14px] border border-line bg-sand p-6" data-industry data-group="professional">
        <span class="grid h-11 w-11 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon !h-[22px] !w-[22px]" aria-hidden="true" focusable="false"><use href="#i-scale"/></svg></span>
        <h3 class="mt-8 !text-[24px]">Law Firms</h3>
        <p class="mt-3 text-[17px] leading-[1.5] text-muted">Takes new enquiries and routes existing clients while fee earners are in court or meetings.</p>
        <ul class="mt-5 space-y-2 text-[16.5px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Capture new enquiries and area of law</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Book initial consultations</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Route clients to their named solicitor</span></li>
        </ul>
        <p class="mt-4 flex items-center gap-2 rounded-[10px] border border-line bg-surface px-3 py-2.5 text-[15px] font-semibold"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-shield"/></svg><span>No legal advice given.</span></p>
                <div class="mt-auto pt-6">
          <a href="/contact?service=ai-voice-agents&amp;industry=law-firms" data-future-href="/ai-voice-agents/law-firms" class="text-link" data-track="industry_click" data-track-name="Law Firms">Learn more<span class="sr-only"> about voice agents for law firms</span><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          <span class="mt-1 block"><span class="flag">[PLACEHOLDER] industry page</span></span>
        </div>
      </article>
      <article class="flex flex-col rounded-[14px] border border-line bg-sand p-6" data-industry data-group="professional">
        <span class="grid h-11 w-11 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon !h-[22px] !w-[22px]" aria-hidden="true" focusable="false"><use href="#i-car"/></svg></span>
        <h3 class="mt-8 !text-[24px]">Car Dealerships</h3>
        <p class="mt-3 text-[17px] leading-[1.5] text-muted">Answers sales and service calls so nobody rings off while the desk is busy.</p>
        <ul class="mt-5 space-y-2 text-[16.5px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Book test drives and services</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Stock and opening-hours questions</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Collect part-exchange details</span></li>
        </ul>
        
                <div class="mt-auto pt-6">
          <a href="/contact?service=ai-voice-agents&amp;industry=car-dealerships" data-future-href="/ai-voice-agents/car-dealerships" class="text-link" data-track="industry_click" data-track-name="Car Dealerships">Learn more<span class="sr-only"> about voice agents for car dealerships</span><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          <span class="mt-1 block"><span class="flag">[PLACEHOLDER] industry page</span></span>
        </div>
      </article>
            <aside class="on-band flex flex-col rounded-[14px] bg-band p-6 text-band-ink" aria-labelledby="industries-cta-title">
        <span class="grid h-11 w-11 place-items-center rounded-[10px] bg-gold text-navy" aria-hidden="true"><svg class="icon !h-[22px] !w-[22px]" aria-hidden="true" focusable="false"><use href="#i-phone"/></svg></span>
        <h3 id="industries-cta-title" class="mt-8 !text-[24px]">Not sure how your calls would fit?</h3>
        <p class="mt-3 text-[17px] leading-[1.5] text-band-muted">Tell us who rings you and why. We'll map your calls and show you what an agent would handle and what it would pass to your team.</p>
        <div class="mt-auto pt-6">
          <a href="/contact?service=ai-voice-agents" class="btn btn-primary" data-track="industries_cta_book_demo">Book a Voice Agent Demo</a>
        </div>
      </aside>
    </div>
  </div>
</section>

<section id="areas" data-component="AreasWeServe" class="bg-sand">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28">
    <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      <div>
        <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Areas we serve</p>
        <h2>Based in Essex, <span class="hl">working UK-wide</span></h2>
      </div>
      <div class="space-y-4 text-muted lg:pt-10">
        <p>We focus our voice agent work on six cities. We don't have offices in any of them and we won't pretend otherwise. Our team is in Hullbridge, Essex, and we run discovery, testing and monthly reviews by video call and phone.</p>
        <p>Your callers still get a local experience. The agent can answer on your existing number, or on a new local number with the right area code.</p>
      </div>
    </div>

    <div class="mt-12 grid gap-6 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-8" data-area-map>
      <figure class="flex flex-col rounded-[14px] border border-line bg-surface p-4 sm:p-6 lg:sticky lg:top-28 lg:self-start">
        <svg viewBox="0 0 480 560" class="h-auto w-full overflow-hidden rounded-[10px] bg-[var(--va-sea)]" role="img" aria-labelledby="area-map-title area-map-desc">
          <title id="area-map-title">Map of England and Wales</title>
          <desc id="area-map-desc">Pins mark London, Birmingham, Manchester, Leeds, Liverpool and Bristol. A separate marker shows the OMH team in Hullbridge, Essex.</desc>
          <path class="map-land map-land-other" d="M-204.4,124.5L-205,127.3L-208.8,123.3L-210.4,119.5L-221.3,116.4L-216.3,113.3L-214,114.6L-206.1,115.7L-204.1,117.6ZM-44.3,27.2L-53.3,32.6L-54.6,34.8L-57.9,44L-58.3,46.6L-61.4,51.3L-64.6,56.5L-67.7,58.4L-72.6,59.7L-75.3,61.1L-78.4,60L-82.5,59.8L-84.8,61.5L-84.7,63L-83.7,64.7L-80.4,67.5L-76.4,70.1L-77,72L-79.3,74L-93.6,78.4L-98.1,81.5L-99.6,83.5L-98.6,87.4L-88.4,99.5L-86.7,100.8L-85.5,107.4L-75.9,110.9L-72.3,115.4L-69,116.5L-61.6,116.7L-58.7,118.6L-56.8,117.6L-55.6,115.5L-49.1,110.4L-46.7,108.1L-47.6,104.7L-48.8,102.1L-44.7,97.3L-39.8,92.6L-37.4,92.9L-33.7,96.3L-30.8,100.8L-30.6,104.1L-30.2,106.6L-27.4,111.9L-25.5,113.9L-20.2,115.2L-19.1,117.3L-20.6,124.7L-20,127.3L-14.2,127.6L-8.1,127.5L-6.2,127.8L-3.9,126.5L-0.4,125L4.2,125.8L6.4,129.4L7.2,132.9L3.1,133.8L-1.2,132.9L-3.4,135.1L-3.8,139.3L-2.6,145L0,149.1L1.7,158.3L3.1,168.3L5.6,174.5L5.7,181.9L5.1,185.5L5.4,192.1L4,194.4L4.5,200.7L7.4,213.7L8.4,220.8L8.6,236.3L5.8,242.1L2.2,247.3L-0.5,253.8L-2.5,260.7L-4.2,272.2L-12.5,285L-15.8,288.1L-19.7,290L-12.1,299.7L-19.1,303.6L-26.3,304.5L-34,301.7L-38.9,301.5L-43.7,304.3L-45.4,306L-46.8,304.9L-49.2,297.2L-52.1,304.9L-56.9,307.1L-64.6,306L-77.7,307.2L-82.9,309.1L-85.2,312.4L-87.2,316.4L-89.5,318.5L-91.9,319.7L-102.2,321.8L-104.2,323L-109.6,329.1L-116,332.4L-121.1,333.1L-125.2,329L-126.9,326.5L-128.9,325L-135.9,324.8L-133.9,326.1L-132.6,328.8L-132.5,334.2L-133.7,339.2L-137.3,341.3L-141.4,341.5L-148.4,346.1L-157.2,346.8L-162.3,351.3L-191.5,356.8L-192.9,356.6L-196.7,354.1L-200.9,352.8L-205.2,353L-217.5,356.4L-223.4,354.8L-214.8,344.2L-204.2,339.5L-203,338L-206.3,337L-225.3,339L-232.2,341.7L-238.9,342L-235.3,337L-226.1,330.9L-221.3,327.9L-218.2,327L-214.9,323.2L-205.5,319.3L-235,325.9L-242.2,324L-243.6,321.2L-249.6,321.6L-250.9,314.8L-241.4,305.8L-235.9,302.1L-229.6,300.5L-223.6,297.8L-221,294L-223.6,292.3L-240.8,291.4L-248.9,289.6L-248.1,286.4L-246,283L-236.9,277.9L-232.3,277.4L-228.2,278.6L-224.4,280.5L-221.5,282.9L-211.8,282.7L-215.3,278.5L-215.1,270.4L-217.9,267.4L-213.6,264.2L-209,262.4L-200.7,255.5L-197.9,254.6L-183,254.4L-166.9,252L-150.7,247.9L-158.4,244L-161.9,239.6L-168.9,247.3L-173.6,250L-186.3,250.4L-190.2,249L-195.5,245.9L-197.4,246.7L-199.3,248.5L-208,251.6L-216.8,251.6L-205.9,245.3L-191.8,234.2L-188.4,230.4L-183.6,224L-184.5,220.9L-187,218.8L-176.3,205.5L-172.8,203.4L-166.9,203.5L-162.1,201.6L-160.3,201.8L-158.6,201.1L-154.3,197.2L-159.9,194L-165.7,192L-184.6,191.5L-187,190.9L-189.3,189.4L-190.5,187.4L-191.2,182.4L-192.3,181.3L-196.6,180.8L-200.8,181.8L-203.8,181.3L-206.4,178.9L-201.2,174.5L-207,172.7L-213,173L-217.9,171L-217.5,167.8L-214.9,165L-217.6,161.7L-217.8,157.8L-214.4,156.4L-211.2,157.4L-203.8,155.4L-195,155.1L-202.2,151.6L-205,149L-204.8,145.4L-203.8,142.5L-194.4,138.2L-184.9,137.1L-185.4,133.6L-184.2,130.1L-193.5,127.9L-203,129.5L-201.2,122.5L-198.3,116.6L-197.4,112.5L-197.3,108L-201.9,109.4L-201.8,103.1L-203.1,98.6L-209.8,100.8L-209,95.1L-206.7,91.4L-203.1,90L-199.9,91.2L-193.9,91.8L-187.6,89.4L-179,89.6L-165.4,91.9L-157,101.4L-154.4,100.2L-150.1,95.1L-148.3,94.8L-134.4,98.5L-125.9,102.3L-123.4,101.5L-124.3,95.7L-126.9,91.3L-122.6,86.2L-117.7,83L-114.4,81.5L-107.1,79.9L-103.9,78L-101.1,71.3L-97.5,65.8L-115.5,67.2L-131.6,58.9L-128.4,54.4L-124.6,51.9L-118.3,50.4L-117.5,48L-114.3,46.1L-108.7,41.2L-109.8,34L-108.4,28.8L-104.4,25.7L-102.7,20.9L-100.9,17.4L-93.4,16.8L-85.9,14.1L-83.4,14.6L-75,14.5L-72.2,16.1L-72.4,10.1L-67.2,9.9L-65.3,11.2L-64.7,15.4L-62.6,18.4L-62.3,23L-64.2,26.5L-67,29.1L-64.8,32L-69,36.8L-64.7,35L-58.6,30.4L-58.5,26.3L-59.1,21.1L-60.5,16.4L-59.3,11.3L-55.7,8.3L-47.3,7.3L-50.3,1.3L-47.2,1.1L-43.8,2.5L-39.3,7.4L-34.5,11.3L-29.3,14.4L-34.9,19.8L-41.4,23.1Z"/>
          <path class="map-land" d="M199.1,366.2L194.8,370.1L180.8,373.9L174.8,377.9L164,387L162.1,387.8L146.2,385.2L134.6,373L127.3,367.9L124.1,367.2L120.9,368.6L113.9,369.9L106.9,369.5L110.7,364L115.6,361L104.9,358.6L101.8,356.8L98.5,352.9L90.1,352L86.1,352.8L78.9,357.7L67.9,362.7L55.1,354.6L52.7,351.2L53,344.8L51.3,339.6L47.8,337.8L52.8,331.4L58.4,327.2L70.8,323.3L89.8,313.8L100.2,309.7L110,302.5L114.1,298L117.2,291.7L120.1,284L124.5,277.7L120.6,276.1L118.8,271.3L119.6,266.6L121.4,262.3L120.1,256.9L117.4,251.2L117.7,246.9L118.4,242.2L111.2,242.3L103.8,243.5L97.1,246.6L90.6,250.8L85,251.4L85.1,247.8L87.7,243.5L94.3,237.4L101.5,232.4L104.1,228.4L106.1,223.9L109.7,220.2L118.9,213.4L136,206L138.7,205.5L145.4,206.7L151.9,205.7L157.7,202.8L163.6,202.3L176.3,210.9L172.6,198L178.4,195.1L186.5,206.8L189.6,208L196.1,206.4L193.5,204.4L190.6,204.2L186.8,202.5L183.8,198.7L178.5,186.9L179,180L182.5,172.8L186.7,166.2L183.5,164.8L180.7,162.3L180.2,155.5L181.2,149.8L188.3,144.6L190.4,136.8L191.6,128.1L190.4,124.1L183.4,124.7L180,126.3L177,128.9L173.8,128.6L165.4,118.8L160.5,111.5L152.1,96L151.1,86.8L158.5,67.2L169.5,54.7L182.1,50.5L179.8,49.7L160.6,49.1L154.1,50.6L148.1,55.6L144.7,57.2L141.4,57.6L138,60.1L134.9,63.7L131.5,65.9L125.1,65L121.9,65.8L119.8,63.6L118.1,60L115.6,59.1L112.8,60L107,64.4L101,67L94,63.8L84.8,58L83,59.9L80.6,64.9L79.1,72.6L72.9,65.6L67.6,56.1L65.9,50.5L66.2,44.1L69.2,41.6L72.4,44L78,28.9L88.5,9.5L92.2,3.8L94.8,-3.6L94.7,-8.7L92.7,-12.9L84.2,-22.8L84.6,-30.7L85.9,-39.4L88.6,-44.5L89.6,-45.5L101.4,-44.8L96.9,-47.8L88.1,-56.1L88.4,-58.9L90.8,-66.2L89.8,-65.4L87.8,-62.2L83.6,-54.1L81.3,-52.2L74.7,-50.6L73.4,-46.7L72.2,-45.6L68.9,-45.4L67.8,-41.7L67,-41.4L66.2,-45.5L66.6,-52.2L68.2,-58.4L70.9,-63.1L80.7,-73.7L76,-70.4L65.1,-60.7L59.4,-54.4L58,-52.2L57.3,-50.2L57.2,-48.1L59.1,-36.1L58.1,-30.8L47.2,4.8L45.3,8.3L43.6,10L42.1,10.4L37.6,9.5L35.7,6.6L35.8,3.7L37,-0.9L41.6,-17.8L43.6,-22.4L46.3,-26.7L51.9,-34.2L51.9,-34.7L48.2,-33.4L46.7,-34L45.8,-35.5L47.6,-58.3L50.8,-65.7L52.5,-76.7L55.5,-85.9L58.7,-92.6L61.3,-101.2L64.7,-105L66,-110.9L69.8,-117.1L72.9,-123.7L71.4,-123.2L52.6,-106.6L47.7,-103.6L41.6,-104.7L36.8,-107L33.3,-111.5L32,-119.5L27.6,-119.9L23.7,-121.6L23.8,-122.6L29.1,-126.7L37.4,-127.7L45.4,-134.2L38.8,-139.3L39.4,-140.8L45.6,-144.4L53.7,-157.5L56.1,-169.7L52.7,-175.6L51.6,-179.5L44.8,-184.1L43.9,-189.6L44.9,-192.5L47.3,-195.4L50.9,-197.5L56.5,-199.5L51.7,-202.1L50,-204.9L48.8,-209L48.9,-211.4L52,-221.6L53.7,-225.8L56.9,-231.1L69.9,-230.1L71.5,-232.5L73,-232.6L79.6,-230L78.6,-232.5L68.4,-246L67.6,-248.5L71,-255.2L71.3,-258.3L71.2,-261.8L72.2,-264.2L75.6,-265.4L86,-264.7L88.6,-265.8L87.7,-269.3L85.4,-273.8L85.2,-277.4L85.9,-280.7L86.4,-287.4L86.8,-290.2L89.5,-294.5L91.5,-295.8L94.2,-296.5L99.9,-294.7L101.9,-292.8L104.2,-288.5L106,-288.9L113.3,-293.1L115.5,-293.6L118.1,-288.3L130.4,-292.1L146.6,-293.4L156.4,-296L166.8,-296.7L176.4,-299.7L186.5,-298L186.8,-296.2L186.2,-293.7L183.6,-286.9L183.9,-279.1L183.3,-276.7L182,-273.9L178.2,-268.5L168.1,-261L149.6,-243.7L138.5,-235.1L136.9,-230.9L136,-225L142.3,-223.7L144.8,-221.6L143.3,-218.7L133.3,-208.6L130.1,-199.2L137.6,-199.3L143.7,-200.9L156.1,-206.5L167.5,-210.7L172.9,-210.8L183.6,-207.1L186,-206.9L190.6,-208.5L195.1,-208.6L226.1,-207.4L234.7,-209.3L240.5,-206.9L245.2,-200.8L249.8,-189.6L249.7,-187.8L246.9,-182.7L241.8,-176.3L237.4,-167.4L236.1,-162.6L235.3,-157.4L233.9,-152.6L225.1,-129.9L216.2,-117.5L212.4,-108.5L207.5,-101.4L202.9,-97L198,-94.1L183.7,-91L179.7,-89L174.9,-85.1L169.7,-83.2L175.6,-83.4L181.5,-85.5L192.1,-86.2L204.3,-78.5L203.1,-72.4L198.1,-67.5L186.9,-66.8L176.3,-56.3L171.5,-53.1L166.5,-51.5L160.2,-52.2L148.8,-55.2L144,-58.3L148.4,-53.4L153.3,-50.7L182.9,-44L184.7,-44.7L194.1,-50.9L206.7,-50.8L230.7,-39L237.5,-30L247.5,-17.1L252.9,-12.1L257,-7.5L259.3,-0.8L264.3,21.9L269.8,43.9L277.2,67.8L280.4,74.4L284.8,78.9L306.7,89.5L311.5,92.8L320.3,103L328.7,113.8L336.4,122L344.8,128.6L340.9,132.3L338.2,137.9L340.6,145.4L344,152.6L351,164.1L357.4,176.6L355.1,174.7L352.9,173.7L349.7,174L346.6,173.6L340.8,169.8L335.3,165L324.6,167.2L318.8,166.5L313.5,166.6L323.5,169.2L334.2,169.3L358.4,189.9L366.9,202.1L372.2,218.6L369.1,226.2L364.2,231.1L359.6,236.9L355.3,243.3L368.9,252.1L371.8,251.6L374.8,250.2L377.4,247L382.1,239.3L384.5,236.6L392.6,235.3L399.6,235.5L406.7,236.9L412.8,236.1L425.3,238.8L431.6,241.5L448.1,253.9L451.8,260.9L453.9,270.2L454.6,280.6L452.4,290.2L449.7,298.9L448.4,310L447.4,314.2L445.6,317.3L437.5,326.6L432,330.3L429.6,328.9L427.1,329.2L427,331.3L429.7,335.6L430.1,341.1L425.2,345.2L420,347.1L411.5,345.3L399.8,353.2L408.6,356.6L410.5,360.7L408.6,367.8L403.5,371.3L397.4,372.8L391.2,373.4L386.2,375.4L381.4,378.8L387.5,376.8L391.8,378.3L394.8,384.1L397.2,385.9L409.4,387.9L416.6,387.6L431.1,385.5L437.9,385.3L440.5,386.2L440.7,391.1L440.2,403.5L438.4,406.1L419.8,417.1L416,424.5L415.1,428.8L403.9,428.6L398.9,433.2L389.8,436.6L383,440.2L376.2,444.5L370.5,445.8L346,441.5L331.1,442.4L311.2,447L306,446.3L298.4,442.4L290.4,439.8L281.3,438.7L273.3,435L278.3,442.2L267.4,449.2L262.4,450.5L257.3,450.4L246.5,452.4L236.5,451.4L238.1,456.3L240.7,460.6L238.7,462.4L236.3,462.9L217.5,459.6L214.7,460.2L212.5,463.2L205.6,461.6L198.9,456.5L191.9,453L184.5,451.2L178.5,451.8L154.2,459.3L149,467.3L146.4,478.6L142.7,488.5L136.7,496.1L129.9,497.1L123.5,491.5L111.4,485.3L107.2,481L105.9,480.8L104.6,482.3L99.7,483.9L94.7,483.8L87.1,485.2L73.4,489.5L67.8,492.6L55.9,501.1L53.4,503.5L48.9,512.4L42.2,513.7L36.6,507.7L29.9,505.3L22.8,507.1L18.3,509.8L16.4,507.3L16.5,502.2L22,496.2L36.2,492.2L48.7,480.6L55.1,473.5L57.4,469.4L60.6,466.9L64.3,466.1L66.4,461.6L83.7,443.8L85.4,439.7L86.5,432.2L88,425L101.7,420.7L108.6,405.6L110.3,404.5L129.2,402.2L143.1,402.7L156.9,405.9L163.9,406.4L171,405.3L176.6,401.3L186.4,386.6L191.8,380.1L198,374.3L203.8,367.6L213.2,355.2L206.8,359.4ZM114.3,203.6L116.5,205.4L122.6,205.3L120.4,209.2L113.8,213.4L109.1,217.5L103.7,221L101.2,216.8L98.1,216.8L93.9,208.6L93.5,196.8L99.5,193.9L107.9,194.3ZM211.8,-354.3L206.4,-354.1L209.2,-359.7L212.6,-361.2L218.8,-360.5L217.8,-358ZM283.1,-476L282,-474.8L277.3,-484.4L280.5,-495.5L284.5,-495.2L285.2,-492.3L284.9,-489.6L282.8,-489.3L282.6,-488.5L283.3,-483.4L283.4,-477.5ZM270.7,-477.9L271.8,-471.4L274.1,-473.1L277.9,-466.7L279.7,-466.7L282.7,-469.4L282.1,-463.5L279.3,-446.8L278.3,-444L277.9,-438.9L277.2,-437.9L276.3,-427.9L274.3,-424.4L272.5,-416.5L271.8,-415.6L269.1,-418.7L271.7,-430.9L272.6,-438L271.9,-441.6L270.3,-444.9L266.3,-445L262.9,-443.5L262.2,-445.5L262,-448.1L261.2,-448.9L256.6,-448.7L255.4,-449.4L254.4,-451.8L254.2,-453.8L258.4,-455.3L262.1,-454.7L267.8,-458.7L264.2,-471.5L259.5,-472.6L258.5,-473.9L259.3,-476L261.8,-477.2L265.8,-483.8L268.1,-484.8L270.9,-484.7ZM295,-504.4L295,-503.3L292.8,-495.2L292.9,-492.2L289.1,-492.5L288.4,-493.3L287.6,-497.9L288.1,-502.8L288.5,-504.2L289.7,-504.7L290.9,-503.7L292.8,-506.2L293.8,-506.2ZM181.3,-313.2L178.4,-312.1L175.8,-312.2L171.5,-317.7L170,-321.8L170.4,-324.4L172.1,-325.2L176.3,-323.8L178.4,-319.2L178.5,-316.2L179,-315.1L181.6,-313.9ZM192.8,-308.1L192.3,-307.8L190.6,-309.6L187.7,-315.9L192.4,-317L194.5,-316.1L193.6,-313.5ZM186.9,-335.5L186.3,-333.2L190,-333.1L195.3,-331.1L198.6,-330.7L201.2,-328.2L199.8,-323.6L198,-322.3L196.2,-322.2L189.9,-326.9L181.5,-325.1L179.7,-325.7L178.7,-326.9L178.4,-328.6L178.4,-331.9L177.9,-332.8L174.9,-329.8L173.5,-330.1L172.8,-331.6L172.5,-334.8L172.9,-339L174.8,-345.2L177.8,-346.5L182.3,-345.6L187.4,-342.1L188.9,-339.9L188.9,-338.1ZM203,-350.1L198.8,-347.8L197.1,-349.8L196.8,-355.9L191.8,-358.6L189.4,-360.3L187.7,-363.3L188.1,-364.2L191.4,-365.5L196.9,-359.8L199.1,-355.2L203.1,-353.9L203.6,-353.2ZM-1.7,-111.7L-4.8,-111.2L-4.9,-112.7L0.8,-118.8L4.1,-119.5L5.1,-118.8L2.7,-115.3ZM71.7,0.3L64.9,0L62.6,-0.9L59.8,-3.3L57.2,-16.5L58.6,-21L60,-23.1L61.4,-24.8L65.1,-25.5L68.5,-22.8L69.7,-20.5L72.2,-11.5L72.4,-3.9ZM40.3,-86.2L19.1,-82.2L11.9,-83.1L11.3,-85.8L12.9,-87.3L18.9,-88.6L22.1,-101.1L13.6,-107.5L13.2,-109.2L14.1,-112L15.1,-113.1L20.7,-115.7L23,-116.2L24.9,-115.8L28.6,-112.1L32.5,-104.8L38.1,-103.3L41.9,-100ZM19.5,-48.2L20.7,-35.9L22.2,-28.2L22,-25.6L20.1,-22.1L11.1,-17.9L8.2,-18L8.3,-19.2L10.5,-24L9.2,-29.5L10.2,-33.7L9.5,-34.4L7.7,-34.1L0.9,-27.7L-1.2,-27.2L-1.3,-28.5L0.6,-34L1,-37.6L2.1,-39.9L4,-41.9L6.2,-43.4L7.7,-43.5L9.3,-41.7L14.8,-46ZM27.3,-36.7L26.1,-35.8L23.4,-36.1L22.5,-37.8L22.1,-40.1L22.3,-44.4L24.1,-47.4L31.2,-51.6L28.2,-53.4L28.1,-54.6L30.2,-58.4L38,-63.9L39.9,-65L41.8,-64.7L37.4,-54.2ZM30.1,-278.5L22.6,-262.4L20.2,-262.1L17.6,-258.2L10.6,-254L16.6,-253.6L18.1,-251.9L17.9,-248.7L16.7,-246.8L8.4,-239.8L3,-237.2L-3.2,-229.7L-6.1,-229.9L-9.4,-225L-11.9,-223.1L-13.2,-223.2L-14.7,-224.3L-17.8,-229.5L-11.1,-233.9L-10.2,-236.5L-5.6,-239.1L-5.9,-240L-12.7,-244.4L-15.2,-247.4L-14.7,-248.7L-11.2,-251.6L-12.8,-252L-13.8,-253.8L-15.5,-254.6L-16.1,-256.2L-16,-260.2L-15.3,-264.4L-13,-266.1L-12.2,-268L-11.2,-268.4L-8.3,-267.2L-5.3,-263.7L-1.6,-264.7L2.7,-263.8L2.9,-264.6L0.2,-272.9L0.9,-274.5L2.8,-276.3L13,-281.4L25.8,-290.4L28.9,-291.7L29.7,-290.3L30.7,-285.2ZM17.6,-146.4L16,-145.3L14.2,-145.6L12.2,-147.4L10.1,-152L15.9,-154.7L18.2,-152.8L18.8,-150.6L18.6,-148.3ZM27.8,-197.2L27.3,-192.9L26.1,-188L27.1,-182.7L27,-179.1L29.2,-177.6L30.3,-175.9L39.8,-173.4L48.9,-173.5L50.4,-171.8L50.5,-169.3L48.9,-166.8L43.6,-162.1L37.1,-154.6L35.1,-153.1L33.1,-153L31.8,-153.9L31.5,-168.1L25,-166.7L19.6,-167.2L16.8,-169L15,-172.4L11.5,-181.2L-0.2,-185.5L-3.2,-190.3L-4.1,-193.3L-3.5,-194.8L-0.8,-198L2.2,-196.7L4.2,-197.2L5.5,-198.8L5.5,-200.1L4.1,-203.2L4.2,-204.1L16.5,-207.1L17.8,-213.1L20.5,-213.4L23.3,-211.3L27.1,-204.8ZM-24.9,-217.6L-19.7,-211.9L-24.9,-203.4L-31.8,-204L-41.2,-211.2L-41.1,-212.5L-40.2,-214.4L-38.6,-215.9L-36.9,-216.1L-34.7,-214.8L-31,-216.3L-28.4,-215.4ZM-31.2,-164.1L-33.5,-163.8L-36.2,-164.5L-38,-166.1L-39.2,-172L-39.2,-175.7L-38,-182.2L-37.6,-189.9L-31.7,-189.8L-30.3,-188.5L-31.2,-165.1ZM-41,-150.7L-45.6,-149.7L-47.2,-150.5L-47.5,-151.9L-46.1,-155.1L-42.5,-155.9L-40.2,-153.9L-40,-152.3ZM4.2,125.8L-0.4,125L-3.9,126.5L-6.2,127.8L-8.1,127.5L-14.2,127.6L-20,127.3L-20.6,124.7L-19.1,117.3L-20.2,115.2L-25.5,113.9L-27.4,111.9L-30.2,106.6L-30.6,104.1L-30.8,100.8L-33.7,96.3L-37.4,92.9L-39.8,92.6L-44.7,97.3L-48.8,102.1L-47.6,104.7L-46.7,108.1L-49.1,110.4L-55.6,115.5L-56.8,117.6L-58.7,118.6L-61.6,116.7L-69,116.5L-72.3,115.4L-75.9,110.9L-85.5,107.4L-86.7,100.8L-88.4,99.5L-98.6,87.4L-99.6,83.5L-98.1,81.5L-93.6,78.4L-79.3,74L-77,72L-76.4,70.1L-80.4,67.5L-83.7,64.7L-84.7,63L-84.8,61.5L-82.5,59.8L-78.4,60L-75.3,61.1L-72.6,59.7L-67.7,58.4L-64.6,56.5L-61.4,51.3L-58.3,46.6L-57.9,44L-54.6,34.8L-53.3,32.6L-44.3,27.2L-42.4,30.8L-38.1,31.9L-34,29.1L-28.8,19.7L-25.7,19.5L-22.2,20.4L-15.4,19.7L-3,16L2.4,16.2L9.8,19L15.5,19.3L20.1,26.5L22.2,37.5L27.9,48.7L35.8,58.5L35.7,64.1L32.6,67.1L26.1,70.5L26.1,74.7L30.1,72.7L33.7,72.1L42.3,73.4L45.1,77.8L46.7,84L47.7,89.1L46.6,94.7L44.5,92.8L42.4,87.7L39.9,85.3L36.8,84L37.9,90.8L36.8,99.9L38.2,100.8L42.3,101.2L39.1,110.3L33.4,112.6L26.7,113.2L25,116.4L23.5,120.7L19.8,126.7L15.2,130.1L9.6,129.1ZM294.6,454.3L289.5,457.7L288,461.5L286.7,463L283.5,464L280.3,464.2L267.7,456.6L264.6,456.9L267.4,453.3L275.4,450.4L279.7,446.6L289.8,450.1Z"/>
          <g class="map-base" transform="translate(392.3 364.2)" aria-hidden="true">
            <rect x="-6.5" y="-6.5" width="13" height="13" rx="2" transform="rotate(45)"/>
            <text class="map-label map-label-base" x="0" y="-16" text-anchor="middle">OMH team</text>
          </g>
          <g aria-hidden="true">
        <g class="map-pin" data-map-pin="london" transform="translate(348.8 375.9)">
          <circle class="map-pin-pulse" r="9"/>
          <circle class="map-pin-dot" r="7"/>
          <text class="map-label" x="0" y="30" text-anchor="middle">London</text>
        </g>
        <g class="map-pin" data-map-pin="birmingham" transform="translate(244.8 284.6)">
          <circle class="map-pin-pulse" r="9"/>
          <circle class="map-pin-dot" r="7"/>
          <text class="map-label" x="14" y="5" text-anchor="start">Birmingham</text>
        </g>
        <g class="map-pin" data-map-pin="manchester" transform="translate(224.8 190.4)">
          <circle class="map-pin-pulse" r="9"/>
          <circle class="map-pin-dot" r="7"/>
          <text class="map-label" x="4" y="28" text-anchor="start">Manchester</text>
        </g>
        <g class="map-pin" data-map-pin="leeds" transform="translate(263.7 160)">
          <circle class="map-pin-pulse" r="9"/>
          <circle class="map-pin-dot" r="7"/>
          <text class="map-label" x="14" y="5" text-anchor="start">Leeds</text>
        </g>
        <g class="map-pin" data-map-pin="liverpool" transform="translate(182.5 196.9)">
          <circle class="map-pin-pulse" r="9"/>
          <circle class="map-pin-dot" r="7"/>
          <text class="map-label" x="-14" y="5" text-anchor="end">Liverpool</text>
        </g>
        <g class="map-pin" data-map-pin="bristol" transform="translate(203.8 382.2)">
          <circle class="map-pin-pulse" r="9"/>
          <circle class="map-pin-dot" r="7"/>
          <text class="map-label" x="0" y="30" text-anchor="middle">Bristol</text>
        </g>
          </g>
        </svg>
        <figcaption class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-muted">
          <span class="flex items-center gap-2"><span class="block h-3.5 w-3.5 rounded-full border-2 border-surface bg-gold shadow-[0_0_0_1px_var(--va-line-strong)]" aria-hidden="true"></span>Cities we focus on</span>
          <span class="flex items-center gap-2"><span class="block h-3 w-3 rotate-45 rounded-[2px] bg-ink" aria-hidden="true"></span>Our team in Hullbridge, Essex</span>
        </figcaption>
      </figure>

      <div>
        <ul class="grid gap-4 sm:grid-cols-2">
          <li class="area-card flex flex-col rounded-[14px] border border-line bg-surface p-6" data-city="london">
            <div class="flex flex-col items-start gap-2">
              <h3 class="!text-[26px]">London</h3>
              <span class="rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl tnum">Local numbers: 020</span>
            </div>
            <p class="mt-3 text-[17px] leading-[1.5] text-muted">For estate agents, dental practices and law firms across the capital.</p>
            <a href="/contact?service=ai-voice-agents&amp;city=london" class="text-link mt-auto pt-5 !no-underline hover:!underline" data-track="city_click" data-track-name="London">Talk to us about London<svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          </li>
          <li class="area-card flex flex-col rounded-[14px] border border-line bg-surface p-6" data-city="birmingham">
            <div class="flex flex-col items-start gap-2">
              <h3 class="!text-[26px]">Birmingham</h3>
              <span class="rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl tnum">Local numbers: 0121</span>
            </div>
            <p class="mt-3 text-[17px] leading-[1.5] text-muted">For law firms, car dealerships and builders across the West Midlands.</p>
            <a href="/contact?service=ai-voice-agents&amp;city=birmingham" class="text-link mt-auto pt-5 !no-underline hover:!underline" data-track="city_click" data-track-name="Birmingham">Talk to us about Birmingham<svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          </li>
          <li class="area-card flex flex-col rounded-[14px] border border-line bg-surface p-6" data-city="manchester">
            <div class="flex flex-col items-start gap-2">
              <h3 class="!text-[26px]">Manchester</h3>
              <span class="rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl tnum">Local numbers: 0161</span>
            </div>
            <p class="mt-3 text-[17px] leading-[1.5] text-muted">For dental clinics, letting agents and heating engineers across Greater Manchester.</p>
            <a href="/contact?service=ai-voice-agents&amp;city=manchester" class="text-link mt-auto pt-5 !no-underline hover:!underline" data-track="city_click" data-track-name="Manchester">Talk to us about Manchester<svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          </li>
          <li class="area-card flex flex-col rounded-[14px] border border-line bg-surface p-6" data-city="leeds">
            <div class="flex flex-col items-start gap-2">
              <h3 class="!text-[26px]">Leeds</h3>
              <span class="rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl tnum">Local numbers: 0113</span>
            </div>
            <p class="mt-3 text-[17px] leading-[1.5] text-muted">For heating engineers, plumbers and healthcare clinics across West Yorkshire.</p>
            <a href="/contact?service=ai-voice-agents&amp;city=leeds" class="text-link mt-auto pt-5 !no-underline hover:!underline" data-track="city_click" data-track-name="Leeds">Talk to us about Leeds<svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          </li>
          <li class="area-card flex flex-col rounded-[14px] border border-line bg-surface p-6" data-city="liverpool">
            <div class="flex flex-col items-start gap-2">
              <h3 class="!text-[26px]">Liverpool</h3>
              <span class="rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl tnum">Local numbers: 0151</span>
            </div>
            <p class="mt-3 text-[17px] leading-[1.5] text-muted">For car dealerships, plumbers and dental practices across Merseyside.</p>
            <a href="/contact?service=ai-voice-agents&amp;city=liverpool" class="text-link mt-auto pt-5 !no-underline hover:!underline" data-track="city_click" data-track-name="Liverpool">Talk to us about Liverpool<svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          </li>
          <li class="area-card flex flex-col rounded-[14px] border border-line bg-surface p-6" data-city="bristol">
            <div class="flex flex-col items-start gap-2">
              <h3 class="!text-[26px]">Bristol</h3>
              <span class="rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl tnum">Local numbers: 0117</span>
            </div>
            <p class="mt-3 text-[17px] leading-[1.5] text-muted">For builders, estate agents and clinics across Bristol and the South West.</p>
            <a href="/contact?service=ai-voice-agents&amp;city=bristol" class="text-link mt-auto pt-5 !no-underline hover:!underline" data-track="city_click" data-track-name="Bristol">Talk to us about Bristol<svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          </li>
        </ul>
        <p class="mt-5 text-[15px] text-muted">Example numbers elsewhere on this page use Ofcom's reserved drama ranges, not real lines. Local number availability <span class="flag">[CONFIRM]</span></p>
      </div>
    </div>
  </div>
</section>

<section id="why-omh" data-component="WhyChooseOMH" class="bg-surface">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28">
    <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      <div>
        <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Why choose OMH</p>
        <h2>The software is the easy part. <span class="hl">Running it well</span> is the job.</h2>
      </div>
      <p class="text-muted lg:pt-10">Anyone can sign up for a voice AI tool. Whether it works for your business depends on the script, the testing and somebody keeping an eye on it every month. That's the part we do.</p>
    </div>

        <p class="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-semibold md:hidden" aria-hidden="true"><span class="flex items-center gap-2"><span class="block h-3.5 w-3.5 rounded-[4px] bg-band"></span>Managed by OMH</span><span class="flex items-center gap-2 text-muted"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-x"/></svg>DIY or generic tool</span></p>
    <table class="why-table mt-4 w-full md:mt-14 border-separate border-spacing-0 text-left text-[17px] leading-snug">
      <caption class="sr-only">A voice agent managed by OMH compared with a do-it-yourself or generic tool</caption>
      <thead class="max-md:sr-only">
        <tr>
          <th scope="col" class="w-[24%] px-6 pb-4 pt-8 align-bottom"><span class="sr-only">What you get</span></th>
          <th scope="col" class="why-omh w-[40%] rounded-t-[14px] px-7 pb-5 pt-7 align-bottom">
            <span class="flex items-center gap-3">
              <span class="grid h-9 w-9 place-items-center rounded-[9px] bg-gold font-display text-[12px] font-semibold tracking-tight text-navy" aria-hidden="true">OMH</span>
              <span class="font-display text-[20px] font-semibold">Managed by OMH</span>
            </span>
          </th>
          <th scope="col" class="w-[36%] px-7 pb-5 pt-8 align-bottom font-display text-[20px] font-semibold text-muted">DIY or generic tool</th>
        </tr>
      </thead>
      <tbody>
        <tr class="max-md:mb-4 max-md:block max-md:rounded-[14px] max-md:border max-md:border-line max-md:p-5">
          <th scope="row" class="border-t border-line px-6 py-5 align-top font-display text-[17.5px] font-semibold max-md:block max-md:border-0 max-md:p-0 max-md:pb-3">Setup</th>
          <td class="why-omh px-7 py-5 align-top max-md:block max-md:rounded-[10px] max-md:px-4 max-md:py-3.5"><span class="flex gap-3"><svg class="icon mt-[3px] text-band-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span><span class="sr-only">Managed by OMH: </span>We map your calls, write the script and connect your diary.</span></span></td>
          <td class="border-t border-line px-7 py-5 align-top text-muted max-md:block max-md:border-0 max-md:px-4 max-md:pb-0 max-md:pt-3"><span class="flex gap-3"><svg class="icon mt-[3px] opacity-70" aria-hidden="true" focusable="false"><use href="#i-x"/></svg><span><span class="sr-only">DIY or generic tool: </span>You learn the tool and build it in your own time.</span></span></td>
        </tr>
        <tr class="max-md:mb-4 max-md:block max-md:rounded-[14px] max-md:border max-md:border-line max-md:p-5">
          <th scope="row" class="border-t border-line px-6 py-5 align-top font-display text-[17.5px] font-semibold max-md:block max-md:border-0 max-md:p-0 max-md:pb-3">Industry knowledge</th>
          <td class="why-omh px-7 py-5 align-top max-md:block max-md:rounded-[10px] max-md:px-4 max-md:py-3.5"><span class="flex gap-3"><svg class="icon mt-[3px] text-band-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span><span class="sr-only">Managed by OMH: </span>Built from the calls your sector really gets.</span></span></td>
          <td class="border-t border-line px-7 py-5 align-top text-muted max-md:block max-md:border-0 max-md:px-4 max-md:pb-0 max-md:pt-3"><span class="flex gap-3"><svg class="icon mt-[3px] opacity-70" aria-hidden="true" focusable="false"><use href="#i-x"/></svg><span><span class="sr-only">DIY or generic tool: </span>A general template you adapt yourself.</span></span></td>
        </tr>
        <tr class="max-md:mb-4 max-md:block max-md:rounded-[14px] max-md:border max-md:border-line max-md:p-5">
          <th scope="row" class="border-t border-line px-6 py-5 align-top font-display text-[17.5px] font-semibold max-md:block max-md:border-0 max-md:p-0 max-md:pb-3">Testing</th>
          <td class="why-omh px-7 py-5 align-top max-md:block max-md:rounded-[10px] max-md:px-4 max-md:py-3.5"><span class="flex gap-3"><svg class="icon mt-[3px] text-band-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span><span class="sr-only">Managed by OMH: </span>Test calls and your sign-off before a customer hears it.</span></span></td>
          <td class="border-t border-line px-7 py-5 align-top text-muted max-md:block max-md:border-0 max-md:px-4 max-md:pb-0 max-md:pt-3"><span class="flex gap-3"><svg class="icon mt-[3px] opacity-70" aria-hidden="true" focusable="false"><use href="#i-x"/></svg><span><span class="sr-only">DIY or generic tool: </span>Often tested on live callers.</span></span></td>
        </tr>
        <tr class="max-md:mb-4 max-md:block max-md:rounded-[14px] max-md:border max-md:border-line max-md:p-5">
          <th scope="row" class="border-t border-line px-6 py-5 align-top font-display text-[17.5px] font-semibold max-md:block max-md:border-0 max-md:p-0 max-md:pb-3">Reporting</th>
          <td class="why-omh px-7 py-5 align-top max-md:block max-md:rounded-[10px] max-md:px-4 max-md:py-3.5"><span class="flex gap-3"><svg class="icon mt-[3px] text-band-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span><span class="sr-only">Managed by OMH: </span>Call outcomes sit beside your ads and website results.</span></span></td>
          <td class="border-t border-line px-7 py-5 align-top text-muted max-md:block max-md:border-0 max-md:px-4 max-md:pb-0 max-md:pt-3"><span class="flex gap-3"><svg class="icon mt-[3px] opacity-70" aria-hidden="true" focusable="false"><use href="#i-x"/></svg><span><span class="sr-only">DIY or generic tool: </span>A separate dashboard nobody opens.</span></span></td>
        </tr>
        <tr class="max-md:mb-4 max-md:block max-md:rounded-[14px] max-md:border max-md:border-line max-md:p-5">
          <th scope="row" class="border-t border-line px-6 py-5 align-top font-display text-[17.5px] font-semibold max-md:block max-md:border-0 max-md:p-0 max-md:pb-3">When a call goes wrong</th>
          <td class="why-omh px-7 py-5 align-top max-md:block max-md:rounded-[10px] max-md:px-4 max-md:py-3.5"><span class="flex gap-3"><svg class="icon mt-[3px] text-band-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span><span class="sr-only">Managed by OMH: </span>We spot it in the monthly review and fix the script.</span></span></td>
          <td class="border-t border-line px-7 py-5 align-top text-muted max-md:block max-md:border-0 max-md:px-4 max-md:pb-0 max-md:pt-3"><span class="flex gap-3"><svg class="icon mt-[3px] opacity-70" aria-hidden="true" focusable="false"><use href="#i-x"/></svg><span><span class="sr-only">DIY or generic tool: </span>You find out when a customer complains.</span></span></td>
        </tr>
        <tr class="max-md:mb-4 max-md:block max-md:rounded-[14px] max-md:border max-md:border-line max-md:p-5">
          <th scope="row" class="border-t border-line px-6 py-5 align-top font-display text-[17.5px] font-semibold max-md:block max-md:border-0 max-md:p-0 max-md:pb-3">Who to ring</th>
          <td class="why-omh px-7 py-5 align-top max-md:block max-md:rounded-[10px] max-md:px-4 max-md:py-3.5 md:rounded-b-[14px] md:pb-7"><span class="flex gap-3"><svg class="icon mt-[3px] text-band-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span><span class="sr-only">Managed by OMH: </span>A named person at OMH in the UK.</span></span></td>
          <td class="border-t border-line px-7 py-5 align-top text-muted max-md:block max-md:border-0 max-md:px-4 max-md:pb-0 max-md:pt-3"><span class="flex gap-3"><svg class="icon mt-[3px] opacity-70" aria-hidden="true" focusable="false"><use href="#i-x"/></svg><span><span class="sr-only">DIY or generic tool: </span>A support ticket.</span></span></td>
        </tr>
      </tbody>
    </table>

    <div class="mt-20 grid gap-6 md:grid-cols-3">
      <article class="flex flex-col rounded-[14px] border border-line bg-paper p-3">
        <div class="rounded-[10px] bg-sand p-5 md:min-h-[236px]" aria-hidden="true">
          <p class="flex items-center justify-between gap-3 text-[14.5px] font-semibold"><span>Call map, Aire Valley Heating</span><span class="font-normal text-muted">Leeds</span></p>
          <ul class="mt-4 space-y-2.5 text-[14.5px]">
            <li class="grid grid-cols-[7.5rem_minmax(0,1fr)_2.4rem] items-center gap-3"><span class="truncate">Boiler breakdown</span><span class="block h-2.5 rounded-full bg-ink/10"><span class="block h-full rounded-full bg-gold" style="width:91.2%"></span></span><span class="text-right text-muted tnum">38%</span></li>
            <li class="grid grid-cols-[7.5rem_minmax(0,1fr)_2.4rem] items-center gap-3"><span class="truncate">Annual service</span><span class="block h-2.5 rounded-full bg-ink/10"><span class="block h-full rounded-full bg-ink/35" style="width:57.599999999999994%"></span></span><span class="text-right text-muted tnum">24%</span></li>
            <li class="grid grid-cols-[7.5rem_minmax(0,1fr)_2.4rem] items-center gap-3"><span class="truncate">Quote request</span><span class="block h-2.5 rounded-full bg-ink/10"><span class="block h-full rounded-full bg-ink/35" style="width:43.199999999999996%"></span></span><span class="text-right text-muted tnum">18%</span></li>
            <li class="grid grid-cols-[7.5rem_minmax(0,1fr)_2.4rem] items-center gap-3"><span class="truncate">Existing job</span><span class="block h-2.5 rounded-full bg-ink/10"><span class="block h-full rounded-full bg-ink/35" style="width:28.799999999999997%"></span></span><span class="text-right text-muted tnum">12%</span></li>
            <li class="grid grid-cols-[7.5rem_minmax(0,1fr)_2.4rem] items-center gap-3"><span class="truncate">Other</span><span class="block h-2.5 rounded-full bg-ink/10"><span class="block h-full rounded-full bg-ink/35" style="width:19.2%"></span></span><span class="text-right text-muted tnum">8%</span></li>
          </ul>
        </div>
        <div class="px-3 pb-4 pt-6">
          <p class="num text-[15px]">01</p>
          <h3 class="mt-2 !text-[25px]">Built around your industry's calls</h3>
          <p class="mt-3 text-[17px] text-muted">We start from the real reasons people ring you: the boiler fault, the viewing request, the cancelled appointment. The script, questions and handover rules follow from those.</p>
        </div>
      </article>
      <article class="flex flex-col rounded-[14px] border border-line bg-paper p-3">
        <div class="rounded-[10px] bg-sand p-5 md:min-h-[236px]" aria-hidden="true">
          <p class="flex items-center justify-between gap-3 text-[14.5px] font-semibold"><span>Monthly report, October</span><span class="font-normal text-muted">Bristol</span></p>
          <ol class="mt-4 grid grid-cols-3 gap-2 text-center">
            <li class="rounded-[10px] bg-surface px-2 py-3"><span class="block font-display text-[24px] font-semibold leading-none tnum">212</span><span class="mt-1.5 block text-[13px] leading-tight text-muted">Ad clicks to call</span></li>
            <li class="rounded-[10px] bg-surface px-2 py-3"><span class="block font-display text-[24px] font-semibold leading-none tnum">209</span><span class="mt-1.5 block text-[13px] leading-tight text-muted">Calls answered</span></li>
            <li class="rounded-[10px] bg-gold px-2 py-3 text-navy"><span class="block font-display text-[24px] font-semibold leading-none tnum">74</span><span class="mt-1.5 block text-[13px] font-semibold leading-tight">Jobs booked</span></li>
          </ol>
          <p class="mt-3 text-[13.5px] text-muted">Google Ads, website and voice agent in one view</p>
        </div>
        <div class="px-3 pb-4 pt-6">
          <p class="num text-[15px]">02</p>
          <h3 class="mt-2 !text-[25px]">Outcomes in your reporting</h3>
          <p class="mt-3 text-[17px] text-muted">Calls answered, bookings made and calls transferred sit in the same report as your Google Ads and website figures, so you can follow an enquiry from click to booked job.</p>
        </div>
      </article>
      <article class="flex flex-col rounded-[14px] border border-line bg-paper p-3">
        <div class="rounded-[10px] bg-sand p-5 md:min-h-[236px]" aria-hidden="true">
          <p class="flex items-center justify-between gap-3 text-[14.5px] font-semibold"><span>What we changed in October</span><span class="font-normal text-muted">Manchester</span></p>
          <ul class="mt-4 space-y-2.5 text-[14.5px] leading-snug">
            <li class="flex gap-2.5"><span class="mt-[5px] block h-2 w-2 shrink-0 rounded-full bg-gold"></span><span>Added an answer on Saturday opening hours, asked 31 times</span></li>
            <li class="flex gap-2.5"><span class="mt-[5px] block h-2 w-2 shrink-0 rounded-full bg-gold"></span><span>Shortened the greeting by four seconds</span></li>
            <li class="flex gap-2.5"><span class="mt-[5px] block h-2 w-2 shrink-0 rounded-full bg-gold"></span><span>New rule: broken braces go straight to reception</span></li>
          </ul>
        </div>
        <div class="px-3 pb-4 pt-6">
          <p class="num text-[15px]">03</p>
          <h3 class="mt-2 !text-[25px]">A UK team optimising monthly</h3>
          <p class="mt-3 text-[17px] text-muted">Every month we listen to a sample of calls, look at what the agent couldn't answer and improve it. You get a short written summary of what we changed and why.</p>
        </div>
      </article>
    </div>
    <p class="mt-4 text-[14.5px] text-muted">Panels show illustrative examples with fictional businesses.</p>
  </div>
</section>

<section id="how-it-works" data-component="HowItWorks">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28">
    <div class="mx-auto max-w-[44rem] text-center">
      <p class="eyebrow justify-center"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>How it works</p>
      <h2>Four steps from first call <span class="hl">to live agent</span></h2>
      <p class="mt-5 text-muted">You stay in control at every step. Typical time from discovery to launch <span class="flag">[PLACEHOLDER]</span> We confirm your timeline after the first call.</p>
    </div>

    <ol class="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <li class="how-step relative flex flex-col overflow-visible rounded-[16px] border border-line bg-surface" style="--tint: var(--va-tint-1)">
        <div class="relative grid h-[236px] place-items-center rounded-t-[15px] bg-[var(--tint)] px-5 pb-9 pt-5" aria-hidden="true">
          <div class="how-mock w-full max-w-[250px] rounded-[10px] bg-surface p-4 text-left shadow-[0_10px_30px_-18px_rgb(16_24_40/0.5)]">
          <p class="text-[13.5px] font-semibold">Call map</p>
          <ul class="mt-2.5 space-y-2 text-[13px] leading-tight">
            <li class="flex items-center justify-between gap-2"><span>New bookings</span><span class="rounded-full bg-gold/25 px-2 py-0.5 font-semibold text-hl">Agent</span></li>
            <li class="flex items-center justify-between gap-2"><span>Opening hours</span><span class="rounded-full bg-gold/25 px-2 py-0.5 font-semibold text-hl">Agent</span></li>
            <li class="flex items-center justify-between gap-2"><span>Emergencies</span><span class="rounded-full bg-ink/10 px-2 py-0.5 font-semibold">Person</span></li>
            <li class="flex items-center justify-between gap-2"><span>Complaints</span><span class="rounded-full bg-ink/10 px-2 py-0.5 font-semibold">Person</span></li>
          </ul>
        </div>
        </div>
        <span class="relative z-10 mx-auto -mt-8 grid h-16 w-16 place-items-center rounded-full border-[5px] border-surface bg-gold font-display text-[20px] font-semibold text-navy tnum"><span class="sr-only">Step </span>1</span>
        <div class="flex flex-1 flex-col px-6 pb-7 pt-4 text-center">
          <h3 class="!text-[23px] !leading-[1.25]">Discovery and call mapping</h3>
          <p class="mt-3 text-[16.5px] leading-[1.55] text-muted">We talk through who rings you, when and why, and agree which calls the agent handles and which always go to a person.</p>
          <p class="mt-auto pt-5"><span class="inline-block rounded-full bg-sand px-3.5 py-1.5 text-[14.5px] font-semibold">You give: about an hour</span></p>
        </div>
        <span class="how-arrow absolute -right-[19px] top-[236px] z-20 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper text-hl lg:grid" aria-hidden="true"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></span>
      </li>
      <li class="how-step relative flex flex-col overflow-visible rounded-[16px] border border-line bg-surface" style="--tint: var(--va-tint-2)">
        <div class="relative grid h-[236px] place-items-center rounded-t-[15px] bg-[var(--tint)] px-5 pb-9 pt-5" aria-hidden="true">
          <div class="how-mock w-full max-w-[250px] space-y-2.5 text-left">
          <p class="rounded-[4px_12px_12px_12px] bg-surface px-3 py-2.5 text-[13.5px] leading-snug shadow-[0_10px_30px_-18px_rgb(16_24_40/0.5)]"><span class="block text-[12px] font-semibold text-hl">Greeting</span>Good morning, Severn Plumbing. I'm Sam, the AI assistant. How can I help?</p>
          <div class="flex flex-wrap gap-1.5 text-[12.5px] font-semibold"><span class="rounded-full bg-surface px-2.5 py-1">Voice: British, warm</span><span class="rounded-full bg-surface px-2.5 py-1">Name: Sam</span></div>
        </div>
        </div>
        <span class="relative z-10 mx-auto -mt-8 grid h-16 w-16 place-items-center rounded-full border-[5px] border-surface bg-gold font-display text-[20px] font-semibold text-navy tnum"><span class="sr-only">Step </span>2</span>
        <div class="flex flex-1 flex-col px-6 pb-7 pt-4 text-center">
          <h3 class="!text-[23px] !leading-[1.25]">Script, voice and knowledge</h3>
          <p class="mt-3 text-[16.5px] leading-[1.55] text-muted">We write the conversation, choose the voice and load the facts the agent may use. You approve every word before it goes near a caller.</p>
          <p class="mt-auto pt-5"><span class="inline-block rounded-full bg-sand px-3.5 py-1.5 text-[14.5px] font-semibold">You give: FAQs and prices</span></p>
        </div>
        <span class="how-arrow absolute -right-[19px] top-[236px] z-20 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper text-hl lg:grid" aria-hidden="true"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></span>
      </li>
      <li class="how-step relative flex flex-col overflow-visible rounded-[16px] border border-line bg-surface" style="--tint: var(--va-tint-3)">
        <div class="relative grid h-[236px] place-items-center rounded-t-[15px] bg-[var(--tint)] px-5 pb-9 pt-5" aria-hidden="true">
          <div class="how-mock w-full max-w-[250px] rounded-[10px] bg-surface p-4 text-left shadow-[0_10px_30px_-18px_rgb(16_24_40/0.5)]">
          <p class="text-[13.5px] font-semibold">Test calls</p>
          <ul class="mt-2.5 space-y-2 text-[13px] leading-tight">
            <li class="flex items-center justify-between gap-2"><span>Book a boiler service</span><span class="flex items-center gap-1 font-semibold text-ok"><svg class="icon !h-3.5 !w-3.5" aria-hidden="true" focusable="false"><use href="#i-check"/></svg>Passed</span></li>
            <li class="flex items-center justify-between gap-2"><span>Ask for a person</span><span class="flex items-center gap-1 font-semibold text-ok"><svg class="icon !h-3.5 !w-3.5" aria-hidden="true" focusable="false"><use href="#i-check"/></svg>Passed</span></li>
            <li class="flex items-center justify-between gap-2"><span>Weekend call-out fee</span><span class="font-semibold text-hl">Fixed</span></li>
          </ul>
          <p class="mt-3 rounded-[8px] bg-ok/10 px-2.5 py-1.5 text-center text-[13px] font-semibold text-ok">Signed off by you</p>
        </div>
        </div>
        <span class="relative z-10 mx-auto -mt-8 grid h-16 w-16 place-items-center rounded-full border-[5px] border-surface bg-gold font-display text-[20px] font-semibold text-navy tnum"><span class="sr-only">Step </span>3</span>
        <div class="flex flex-1 flex-col px-6 pb-7 pt-4 text-center">
          <h3 class="!text-[23px] !leading-[1.25]">Test calls and sign-off</h3>
          <p class="mt-3 text-[16.5px] leading-[1.55] text-muted">You and your team ring the agent and try to trip it up. We fix what you find, and nothing goes live until you say so.</p>
          <p class="mt-auto pt-5"><span class="inline-block rounded-full bg-sand px-3.5 py-1.5 text-[14.5px] font-semibold">You give: honest feedback</span></p>
        </div>
        <span class="how-arrow absolute -right-[19px] top-[236px] z-20 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper text-hl lg:grid" aria-hidden="true"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></span>
      </li>
      <li class="how-step relative flex flex-col overflow-visible rounded-[16px] border border-line bg-surface" style="--tint: var(--va-tint-4)">
        <div class="relative grid h-[236px] place-items-center rounded-t-[15px] bg-[var(--tint)] px-5 pb-9 pt-5" aria-hidden="true">
          <div class="how-mock w-full max-w-[250px] rounded-[10px] bg-surface p-4 text-left shadow-[0_10px_30px_-18px_rgb(16_24_40/0.5)]">
          <p class="flex items-center justify-between text-[13.5px] font-semibold"><span>Your agent</span><span class="flex items-center gap-1.5 rounded-full bg-ok/10 px-2 py-0.5 text-[12.5px] text-ok"><span class="block h-2 w-2 rounded-full bg-ok"></span>Live</span></p>
          <div class="mt-3 grid h-[68px] grid-cols-3 items-end gap-2">
            <span class="block h-[45%] rounded-t-[4px] bg-ink/20"></span>
            <span class="block h-[70%] rounded-t-[4px] bg-ink/20"></span>
            <span class="block h-[92%] rounded-t-[4px] bg-gold"></span>
          </div>
          <p class="mt-1.5 grid grid-cols-3 gap-2 text-center text-[12px] text-muted"><span>Aug</span><span>Sep</span><span>Oct</span></p>
        </div>
        </div>
        <span class="relative z-10 mx-auto -mt-8 grid h-16 w-16 place-items-center rounded-full border-[5px] border-surface bg-gold font-display text-[20px] font-semibold text-navy tnum"><span class="sr-only">Step </span>4</span>
        <div class="flex flex-1 flex-col px-6 pb-7 pt-4 text-center">
          <h3 class="!text-[23px] !leading-[1.25]">Launch and monthly optimisation</h3>
          <p class="mt-3 text-[16.5px] leading-[1.55] text-muted">We switch it on, often for out-of-hours calls first. Each month we review calls, improve the script and report back.</p>
          <p class="mt-auto pt-5"><span class="inline-block rounded-full bg-sand px-3.5 py-1.5 text-[14.5px] font-semibold">You get: a monthly report</span></p>
        </div>
        
      </li>
    </ol>
  </div>
</section>

<section id="solutions" data-component="Solutions" class="bg-sand">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28">
    <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      <div>
        <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Our solutions</p>
        <h2>Three jobs your agent <span class="hl">can take on</span></h2>
      </div>
      <p class="text-muted lg:pt-10">Start with one and add the others when you're ready. Most businesses begin with booking for the calls their team can't answer. Pick a job below to see how a call flows.</p>
    </div>
    <div class="mt-12" data-tabs>
      <div role="tablist" aria-label="Voice agent solutions" class="grid gap-3 md:grid-cols-3">
        <button type="button" role="tab" id="tab-booking" aria-controls="panel-booking" aria-selected="true" tabindex="0" class="sol-tab group relative flex items-center gap-4 rounded-[14px] border border-line bg-surface p-4 text-left transition-colors hover:border-[var(--va-line-strong)] aria-selected:border-transparent aria-selected:bg-band aria-selected:text-band-ink dark:aria-selected:border-gold sm:p-5" data-tab data-track="solution_tab" data-track-name="Appointment Booking">
          <span class="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-gold/20 text-hl group-aria-selected:bg-gold group-aria-selected:text-navy" aria-hidden="true"><svg class="icon !h-6 !w-6" aria-hidden="true" focusable="false"><use href="#i-calendar"/></svg></span>
          <span class="min-w-0">
            <span class="block font-display text-[19px] font-semibold leading-tight">Appointment Booking</span>
            <span class="mt-1 block text-[15px] leading-snug text-muted group-aria-selected:text-band-muted">Callers book while they are still on the line</span>
          </span>
          <span class="sol-notch absolute -bottom-[9px] left-10 hidden h-[18px] w-[18px] rotate-45 rounded-[3px] bg-band md:group-aria-selected:block" aria-hidden="true"></span>
        </button>
        <button type="button" role="tab" id="tab-support" aria-controls="panel-support" aria-selected="false" tabindex="-1" class="sol-tab group relative flex items-center gap-4 rounded-[14px] border border-line bg-surface p-4 text-left transition-colors hover:border-[var(--va-line-strong)] aria-selected:border-transparent aria-selected:bg-band aria-selected:text-band-ink dark:aria-selected:border-gold sm:p-5" data-tab data-track="solution_tab" data-track-name="Customer Support">
          <span class="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-gold/20 text-hl group-aria-selected:bg-gold group-aria-selected:text-navy" aria-hidden="true"><svg class="icon !h-6 !w-6" aria-hidden="true" focusable="false"><use href="#i-message"/></svg></span>
          <span class="min-w-0">
            <span class="block font-display text-[19px] font-semibold leading-tight">Customer Support</span>
            <span class="mt-1 block text-[15px] leading-snug text-muted group-aria-selected:text-band-muted">Everyday questions answered, the rest handed over</span>
          </span>
          <span class="sol-notch absolute -bottom-[9px] left-10 hidden h-[18px] w-[18px] rotate-45 rounded-[3px] bg-band md:group-aria-selected:block" aria-hidden="true"></span>
        </button>
        <button type="button" role="tab" id="tab-outbound" aria-controls="panel-outbound" aria-selected="false" tabindex="-1" class="sol-tab group relative flex items-center gap-4 rounded-[14px] border border-line bg-surface p-4 text-left transition-colors hover:border-[var(--va-line-strong)] aria-selected:border-transparent aria-selected:bg-band aria-selected:text-band-ink dark:aria-selected:border-gold sm:p-5" data-tab data-track="solution_tab" data-track-name="Outbound Follow-up">
          <span class="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-gold/20 text-hl group-aria-selected:bg-gold group-aria-selected:text-navy" aria-hidden="true"><svg class="icon !h-6 !w-6" aria-hidden="true" focusable="false"><use href="#i-phone-forwarded"/></svg></span>
          <span class="min-w-0">
            <span class="block font-display text-[19px] font-semibold leading-tight">Outbound Follow-up</span>
            <span class="mt-1 block text-[15px] leading-snug text-muted group-aria-selected:text-band-muted">Reminders and call-backs to people who agreed to them</span>
          </span>
          <span class="sol-notch absolute -bottom-[9px] left-10 hidden h-[18px] w-[18px] rotate-45 rounded-[3px] bg-band md:group-aria-selected:block" aria-hidden="true"></span>
        </button>
      </div>
      <div role="tabpanel" id="panel-booking" aria-labelledby="tab-booking" tabindex="0" data-tab-panel class="pt-6">
        <div class="rounded-[14px] border border-line bg-surface p-4 sm:p-6" data-flow-wrap>
          <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-1 pb-4">
            <p class="font-display text-[18px] font-semibold">How the call flows</p>
            <p class="text-[15px] text-muted"><span class="md:hidden">Tap</span><span class="max-md:hidden">Hover or select</span> a step to see what happens</p>
          </div>
          <svg viewBox="0 0 1000 280" class="flow hidden h-auto w-full md:block" data-flow role="group" aria-label="Appointment booking, step by step">
          <defs><marker id="flow-arrow-booking" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="flow-arrow"/></marker></defs>
          <path class="flow-edge" data-flow-edge data-from="b1" data-to="b2" d="M204 140 H262" marker-end="url(#flow-arrow-booking)"/><path class="flow-edge" data-flow-edge data-from="b2" data-to="b3" d="M464 140 C504 140 482 90 522 90" marker-end="url(#flow-arrow-booking)"/><path class="flow-edge" data-flow-edge data-from="b3" data-to="b5" d="M724 90 C764 90 750 140 790 140" marker-end="url(#flow-arrow-booking)"/><path class="flow-edge" data-flow-edge data-from="b2" data-to="b4" d="M464 140 C504 140 482 190 522 190" marker-end="url(#flow-arrow-booking)"/><path class="flow-edge" data-flow-edge data-from="b4" data-to="b5" d="M724 190 C764 190 750 140 790 140" marker-end="url(#flow-arrow-booking)"/>
          <g class="flow-node flow-start" data-flow-node="b1" data-detail="Saturday, 6:52pm. Every negotiator is out, so the voice agent picks up in the branch name and says it is an AI assistant." tabindex="0" role="button" aria-label="Buyer rings about a flat">
          <rect class="flow-box" x="8" y="107" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="38" cy="140" r="17"/>
          <use class="flow-icon" href="#i-phone-incoming" x="28" y="130" width="20" height="20"/>
          <text class="flow-text" x="64" y="135.5">Buyer rings about</text><text class="flow-text" x="64" y="154.5">a flat</text>
        </g><g class="flow-node flow-agent" data-flow-node="b2" data-detail="It looks at real availability and offers the caller two times that suit the branch." tabindex="0" role="button" aria-label="Agent checks the viewings diary">
          <rect class="flow-box" x="268" y="107" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="298" cy="140" r="17"/>
          <use class="flow-icon" href="#i-calendar" x="288" y="130" width="20" height="20"/>
          <text class="flow-text" x="324" y="135.5">Agent checks</text><text class="flow-text" x="324" y="154.5">the viewings diary</text>
        </g><g class="flow-node flow-ok" data-flow-node="b3" data-detail="The caller picks a time. The slot goes straight into the diary and a confirmation text goes out." tabindex="0" role="button" aria-label="Viewing booked and text sent">
          <rect class="flow-box" x="528" y="57" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="558" cy="90" r="17"/>
          <use class="flow-icon" href="#i-check" x="548" y="80" width="20" height="20"/>
          <text class="flow-text" x="584" y="85.5">Viewing booked</text><text class="flow-text" x="584" y="104.5">and text sent</text>
        </g><g class="flow-node flow-person" data-flow-node="b4" data-detail="If nothing works, the agent takes the details so a negotiator can call back first thing." tabindex="0" role="button" aria-label="No time fits: message taken">
          <rect class="flow-box" x="528" y="157" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="558" cy="190" r="17"/>
          <use class="flow-icon" href="#i-message" x="548" y="180" width="20" height="20"/>
          <text class="flow-text" x="584" y="185.5">No time fits:</text><text class="flow-text" x="584" y="204.5">message taken</text>
        </g><g class="flow-node flow-end" data-flow-node="b5" data-detail="Every call ends with a short written summary, so the team knows exactly what happened." tabindex="0" role="button" aria-label="Summary sent to the branch">
          <rect class="flow-box" x="796" y="107" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="826" cy="140" r="17"/>
          <use class="flow-icon" href="#i-mail" x="816" y="130" width="20" height="20"/>
          <text class="flow-text" x="852" y="135.5">Summary sent</text><text class="flow-text" x="852" y="154.5">to the branch</text>
        </g>
        </svg>
        <svg viewBox="0 0 360 462" class="flow mx-auto h-auto w-full max-w-[420px] md:hidden" data-flow role="group" aria-label="Appointment booking, step by step">
          <defs><marker id="flow-arrow-booking-m" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="flow-arrow"/></marker></defs>
          <path class="flow-edge" data-flow-edge data-from="b1" data-to="b2" d="M180 70 V98" marker-end="url(#flow-arrow-booking-m)"/><path class="flow-edge" data-flow-edge data-from="b2" data-to="b3" d="M40 135 H22 V231 H34" marker-end="url(#flow-arrow-booking-m)"/><path class="flow-edge" data-flow-edge data-from="b3" data-to="b5" d="M320 231 H338 V423 H326" marker-end="url(#flow-arrow-booking-m)"/><path class="flow-edge" data-flow-edge data-from="b2" data-to="b4" d="M40 135 H22 V327 H34" marker-end="url(#flow-arrow-booking-m)"/><path class="flow-edge" data-flow-edge data-from="b4" data-to="b5" d="M320 327 H338 V423 H326" marker-end="url(#flow-arrow-booking-m)"/>
          <g class="flow-node flow-start" data-flow-node="b1" data-detail="Saturday, 6:52pm. Every negotiator is out, so the voice agent picks up in the branch name and says it is an AI assistant." tabindex="0" role="button" aria-label="Buyer rings about a flat">
          <rect class="flow-box" x="40" y="8" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="39" r="17"/>
          <use class="flow-icon" href="#i-phone-incoming" x="60" y="29" width="20" height="20"/>
          <text class="flow-text" x="96" y="34.5">Buyer rings about</text><text class="flow-text" x="96" y="53.5">a flat</text>
        </g><g class="flow-node flow-agent" data-flow-node="b2" data-detail="It looks at real availability and offers the caller two times that suit the branch." tabindex="0" role="button" aria-label="Agent checks the viewings diary">
          <rect class="flow-box" x="40" y="104" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="135" r="17"/>
          <use class="flow-icon" href="#i-calendar" x="60" y="125" width="20" height="20"/>
          <text class="flow-text" x="96" y="130.5">Agent checks</text><text class="flow-text" x="96" y="149.5">the viewings diary</text>
        </g><g class="flow-node flow-ok" data-flow-node="b3" data-detail="The caller picks a time. The slot goes straight into the diary and a confirmation text goes out." tabindex="0" role="button" aria-label="Viewing booked and text sent">
          <rect class="flow-box" x="40" y="200" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="231" r="17"/>
          <use class="flow-icon" href="#i-check" x="60" y="221" width="20" height="20"/>
          <text class="flow-text" x="96" y="226.5">Viewing booked</text><text class="flow-text" x="96" y="245.5">and text sent</text>
        </g><g class="flow-node flow-person" data-flow-node="b4" data-detail="If nothing works, the agent takes the details so a negotiator can call back first thing." tabindex="0" role="button" aria-label="No time fits: message taken">
          <rect class="flow-box" x="40" y="296" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="327" r="17"/>
          <use class="flow-icon" href="#i-message" x="60" y="317" width="20" height="20"/>
          <text class="flow-text" x="96" y="322.5">No time fits:</text><text class="flow-text" x="96" y="341.5">message taken</text>
        </g><g class="flow-node flow-end" data-flow-node="b5" data-detail="Every call ends with a short written summary, so the team knows exactly what happened." tabindex="0" role="button" aria-label="Summary sent to the branch">
          <rect class="flow-box" x="40" y="392" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="423" r="17"/>
          <use class="flow-icon" href="#i-mail" x="60" y="413" width="20" height="20"/>
          <text class="flow-text" x="96" y="418.5">Summary sent</text><text class="flow-text" x="96" y="437.5">to the branch</text>
        </g>
        </svg>
          <p class="mt-4 flex min-h-[56px] items-start gap-3 rounded-[10px] bg-sand px-4 py-3 text-[16.5px] leading-snug" aria-live="polite" data-flow-caption data-default="Saturday, 6:52pm. Every negotiator is out, so the voice agent picks up in the branch name and says it is an AI assistant."><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg><span data-flow-caption-text>Saturday, 6:52pm. Every negotiator is out, so the voice agent picks up in the branch name and says it is an AI assistant.</span></p>
        </div>
        <div class="mt-10 grid gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <h3>Bookings straight into your diary</h3>
            <p class="mt-4 text-muted">The agent checks real availability, offers times and books the slot while the caller is still on the line. It collects the details your team needs, then confirms by text.</p>
            <ul class="mt-6 space-y-2.5 text-[17px] leading-snug">
              <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Works to your opening hours, staff and appointment types</span></li>
              <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Reschedules and cancels as well as books</span></li>
              <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Sends confirmations and reminders by text</span></li>
            </ul>
            <p class="mt-6 border-t border-line pt-4 text-[15.5px] text-muted">Diary and calendar connections <span class="flag">[CONFIRM]</span></p>
          </div>
          <div>
            <div class="card overflow-hidden">
  <div class="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
    <div><p class="font-display text-[18px] font-semibold leading-tight">Viewings diary</p><p class="text-[15px] text-muted">Wren &amp; Marlow Estate Agents, London</p></div>
    <span class="chip"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-calendar"/></svg>Sat 17 Oct</span>
  </div>
  <ul class="px-5 py-3 text-[16.5px]">
    <li class="grid grid-cols-[3.6rem_minmax(0,1fr)] items-start gap-3 py-2.5"><span class="pt-2 text-[15px] text-muted tnum">10:00</span><span class="rounded-[10px] bg-sand px-3.5 py-2.5 leading-snug">Flat 4, Cedar Court. Viewing with Mr Okafor</span></li>
    <li class="grid grid-cols-[3.6rem_minmax(0,1fr)] items-start gap-3 py-2.5"><span class="pt-2 text-[15px] text-muted tnum">11:30</span><span class="rounded-[10px] border-[1.5px] border-gold bg-gold/15 px-3.5 py-2.5"><span class="block font-semibold leading-snug">Flat 2, 18 Halden Road. Viewing with Ms Ahmed</span><span class="mt-0.5 flex items-center gap-1.5 text-[14.5px] text-muted"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-phone-incoming"/></svg>Booked by voice agent, Fri 18:52</span></span></li>
    <li class="grid grid-cols-[3.6rem_minmax(0,1fr)] items-start gap-3 py-2.5"><span class="pt-2 text-[15px] text-muted tnum">13:00</span><span class="rounded-[10px] border border-dashed border-[var(--va-line-strong)] px-3.5 py-2.5 text-[16px] text-muted">Open slot</span></li>
    <li class="grid grid-cols-[3.6rem_minmax(0,1fr)] items-start gap-3 py-2.5"><span class="pt-2 text-[15px] text-muted tnum">14:30</span><span class="rounded-[10px] bg-sand px-3.5 py-2.5 leading-snug">27 Linden Avenue. Valuation with Mrs Clarke</span></li>
  </ul>
  <div class="border-t border-line bg-sand px-5 py-3.5 text-[15.5px] leading-snug"><span class="font-semibold">Caller details saved:</span> first-time buyer, mortgage agreed in principle, available weekends. <span class="tnum">020 7946 0321</span></div>
</div>
            <p class="mt-3 text-[14.5px] text-muted">Illustrative example. The business and people shown are fictional.</p>
          </div>
        </div>
      </div>
      <div role="tabpanel" id="panel-support" aria-labelledby="tab-support" tabindex="0" data-tab-panel hidden class="pt-6">
        <div class="rounded-[14px] border border-line bg-surface p-4 sm:p-6" data-flow-wrap>
          <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-1 pb-4">
            <p class="font-display text-[18px] font-semibold">How the call flows</p>
            <p class="text-[15px] text-muted"><span class="md:hidden">Tap</span><span class="max-md:hidden">Hover or select</span> a step to see what happens</p>
          </div>
          <svg viewBox="0 0 1000 280" class="flow hidden h-auto w-full md:block" data-flow role="group" aria-label="Customer support, step by step">
          <defs><marker id="flow-arrow-support" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="flow-arrow"/></marker></defs>
          <path class="flow-edge" data-flow-edge data-from="s1" data-to="s2" d="M204 140 H262" marker-end="url(#flow-arrow-support)"/><path class="flow-edge" data-flow-edge data-from="s2" data-to="s3" d="M464 140 C504 140 482 90 522 90" marker-end="url(#flow-arrow-support)"/><path class="flow-edge" data-flow-edge data-from="s3" data-to="s5" d="M724 90 C764 90 750 140 790 140" marker-end="url(#flow-arrow-support)"/><path class="flow-edge" data-flow-edge data-from="s2" data-to="s4" d="M464 140 C504 140 482 190 522 190" marker-end="url(#flow-arrow-support)"/><path class="flow-edge" data-flow-edge data-from="s4" data-to="s5" d="M724 190 C764 190 750 140 790 140" marker-end="url(#flow-arrow-support)"/>
          <g class="flow-node flow-start" data-flow-node="s1" data-detail="Monday, 8:14am. The service desk is busy with drop-offs and the call would usually ring out." tabindex="0" role="button" aria-label="Customer rings with a question">
          <rect class="flow-box" x="8" y="107" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="38" cy="140" r="17"/>
          <use class="flow-icon" href="#i-phone-incoming" x="28" y="130" width="20" height="20"/>
          <text class="flow-text" x="64" y="135.5">Customer rings</text><text class="flow-text" x="64" y="154.5">with a question</text>
        </g><g class="flow-node flow-agent" data-flow-node="s2" data-detail="It only uses information you have signed off: hours, prices, policies, directions." tabindex="0" role="button" aria-label="Agent checks approved answers">
          <rect class="flow-box" x="268" y="107" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="298" cy="140" r="17"/>
          <use class="flow-icon" href="#i-shield" x="288" y="130" width="20" height="20"/>
          <text class="flow-text" x="324" y="135.5">Agent checks</text><text class="flow-text" x="324" y="154.5">approved answers</text>
        </g><g class="flow-node flow-ok" data-flow-node="s3" data-detail="Courtesy car policy and opening hours answered straight away." tabindex="0" role="button" aria-label="Answered on the call">
          <rect class="flow-box" x="528" y="57" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="558" cy="90" r="17"/>
          <use class="flow-icon" href="#i-check" x="548" y="80" width="20" height="20"/>
          <text class="flow-text" x="584" y="85.5">Answered</text><text class="flow-text" x="584" y="104.5">on the call</text>
        </g><g class="flow-node flow-person" data-flow-node="s4" data-detail="Job status is not something the agent can see, so it transfers the call by your rules." tabindex="0" role="button" aria-label="Put through to a person">
          <rect class="flow-box" x="528" y="157" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="558" cy="190" r="17"/>
          <use class="flow-icon" href="#i-phone-forwarded" x="548" y="180" width="20" height="20"/>
          <text class="flow-text" x="584" y="185.5">Put through</text><text class="flow-text" x="584" y="204.5">to a person</text>
        </g><g class="flow-node flow-end" data-flow-node="s5" data-detail="The desk gets a written note of who rang, why, and what was said." tabindex="0" role="button" aria-label="Summary emailed to your team">
          <rect class="flow-box" x="796" y="107" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="826" cy="140" r="17"/>
          <use class="flow-icon" href="#i-mail" x="816" y="130" width="20" height="20"/>
          <text class="flow-text" x="852" y="135.5">Summary emailed</text><text class="flow-text" x="852" y="154.5">to your team</text>
        </g>
        </svg>
        <svg viewBox="0 0 360 462" class="flow mx-auto h-auto w-full max-w-[420px] md:hidden" data-flow role="group" aria-label="Customer support, step by step">
          <defs><marker id="flow-arrow-support-m" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="flow-arrow"/></marker></defs>
          <path class="flow-edge" data-flow-edge data-from="s1" data-to="s2" d="M180 70 V98" marker-end="url(#flow-arrow-support-m)"/><path class="flow-edge" data-flow-edge data-from="s2" data-to="s3" d="M40 135 H22 V231 H34" marker-end="url(#flow-arrow-support-m)"/><path class="flow-edge" data-flow-edge data-from="s3" data-to="s5" d="M320 231 H338 V423 H326" marker-end="url(#flow-arrow-support-m)"/><path class="flow-edge" data-flow-edge data-from="s2" data-to="s4" d="M40 135 H22 V327 H34" marker-end="url(#flow-arrow-support-m)"/><path class="flow-edge" data-flow-edge data-from="s4" data-to="s5" d="M320 327 H338 V423 H326" marker-end="url(#flow-arrow-support-m)"/>
          <g class="flow-node flow-start" data-flow-node="s1" data-detail="Monday, 8:14am. The service desk is busy with drop-offs and the call would usually ring out." tabindex="0" role="button" aria-label="Customer rings with a question">
          <rect class="flow-box" x="40" y="8" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="39" r="17"/>
          <use class="flow-icon" href="#i-phone-incoming" x="60" y="29" width="20" height="20"/>
          <text class="flow-text" x="96" y="34.5">Customer rings</text><text class="flow-text" x="96" y="53.5">with a question</text>
        </g><g class="flow-node flow-agent" data-flow-node="s2" data-detail="It only uses information you have signed off: hours, prices, policies, directions." tabindex="0" role="button" aria-label="Agent checks approved answers">
          <rect class="flow-box" x="40" y="104" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="135" r="17"/>
          <use class="flow-icon" href="#i-shield" x="60" y="125" width="20" height="20"/>
          <text class="flow-text" x="96" y="130.5">Agent checks</text><text class="flow-text" x="96" y="149.5">approved answers</text>
        </g><g class="flow-node flow-ok" data-flow-node="s3" data-detail="Courtesy car policy and opening hours answered straight away." tabindex="0" role="button" aria-label="Answered on the call">
          <rect class="flow-box" x="40" y="200" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="231" r="17"/>
          <use class="flow-icon" href="#i-check" x="60" y="221" width="20" height="20"/>
          <text class="flow-text" x="96" y="226.5">Answered</text><text class="flow-text" x="96" y="245.5">on the call</text>
        </g><g class="flow-node flow-person" data-flow-node="s4" data-detail="Job status is not something the agent can see, so it transfers the call by your rules." tabindex="0" role="button" aria-label="Put through to a person">
          <rect class="flow-box" x="40" y="296" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="327" r="17"/>
          <use class="flow-icon" href="#i-phone-forwarded" x="60" y="317" width="20" height="20"/>
          <text class="flow-text" x="96" y="322.5">Put through</text><text class="flow-text" x="96" y="341.5">to a person</text>
        </g><g class="flow-node flow-end" data-flow-node="s5" data-detail="The desk gets a written note of who rang, why, and what was said." tabindex="0" role="button" aria-label="Summary emailed to your team">
          <rect class="flow-box" x="40" y="392" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="423" r="17"/>
          <use class="flow-icon" href="#i-mail" x="60" y="413" width="20" height="20"/>
          <text class="flow-text" x="96" y="418.5">Summary emailed</text><text class="flow-text" x="96" y="437.5">to your team</text>
        </g>
        </svg>
          <p class="mt-4 flex min-h-[56px] items-start gap-3 rounded-[10px] bg-sand px-4 py-3 text-[16.5px] leading-snug" aria-live="polite" data-flow-caption data-default="Monday, 8:14am. The service desk is busy with drop-offs and the call would usually ring out."><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg><span data-flow-caption-text>Monday, 8:14am. The service desk is busy with drop-offs and the call would usually ring out.</span></p>
        </div>
        <div class="mt-10 grid gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <h3>Everyday questions answered, the rest handed over</h3>
            <p class="mt-4 text-muted">Opening hours, directions, prices and policies make up a large share of calls. The agent answers these from information you have approved and hands over anything it shouldn't handle.</p>
            <ul class="mt-6 space-y-2.5 text-[17px] leading-snug">
              <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Answers only from your approved information</span></li>
              <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Transfers to the right person by your rules</span></li>
              <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Writes a summary of every call for your team</span></li>
            </ul>
            <p class="mt-6 border-t border-line pt-4 text-[15.5px] text-muted">For clinics and law firms the agent handles practical questions only. It never gives clinical, medical or legal advice.</p>
          </div>
          <div>
            <div class="card overflow-hidden">
  <div class="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
    <div><p class="font-display text-[18px] font-semibold leading-tight">Call summary</p><p class="text-[15px] text-muted">Mersey Road Motors, Liverpool</p></div>
    <span class="chip tnum"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-clock"/></svg>Mon 08:14, 2 min 06</span>
  </div>
  <dl class="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-4 gap-y-3 px-5 py-5 text-[16.5px] leading-snug">
    <dt class="text-muted">Caller</dt><dd>Mr D. Hughes, <span class="tnum">0151 496 0162</span></dd>
    <dt class="text-muted">Reason</dt><dd>Wanted to know if his car would be ready today and whether a courtesy car was available.</dd>
    <dt class="text-muted">Answered</dt><dd>Service desk opening hours and the courtesy car policy, from the approved information.</dd>
    <dt class="text-muted">Passed on</dt><dd class="flex items-start gap-2"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-phone-forwarded"/></svg><span>Job status isn't something the agent can see, so it transferred the call to the service desk at 08:16.</span></dd>
    <dt class="text-muted">Outcome</dt><dd class="flex flex-wrap gap-2"><span class="chip">Question answered</span><span class="chip">Transferred to a person</span></dd>
  </dl>
  <div class="border-t border-line bg-sand px-5 py-3.5 text-[15.5px]">Summary emailed to the service desk at 08:17</div>
</div>
            <p class="mt-3 text-[14.5px] text-muted">Illustrative example. The business and people shown are fictional.</p>
          </div>
        </div>
      </div>
      <div role="tabpanel" id="panel-outbound" aria-labelledby="tab-outbound" tabindex="0" data-tab-panel hidden class="pt-6">
        <div class="rounded-[14px] border border-line bg-surface p-4 sm:p-6" data-flow-wrap>
          <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-1 pb-4">
            <p class="font-display text-[18px] font-semibold">How the call flows</p>
            <p class="text-[15px] text-muted"><span class="md:hidden">Tap</span><span class="max-md:hidden">Hover or select</span> a step to see what happens</p>
          </div>
          <svg viewBox="0 0 1000 280" class="flow hidden h-auto w-full md:block" data-flow role="group" aria-label="Outbound follow-up, step by step">
          <defs><marker id="flow-arrow-outbound" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="flow-arrow"/></marker></defs>
          <path class="flow-edge" data-flow-edge data-from="o1" data-to="o2" d="M204 140 H262" marker-end="url(#flow-arrow-outbound)"/><path class="flow-edge" data-flow-edge data-from="o2" data-to="o3" d="M464 140 C504 140 482 52 522 52" marker-end="url(#flow-arrow-outbound)"/><path class="flow-edge" data-flow-edge data-from="o3" data-to="o6" d="M724 52 C764 52 750 140 790 140" marker-end="url(#flow-arrow-outbound)"/><path class="flow-edge" data-flow-edge data-from="o2" data-to="o4" d="M464 140 C504 140 482 140 522 140" marker-end="url(#flow-arrow-outbound)"/><path class="flow-edge" data-flow-edge data-from="o4" data-to="o6" d="M724 140 C764 140 750 140 790 140" marker-end="url(#flow-arrow-outbound)"/><path class="flow-edge" data-flow-edge data-from="o2" data-to="o5" d="M464 140 C504 140 482 228 522 228" marker-end="url(#flow-arrow-outbound)"/><path class="flow-edge" data-flow-edge data-from="o5" data-to="o6" d="M724 228 C764 228 750 140 790 140" marker-end="url(#flow-arrow-outbound)"/>
          <g class="flow-node flow-start" data-flow-node="o1" data-detail="Only customers who agreed to service reminders. Lists are screened against TPS where required." tabindex="0" role="button" aria-label="Consented contact list">
          <rect class="flow-box" x="8" y="107" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="38" cy="140" r="17"/>
          <use class="flow-icon" href="#i-shield" x="28" y="130" width="20" height="20"/>
          <text class="flow-text" x="64" y="135.5">Consented</text><text class="flow-text" x="64" y="154.5">contact list</text>
        </g><g class="flow-node flow-agent" data-flow-node="o2" data-detail="It says who it is, that it is an AI assistant, and why it is calling." tabindex="0" role="button" aria-label="Agent makes the call">
          <rect class="flow-box" x="268" y="107" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="298" cy="140" r="17"/>
          <use class="flow-icon" href="#i-phone" x="288" y="130" width="20" height="20"/>
          <text class="flow-text" x="324" y="135.5">Agent makes</text><text class="flow-text" x="324" y="154.5">the call</text>
        </g><g class="flow-node flow-ok" data-flow-node="o3" data-detail="The customer picks a time and it goes into the job diary." tabindex="0" role="button" aria-label="Service booked">
          <rect class="flow-box" x="528" y="19" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="558" cy="52" r="17"/>
          <use class="flow-icon" href="#i-calendar" x="548" y="42" width="20" height="20"/>
          <text class="flow-text" x="584" y="47.5">Service</text><text class="flow-text" x="584" y="66.5">booked</text>
        </g><g class="flow-node flow-person" data-flow-node="o4" data-detail="If it is not a good time, the agent arranges a better one." tabindex="0" role="button" aria-label="Call back another day">
          <rect class="flow-box" x="528" y="107" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="558" cy="140" r="17"/>
          <use class="flow-icon" href="#i-clock" x="548" y="130" width="20" height="20"/>
          <text class="flow-text" x="584" y="135.5">Call back</text><text class="flow-text" x="584" y="154.5">another day</text>
        </g><g class="flow-node flow-miss" data-flow-node="o5" data-detail="Anyone who says no is taken off the list straight away and never called again." tabindex="0" role="button" aria-label="Opted out, removed">
          <rect class="flow-box" x="528" y="195" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="558" cy="228" r="17"/>
          <use class="flow-icon" href="#i-x" x="548" y="218" width="20" height="20"/>
          <text class="flow-text" x="584" y="223.5">Opted out,</text><text class="flow-text" x="584" y="242.5">removed</text>
        </g><g class="flow-node flow-end" data-flow-node="o6" data-detail="You see who booked, who asked for a call back and who opted out." tabindex="0" role="button" aria-label="Results in your report">
          <rect class="flow-box" x="796" y="107" width="196" height="66" rx="12"/>
          <circle class="flow-icon-bg" cx="826" cy="140" r="17"/>
          <use class="flow-icon" href="#i-mail" x="816" y="130" width="20" height="20"/>
          <text class="flow-text" x="852" y="135.5">Results in</text><text class="flow-text" x="852" y="154.5">your report</text>
        </g>
        </svg>
        <svg viewBox="0 0 360 558" class="flow mx-auto h-auto w-full max-w-[420px] md:hidden" data-flow role="group" aria-label="Outbound follow-up, step by step">
          <defs><marker id="flow-arrow-outbound-m" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="flow-arrow"/></marker></defs>
          <path class="flow-edge" data-flow-edge data-from="o1" data-to="o2" d="M180 70 V98" marker-end="url(#flow-arrow-outbound-m)"/><path class="flow-edge" data-flow-edge data-from="o2" data-to="o3" d="M40 135 H22 V231 H34" marker-end="url(#flow-arrow-outbound-m)"/><path class="flow-edge" data-flow-edge data-from="o3" data-to="o6" d="M320 231 H338 V519 H326" marker-end="url(#flow-arrow-outbound-m)"/><path class="flow-edge" data-flow-edge data-from="o2" data-to="o4" d="M40 135 H22 V327 H34" marker-end="url(#flow-arrow-outbound-m)"/><path class="flow-edge" data-flow-edge data-from="o4" data-to="o6" d="M320 327 H338 V519 H326" marker-end="url(#flow-arrow-outbound-m)"/><path class="flow-edge" data-flow-edge data-from="o2" data-to="o5" d="M40 135 H22 V423 H34" marker-end="url(#flow-arrow-outbound-m)"/><path class="flow-edge" data-flow-edge data-from="o5" data-to="o6" d="M320 423 H338 V519 H326" marker-end="url(#flow-arrow-outbound-m)"/>
          <g class="flow-node flow-start" data-flow-node="o1" data-detail="Only customers who agreed to service reminders. Lists are screened against TPS where required." tabindex="0" role="button" aria-label="Consented contact list">
          <rect class="flow-box" x="40" y="8" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="39" r="17"/>
          <use class="flow-icon" href="#i-shield" x="60" y="29" width="20" height="20"/>
          <text class="flow-text" x="96" y="34.5">Consented</text><text class="flow-text" x="96" y="53.5">contact list</text>
        </g><g class="flow-node flow-agent" data-flow-node="o2" data-detail="It says who it is, that it is an AI assistant, and why it is calling." tabindex="0" role="button" aria-label="Agent makes the call">
          <rect class="flow-box" x="40" y="104" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="135" r="17"/>
          <use class="flow-icon" href="#i-phone" x="60" y="125" width="20" height="20"/>
          <text class="flow-text" x="96" y="130.5">Agent makes</text><text class="flow-text" x="96" y="149.5">the call</text>
        </g><g class="flow-node flow-ok" data-flow-node="o3" data-detail="The customer picks a time and it goes into the job diary." tabindex="0" role="button" aria-label="Service booked">
          <rect class="flow-box" x="40" y="200" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="231" r="17"/>
          <use class="flow-icon" href="#i-calendar" x="60" y="221" width="20" height="20"/>
          <text class="flow-text" x="96" y="226.5">Service</text><text class="flow-text" x="96" y="245.5">booked</text>
        </g><g class="flow-node flow-person" data-flow-node="o4" data-detail="If it is not a good time, the agent arranges a better one." tabindex="0" role="button" aria-label="Call back another day">
          <rect class="flow-box" x="40" y="296" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="327" r="17"/>
          <use class="flow-icon" href="#i-clock" x="60" y="317" width="20" height="20"/>
          <text class="flow-text" x="96" y="322.5">Call back</text><text class="flow-text" x="96" y="341.5">another day</text>
        </g><g class="flow-node flow-miss" data-flow-node="o5" data-detail="Anyone who says no is taken off the list straight away and never called again." tabindex="0" role="button" aria-label="Opted out, removed">
          <rect class="flow-box" x="40" y="392" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="423" r="17"/>
          <use class="flow-icon" href="#i-x" x="60" y="413" width="20" height="20"/>
          <text class="flow-text" x="96" y="418.5">Opted out,</text><text class="flow-text" x="96" y="437.5">removed</text>
        </g><g class="flow-node flow-end" data-flow-node="o6" data-detail="You see who booked, who asked for a call back and who opted out." tabindex="0" role="button" aria-label="Results in your report">
          <rect class="flow-box" x="40" y="488" width="280" height="62" rx="12"/>
          <circle class="flow-icon-bg" cx="70" cy="519" r="17"/>
          <use class="flow-icon" href="#i-mail" x="60" y="509" width="20" height="20"/>
          <text class="flow-text" x="96" y="514.5">Results in</text><text class="flow-text" x="96" y="533.5">your report</text>
        </g>
        </svg>
          <p class="mt-4 flex min-h-[56px] items-start gap-3 rounded-[10px] bg-sand px-4 py-3 text-[16.5px] leading-snug" aria-live="polite" data-flow-caption data-default="Only customers who agreed to service reminders. Lists are screened against TPS where required."><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg><span data-flow-caption-text>Only customers who agreed to service reminders. Lists are screened against TPS where required.</span></p>
        </div>
        <div class="mt-10 grid gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <h3>Follow-up calls your team never has time for</h3>
            <p class="mt-4 text-muted">Service reminders, appointment confirmations and call-backs on enquiries. The agent makes the calls, books what it can and tells you who asked not to be called again.</p>
            <ul class="mt-6 space-y-2.5 text-[17px] leading-snug">
              <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Only calls contacts who have given appropriate consent</span></li>
              <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Run in line with UK PECR and TPS rules</span></li>
              <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Opt-outs are recorded and acted on straight away</span></li>
            </ul>
            <p class="mt-6 border-t border-line pt-4 text-[15.5px] text-muted">We don't run cold calling campaigns to bought or non-consented lists.</p>
          </div>
          <div>
            <div class="card overflow-hidden">
  <div class="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
    <div><p class="font-display text-[18px] font-semibold leading-tight">Annual service reminders</p><p class="text-[15px] text-muted">Aire Valley Heating, Leeds</p></div>
    <span class="chip"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-shield"/></svg>Consented contacts only</span>
  </div>
  <ul class="divide-y divide-line text-[16.5px]">
    <li class="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-5 py-3.5"><span><span class="block font-semibold leading-snug">Mrs P. Whitaker</span><span class="block text-[15px] text-muted">Boiler service due in November</span></span><span class="chip !text-ok">Booked, Tue 3 Nov 09:00</span></li>
    <li class="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-5 py-3.5"><span><span class="block font-semibold leading-snug">Mr S. Iqbal</span><span class="block text-[15px] text-muted">Boiler service due in November</span></span><span class="chip ">Asked for a call back on Friday</span></li>
    <li class="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-5 py-3.5"><span><span class="block font-semibold leading-snug">Ms J. Farrell</span><span class="block text-[15px] text-muted">Boiler service due in November</span></span><span class="chip ">No answer, reminder text sent</span></li>
    <li class="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-5 py-3.5"><span><span class="block font-semibold leading-snug">Mr T. Barnes</span><span class="block text-[15px] text-muted">Boiler service due in December</span></span><span class="chip !text-miss">Opted out, removed from list</span></li>
  </ul>
  <div class="border-t border-line bg-sand px-5 py-3.5 text-[15.5px] leading-snug">4 contacts called. Every one agreed to service reminders when they became a customer.</div>
</div>
            <p class="mt-3 text-[14.5px] text-muted">Illustrative example. The business and people shown are fictional.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="billing" data-component="Billing" class="relative overflow-hidden bg-surface">
  <div class="pointer-events-none absolute -left-40 top-24 h-[560px] w-[560px] rounded-full bg-gold/10 blur-3xl" aria-hidden="true"></div>
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 relative py-20 lg:py-28" data-bill data-bill-price="449" data-bill-included="800" data-bill-rate="0.3" data-bill-max="1200">
    <div class="grid items-center gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:grid-rows-[auto_auto]">

            <div class="relative order-2 mx-auto w-full max-w-[560px] lg:order-none lg:row-span-2 lg:min-h-[580px]" aria-label="Example invoice and usage report" role="group">
        <div class="bill-back relative rounded-[16px] border border-line bg-paper p-5 shadow-[0_20px_50px_-30px_rgb(16_24_40/0.45)] lg:absolute lg:left-0 lg:top-0 lg:w-[78%] lg:-rotate-[4deg]">
          <div class="flex items-center justify-between gap-3">
            <p class="font-display text-[17px] font-semibold">Usage report, October<span class="block font-body text-[13.5px] font-normal text-muted">Weekly call minutes</span></p>
          </div>
          <div class="mt-4 grid grid-cols-4 items-end gap-3 border-b border-[var(--va-line-strong)]" aria-hidden="true">
            <div class="flex flex-col items-center gap-1"><span class="text-[13px] font-semibold tnum">186</span><span class="w-full rounded-t-[6px] bg-ink/20" style="height:72px"></span></div><div class="flex flex-col items-center gap-1"><span class="text-[13px] font-semibold tnum">241</span><span class="w-full rounded-t-[6px] bg-gold" style="height:93px"></span></div><div class="flex flex-col items-center gap-1"><span class="text-[13px] font-semibold tnum">213</span><span class="w-full rounded-t-[6px] bg-ink/20" style="height:82px"></span></div><div class="flex flex-col items-center gap-1"><span class="text-[13px] font-semibold tnum">234</span><span class="w-full rounded-t-[6px] bg-ink/20" style="height:90px"></span></div>
          </div>
          <div class="mt-1.5 grid grid-cols-4 gap-3 text-center text-[13px] text-muted" aria-hidden="true"><span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span></div>
        </div>

        <div class="relative mt-5 rounded-[16px] border border-line bg-surface p-5 shadow-[0_30px_70px_-30px_rgb(16_24_40/0.55)] sm:p-6 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[80%] lg:rotate-[1.5deg]">
          <div class="flex flex-col-reverse items-start justify-between gap-2 sm:flex-row sm:gap-4">
            <div>
              <p class="font-display text-[19px] font-semibold leading-tight">Invoice OMH-VA-0042</p>
              <p class="mt-1 text-[14.5px] text-muted">Severn Plumbing Ltd, Bristol</p>
            </div>
            <span class="flag">[PLACEHOLDER] figures</span>
          </div>

          <div class="mt-5">
            <div class="flex items-baseline justify-between gap-3 text-[14.5px]">
              <span class="font-semibold"><span class="tnum" data-bill-used>870</span> minutes used</span>
              <span class="text-muted"><span class="tnum">800</span> included</span>
            </div>
            <div class="relative mt-2 h-3 rounded-full bg-ink/10" aria-hidden="true">
              <span class="absolute inset-y-0 left-0 rounded-full bg-ink/45" data-bill-bar-in></span>
              <span class="absolute inset-y-0 rounded-r-full bg-gold" data-bill-bar-over></span>
              <span class="absolute -top-1 bottom-[-4px] w-[2px] rounded bg-ink" style="left:66.66666666666666%"></span>
            </div>
          </div>

          <table class="mt-5 w-full text-[15.5px] leading-snug">
            <caption class="sr-only">Example monthly invoice in pounds</caption>
            <tbody class="tnum">
              <tr class="border-b border-line"><th scope="row" class="py-2.5 text-left font-normal">Growth plan<span class="block text-[13.5px] text-muted">Includes 800 minutes</span></th><td class="py-2.5 text-right align-top">£449.00</td></tr>
              <tr class="border-b border-line"><th scope="row" class="py-2.5 text-left font-normal">Extra minutes<span class="block text-[13.5px] text-muted"><span data-bill-extra>74</span> at 30p</span></th><td class="py-2.5 text-right align-top" data-bill-extra-cost>£22.20</td></tr>
              <tr class="border-b border-[var(--va-line-strong)]"><th scope="row" class="py-2.5 text-left font-normal text-muted">VAT at 20%</th><td class="py-2.5 text-right" data-bill-vat>£94.24</td></tr>
              <tr class="font-display text-[19px] font-semibold"><th scope="row" class="pt-3 text-left">Total due</th><td class="pt-3 text-right" data-bill-total>£565.44</td></tr>
            </tbody>
          </table>
        </div>

        <span class="absolute -top-4 right-2 hidden rotate-[3deg] items-center gap-2 rounded-full bg-gold px-4 py-2 text-[14.5px] font-semibold text-navy shadow-[0_14px_30px_-12px_rgb(16_24_40/0.5)] lg:inline-flex" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-check"/></svg>No hidden fees</span>
      </div>

            <div class="order-1 self-end lg:order-none">
        <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Billing</p>
        <h2>One monthly invoice <span class="hl">you can read</span></h2>
        <p class="mt-5 text-muted">You pay one price each month for your plan. If a busy month uses more call minutes than your plan includes, the extra minutes are charged at the rate you agreed before you started. Nothing else gets added.</p>

        <ul class="mt-7 space-y-4">
          <li class="flex gap-4"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-calendar"/></svg></span><span><span class="block font-display text-[18px] font-semibold leading-snug">One fixed monthly price</span><span class="block text-[16.5px] leading-snug text-muted">Your plan covers the agent, a set number of call minutes and the monthly review.</span></span></li>
          <li class="flex gap-4"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-clock"/></svg></span><span><span class="block font-display text-[18px] font-semibold leading-snug">Extra minutes at a rate agreed upfront</span><span class="block text-[16.5px] leading-snug text-muted">A busy month costs a little more, at the per-minute rate in your contract. We warn you before you reach your limit.</span></span></li>
          <li class="flex gap-4"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-gold/20 text-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="block font-display text-[18px] font-semibold leading-snug">A usage report with every invoice</span><span class="block text-[16.5px] leading-snug text-muted">Minutes used, calls answered and bookings made, so you can see what you paid for.</span></span></li>
        </ul>
      </div>

      <div class="order-3 self-start lg:order-none">
        <div class="rounded-[14px] border border-line bg-sand p-5">
          <div class="flex items-baseline justify-between gap-4">
            <label for="bill-minutes" class="font-display text-[17px] font-semibold">Try a busier or quieter month</label>
            <output for="bill-minutes" class="shrink-0 whitespace-nowrap font-display text-[18px] font-semibold tnum" data-bill-output>870 min</output>
          </div>
          <input id="bill-minutes" type="range" min="200" max="1200" step="10" value="870" class="mt-1" data-bill-input data-track="billing_minutes_slider" aria-describedby="bill-summary">
          <p id="bill-summary" class="text-[15.5px] leading-snug" aria-live="polite" data-bill-summary></p>
        </div>

        <div class="mt-7 flex flex-col gap-3 sm:flex-row">
          <a href="#pricing" class="btn btn-primary" data-track="billing_see_pricing">See plans and pricing</a>
          <a href="/contact?service=ai-voice-agents" class="btn btn-secondary" data-track="billing_book_demo">Book a Voice Agent Demo</a>
        </div>
      </div>
    </div>

        <div class="mt-20 rounded-[16px] border border-line bg-paper p-6 sm:p-8">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h3 class="flex items-center gap-3 !text-[24px]"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-shield"/></svg>Data and compliance</h3>
        <p class="text-[15px] text-muted">Handled in line with UK GDPR. <span class="flag">[CONFIRM] storage region and sub-processors</span></p>
      </div>
      <ul class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li class="border-t-2 border-gold pt-4"><span class="flex items-center gap-2 font-display text-[17px] font-semibold"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-shield"/></svg>AI disclosed on every call</span><span class="mt-2 block text-[15.5px] leading-snug text-muted">Callers are told they are speaking to an AI assistant and that the call may be recorded. </span></li>
        <li class="border-t-2 border-gold pt-4"><span class="flex items-center gap-2 font-display text-[17px] font-semibold"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg>You stay in control of data</span><span class="mt-2 block text-[15.5px] leading-snug text-muted">You are the data controller. OMH acts as your processor under a written agreement. <span class="flag">[CONFIRM] DPA</span></span></li>
        <li class="border-t-2 border-gold pt-4"><span class="flex items-center gap-2 font-display text-[17px] font-semibold"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-clock"/></svg>Recordings kept as you choose</span><span class="mt-2 block text-[15.5px] leading-snug text-muted">Recordings and transcripts are deleted on the schedule you set. <span class="flag">[CONFIRM] retention options</span></span></li>
        <li class="border-t-2 border-gold pt-4"><span class="flex items-center gap-2 font-display text-[17px] font-semibold"><svg class="icon text-hl" aria-hidden="true" focusable="false"><use href="#i-phone"/></svg>Consent-only outbound</span><span class="mt-2 block text-[15.5px] leading-snug text-muted">Outbound calls go only to consenting contacts, in line with PECR and TPS rules. </span></li>
      </ul>
    </div>
  </div>
</section>

<section id="branding" data-component="Branding" class="on-band relative overflow-hidden bg-band text-band-ink">
  <div class="pointer-events-none absolute right-[-10%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-gold/15 blur-3xl" aria-hidden="true"></div>
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 relative grid items-center gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:py-28" data-brand
    data-brand-biz='[{"id":"law","label":"Law firm","name":"Hartwell Reeve Solicitors","city":"Birmingham","num":"0121 496 0147","agent":"Grace","kind":"firm&#39;s","initials":"HR","voice":"British English, calm and measured","never":"Gives legal advice","transfer":"Existing clients go to their named solicitor"},{"id":"dental","label":"Dental clinic","name":"Albion Square Dental","city":"Manchester","num":"0161 496 0123","agent":"Amy","kind":"practice&#39;s","initials":"AS","voice":"British English, warm and friendly","never":"Gives clinical advice","transfer":"Dental emergencies go to the on-call line"},{"id":"plumber","label":"Plumber","name":"Severn Plumbing","city":"Bristol","num":"0117 496 0135","agent":"Sam","kind":"team&#39;s","initials":"SP","voice":"British English, relaxed","never":"Quotes a price it has not been given","transfer":"Burst pipes go straight to the plumber on call"}]'>
    <div>
      <p class="eyebrow eyebrow-band"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Branding</p>
      <h2>It sounds like <span class="hl">your business</span>, not ours</h2>
      <p class="mt-5 text-band-muted">Callers hear your name, your greeting and your way of doing things. OMH is never mentioned on a call.</p>

      <ul class="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2">
        <li class="flex gap-3.5"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-gold/20 text-band-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-phone"/></svg></span><span><span class="block font-display text-[17.5px] font-semibold leading-snug">Voice and accent</span><span class="block text-[15.5px] leading-snug text-band-muted">A voice that suits your business and your callers. <span class="flag">[CONFIRM] voices and accents</span></span></span></li>
        <li class="flex gap-3.5"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-gold/20 text-band-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-message"/></svg></span><span><span class="block font-display text-[17.5px] font-semibold leading-snug">Name and greeting</span><span class="block text-[15.5px] leading-snug text-band-muted">Your agent answers with your business name and your greeting. </span></span></li>
        <li class="flex gap-3.5"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-gold/20 text-band-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-shield"/></svg></span><span><span class="block font-display text-[17.5px] font-semibold leading-snug">Tone and policies</span><span class="block text-[15.5px] leading-snug text-band-muted">Formal or relaxed, and it follows your rules on what it must never say. </span></span></li>
        <li class="flex gap-3.5"><span class="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-gold/20 text-band-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-phone-forwarded"/></svg></span><span><span class="block font-display text-[17.5px] font-semibold leading-snug">Transfer rules</span><span class="block text-[15.5px] leading-snug text-band-muted">You decide which calls go to a person, who to, and when. </span></span></li>
      </ul>

      <div class="mt-9 rounded-[14px] border border-band-line bg-band-surface p-5 sm:p-6">
        <p class="font-display text-[18px] font-semibold">Try it: build a greeting</p>
        <p class="mt-1 text-[15px] text-band-muted">Pick a business and a tone. The phone shows what callers would hear.</p>
        <p class="mt-4 text-[14.5px] font-semibold text-band-muted" id="brand-biz-label">Business</p>
        <div class="mt-2">
          <div role="radiogroup" aria-label="Business" class="flex flex-wrap gap-2" data-brand-group="biz">
            <button type="button" role="radio" aria-checked="true" tabindex="0" class="min-h-[44px] rounded-full border border-[rgb(247_246_242/.35)] px-4 text-[15.5px] font-semibold text-band-ink aria-checked:border-gold aria-checked:bg-gold aria-checked:text-navy" data-brand-opt="law" data-track="branding_biz" data-track-name="Law firm">Law firm</button>
            <button type="button" role="radio" aria-checked="false" tabindex="-1" class="min-h-[44px] rounded-full border border-[rgb(247_246_242/.35)] px-4 text-[15.5px] font-semibold text-band-ink aria-checked:border-gold aria-checked:bg-gold aria-checked:text-navy" data-brand-opt="dental" data-track="branding_biz" data-track-name="Dental clinic">Dental clinic</button>
            <button type="button" role="radio" aria-checked="false" tabindex="-1" class="min-h-[44px] rounded-full border border-[rgb(247_246_242/.35)] px-4 text-[15.5px] font-semibold text-band-ink aria-checked:border-gold aria-checked:bg-gold aria-checked:text-navy" data-brand-opt="plumber" data-track="branding_biz" data-track-name="Plumber">Plumber</button>
          </div>
        </div>
        <p class="mt-4 text-[14.5px] font-semibold text-band-muted">Tone</p>
        <div class="mt-2">
          <div role="radiogroup" aria-label="Tone" class="flex flex-wrap gap-2" data-brand-group="tone">
            <button type="button" role="radio" aria-checked="true" tabindex="0" class="min-h-[44px] rounded-full border border-[rgb(247_246_242/.35)] px-4 text-[15.5px] font-semibold text-band-ink aria-checked:border-gold aria-checked:bg-gold aria-checked:text-navy" data-brand-opt="warm" data-track="branding_tone" data-track-name="Warm">Warm</button>
            <button type="button" role="radio" aria-checked="false" tabindex="-1" class="min-h-[44px] rounded-full border border-[rgb(247_246_242/.35)] px-4 text-[15.5px] font-semibold text-band-ink aria-checked:border-gold aria-checked:bg-gold aria-checked:text-navy" data-brand-opt="brisk" data-track="branding_tone" data-track-name="Brisk">Brisk</button>
            <button type="button" role="radio" aria-checked="false" tabindex="-1" class="min-h-[44px] rounded-full border border-[rgb(247_246_242/.35)] px-4 text-[15.5px] font-semibold text-band-ink aria-checked:border-gold aria-checked:bg-gold aria-checked:text-navy" data-brand-opt="formal" data-track="branding_tone" data-track-name="Formal">Formal</button>
          </div>
        </div>
      </div>
    </div>

        <div class="relative mx-auto w-full max-w-[380px] [perspective:1400px]">
      <div class="brand-phone relative rounded-[44px] border border-[rgb(247_246_242/.18)] bg-[#0b0f19] p-3 shadow-[0_50px_100px_-40px_rgb(0_0_0/0.8)] lg:[transform:rotateY(-10deg)_rotateX(4deg)]">
        <div class="relative overflow-hidden rounded-[34px] bg-[#f7f6f2] px-5 pb-6 pt-4 text-[#101828]">
          <div class="flex items-center justify-between text-[13px] font-semibold" aria-hidden="true"><span class="tnum">9:41</span><span class="h-[22px] w-[90px] rounded-full bg-[#0b0f19]"></span><span class="flex gap-1"><i class="block h-2.5 w-1 rounded-sm bg-[#101828]"></i><i class="block h-2.5 w-1 rounded-sm bg-[#101828]"></i><i class="block h-2.5 w-1 rounded-sm bg-[#101828]/40"></i></span></div>

          <div class="mt-6 text-center">
            <p class="text-[13.5px] font-semibold text-[#1c6446]"><span class="mr-1.5 inline-block h-2 w-2 rounded-full bg-[#1c6446] align-middle"></span>Call answered <span class="tnum" data-brand-timer>00:03</span></p>
            <span class="mx-auto mt-4 grid h-[72px] w-[72px] place-items-center rounded-full bg-[#d79a37] font-display text-[24px] font-semibold text-[#101828]" aria-hidden="true" data-brand-initials>HR</span>
            <p class="mt-3 font-display text-[21px] font-semibold leading-tight" data-brand-name>Hartwell Reeve Solicitors</p>
            <p class="mt-0.5 text-[14.5px] text-[rgb(16_24_40/0.68)]"><span class="tnum" data-brand-num>0121 496 0147</span>, <span data-brand-city>Birmingham</span></p>
          </div>

          <div class="mt-5 rounded-[18px] bg-white p-4 shadow-[0_10px_30px_-20px_rgb(16_24_40/0.6)]">
            <div class="flex items-center gap-3">
              <span class="text-[13px] font-semibold text-[#8f5a0e]"><span data-brand-agent>Grace</span>, AI assistant</span>
              <svg viewBox="0 0 168 40" class="brand-wave h-7 flex-1" aria-hidden="true" data-brand-wave>
                <rect x="1" y="13" width="3" height="14" rx="1.5" style="--d:0s"/><rect x="7" y="3" width="3" height="34" rx="1.5" style="--d:0.09s"/><rect x="13" y="15.5" width="3" height="9" rx="1.5" style="--d:0.18s"/><rect x="19" y="6" width="3" height="28" rx="1.5" style="--d:0.27s"/><rect x="25" y="14.5" width="3" height="11" rx="1.5" style="--d:0.36s"/><rect x="31" y="12" width="3" height="16" rx="1.5" style="--d:0.44999999999999996s"/><rect x="37" y="5.5" width="3" height="29" rx="1.5" style="--d:0.54s"/><rect x="43" y="8" width="3" height="24" rx="1.5" style="--d:0s"/><rect x="49" y="7" width="3" height="26" rx="1.5" style="--d:0.09s"/><rect x="55" y="10" width="3" height="20" rx="1.5" style="--d:0.18s"/><rect x="61" y="10.5" width="3" height="19" rx="1.5" style="--d:0.27s"/><rect x="67" y="15" width="3" height="10" rx="1.5" style="--d:0.36s"/><rect x="73" y="3.5" width="3" height="33" rx="1.5" style="--d:0.44999999999999996s"/><rect x="79" y="16" width="3" height="8" rx="1.5" style="--d:0.54s"/><rect x="85" y="4" width="3" height="32" rx="1.5" style="--d:0s"/><rect x="91" y="16.5" width="3" height="7" rx="1.5" style="--d:0.09s"/><rect x="97" y="11.5" width="3" height="17" rx="1.5" style="--d:0.18s"/><rect x="103" y="7.5" width="3" height="25" rx="1.5" style="--d:0.27s"/><rect x="109" y="8" width="3" height="24" rx="1.5" style="--d:0.36s"/><rect x="115" y="7" width="3" height="26" rx="1.5" style="--d:0.44999999999999996s"/><rect x="121" y="8" width="3" height="24" rx="1.5" style="--d:0.54s"/><rect x="127" y="11" width="3" height="18" rx="1.5" style="--d:0s"/><rect x="133" y="17" width="3" height="6" rx="1.5" style="--d:0.09s"/><rect x="139" y="5" width="3" height="30" rx="1.5" style="--d:0.18s"/><rect x="145" y="16.5" width="3" height="7" rx="1.5" style="--d:0.27s"/><rect x="151" y="3" width="3" height="34" rx="1.5" style="--d:0.36s"/><rect x="157" y="15.5" width="3" height="9" rx="1.5" style="--d:0.44999999999999996s"/><rect x="163" y="10" width="3" height="20" rx="1.5" style="--d:0.54s"/>
              </svg>
            </div>
            <p class="mt-3 min-h-[96px] rounded-[4px_14px_14px_14px] bg-[#efece2] px-3.5 py-3 text-[15.5px] leading-[1.45]" aria-hidden="true">&ldquo;<span data-brand-greeting>Good morning, Hartwell Reeve Solicitors. I'm Grace, the firm's AI assistant. How can I help you today?</span><span class="brand-caret" data-brand-caret></span>&rdquo;</p>
            <p class="sr-only" aria-live="polite" data-brand-live></p>
          </div>

          <dl class="mt-4 space-y-2 text-[13.5px] leading-snug">
            <div class="flex gap-2 rounded-[10px] bg-white/70 px-3 py-2"><dt class="font-semibold">Voice:</dt><dd data-brand-voice>British English, calm and measured</dd></div>
            <div class="flex gap-2 rounded-[10px] bg-white/70 px-3 py-2"><dt class="font-semibold">Never:</dt><dd data-brand-never>Gives legal advice</dd></div>
            <div class="flex gap-2 rounded-[10px] bg-white/70 px-3 py-2"><dt class="font-semibold">Transfers:</dt><dd data-brand-transfer>Existing clients go to their named solicitor</dd></div>
          </dl>

          <div class="mt-5 flex items-center justify-center gap-6">
            <button type="button" class="grid h-12 w-12 place-items-center rounded-full bg-[#101828] text-[#f7f6f2] hover:bg-[#1a2437]" data-brand-replay data-track="branding_replay" aria-label="Replay the greeting"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-replay"/></svg></button>
            <span class="grid h-12 w-12 place-items-center rounded-full bg-[#a3352b] text-white" aria-hidden="true"><svg class="icon rotate-[135deg]" aria-hidden="true" focusable="false"><use href="#i-phone"/></svg></span>
          </div>
        </div>
      </div>
      <p class="mt-5 text-center text-[14px] text-band-muted">Illustrative example. The businesses shown are fictional.</p>
    </div>
  </div>
</section>

<section id="right-fit" data-component="RightFit">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28">
    <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      <div>
        <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Is it the right fit?</p>
        <h2>A voice agent <span class="hl">isn't for everyone</span></h2>
      </div>
      <p class="text-muted lg:pt-10">We would rather tell you now than three months in. Here is where it earns its keep and where it doesn't. Or answer five quick questions and see for yourself.</p>
    </div>

    <div class="mt-12 grid gap-5 md:grid-cols-2">
      <div class="rounded-[16px] border border-[color-mix(in_srgb,var(--va-ok)_35%,transparent)] bg-[color-mix(in_srgb,var(--va-ok)_7%,var(--va-surface))] p-6 sm:p-8">
        <h3 class="flex items-center gap-3 !text-[24px]"><span class="grid h-10 w-10 place-items-center rounded-full bg-ok text-surface"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span>A good fit if</h3>
        <ul class="mt-6 space-y-4">
          <li class="flex gap-3.5"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-surface text-ok" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-phone-missed"/></svg></span><span class="text-[16.5px] leading-snug"><strong class="block font-display text-[17.5px] font-semibold">You miss calls</strong><span class="text-muted">while your team is with customers, on site or closed for the day.</span></span></li>
          <li class="flex gap-3.5"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-surface text-ok" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-message"/></svg></span><span class="text-[16.5px] leading-snug"><strong class="block font-display text-[17.5px] font-semibold">Calls repeat themselves</strong><span class="text-muted">Bookings, opening hours, prices and availability make up most of them.</span></span></li>
          <li class="flex gap-3.5"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-surface text-ok" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-up-right"/></svg></span><span class="text-[16.5px] leading-snug"><strong class="block font-display text-[17.5px] font-semibold">Each customer is worth real money</strong><span class="text-muted">so one missed call can cost more than the agent.</span></span></li>
          <li class="flex gap-3.5"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-surface text-ok" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-calendar"/></svg></span><span class="text-[16.5px] leading-snug"><strong class="block font-display text-[17.5px] font-semibold">You have a diary or system</strong><span class="text-muted">that bookings can go into.</span></span></li>
          <li class="flex gap-3.5"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-surface text-ok" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-shield"/></svg></span><span class="text-[16.5px] leading-snug"><strong class="block font-display text-[17.5px] font-semibold">You are happy to be open about AI</strong><span class="text-muted">Callers are told they are speaking to an AI assistant.</span></span></li>
        </ul>
      </div>
      <div class="rounded-[16px] border border-line bg-surface p-6 sm:p-8">
        <h3 class="flex items-center gap-3 !text-[24px]"><span class="grid h-10 w-10 place-items-center rounded-full border-[1.5px] border-[var(--va-line-strong)] text-muted"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span>Not the right fit if</h3>
        <ul class="mt-6 space-y-4">
          <li class="flex gap-3.5"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-sand text-muted" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-phone"/></svg></span><span class="text-[16.5px] leading-snug"><strong class="block font-display text-[17.5px] font-semibold">Your phone is quiet</strong><span class="text-muted">A handful of calls a week, and you already answer them all.</span></span></li>
          <li class="flex gap-3.5"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-sand text-muted" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-scale"/></svg></span><span class="text-[16.5px] leading-snug"><strong class="block font-display text-[17.5px] font-semibold">Every call needs expert judgement</strong><span class="text-muted">from the very first sentence.</span></span></li>
          <li class="flex gap-3.5"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-sand text-muted" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span class="text-[16.5px] leading-snug"><strong class="block font-display text-[17.5px] font-semibold">You want callers to think it is a person</strong><span class="text-muted">We won't build that.</span></span></li>
          <li class="flex gap-3.5"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-sand text-muted" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-phone-forwarded"/></svg></span><span class="text-[16.5px] leading-snug"><strong class="block font-display text-[17.5px] font-semibold">You want to cold call</strong><span class="text-muted">lists of people who haven't agreed to hear from you.</span></span></li>
          <li class="flex gap-3.5"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-sand text-muted" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-clock"/></svg></span><span class="text-[16.5px] leading-snug"><strong class="block font-display text-[17.5px] font-semibold">You want to set it and forget it</strong><span class="text-muted">An agent needs a regular review to stay good.</span></span></li>
        </ul>
      </div>
    </div>

        <div class="mt-6 grid overflow-hidden rounded-[16px] border border-line bg-surface lg:grid-cols-[minmax(0,1.25fr)_minmax(0,.75fr)]" data-fit>
      <form class="p-6 sm:p-8" data-fit-form>
        <h3 class="!text-[24px]">Quick fit check</h3>
        <p class="mt-1 text-[16px] text-muted">Five questions, about 20 seconds.</p>
        <ol class="mt-6 divide-y divide-line border-y border-line">
          <li>
            <fieldset class="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
              <legend class="float-left flex gap-3 text-[16.5px] leading-snug sm:max-w-[30rem]"><span class="num text-[15px] leading-[1.6]">01</span><span>Do you miss calls when your team is busy, on site or closed?</span></legend>
              <span class="flex shrink-0 gap-2 pl-8 sm:pl-0">
                <label class="relative">
                  <input type="radio" name="fit-q0" value="yes" class="peer sr-only" data-fit-q="0" data-track="fit_check_answer" data-track-name="Q1 yes">
                  <span class="flex min-h-[44px] min-w-[68px] items-center justify-center gap-1.5 rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">Yes</span>
                </label><label class="relative">
                  <input type="radio" name="fit-q0" value="no" class="peer sr-only" data-fit-q="0" data-track="fit_check_answer" data-track-name="Q1 no">
                  <span class="flex min-h-[44px] min-w-[68px] items-center justify-center gap-1.5 rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">No</span>
                </label>
              </span>
            </fieldset>
          </li>
          <li>
            <fieldset class="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
              <legend class="float-left flex gap-3 text-[16.5px] leading-snug sm:max-w-[30rem]"><span class="num text-[15px] leading-[1.6]">02</span><span>Are most of your calls the same few requests?</span></legend>
              <span class="flex shrink-0 gap-2 pl-8 sm:pl-0">
                <label class="relative">
                  <input type="radio" name="fit-q1" value="yes" class="peer sr-only" data-fit-q="1" data-track="fit_check_answer" data-track-name="Q2 yes">
                  <span class="flex min-h-[44px] min-w-[68px] items-center justify-center gap-1.5 rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">Yes</span>
                </label><label class="relative">
                  <input type="radio" name="fit-q1" value="no" class="peer sr-only" data-fit-q="1" data-track="fit_check_answer" data-track-name="Q2 no">
                  <span class="flex min-h-[44px] min-w-[68px] items-center justify-center gap-1.5 rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">No</span>
                </label>
              </span>
            </fieldset>
          </li>
          <li>
            <fieldset class="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
              <legend class="float-left flex gap-3 text-[16.5px] leading-snug sm:max-w-[30rem]"><span class="num text-[15px] leading-[1.6]">03</span><span>Could one missed call cost you a customer worth real money?</span></legend>
              <span class="flex shrink-0 gap-2 pl-8 sm:pl-0">
                <label class="relative">
                  <input type="radio" name="fit-q2" value="yes" class="peer sr-only" data-fit-q="2" data-track="fit_check_answer" data-track-name="Q3 yes">
                  <span class="flex min-h-[44px] min-w-[68px] items-center justify-center gap-1.5 rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">Yes</span>
                </label><label class="relative">
                  <input type="radio" name="fit-q2" value="no" class="peer sr-only" data-fit-q="2" data-track="fit_check_answer" data-track-name="Q3 no">
                  <span class="flex min-h-[44px] min-w-[68px] items-center justify-center gap-1.5 rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">No</span>
                </label>
              </span>
            </fieldset>
          </li>
          <li>
            <fieldset class="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
              <legend class="float-left flex gap-3 text-[16.5px] leading-snug sm:max-w-[30rem]"><span class="num text-[15px] leading-[1.6]">04</span><span>Do you have a diary or system bookings can go into?</span></legend>
              <span class="flex shrink-0 gap-2 pl-8 sm:pl-0">
                <label class="relative">
                  <input type="radio" name="fit-q3" value="yes" class="peer sr-only" data-fit-q="3" data-track="fit_check_answer" data-track-name="Q4 yes">
                  <span class="flex min-h-[44px] min-w-[68px] items-center justify-center gap-1.5 rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">Yes</span>
                </label><label class="relative">
                  <input type="radio" name="fit-q3" value="no" class="peer sr-only" data-fit-q="3" data-track="fit_check_answer" data-track-name="Q4 no">
                  <span class="flex min-h-[44px] min-w-[68px] items-center justify-center gap-1.5 rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">No</span>
                </label>
              </span>
            </fieldset>
          </li>
          <li>
            <fieldset class="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
              <legend class="float-left flex gap-3 text-[16.5px] leading-snug sm:max-w-[30rem]"><span class="num text-[15px] leading-[1.6]">05</span><span>Are you happy for callers to be told they are speaking to an AI?</span></legend>
              <span class="flex shrink-0 gap-2 pl-8 sm:pl-0">
                <label class="relative">
                  <input type="radio" name="fit-q4" value="yes" class="peer sr-only" data-fit-q="4" data-track="fit_check_answer" data-track-name="Q5 yes">
                  <span class="flex min-h-[44px] min-w-[68px] items-center justify-center gap-1.5 rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">Yes</span>
                </label><label class="relative">
                  <input type="radio" name="fit-q4" value="no" class="peer sr-only" data-fit-q="4" data-track="fit_check_answer" data-track-name="Q5 no">
                  <span class="flex min-h-[44px] min-w-[68px] items-center justify-center gap-1.5 rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">No</span>
                </label>
              </span>
            </fieldset>
          </li>
        </ol>
        <button type="reset" class="mt-4 inline-flex min-h-[44px] items-center gap-2 text-[15.5px] font-semibold text-muted hover:text-ink" data-track="fit_check_reset"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-replay"/></svg>Start again</button>
      </form>

      <div class="flex flex-col items-center justify-center bg-sand p-6 text-center sm:p-8" aria-live="polite" data-fit-result data-state="empty">
        <svg viewBox="0 0 200 118" class="w-full max-w-[260px]" role="img" aria-label="Fit gauge" data-fit-gauge>
          <path d="M20 100 A80 80 0 0 1 180 100" class="fit-track"/>
          <path d="M20 100 A80 80 0 0 1 180 100" class="fit-fill" style="stroke-dasharray:251.3;stroke-dashoffset:251.3" data-fit-arc data-arc="251.3"/>
          <g class="fit-needle" style="transform:rotate(-90deg)" data-fit-needle><line x1="100" y1="100" x2="100" y2="34"/><circle cx="100" cy="100" r="7"/></g>
          <text x="20" y="116" class="fit-tick" text-anchor="middle">0</text>
          <text x="180" y="116" class="fit-tick" text-anchor="middle">5</text>
        </svg>
        <p class="mt-3 font-display text-[26px] font-semibold leading-tight" data-fit-title>Answer to see your fit</p>
        <p class="mt-2 max-w-[22rem] text-[16px] leading-snug text-muted" data-fit-text>Your result appears here as you go. Nothing is sent anywhere.</p>
        <p class="mt-1 text-[14.5px] text-muted tnum" data-fit-count>0 of 5 answered</p>
        <a href="/contact?service=ai-voice-agents" class="btn btn-primary mt-5" data-fit-cta data-track="fit_check_book_demo" hidden>Book a Voice Agent Demo</a>
      </div>
    </div>
  </div>
</section>

<section id="feedback" data-component="ClientFeedback" class="bg-surface">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28">
    <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      <div>
        <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Client feedback</p>
        <h2>Proof goes here <span class="hl">when it's real</span></h2>
      </div>
      <p class="text-muted lg:pt-10">Voice agents are a new service for us, so we haven't filled this wall with invented praise. Each video below is reserved for a client and stays marked as pending until we have checked their results.</p>
    </div>

    <dl class="mt-12 grid border-y border-[var(--va-line-strong)] sm:grid-cols-3">
      <div class="py-5 sm:pr-6"><dd class="font-display text-[30px] font-semibold leading-none tnum">12,480</dd><dt class="mt-1.5 text-[16px] text-muted">calls answered <span class="flag">[PLACEHOLDER]</span></dt></div>
      <div class="border-t border-line py-5 sm:border-l sm:border-t-0 sm:px-6"><dd class="font-display text-[30px] font-semibold leading-none tnum">3,215</dd><dt class="mt-1.5 text-[16px] text-muted">bookings made <span class="flag">[PLACEHOLDER]</span></dt></div>
      <div class="border-t border-line py-5 sm:border-l sm:border-t-0 sm:pl-6"><dd class="font-display text-[30px] font-semibold leading-none tnum">41%</dd><dt class="mt-1.5 text-[16px] text-muted">answered out of hours <span class="flag">[PLACEHOLDER]</span></dt></div>
    </dl>

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
      <figure data-reveal class="flex flex-col rounded-[16px] border border-line bg-paper p-3 transition-colors hover:border-[var(--va-line-strong)]">
        <div class="relative aspect-video overflow-hidden rounded-[11px] bg-[var(--va-tint-1)]">
          <button type="button" class="group absolute inset-0 block w-full text-left" aria-haspopup="dialog" data-video-modal-open data-video-id="[PLACEHOLDER]" data-video-title="Evening calls at a Manchester dental practice" data-video-meta="[Client name], Practice manager. Dental clinic, Manchester" data-track="testimonial_video_open" data-track-name="Dental clinic, Manchester" aria-label="Play video testimonial: Evening calls at a Manchester dental practice (opens in a pop-up)">
            <span class="pointer-events-none absolute -right-6 -top-4 text-ink/10" aria-hidden="true"><svg class="icon !h-[150px] !w-[150px]" aria-hidden="true" focusable="false"><use href="#i-tooth"/></svg></span>
            <span class="vn-wave thumb-wave absolute inset-x-5 bottom-11 !h-7 opacity-50" aria-hidden="true"><i style="height:30%"></i><i style="height:55%"></i><i style="height:80%"></i><i style="height:45%"></i><i style="height:65%"></i><i style="height:90%"></i><i style="height:50%"></i><i style="height:35%"></i><i style="height:70%"></i><i style="height:85%"></i><i style="height:40%"></i><i style="height:60%"></i><i style="height:75%"></i><i style="height:30%"></i><i style="height:50%"></i><i style="height:65%"></i><i style="height:45%"></i><i style="height:80%"></i><i style="height:55%"></i><i style="height:35%"></i><i style="height:60%"></i><i style="height:40%"></i><i style="height:70%"></i><i style="height:30%"></i></span>
            <span class="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-[13px] font-semibold text-ink">Video testimonial</span>
            <span class="absolute left-1/2 top-[40%] grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-navy shadow-[0_10px_24px_-8px_rgb(16_24_40/0.55)] transition-transform group-hover:scale-110" aria-hidden="true"><svg class="icon !h-6 !w-6 translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-play"/></svg></span>
            <span class="absolute bottom-3 left-4 right-20 truncate text-[14px] font-semibold text-ink">[Client name], Practice manager</span>
            <span class="absolute bottom-3 right-3 rounded-[5px] bg-[#101828]/85 px-1.5 py-0.5 text-[13px] font-semibold text-white tnum"><span class="sr-only">Length </span>1:12</span>
          </button>
        </div>
        <figcaption class="flex flex-1 flex-col px-2 pb-2 pt-4">
          <h3 class="!text-[20px] !leading-[1.3]">Evening calls at a Manchester dental practice</h3>
          <blockquote class="mt-2 text-[16.5px] leading-[1.5] text-muted"><p><span class="flag">[PLACEHOLDER]</span> Quote to follow once this practice has run its voice agent long enough for us to verify the results.</p></blockquote>
          <span class="mt-auto flex flex-wrap items-center gap-2 pt-4"><span class="chip">Dental clinic</span><span class="chip"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-map-pin"/></svg>Manchester</span><span class="chip chip-pending">Voice agent result: pending</span></span>
        </figcaption>
      </figure>
      <figure data-reveal class="flex flex-col rounded-[16px] border border-line bg-paper p-3 transition-colors hover:border-[var(--va-line-strong)]">
        <div class="relative aspect-video overflow-hidden rounded-[11px] bg-[var(--va-tint-4)]">
          <button type="button" class="group absolute inset-0 block w-full text-left" aria-haspopup="dialog" data-video-modal-open data-video-id="[PLACEHOLDER]" data-video-title="A first winter of breakdown calls in Leeds" data-video-meta="[Client name], Director. Heating engineers, Leeds" data-track="testimonial_video_open" data-track-name="Heating engineers, Leeds" aria-label="Play video testimonial: A first winter of breakdown calls in Leeds (opens in a pop-up)">
            <span class="pointer-events-none absolute -right-6 -top-4 text-ink/10" aria-hidden="true"><svg class="icon !h-[150px] !w-[150px]" aria-hidden="true" focusable="false"><use href="#i-flame"/></svg></span>
            <span class="vn-wave thumb-wave absolute inset-x-5 bottom-11 !h-7 opacity-50" aria-hidden="true"><i style="height:45%"></i><i style="height:70%"></i><i style="height:35%"></i><i style="height:85%"></i><i style="height:60%"></i><i style="height:40%"></i><i style="height:75%"></i><i style="height:55%"></i><i style="height:90%"></i><i style="height:30%"></i><i style="height:65%"></i><i style="height:50%"></i><i style="height:80%"></i><i style="height:45%"></i><i style="height:35%"></i><i style="height:70%"></i><i style="height:60%"></i><i style="height:85%"></i><i style="height:40%"></i><i style="height:55%"></i><i style="height:30%"></i><i style="height:75%"></i><i style="height:50%"></i><i style="height:65%"></i></span>
            <span class="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-[13px] font-semibold text-ink">Video testimonial</span>
            <span class="absolute left-1/2 top-[40%] grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-navy shadow-[0_10px_24px_-8px_rgb(16_24_40/0.55)] transition-transform group-hover:scale-110" aria-hidden="true"><svg class="icon !h-6 !w-6 translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-play"/></svg></span>
            <span class="absolute bottom-3 left-4 right-20 truncate text-[14px] font-semibold text-ink">[Client name], Director</span>
            <span class="absolute bottom-3 right-3 rounded-[5px] bg-[#101828]/85 px-1.5 py-0.5 text-[13px] font-semibold text-white tnum"><span class="sr-only">Length </span>0:58</span>
          </button>
        </div>
        <figcaption class="flex flex-1 flex-col px-2 pb-2 pt-4">
          <h3 class="!text-[20px] !leading-[1.3]">A first winter of breakdown calls in Leeds</h3>
          <blockquote class="mt-2 text-[16.5px] leading-[1.5] text-muted"><p><span class="flag">[PLACEHOLDER]</span> Quote to follow, covering out-of-hours breakdown calls and how many became booked repairs.</p></blockquote>
          <span class="mt-auto flex flex-wrap items-center gap-2 pt-4"><span class="chip">Heating engineers</span><span class="chip"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-map-pin"/></svg>Leeds</span><span class="chip chip-pending">Voice agent result: pending</span></span>
        </figcaption>
      </figure>
      <figure data-reveal class="flex flex-col rounded-[16px] border border-line bg-paper p-3 transition-colors hover:border-[var(--va-line-strong)]">
        <div class="relative aspect-video overflow-hidden rounded-[11px] bg-[var(--va-tint-2)]">
          <button type="button" class="group absolute inset-0 block w-full text-left" aria-haspopup="dialog" data-video-modal-open data-video-id="[PLACEHOLDER]" data-video-title="Saturday viewing requests at a London branch" data-video-meta="[Client name], Branch manager. Estate agents, London" data-track="testimonial_video_open" data-track-name="Estate agents, London" aria-label="Play video testimonial: Saturday viewing requests at a London branch (opens in a pop-up)">
            <span class="pointer-events-none absolute -right-6 -top-4 text-ink/10" aria-hidden="true"><svg class="icon !h-[150px] !w-[150px]" aria-hidden="true" focusable="false"><use href="#i-home"/></svg></span>
            <span class="vn-wave thumb-wave absolute inset-x-5 bottom-11 !h-7 opacity-50" aria-hidden="true"><i style="height:60%"></i><i style="height:35%"></i><i style="height:75%"></i><i style="height:50%"></i><i style="height:90%"></i><i style="height:40%"></i><i style="height:65%"></i><i style="height:80%"></i><i style="height:30%"></i><i style="height:55%"></i><i style="height:70%"></i><i style="height:45%"></i><i style="height:85%"></i><i style="height:35%"></i><i style="height:60%"></i><i style="height:50%"></i><i style="height:75%"></i><i style="height:40%"></i><i style="height:90%"></i><i style="height:30%"></i><i style="height:65%"></i><i style="height:55%"></i><i style="height:45%"></i><i style="height:70%"></i></span>
            <span class="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-[13px] font-semibold text-ink">Video testimonial</span>
            <span class="absolute left-1/2 top-[40%] grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-navy shadow-[0_10px_24px_-8px_rgb(16_24_40/0.55)] transition-transform group-hover:scale-110" aria-hidden="true"><svg class="icon !h-6 !w-6 translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-play"/></svg></span>
            <span class="absolute bottom-3 left-4 right-20 truncate text-[14px] font-semibold text-ink">[Client name], Branch manager</span>
            <span class="absolute bottom-3 right-3 rounded-[5px] bg-[#101828]/85 px-1.5 py-0.5 text-[13px] font-semibold text-white tnum"><span class="sr-only">Length </span>1:04</span>
          </button>
        </div>
        <figcaption class="flex flex-1 flex-col px-2 pb-2 pt-4">
          <h3 class="!text-[20px] !leading-[1.3]">Saturday viewing requests at a London branch</h3>
          <blockquote class="mt-2 text-[16.5px] leading-[1.5] text-muted"><p><span class="flag">[PLACEHOLDER]</span> Quote to follow, covering viewing requests taken while every negotiator was out.</p></blockquote>
          <span class="mt-auto flex flex-wrap items-center gap-2 pt-4"><span class="chip">Estate agents</span><span class="chip"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-map-pin"/></svg>London</span><span class="chip chip-pending">Voice agent result: pending</span></span>
        </figcaption>
      </figure>
      <figure data-reveal class="flex flex-col rounded-[16px] border border-line bg-paper p-3 transition-colors hover:border-[var(--va-line-strong)]">
        <div class="relative aspect-video overflow-hidden rounded-[11px] bg-[var(--va-tint-2)]">
          <button type="button" class="group absolute inset-0 block w-full text-left" aria-haspopup="dialog" data-video-modal-open data-video-id="[PLACEHOLDER]" data-video-title="New enquiries while fee earners are in court" data-video-meta="[Client name], Partner. Law firm, Birmingham" data-track="testimonial_video_open" data-track-name="Law firm, Birmingham" aria-label="Play video testimonial: New enquiries while fee earners are in court (opens in a pop-up)">
            <span class="pointer-events-none absolute -right-6 -top-4 text-ink/10" aria-hidden="true"><svg class="icon !h-[150px] !w-[150px]" aria-hidden="true" focusable="false"><use href="#i-scale"/></svg></span>
            <span class="vn-wave thumb-wave absolute inset-x-5 bottom-11 !h-7 opacity-50" aria-hidden="true"><i style="height:35%"></i><i style="height:80%"></i><i style="height:50%"></i><i style="height:65%"></i><i style="height:40%"></i><i style="height:85%"></i><i style="height:30%"></i><i style="height:70%"></i><i style="height:55%"></i><i style="height:90%"></i><i style="height:45%"></i><i style="height:60%"></i><i style="height:35%"></i><i style="height:75%"></i><i style="height:50%"></i><i style="height:80%"></i><i style="height:40%"></i><i style="height:65%"></i><i style="height:30%"></i><i style="height:85%"></i><i style="height:55%"></i><i style="height:70%"></i><i style="height:45%"></i><i style="height:60%"></i></span>
            <span class="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-[13px] font-semibold text-ink">Video testimonial</span>
            <span class="absolute left-1/2 top-[40%] grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-navy shadow-[0_10px_24px_-8px_rgb(16_24_40/0.55)] transition-transform group-hover:scale-110" aria-hidden="true"><svg class="icon !h-6 !w-6 translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-play"/></svg></span>
            <span class="absolute bottom-3 left-4 right-20 truncate text-[14px] font-semibold text-ink">[Client name], Partner</span>
            <span class="absolute bottom-3 right-3 rounded-[5px] bg-[#101828]/85 px-1.5 py-0.5 text-[13px] font-semibold text-white tnum"><span class="sr-only">Length </span>0:47</span>
          </button>
        </div>
        <figcaption class="flex flex-1 flex-col px-2 pb-2 pt-4">
          <h3 class="!text-[20px] !leading-[1.3]">New enquiries while fee earners are in court</h3>
          <blockquote class="mt-2 text-[16.5px] leading-[1.5] text-muted"><p><span class="flag">[PLACEHOLDER]</span> Quote to follow, covering new enquiries taken while the team was in court or meetings.</p></blockquote>
          <span class="mt-auto flex flex-wrap items-center gap-2 pt-4"><span class="chip">Law firm</span><span class="chip"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-map-pin"/></svg>Birmingham</span><span class="chip chip-pending">Voice agent result: pending</span></span>
        </figcaption>
      </figure>
      <figure data-reveal class="flex flex-col rounded-[16px] border border-line bg-paper p-3 transition-colors hover:border-[var(--va-line-strong)]">
        <div class="relative aspect-video overflow-hidden rounded-[11px] bg-[var(--va-tint-3)]">
          <button type="button" class="group absolute inset-0 block w-full text-left" aria-haspopup="dialog" data-video-modal-open data-video-id="[PLACEHOLDER]" data-video-title="The morning service rush in Liverpool" data-video-meta="[Client name], Service manager. Car dealership, Liverpool" data-track="testimonial_video_open" data-track-name="Car dealership, Liverpool" aria-label="Play video testimonial: The morning service rush in Liverpool (opens in a pop-up)">
            <span class="pointer-events-none absolute -right-6 -top-4 text-ink/10" aria-hidden="true"><svg class="icon !h-[150px] !w-[150px]" aria-hidden="true" focusable="false"><use href="#i-car"/></svg></span>
            <span class="vn-wave thumb-wave absolute inset-x-5 bottom-11 !h-7 opacity-50" aria-hidden="true"><i style="height:70%"></i><i style="height:45%"></i><i style="height:60%"></i><i style="height:30%"></i><i style="height:80%"></i><i style="height:55%"></i><i style="height:90%"></i><i style="height:35%"></i><i style="height:65%"></i><i style="height:50%"></i><i style="height:75%"></i><i style="height:40%"></i><i style="height:85%"></i><i style="height:60%"></i><i style="height:30%"></i><i style="height:70%"></i><i style="height:45%"></i><i style="height:55%"></i><i style="height:80%"></i><i style="height:35%"></i><i style="height:65%"></i><i style="height:50%"></i><i style="height:90%"></i><i style="height:40%"></i></span>
            <span class="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-[13px] font-semibold text-ink">Video testimonial</span>
            <span class="absolute left-1/2 top-[40%] grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-navy shadow-[0_10px_24px_-8px_rgb(16_24_40/0.55)] transition-transform group-hover:scale-110" aria-hidden="true"><svg class="icon !h-6 !w-6 translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-play"/></svg></span>
            <span class="absolute bottom-3 left-4 right-20 truncate text-[14px] font-semibold text-ink">[Client name], Service manager</span>
            <span class="absolute bottom-3 right-3 rounded-[5px] bg-[#101828]/85 px-1.5 py-0.5 text-[13px] font-semibold text-white tnum"><span class="sr-only">Length </span>0:52</span>
          </button>
        </div>
        <figcaption class="flex flex-1 flex-col px-2 pb-2 pt-4">
          <h3 class="!text-[20px] !leading-[1.3]">The morning service rush in Liverpool</h3>
          <blockquote class="mt-2 text-[16.5px] leading-[1.5] text-muted"><p><span class="flag">[PLACEHOLDER]</span> Quote to follow, covering service bookings taken when the desk used to let the phone ring out.</p></blockquote>
          <span class="mt-auto flex flex-wrap items-center gap-2 pt-4"><span class="chip">Car dealership</span><span class="chip"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-map-pin"/></svg>Liverpool</span><span class="chip chip-pending">Voice agent result: pending</span></span>
        </figcaption>
      </figure>
      <figure data-reveal class="flex flex-col rounded-[16px] border border-line bg-paper p-3 transition-colors hover:border-[var(--va-line-strong)]">
        <div class="relative aspect-video overflow-hidden rounded-[11px] bg-[var(--va-tint-1)]">
          <button type="button" class="group absolute inset-0 block w-full text-left" aria-haspopup="dialog" data-video-modal-open data-video-id="[PLACEHOLDER]" data-video-title="Quote requests captured from site in Bristol" data-video-meta="[Client name], Owner. Building contractor, Bristol" data-track="testimonial_video_open" data-track-name="Building contractor, Bristol" aria-label="Play video testimonial: Quote requests captured from site in Bristol (opens in a pop-up)">
            <span class="pointer-events-none absolute -right-6 -top-4 text-ink/10" aria-hidden="true"><svg class="icon !h-[150px] !w-[150px]" aria-hidden="true" focusable="false"><use href="#i-hard-hat"/></svg></span>
            <span class="vn-wave thumb-wave absolute inset-x-5 bottom-11 !h-7 opacity-50" aria-hidden="true"><i style="height:30%"></i><i style="height:55%"></i><i style="height:80%"></i><i style="height:45%"></i><i style="height:65%"></i><i style="height:90%"></i><i style="height:50%"></i><i style="height:35%"></i><i style="height:70%"></i><i style="height:85%"></i><i style="height:40%"></i><i style="height:60%"></i><i style="height:75%"></i><i style="height:30%"></i><i style="height:50%"></i><i style="height:65%"></i><i style="height:45%"></i><i style="height:80%"></i><i style="height:55%"></i><i style="height:35%"></i><i style="height:60%"></i><i style="height:40%"></i><i style="height:70%"></i><i style="height:30%"></i></span>
            <span class="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-[13px] font-semibold text-ink">Video testimonial</span>
            <span class="absolute left-1/2 top-[40%] grid h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-navy shadow-[0_10px_24px_-8px_rgb(16_24_40/0.55)] transition-transform group-hover:scale-110" aria-hidden="true"><svg class="icon !h-6 !w-6 translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-play"/></svg></span>
            <span class="absolute bottom-3 left-4 right-20 truncate text-[14px] font-semibold text-ink">[Client name], Owner</span>
            <span class="absolute bottom-3 right-3 rounded-[5px] bg-[#101828]/85 px-1.5 py-0.5 text-[13px] font-semibold text-white tnum"><span class="sr-only">Length </span>0:39</span>
          </button>
        </div>
        <figcaption class="flex flex-1 flex-col px-2 pb-2 pt-4">
          <h3 class="!text-[20px] !leading-[1.3]">Quote requests captured from site in Bristol</h3>
          <blockquote class="mt-2 text-[16.5px] leading-[1.5] text-muted"><p><span class="flag">[PLACEHOLDER]</span> Quote to follow, covering project enquiries captured while the team was on site.</p></blockquote>
          <span class="mt-auto flex flex-wrap items-center gap-2 pt-4"><span class="chip">Building contractor</span><span class="chip"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-map-pin"/></svg>Bristol</span><span class="chip chip-pending">Voice agent result: pending</span></span>
        </figcaption>
      </figure>
    </div>
    <p class="mt-6 text-[15px] text-muted">Each video opens in a pop-up and loads from YouTube's privacy-enhanced player only when you press play. Video IDs <span class="flag">[PLACEHOLDER]</span></p>
  </div>
</section>

<dialog data-component="VideoModal" data-video-modal aria-labelledby="video-modal-title" class="video-modal m-auto w-[min(960px,calc(100vw-32px),calc((100dvh-170px)*16/9))] max-w-none overflow-visible bg-transparent p-0 text-band-ink backdrop:bg-[#0b0f19]/80">
  <div class="on-band overflow-hidden rounded-[16px] bg-band shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)]">
    <div class="flex items-start justify-between gap-4 px-5 py-4 sm:px-6">
      <div class="min-w-0">
        <p class="text-[14px] font-semibold text-band-hl">Video testimonial</p>
        <h2 id="video-modal-title" class="mt-0.5 !text-[clamp(19px,17px+.6vw,24px)] !leading-tight" data-video-modal-title></h2>
        <p class="mt-1 text-[15px] text-band-muted" data-video-modal-meta></p>
      </div>
      <button type="button" class="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-band-line text-band-ink hover:bg-white/10" data-video-modal-close data-track="testimonial_video_close" aria-label="Close video"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-x"/></svg></button>
    </div>
    <div class="relative aspect-video bg-[#05070c]" data-video-modal-player></div>
  </div>
</dialog>

<section id="white-label" data-component="WhiteLabel" class="relative overflow-hidden bg-sand">
  <div class="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" aria-hidden="true"></div>
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 relative py-20 lg:py-28" data-wl data-wl-monthly="349" data-wl-annual="291" data-wl-year="3490">
    <div class="mx-auto max-w-[48rem] text-center">
      <span class="inline-flex rounded-full border border-gold bg-surface px-3.5 py-1.5 text-[14.5px] font-semibold text-hl">For agencies and resellers</span>
      <h2 class="mt-5">Sell AI voice agents under <span class="hl">your own brand</span></h2>
      <p class="mx-auto mt-5 max-w-[40rem] text-muted">For marketing agencies, web studios and IT providers who want to offer voice agents to their clients. We build and run the agents behind the scenes. Your clients only ever see your name.</p>
    </div>

    <fieldset class="mx-auto mt-9 w-fit">
      <legend class="sr-only">Billing period</legend>
      <div class="inline-grid grid-cols-2 gap-1 rounded-[12px] border border-line bg-surface p-1 text-[15.5px] font-semibold">
        <label class="relative">
          <input type="radio" name="wl-billing" value="monthly" class="peer sr-only" checked data-wl-period data-track="white_label_billing" data-track-name="monthly">
          <span class="flex min-h-[44px] items-center justify-center rounded-[9px] px-4 text-muted peer-checked:bg-gold peer-checked:text-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">Monthly</span>
        </label><label class="relative">
          <input type="radio" name="wl-billing" value="annual" class="peer sr-only"  data-wl-period data-track="white_label_billing" data-track-name="annual">
          <span class="flex min-h-[44px] items-center justify-center rounded-[9px] px-4 text-muted peer-checked:bg-gold peer-checked:text-navy peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--va-hl)]">Yearly (2 months free)</span>
        </label>
      </div>
    </fieldset>

    <article class="mx-auto mt-8 grid max-w-[1100px] gap-10 rounded-[20px] border border-line bg-surface p-6 shadow-[0_40px_80px_-50px_rgb(16_24_40/0.45)] sm:p-9 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-12">
      <div class="flex flex-col">
        <span class="w-fit rounded-full bg-gold/20 px-3 py-1 text-[13.5px] font-semibold text-hl">Partner programme</span>
        <h3 class="mt-4 !text-[clamp(30px,26px+1vw,40px)] !leading-[1.1]">White-label voice agents</h3>
        <p class="mt-3 text-[17px] text-muted">Everything you need to offer AI receptionists to your clients, with a UK team doing the build, testing and monthly tuning.</p>
        <p class="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span class="font-display text-[clamp(3rem,2.5rem+1.6vw,4rem)] font-semibold leading-none tracking-tight text-hl tnum">£<span data-wl-price>349</span></span>
          <span class="text-[17px] text-muted">a month + VAT</span> <span class="flag">[PLACEHOLDER]</span>
        </p>
        <p class="mt-2 text-[16px] text-muted" data-wl-note>Billed monthly. Then 8p a minute after 3,000 included minutes.</p>
        <p class="mt-3 flex items-start gap-2 text-[15.5px] font-semibold text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>30 days' notice, no long contract <span class="flag">[CONFIRM]</span></span></p>
        <div class="mt-auto pt-7">
          <a href="/contact?service=ai-voice-agents&amp;type=white-label" class="btn btn-primary w-full" data-track="white_label_apply">Become a partner<svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></a>
          <a href="/contact?service=ai-voice-agents&amp;type=white-label-call" class="text-link mx-auto mt-2 flex w-fit !no-underline hover:!underline" data-track="white_label_book_call"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-calendar"/></svg>Book a call with our team</a>
        </div>
      </div>

      <div>
        <ul class="grid gap-x-6 gap-y-4 sm:grid-cols-2">
          <li class="flex gap-3 text-[16.5px] leading-snug"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ok text-surface" aria-hidden="true"><svg class="icon !h-3.5 !w-3.5" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span>3,000 minutes included, then 8p a minute <span class="flag">[PLACEHOLDER]</span></span></li>
          <li class="flex gap-3 text-[16.5px] leading-snug"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ok text-surface" aria-hidden="true"><svg class="icon !h-3.5 !w-3.5" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span>Unlimited client sub-accounts <span class="flag">[CONFIRM]</span></span></li>
          <li class="flex gap-3 text-[16.5px] leading-snug"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ok text-surface" aria-hidden="true"><svg class="icon !h-3.5 !w-3.5" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span>Your logo, colours and domain on the dashboard <span class="flag">[CONFIRM]</span></span></li>
          <li class="flex gap-3 text-[16.5px] leading-snug"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ok text-surface" aria-hidden="true"><svg class="icon !h-3.5 !w-3.5" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span>Agents scripted, built and tested by OMH </span></li>
          <li class="flex gap-3 text-[16.5px] leading-snug"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ok text-surface" aria-hidden="true"><svg class="icon !h-3.5 !w-3.5" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span>Outbound follow-up to consented contacts </span></li>
          <li class="flex gap-3 text-[16.5px] leading-snug"><span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ok text-surface" aria-hidden="true"><svg class="icon !h-3.5 !w-3.5" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span>Monthly client reports in your branding </span></li>
        </ul>
        <div class="mt-7 rounded-[14px] bg-gold/15 p-5 sm:p-6">
          <p class="font-display text-[18px] font-semibold">Every partnership includes</p>
          <ul class="mt-3 space-y-2.5 text-[16px] leading-snug">
            <li class="flex gap-3"><span class="mt-[3px] text-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span>A named UK partner manager on email, phone and WhatsApp</span></li>
            <li class="flex gap-3"><span class="mt-[3px] text-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span>No OMH branding anywhere your clients look</span></li>
            <li class="flex gap-3"><span class="mt-[3px] text-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span>A demo agent set up for your sales pitches</span></li>
            <li class="flex gap-3"><span class="mt-[3px] text-hl" aria-hidden="true"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span>You set your own client prices and keep the margin</span></li>
          </ul>
        </div>
      </div>
    </article>

        <div class="mx-auto mt-6 grid max-w-[1100px] gap-6 rounded-[20px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
      <div>
        <h3 class="!text-[24px]">What could you earn?</h3>
        <p class="mt-1 text-[16px] text-muted">Move the sliders to see a rough monthly margin.</p>
        <div class="mt-5">
          <div class="flex items-baseline justify-between gap-4"><label for="wl-clients" class="font-semibold">Clients on a voice agent</label><output for="wl-clients" class="font-display text-[19px] font-semibold tnum" data-wl-out="clients">8</output></div>
          <input id="wl-clients" type="range" min="1" max="30" step="1" value="8" data-wl-input="clients" data-track="white_label_clients">
        </div>
        <div class="mt-3">
          <div class="flex items-baseline justify-between gap-4"><label for="wl-charge" class="font-semibold">You charge each client a month</label><output for="wl-charge" class="font-display text-[19px] font-semibold tnum" data-wl-out="charge">£199</output></div>
          <input id="wl-charge" type="range" min="49" max="499" step="10" value="199" data-wl-input="charge" data-track="white_label_charge">
        </div>
      </div>
      <div class="on-band flex flex-col justify-center rounded-[14px] bg-band p-6 text-band-ink" aria-live="polite">
        <p class="text-[15.5px] text-band-muted">Your estimated monthly margin</p>
        <p class="mt-1 font-display text-[clamp(2.5rem,2rem+2vw,3.5rem)] font-semibold leading-none tracking-tight text-band-hl tnum" data-wl-margin>£1,243</p>
        <dl class="mt-5 grid grid-cols-2 gap-4 border-t border-band-line pt-4 text-[15px]">
          <div><dt class="text-band-muted">You bill clients</dt><dd class="font-display text-[20px] font-semibold tnum" data-wl-revenue>£1,592</dd></div>
          <div><dt class="text-band-muted">Your OMH plan</dt><dd class="font-display text-[20px] font-semibold tnum" data-wl-cost>£349</dd></div>
        </dl>
        <p class="mt-4 text-[14px] leading-snug text-band-muted">Illustrative only, before VAT. Assumes your clients' calls fit within the included minutes. Not a forecast or a guarantee.</p>
      </div>
    </div>

    <dl class="mx-auto mt-10 grid max-w-[1100px] grid-cols-2 gap-y-6 text-center md:grid-cols-4">
      <div class="  px-3"><dd class="font-display text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-semibold leading-none text-hl tnum">100%</dd><dt class="mt-2 text-[15.5px] text-muted">your branding</dt></div>
      <div class="md:border-l md:border-[var(--va-line-strong)] max-md:border-l max-md:border-[var(--va-line-strong)] px-3"><dd class="font-display text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-semibold leading-none text-hl tnum">1-to-1</dd><dt class="mt-2 text-[15.5px] text-muted">partner manager</dt></div>
      <div class="md:border-l md:border-[var(--va-line-strong)]  px-3"><dd class="font-display text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-semibold leading-none text-hl tnum">£0</dd><dt class="mt-2 text-[15.5px] text-muted">setup fee <span class="flag">[PLACEHOLDER]</span></dt></div>
      <div class="md:border-l md:border-[var(--va-line-strong)] max-md:border-l max-md:border-[var(--va-line-strong)] px-3"><dd class="font-display text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-semibold leading-none text-hl tnum">UK</dd><dt class="mt-2 text-[15.5px] text-muted">team, based in Essex</dt></div>
    </dl>
  </div>
</section>

<section id="pricing" data-component="Pricing">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28" data-pricing data-billing="monthly">
    <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-[44rem]">
        <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Pricing</p>
        <h2>Three plans, priced <span class="hl">by the month</span></h2>
        <p class="mt-5 text-muted">Every plan includes setup support, a managed agent and a monthly report. The figures below are examples while we finalise pricing. <span class="flag">[PLACEHOLDER]</span></p>
      </div>
      <div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-[17px] font-semibold">
        <span id="bill-monthly" data-billing-label="monthly">Monthly</span>
        <button type="button" role="switch" aria-checked="false" aria-label="Bill annually" class="group flex h-11 w-[72px] shrink-0 items-center rounded-full border-[1.5px] border-[var(--va-line-strong)] bg-surface p-[4px] transition-colors aria-checked:border-gold-deep aria-checked:bg-gold" data-billing-toggle data-track="pricing_billing_toggle">
          <span class="block h-8 w-8 rounded-full bg-ink shadow-[0_1px_3px_rgb(16_24_40/0.3)] transition-transform duration-200 group-aria-checked:translate-x-[29px] group-aria-checked:bg-navy" aria-hidden="true" data-billing-knob></span>
        </button>
        <span data-billing-label="annual" class="text-muted">Annual</span>
        <span class="chip max-sm:order-last">Save 15% <span class="flag">[PLACEHOLDER]</span></span>
      </div>
    </div>

    <div class="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
      <article class="relative flex flex-col rounded-[14px] border p-6 sm:p-8 border-line bg-surface" data-tier="starter">
        <div class="flex items-center justify-between gap-3">
          <h3>Starter</h3>
          
        </div>
        <p class="mt-2 min-h-[3.2em] text-[17px] leading-snug text-muted">One agent answering and booking for a single location.</p>
        <p class="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span class="font-display text-[clamp(2.5rem,2.1rem+1.4vw,3.25rem)] font-semibold leading-none tracking-tight tnum">£<span data-price data-monthly="249" data-annual="212">249</span></span>
          <span class="text-[16px] text-muted">a month + VAT</span>
          <span class="flag">[PLACEHOLDER]</span>
        </p>
        <p class="mt-2 min-h-[1.6em] text-[15.5px] text-muted" data-billing-note data-monthly-text="Billed monthly" data-annual-text="Billed annually in advance">Billed monthly</p>
        <p class="mt-5 rounded-[10px] bg-sand px-4 py-3 text-[16.5px] leading-snug"><strong class="font-semibold tnum">300 minutes</strong> included, then <span class="tnum">35p</span> a minute <span class="flag">[PLACEHOLDER]</span></p>
        <ul class="mb-8 mt-6 space-y-2.5 text-[17px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Inbound call answering, day and night</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Appointment booking into one calendar</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Your greeting, voice and opening hours</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Call summaries by email</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Monthly usage report</span></li>
        </ul>
        <a href="/contact?service=ai-voice-agents&amp;plan=starter" class="btn btn-secondary mt-auto" data-track="pricing_book_demo" data-track-name="Starter">Book a demo<span class="sr-only"> for the Starter plan</span></a>
      </article>
      <article class="relative flex flex-col rounded-[14px] border p-6 sm:p-8 border-ink bg-surface shadow-[0_24px_60px_-32px_rgb(16_24_40/0.4)] dark:border-gold" data-tier="growth">
        <div class="flex items-center justify-between gap-3">
          <h3>Growth</h3>
          <span class="rounded-full bg-gold px-3 py-1 text-[13.5px] font-semibold text-navy">Most common starting point</span>
        </div>
        <p class="mt-2 min-h-[3.2em] text-[17px] leading-snug text-muted">For busy phones that need transfers, follow-up and regular tuning.</p>
        <p class="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span class="font-display text-[clamp(2.5rem,2.1rem+1.4vw,3.25rem)] font-semibold leading-none tracking-tight tnum">£<span data-price data-monthly="449" data-annual="382">449</span></span>
          <span class="text-[16px] text-muted">a month + VAT</span>
          <span class="flag">[PLACEHOLDER]</span>
        </p>
        <p class="mt-2 min-h-[1.6em] text-[15.5px] text-muted" data-billing-note data-monthly-text="Billed monthly" data-annual-text="Billed annually in advance">Billed monthly</p>
        <p class="mt-5 rounded-[10px] bg-sand px-4 py-3 text-[16.5px] leading-snug"><strong class="font-semibold tnum">800 minutes</strong> included, then <span class="tnum">30p</span> a minute <span class="flag">[PLACEHOLDER]</span></p>
        <ul class="mb-8 mt-6 space-y-2.5 text-[17px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Everything in Starter</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Call transfer rules and out-of-hours routing</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Connection to your CRM or practice system</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Outbound follow-up to consented contacts</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Monthly optimisation call with your OMH lead</span></li>
        </ul>
        <a href="/contact?service=ai-voice-agents&amp;plan=growth" class="btn btn-primary mt-auto" data-track="pricing_book_demo" data-track-name="Growth">Book a demo<span class="sr-only"> for the Growth plan</span></a>
      </article>
      <article class="relative flex flex-col rounded-[14px] border p-6 sm:p-8 border-line bg-surface" data-tier="scale">
        <div class="flex items-center justify-between gap-3">
          <h3>Scale</h3>
          
        </div>
        <p class="mt-2 min-h-[3.2em] text-[17px] leading-snug text-muted">Several locations or departments on one managed service.</p>
        <p class="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span class="font-display text-[clamp(2.5rem,2.1rem+1.4vw,3.25rem)] font-semibold leading-none tracking-tight tnum">£<span data-price data-monthly="849" data-annual="722">849</span></span>
          <span class="text-[16px] text-muted">a month + VAT</span>
          <span class="flag">[PLACEHOLDER]</span>
        </p>
        <p class="mt-2 min-h-[1.6em] text-[15.5px] text-muted" data-billing-note data-monthly-text="Billed monthly" data-annual-text="Billed annually in advance">Billed monthly</p>
        <p class="mt-5 rounded-[10px] bg-sand px-4 py-3 text-[16.5px] leading-snug"><strong class="font-semibold tnum">2,000 minutes</strong> included, then <span class="tnum">25p</span> a minute <span class="flag">[PLACEHOLDER]</span></p>
        <ul class="mb-8 mt-6 space-y-2.5 text-[17px] leading-snug">
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Everything in Growth</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Multiple locations, departments or agents</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Call outcomes reported with your ads and website</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Priority script and knowledge changes</span></li>
          <li class="flex gap-2.5"><svg class="icon mt-[3px] text-hl" aria-hidden="true" focusable="false"><use href="#i-check"/></svg><span>Quarterly review with a senior strategist</span></li>
        </ul>
        <a href="/contact?service=ai-voice-agents&amp;plan=scale" class="btn btn-secondary mt-auto" data-track="pricing_book_demo" data-track-name="Scale">Book a demo<span class="sr-only"> for the Scale plan</span></a>
      </article>
    </div>

    <ol class="mt-8 max-w-[58rem] list-decimal space-y-1.5 pl-5 text-[15.5px] text-muted">
      <li>All prices exclude VAT at the current rate.</li>
      <li>Plan prices, included minutes and per-minute rates are example figures and will be confirmed before launch. <span class="flag">[PLACEHOLDER]</span></li>
      <li>One-off setup fee <span class="flag">[PLACEHOLDER]</span> Agreed in writing before work starts.</li>
      <li>Minutes are counted on answered inbound calls and connected outbound calls. Unused minutes don't roll over. <span class="flag">[CONFIRM]</span></li>
      <li>Connections to calendars, CRMs and practice systems depend on the software you use. <span class="flag">[CONFIRM]</span></li>
    </ol>
  </div>
</section>

<section id="calculator" data-component="MissedCallCalculator" class="bg-sand">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28">
    <div class="max-w-[44rem]">
      <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Calculator</p>
      <h2>What are missed calls <span class="hl">costing you?</span></h2>
      <p class="mt-5 text-muted">Put in your own numbers. If you don't know how many calls you miss, your phone provider's call log will tell you, and we can help you read it.</p>
    </div>

    <div class="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10" data-calc>
      <form class="card grid gap-6 p-6 sm:p-8" novalidate data-calc-form>
        <div>
          <label for="calc-industry" class="block font-semibold">Your industry</label>
          <select id="calc-industry" class="field mt-2" data-calc-industry data-track="calc_industry">
            <option value="2500" data-name="Estate &amp; Letting Agents">Estate &amp; Letting Agents</option>
            <option value="180" data-name="Dental Clinics">Dental Clinics</option>
            <option value="120" data-name="Clinics &amp; Healthcare">Clinics &amp; Healthcare</option>
            <option value="160" data-name="Plumbers">Plumbers</option>
            <option value="350" data-name="Heating &amp; HVAC" selected>Heating &amp; HVAC</option>
            <option value="4000" data-name="Contractors &amp; Builders">Contractors &amp; Builders</option>
            <option value="1200" data-name="Law Firms">Law Firms</option>
            <option value="900" data-name="Car Dealerships">Car Dealerships</option>
          </select>
          <p class="mt-1.5 text-[15px] text-muted">Choosing an industry fills in a typical customer value. Change it to match your business.</p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div>
            <label for="calc-calls" class="block font-semibold">Calls a month</label>
            <input id="calc-calls" type="number" inputmode="numeric" min="0" max="100000" step="10" value="400" class="field mt-2" data-calc-input="calls" aria-describedby="calc-calls-err" data-track="calc_calls">
            <p id="calc-calls-err" class="mt-1.5 text-[15px] font-semibold text-miss" data-calc-error="calls" hidden>Enter a whole number, 0 or more.</p>
          </div>
          <div>
            <label for="calc-value" class="block font-semibold">Average customer value (£)</label>
            <input id="calc-value" type="number" inputmode="decimal" min="0" max="1000000" step="10" value="350" class="field mt-2" data-calc-input="value" aria-describedby="calc-value-err" data-track="calc_value">
            <p id="calc-value-err" class="mt-1.5 text-[15px] font-semibold text-miss" data-calc-error="value" hidden>Enter an amount in pounds, 0 or more.</p>
          </div>
        </div>
        <div>
          <div class="flex items-baseline justify-between gap-4"><label for="calc-missed" class="font-semibold">Calls you miss</label><output for="calc-missed" class="font-display text-[20px] font-semibold tnum" data-calc-output="missed">25%</output></div>
          <input id="calc-missed" type="range" min="0" max="100" step="1" value="25" data-calc-input="missed" data-track="calc_missed">
        </div>
        <div>
          <div class="flex items-baseline justify-between gap-4"><label for="calc-conv" class="font-semibold">Missed callers who would have become customers</label><output for="calc-conv" class="font-display text-[20px] font-semibold tnum" data-calc-output="conv">30%</output></div>
          <input id="calc-conv" type="range" min="0" max="100" step="1" value="30" data-calc-input="conv" data-track="calc_conv">
        </div>
        <div>
          <label for="calc-plan" class="block font-semibold">Voice agent plan cost a month (£)</label>
          <input id="calc-plan" type="number" inputmode="decimal" min="0" max="100000" step="1" value="449" class="field mt-2" data-calc-input="plan" aria-describedby="calc-plan-err" data-track="calc_plan">
          <p id="calc-plan-err" class="mt-1.5 text-[15px] font-semibold text-miss" data-calc-error="plan" hidden>Enter an amount in pounds, 0 or more.</p>
        </div>
      </form>

      <div class="on-band flex flex-col rounded-[14px] bg-band p-6 text-band-ink sm:p-8">
        <div aria-live="polite" aria-atomic="true" data-calc-results>
          <p class="text-[16px] text-band-muted">Revenue you could be losing each month</p>
          <p class="mt-1 font-display text-[clamp(2.75rem,2rem+3.4vw,4.5rem)] font-semibold leading-none tracking-tight tnum text-band-hl" data-calc-result="lost">£10,500</p>
          <dl class="mt-7 grid grid-cols-2 border-y border-band-line">
            <div class="py-4 pr-4"><dt class="text-[15.5px] text-band-muted">Missed calls a month</dt><dd class="font-display text-[28px] font-semibold tnum" data-calc-result="missedCalls">100</dd></div>
            <div class="border-l border-band-line py-4 pl-4"><dt class="text-[15.5px] text-band-muted" data-calc-net-label>Net gain after plan cost</dt><dd class="font-display text-[28px] font-semibold tnum" data-calc-result="net">£10,051</dd></div>
          </dl>
          <p class="mt-4 text-[16.5px] leading-snug" data-calc-message></p>
        </div>

        <div class="mt-7" role="img" aria-label="Bar comparison of monthly lost revenue against the monthly plan cost" data-calc-chart>
          <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-x-3 gap-y-3 text-[15px]">
            <span class="text-band-muted">Lost revenue</span>
            <span class="flex items-center gap-2"><span class="block h-7 min-w-[3px] rounded-[5px] bg-gold" style="width:80%" data-calc-bar="lost"></span><span class="tnum font-semibold" data-calc-bar-label="lost">£10,500</span></span>
            <span class="text-band-muted">Plan cost</span>
            <span class="flex items-center gap-2"><span class="block h-7 min-w-[3px] rounded-[5px] bg-band-ink/60" style="width:4%" data-calc-bar="plan"></span><span class="tnum font-semibold" data-calc-bar-label="plan">£449</span></span>
          </div>
        </div>

        <div class="mt-8 border-t border-band-line pt-5 text-[15px] leading-relaxed text-band-muted">
          <p><strong class="font-semibold text-band-ink">How we work it out.</strong> Missed calls = calls a month × % missed. Lost revenue = missed calls × % who would have become customers × average customer value. Net gain = lost revenue − plan cost.</p>
          <p class="mt-3"><strong class="font-semibold text-band-ink">Illustrative only.</strong> This assumes the agent answers every missed call and those callers convert at the rate you entered. Real results vary and nothing here is a forecast or a guarantee. Typical customer values are rough examples, not industry statistics.</p>
        </div>
        <a href="/contact?service=ai-voice-agents" class="btn btn-primary mt-7 self-start" data-track="calc_book_demo">Book a Voice Agent Demo</a>
      </div>
    </div>
  </div>
</section>

<section id="compare" data-component="Compare">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28">
    <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
      <div>
        <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Compare your options</p>
        <h2>How a voice agent compares with <span class="hl">the usual answers</span></h2>
      </div>
      <p class="text-muted lg:pt-10">Most businesses handle missed calls with voicemail, an answering service, more reception staff or a DIY tool. Here is an honest side-by-side, including where each option wins.</p>
    </div>

        <div class="mt-12 hidden overflow-hidden rounded-[18px] border border-line bg-surface shadow-[0_30px_60px_-45px_rgb(16_24_40/0.45)] lg:block">
      <table class="cmp-table w-full border-separate border-spacing-0 text-left text-[15.5px] leading-snug">
        <caption class="sr-only">OMH managed voice agent compared with voicemail, an answering service, an in-house receptionist and a DIY voice AI platform</caption>
        <thead>
          <tr class="text-[14px] font-semibold text-muted">
            <th scope="col" class="w-[16%] px-5 pb-4 pt-5 align-bottom">What matters</th>
            <th scope="col" class="cmp-omh rounded-t-[0] text-ink w-[16.8%] px-5 pb-4 pt-5 align-bottom"><span class="mb-2 inline-flex rounded-full bg-gold px-2.5 py-0.5 text-[12.5px] font-semibold text-navy">Managed for you</span><span class="block font-display text-[17px] font-semibold">OMH voice agent</span></th><th scope="col" class=" w-[16.8%] px-5 pb-4 pt-5 align-bottom"><span class="font-display text-[16px] font-semibold text-ink">Voicemail</span></th><th scope="col" class=" w-[16.8%] px-5 pb-4 pt-5 align-bottom"><span class="font-display text-[16px] font-semibold text-ink">Answering service</span></th><th scope="col" class=" w-[16.8%] px-5 pb-4 pt-5 align-bottom"><span class="font-display text-[16px] font-semibold text-ink">In-house receptionist</span></th><th scope="col" class=" w-[16.8%] px-5 pb-4 pt-5 align-bottom"><span class="font-display text-[16px] font-semibold text-ink">DIY voice AI platform</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="border-t border-line px-5 py-4 align-top font-display text-[16px] font-semibold">Typical monthly cost</th>
            <td class="cmp-omh font-semibold border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>From £249 + VAT <span class="flag">[PLACEHOLDER]</span></span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Free</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Around £50 to £400, often per call <span class="flag">[CONFIRM]</span></span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>Around £2,000+ with employer costs <span class="flag">[CONFIRM]</span></span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Around £30 to £300 plus usage <span class="flag">[CONFIRM]</span></span></span></td>
          </tr>
          <tr>
            <th scope="row" class="border-t border-line px-5 py-4 align-top font-display text-[16px] font-semibold">Answers out of hours</th>
            <td class="cmp-omh font-semibold border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Yes, day and night</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>Records a message, if callers leave one</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Depends on the plan</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>Office hours only</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Yes</span></span></td>
          </tr>
          <tr>
            <th scope="row" class="border-t border-line px-5 py-4 align-top font-display text-[16px] font-semibold">Books into your diary</th>
            <td class="cmp-omh font-semibold border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Yes, while the caller is on the line</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>No</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Sometimes, by hand</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Yes</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>If you connect it yourself</span></span></td>
          </tr>
          <tr>
            <th scope="row" class="border-t border-line px-5 py-4 align-top font-display text-[16px] font-semibold">Calls at the same time</th>
            <td class="cmp-omh font-semibold border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Many at once</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>One message at a time</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Depends on staffing</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>One at a time</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Many at once</span></span></td>
          </tr>
          <tr>
            <th scope="row" class="border-t border-line px-5 py-4 align-top font-display text-[16px] font-semibold">Knows your business</th>
            <td class="cmp-omh font-semibold border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Built from your real calls</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>No</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>A short script</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Best of all</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>As well as you set it up</span></span></td>
          </tr>
          <tr>
            <th scope="row" class="border-t border-line px-5 py-4 align-top font-display text-[16px] font-semibold">Setup and upkeep</th>
            <td class="cmp-omh font-semibold border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>We build, test and tune it monthly</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>None</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Low</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>Recruiting, training, cover</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>You build and maintain it</span></span></td>
          </tr>
          <tr>
            <th scope="row" class="border-t border-line px-5 py-4 align-top font-display text-[16px] font-semibold">Results in your marketing report</th>
            <td class="cmp-omh font-semibold border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Beside your ads and website</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>No</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Call logs only</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>Kept by hand</span></span></td><td class="text-muted border-t border-line px-5 py-4 align-top"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>A separate dashboard</span></span></td>
          </tr>
        </tbody>
      </table>
    </div>

        <div class="mt-10 lg:hidden" data-cmp>
      <p class="font-semibold" id="cmp-pick-label">Compare OMH with</p>
      <div role="radiogroup" aria-labelledby="cmp-pick-label" class="mt-3 flex flex-wrap gap-2" data-cmp-group>
        <button type="button" role="radio" aria-checked="true" tabindex="0" class="min-h-[44px] rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold aria-checked:border-ink aria-checked:bg-ink aria-checked:text-paper" data-cmp-opt="1" data-track="compare_option" data-track-name="Voicemail">Voicemail</button>
        <button type="button" role="radio" aria-checked="false" tabindex="-1" class="min-h-[44px] rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold aria-checked:border-ink aria-checked:bg-ink aria-checked:text-paper" data-cmp-opt="2" data-track="compare_option" data-track-name="Answering service">Answering service</button>
        <button type="button" role="radio" aria-checked="false" tabindex="-1" class="min-h-[44px] rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold aria-checked:border-ink aria-checked:bg-ink aria-checked:text-paper" data-cmp-opt="3" data-track="compare_option" data-track-name="In-house receptionist">Receptionist</button>
        <button type="button" role="radio" aria-checked="false" tabindex="-1" class="min-h-[44px] rounded-full border border-[var(--va-line-strong)] px-4 text-[15.5px] font-semibold aria-checked:border-ink aria-checked:bg-ink aria-checked:text-paper" data-cmp-opt="4" data-track="compare_option" data-track-name="DIY voice AI platform">DIY platform</button>
      </div>
      <div class="mt-5 overflow-hidden rounded-[16px] border border-line bg-surface" aria-live="polite">
        <div class="grid grid-cols-2 border-b border-line text-[14.5px] font-semibold">
          <p class="cmp-omh px-4 py-3">OMH voice agent</p>
          <p class="px-4 py-3" data-cmp-name>Voicemail</p>
        </div>
        <dl>
          <div class="border-b border-line last:border-0">
            <dt class="px-4 pt-3 text-[14px] font-semibold text-muted">Typical monthly cost</dt>
            <dd class="grid grid-cols-2 text-[15px] leading-snug">
              <span class="cmp-omh px-4 pb-3 pt-1.5 font-semibold"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>From £249 + VAT <span class="flag">[PLACEHOLDER]</span></span></span></span>
              <span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="1"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Free</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="2" hidden><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Around £50 to £400, often per call <span class="flag">[CONFIRM]</span></span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="3" hidden><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>Around £2,000+ with employer costs <span class="flag">[CONFIRM]</span></span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="4" hidden><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Around £30 to £300 plus usage <span class="flag">[CONFIRM]</span></span></span></span>
            </dd>
          </div>
          <div class="border-b border-line last:border-0">
            <dt class="px-4 pt-3 text-[14px] font-semibold text-muted">Answers out of hours</dt>
            <dd class="grid grid-cols-2 text-[15px] leading-snug">
              <span class="cmp-omh px-4 pb-3 pt-1.5 font-semibold"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Yes, day and night</span></span></span>
              <span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="1"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>Records a message, if callers leave one</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="2" hidden><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Depends on the plan</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="3" hidden><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>Office hours only</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="4" hidden><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Yes</span></span></span>
            </dd>
          </div>
          <div class="border-b border-line last:border-0">
            <dt class="px-4 pt-3 text-[14px] font-semibold text-muted">Books into your diary</dt>
            <dd class="grid grid-cols-2 text-[15px] leading-snug">
              <span class="cmp-omh px-4 pb-3 pt-1.5 font-semibold"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Yes, while the caller is on the line</span></span></span>
              <span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="1"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>No</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="2" hidden><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Sometimes, by hand</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="3" hidden><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Yes</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="4" hidden><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>If you connect it yourself</span></span></span>
            </dd>
          </div>
          <div class="border-b border-line last:border-0">
            <dt class="px-4 pt-3 text-[14px] font-semibold text-muted">Calls at the same time</dt>
            <dd class="grid grid-cols-2 text-[15px] leading-snug">
              <span class="cmp-omh px-4 pb-3 pt-1.5 font-semibold"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Many at once</span></span></span>
              <span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="1"><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>One message at a time</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="2" hidden><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Depends on staffing</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="3" hidden><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>One at a time</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="4" hidden><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Many at once</span></span></span>
            </dd>
          </div>
          <div class="border-b border-line last:border-0">
            <dt class="px-4 pt-3 text-[14px] font-semibold text-muted">Knows your business</dt>
            <dd class="grid grid-cols-2 text-[15px] leading-snug">
              <span class="cmp-omh px-4 pb-3 pt-1.5 font-semibold"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Built from your real calls</span></span></span>
              <span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="1"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>No</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="2" hidden><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>A short script</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="3" hidden><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Best of all</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="4" hidden><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>As well as you set it up</span></span></span>
            </dd>
          </div>
          <div class="border-b border-line last:border-0">
            <dt class="px-4 pt-3 text-[14px] font-semibold text-muted">Setup and upkeep</dt>
            <dd class="grid grid-cols-2 text-[15px] leading-snug">
              <span class="cmp-omh px-4 pb-3 pt-1.5 font-semibold"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>We build, test and tune it monthly</span></span></span>
              <span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="1"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>None</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="2" hidden><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Low</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="3" hidden><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>Recruiting, training, cover</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="4" hidden><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>You build and maintain it</span></span></span>
            </dd>
          </div>
          <div class="border-b border-line last:border-0">
            <dt class="px-4 pt-3 text-[14px] font-semibold text-muted">Results in your marketing report</dt>
            <dd class="grid grid-cols-2 text-[15px] leading-snug">
              <span class="cmp-omh px-4 pb-3 pt-1.5 font-semibold"><span class="flex gap-2"><span class="text-ok"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span><span><span class="sr-only">Yes: </span>Beside your ads and website</span></span></span>
              <span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="1"><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>No</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="2" hidden><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>Call logs only</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="3" hidden><span class="flex gap-2"><span class="text-miss"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-x"/></svg></span><span><span class="sr-only">No: </span>Kept by hand</span></span></span><span class="px-4 pb-3 pt-1.5 text-muted" data-cmp-cell="4" hidden><span class="flex gap-2"><span class="text-hl"><svg class="icon mt-[3px]" aria-hidden="true" focusable="false"><use href="#i-minus"/></svg></span><span><span class="sr-only">Partly: </span>A separate dashboard</span></span></span>
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <p class="mt-4 text-[14.5px] text-muted">Costs are rough UK guides for a small business, not quotes. Answering service and platform prices vary widely by provider and usage.</p>

    <h3 class="mt-16 !text-[clamp(24px,21px+.8vw,30px)]">When something else suits you better</h3>
    <ul class="mt-6 grid gap-5 md:grid-cols-3">
      <li class="rounded-[14px] border border-line bg-surface p-6"><p class="font-display text-[18px] font-semibold">Every call needs a person</p><p class="mt-2 text-[16px] leading-[1.5] text-muted">If each conversation needs judgement or a personal touch from the first word, a good receptionist or answering service will serve you better.</p></li>
      <li class="rounded-[14px] border border-line bg-surface p-6"><p class="font-display text-[18px] font-semibold">You want to build it yourself</p><p class="mt-2 text-[16px] leading-[1.5] text-muted">If you have the technical time to script, connect and maintain an agent, a DIY platform costs less than a managed service.</p></li>
      <li class="rounded-[14px] border border-line bg-surface p-6"><p class="font-display text-[18px] font-semibold">Emergency or life-critical lines</p><p class="mt-2 text-[16px] leading-[1.5] text-muted">Where a missed or misunderstood call is a safety risk, an AI agent should never be the only route. We don't position it for those lines.</p></li>
    </ul>
  </div>
</section>

<section id="faq" data-component="FAQ" class="bg-surface">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 grid gap-10 py-20 lg:grid-cols-[minmax(0,.72fr)_minmax(0,1.28fr)] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-8 lg:py-28">
    <div>
      <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Questions</p>
      <h2>Straight answers to <span class="hl">fair questions</span></h2>
      <p class="mt-5 text-muted">The things owners and practice managers ask us most. Search, or pick a topic.</p>
    </div>

    <div class="order-last lg:order-none lg:col-start-1 lg:row-start-2 lg:sticky lg:top-28 lg:self-start">
      <div class="rounded-[16px] bg-band p-6 text-band-ink on-band">
        <p class="font-display text-[19px] font-semibold">Still have a question?</p>
        <p class="mt-1.5 text-[16px] leading-snug text-band-muted">Talk to a person on our UK team. No sales script.</p>
        <ul class="mt-4 space-y-1 text-[16px]">
          <li><a href="tel:+442034893934" class="text-link tnum" data-track="faq_phone_click"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-phone"/></svg>020 3489 3934</a></li>
          <li><a href="mailto:support@onlinemarketinghelp.co.uk" class="text-link [overflow-wrap:anywhere] max-sm:text-[15px]" data-track="faq_email_click"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-mail"/></svg>support@onlinemarketinghelp.co.uk</a></li>
        </ul>
        <a href="/contact?service=ai-voice-agents" class="btn btn-primary mt-5 w-full" data-track="faq_book_demo">Book a Voice Agent Demo</a>
      </div>
    </div>

    <div class="lg:col-start-2 lg:row-span-2 lg:row-start-1" data-faq>
      <div class="relative">
        <label for="faq-search" class="sr-only">Search the questions</label>
        <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></span>
        <input id="faq-search" type="search" placeholder="Search, for example GDPR, transfer or contract" autocomplete="off" class="field !min-h-[54px] !rounded-[12px] !pl-12" data-faq-search data-track="faq_search">
      </div>
      <div role="group" aria-label="Filter questions by topic" class="mt-4 flex flex-wrap gap-2" data-faq-filters>
        <button type="button" class="min-h-[44px] rounded-full border border-[var(--va-line-strong)] px-4 text-[15px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-faq-filter="all" aria-pressed="true" data-track="faq_filter" data-track-name="All questions">All questions <span class="ml-1 opacity-70 tnum" data-faq-count="all"></span></button>
        <button type="button" class="min-h-[44px] rounded-full border border-[var(--va-line-strong)] px-4 text-[15px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-faq-filter="callers" aria-pressed="false" data-track="faq_filter" data-track-name="Callers and AI">Callers and AI <span class="ml-1 opacity-70 tnum" data-faq-count="callers"></span></button>
        <button type="button" class="min-h-[44px] rounded-full border border-[var(--va-line-strong)] px-4 text-[15px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-faq-filter="setup" aria-pressed="false" data-track="faq_filter" data-track-name="Setup and systems">Setup and systems <span class="ml-1 opacity-70 tnum" data-faq-count="setup"></span></button>
        <button type="button" class="min-h-[44px] rounded-full border border-[var(--va-line-strong)] px-4 text-[15px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-faq-filter="data" aria-pressed="false" data-track="faq_filter" data-track-name="Data and rules">Data and rules <span class="ml-1 opacity-70 tnum" data-faq-count="data"></span></button>
        <button type="button" class="min-h-[44px] rounded-full border border-[var(--va-line-strong)] px-4 text-[15px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-faq-filter="sectors" aria-pressed="false" data-track="faq_filter" data-track-name="Health and legal">Health and legal <span class="ml-1 opacity-70 tnum" data-faq-count="sectors"></span></button>
        <button type="button" class="min-h-[44px] rounded-full border border-[var(--va-line-strong)] px-4 text-[15px] font-semibold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-paper" data-faq-filter="working" aria-pressed="false" data-track="faq_filter" data-track-name="Working with us">Working with us <span class="ml-1 opacity-70 tnum" data-faq-count="working"></span></button>
      </div>
      <div class="mt-5 flex items-center justify-between gap-4 text-[15px] text-muted">
        <p aria-live="polite" data-faq-status>Showing all 12 questions</p>
        <button type="button" class="inline-flex min-h-[44px] items-center gap-1.5 font-semibold text-ink hover:text-hl" data-faq-expand data-track="faq_expand_all">Open all</button>
      </div>

      <div class="mt-2 space-y-3" data-faq-list>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="callers" open data-track-name="Will callers know they are talking to an AI?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">01</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">Will callers know they are talking to an AI?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Callers and AI</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>Yes. We set every agent up to say it is an AI assistant at the start of the call. Callers deserve to know, and it avoids awkward moments later in the conversation.</p>
          
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="callers" data-track-name="Can the agent transfer a call to a real person?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">02</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">Can the agent transfer a call to a real person?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Callers and AI</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>Yes. You set the rules. Emergencies, existing clients, complaints and anyone who asks for a person can be put through to the right phone. Outside your opening hours the agent takes a detailed message and sends it to your team.</p>
          
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="setup" data-track-name="Which calendars and systems does it work with?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">03</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">Which calendars and systems does it work with?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Setup and systems</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>The agent needs somewhere to put bookings and call notes, usually your calendar and your CRM or practice system. We check your exact tools during discovery and tell you plainly what connects directly, what needs a workaround and what is not possible yet.</p>
          <p class="mt-3"><span class="flag flag-wrap">[CONFIRM] list of supported calendar and CRM integrations</span></p>
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="setup" data-track-name="Can we keep our existing phone number, or get a local one?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">04</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">Can we keep our existing phone number, or get a local one?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Setup and systems</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>In most cases you keep your number and divert calls to the agent, either all of them or only the ones your team cannot answer. If you want a new local number, for example an 0161 number for Manchester, we can arrange one as part of setup.</p>
          <p class="mt-3"><span class="flag flag-wrap">[CONFIRM] number porting and local number provisioning</span></p>
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="data" data-track-name="Are calls recorded, and how does that fit with UK GDPR?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">05</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">Are calls recorded, and how does that fit with UK GDPR?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Data and rules</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>Calls can be recorded and transcribed so you can review them, and callers are told at the start of the call. You remain the data controller and OMH acts as your processor under a written agreement. We agree retention periods with you and delete recordings on that schedule.</p>
          <p class="mt-3"><span class="flag flag-wrap">[CONFIRM] data processing agreement, storage region and retention options</span></p>
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="data" data-track-name="What are the rules for outbound calls?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">06</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">What are the rules for outbound calls?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Data and rules</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>The agent only calls people who have given appropriate consent, such as customers who asked for a reminder or a call back. We follow the UK PECR rules, screen lists against the Telephone Preference Service where required and act on opt-outs straight away. We do not run cold calling campaigns to bought or non-consented lists.</p>
          
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="sectors" data-track-name="Is it suitable for dental clinics and healthcare providers?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">07</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">Is it suitable for dental clinics and healthcare providers?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Health and legal</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>Yes, for bookings, routing and practical questions such as opening hours, fees and directions. The agent never gives clinical or medical advice. Anything clinical goes to your team, and urgent calls follow the emergency route you set.</p>
          
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="sectors" data-track-name="Is it suitable for law firms?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">08</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">Is it suitable for law firms?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Health and legal</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>Yes, for taking new enquiries, booking consultations and routing existing clients. The agent never gives legal advice and does not comment on the merits of a matter. It collects the details and gets the caller to the right person.</p>
          
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="working" data-track-name="We are not in one of your six cities. Can we still work with you?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">09</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">We are not in one of your six cities. Can we still work with you?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Working with us</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>Yes. We are based in Hullbridge, Essex and work with businesses across the UK remotely. London, Birmingham, Manchester, Leeds, Liverpool and Bristol are where we focus our voice agent work at the moment.</p>
          
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="setup" data-track-name="How long does setup take?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">10</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">How long does setup take?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Setup and systems</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>It depends on how many types of call you have and what the agent needs to connect to. A simple booking agent is quicker than one covering several departments. We give you a realistic timeline after the discovery call, before you commit to anything.</p>
          <p class="mt-3"><span class="flag flag-wrap">[PLACEHOLDER] typical setup time</span></p>
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="callers" data-track-name="What happens when the agent does not know the answer?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">11</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">What happens when the agent does not know the answer?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Callers and AI</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>It says so. The agent answers only from information you have approved, so when a question falls outside that, it offers to take a message or transfer the call. We review those moments every month and add the answers worth adding.</p>
          
        </div>
      </details>
      <details class="group rounded-[14px] border border-line bg-paper transition-colors open:border-[var(--va-line-strong)] open:bg-surface open:shadow-[0_18px_40px_-30px_rgb(16_24_40/0.45)]" data-faq-item data-cat="working" data-track-name="Is there a minimum contract?">
        <summary class="flex min-h-[64px] items-center gap-4 px-5 py-4">
          <span class="num hidden w-7 shrink-0 text-[15px] sm:block" aria-hidden="true">12</span>
          <span class="min-w-0 flex-1">
            <h3 class="!text-[clamp(18px,17px+.3vw,20.5px)] !leading-[1.3]">Is there a minimum contract?</h3>
            <span class="mt-1 block text-[13.5px] font-semibold text-muted">Working with us</span>
          </span>
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--va-line-strong)] group-open:border-gold group-open:bg-gold group-open:text-navy"><svg class="icon faq-chevron" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></span>
        </summary>
        <div class="max-w-[46rem] px-5 pb-6 text-[17px] text-muted sm:pl-[4.25rem]">
          <p data-faq-answer>We set out the terms in writing before you start, including the notice period, what is included each month and what counts as extra. There are no hidden usage fees. Every invoice shows your included minutes and any overage.</p>
          <p class="mt-3"><span class="flag flag-wrap">[PLACEHOLDER] contract length and notice period</span></p>
        </div>
      </details>
      </div>
      <div class="mt-3 rounded-[14px] border border-dashed border-[var(--va-line-strong)] p-6 text-center" data-faq-empty hidden>
        <p class="font-display text-[18px] font-semibold">No questions match that</p>
        <p class="mt-1 text-[16px] text-muted">Try another word, or ring us on <a href="tel:+442034893934" class="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 tnum">020 3489 3934</a> and ask a person.</p>
      </div>
    </div>
  </div>
</section>

<section id="sectors" data-component="Sectors" class="relative overflow-hidden bg-sand">
  <div class="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" aria-hidden="true"></div>
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 relative py-20 lg:py-28">
    <div class="mx-auto max-w-[46rem] text-center">
      <p class="eyebrow justify-center"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Who it works for</p>
      <h2>Industries where a voice agent <span class="hl">pays its way</span></h2>
      <p class="mt-5 text-muted">Businesses that live on the phone, where a missed call usually means a missed customer.</p>
    </div>

    <ul class="mt-12 grid auto-rows-fr gap-5 lg:grid-cols-2">
      <li>
        <a href="/contact?service=ai-voice-agents&amp;industry=estate-letting-agents" data-future-href="/ai-voice-agents/estate-letting-agents" data-track="sector_card_click" data-track-name="Estate &amp; letting agents" class="sector-card group grid h-full items-center gap-4 rounded-[18px] border border-line bg-surface p-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 sm:p-5">
          <span class="block h-[150px] rounded-[12px] bg-paper p-2"><svg viewBox="0 0 200 150" class="h-full w-full" aria-hidden="true">
    <ellipse cx="100" cy="132" rx="78" ry="14.04" class="il-shadow"/>
    <rect x="38" y="64" width="86" height="64" rx="3" class="il-wall"/>
    <path d="M30 68 L81 26 L132 68 Z" class="il-roof"/>
    <rect x="70" y="92" width="22" height="36" rx="2" class="il-ink"/>
    <rect x="48" y="78" width="16" height="14" rx="2" class="il-win"/><rect x="98" y="78" width="16" height="14" rx="2" class="il-win"/>
    <rect x="140" y="78" width="4" height="52" class="il-ink"/>
    <rect x="132" y="70" width="44" height="26" rx="3" class="il-gold"/>
    <text x="154" y="87" text-anchor="middle" class="il-label">FOR SALE</text>
    <g class="il-bubble" transform="translate(128 14)">
    <rect x="0" y="0" width="54" height="38" rx="10" class="il-card"/>
    <path d="M14 38 L10 48 L24 38 Z" class="il-card"/>
    <rect x="10" y="9" width="22" height="20" rx="3" class="il-line"/><path d="M10 15 H32" class="il-stroke"/><circle cx="40" cy="19" r="9" class="il-ok"/><path d="M36 19 l3 3 l5 -6" class="il-tick"/>
  </g>
  </svg></span>
          <span class="min-w-0">
            <span class="block font-display text-[21px] font-semibold leading-tight group-hover:text-hl">Estate & letting agents</span>
            <span class="mt-1.5 block text-[15.5px] leading-snug text-muted">Catch every viewing request and landlord enquiry, even on a Saturday when the branch is out.</span>
            
            <span class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl">See estate and letting agents<svg class="icon !h-4 !w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></span>
          </span>
        </a>
      </li>
      <li>
        <a href="/contact?service=ai-voice-agents&amp;industry=dental-clinics" data-future-href="/ai-voice-agents/dental-clinics" data-track="sector_card_click" data-track-name="Dental and healthcare clinics" class="sector-card group grid h-full items-center gap-4 rounded-[18px] border border-line bg-surface p-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 sm:p-5">
          <span class="block h-[150px] rounded-[12px] bg-paper p-2"><svg viewBox="0 0 320 220" class="h-full w-full" aria-hidden="true">
    <ellipse cx="160" cy="196" rx="130" ry="23.4" class="il-shadow"/>
    <rect x="44" y="70" width="150" height="120" rx="6" class="il-wall"/>
    <rect x="44" y="70" width="150" height="22" rx="6" class="il-ink"/>
    <rect x="104" y="40" width="30" height="30" rx="5" class="il-card"/><path d="M119 46 V64 M110 55 H128" class="il-crossline"/>
    <rect x="60" y="104" width="22" height="20" rx="3" class="il-win"/><rect x="92" y="104" width="22" height="20" rx="3" class="il-win"/><rect x="156" y="104" width="22" height="20" rx="3" class="il-win"/>
    <rect x="60" y="136" width="22" height="20" rx="3" class="il-win"/><rect x="156" y="136" width="22" height="20" rx="3" class="il-win"/>
    <rect x="96" y="140" width="46" height="50" rx="3" class="il-ink"/>
    <path d="M232 92 c10-10 28-12 36 0 c8 12 2 26-2 40 c-3 12-4 24-10 30 c-4 4-8 0-9-6 l-3-14 c-1-6-9-6-10 0 l-3 14 c-1 6-5 10-9 6 c-6-6-7-18-10-30 c-4-14-10-28-2-40 c8-12 26-10 22 0" class="il-tooth"/>
    <g class="il-bubble" transform="translate(206 20)">
      <rect x="0" y="0" width="96" height="58" rx="12" class="il-card"/>
      <path d="M22 58 L16 70 L34 58 Z" class="il-card"/>
      <rect x="12" y="12" width="34" height="34" rx="5" class="il-line"/><path d="M12 22 H46" class="il-stroke"/>
      <text x="29" y="40" text-anchor="middle" class="il-num">9:10</text>
      <circle cx="70" cy="29" r="9" class="il-ok"/><path d="M66 29 l3 3 l5 -6" class="il-tick"/>
    </g>
  </svg></span>
          <span class="min-w-0">
            <span class="block font-display text-[21px] font-semibold leading-tight group-hover:text-hl">Dental and healthcare clinics</span>
            <span class="mt-1.5 block text-[15.5px] leading-snug text-muted">Appointments booked, moved and confirmed around the clock, so reception can focus on the patients in the room.</span>
            <span class="mt-2 flex items-center gap-1.5 text-[14px] font-semibold"><svg class="icon !h-4 !w-4 text-hl" aria-hidden="true" focusable="false"><use href="#i-shield"/></svg>Never gives clinical or medical advice.</span>
            <span class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl">See dental and healthcare<svg class="icon !h-4 !w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></span>
          </span>
        </a>
      </li>
      <li>
        <a href="/contact?service=ai-voice-agents&amp;industry=law-firms" data-future-href="/ai-voice-agents/law-firms" data-track="sector_card_click" data-track-name="Law firms" class="sector-card group grid h-full items-center gap-4 rounded-[18px] border border-line bg-surface p-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 sm:p-5">
          <span class="block h-[150px] rounded-[12px] bg-paper p-2"><svg viewBox="0 0 200 150" class="h-full w-full" aria-hidden="true">
    <ellipse cx="92" cy="132" rx="74" ry="13.32" class="il-shadow"/>
    <path d="M28 52 L92 22 L156 52 Z" class="il-roof"/>
    <rect x="34" y="52" width="116" height="8" class="il-ink"/>
    <rect x="44" y="62" width="14" height="56" rx="2" class="il-wall"/><rect x="70" y="62" width="14" height="56" rx="2" class="il-wall"/><rect x="96" y="62" width="14" height="56" rx="2" class="il-wall"/><rect x="122" y="62" width="14" height="56" rx="2" class="il-wall"/>
    <rect x="28" y="118" width="128" height="10" rx="2" class="il-ink"/>
    <g class="il-bubble" transform="translate(132 12)">
    <rect x="0" y="0" width="54" height="38" rx="10" class="il-card"/>
    <path d="M14 38 L10 48 L24 38 Z" class="il-card"/>
    <path d="M27 8 V30 M17 30 H37 M13 14 H41" class="il-stroke"/><path d="M13 14 L8 24 H18 Z M41 14 L36 24 H46 Z" class="il-goldline"/>
  </g>
  </svg></span>
          <span class="min-w-0">
            <span class="block font-display text-[21px] font-semibold leading-tight group-hover:text-hl">Law firms</span>
            <span class="mt-1.5 block text-[15.5px] leading-snug text-muted">New enquiries taken and existing clients routed while fee earners are in court. No legal advice given.</span>
            
            <span class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl">See law firms<svg class="icon !h-4 !w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></span>
          </span>
        </a>
      </li>
      <li>
        <a href="/contact?service=ai-voice-agents&amp;industry=plumbers" data-future-href="/ai-voice-agents/plumbers" data-track="sector_card_click" data-track-name="Plumbers and heating engineers" class="sector-card group grid h-full items-center gap-4 rounded-[18px] border border-line bg-surface p-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 sm:p-5">
          <span class="block h-[150px] rounded-[12px] bg-paper p-2"><svg viewBox="0 0 320 220" class="h-full w-full" aria-hidden="true">
    <ellipse cx="160" cy="196" rx="140" ry="25.2" class="il-shadow"/>
    <rect x="164" y="88" width="120" height="96" rx="4" class="il-wall"/>
    <path d="M154 92 L224 46 L294 92 Z" class="il-roof"/>
    <rect x="182" y="110" width="22" height="20" rx="3" class="il-win"/><rect x="244" y="110" width="22" height="20" rx="3" class="il-win"/>
    <rect x="212" y="140" width="24" height="44" rx="2" class="il-ink"/>
    <path d="M40 176 V128 Q40 120 48 120 H118 L138 140 Q142 144 142 150 V176 Z" class="il-gold"/>
    <path d="M118 124 L134 140 H112 V124 Z" class="il-win"/>
    <path d="M44 114 H120 M52 108 V114 M112 108 V114" class="il-ladder"/>
    <circle cx="66" cy="178" r="13" class="il-ink"/><circle cx="66" cy="178" r="5" class="il-card"/>
    <circle cx="120" cy="178" r="13" class="il-ink"/><circle cx="120" cy="178" r="5" class="il-card"/>
    <text x="80" y="156" text-anchor="middle" class="il-van">ON CALL</text>
    <g class="il-bubble" transform="translate(28 18)">
      <rect x="0" y="0" width="118" height="52" rx="12" class="il-card"/>
      <path d="M30 52 L24 64 L42 52 Z" class="il-card"/>
      <path d="M22 16 c4 6 10 10 10 18 a10 10 0 0 1-20 0 c0-5 4-8 6-12 c1 4 2 6 4 6 c0-4-2-8 0-12" class="il-flame"/>
      <text x="44" y="24" class="il-small">Burst pipe</text>
      <text x="44" y="40" class="il-smallok">Engineer called</text>
    </g>
  </svg></span>
          <span class="min-w-0">
            <span class="block font-display text-[21px] font-semibold leading-tight group-hover:text-hl">Plumbers and heating engineers</span>
            <span class="mt-1.5 block text-[15.5px] leading-snug text-muted">Emergencies sorted from routine jobs, call-outs booked and burst pipes put straight through to whoever is on call.</span>
            
            <span class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl">See plumbing and heating<svg class="icon !h-4 !w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></span>
          </span>
        </a>
      </li>
      <li>
        <a href="/contact?service=ai-voice-agents&amp;industry=car-dealerships" data-future-href="/ai-voice-agents/car-dealerships" data-track="sector_card_click" data-track-name="Car dealerships" class="sector-card group grid h-full items-center gap-4 rounded-[18px] border border-line bg-surface p-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 sm:p-5">
          <span class="block h-[150px] rounded-[12px] bg-paper p-2"><svg viewBox="0 0 200 150" class="h-full w-full" aria-hidden="true">
    <ellipse cx="96" cy="128" rx="80" ry="14.399999999999999" class="il-shadow"/>
    <path d="M22 108 V92 Q22 84 30 82 L52 78 L72 60 Q78 55 88 55 H128 Q138 55 144 62 L160 80 L172 84 Q178 86 178 94 V108 Z" class="il-gold"/>
    <path d="M78 64 H104 V80 H62 Z M110 64 H130 Q134 64 137 68 L146 80 H110 Z" class="il-win"/>
    <circle cx="58" cy="110" r="15" class="il-ink"/><circle cx="58" cy="110" r="6" class="il-card"/>
    <circle cx="144" cy="110" r="15" class="il-ink"/><circle cx="144" cy="110" r="6" class="il-card"/>
    <g class="il-bubble" transform="translate(12 8)">
    <rect x="0" y="0" width="54" height="38" rx="10" class="il-card"/>
    <path d="M14 38 L10 48 L24 38 Z" class="il-card"/>
    <circle cx="20" cy="19" r="7" class="il-goldline"/><path d="M27 19 H44 M38 19 V25 M43 19 V24" class="il-stroke"/>
  </g>
  </svg></span>
          <span class="min-w-0">
            <span class="block font-display text-[21px] font-semibold leading-tight group-hover:text-hl">Car dealerships</span>
            <span class="mt-1.5 block text-[15.5px] leading-snug text-muted">Test drives and service bookings taken in the morning rush, so the desk can look after the customer in front of them.</span>
            
            <span class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl">See car dealerships<svg class="icon !h-4 !w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></span>
          </span>
        </a>
      </li>
      <li>
        <a href="/contact?service=ai-voice-agents&amp;industry=contractors-builders" data-future-href="/ai-voice-agents/contractors-builders" data-track="sector_card_click" data-track-name="Contractors and builders" class="sector-card group grid h-full items-center gap-4 rounded-[18px] border border-line bg-surface p-4 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 sm:p-5">
          <span class="block h-[150px] rounded-[12px] bg-paper p-2"><svg viewBox="0 0 200 150" class="h-full w-full" aria-hidden="true">
    <ellipse cx="100" cy="132" rx="80" ry="14.399999999999999" class="il-shadow"/>
    <path d="M150 128 V22 M150 26 H58 M150 26 L134 42 M62 26 V48" class="il-ladder"/>
    <rect x="54" y="48" width="16" height="12" rx="2" class="il-gold"/>
    <rect x="36" y="78" width="96" height="50" class="il-wall"/>
    <rect x="40" y="82" width="20" height="11" rx="1.5" class="il-brick"/><rect x="63" y="82" width="20" height="11" rx="1.5" class="il-brick"/><rect x="86" y="82" width="20" height="11" rx="1.5" class="il-brick"/><rect x="109" y="82" width="20" height="11" rx="1.5" class="il-brick"/><rect x="51" y="97" width="20" height="11" rx="1.5" class="il-brick"/><rect x="74" y="97" width="20" height="11" rx="1.5" class="il-brick"/><rect x="97" y="97" width="20" height="11" rx="1.5" class="il-brick"/><rect x="120" y="97" width="10" height="11" rx="1.5" class="il-brick"/><rect x="40" y="112" width="20" height="11" rx="1.5" class="il-brick"/><rect x="63" y="112" width="20" height="11" rx="1.5" class="il-brick"/><rect x="86" y="112" width="20" height="11" rx="1.5" class="il-brick"/><rect x="109" y="112" width="20" height="11" rx="1.5" class="il-brick"/>
    <path d="M30 128 V70 M138 128 V70 M30 70 H138 M30 100 H138" class="il-scaffold"/>
    <path d="M8 128 h22 v-14 a11 11 0 0 1 22 0 v14" class="il-gold"/>
    <g class="il-bubble" transform="translate(140 52)">
    <rect x="0" y="0" width="54" height="38" rx="10" class="il-card"/>
    <path d="M14 38 L10 48 L24 38 Z" class="il-card"/>
    <rect x="10" y="9" width="22" height="20" rx="3" class="il-line"/><path d="M10 15 H32" class="il-stroke"/><circle cx="40" cy="19" r="9" class="il-ok"/><path d="M36 19 l3 3 l5 -6" class="il-tick"/>
  </g>
  </svg></span>
          <span class="min-w-0">
            <span class="block font-display text-[21px] font-semibold leading-tight group-hover:text-hl">Contractors and builders</span>
            <span class="mt-1.5 block text-[15.5px] leading-snug text-muted">Project enquiries taken properly while the team is on site, with site visits and quote appointments booked in.</span>
            
            <span class="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-[14px] font-semibold text-hl">See contractors and builders<svg class="icon !h-4 !w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></span>
          </span>
        </a>
      </li>
    </ul>

    <ul class="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 font-display text-[clamp(18px,16px+.6vw,24px)] font-semibold text-muted" aria-label="All industries we build voice agents for">
      <li class="flex items-center gap-4"><a href="#industries" class="hover:text-ink" data-track="sector_strip_click" data-track-name="Estate &amp; Letting Agents">Estate &amp; Letting Agents</a></li>
      <li class="flex items-center gap-4"><span class="text-gold" aria-hidden="true"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-plus-star"/></svg></span><a href="#industries" class="hover:text-ink" data-track="sector_strip_click" data-track-name="Dental Clinics">Dental Clinics</a></li>
      <li class="flex items-center gap-4"><span class="text-gold" aria-hidden="true"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-plus-star"/></svg></span><a href="#industries" class="hover:text-ink" data-track="sector_strip_click" data-track-name="Clinics &amp; Healthcare">Clinics &amp; Healthcare</a></li>
      <li class="flex items-center gap-4"><span class="text-gold" aria-hidden="true"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-plus-star"/></svg></span><a href="#industries" class="hover:text-ink" data-track="sector_strip_click" data-track-name="Plumbers">Plumbers</a></li>
      <li class="flex items-center gap-4"><span class="text-gold" aria-hidden="true"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-plus-star"/></svg></span><a href="#industries" class="hover:text-ink" data-track="sector_strip_click" data-track-name="Heating &amp; HVAC">Heating &amp; HVAC</a></li>
      <li class="flex items-center gap-4"><span class="text-gold" aria-hidden="true"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-plus-star"/></svg></span><a href="#industries" class="hover:text-ink" data-track="sector_strip_click" data-track-name="Contractors &amp; Builders">Contractors &amp; Builders</a></li>
      <li class="flex items-center gap-4"><span class="text-gold" aria-hidden="true"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-plus-star"/></svg></span><a href="#industries" class="hover:text-ink" data-track="sector_strip_click" data-track-name="Law Firms">Law Firms</a></li>
      <li class="flex items-center gap-4"><span class="text-gold" aria-hidden="true"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-plus-star"/></svg></span><a href="#industries" class="hover:text-ink" data-track="sector_strip_click" data-track-name="Car Dealerships">Car Dealerships</a></li>
    </ul>
  </div>
</section>

<section id="related" data-component="RelatedServices">
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 py-20 lg:py-28" data-related>
    <div class="mx-auto max-w-[46rem] text-center">
      <p class="eyebrow justify-center"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Related services</p>
      <h2>What makes the phone ring <span class="hl">in the first place</span></h2>
      <p class="mt-5 text-muted">Ads, local search and your website bring the calls. The voice agent makes sure every one of them is answered. We run all four, so the numbers join up in one report.</p>
    </div>

    <ul class="mt-12 grid gap-5 md:grid-cols-3">
      <li>
        <a href="/google-adwords-ppc" class="group flex h-full flex-col rounded-[16px] border border-line bg-surface p-3 transition-colors hover:border-gold focus-visible:border-gold" data-related-card="ads" data-track="related_service_click" data-track-name="Google Ads">
          <div class="grid place-items-center rounded-[12px] bg-sand p-5 md:min-h-[262px] lg:min-h-[214px] [&>*]:w-full" aria-hidden="true"><div class="rounded-[10px] bg-surface p-3.5 text-left shadow-[0_10px_24px_-18px_rgb(16_24_40/0.5)]">
          <p class="text-[12px] font-semibold">Sponsored</p>
          <p class="mt-0.5 text-[14.5px] font-semibold leading-snug text-[#1a4fb5] dark:text-[#9bbcff]">Emergency Plumber in Bristol, Call Now</p>
          <p class="mt-0.5 text-[12.5px] leading-snug text-muted">Burst pipes, leaks and boiler faults. Same-day call-outs.</p>
          <span class="mt-2 inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[12.5px] font-semibold"><svg class="icon !h-3.5 !w-3.5 text-hl" aria-hidden="true" focusable="false"><use href="#i-phone"/></svg>Call <span class="tnum">0117 496 0135</span></span>
        </div></div>
          <div class="flex flex-1 flex-col px-3 pb-3 pt-5">
            <h3 class="!text-[24px] group-hover:text-hl">Google Ads</h3>
            <p class="mt-2 text-[16.5px] leading-[1.5] text-muted">Paid search that puts your number in front of people ready to buy.</p>
            <span class="mt-auto inline-flex items-center gap-2 pt-5 font-display text-[16.5px] font-semibold">Explore Google Ads<span class="grid h-8 w-8 place-items-center rounded-full border border-[var(--va-line-strong)] transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-navy"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-arrow-up-right"/></svg></span></span>
          </div>
        </a>
      </li>
      <li>
        <a href="/local-seo" class="group flex h-full flex-col rounded-[16px] border border-line bg-surface p-3 transition-colors hover:border-gold focus-visible:border-gold" data-related-card="seo" data-track="related_service_click" data-track-name="Local SEO">
          <div class="grid place-items-center rounded-[12px] bg-sand p-5 md:min-h-[262px] lg:min-h-[214px] [&>*]:w-full" aria-hidden="true"><div class="rounded-[10px] bg-surface p-3.5 text-left shadow-[0_10px_24px_-18px_rgb(16_24_40/0.5)]">
          <div class="flex h-14 items-center justify-center rounded-[8px] bg-[var(--va-sea)]"><svg class="icon !h-7 !w-7 text-hl" aria-hidden="true" focusable="false"><use href="#i-map-pin"/></svg></div>
          <p class="mt-2.5 text-[14.5px] font-semibold leading-snug">Severn Plumbing</p>
          <p class="text-[12.5px] text-muted">Plumber in Bristol. <span class="font-semibold text-ok">Open 24 hours</span></p>
          <span class="mt-2 inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[12.5px] font-semibold"><svg class="icon !h-3.5 !w-3.5 text-hl" aria-hidden="true" focusable="false"><use href="#i-phone"/></svg>Call</span>
        </div></div>
          <div class="flex flex-1 flex-col px-3 pb-3 pt-5">
            <h3 class="!text-[24px] group-hover:text-hl">Local SEO</h3>
            <p class="mt-2 text-[16.5px] leading-[1.5] text-muted">Show up in the map results when people nearby search for what you do.</p>
            <span class="mt-auto inline-flex items-center gap-2 pt-5 font-display text-[16.5px] font-semibold">Explore Local SEO<span class="grid h-8 w-8 place-items-center rounded-full border border-[var(--va-line-strong)] transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-navy"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-arrow-up-right"/></svg></span></span>
          </div>
        </a>
      </li>
      <li>
        <a href="/website-designs" class="group flex h-full flex-col rounded-[16px] border border-line bg-surface p-3 transition-colors hover:border-gold focus-visible:border-gold" data-related-card="web" data-track="related_service_click" data-track-name="Website Design">
          <div class="grid place-items-center rounded-[12px] bg-sand p-5 md:min-h-[262px] lg:min-h-[214px] [&>*]:w-full" aria-hidden="true"><div class="overflow-hidden rounded-[10px] bg-surface text-left shadow-[0_10px_24px_-18px_rgb(16_24_40/0.5)]">
          <div class="flex gap-1 border-b border-line px-3 py-2"><i class="block h-2 w-2 rounded-full bg-ink/20"></i><i class="block h-2 w-2 rounded-full bg-ink/20"></i><i class="block h-2 w-2 rounded-full bg-ink/20"></i></div>
          <div class="p-3.5">
            <p class="text-[14.5px] font-semibold leading-snug">Leak? Call us now, day or night.</p>
            <span class="mt-1.5 block h-1.5 w-4/5 rounded-full bg-ink/10"></span>
            <span class="mt-1.5 block h-1.5 w-3/5 rounded-full bg-ink/10"></span>
            <span class="mt-3 flex items-center justify-center gap-1.5 rounded-[8px] bg-gold py-1.5 text-[12.5px] font-semibold text-navy"><svg class="icon !h-3.5 !w-3.5" aria-hidden="true" focusable="false"><use href="#i-phone"/></svg>Tap to call</span>
          </div>
        </div></div>
          <div class="flex flex-1 flex-col px-3 pb-3 pt-5">
            <h3 class="!text-[24px] group-hover:text-hl">Website Design</h3>
            <p class="mt-2 text-[16.5px] leading-[1.5] text-muted">A site that turns visitors into calls and bookings, with your number where people expect it.</p>
            <span class="mt-auto inline-flex items-center gap-2 pt-5 font-display text-[16.5px] font-semibold">Explore Website Design<span class="grid h-8 w-8 place-items-center rounded-full border border-[var(--va-line-strong)] transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-navy"><svg class="icon !h-4 !w-4" aria-hidden="true" focusable="false"><use href="#i-arrow-up-right"/></svg></span></span>
          </div>
        </a>
      </li>
    </ul>

        <svg viewBox="0 0 1200 110" preserveAspectRatio="none" class="hidden h-[90px] w-full md:block" aria-hidden="true" data-related-lines>
      <path class="rel-line" data-related-line="ads" d="M200 0 C200 60 600 40 600 104"/>
      <path class="rel-line" data-related-line="seo" d="M600 0 V104"/>
      <path class="rel-line" data-related-line="web" d="M1000 0 C1000 60 600 40 600 104"/>
    </svg>
    <div class="flex justify-center py-3 text-hl md:hidden" aria-hidden="true"><svg class="icon !h-7 !w-7" aria-hidden="true" focusable="false"><use href="#i-chevron-down"/></svg></div>

    <div class="on-band relative mx-auto flex max-w-[860px] flex-col items-center gap-5 rounded-[18px] bg-band p-6 text-center text-band-ink sm:flex-row sm:p-7 sm:text-left">
      <span class="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold text-navy" aria-hidden="true"><svg class="icon !h-7 !w-7" aria-hidden="true" focusable="false"><use href="#i-phone-incoming"/></svg></span>
      <div class="flex-1">
        <p class="text-[14px] font-semibold text-band-hl">You are here</p>
        <p class="font-display text-[22px] font-semibold leading-tight">AI voice agent: every one of those calls answered</p>
        <p class="mt-1 text-[15.5px] text-band-muted">Calls, bookings and transfers reported beside your ads, search and website results.</p>
      </div>
      <a href="/contact?service=ai-voice-agents&amp;bundle=1" class="btn btn-primary shrink-0" data-track="related_bundle">Ask about a joined-up plan</a>
    </div>
  </div>
</section>

<section id="book-demo" data-component="FinalCTA" class="on-band relative overflow-hidden bg-band text-band-ink">
  <div class="pointer-events-none absolute -left-40 bottom-[-200px] h-[560px] w-[560px] rounded-full bg-gold/15 blur-3xl" aria-hidden="true"></div>
  <div class="mx-auto w-full max-w-[1240px] px-5 sm:px-8 relative grid gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:py-28">
    <div>
      <p class="eyebrow eyebrow-band"><span class="eyebrow-mark" aria-hidden="true"><i></i><i></i><i></i></span>Book a demo</p>
      <h2>Hear a voice agent answer <span class="hl">as your business</span></h2>
      <p class="mt-5 max-w-[34rem] text-band-muted">Tell us about your calls and we'll show you what an agent would say to them. If it isn't right for you, we'll tell you.</p>

      <h3 class="mt-10 !text-[22px]">What happens next</h3>
      <ol class="relative mt-5 space-y-6 before:absolute before:bottom-6 before:left-[19px] before:top-6 before:w-[2px] before:bg-band-line">
        <li class="relative grid grid-cols-[40px_minmax(0,1fr)] gap-x-4">
          <span class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-gold text-navy font-display text-[16px] font-semibold tnum">1</span>
          <span>
            <span class="block text-[13.5px] font-semibold text-band-hl">Today</span>
            <span class="block font-display text-[19px] font-semibold leading-snug">We listen first</span>
            <span class="mt-1 block text-[16px] leading-snug text-band-muted">A 30-minute call about your phones: who rings, when, and what gets missed.</span>
          </span>
        </li>
        <li class="relative grid grid-cols-[40px_minmax(0,1fr)] gap-x-4">
          <span class="relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 border-band-line bg-band text-band-hl font-display text-[16px] font-semibold tnum">2</span>
          <span>
            <span class="block text-[13.5px] font-semibold text-band-hl">Within a few days</span>
            <span class="block font-display text-[19px] font-semibold leading-snug">You hear a demo</span>
            <span class="mt-1 block text-[16px] leading-snug text-band-muted">We set up a sample agent for your type of business so you can ring it yourself.</span>
          </span>
        </li>
        <li class="relative grid grid-cols-[40px_minmax(0,1fr)] gap-x-4">
          <span class="relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 border-band-line bg-band text-band-hl font-display text-[16px] font-semibold tnum">3</span>
          <span>
            <span class="block text-[13.5px] font-semibold text-band-hl">After the demo</span>
            <span class="block font-display text-[19px] font-semibold leading-snug">You get a clear proposal</span>
            <span class="mt-1 block text-[16px] leading-snug text-band-muted">Scope, timeline and price in writing. No pressure to go ahead.</span>
          </span>
        </li>
      </ol>

    </div>

    <div class="lg:pt-2">
      <div class="rounded-[20px] bg-surface p-6 text-ink shadow-[0_40px_90px_-40px_rgb(0_0_0/0.7)] dark:border dark:border-[var(--va-line-strong)] sm:p-8" data-demo>
        <form action="/contact" method="post" novalidate data-demo-form>
          <div aria-hidden="true" class="absolute left-[-9999px] h-px w-px overflow-hidden"><label>Leave this field empty <input type="text" name="hp" tabindex="-1" autocomplete="off" readonly></label></div>
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="!text-[26px]">Book your demo</h3>
              <p class="mt-1 text-[15.5px] text-muted">Takes a minute. We reply within one working day. <span class="flag">[CONFIRM]</span></p>
            </div>
            <span class="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/20 text-hl sm:grid" aria-hidden="true"><svg class="icon !h-6 !w-6" aria-hidden="true" focusable="false"><use href="#i-calendar"/></svg></span>
          </div>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
            <label for="demo-name" class="block text-[15px] font-semibold">Your name</label>
            <input id="demo-name" name="name" type="text" autocomplete="name" required class="field mt-1.5 !bg-paper" aria-describedby="demo-name-err" data-demo-field >
            <p id="demo-name-err" class="mt-1 text-[14px] font-semibold text-miss" data-demo-error hidden></p>
          </div>
            <div>
            <label for="demo-business" class="block text-[15px] font-semibold">Business name</label>
            <input id="demo-business" name="business" type="text" autocomplete="organization" required class="field mt-1.5 !bg-paper" aria-describedby="demo-business-err" data-demo-field >
            <p id="demo-business-err" class="mt-1 text-[14px] font-semibold text-miss" data-demo-error hidden></p>
          </div>
            <div>
              <label for="demo-industry" class="block text-[15px] font-semibold">Industry</label>
              <select id="demo-industry" name="industry" required class="field mt-1.5 !bg-paper" aria-describedby="demo-industry-err" data-demo-field>
                <option value="">Choose one</option>
                <option value="estate-letting-agents">Estate &amp; Letting Agents</option><option value="dental-clinics">Dental Clinics</option><option value="clinics-healthcare">Clinics &amp; Healthcare</option><option value="plumbers">Plumbers</option><option value="heating-hvac">Heating &amp; HVAC</option><option value="contractors-builders">Contractors &amp; Builders</option><option value="law-firms">Law Firms</option><option value="car-dealerships">Car Dealerships</option>
              </select>
              <p id="demo-industry-err" class="mt-1 text-[14px] font-semibold text-miss" data-demo-error hidden></p>
            </div>
            <div>
              <label for="demo-city" class="block text-[15px] font-semibold">Where you're based</label>
              <select id="demo-city" name="city" required class="field mt-1.5 !bg-paper" aria-describedby="demo-city-err" data-demo-field>
                <option value="">Choose one</option>
                <option value="london">London</option><option value="birmingham">Birmingham</option><option value="manchester">Manchester</option><option value="leeds">Leeds</option><option value="liverpool">Liverpool</option><option value="bristol">Bristol</option>
                <option value="elsewhere">Elsewhere in the UK</option>
              </select>
              <p id="demo-city-err" class="mt-1 text-[14px] font-semibold text-miss" data-demo-error hidden></p>
            </div>
            <div>
            <label for="demo-phone" class="block text-[15px] font-semibold">Phone</label>
            <input id="demo-phone" name="phone" type="tel" autocomplete="tel" required class="field mt-1.5 !bg-paper" aria-describedby="demo-phone-err" data-demo-field inputmode="tel">
            <p id="demo-phone-err" class="mt-1 text-[14px] font-semibold text-miss" data-demo-error hidden></p>
          </div>
            <div>
            <label for="demo-email" class="block text-[15px] font-semibold">Email</label>
            <input id="demo-email" name="email" type="email" autocomplete="email" required class="field mt-1.5 !bg-paper" aria-describedby="demo-email-err" data-demo-field >
            <p id="demo-email-err" class="mt-1 text-[14px] font-semibold text-miss" data-demo-error hidden></p>
          </div>
          </div>
          <label class="mt-5 flex items-start gap-3 text-[15px] leading-snug text-muted">
            <input type="checkbox" name="consent" required class="mt-1 h-5 w-5 shrink-0 accent-[#b97822]" aria-describedby="demo-consent-err" data-demo-field>
            <span>I'm happy for OMH to contact me about this demo. See our <a href="/privacy" class="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-2">privacy policy</a>.</span>
          </label>
          <p id="demo-consent-err" class="mt-1 text-[14px] font-semibold text-miss" data-demo-error hidden></p>
          <button type="submit" class="btn btn-primary mt-6 w-full" data-track="final_book_demo">Book a Voice Agent Demo<svg class="icon " aria-hidden="true" focusable="false"><use href="#i-arrow-right"/></svg></button>
          <p class="mt-3 text-center text-[14px] font-semibold text-miss" role="alert" data-demo-send-error hidden></p>
          <p class="mt-4 text-center text-[15px] text-muted">Prefer to write it all down? <a href="/contact?type=brief&amp;service=ai-voice-agents" class="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4" data-track="final_send_brief">Send a Project Brief</a></p>
        </form>
        <div class="py-6 text-center" data-demo-success hidden tabindex="-1">
          <span class="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ok text-surface" aria-hidden="true"><svg class="icon !h-8 !w-8" aria-hidden="true" focusable="false"><use href="#i-check"/></svg></span>
          <h3 class="mt-5 !text-[26px]" data-demo-success-title>Thanks, we've got it</h3>
          <p class="mx-auto mt-2 max-w-[24rem] text-[16.5px] text-muted">We'll be in touch within one working day to book your 30-minute call. In the meantime, ring our demo agent to hear one for yourself.</p>
          <a href="tel:" class="btn btn-secondary mt-6" data-demo-number data-track="final_success_demo_number"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-phone"/></svg>[DEMO NUMBER]</a>
        </div>
      </div>
      <p class="mt-4 text-center text-[14px] text-band-muted">No obligation. UK team based in Hullbridge, Essex.</p>
    </div>
  </div>
</section>

<div data-component="MobileStickyBar" data-sticky-bar class="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper px-4 pb-[max(.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_-18px_rgb(16_24_40/0.35)] md:hidden" inert>
  <div class="flex items-center gap-3">
    <a href="/contact?service=ai-voice-agents" class="btn btn-primary flex-1" data-track="sticky_book_demo">Book a Demo</a>
    <a href="tel:+442034893934" class="btn btn-secondary !px-0 w-[52px]" aria-label="Call OMH on 020 3489 3934" data-track="sticky_phone_click"><svg class="icon " aria-hidden="true" focusable="false"><use href="#i-phone"/></svg></a>
  </div>
</div>
`;
