"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "HOME" },
  { href: "#awards", label: "AWARDS" },
  { href: "#activities", label: "ACTIVITIES" },
  { href: "#members", label: "MEMBERS" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-[#1f1f1f]/80 backdrop-blur-xl shadow-[0_40px_80px_rgba(157,226,255,0.06)]"
          : "bg-[#1f1f1f]/60 backdrop-blur-xl shadow-[0_40px_80px_rgba(157,226,255,0.06)]"
      }`}
    >
      <a
        href="#hero"
        className="text-2xl font-black tracking-tighter text-primary"
      >
        MOLGORITHM
      </a>

      {/* Desktop */}
      <div className="hidden md:flex gap-12 items-center">
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className={`font-bold tracking-tight uppercase text-xs transition-all duration-300 ${
              i === 0
                ? "text-primary font-black"
                : "text-white/70 hover:text-primary"
            }`}
          >
            {link.label}
          </a>
        ))}
        <div className="flex gap-4">
          <a
            href="#join"
            className="px-6 py-2 bg-primary text-primary-foreground font-bold tracking-tight uppercase text-xs transition-transform hover:scale-95"
          >
            JOIN
          </a>
          <a
            href="#donate"
            className="px-6 py-2 border border-outline-variant text-primary font-bold tracking-tight uppercase text-xs transition-transform hover:scale-95"
          >
            DONATE
          </a>
        </div>
      </div>

      {/* Mobile */}
      <button
        className="md:hidden text-primary"
        onClick={() => setOpen(!open)}
      >
        <span className="material-symbols-outlined">
          {open ? "close" : "menu"}
        </span>
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#1f1f1f]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 font-bold tracking-tight uppercase text-xs text-white/70 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              className="mt-2 py-3 bg-primary text-primary-foreground font-bold tracking-tight uppercase text-xs text-center"
              onClick={() => setOpen(false)}
            >
              JOIN
            </a>
            <a
              href="#donate"
              className="py-3 border border-outline-variant text-primary font-bold tracking-tight uppercase text-xs text-center"
              onClick={() => setOpen(false)}
            >
              DONATE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
