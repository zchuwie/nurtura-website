import { Link } from "react-router-dom";
import footerLogo from "../assets/greennobgCompanyLogo.png";

export default function Footer() {
  return (
    <footer className="bg-[#E5EDCF] border-t border-[#86975A]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={footerLogo}
              alt="Nurtura Logo"
              className="object-contain h-9"
            />
          </Link>

          {/* Nav */}
          <div className="flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-widest text-[#282828]">
            <Link
              to="/product"
              className="hover:text-[#86975A] transition-colors"
            >
              Product
            </Link>
            <Link
              to="/about"
              className="hover:text-[#86975A] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/technology"
              className="hover:text-[#86975A] transition-colors"
            >
              Technology
            </Link>
            <Link to="/faq" className="hover:text-[#86975A] transition-colors">
              FAQ
            </Link>
          </div>

          {/* Social */}
          <a
            href="https://www.facebook.com/people/LoamTech-Solutions/61580252422436/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#282828] hover:text-[#86975A] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[#86975A]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#919191]">
          <p>© 2026 LoamTech Solutions. All Rights Reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 hover:text-[#86975A] transition-colors font-medium uppercase tracking-widest"
          >
            To The Surface
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
