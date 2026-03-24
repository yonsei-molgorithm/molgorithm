"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/awards", label: "AWARDS" },
  { href: "/activities", label: "ACTIVITIES" },
  { href: "/members", label: "MEMBERS" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#1f1f1f]/80 backdrop-blur-xl shadow-[0_40px_80px_rgba(157,226,255,0.06)]"
          : "bg-[#1f1f1f]/60 backdrop-blur-xl shadow-[0_40px_80px_rgba(157,226,255,0.06)]"
      )}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 py-6">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-primary"
        >
          MOLGORITHM
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild active={isActive}>
                      <Link
                        href={link.href}
                        className={cn(
                          "px-3 py-2 font-bold tracking-tight uppercase text-xs rounded-md outline-none transition-colors",
                          "focus-visible:ring-2 focus-visible:ring-ring/50",
                          isActive
                            ? "text-primary"
                            : "text-white/70 hover:text-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-4">
            <Button asChild>
              <Link href="/join">JOIN</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/donate">DONATE</Link>
            </Button>
          </div>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </nav>
    </header>
  );
}