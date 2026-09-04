import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        namo: {
          green: {
            50: '#f2f9f4',
            100: '#e1f2e5',
            200: '#c3e3cc',
            300: '#96cdab',
            400: '#62af81',
            500: '#3e9363',
            600: '#2d764e',
            700: '#255e3f',
            800: '#214b34',
            900: '#1c3e2c',
          },
          brown: {
            50: '#f8f5f1',
            100: '#efebe3',
            200: '#dcd3c1',
            300: '#c3b398',
            400: '#a68c68',
            500: '#90724d',
            600: '#75593c',
            700: '#5e4631',
            800: '#4e3b2b',
            900: '#3f3125',
          }
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
