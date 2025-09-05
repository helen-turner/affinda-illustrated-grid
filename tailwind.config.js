import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '729px',
        'xl-custom': '1139px',
      },
      fontFamily: {
        neusans: ['var(--font-neusans)', 'system-ui', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['56px', { lineHeight: '1.1', letterSpacing: '-1.12px' }],
        'heading-2': ['44px', { lineHeight: '1.1', letterSpacing: '-0.88px' }],
        'body-large': ['18px', { lineHeight: '26px' }],
        'button': ['16px', { lineHeight: '24px' }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
