"use client";

import { useState, FormEvent } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: hubungkan ke sistem autentikasi kamu di sini
    console.log({ email, password });
  };

  return (
    <section className="mx-auto flex max-w-md flex-col px-5 py-16">
      <div className="card-brutal p-8">
        <h1 className="font-display text-2xl uppercase sm:text-3xl">Masuk ke DUEROHUB</h1>
        <p className="mt-2 font-body text-sm text-brutal-ink/70">
          Masuk untuk upload dan menyimpan script favoritmu.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div>
            <label htmlFor="email" className="label-brutal">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="input-brutal mt-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="label-brutal">Kata Sandi</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="input-brutal mt-2"
            />
          </div>
          <button type="submit" className="btn-brutal mt-2">
            Masuk
          </button>
        </form>

        <p className="mt-6 font-body text-sm text-brutal-ink/50">
          Pendaftaran akun akan segera hadir.
        </p>
      </div>
    </section>
  );
}
