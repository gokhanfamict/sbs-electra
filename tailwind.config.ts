import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { 
        primary: "#202020", 
        accent: "#dd1a12", 
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
