import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "../helper/scroll";
import { getJsonLd } from "../helper/jsonLd";

const CONTACT_EMAIL = "lots.loamtechsolutions@gmail.com";
const CONTACT_SUBJECT = "Nurtura Inquiry";
const CONTACT_BODY = `Hello LoamTech Solutions Team,

I would like to ask about:
- Topic:
- Current setup/location: 
- Preferred contact method:
- Details:

Name:
Organization (optional):
Contact number (optional):

Thank you.`;

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqGroup {
  title: string;
  items: FaqItem[];
}

interface ErrorMeaning {
  code: string;
  meaning: string;
  behavior: string;
}

const ERROR_CODE_TABLE_QUESTION = "What do the device error codes mean?";

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const faqGroups: FaqGroup[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What is Nurtura?",
        answer:
          "Nurtura is an automated indoor farming system that uses IoT sensors and automation to help users grow plants in compact urban spaces.",
      },
      {
        question: "Who is Nurtura for?",
        answer:
          "Nurtura is designed for students, families, hobby growers, and urban users who want a practical way to grow food at home.",
      },
      {
        question: "How do I start using the system?",
        answer:
          "Set up the hardware rack, connect the IoT module to your network, then pair it with the mobile app to begin monitoring and control.",
      },
      {
        question: "Can I install or service the hub sensors by myself?",
        answer:
          "At the moment, no. The hub sensor setup is advanced and is currently installed, calibrated, and serviced only by LoamTech Solutions to ensure safety and reliability.",
      },
    ],
  },
  {
    title: "System and Automation",
    items: [
      {
        question: "What can Nurtura monitor?",
        answer:
          "Nurtura monitors key environmental values such as temperature, humidity, soil moisture, light levels, and water flow depending on your setup.",
      },
      {
        question: "Does it automate watering and lighting?",
        answer:
          "Yes. The system can trigger watering and lighting rules based on real-time sensor values so plant care becomes more consistent.",
      },
      {
        question: "Can I still control it manually?",
        answer:
          "Not anymore. The system would handle all the watering and lighting based on the rules you set up.",
      },
    ],
  },
  {
    title: "Connectivity and Data",
    items: [
      {
        question: "How does Nurtura communicate with my device?",
        answer:
          "Nurtura sends updates between your rack and app in real time, so readings and actions stay in sync.",
      },
      {
        question: "Is the connection secure?",
        answer:
          "Yes. Your device connection is protected and requires account credentials.",
      },
      {
        question: "What sensor data is sent to the app?",
        answer:
          "The system sends temperature, humidity, soil moisture, and light readings. Water usage may also be included when watering events occur.",
      },
      {
        question: "How reliable are command and sensor messages?",
        answer:
          "Nurtura is designed so updates and controls are delivered reliably, even if the network is unstable for a short time.",
      },
      {
        question: "What happens if the backend goes offline?",
        answer:
          "If the service is temporarily unavailable, the app and device detect it and reconnect when service returns.",
      },
      {
        question: "Where can I check the meaning of device error codes?",
        answer:
          "Open the device error code question below to view the full error meaning table and what each code usually does.",
      },
      {
        question: "What do CRITICAL, HIGH, MEDIUM, and LOW severities mean?",
        answer:
          "CRITICAL means immediate action is required and related automation may pause. HIGH means functionality is impaired and should be checked soon. MEDIUM means performance is degraded and should be monitored. LOW is informational or recovery state with no immediate action needed.",
      },
      {
        question: "What information is included in an error report?",
        answer:
          "An error report can include an error code, plain-language message, severity level, time of issue, affected part, and extra diagnostic details.",
      },
      {
        question: ERROR_CODE_TABLE_QUESTION,
        answer:
          "Here is the complete error and recovery code reference used by Nurtura, including what each code means and what usually happens.",
      },
    ],
  },
  {
    title: "App and Support",
    items: [
      {
        question: "Can I check my farm remotely?",
        answer:
          "Yes. The mobile app is designed to provide updates and controls so you can monitor your system even when away from home.",
      },
      {
        question: "Where can I report issues or ask for help?",
        answer:
          "Use the Contact the Team button below to open a pre-filled Gmail draft directly to LoamTech Solutions.",
      },
      {
        question: "Will there be a full user manual?",
        answer:
          "Yes. A full setup and troubleshooting manual is planned and this FAQ page acts as the quick reference in the meantime.",
      },
    ],
  },
];

