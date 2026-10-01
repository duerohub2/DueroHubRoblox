"use client";

import { useState } from "react";

type Status = "Verified" | "Testing" | "Updated";

type ScriptDetail = {
  id: string;
  title: string;
  author: string;
  game: string;
  status: Status;
  instructions: string;
  code: string;
};

const scripts: ScriptDetail[] = [
  {
    id: "1",
    title: "Auto Farm Pro",
    author: "RizkyDev",
    game: "Mega Tycoon",
    status: "Verified",
    instructions: "Jalankan di lobi sebelum masuk ke area farming. Matikan auto-save game.",
    code: "-- Auto Farm Pro\nprint('Auto farm aktif')",
  },
  {
    id: "2",
    title: "Devil Fruit Locator",
    author: "KevinX",
    game: "Blox Fruits",
    status: "Verified",
    instructions: "Jalankan setelah spawn. Lokasi devil fruit akan muncul di layar.",
    code: "-- Devil Fruit Locator\nprint('Locator aktif')",
  },
  {
    id: "3",
    title: "Fast Hatch",
    author: "Sari",
    game: "Steal an Egg",
    status: "Updated",
    instructions: "Jalankan di area penetasan telur untuk mempercepat animasi hatch.",
    code: "-- Fast Hatch\nprint('Fast hatch dimulai')",
  },
  {
    id: "4",
    title: "Stat Booster",
    author: "Dimas",
    game: "Anime Legends",
    status: "Verified",
    instructions: "Jalankan sekali di awal sesi untuk menampilkan statistik tambahan.",
    code: "-- Stat Booster\nprint('Stat boost aktif')",
  },
  {
    id: "5",
    title: "Auto Collect",
    author: "Maya",
    game: "Pet Simulator 99",
    status: "Testing",
    instructions: "Masih tahap uji coba — laporkan bug ke Discord komunitas.",
    code: "-- Auto Collect\nprint('Auto collect aktif')",
  },
  {
    id: "6",
    title: "Boss Radar",
    author: "Bagus",
    game: "Blox Fruits",
    status: "Verified",
    instructions: "Jalankan sebelum memasuki area boss untuk melihat lokasi spawn.",
    code: "-- Boss Radar\nprint('Boss radar aktif')",
  },
];

const gameThumbnails: Record<string, string> = {
  "Blox Fruits": "https://placehold.co/800x450/2F6FFF/FFFFFF?text=Blox+Fruits",
  "Steal an Egg": "https://placehold.co/800x450/FF4D8D/FFFFFF?text=Steal+an+Egg",
  "Pet Simulator 99": "https://placehold.co/800x450/C6FF3D/0B0B0B?text=Pet+Simulator+99",
  "Anime Legends": "https://placehold.co/800x450/FF8A00/FFFFFF?text=Anime+Legends",
  "Mega Tycoon": "https://placehold.co/800x450/FFD600/0B0B0B?text=Mega+Tycoon",
};
const fallbackThumbnail = "https://placehold.co/800x450/0B0B0B/FFFFFF?text=DUEROHUB";

function getThumbnail(game: string) {
  return gameThumbnails[game] ?? fallbackThumbnail;
}

const statusStyle: Record<Status, string> = {
  Verified: "bg-brutal-lime text-brutal-ink",
  Testing: "bg-brutal-orange text-white",
  Updated: "bg-brutal-blue text-white",
};

export default function ScriptDetailPage({ params }: { params: { id: string } }) {
  const script = scripts.find((s) => s.id === params.id);
  const [copied, setCopied] = useState(false);

  if (!script) {
    return (
      <section className="mx-auto max-w-2xl px-5 py-20 text-center">
        <p className="font-display text-2xl uppercase">Script tidak ditemukan</p>
        <p className="mt-2 font-body text-brutal-ink/70">
          Script yang kamu cari mungkin sudah dihapus atau belum tersedia.
        </p>
      </section>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(script.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="mx-auto max-w-3xl px-5 py-14">
      <div className="card-brutal overflow-hidden">
        <div className="relative">
          <img
            src={getThumbnail(script.game)}
            alt={script.game}
            className="h-56 w-full border-b-[3px] border-brutal-ink object-cover sm:h-72"
          />
          <span
            className={`absolute left-4 top-4 border-[3px] border-brutal-ink px-3 py-1 font-display text-xs uppercase ${statusStyle[script.status]}`}
          >
            {script.status}
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <h1 className="font-display text-2xl uppercase sm:text-4xl">{script.title}</h1>
          <p className="mt-2 font-body text-brutal-ink/70">{script.game}</p>
          <p className="mt-1 font-body text-sm text-brutal-ink/50">oleh {script.author}</p>

          <div className="mt-6">
            <h2 className="label-brutal">Instruksi</h2>
            <p className="mt-2 font-body text-sm text-brutal-ink/80">{script.instructions}</p>
          </div>

          <div className="mt-6">
            <h2 className="label-brutal">Code</h2>
            <pre className="mt-2 overflow-x-auto border-[3px] border-brutal-ink bg-[#1C1F22] p-4 font-mono text-sm text-brutal-lime">
              {script.code}
            </pre>
          </div>

          <button onClick={handleCopy} className="btn-brutal mt-6 w-full py-4 text-sm">
            {copied ? "Tersalin ke Clipboard!" : "Copy Script to Clipboard"}
          </button>
        </div>
      </div>
    </section>
  );
}
