"use client";

import { useState, FormEvent } from "react";

const gameCategories = ["Blox Fruits", "Steal an Egg", "Pet Simulator 99", "Anime Legends", "Mega Tycoon"];

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [game, setGame] = useState(gameCategories[0]);
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: kirim data ini ke API/database kamu di sini.
    // Sengaja tidak ada input gambar — thumbnail diambil otomatis di halaman
    // lain berdasarkan nilai `game`, lewat mapping di Admin Dashboard.
    console.log({ title, game, code });
    setSubmitted(true);
    setTitle("");
    setGame(gameCategories[0]);
    setCode("");
  };

  return (
    <section className="mx-auto max-w-2xl px-5 py-14">
      <h1 className="font-display text-3xl uppercase sm:text-5xl">Upload Script</h1>
      <p className="mt-3 font-body text-brutal-ink/70">
        Pilih kategori game — thumbnail terpasang otomatis, tanpa perlu upload gambar.
      </p>

      {submitted && (
        <div className="card-brutal mt-6 bg-brutal-lime p-4">
          <p className="font-display text-sm uppercase">Script terkirim</p>
          <p className="mt-1 font-body text-sm">Terima kasih! Script kamu sedang kami proses.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
        <div>
          <label htmlFor="title" className="label-brutal">Judul Script</label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Contoh: Auto Farm Pro"
            className="input-brutal mt-2"
          />
        </div>

        <div>
          <label htmlFor="game" className="label-brutal">Kategori Game</label>
          <select
            id="game"
            value={game}
            onChange={(e) => setGame(e.target.value)}
            className="input-brutal mt-2"
          >
            {gameCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="code" className="label-brutal">Kode Lua</label>
          <textarea
            id="code"
            required
            rows={10}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste kode Lua kamu di sini..."
            className="input-brutal mt-2 font-mono text-sm"
          />
        </div>

        <button type="submit" className="btn-brutal self-start">
          Kirim Script
        </button>
      </form>
    </section>
  );
}