const errorMeanings: ErrorMeaning[] = [
  {
    code: "SENSOR_FAILURE",
    meaning: "A sensor is not responding correctly.",
    behavior:
      "Usually HIGH/CRITICAL. Related automatic actions may pause and you may receive an alert.",
  },
  {
    code: "SENSOR_TIMEOUT",
    meaning: "Sensor did not respond in time.",
    behavior:
      "Usually MEDIUM/HIGH. The current reading may be skipped and retried automatically.",
  },
  {
    code: "SENSOR_NOT_FOUND",
    meaning: "Expected sensor hardware was not detected.",
    behavior:
      "Usually HIGH/CRITICAL. Related measurements remain unavailable until fixed.",
  },
  {
    code: "SENSOR_OUT_OF_RANGE",
    meaning: "Sensor reported a value outside normal limits.",
    behavior:
      "Usually MEDIUM. Reading may be flagged to avoid unsafe automation decisions.",
  },
  {
    code: "PUMP_FAILURE",
    meaning: "Pump did not operate as expected.",
    behavior:
      "Usually HIGH/CRITICAL. Watering may fail and related automatic actions may pause.",
  },
  {
    code: "PUMP_TIMEOUT",
    meaning: "Pump action took too long.",
    behavior:
      "Usually MEDIUM/HIGH. Process may be stopped to prevent hardware damage.",
  },
  {
    code: "PUMP_NO_WATER",
    meaning: "Pump cannot draw water from source.",
    behavior:
      "Usually HIGH. Watering stops and refill or plumbing checks are needed.",
  },
  {
    code: "PUMP_FALSE_START",
    meaning: "Pump was commanded to start but no valid activity was detected.",
    behavior:
      "Usually MEDIUM/HIGH. Action may be cancelled and diagnostics logged.",
  },
  {
    code: "LIGHT_FAILURE",
    meaning: "Grow light did not respond as expected.",
    behavior:
      "Usually HIGH. Lighting control can fail and warning notifications can be sent.",
  },
  {
    code: "UNKNOWN_ERROR",
    meaning: "Unexpected device-side issue.",
    behavior:
      "Severity varies. The system records details and may trigger alerts based on impact.",
  },
  {
    code: "SENSOR_RECOVERED",
    meaning: "A previous sensor issue has been resolved.",
    behavior:
      "Usually LOW. Related automations can be resumed after confirmation.",
  },
  {
    code: "PUMP_RECOVERED",
    meaning: "A previous pump issue has been resolved.",
    behavior: "Usually LOW. Pump-related automations can safely resume.",
  },
  {
    code: "LIGHT_RECOVERED",
    meaning: "A previous lighting issue has been resolved.",
    behavior: "Usually LOW. Lighting controls can return to normal operation.",
  },
  {
    code: "UNKNOWN_RECOVERY",
    meaning: "A previously unknown issue was reported as recovered.",
    behavior:
      "Usually LOW. The issue is marked resolved and normal monitoring continues.",
  },
];

