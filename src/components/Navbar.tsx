import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

interface NavLink {
  label: string;
  to: string;
}

const navLinks: NavLink[] = [
  { label: "Product", to: "/product" },
  { label: "Technology", to: "/technology" },
  { label: "Pricing", to: "/pricing" },
  { label: "About Us", to: "/about" },
  { label: "FAQ", to: "/faq" },
];

const CONTACT_EMAIL = "lots.loamtechsolutions@gmail.com";
const CONTACT_SUBJECT = "Nurtura Inquiry";
const CONTACT_BODY = `Hello Nurtura Team,

I would like to ask about:
- Topic:
- Current setup/location:
- Preferred contact method:
- Details:

Name:
Organization (optional):
Contact number (optional):

Thank you.`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] =
    useState<boolean>(false);
  const location = useLocation();
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    CONTACT_EMAIL,
  )}&su=${encodeURIComponent(CONTACT_SUBJECT)}&body=${encodeURIComponent(CONTACT_BODY)}`;

  useEffect(() => {
    if (!isDownloadModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDownloadModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isDownloadModalOpen]);

  useEffect(() => {
    const openDownloadModal = () => {
      setIsDownloadModalOpen(true);
    };

    window.addEventListener("open-download-modal", openDownloadModal);
    return () => {
      window.removeEventListener("open-download-modal", openDownloadModal);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#F9FAFB] border-b border-[#E5EDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Nurtura Logo" className="w-6 h-6" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-8">
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
            <button
              type="button"
              onClick={() => setIsDownloadModalOpen(true)}
              className="px-4 py-2 text-sm font-medium text-[#86975A] border border-[#86975A] rounded-full hover:bg-[#86975A] hover:text-white transition-all"
            >
              Download the App
            </button>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold bg-[#86975A] text-white rounded-full hover:bg-[#6e7d48] transition-all"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#282828]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.25">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E5EDCF] bg-[#F9FAFB] px-4 sm:px-6 py-5 flex flex-col gap-4">
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
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setIsDownloadModalOpen(true);
              }}
              className="px-4 py-2 text-sm font-medium text-center text-[#86975A] border border-[#86975A] rounded-full"
            >
              Download the App
            </button>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 text-sm font-semibold text-center bg-[#86975A] text-white rounded-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}

      {isDownloadModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
          style={{ background: "rgba(40,40,40,0.55)" }}
          onClick={() => setIsDownloadModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-modal-title"
            aria-describedby="download-modal-description"
            className="w-full max-w-md rounded-2xl p-6 sm:p-7 shadow-2xl"
            style={{
              background: "#E5EDCF",
              border: "1px solid #6e7d48",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <h3
              id="download-modal-title"
              className="text-2xl sm:text-3xl font-black text-[#282828]"
            >
              App Coming Soon
            </h3>
            <p
              id="download-modal-description"
              className="mt-3 text-sm sm:text-base leading-relaxed text-[#7d8a5a]"
            >
              The Nurtura mobile app is not yet available for download. We are
              preparing it for release.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsDownloadModalOpen(false)}
                className="px-5 py-2.5 rounded-full text-sm font-bold min-h-11 bg-[#86975A] text-white hover:bg-[#6e7d48] transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
