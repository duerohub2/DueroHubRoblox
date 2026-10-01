import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brutal: {
          page: "#FFF3DA",
          ink: "#0B0B0B",
          pink: "#FF4D8D",
          blue: "#2F6FFF",
          lime: "#C6FF3D",
          orange: "#FF8A00",
          yellow: "#FFD600",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        "brutal-sm": "2px 2px 0px 0px rgba(11,11,11,1)",
        brutal: "4px 4px 0px 0px rgba(11,11,11,1)",
        "brutal-lg": "8px 8px 0px 0px rgba(11,11,11,1)",
      },
    },
  },
  plugins: [],
};

export default config;
