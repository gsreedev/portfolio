import { useEffect, useState } from "react";
import site from "../config/site.js";
import ThemeToggle from "./ThemeToggle.jsx";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "publication",
  "education",
  "certifications",
  "contact",
];

function pad(n) {
  return String(n).padStart(3, "0");
}

export default function Header() {
  const [index, setIndex] = useState("001");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      let current = 0;
      SECTION_IDS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = i;
      });
      setIndex(pad(current + 1));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="grid header-grid">
        <a href="#hero" className="brand" onClick={closeMenu}>
          G SREEDEV<sup>®</sup>
        </a>

        <nav
          className={`header-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Primary"
          id="primary-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              aria-current={
                index &&
                SECTION_IDS[
                  parseInt(index, 10) - 1
                ] === link.href.slice(1)
                  ? "page"
                  : undefined
              }
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-external"
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            onClick={closeMenu}
          >
            GitHub
          </a>
        </nav>

        <div className="header-action">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary btn-sm">
            Contact
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>

        <div className="header-index" aria-hidden="true">
          {index} / {pad(SECTION_IDS.length)}
        </div>
      </div>
    </header>
  );
}
