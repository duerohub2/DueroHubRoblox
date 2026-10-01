"use client";

import { useState } from "react";
import Link from "next/link";

type Accent = "pink" | "blue" | "lime" | "orange";

type Script = {
  id: string;
  title: string;
  game: string;
  author: string;
  category: string;
  downloads: number;
  accent: Accent;
  description: string;
  code: string;
};

const scripts: Script[] = [
  {
    id: "1",
    title: "Auto Farm Pro",
    game: "Mega Tycoon",
    author: "RizkyDev",
    category: "Tycoon",
    downloads: 15420,
    accent: "pink",
    description: "Otomatis mengumpulkan koin setiap beberapa detik di Mega Tycoon.",
    code: "-- Auto Farm Pro\nprint('Auto farm aktif')",
  },
  {
    id: "2",
    title: "Combo Helper",
    game: "Blade Arena",
    author: "KevinX",
    category: "Fighting",
    downloads: 9830,
    accent: "blue",
    description: "Menampilkan urutan combo terbaik secara real-time.",
    code: "-- Combo Helper\nprint('Combo helper siap')",
  },
  {
    id: "3",
    title: "Ghost Vision",
    game: "Shadow Horror",
    author: "Maya",
    category: "Horror",
    downloads: 7210,
    accent: "orange",
    description: "Menyorot lokasi hantu agar lebih mudah dihindari.",
    code: "-- Ghost Vision\nprint('Ghost vision diaktifkan')",
  },
  {
    id: "4",
    title: "Stat Booster",
    game: "Anime Legends",
    author: "Dimas",
    category: "Anime",
    downloads: 21030,
    accent: "lime",
    description: "Menambah tampilan statistik karakter secara instan.",
    code: "-- Stat Booster\nprint('Stat boost aktif')",
  },
  {
    id: "5",
    title: "Fast Hatch",
    game: "Pet Rush",
    author: "Sari",
    category: "Simulator",
    downloads: 12890,
    accent: "pink",
    description: "Mempercepat animasi penetasan telur peliharaan.",
    code: "-- Fast Hatch\nprint('Fast hatch dimulai')",
  },
  {
    id: "6",
    title: "Role Switcher",
    game: "City Roleplay",
    author: "Bagus",
    category: "Roleplay",
    downloads: 5640,
    accent: "blue",
    description: "Memudahkan berpindah peran dalam mode roleplay.",
    code: "-- Role Switcher\nprint('Role switcher siap')",
  },
];

const categories = ["Semua", ...Array.from(new Set(scripts.map((s) => s.category)))];

const accentBg: Record<Accent, string> = {
  pink: "bg-brutal-pink",
  blue: "bg-brutal-blue",
  lime: "bg-brutal-lime",
  orange: "bg-brutal-orange",
};

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredScripts = scripts.filter((script) => {
    const matchesCategory = activeCategory === "Semua" || script.category === activeCategory;
    const matchesQuery =
      script.title.toLowerCase().includes(query.toLowerCase()) ||
      script.game.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleCopy = async (script: Script) => {
    try {
      await navigator.clipboard.writeText(script.code);
      setCopiedId(script.id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <>
      <section className="border-b-4 border-brutal-ink bg-brutal-yellow">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <h1 className="max-w-3xl font-display text-4xl uppercase leading-[1.05] sm:text-6xl">
            Katalog Script Roblox Buatan Komunitas
          </h1>
          <p className="mt-5 max-w-xl font-body text-base sm:text-lg">
            Cari, salin, dan bagikan script untuk game Roblox favoritmu — semua
            diunggah langsung oleh sesama pemain.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/upload" className="btn-brutal-alt">
              Upload Script
            </Link>
            <Link href="/trending" className="btn-brutal">
              Lihat Trending
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama script atau game..."
            className="input-brutal sm:max-w-sm"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`border-[3px] border-brutal-ink px-4 py-2 font-display text-xs uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${
                  activeCategory === cat
                    ? "bg-brutal-ink text-white shadow-brutal-sm"
                    : "bg-white shadow-brutal-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        {filteredScripts.length === 0 ? (
          <div className="card-brutal p-10 text-center">
            <p className="font-display text-lg uppercase">Tidak ada script ditemukan</p>
            <p className="mt-2 font-body text-sm text-brutal-ink/70">
              Coba kata kunci lain atau pilih kategori berbeda.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredScripts.map((script) => (
              <article key={script.id} className="card-brutal flex flex-col">
                <div className={`border-b-[3px] border-brutal-ink px-5 py-3 ${accentBg[script.accent]}`}>
                  <p className="font-display text-[11px] uppercase tracking-wide">
                    {script.category}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-display text-lg uppercase leading-tight">{script.title}</h3>
                  <p className="font-body text-sm text-brutal-ink/70">{script.game}</p>
                  <p className="font-body text-sm text-brutal-ink/50">oleh {script.author}</p>
                  {expandedId === script.id && (
                    <p className="font-body text-sm text-brutal-ink/80">{script.description}</p>
                  )}
                  <div className="mt-auto flex flex-wrap gap-3 pt-3">
                    <button onClick={() => handleCopy(script)} className="btn-brutal flex-1">
                      {copiedId === script.id ? "Tersalin!" : "Copy Script"}
                    </button>
                    <button
                      onClick={() => setExpandedId(expandedId === script.id ? null : script.id)}
                      className="btn-brutal-alt flex-1"
                    >
                      {expandedId === script.id ? "Tutup" : "Details"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
