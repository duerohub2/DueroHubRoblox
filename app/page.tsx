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

const gameThumbnails: Record<string, string> = {
  "Blox Fruits": "https://placehold.co/600x360/2F6FFF/FFFFFF?text=Blox+Fruits",
  "Steal an Egg": "https://placehold.co/600x360/FF4D8D/FFFFFF?text=Steal+an+Egg",
  "Pet Simulator 99": "https://placehold.co/600x360/C6FF3D/0B0B0B?text=Pet+Simulator+99",
  "Anime Legends": "https://placehold.co/600x360/FF8A00/FFFFFF?text=Anime+Legends",
  "Mega Tycoon": "https://placehold.co/600x360/FFD600/0B0B0B?text=Mega+Tycoon",
};
const fallbackThumbnail = "https://placehold.co/600x360/0B0B0B/FFFFFF?text=DUEROHUB";

function getThumbnail(game: string) {
  return gameThumbnails[game] ?? fallbackThumbnail;
}

const statusStyle: Record<Status, string> = {
  Verified: "bg-[#C6FF3D] text-black",
  Testing: "bg-[#FF8A00] text-white",
  Updated: "bg-[#2F6FFF] text-white",
};

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
      {/* HERO — SUPER BRUTAL */}
      <section className="border-b-[8px] border-black bg-[#FFDF00]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h1 className="font-display font-black text-7xl uppercase leading-[0.9] tracking-tighter text-white [text-shadow:6px_6px_0px_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000] md:text-9xl">
            DUEROHUB
          </h1>
          <div className="mt-8 max-w-xl border-4 border-black bg-white p-6 text-lg font-bold text-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            Duerohub. Built for players who demand elite, verified Roblox scripts with zero fluff.
          </div>
        </div>
      </section>

      {/* SEARCH & KATEGORI */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama script atau game..."
            className="w-full max-w-md border-4 border-black bg-white px-4 py-4 text-lg font-bold text-black placeholder:text-black/40 shadow-[8px_8px_0_0_#000] focus:outline-none"
          />
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-display border-4 border-black px-4 py-2 font-black uppercase tracking-wide shadow-[6px_6px_0_0_#000] transition-all active:translate-x-[6px] active:translate-y-[6px] active:shadow-none ${
                  activeCategory === cat ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID KATALOG */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        {filteredScripts.length === 0 ? (
          <div className="border-4 border-black bg-white p-10 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-display text-lg font-black uppercase">Tidak ada script ditemukan</p>
            <p className="mt-2 font-bold text-black/70">
              Coba kata kunci lain atau pilih kategori berbeda.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredScripts.map((script) => (
              <article
                key={script.id}
                className="flex flex-col border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="relative">
                  <img
                    src={getThumbnail(script.game)}
                    alt={script.game}
                    className="h-40 w-full border-b-4 border-black object-cover"
                  />
                  <span
                    className={`absolute left-3 top-3 border-4 border-black px-2 py-1 text-[10px] font-black uppercase ${statusStyle[script.status]}`}
                  >
                    {script.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-display text-lg uppercase leading-tight">{script.title}</h3>
                  <p className="font-bold text-black/70">{script.game}</p>
                  <p className="text-sm font-bold text-black/50">oleh {script.author}</p>
                  <Link
                    href={`/script/${script.id}`}
                    className="font-display mt-auto inline-flex items-center justify-center border-4 border-black bg-[#FFDF00] px-5 py-3 font-black uppercase tracking-wide text-black shadow-[6px_6px_0_0_#000] transition-all active:translate-x-2 active:translate-y-2 active:shadow-none"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
