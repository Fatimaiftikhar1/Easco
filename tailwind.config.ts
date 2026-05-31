import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B2E5E",     // Target Navy (#1B2E5E)
        accent: "#2D5BE3",      // Target Accent Blue (#2D5BE3)
        customGray: "#F7F9FC",  // Target Light Gray (#F7F9FC)
        bodyColor: "#5A6A85",   // Target Gray Text (#5A6A85)
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        custom: "8px",
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};
export default config;
