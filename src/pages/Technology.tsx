import { Helmet } from "react-helmet-async";
import { getJsonLd } from "../helper/jsonLd";
// ...existing code...
import ScrollReveal from "../helper/scroll";
// Colors: primary #86975A | bg #F9FAFB | black #282828 | gray #919191 | secondary #E5EDCF

interface TechCard {
  name: string;
  desc: string;
  icon: string;
  detail: string;
}
interface FlowStep {
  label: string;
  detail: string;
}

const techStack: TechCard[] = [
  {
    name: "IoT Device Layer",
    desc: "ESP32 + sensor network",
    icon: "📡",
    detail:
      "Collects temperature, humidity, light, soil moisture, and water-flow data while controlling pump and grow light actuators.",
  },
  {
    name: "Backend Services",
    desc: "NestJS + event processing",
    icon: "☁️",
    detail:
      "Processes telemetry, applies plant care rules, and exposes business logic through structured service layers.",
  },
  {
    name: "Data Layer",
    desc: "PostgreSQL + Prisma ORM",
    icon: "🗄️",
    detail:
      "Stores relational data with type-safe queries and reliable persistence for users, racks, and sensor history.",
  },
  {
    name: "Client Layer",
    desc: "React Native + Expo app",
    icon: "📱",
    detail:
      "Provides monitoring, control, and real-time updates through WebSocket-connected mobile interfaces.",
  },
];

const flowSteps: FlowStep[] = [
  {
    label: "Sensors",
    detail: "ESP32 reads environmental and water metrics from the farm setup.",
  },
  {
    label: "MQTT Broker",
    detail:
      "Telemetry is published through HiveMQ using an event-driven pub/sub pattern.",
  },
  {
    label: "NestJS Core",
    detail:
      "Backend services validate, process, and map data to automation decisions.",
  },
  {
    label: "User App",
    detail:
      "WebSocket updates push fresh readings and system states to the frontend.",
  },
];

export default function Technology() {
  const jsonLd = getJsonLd({
    type: "WebPage",
    name: "Nurtura Technology",
    description:
      "Explore the technology behind Nurtura's automated indoor farming system, including IoT, cloud, and automation.",
    url: "https://nurturaloam.tech/technology",
    image: "https://nurturaloam.tech/Logo.png",
    publisher: { name: "Nurtura" },
  });
  return (
    <>
      <Helmet>
        <title>Nurtura Technology | Smart Farming Tech</title>
        <meta
          name="description"
          content="Explore the technology behind Nurtura's automated indoor farming system, including IoT, cloud, and automation."
        />
        <meta
          name="keywords"
          content="Nurtura, technology, IoT, cloud, automation, smart farming, innovation"
        />
        <meta
          property="og:title"
          content="Nurtura Technology | Smart Farming Tech"
        />
        <meta
          property="og:description"
          content="Explore the technology behind Nurtura's automated indoor farming system, including IoT, cloud, and automation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nurturaloam.tech/technology" />
        <meta property="og:image" content="https://nurturaloam.tech/Logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nurtura Technology | Smart Farming Tech"
        />
        <meta
          name="twitter:description"
          content="Explore the technology behind Nurtura's automated indoor farming system, including IoT, cloud, and automation."
        />
        <meta
          name="twitter:image"
          content="https://nurturaloam.tech/Logo.png"
        />
        <link rel="canonical" href="https://nurturaloam.tech/technology" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      {/* ── Page Header — full height ───────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
          <ScrollReveal direction="left">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#86975A] mb-3">
              Technology
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#282828] mb-10 sm:mb-16">
              Our Technology.
            </h1>
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            delay={0.15}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center"
          >
            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-6">
                  The <span className="text-[#86975A]">Technology</span>
                </h2>
                <p className="text-sm text-[#919191] leading-relaxed mb-4">
                  Nurtura follows a hybrid architecture: event-driven messaging
                  for real-time IoT communication and layered services for
                  maintainable application logic.
                </p>
                <p className="text-sm text-[#919191] leading-relaxed">
                  MQTT handles asynchronous sensor and actuator communication,
                  while the layered backend separates presentation, business
                  logic, data access, and persistence for clean scaling.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-[#282828] rounded-3xl aspect-square flex flex-col items-center justify-center p-8 text-center">
                <div className="text-5xl mb-4">🔬</div>
                <p className="text-sm font-semibold text-white">
                  Hybrid Architecture
                </p>
                <p className="text-xs text-[#919191] mt-1">
                  Event-driven IoT messaging + layered backend services
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Tech Stack — full height ────────────────────────── */}
      <section className="min-h-max bg-[#E5EDCF] flex items-center">
        <ScrollReveal
          direction="left"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20"
        >
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-14 text-center">
              The Stack
            </h2>
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            delay={0.15}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {techStack.map((tech, i) => (
              <ScrollReveal direction="left" key={tech.name}>
                <div
                  id={`tech-${i}`}
                  className="bg-[#F9FAFB] rounded-2xl p-6 flex flex-col gap-3"
                >
                  <div className="text-3xl">{tech.icon}</div>
                  <h3 className="font-bold text-[#282828]">{tech.name}</h3>
                  <p className="text-xs text-[#86975A] font-medium">
                    {tech.desc}
                  </p>
                  <p className="text-xs text-[#919191] leading-relaxed">
                    {tech.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </section>

      {/* ── Data Flow — full height ─────────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <ScrollReveal
          direction="left"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20"
        >
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-4 text-center">
              How the Data Flows
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.15}>
            <p className="text-center text-sm text-[#919191] mb-16 max-w-md mx-auto">
              Real-time telemetry flows from hardware to cloud services and then
              to users for immediate monitoring and action.
            </p>
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            delay={0.25}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
          >
            {flowSteps.map((step, i) => (
              <ScrollReveal
                direction="left"
                key={step.label}
                className="w-full sm:w-auto"
              >
                <div className="flex flex-col items-center gap-2 px-5 py-7 bg-[#E5EDCF] rounded-2xl w-full max-w-none sm:max-w-none sm:min-w-60 text-center">
                  <div className="w-10 h-10 bg-[#86975A] rounded-full flex items-center justify-center text-white font-black text-sm">
                    {i + 1}
                  </div>
                  <p className="text-xs font-bold text-[#282828]">
                    {step.label}
                  </p>
                  <p className="text-[10px] text-[#919191]">{step.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </section>

      {/* ── Research CTA — full height ──────────────────────── */}
      <section className="min-h-max bg-[#86975A] flex items-center">
        <ScrollReveal
          direction="left"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20 text-center"
        >
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Built on Research
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.15}>
            <p className="text-[#E5EDCF] text-sm mb-8 max-w-lg mx-auto leading-relaxed">
              Nurtura is built through iterative sprint-based development,
              continuous integration, and staged unit, integration, and UAT
              validation.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.25}>
            <a
              href="#"
              className="px-7 py-3 bg-[#282828] text-white text-sm font-bold rounded-full hover:bg-[#3a3a3a] transition-all"
            >
              View Development Plan
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
