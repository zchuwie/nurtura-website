// Colors: primary #86975A | bg #F9FAFB | black #282828 | gray #919191 | secondary #E5EDCF

interface FeaturePlaceholder {
  icon: string;
  title: string;
}

const features: FeaturePlaceholder[] = [
  { icon: "📡", title: "Feature Title 1" },
  { icon: "🌱", title: "Feature Title 2" },
  { icon: "💧", title: "Feature Title 3" },
  { icon: "☀️", title: "Feature Title 4" },
];

const steps = ["Step 1: Setup", "Step 2: Monitor", "Step 3: Harvest"];

export default function Product() {
  return (
    <>
      {/* ── Page Header — full height ───────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#86975A] mb-3">
            Product
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#282828] mb-16">
            Our Solution.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-6">
                Meet <span className="text-[#86975A]">Nurtura</span>
              </h2>
              {/* TODO: Replace with actual product description */}
              <p className="text-sm text-[#919191] leading-relaxed mb-4">
                Nurtura is an IoT-powered indoor farming system designed for urban
                environments. Place your product description here — what makes it
                unique, how it works, and why customers love it.
              </p>
              {/* TODO: Replace with secondary copy */}
              <p className="text-sm text-[#919191] leading-relaxed">
                Add a second paragraph describing features, technology highlights,
                or a compelling use case that resonates with your audience.
              </p>
            </div>

            {/* Product image placeholder */}
            <div className="bg-[#E5EDCF] rounded-3xl aspect-square flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-[#86975A]/30">
              <div className="text-5xl mb-4">🌱</div>
              <p className="text-sm font-semibold text-[#282828]">Product Image</p>
              <p className="text-xs text-[#919191] mt-1">Replace with actual product photo or illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features — full height ──────────────────────── */}
      <section className="min-h-max bg-[#E5EDCF] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-14 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-[#F9FAFB] rounded-2xl p-6 flex flex-col gap-3">
                <div className="w-11 h-11 bg-[#E5EDCF] rounded-xl flex items-center justify-center text-xl">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-[#282828] text-sm">{feature.title}</h3>
                {/* TODO: Replace with feature description */}
                <p className="text-xs text-[#919191] leading-relaxed">
                  Add a short description of this feature and how it benefits the user.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — full height ──────────────────────── */}
      <section className="min-h-max bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <h2 className="text-3xl sm:text-4xl font-black text-[#282828] mb-4 text-center">
            How It Works
          </h2>
          {/* TODO: Replace intro */}
          <p className="text-center text-sm text-[#919191] mb-16 max-w-md mx-auto">
            Describe the overall process — from setup to harvest. Keep it simple and benefit-focused.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 bg-[#86975A] rounded-full flex items-center justify-center text-white font-black text-xl">
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#282828]">{step}</h3>
                {/* TODO: Replace with step description */}
                <p className="text-xs text-[#919191] leading-relaxed">
                  Describe what happens during this step in clear, user-friendly language.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — full height ───────────────────────────────── */}
      <section className="min-h-max bg-[#86975A] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to grow smarter?</h2>
          {/* TODO: Replace with CTA copy */}
          <p className="text-[#E5EDCF] text-sm mb-8 max-w-sm mx-auto leading-relaxed">
            Add your call-to-action description here.
          </p>
          <a
            href="mailto:hello@nurtura.app"
            className="px-7 py-3 bg-[#282828] text-white text-sm font-bold rounded-full hover:bg-[#3a3a3a] transition-all"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
}
