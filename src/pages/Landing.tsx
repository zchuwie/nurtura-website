import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";

// ── Constants ────────────────────────────────────────────────
const CYCLING_WORDS: string[] = ["Smarter", "Fresh", "Light", "Bright", "Efficient"];

// ── Icons ────────────────────────────────────────────────────
function IconSpace() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#86975A]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}
function IconPlant() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#86975A]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12m0 0s-3-3-3-7c0 0 3 1 3 7zm0 0s3-3 3-7c0 0-3 1-3 7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 22h14" />
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-[#86975A]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-5 8z" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────
const featureCards = [
  {
    icon: <IconSpace />,
    title: "Space Utilization",
    desc: "Urban farming systems don't need to require large areas and aren't difficult to scale.",
  },
  {
    icon: <IconPlant />,
    title: "Automatic Plant Management",
    desc: "Farmers don't manually monitor watering and lightning.",
  },
  {
    icon: <IconLeaf />,
    title: "Resource Efficiency",
    desc: "Water and electricity are not wasted due to automated control.",
  },
];

const learnMoreCards = [
  { label: "Our Solution.", desc: "Discover the solution to your problems.", to: "/product" },
  { label: "Our Team.",     desc: "Discover the solution to your problems.", to: "/about" },
  { label: "Our Tech.",     desc: "Discover the solution to your problems.", to: "/technology" },
];

// ── Component ────────────────────────────────────────────────
export default function Landing() {
  const [wordIndex, setWordIndex]   = useState<number>(0);
  const [animating, setAnimating]   = useState<boolean>(false);

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

  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO  — full viewport height
      ════════════════════════════════════════════════ */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#86975A]">
              IoT-Based Smart Indoor Farming System
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#282828] leading-[1.05]">
              Nurtura
            </h1>
            <p className="text-sm text-[#919191] max-w-sm leading-relaxed">
              A compact smart farming system that uses{" "}
              <strong className="text-[#282828] font-semibold">IoT sensors</strong> and{" "}
              <strong className="text-[#282828] font-semibold">automation</strong>{" "}
              to optimize plant growth in urban environments.
            </p>
            <div>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#86975A] text-white text-sm font-semibold rounded-full hover:bg-[#6e7d48] transition-all"
              >
                See How It Works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — animated headline */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#282828] leading-tight">
              Grow{" "}
              <span
                className={`inline-block bg-[#86975A] text-white px-3 py-1 rounded-lg transition-all duration-300 ${
                  animating ? "opacity-0 -translate-y-2 scale-95" : "opacity-100 translate-y-0 scale-100"
                }`}
              >
                {CYCLING_WORDS[wordIndex]}
              </span>
              <br />
              in Smaller
              <br />
              Spaces.
            </h2>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════════════ */}
      <Marquee />

      {/* ════════════════════════════════════════════════
          PROBLEM — full viewport height
      ════════════════════════════════════════════════ */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#86975A]">
              The Urban Farming Problem?
            </h2>
            <p className="mt-4 text-sm text-[#919191] max-w-sm mx-auto leading-relaxed">
              But WE got YOU! Urbanization has reduced available farmland,
              making sustainable food production difficult in cities.
            </p>
          </div>

          {/* Feature cards — icon + text horizontal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {featureCards.map((card) => (
              <div key={card.title} className="flex flex-col sm:flex-row items-start gap-4">
                {/* Icon box */}
                <div className="shrink-0 w-11 h-11 bg-[#E5EDCF] rounded-xl flex items-center justify-center">
                  {card.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 className="font-bold text-[#282828] text-sm leading-snug mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#919191] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════════════ */}
      <Marquee />

      {/* ════════════════════════════════════════════════
          LEARN MORE — full viewport height
      ════════════════════════════════════════════════ */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#282828] text-center mb-14">
            Learn More
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {learnMoreCards.map((card) => (
              <div
                key={card.label}
                className="bg-[#E5EDCF] rounded-2xl p-7 flex flex-col gap-4 min-h-[220px]"
              >
                <h3 className="font-black text-[#282828] text-sm">{card.label}</h3>
                <p className="text-xs text-[#919191] leading-relaxed text-center flex-1">
                  {card.desc}
                </p>
                {/* Pill button — dark, bottom-left */}
                <div>
                  <Link
                    to={card.to}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#86975A] text-white text-xs font-semibold rounded-full hover:bg-[#6e7d48] transition-all"
                  >
                    Learn more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          DOWNLOAD CTA — full viewport height
      ════════════════════════════════════════════════ */}
      <section id="download" className="min-h-screen bg-[#86975A] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Start growing smarter today.
          </h2>
          <p className="text-[#E5EDCF] text-sm mb-10 max-w-sm mx-auto leading-relaxed">
            Download the Nurtura app and connect your IoT farm in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-7 py-3 bg-[#F9FAFB] text-[#282828] text-sm font-bold rounded-full hover:bg-white transition-all"
            >
              📱 App Store
            </a>
            <a
              href="#"
              className="px-7 py-3 bg-[#282828] text-white text-sm font-bold rounded-full hover:bg-[#3a3a3a] transition-all"
            >
              🤖 Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
