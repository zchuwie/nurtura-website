import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "../helper/scroll";
import { getJsonLd } from "../helper/jsonLd";

const CONTACT_EMAIL = "lots.loamtechsolutions@gmail.com";
const CONTACT_SUBJECT = "Nurtura Inquiry";
const CONTACT_BODY = `Hello Nurtura Team,

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

const faqGroups: FaqGroup[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What is Nurtura?",
        answer:
          "Nurtura is a smart indoor farming system that uses IoT sensors and automation to help users grow plants in compact urban spaces.",
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
          "Use the Contact the Team button below to open a pre-filled Gmail draft directly to the Nurtura team.",
      },
      {
        question: "Will there be a full user manual?",
        answer:
          "Yes. A full setup and troubleshooting manual is planned and this FAQ page acts as the quick reference in the meantime.",
      },
    ],
  },
];

export default function Faq() {
  const [openItem, setOpenItem] = useState<string>("0-0");
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    CONTACT_EMAIL,
  )}&su=${encodeURIComponent(CONTACT_SUBJECT)}&body=${encodeURIComponent(CONTACT_BODY)}`;

  const jsonLd = getJsonLd({
    type: "FAQPage",
    name: "Nurtura FAQ",
    description:
      "Answers to common questions about Nurtura setup, automation, app access, and support.",
    url: "https://nurturaloam.tech/faq",
    image: "https://nurturaloam.tech/Logo.png",
    publisher: { name: "Nurtura" },
  });

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
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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

          <div className="space-y-8">
            {faqGroups.map((group, groupIndex) => (
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
                              {item.question}
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
                              <p className="px-4 sm:px-5 pb-4 text-sm text-[#5f5f5f] leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
