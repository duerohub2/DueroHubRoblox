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

// Mapping kategori game -> thumbnail. Idealnya diambil dari database yang
// diisi lewat Admin Dashboard (lihat app/admin/page.tsx), bukan di-hardcode.
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
  Verified: "bg-brutal-lime text-brutal-ink",
  Testing: "bg-brutal-orange text-white",
  Updated: "bg-brutal-blue text-white",
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
      <section className="border-b-4 border-brutal-ink bg-[#1C1F22]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h1 className="font-display text-5xl uppercase tracking-tight text-brutal-yellow sm:text-7xl">
            DUEROHUB
          </h1>
          <p className="mt-5 max-w-xl font-body text-base text-white/80 sm:text-lg">
            Duerohub. Built for players who demand elite, verified Roblox scripts with zero fluff.
          </p>
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
                <div className="relative">
                  <img
                    src={getThumbnail(script.game)}
                    alt={script.game}
                    className="h-40 w-full border-b-[3px] border-brutal-ink object-cover"
                  />
                  <span
                    className={`absolute left-3 top-3 border-[3px] border-brutal-ink px-2 py-1 font-display text-[10px] uppercase ${statusStyle[script.status]}`}
                  >
                    {script.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-display text-lg uppercase leading-tight">{script.title}</h3>
                  <p className="font-body text-sm text-brutal-ink/70">{script.game}</p>
                  <p className="font-body text-sm text-brutal-ink/50">oleh {script.author}</p>
                  <Link href={`/script/${script.id}`} className="btn-brutal mt-auto">
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
