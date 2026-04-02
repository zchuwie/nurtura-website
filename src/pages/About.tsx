import { Helmet } from "react-helmet-async";
import { getJsonLd } from "../helper/jsonLd";
// ...existing code...
import ScrollReveal from "../helper/scroll";
import balmondImg from "../assets/balmond.png";
import sabalboroImg from "../assets/Sabalboro.jpg";
import espinosaImg from "../assets/Espinosa.jpg";
import navarraImg from "../assets/Navarra.png";
import jabolImg from "../assets/Jabol.jpg";
import floresImg from "../assets/Flores.png";
import nimoImg from "../assets/Nimo.jpeg";
// Colors: primary #86975A | bg #F9FAFB | black #282828 | gray #919191 | secondary #E5EDCF

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
}
interface Value {
  label: string;
  emoji: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "David Jim De Jesus",
    role: "Project Manager",
    image: balmondImg,
    bio: "Leads project coordination, sprint planning, risk management, and documentation alignment.",
  },
  {
    name: "Neo Nimo Isaiah",
    role: "Lead Frontend Developer",
    image: nimoImg,
    bio: "Designs frontend architecture and drives responsive, accessible user experiences.",
  },
  {
    name: "Angelo Mark Flores Jr.",
    role: "Lead Backend Developer",
    image: floresImg,
    bio: "Builds core backend modules and enforces code quality across server-side services.",
  },
  {
    name: "John Yohan Navarra",
    role: "Lead IoT Engineer",
    image: navarraImg,
    bio: "Architects IoT hardware integration, firmware behavior, and sensor communication workflows.",
  },
  {
    name: "Rex Gabrielle Guim Espinosa",
    role: "IoT Specialist",
    image: espinosaImg,
    bio: "Handles sensor calibration, hardware assembly, and troubleshooting for deployment readiness.",
  },
  {
    name: "Allan Jabol Jr.",
    role: "IoT Engineer",
    image: jabolImg,
    bio: "Supports hardware installation, sensor testing, and power management documentation.",
  },
  {
    name: "Maxine Joy Valdez",
    role: "UI/UX Designer/Research Specialist",
    image: balmondImg,
    bio: "Implements interface components and refines product usability through research-led decisions.",
  },
  {
    name: "Denz Christian G. Sabalboro",
    role: "Backend Developer/Quality Assurance Specialist",
    image: sabalboroImg,
    bio: "Integrates backend APIs and leads quality assurance with focused frontend and backend tests.",
  },
  {
    name: "Pusa sa Kanto",
    role: "Pusa sa Kanto",
    image: balmondImg,
    bio: "Morale and vibe specialist who keeps the team calm during late-night sprint sessions.",
  },
];

const values: Value[] = [
  { label: "Sustainability", emoji: "🌍" },
  { label: "Innovation", emoji: "💡" },
  { label: "Community", emoji: "🤝" },
];

export default function About() {
  const jsonLd = getJsonLd({
    type: "AboutPage",
    name: "About Nurtura",
    description:
      "Meet the Nurtura team and learn about our mission, values, and story.",
    url: "https://nurturaloam.tech/about",
    image: "https://nurturaloam.tech/og-image.jpg",
    publisher: { name: "Nurtura" },
  });
  return (
    <>
      <Helmet>
        <title>About Nurtura | Meet the Team</title>
        <meta
          name="description"
          content="Meet the Nurtura team and learn about our mission, values, and story."
        />
        <meta
          name="keywords"
          content="Nurtura, about, team, mission, values, company, smart farming"
        />
        <meta property="og:title" content="About Nurtura | Meet the Team" />
        <meta
          property="og:description"
          content="Meet the Nurtura team and learn about our mission, values, and story."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://nurturaloam.tech/about" />
        <meta
          property="og:image"
          content="https://nurturaloam.tech/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nurtura | Meet the Team" />
        <meta
          name="twitter:description"
          content="Meet the Nurtura team and learn about our mission, values, and story."
        />
        <meta
          name="twitter:image"
          content="https://nurturaloam.tech/og-image.jpg"
        />
        <link rel="canonical" href="https://nurturaloam.tech/about" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
          <ScrollReveal direction="left">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#86975A] mb-3">
              About Us
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.15}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#282828] mb-10 sm:mb-16">
              Our Team.
            </h1>
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            delay={0.25}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center"
          >
            <ScrollReveal direction="left" delay={0.3}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-6">
                  The <span className="text-[#86975A]">Team</span>
                </h2>
                <p className="text-sm text-[#919191] leading-relaxed mb-4">
                  Nurtura is built by a multidisciplinary Computer Science team
                  from the University of Caloocan City, combining expertise in
                  frontend development, backend services, QA, and IoT hardware
                  engineering.
                </p>
                <p className="text-sm text-[#919191] leading-relaxed">
                  Our mission is to make indoor urban farming practical,
                  reliable, and sustainable through real-time monitoring,
                  automation, and thoughtful system design.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.4}>
              <div className="bg-[#E5EDCF] rounded-3xl aspect-video flex flex-col items-center justify-center border-2 border-dashed border-[#86975A]/30 p-8 text-center">
                <div className="text-5xl mb-4">📸</div>
                <p className="text-sm font-semibold text-[#282828]">
                  Nurtura Team
                </p>
                <p className="text-xs text-[#919191] mt-1">
                  Project members across software, QA, and IoT hardware
                </p>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Team Grid — full height ─────────────────────────── */}
      <section className="min-h-max bg-[#E5EDCF] flex items-center">
        <ScrollReveal
          direction="left"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20"
        >
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-14 text-center">
              Meet the People
            </h2>
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            delay={0.15}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, i) => (
              <ScrollReveal direction="left" key={member.name} delay={0.15}>
                <div
                  id={`member-${i}`}
                  className="bg-[#F9FAFB] rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                >
                  {/* Avatar: show image if present, fallback to initial */}
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#86975A]/20 bg-[#E5EDCF]"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-[#E5EDCF] rounded-full flex items-center justify-center text-2xl text-[#86975A] font-black border-2 border-[#86975A]/20">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="font-bold text-[#282828] text-sm">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#86975A] font-medium">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#919191] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </section>

      {/* ── Values — full height ────────────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <ScrollReveal
          direction="left"
          className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20"
        >
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-14 text-center">
              Our Values
            </h2>
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            delay={0.15}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {values.map((value, i) => (
              <ScrollReveal direction="left" key={value.label} delay={0.15}>
                <div
                  id={`value-${i}`}
                  className="flex flex-col gap-4 p-8 bg-[#E5EDCF] rounded-2xl"
                >
                  <div className="text-4xl">{value.emoji}</div>
                  <h3 className="font-black text-[#282828] text-lg">
                    {value.label}
                  </h3>
                  <p className="text-xs text-[#919191] leading-relaxed">
                    {value.label === "Sustainability" &&
                      "We design with resource efficiency in mind, helping users reduce waste in urban farming operations."}
                    {value.label === "Innovation" &&
                      "We combine IoT, cloud services, and modern app workflows to solve real-world farming limitations."}
                    {value.label === "Community" &&
                      "We build for urban growers, researchers, and students who want accessible food-tech solutions."}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </>
  );
}
