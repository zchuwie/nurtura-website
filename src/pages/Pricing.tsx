import { Helmet } from "react-helmet-async";
import ScrollReveal from "../helper/scroll";

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Nurtura Pricing | Coming Soon</title>
        <meta
          name="description"
          content="Nurtura pricing plans are coming soon. We are preparing flexible options for different urban farming needs."
        />
        <meta property="og:title" content="Nurtura Pricing | Coming Soon" />
        <meta
          property="og:description"
          content="Nurtura pricing plans are coming soon."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nurturaloam.tech/pricing" />
        <meta property="og:image" content="https://nurturaloam.tech/Logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nurtura Pricing | Coming Soon" />
        <meta
          name="twitter:description"
          content="Nurtura pricing plans are coming soon."
        />
        <meta
          name="twitter:image"
          content="https://nurturaloam.tech/Logo.png"
        />
        <link rel="canonical" href="https://nurturaloam.tech/pricing" />
      </Helmet>

      <section className="min-h-[70vh] bg-[#F9FAFB] flex items-center">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 text-center">
          <ScrollReveal direction="up">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#86975A] mb-3">
              Pricing
            </p>
            <h1 className="text-4xl sm:text-6xl font-black text-[#282828] mb-4">
              Pricing is Coming Soon.
            </h1>
            <p className="text-sm sm:text-base text-[#919191] max-w-2xl mx-auto leading-relaxed">
              We are preparing transparent plans for home growers like YOU!
              Check back soon for complete package details.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
