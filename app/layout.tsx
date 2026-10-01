import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
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
      <body className="min-h-screen bg-white font-body text-black">
        <Navbar />
        <main>{children}</main>
        <footer className="border-t-[6px] border-black bg-black px-5 py-6 text-center font-body text-sm text-white">
          DUEROHUB — dibuat oleh komunitas, untuk komunitas.
        </footer>
      </body>
    </html>
  );
}
