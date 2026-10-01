"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const gameCategories = ["Blox Fruits", "Steal an Egg", "Pet Simulator 99", "Anime Legends", "Mega Tycoon"];

export default function UploadPage() {
  const isAuthenticated = false;

  const [title, setTitle] = useState("");
  const [game, setGame] = useState(gameCategories[0]);
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: kirim data ini ke API/database kamu di sini.
    console.log({ title, game, code });
    setSubmitted(true);
    setTitle("");
    setGame(gameCategories[0]);
    setCode("");
  };

  if (!isAuthenticated) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-brutal-page px-5 py-14">
        <div className="w-full max-w-md border-4 border-black bg-[#FF5757] p-8 text-center text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="font-display text-3xl uppercase">Access Denied</h1>
          <p className="mt-4 font-body text-sm">
            You must log in or create an account to upload scripts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/login"
              className="flex-1 border-[3px] border-black bg-white px-5 py-3 font-display text-xs uppercase tracking-wide text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="flex-1 border-[3px] border-black bg-black px-5 py-3 font-display text-xs uppercase tracking-wide text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    );
  }

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
