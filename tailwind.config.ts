import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(65.3deg, #0575E6 6.93%, #021B79 89.92%)",
      },
      colors: {
        paleBlue: "#DBE9FE",
        customGrey: "#0000001F",
        mediumGray: "#8F8F8F",
      },
    },
  },
  plugins: [],
};
export default config;