export default function Faq() {
  const [openItem, setOpenItem] = useState<string>("0-0");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    CONTACT_EMAIL,
  )}&su=${encodeURIComponent(CONTACT_SUBJECT)}&body=${encodeURIComponent(CONTACT_BODY)}`;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const highlightMatch = (text: string) => {
    const query = searchQuery.trim();
    if (!query) return text;

    const pattern = new RegExp(`(${escapeRegex(query)})`, "ig");
    const parts = text.split(pattern);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={`${part}-${index}`}
          className="bg-[#86975A]/30 text-[#1f2a12] font-semibold rounded px-0.5"
        >
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  const filteredFaqGroups = faqGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        if (!normalizedQuery) return true;
        const isErrorTableItem = item.question === ERROR_CODE_TABLE_QUESTION;
        const errorTableText = isErrorTableItem
          ? errorMeanings
              .map(
                (entry) => `${entry.code} ${entry.meaning} ${entry.behavior}`,
              )
              .join(" ")
              .toLowerCase()
          : "";

        return (
          item.question.toLowerCase().includes(normalizedQuery) ||
          item.answer.toLowerCase().includes(normalizedQuery) ||
          errorTableText.includes(normalizedQuery)
        );
      }),
    }))
    .filter((group) => group.items.length > 0);

  const jsonLd = getJsonLd({
    type: "FAQPage",
    name: "Nurtura FAQ",
    description:
      "Answers to common questions about Nurtura setup, automation, app access, and support.",
    url: "https://nurturaloam.tech/faq",
    image: "https://nurturaloam.tech/Logo.png",
    publisher: { name: "Nurtura" },
  });

  const faqJsonLd = {
    ...jsonLd,
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };

  return (
    <>
      <Helmet>
        <title>Nurtura FAQ | Common Questions</title>
        <meta
          name="description"
          content="Answers to common questions about Nurtura setup, automation, app access, and support."
        />
        <meta
          name="keywords"
          content="Nurtura FAQ, indoor farming questions, smart farming support, IoT farming help"
        />
        <meta property="og:title" content="Nurtura FAQ | Common Questions" />
        <meta
          property="og:description"
          content="Answers to common questions about Nurtura setup, automation, app access, and support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nurturaloam.tech/faq" />
        <meta property="og:image" content="https://nurturaloam.tech/Logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nurtura FAQ | Common Questions" />
        <meta
          name="twitter:description"
          content="Answers to common questions about Nurtura setup, automation, app access, and support."
        />
        <meta
          name="twitter:image"
          content="https://nurturaloam.tech/Logo.png"
        />
        <link rel="canonical" href="https://nurturaloam.tech/faq" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
          <ScrollReveal direction="up" className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#86975A] mb-3">
              FAQ
            </p>
            <h1 className="text-4xl sm:text-6xl font-black text-[#282828] mb-4">
              User Manual and Common Questions
            </h1>
            <p className="text-sm sm:text-base text-[#919191] max-w-2xl mx-auto leading-relaxed">
              Quick answers for setup, usage, automation, and support. Expand
              any item below to view details.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.05}>
            <div className="mb-8 sm:mb-10">
              <label htmlFor="faq-search" className="sr-only">
                Search frequently asked questions
              </label>
              <input
                id="faq-search"
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search questions or answers..."
                className="w-full rounded-xl border border-[#86975A]/30 bg-white px-4 py-3 text-sm sm:text-base text-[#282828] outline-none focus:border-[#86975A] focus:ring-2 focus:ring-[#86975A]/20"
              />
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {filteredFaqGroups.map((group, groupIndex) => (
              <ScrollReveal key={group.title} direction="up" delay={0.1}>
                <div className="bg-[#E5EDCF] rounded-2xl p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-black text-[#282828] mb-4 sm:mb-5">
                    {group.title}
                  </h2>

                  <div className="space-y-3">
                    {group.items.map((item, itemIndex) => {
                      const itemId = `${groupIndex}-${itemIndex}`;
                      const isOpen = openItem === itemId;

                      return (
                        <div
                          key={item.question}
                          className="rounded-xl bg-[#F9FAFB] border border-[#86975A]/20 overflow-hidden"
                        >
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            className="w-full px-4 sm:px-5 py-4 text-left flex items-center justify-between gap-4"
                            onClick={() =>
                              setOpenItem((prev) =>
                                prev === itemId ? "" : itemId,
                              )
                            }
                          >
                            <span className="text-sm sm:text-base font-semibold text-[#282828]">
                              {highlightMatch(item.question)}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 shrink-0 text-[#86975A] transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <div
                            className={`grid transition-all duration-300 ease-out ${
                              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                          >
                            <div className="overflow-hidden">
                              {item.question === ERROR_CODE_TABLE_QUESTION ? (
                                <div className="px-4 sm:px-5 pb-4">
                                  <div className="sm:hidden space-y-3">
                                    {errorMeanings.map((row) => (
                                      <div
                                        key={row.code}
                                        className="rounded-xl border border-[#86975A]/25 bg-white p-3"
                                      >
                                        <p className="text-[11px] uppercase tracking-wide text-[#7d8a5a] font-semibold">
                                          Code
                                        </p>
                                        <p className="mt-1 text-sm font-bold text-[#282828] wrap-break-word">
                                          {highlightMatch(row.code)}
                                        </p>
                                        <p className="mt-3 text-[11px] uppercase tracking-wide text-[#7d8a5a] font-semibold">
                                          Meaning
                                        </p>
                                        <p className="mt-1 text-sm text-[#5f5f5f] leading-relaxed">
                                          {highlightMatch(row.meaning)}
                                        </p>
                                        <p className="mt-3 text-[11px] uppercase tracking-wide text-[#7d8a5a] font-semibold">
                                          What Happens
                                        </p>
                                        <p className="mt-1 text-sm text-[#5f5f5f] leading-relaxed">
                                          {highlightMatch(row.behavior)}
                                        </p>
                                        <p className="mt-3 text-[11px] uppercase tracking-wide text-[#7d8a5a] font-semibold">
                                          Status
                                        </p>
                                        <p className="mt-1 text-sm text-[#5f5f5f] leading-relaxed">
                                          Reference only
                                        </p>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="hidden sm:block overflow-x-auto">
                                    <table className="w-full min-w-160 border-collapse rounded-xl overflow-hidden">
                                      <thead>
                                        <tr className="border-b border-[#86975A]/30">
                                          <th className="text-left text-xs sm:text-sm font-bold text-[#282828] py-3 px-3">
                                            Code
                                          </th>
                                          <th className="text-left text-xs sm:text-sm font-bold text-[#282828] py-3 px-3">
                                            Meaning
                                          </th>
                                          <th className="text-left text-xs sm:text-sm font-bold text-[#282828] py-3 px-3">
                                            What Happens
                                          </th>
                                          <th className="text-left text-xs sm:text-sm font-bold text-[#282828] py-3 px-3">
                                            Status
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {errorMeanings.map((row) => (
                                          <tr
                                            key={row.code}
                                            className="border-b border-[#86975A]/15 last:border-b-0"
                                          >
                                            <td className="py-3 px-3 text-xs sm:text-sm font-semibold text-[#282828]">
                                              {highlightMatch(row.code)}
                                            </td>
                                            <td className="py-3 px-3 text-xs sm:text-sm text-[#5f5f5f]">
                                              {highlightMatch(row.meaning)}
                                            </td>
                                            <td className="py-3 px-3 text-xs sm:text-sm text-[#5f5f5f]">
                                              {highlightMatch(row.behavior)}
                                            </td>
                                            <td className="py-3 px-3 text-xs sm:text-sm text-[#5f5f5f]">
                                              Reference only
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              ) : (
                                <p className="px-4 sm:px-5 pb-4 text-sm text-[#5f5f5f] leading-relaxed">
                                  {highlightMatch(item.answer)}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {filteredFaqGroups.length === 0 && (
              <div className="rounded-2xl border border-[#86975A]/20 bg-[#E5EDCF] p-6 text-center">
                <p className="text-sm sm:text-base text-[#5f5f5f]">
                  No FAQ matches your search yet. Try a different keyword.
                </p>
              </div>
            )}
          </div>

          <ScrollReveal direction="up" delay={0.15}>
            <div className="mt-10 sm:mt-12 rounded-2xl bg-[#282828] p-6 sm:p-8 text-center">
              <p className="text-[#E5EDCF] text-sm sm:text-base mb-4">
                Did not find what you need?
              </p>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 min-h-11 text-sm font-semibold bg-[#86975A] text-white hover:bg-[#6e7d48] transition-colors"
              >
                Contact the Team
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
