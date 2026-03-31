// Placeholder box stands in for an image asset beside the brand name
function ImagePlaceholder() {
  return (
    <div className="w-8 h-8 rounded-md bg-[#86975A]/30 border border-[#86975A]/40 shrink-0 flex items-center justify-center">
      <svg
        className="w-4 h-4 text-[#86975A]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
        <path
          d="M3 9l4-4 4 4 4-4 4 4"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8.5" cy="14.5" r="1.5" strokeWidth={1.5} />
      </svg>
    </div>
  );
}

const COUNT = 12;

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-[#E5EDCF] py-3 w-full border-y border-[#86975A]/20">
      <div className="flex items-center gap-8 animate-nurtura-marquee whitespace-nowrap">
        {Array.from({ length: COUNT * 2 }).map((_, i) => (
          <span key={i} className="flex items-center gap-3 shrink-0">
            <ImagePlaceholder />
            <span className="text-sm font-semibold text-[#282828] tracking-wide">
              Nurtura
            </span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes nurtura-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-nurtura-marquee {
          animation: nurtura-marquee 24s linear infinite;
        }
      `}</style>
    </div>
  );
}
