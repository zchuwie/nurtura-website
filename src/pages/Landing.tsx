import { Helmet } from "react-helmet-async";
import { getJsonLd } from "../helper/jsonLd";
import ScrollReveal from "../helper/scroll";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";
import { Home, Leaf, ArrowRight, LucideBellElectric } from "lucide-react";

// ── Color Variables ─────────────────────────────
const COLOR_PRIMARY = "#86975A";
const COLOR_PRIMARY_DARK = "#6e7d48";
const COLOR_BG_CARD = "#E5EDCF";
const COLOR_BG_PAGE = "#F9FAFB";
const COLOR_TEXT_DARK = "#282828";
const COLOR_TEXT_LIGHT = "#919191";
const COLOR_TEXT_CARD = "#7d8a5a";
const COLOR_TEXT_WHITE = "#fff";

// ── Constants ────────────────────────────────────────────────
const CYCLING_WORDS: string[] = [
  "Smarter",
  "Fresh",
  "Light",
  "Bright",
  "Efficient",
];

// ── Icons ────────────────────────────────────────────────────
// Lucide icons used instead of custom SVGs

// ── Data ─────────────────────────────────────────────────────
const featureCards = [
  {
    icon: <Home size={35} strokeWidth={2} className="text-[#86975A]" />,
    title: "Space Utilization",
    desc: "Built for compact urban spaces so users can grow food in limited areas without sacrificing control.",
  },
  {
    icon: <Leaf size={35} strokeWidth={2} className="text-[#86975A]" />,
    title: "Automatic Plant Management",
    desc: "Sensor-driven automation handles watering and lighting with minimal manual intervention.",
  },
  {
    icon: (
      <LucideBellElectric
        size={35}
        strokeWidth={2}
        className="text-[#86975A]"
      />
    ),
    title: "Resource Efficiency",
    desc: "Real-time responses optimize water and energy use, improving consistency and sustainability.",
  },
];

const learnMoreCards = [
  {
    label: "Our Solution.",
    desc: "See how Nurtura automates urban indoor farming.",
    to: "/product",
  },
  {
    label: "Our Team.",
    desc: "Meet the multidisciplinary team building Nurtura.",
    to: "/about",
  },
  {
    label: "Our Tech.",
    desc: "Explore the architecture behind real-time automation.",
    to: "/technology",
  },
];

