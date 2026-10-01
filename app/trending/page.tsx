type Accent = "pink" | "blue" | "lime" | "orange";

type TrendingScript = {
  id: string;
  rank: number;
  title: string;
  game: string;
  author: string;
  downloads: number;
  accent: Accent;
};

const trendingScripts: TrendingScript[] = [
  { id: "1", rank: 1, title: "Stat Booster", game: "Anime Legends", author: "Dimas", downloads: 21030, accent: "lime" },
  { id: "2", rank: 2, title: "Auto Farm Pro", game: "Mega Tycoon", author: "RizkyDev", downloads: 15420, accent: "pink" },
  { id: "3", rank: 3, title: "Fast Hatch", game: "Pet Rush", author: "Sari", downloads: 12890, accent: "pink" },
  { id: "4", rank: 4, title: "Combo Helper", game: "Blade Arena", author: "KevinX", downloads: 9830, accent: "blue" },
  { id: "5", rank: 5, title: "Ghost Vision", game: "Shadow Horror", author: "Maya", downloads: 7210, accent: "orange" },
  { id: "6", rank: 6, title: "Role Switcher", game: "City Roleplay", author: "Bagus", downloads: 5640, accent: "blue" },
];

const accentBg: Record<Accent, string> = {
  pink: "bg-brutal-pink",
  blue: "bg-brutal-blue",
  lime: "bg-brutal-lime",
  orange: "bg-brutal-orange",
};

export default function TrendingPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-14">
      <h1 className="font-display text-3xl uppercase sm:text-5xl">Trending Minggu Ini</h1>
      <p className="mt-3 max-w-xl font-body text-brutal-ink/70">
        Diurutkan dari jumlah salin script terbanyak oleh komunitas.
      </p>
      <div className="mt-10 flex flex-col gap-5">
        {trendingScripts.map((script) => (
          <article key={script.id} className="card-brutal flex items-center gap-5 p-5">
            <div
              className={`flex h-12 w-12 flex-none items-center justify-center border-[3px] border-brutal-ink font-display text-lg ${accentBg[script.accent]}`}
            >
              {script.rank}
            </div>
            <div className="flex-1">
              <h2 className="font-display text-base uppercase sm:text-lg">{script.title}</h2>
              <p className="font-body text-sm text-brutal-ink/70">{script.game}</p>
              <p className="font-body text-sm text-brutal-ink/50">oleh {script.author}</p>
            </div>
            <div className="flex-none text-right">
              <p className="font-display text-sm sm:text-base">{script.downloads.toLocaleString("id-ID")}</p>
              <p className="font-body text-xs uppercase tracking-wide text-brutal-ink/50">disalin</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
