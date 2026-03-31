import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLink {
  label: string;
  to: string;
}

const navLinks: NavLink[] = [
  { label: "Product", to: "/product" },
  { label: "Technology", to: "/technology" },
  { label: "About Us", to: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#F9FAFB] border-b border-[#E5EDCF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-[#86975A] rounded-sm grid grid-cols-2 gap-0.5 p-1">
              <div className="bg-[#E5EDCF] rounded-[2px]" />
              <div className="bg-[#E5EDCF] rounded-[2px]" />
              <div className="bg-[#F9FAFB] rounded-[2px]" />
              <div className="bg-[#E5EDCF] rounded-[2px]" />
            </div>
            <span className="font-bold text-base text-[#282828] tracking-tight">
              Nurtura
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-[#86975A]"
                    : "text-[#282828] hover:text-[#86975A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#download"
              className="px-4 py-2 text-sm font-medium text-[#86975A] border border-[#86975A] rounded-full hover:bg-[#86975A] hover:text-white transition-all"
            >
              Download the App
            </a>
            <Link
              to="/product"
              className="px-4 py-2 text-sm font-semibold bg-[#86975A] text-white rounded-full hover:bg-[#6e7d48] transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#282828]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E5EDCF] bg-[#F9FAFB] px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                location.pathname === link.to
                  ? "text-[#86975A]"
                  : "text-[#282828]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-[#E5EDCF]">
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 text-sm font-medium text-center text-[#86975A] border border-[#86975A] rounded-full"
            >
              Download the App
            </a>
            <Link
              to="/product"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 text-sm font-semibold text-center bg-[#86975A] text-white rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
