"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { theSeasons } from "../../fonts"; // adjust path if needed

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
];

// Default NavBar for all pages layout
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className={theSeasons.className}>
        <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur-md">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            {/* Left Side Logo and Brand */}
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <div className="relative h-8 w-8">
                <Image
                  src="/yourmoment-logo-white-transparent.png"
                  alt="Your Moment Adelaide"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white">
                  Your Moment
                </span>
                <span className="text-[11px] text-zinc-400">
                  Adelaide | Room Styling
                </span>
              </div>
            </Link>
            {/* Desktop View*/}
            <div className="hidden items-center gap-6 text-xs font-medium text-zinc-300 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition hover:text-white ${
                    isActive(link.href) ? "text-white" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://instagram.com/yourmomentadelaide"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold text-white hover:bg-white hover:text-black transition"
              >
                Instagram
              </a>
            </div>
            {/* Mobile Menu View */}
            <button
              className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <div className="space-y-1">
                <span className="block h-[2px] w-4 bg-white" />
                <span className="block h-[2px] w-4 bg-white" />
              </div>
            </button>
          </nav>
          {/* Mobile dropdown */}
          {open && (
            <div className="border-t border-white/5 bg-black/90 px-4 py-3 text-sm text-zinc-200 md:hidden">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`py-1 ${
                      isActive(link.href) ? "text-white font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://instagram.com/yourmomentadelaide"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 rounded-full border border-white/20 px-3 py-1 text-[12px] font-semibold text-white text-center hover:bg-white hover:text-black transition"
                  onClick={() => setOpen(false)}
                >
                  Instagram
                </a>
              </div>
            </div>
          )}
        </header>
    </div>
  );
}
