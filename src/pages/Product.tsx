import { Helmet } from "react-helmet-async";
import { getJsonLd } from "../helper/jsonLd";
import ScrollReveal from "../helper/scroll";
import nurturaMobile from "../assets/nurtura-mobile-1.png";

interface FeaturePlaceholder {
  icon: string;
  title: string;
  desc: string;
}

interface ProcessStep {
  title: string;
  desc: string;
}

const features: FeaturePlaceholder[] = [
  {
    icon: "📡",
    title: "Real-Time Monitoring",
    desc: "Track temperature, humidity, light, soil moisture, and water flow in real time.",
  },
  {
    icon: "🌱",
    title: "Automated Plant Care",
    desc: "Automate watering and lighting based on live sensor conditions and rules.",
  },
  {
    icon: "💧",
    title: "Resource Optimization",
    desc: "Reduce waste through sensor-driven decisions for irrigation and energy use.",
  },
  {
    icon: "🔔",
    title: "Mobile Visibility",
    desc: "Receive updates from your farm system through a responsive mobile interface.",
  },
];

const steps: ProcessStep[] = [
  {
    title: "Set Up and Pair",
    desc: "Configure your rack and connect the system to IoT hardware and network services.",
  },
  {
    title: "Monitor and Automate",
    desc: "Sensor streams are processed in real time to trigger lighting and watering actions.",
  },
  {
    title: "Validate and Improve",
    desc: "Use system feedback and QA testing results to maintain reliable, healthy crop cycles.",
  },
];

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

export default function Product() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    CONTACT_EMAIL,
  )}&su=${encodeURIComponent(CONTACT_SUBJECT)}&body=${encodeURIComponent(CONTACT_BODY)}`;
  const jsonLd = getJsonLd({
    type: "Product",
    name: "Nurtura Smart Farming System",
    description:
      "Nurtura is an IoT-powered indoor farming system designed for urban environments.",
    url: "https://nurturaloam.tech/product",
    image: "https://nurturaloam.tech/og-image.jpg",
    publisher: { name: "Nurtura" },
  });
  // Add brand manually since it's not generic
  jsonLd.brand = { "@type": "Brand", name: "Nurtura" };
  return (
    <>
      <Helmet>
        <title>Nurtura Product | Smart Indoor Farming</title>
        <meta
          name="description"
          content="Nurtura is an IoT-powered indoor farming system designed for urban environments."
        />
        <meta
          name="keywords"
          content="Nurtura, smart farming, IoT, product, indoor farming, automation, agriculture, technology"
        />
        <meta
          property="og:title"
          content="Nurtura Product | Smart Indoor Farming"
        />
        <meta
          property="og:description"
          content="Nurtura is an IoT-powered indoor farming system designed for urban environments."
        />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://nurturaloam.tech/product" />
        <meta
          property="og:image"
          content="https://nurturaloam.tech/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nurtura Product | Smart Indoor Farming"
        />
        <meta
          name="twitter:description"
          content="Nurtura is an IoT-powered indoor farming system designed for urban environments."
        />
        <meta
          name="twitter:image"
          content="https://nurturaloam.tech/og-image.jpg"
        />
        <link rel="canonical" href="https://nurturaloam.tech/product" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      {/* ── Page Header — full height ───────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
          <ScrollReveal direction="left">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#86975A] mb-3">
              Product
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#282828] mb-10 sm:mb-16">
              Our Solution.
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
                  Meet <span className="text-[#86975A]">Nurtura</span>
                </h2>
                <p className="text-sm text-[#919191] leading-relaxed mb-4">
                  Nurtura is an IoT-based smart indoor farming system built for
                  dense urban spaces. It combines real-time sensing and
                  automation to reduce manual labor while improving crop
                  consistency.
                </p>
                <p className="text-sm text-[#919191] leading-relaxed">
                  The system architecture supports end-to-end connectivity from
                  ESP32 hardware to cloud backend services and mobile frontend
                  visibility, enabling users to monitor plant conditions and
                  automate care in near real time.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3}>
              <div className="aspect-square flex flex-col items-center justify-center text-center">
                <img
                  src={nurturaMobile}
                  alt="Nurtura Mobile"
                  className="max-w-55 sm:max-w-full"
                />
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Key Features — full height ──────────────────────── */}
      <section className="min-h-max bg-[#E5EDCF] flex items-center">
        <ScrollReveal
          direction="left"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20"
        >
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-14 text-center">
              Key Features
            </h2>
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            delay={0.15}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, i) => (
              <ScrollReveal direction="left" key={feature.title}>
                <div
                  id={`feature-${i}`}
                  className="bg-[#F9FAFB] rounded-2xl p-6 flex flex-col gap-3"
                >
                  <div className="w-11 h-11 bg-[#E5EDCF] rounded-xl flex items-center justify-center text-xl">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-[#282828] text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#919191] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </section>

      {/* ── How It Works — full height ──────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <ScrollReveal
          direction="left"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20"
        >
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-4 text-center">
              How It Works
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.15}>
            <p className="text-center text-sm text-[#919191] mb-16 max-w-md mx-auto">
              Describe the overall process — from setup to harvest. Keep it
              simple and benefit-focused.
            </p>
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            delay={0.25}
            className="grid grid-cols-1 sm:grid-cols-3 gap-10"
          >
            {steps.map((step, i) => (
              <ScrollReveal direction="left" key={step.title}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 bg-[#86975A] rounded-full flex items-center justify-center text-white font-black text-xl">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-[#282828]">{step.title}</h3>
                  <p className="text-xs text-[#919191] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </section>

      <section className="min-h-max bg-[#86975A] flex items-center">
        <ScrollReveal
          direction="left"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20 text-center"
        >
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to grow smarter?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.15}>
            <p className="text-[#E5EDCF] text-sm mb-8 max-w-sm mx-auto leading-relaxed">
              Collaborate with Nurtura to build reliable, scalable, and
              sustainable indoor farming workflows.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.25}>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-[#282828] text-white text-sm font-bold rounded-full hover:bg-[#3a3a3a] transition-all"
            >
              Get In Touch
            </a>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
