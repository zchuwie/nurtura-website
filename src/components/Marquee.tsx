import logo from "../assets/Logo.png";

const COUNT = 12;

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-[#E5EDCF] py-3 w-full border-y border-[#86975A]/20">
      <div className="flex items-center gap-15 animate-nurtura-marquee whitespace-nowrap">
        {Array.from({ length: COUNT * 2 }).map((_, i) => (
          <span key={i} className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Nurtura Logo" className="object-fit h-5" />
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