// ── Component ────────────────────────────────────────────────
export default function Landing() {
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex((p) => (p + 1) % CYCLING_WORDS.length);
        setAnimating(false);
      }, 300);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const jsonLd = getJsonLd({
    type: "WebSite",
    name: "Nurtura",
    description:
      "Nurtura is a smart IoT-based indoor farming system for urban environments. Grow smarter, fresher, and more efficiently.",
    url: "https://nurturaloam.tech/",
    image: "https://nurturaloam.tech/og-image.jpg",
    publisher: { name: "Nurtura" },
  });
  // Add potentialAction manually since it's not generic
  jsonLd.potentialAction = {
    "@type": "SearchAction",
    target: "https://nurturaloam.tech/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  };
  return (
    <>
      <Helmet>
        <title>Nurtura | Smart Indoor Farming System</title>
        <meta
          name="description"
          content="Nurtura is a smart IoT-based indoor farming system for urban environments. Grow smarter, fresher, and more efficiently."
        />
        <meta
          name="keywords"
          content="Nurtura, smart farming, IoT, urban farming, indoor farming, automation, agriculture, technology"
        />
        <meta
          property="og:title"
          content="Nurtura | Smart Indoor Farming System"
        />
        <meta
          property="og:description"
          content="Nurtura is a smart IoT-based indoor farming system for urban environments. Grow smarter, fresher, and more efficiently."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nurturaloam.tech/" />
        <meta
          property="og:image"
          content="https://nurturaloam.tech/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nurtura | Smart Indoor Farming System"
        />
        <meta
          name="twitter:description"
          content="Nurtura is a smart IoT-based indoor farming system for urban environments. Grow smarter, fresher, and more efficiently."
        />
        <meta
          name="twitter:image"
          content="https://nurturaloam.tech/og-image.jpg"
        />
        <link rel="canonical" href="https://nurturaloam.tech/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section
        className="min-h-max flex items-center"
        style={{ background: COLOR_BG_PAGE }}
      >
        <ScrollReveal
          direction="up"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          {/* Left */}
          <ScrollReveal
            direction="left"
            className="flex flex-col gap-5 sm:gap-6 text-center md:text-left items-center md:items-start"
          >
            <p
              className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: COLOR_PRIMARY }}
            >
              IoT-Based Smart Indoor Farming System
            </p>
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-black"
              style={{ color: COLOR_TEXT_DARK, lineHeight: 1.05 }}
            >
              Nurtura
            </h1>
            <p
              className="text-sm sm:text-base max-w-sm leading-relaxed"
              style={{ color: COLOR_TEXT_LIGHT }}
            >
              A compact smart farming system that uses{" "}
              <strong style={{ color: COLOR_TEXT_DARK, fontWeight: 600 }}>
                IoT sensors
              </strong>{" "}
              and{" "}
              <strong style={{ color: COLOR_TEXT_DARK, fontWeight: 600 }}>
                automation
              </strong>{" "}
              to optimize plant growth in urban environments.
            </p>
            <div>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-white text-sm font-semibold rounded-full transition-all min-h-11"
                style={{ background: COLOR_PRIMARY }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = COLOR_PRIMARY_DARK)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = COLOR_PRIMARY)
                }
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
          {/* Right — animated headline */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="text-center md:text-left">
              <h2
                className="text-[1.9rem] sm:text-5xl lg:text-6xl font-black"
                style={{ color: COLOR_TEXT_DARK, lineHeight: 1.1 }}
              >
                Grow{" "}
                <span
                  className={`inline-block min-w-28 text-center px-3 py-1 rounded-lg transition-all duration-300 ${
                    animating
                      ? "opacity-0 -translate-y-2 scale-95"
                      : "opacity-100 translate-y-0 scale-100"
                  }`}
                  style={{ background: COLOR_PRIMARY, color: COLOR_TEXT_WHITE }}
                >
                  {CYCLING_WORDS[wordIndex]}
                </span>
                <br />
                in Smaller
                <br />
                Spaces.
              </h2>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </section>

      <Marquee />

      {/* PROBLEM + FEATURES */}
      <section
        className="min-h-max flex items-center"
        style={{ background: COLOR_BG_PAGE }}
      >
        <ScrollReveal
          direction="up"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20"
        >
          {/* Heading */}
          <ScrollReveal direction="down" className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#86975A]">
              The Urban Farming Problem?
            </h2>
            <p className="mt-4 text-sm text-[#919191] max-w-sm mx-auto leading-relaxed">
              But WE got YOU!
              <br />
              Urbanization has reduced available farmland, making sustainable
              food production difficult in cities.
            </p>
          </ScrollReveal>
          {/* Feature cards — icon + text horizontal */}
          <ScrollReveal
            direction="up"
            delay={0.15}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10"
          >
            {featureCards.map((card, i) => (
              <ScrollReveal
                direction={i % 2 === 0 ? "left" : "right"}
                key={card.title}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 rounded-2xl p-4 sm:p-0">
                  {/* Icon box */}
                  <div
                    className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center"
                    style={{ background: COLOR_BG_CARD }}
                  >
                    {card.icon}
                  </div>
                  {/* Text */}
                  <div className="max-w-xs sm:max-w-none">
                    <h3
                      className="font-bold text-lg sm:text-xl leading-snug mb-1"
                      style={{ color: COLOR_PRIMARY }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: COLOR_TEXT_LIGHT }}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </section>

      <Marquee />

      {/* LEARN MORE */}
      <section
        className="min-h-max flex items-center"
        style={{ background: COLOR_BG_PAGE }}
      >
        <ScrollReveal
          direction="up"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20"
        >
          <ScrollReveal direction="down">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-10 sm:mb-14"
              style={{ color: COLOR_TEXT_DARK }}
            >
              Learn More
            </h2>
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            delay={0.15}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6"
          >
            {learnMoreCards.map((card, i) => (
              <ScrollReveal
                direction={i % 2 === 0 ? "left" : "right"}
                key={card.label}
              >
                <div
                  className="relative rounded-2xl flex flex-col items-center justify-center min-h-58 sm:min-h-64 pt-7 sm:pt-10 pb-14 sm:pb-20 px-5 sm:px-6 text-center overflow-visible"
                  style={{ background: COLOR_BG_CARD }}
                >
                  <h3
                    className="font-black text-lg sm:text-xl mb-2"
                    style={{ color: COLOR_TEXT_DARK }}
                  >
                    {card.label}
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-2"
                    style={{ color: COLOR_TEXT_CARD }}
                  >
                    {card.desc}
                  </p>
                  {/* Overlapping perfect half-circle button */}
                  <Link
                    to={card.to}
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-36 sm:w-48 h-14 sm:h-20 rounded-b-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg transition-all group overflow-hidden min-h-11"
                    style={{
                      background: COLOR_PRIMARY,
                      color: COLOR_TEXT_WHITE,
                      borderTopLeftRadius: "9999px",
                      borderTopRightRadius: "9999px",
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                      boxShadow: "0 8px 32px 0 rgba(134,151,90,0.15)",
                    }}
                  >
                    <span className="flex items-center gap-2 text-xs sm:text-sm justify-center group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </section>

      {/* DOWNLOAD CTA */}
      <section
        id="download"
        className="min-h-max flex items-center"
        style={{ background: COLOR_PRIMARY }}
      >
        <ScrollReveal
          direction="up"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 text-center"
        >
          <ScrollReveal direction="down">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5"
              style={{ color: COLOR_TEXT_WHITE }}
            >
              Start growing smarter today.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p
              className="text-sm sm:text-base mb-8 sm:mb-10 max-w-sm mx-auto leading-relaxed"
              style={{ color: COLOR_BG_CARD }}
            >
              Download the Nurtura app and connect your IoT farm in minutes.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#download"
                className="w-full max-w-52 sm:w-auto px-7 py-3 text-white text-sm font-bold rounded-full transition-all min-h-11"
                style={{ background: COLOR_TEXT_DARK }}
              >
                Download Here
              </a>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
