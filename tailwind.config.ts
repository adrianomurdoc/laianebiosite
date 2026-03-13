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
        // Paleta Cinematográfica e Luxuosa
        background: "#0A0A0A", // Preto Profundo (Base do site)
        surface: "#1A1A1A",    // Cinza Escuro (Para cards e elementos secundários)
        accent: {
          light: "#D9C4A8",    // Dourado Champanhe
          DEFAULT: "#C9A84C",  // Dourado Elegante (O teu Dourado)
          dark: "#3B2314",     // Marrom Profundo (Para sombras e profundidade)
        },
        ivory: "#F5EDD6",      // Bege Claro (Para textos principais, menos agressivo que o branco puro)
        muted: "#A0A0A0",      // Cinza para textos secundários
      },
      fontFamily: {
        // Títulos elegantes vs Corpo de texto legível
        cormorant: ["var(--font-cormorant)", "serif"], 
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(201, 168, 76, 0.15)',
        'neon-sm': '0 0 10px rgba(201, 168, 76, 0.1)',
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        }
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 3s linear infinite",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;