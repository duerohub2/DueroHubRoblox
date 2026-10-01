"use client";

import { useState } from "react";

type ThumbnailEntry = {
  game: string;
  url: string;
};

const initialThumbnails: ThumbnailEntry[] = [
  { game: "Blox Fruits", url: "https://placehold.co/300x180/2F6FFF/FFFFFF?text=Blox+Fruits" },
  { game: "Steal an Egg", url: "https://placehold.co/300x180/FF4D8D/FFFFFF?text=Steal+an+Egg" },
  { game: "Pet Simulator 99", url: "https://placehold.co/300x180/C6FF3D/0B0B0B?text=Pet+Simulator+99" },
  { game: "Anime Legends", url: "https://placehold.co/300x180/FF8A00/FFFFFF?text=Anime+Legends" },
  { game: "Mega Tycoon", url: "https://placehold.co/300x180/FFD600/0B0B0B?text=Mega+Tycoon" },
];

export default function AdminPage() {
  const [thumbnails, setThumbnails] = useState(initialThumbnails);
  const [drafts, setDrafts] = useState<Record<string, string>>(
    Object.fromEntries(initialThumbnails.map((t) => [t.game, t.url]))
  );
  const [savedGame, setSavedGame] = useState<string | null>(null);

  const handleDraftChange = (game: string, value: string) => {
    setDrafts((prev) => ({ ...prev, [game]: value }));
  };

  const handleSave = (game: string) => {
    // TODO: simpan ke database/API supaya mapping ini sinkron di semua halaman.
    setThumbnails((prev) =>
      prev.map((t) => (t.game === game ? { ...t, url: drafts[game] } : t))
    );
    setSavedGame(game);
    setTimeout(() => setSavedGame(null), 1500);
  };

  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="font-display text-3xl uppercase sm:text-5xl">Admin Dashboard</h1>
      <p className="mt-3 max-w-xl font-body text-brutal-ink/70">
        Kelola thumbnail yang tampil otomatis untuk setiap kategori game.
      </p>

      <div className="card-brutal mt-8 p-4 text-sm text-brutal-ink/60 sm:p-5">
        Perubahan di bawah ini hanya tersimpan secara lokal di sesi ini (demo). Sambungkan ke
        database agar perubahannya permanen dan muncul di semua halaman.
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr className="border-[3px] border-brutal-ink bg-brutal-ink text-white">
              <th className="p-3 text-left font-display text-xs uppercase">Preview</th>
              <th className="p-3 text-left font-display text-xs uppercase">Kategori Game</th>
              <th className="p-3 text-left font-display text-xs uppercase">URL Gambar</th>
              <th className="p-3 text-left font-display text-xs uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {thumbnails.map((entry) => (
              <tr key={entry.game} className="border-[3px] border-t-0 border-brutal-ink bg-white">
                <td className="p-3">
                  <img
                    src={entry.url}
                    alt={entry.game}
                    className="h-14 w-24 border-[3px] border-brutal-ink object-cover"
                  />
                </td>
                <td className="p-3 font-display text-sm uppercase">{entry.game}</td>
                <td className="p-3">
                  <input
                    type="text"
                    value={drafts[entry.game]}
                    onChange={(e) => handleDraftChange(entry.game, e.target.value)}
                    className="input-brutal"
                  />
                </td>
                <td className="p-3">
                  <button onClick={() => handleSave(entry.game)} className="btn-brutal-alt">
                    {savedGame === entry.game ? "Tersimpan!" : "Simpan"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
