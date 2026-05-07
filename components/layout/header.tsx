"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/layout/theme-provider";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/awards", label: "AWARDS" },
  { href: "/activities", label: "ACTIVITIES" },
  { href: "/members", label: "MEMBERS" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl shadow-sm"
          : "bg-card/60 backdrop-blur-xl"
      }`}
    >
      <Link
        href="/"
        className="text-2xl font-black tracking-tighter text-primary"
      >
        MOLGORITHM
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex gap-12 items-center">
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-bold tracking-tight uppercase text-xs transition-all duration-300 ${
              i === 0
                ? "text-primary font-black"
                : "text-foreground/70 hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/join"
          className="px-6 py-2 bg-primary text-primary-foreground font-bold tracking-tight uppercase text-xs transition-transform hover:scale-95"
        >
          JOIN
        </Link>
        <button
          onClick={toggle}
          className="text-foreground/50 hover:text-primary transition-colors"
          aria-label="테마 전환"
        >
          <span className="material-symbols-outlined text-xl">
            {mounted ? (theme === "dark" ? "light_mode" : "dark_mode") : "light_mode"}
          </span>
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={toggle}
          className="text-foreground/50 hover:text-primary transition-colors"
          aria-label="테마 전환"
        >
          <span className="material-symbols-outlined text-xl">
            {mounted ? (theme === "dark" ? "light_mode" : "dark_mode") : "light_mode"}
          </span>
        </button>
        <button
          className="text-primary"
          onClick={() => setOpen(!open)}
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-card/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 font-bold tracking-tight uppercase text-xs text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="mt-2 py-3 bg-primary text-primary-foreground font-bold tracking-tight uppercase text-xs text-center"
              onClick={() => setOpen(false)}
            >
              JOIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
