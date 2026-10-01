"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "Verified" | "Testing" | "Updated";

type Script = {
  id: string;
  title: string;
  author: string;
  game: string;
  status: Status;
};

const scripts: Script[] = [
  { id: "1", title: "Auto Farm Pro", author: "RizkyDev", game: "Mega Tycoon", status: "Verified" },
  { id: "2", title: "Devil Fruit Locator", author: "KevinX", game: "Blox Fruits", status: "Verified" },
  { id: "3", title: "Fast Hatch", author: "Sari", game: "Steal an Egg", status: "Updated" },
  { id: "4", title: "Stat Booster", author: "Dimas", game: "Anime Legends", status: "Verified" },
  { id: "5", title: "Auto Collect", author: "Maya", game: "Pet Simulator 99", status: "Testing" },
  { id: "6", title: "Boss Radar", author: "Bagus", game: "Blox Fruits", status: "Verified" },
];

// Dimensi gambar diperpendek (600x200) supaya teks bawaan placeholder ikut
// mengecil secara proporsional saat kotaknya dipipihkan.
const gameThumbnails: Record<string, string> = {
  "Blox Fruits": "https://placehold.co/600x200/2F6FFF/FFFFFF?text=Blox+Fruits",
  "Steal an Egg": "https://placehold.co/600x200/FF70A6/FFFFFF?text=Steal+an+Egg",
  "Pet Simulator 99": "https://placehold.co/600x200/70C1B3/0B0B0B?text=Pet+Simulator+99",
  "Anime Legends": "https://placehold.co/600x200/FF5757/FFFFFF?text=Anime+Legends",
  "Mega Tycoon": "https://placehold.co/600x200/FFE500/0B0B0B?text=Mega+Tycoon",
};
const fallbackThumbnail = "https://placehold.co/600x200/0B0B0B/FFFFFF?text=DUEROHUB";

function getThumbnail(game: string) {
  return gameThumbnails[game] ?? fallbackThumbnail;
}

const statusStyle: Record<Status, string> = {
  Verified: "bg-[#70C1B3] text-black",
  Testing: "bg-[#FF70A6] text-black",
  Updated: "bg-[#578FFF] text-white",
};

const chipStyles = [
  { bg: "bg-[#FFE500]", text: "text-black" },
  { bg: "bg-[#FF70A6]", text: "text-black" },
  { bg: "bg-[#70C1B3]", text: "text-black" },
  { bg: "bg-[#578FFF]", text: "text-white" },
  { bg: "bg-[#FF5757]", text: "text-white" },
];

const cardButtonStyles = [
  { bg: "bg-[#FF5757]", text: "text-white" },
  { bg: "bg-[#578FFF]", text: "text-white" },
  { bg: "bg-[#FFE500]", text: "text-black" },
  { bg: "bg-[#70C1B3]", text: "text-black" },
];

const categories = ["Semua", ...Array.from(new Set(scripts.map((s) => s.game)))];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredScripts = scripts.filter((script) => {
    const matchesCategory = activeCategory === "Semua" || script.game === activeCategory;
    const matchesQuery =
      script.title.toLowerCase().includes(query.toLowerCase()) ||
      script.game.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      {/* HERO */}
      <section className="border-b-[8px] border-black bg-[#FFE500] py-12 md:py-16">
        <div className="mx-auto max-w-md p-3 sm:max-w-xl md:max-w-4xl md:p-6">
          <h1 className="font-display text-3xl font-black uppercase leading-[1] tracking-tighter text-white [text-shadow:6px_6px_0px_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000] sm:text-5xl md:text-7xl">
            DUEROHUB
          </h1>
          <div className="mt-6 max-w-xl border-4 border-black bg-white p-4 text-sm font-bold text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-5 sm:text-base">
            Duerohub. Built for players who demand elite, verified Roblox scripts with zero fluff.
          </div>
        </div>
      </section>

      {/* SEARCH & KATEGORI */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-md p-3 sm:max-w-xl md:max-w-4xl md:p-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama script atau game..."
            className="w-full border-4 border-black bg-white px-4 py-4 text-lg font-bold text-black placeholder:text-black/40 shadow-[8px_8px_0_0_#000] focus:outline-none md:max-w-md"
          />
          <div className="mt-5 flex flex-wrap gap-3">
            {categories.map((cat, index) => {
              const chip = chipStyles[index % chipStyles.length];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-display border-4 border-black px-3 py-1.5 text-xs font-black uppercase tracking-wide shadow-[6px_6px_0_0_#000] transition-all active:translate-x-[6px] active:translate-y-[6px] active:shadow-none sm:px-4 sm:py-2 sm:text-sm ${
                    isActive ? "bg-black text-white" : `${chip.bg} ${chip.text}`
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRID KATALOG */}
      <section className="pb-16">
        <div className="mx-auto max-w-md p-3 sm:max-w-xl md:max-w-4xl md:p-6">
          {filteredScripts.length === 0 ? (
            <div className="border-4 border-black bg-white p-10 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-display text-lg font-black uppercase">Tidak ada script ditemukan</p>
              <p className="mt-2 font-bold text-black/70">
                Coba kata kunci lain atau pilih kategori berbeda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {filteredScripts.map((script, index) => {
                const btn = cardButtonStyles[index % cardButtonStyles.length];
                return (
                  <article
                    key={script.id}
                    className="flex flex-col border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="relative">
                      <img
                        src={getThumbnail(script.game)}
                        alt={script.game}
                        className="h-24 w-full border-b-4 border-black object-cover sm:h-28"
                      />
                      <span
                        className={`absolute left-2 top-2 border-2 border-black px-1.5 py-0.5 text-[9px] font-black uppercase ${statusStyle[script.status]}`}
                      >
                        {script.status}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5 p-4">
                      <h3 className="font-display text-base uppercase leading-tight">{script.title}</h3>
                      <p className="text-sm font-bold text-black/70">{script.game}</p>
                      <p className="text-xs font-bold text-black/50">oleh {script.author}</p>
                      <Link
                        href={`/script/${script.id}`}
                        className={`font-display mt-3 inline-flex items-center justify-center border-4 border-black px-4 py-2.5 text-sm font-black uppercase tracking-wide shadow-[6px_6px_0_0_#000] transition-all active:translate-x-2 active:translate-y-2 active:shadow-none ${btn.bg} ${btn.text}`}
                      >
                        View Details
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
