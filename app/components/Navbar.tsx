"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "HOME", bg: "bg-[#FFE500]", text: "text-black" },
  { href: "/trending", label: "TRENDING", bg: "bg-[#70C1B3]", text: "text-black" },
  { href: "/upload", label: "UPLOAD", bg: "bg-[#FF5757]", text: "text-white" },
  { href: "/login", label: "LOGIN", bg: "bg-[#578FFF]", text: "text-white" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[6px] border-black bg-white">
      <div className="relative mx-auto flex max-w-md items-center justify-between p-3 sm:max-w-xl md:max-w-4xl md:p-6">
        <Link
          href="/"
          className="border-4 border-black bg-[#FFE500] px-3 py-1 font-display text-xl font-black tracking-wider text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          DUEROHUB
        </Link>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-4 border-black px-4 py-2 font-display text-sm font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${link.bg} ${link.text}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Tombol hamburger - mobile saja */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Buka menu"
          aria-expanded={open}
          className="flex h-11 w-11 flex-none flex-col items-center justify-center gap-1.5 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hidden"
        >
          <span className="h-[3px] w-6 bg-black" />
          <span className="h-[3px] w-6 bg-black" />
          <span className="h-[3px] w-6 bg-black" />
        </button>

        {/* Dropdown mobile - melayang di atas konten, tidak mendorong layout */}
        {open && (
          <nav className="absolute inset-x-3 top-full z-40 mt-2 flex flex-col gap-3 border-4 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-4 border-black px-4 py-3 text-center font-display text-sm font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${link.bg} ${link.text}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
