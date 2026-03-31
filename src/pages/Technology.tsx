// Colors: primary #86975A | bg #F9FAFB | black #282828 | gray #919191 | secondary #E5EDCF

interface TechCard  { name: string; desc: string; icon: string; }
interface FlowStep  { label: string; }

const techStack: TechCard[] = [
  { name: "IoT Sensors",    desc: "Real-time data collection",   icon: "📡" },
  { name: "Cloud Platform", desc: "Scalable data processing",    icon: "☁️" },
  { name: "Mobile App",     desc: "Control from anywhere",       icon: "📱" },
  { name: "AI Analytics",   desc: "Predictive plant insights",   icon: "🤖" },
];

const flowSteps: FlowStep[] = [
  { label: "Sensors" },
  { label: "Gateway" },
  { label: "Cloud" },
  { label: "Dashboard" },
];

export default function Technology() {
  return (
    <>
      {/* ── Page Header — full height ───────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#86975A] mb-3">
            Technology
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#282828] mb-16">
            Our Technology.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-6">
                The <span className="text-[#86975A]">Technology</span>
              </h2>
              {/* TODO: Replace with technology overview */}
              <p className="text-sm text-[#919191] leading-relaxed mb-4">
                Describe the core technology that powers Nurtura. How does the IoT
                infrastructure work? What sensors are used, and how do they
                communicate with the cloud platform?
              </p>
              {/* TODO: Replace with additional tech copy */}
              <p className="text-sm text-[#919191] leading-relaxed">
                Expand on the technical innovation — machine learning models,
                automation algorithms, or proprietary hardware that sets Nurtura apart.
              </p>
            </div>

            {/* Tech diagram placeholder */}
            <div className="bg-[#282828] rounded-3xl aspect-square flex flex-col items-center justify-center p-8 text-center">
              <div className="text-5xl mb-4">🔬</div>
              <p className="text-sm font-semibold text-white">System Diagram</p>
              <p className="text-xs text-[#919191] mt-1">Replace with architecture diagram or tech infographic</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack — full height ────────────────────────── */}
      <section className="min-h-max bg-[#E5EDCF] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-14 text-center">
            The Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="bg-[#F9FAFB] rounded-2xl p-6 flex flex-col gap-3">
                <div className="text-3xl">{tech.icon}</div>
                <h3 className="font-bold text-[#282828]">{tech.name}</h3>
                <p className="text-xs text-[#86975A] font-medium">{tech.desc}</p>
                {/* TODO: Replace with detailed description */}
                <p className="text-xs text-[#919191] leading-relaxed">
                  Describe how this component functions within the Nurtura ecosystem.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data Flow — full height ─────────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-4 text-center">
            How the Data Flows
          </h2>
          {/* TODO: Replace with data flow explanation */}
          <p className="text-center text-sm text-[#919191] mb-16 max-w-md mx-auto">
            Explain the data journey — from sensors in the farm, to the cloud, to the user's app.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-2 px-6 py-8 bg-[#E5EDCF] rounded-2xl min-w-[120px] text-center">
                  <div className="w-10 h-10 bg-[#86975A] rounded-full flex items-center justify-center text-white font-black text-sm">
                    {i + 1}
                  </div>
                  <p className="text-xs font-bold text-[#282828]">{step.label}</p>
                  {/* TODO: Add description */}
                  <p className="text-[10px] text-[#919191]">Description here</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="hidden sm:block w-8 h-0.5 bg-[#86975A]/30 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research CTA — full height ──────────────────────── */}
      <section className="min-h-max bg-[#86975A] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Built on Research</h2>
          {/* TODO: Replace with research copy */}
          <p className="text-[#E5EDCF] text-sm mb-8 max-w-lg mx-auto leading-relaxed">
            Describe the research, academic partnerships, or industry expertise that backs
            the Nurtura technology.
          </p>
          <a
            href="#"
            className="px-7 py-3 bg-[#282828] text-white text-sm font-bold rounded-full hover:bg-[#3a3a3a] transition-all"
          >
            Read Our White Paper
          </a>
        </div>
      </section>
    </>
  );
}
