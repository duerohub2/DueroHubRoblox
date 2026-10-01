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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-brutal-page font-body text-brutal-ink">
        <header className="w-full flex flex-row justify-between items-center px-4 py-4 border-b-[6px] border-black bg-[#FFFDF9] sticky top-0 z-50">
  <div className="flex-shrink-0">
    <Link href="/" className="text-xl md:text-2xl font-black tracking-wider bg-[#FFDE59] px-3 py-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      DUEROHUB
    </Link>
  </div>

  <nav className="flex flex-row flex-nowrap justify-end items-center gap-1 md:gap-4 text-[10px] md:text-sm font-black">
    <Link href="/" className="px-2 py-1 md:px-3 md:py-1.5 border-4 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">HOME</Link>
    <Link href="/trending" className="px-2 py-1 md:px-3 md:py-1.5 border-4 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">TRENDING</Link>
    <Link href="/upload" className="px-2 py-1 md:px-3 md:py-1.5 border-4 border-black bg-[#FF5757] text-white hover:bg-black transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">UPLOAD</Link>
    <Link href="/login" className="px-2 py-1 md:px-3 md:py-1.5 border-4 border-black bg-[#578FFF] text-white hover:bg-black transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">LOGIN</Link>
  </nav>
</header>

        <main>{children}</main>
        <footer className="border-t-4 border-brutal-ink bg-brutal-ink px-5 py-6 text-center font-body text-sm text-white">
          DUEROHUB — dibuat oleh komunitas, untuk komunitas.
        </footer>
      </body>
    </html>
  );
}
