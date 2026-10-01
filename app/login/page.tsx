"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: hubungkan ke sistem autentikasi kamu di sini
    console.log({ email, password });
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FFFDF9] px-5 py-14">
      <div className="w-full max-w-md border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:p-10">
        <h1 className="font-display text-2xl uppercase text-black sm:text-3xl">
          Login ke Duerohub
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div>
            <label htmlFor="email" className="font-display text-xs uppercase tracking-wide text-black">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="mt-2 w-full border-2 border-black bg-white px-4 py-3 font-body text-base text-black placeholder:text-black/40 focus:outline-none focus:bg-[#FFF8DD] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>

          <div>
            <label htmlFor="password" className="font-display text-xs uppercase tracking-wide text-black">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full border-2 border-black bg-white px-4 py-3 font-body text-base text-black placeholder:text-black/40 focus:outline-none focus:bg-[#FFF8DD] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>

          <button
            type="submit"
            className="mt-2 border-4 border-black bg-[#FF5757] px-5 py-3 font-display text-sm uppercase tracking-wide text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Masuk Sekarang
          </button>
        </form>

        <p className="mt-6 text-center font-body text-sm text-black">
          Belum punya akun?{" "}
          <Link href="/register" className="font-bold underline decoration-2 underline-offset-2">
            Buat akun di sini
          </Link>
        </p>
      </div>
    </section>
  );
}
