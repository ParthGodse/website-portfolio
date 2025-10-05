import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

/* ---------- Auto-sized PDF Modal (Letter portrait 8.5x11) ---------- */
const HEADER_H = 40;                // top bar height (px) -> h-10
const OUTER_MARGIN = 12;            // same as p-3 backdrop padding
const PAGE_RATIO = 8.5 / 11;        // width / height (flip to 11/8.5 for landscape)

function AutoSizedPdfModal({
  pdfUrl,
  onClose,
}: {
  pdfUrl: string;
  onClose: () => void;
}) {
  const [dims, setDims] = useState({ width: 800, height: 900 });

  useEffect(() => {
    const calc = () => {
      const maxW = window.innerWidth - OUTER_MARGIN * 2;
      const maxH = window.innerHeight - OUTER_MARGIN * 2;

      // Size the embed area (below the header) to fit viewport while keeping aspect ratio
      const embedH = Math.min(maxH - HEADER_H, maxW / PAGE_RATIO);
      const embedW = Math.min(maxW, PAGE_RATIO * embedH);

      setDims({
        width: Math.round(embedW),
        height: Math.round(embedH + HEADER_H),
      });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <div
      className="relative bg-white rounded-xl overflow-hidden shadow-2xl"
      style={{ width: dims.width, height: dims.height }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-10 flex items-center justify-between px-3 border-b bg-white">
        <h3 className="text-sm font-semibold">Resume</h3>
        <div className="flex items-center gap-2">
          <a
            href={pdfUrl}
            download
            className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition"
          >
            Download
          </a>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      {/* PDF viewer (below bar, white background, no dark gutters) */}
      <div
        className="absolute left-0 right-0 bottom-0 bg-white z-10"
        style={{ top: HEADER_H }}
      >
        <embed
          src={`${pdfUrl}#toolbar=0&navpanes=0&zoom=page-width`}
          type="application/pdf"
          className="w-full h-full bg-white"
        />
      </div>
    </div>
  );
}

/* ------------------------------- Header ------------------------------- */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const resumeUrl = "/Parth_Godse_Resume_SDE.pdf"; // public/Parth_Godse_Resume_SDE.pdf

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC closes modal
  useEffect(() => {
    if (!isResumeOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsResumeOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isResumeOpen]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    // if (el) el.scrollIntoView({ behavior: "smooth" });
    if (el) {
      const navbarHeight = 20; // Adjust based on your navbar height
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[50] w-full max-w-4xl px-6 rounded-full ring-1 shadow-md bg-white ring-gray-300
        `}
      >
        <nav className="px-6 py-2.5 h-15">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold font-mono text-black hover:text-blue-600 transition-colors duration-300"
            >
              &lt;/&gt;
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-black font-mono hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}

              {/* Resume capsule */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsResumeOpen(true);
                }}
                className="px-4 py-2 rounded-full bg-blue-600 text-white font-mono font-medium hover:bg-blue-700 transition-colors duration-300 ring-1 ring-blue-600/40"
              >
                Resume
              </button>
            </div>

            {/* Mobile menu trigger */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/20">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-white/50 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsResumeOpen(true);
                }}
                className="mt-2 mx-4 block w-auto text-center px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Resume
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Modal backdrop */}
      {isResumeOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3"
          onClick={() => setIsResumeOpen(false)}
        >
          <AutoSizedPdfModal pdfUrl={resumeUrl} onClose={() => setIsResumeOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Header;
