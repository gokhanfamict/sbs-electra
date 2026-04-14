import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { 
        primary: "#0A192F", 
        accent: "#00C2A8", 
        light: "#F8F9FA", 
        "text-dark": "#333333" 
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
export default config;
