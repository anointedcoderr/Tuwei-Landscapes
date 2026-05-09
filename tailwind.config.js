/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1F5E3B",
        deepforest: "#0B2E1D",
        leaf: "#4CAF50",
        sage: "#DDEBDD",
        cream: "#F8F4EA",
        earth: "#7A5C3E",
        charcoal: "#1E1E1E",
        gold: "#C9A227"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(11, 46, 29, 0.18)",
        card: "0 6px 20px -8px rgba(11, 46, 29, 0.25)",
        gold: "0 10px 25px -10px rgba(201, 162, 39, 0.55)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
        fadeIn: "fadeIn 0.4s ease-out both"
      }
    }
  },
  plugins: []
};
