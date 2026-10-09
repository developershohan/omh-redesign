import type { Metadata } from "next";
import { VoiceAgentsScript } from "@/components/voice-agents/VoiceAgentsScript";
import { voiceAgentsMarkup } from "@/lib/content/ai-voice-agents-markup";
import { JsonLd, SITE, faqSchema } from "@/lib/schema";

const path = "/ai-voice-agents";

export const metadata: Metadata = {
  title: { absolute: "AI Voice Agents & AI Receptionist for UK Businesses | London, Manchester & More | OMH" },
  description:
    "AI voice agents that answer calls, book appointments and follow up day and night. Built and managed by OMH for UK service businesses in London, Manchester and more.",
  alternates: { canonical: `${SITE}${path}/` },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Online Marketing Help",
    title: "AI Voice Agents & AI Receptionist for UK Businesses | OMH",
    description: "An AI receptionist that answers, books and follows up, day and night. Built, tested and managed by a UK team.",
    url: `${SITE}${path}/`,
  },
};

// The questions the page's FAQ section shows, word for word (brief §25).
const faqs = [
  ["Will callers know they are talking to an AI?",
    "Yes. We set every agent up to say it is an AI assistant at the start of the call. Callers deserve to know, and it avoids awkward moments later in the conversation."],
  ["Can the agent transfer a call to a real person?",
    "Yes. You set the rules. Emergencies, existing clients, complaints and anyone who asks for a person can be put through to the right phone. Outside your opening hours the agent takes a detailed message and sends it to your team."],
  ["Which calendars and systems does it work with?",
    "The agent needs somewhere to put bookings and call notes, usually your calendar and your CRM or practice system. We check your exact tools during discovery and tell you plainly what connects directly, what needs a workaround and what is not possible yet."],
  ["Can we keep our existing phone number, or get a local one?",
    "In most cases you keep your number and divert calls to the agent, either all of them or only the ones your team cannot answer. If you want a new local number, for example an 0161 number for Manchester, we can arrange one as part of setup."],
  ["Are calls recorded, and how does that fit with UK GDPR?",
    "Calls can be recorded and transcribed so you can review them, and callers are told at the start of the call. You remain the data controller and OMH acts as your processor under a written agreement. We agree retention periods with you and delete recordings on that schedule."],
  ["What are the rules for outbound calls?",
    "The agent only calls people who have given appropriate consent, such as customers who asked for a reminder or a call back. We follow the UK PECR rules, screen lists against the Telephone Preference Service where required and act on opt-outs straight away. We do not run cold calling campaigns to bought or non-consented lists."],
  ["Is it suitable for dental clinics and healthcare providers?",
    "Yes, for bookings, routing and practical questions such as opening hours, fees and directions. The agent never gives clinical or medical advice. Anything clinical goes to your team, and urgent calls follow the emergency route you set."],
  ["Is it suitable for law firms?",
    "Yes, for taking new enquiries, booking consultations and routing existing clients. The agent never gives legal advice and does not comment on the merits of a matter. It collects the details and gets the caller to the right person."],
  ["We are not in one of your six cities. Can we still work with you?",
    "Yes. We are based in Hullbridge, Essex and work with businesses across the UK remotely. London, Birmingham, Manchester, Leeds, Liverpool and Bristol are where we focus our voice agent work at the moment."],
  ["How long does setup take?",
    "It depends on how many types of call you have and what the agent needs to connect to. A simple booking agent is quicker than one covering several departments. We give you a realistic timeline after the discovery call, before you commit to anything."],
  ["What happens when the agent does not know the answer?",
    "It says so. The agent answers only from information you have approved, so when a question falls outside that, it offers to take a message or transfer the call. We review those moments every month and add the answers worth adding."],
  ["Is there a minimum contract?",
    "We set out the terms in writing before you start, including the notice period, what is included each month and what counts as extra. There are no hidden usage fees. Every invoice shows your included minutes and any overage."],
] as const;

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Voice Agents",
  serviceType: "AI voice agent and AI receptionist setup and management",
  description:
    "Managed AI voice agents that answer calls, book appointments and follow up with consenting contacts for UK service businesses.",
  provider: { "@id": `${SITE}/#organisation` },
  areaServed: ["London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Bristol"].map((name) => ({ "@type": "City", name })),
  url: `${SITE}${path}/`,
};

export default function AiVoiceAgentsPage() {
  return (
    <>
      <JsonLd data={[service, faqSchema(faqs)]} />
      <div id="va-page" className="va-page" dangerouslySetInnerHTML={{ __html: voiceAgentsMarkup }} />
      <VoiceAgentsScript />
    </>
  );
}
