import type { Metadata } from "next";
import Link from "next/link";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Space_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "DUEROHUB — Katalog Script Roblox",
  description:
    "Temukan, upload, dan bagikan script Roblox dari komunitas DUEROHUB.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/trending", label: "Trending" },
  { href: "/upload", label: "Upload" },
  { href: "/login", label: "Login" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-brutal-page font-body text-brutal-ink">
        <header className="border-b-4 border-brutal-ink bg-brutal-page">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-5 sm:flex-row sm:justify-between">
            <Link
              href="/"
              className="inline-block -rotate-1 border-[3px] border-brutal-ink bg-brutal-pink px-4 py-1.5 font-display text-xl text-white shadow-brutal-sm"
            >
              DUEROHUB
            </Link>
            <nav className="flex flex-wrap items-center justify-center gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-[3px] border-brutal-ink bg-white px-4 py-2 font-display text-xs uppercase tracking-wide shadow-brutal-sm transition-transform hover:-translate-y-0.5 hover:shadow-brutal"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t-4 border-brutal-ink bg-brutal-ink px-5 py-6 text-center font-body text-sm text-white">
          DUEROHUB — dibuat oleh komunitas, untuk komunitas.
        </footer>
      </body>
    </html>
  );
}
