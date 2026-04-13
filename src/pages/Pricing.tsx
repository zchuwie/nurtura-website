import { Helmet } from "react-helmet-async";
import ScrollReveal from "../helper/scroll";

const singlePlanPricing = [
  {
    item: "IoT Hardware Package",
    details: "Base hardware build with markup and labor",
    amount: "PHP 5,686.20",
  },
  {
    item: "Mobile App Development (One-Time)",
    details: "Android app, IoT integration, analytics, and deployment",
    amount: "PHP 86,000.00",
  },
  {
    item: "Monthly Maintenance",
    details: "Updates, cloud monitoring, and technical support",
    amount: "PHP 4,500.00 / month",
  },
];

const pricingNotes = [
  "Platform scope is Android only for the current package.",
  "Cloud free-tier services are assumed for initial deployment.",
  "Google Play developer registration fee is billed separately.",
  "Contact Loam Tech Solutions for final confirmation and scheduling.",
];

function PricingTable({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: Array<{
    item: string;
    details: string;
    amount: string;
  }>;
}) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white">
      <div className="sm:hidden divide-y divide-[#EEF0EA]">
        {rows.map((row) => (
          <div key={row.item} className="p-4 space-y-2">
            <p className="text-sm font-semibold text-[#2F3A1F]">{row.item}</p>
            <p className="text-sm text-[#4B5563] leading-relaxed">{row.details}</p>
            <p className="text-sm font-semibold text-[#2F3A1F]">{row.amount}</p>
          </div>
        ))}
      </div>

      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full min-w-160 text-left">
        <thead className="bg-[#F5F7F0]">
          <tr>
            <th className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#3D3D3D]">
              {headers[0]}
            </th>
            <th className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#3D3D3D]">
              {headers[1]}
            </th>
            <th className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#3D3D3D] text-right">
              {headers[2]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.item} className="border-t border-[#EEF0EA]">
              <td className="px-5 py-3 text-sm font-semibold text-[#2F3A1F]">
                {row.item}
              </td>
              <td className="px-5 py-3 text-sm text-[#4B5563]">
                {row.details}
              </td>
              <td className="px-5 py-3 text-sm text-[#4B5563] text-right font-semibold">
                {row.amount}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Nurtura Pricing | Single Package Overview</title>
        <meta
          name="description"
          content="Single-package pricing overview for Nurtura covering IoT hardware, one-time mobile app development, and monthly maintenance."
        />
        <meta
          property="og:title"
          content="Nurtura Pricing | Single Package Overview"
        />
        <meta
          property="og:description"
          content="Single-package pricing overview for Nurtura covering IoT hardware, one-time mobile app development, and monthly maintenance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nurturaloam.tech/pricing" />
        <meta property="og:image" content="https://nurturaloam.tech/Logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nurtura Pricing | Single Package Overview"
        />
        <meta
          name="twitter:description"
          content="Single-package pricing overview for Nurtura covering IoT hardware, one-time mobile app development, and monthly maintenance."
        />
        <meta
          name="twitter:image"
          content="https://nurturaloam.tech/Logo.png"
        />
        <link rel="canonical" href="https://nurturaloam.tech/pricing" />
      </Helmet>

      <section className="bg-[#F9FAFB]">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <ScrollReveal direction="up">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#86975A] mb-2">
              Pricing
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-[#282828] mb-3 leading-tight">
              Nurtura Single Package Pricing
            </h1>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-3xl">
              One complete package for IoT hardware and mobile application
              delivery, with optional monthly maintenance.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-6">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#2C2C2C]">
                  Package Summary
                </h2>
                <PricingTable
                  headers={["Item", "Details", "Amount"]}
                  rows={singlePlanPricing}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 sm:p-6">
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-3">Notes</h3>
                <ul className="space-y-2 text-sm text-[#4B5563] list-disc pl-5">
                  {pricingNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
