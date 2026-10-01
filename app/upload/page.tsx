"use client";

import { useState, FormEvent } from "react";

const categories = ["Simulator", "Tycoon", "Fighting", "Horror", "Anime", "Roleplay", "Lainnya"];

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [game, setGame] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: kirim data ini ke API/database kamu di sini
    console.log({ title, game, category, description, code });
    setSubmitted(true);
    setTitle("");
    setGame("");
    setCategory(categories[0]);
    setDescription("");
    setCode("");
  };

  return (
    <section className="mx-auto max-w-2xl px-5 py-14">
      <h1 className="font-display text-3xl uppercase sm:text-5xl">Upload Script</h1>
      <p className="mt-3 font-body text-brutal-ink/70">
        Bagikan script buatanmu supaya bisa dipakai pemain lain.
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
          <label htmlFor="game" className="label-brutal">Nama Game</label>
          <input
            id="game"
            type="text"
            required
            value={game}
            onChange={(e) => setGame(e.target.value)}
            placeholder="Contoh: Mega Tycoon"
            className="input-brutal mt-2"
          />
        </div>

        <div>
          <label htmlFor="category" className="label-brutal">Kategori</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-brutal mt-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description" className="label-brutal">Deskripsi</label>
          <textarea
            id="description"
            required
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Jelaskan fungsi script ini secara singkat"
            className="input-brutal mt-2"
          />
        </div>

        <div>
          <label htmlFor="code" className="label-brutal">Kode Script</label>
          <textarea
            id="code"
            required
            rows={8}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste kode script Roblox kamu di sini..."
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
