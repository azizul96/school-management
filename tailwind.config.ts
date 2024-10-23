import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        alifSky: "#4be8d7",
        alifSkyLight: "#EDF9FD",
        alifPurple: "#E4B1F0",
        alifPurpleLight: "#F1F0FF",
        alifYellow: "#FAE27C",
        alifYellowLight: "#FEFCE8",
        alifGreen: "#015a46",
        alifBlue: "#2cafff",
      },
    },
  },
  plugins: [],
};
export default config;
