import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#F1F0FB", // Soft gray
        foreground: "#8E9196", // Neutral gray
        primary: {
          DEFAULT: "#D3E4FD", // Soft blue
          foreground: "#8A898C", // Medium gray
        },
        secondary: {
          DEFAULT: "#E5DEFF", // Soft purple
          foreground: "#8A898C", // Medium gray
        },
        destructive: {
          DEFAULT: "#FFDEE2", // Soft pink
          foreground: "#8A898C", // Medium gray
        },
        muted: {
          DEFAULT: "#F2FCE2", // Soft green
          foreground: "#999", // Medium gray
        },
        accent: {
          DEFAULT: "#FDE1D3", // Soft peach
          foreground: "#8A898C", // Medium gray
        },
        popover: {
          DEFAULT: "#F1F0FB", // Soft gray
          foreground: "#8E9196", // Neutral gray
        },
        card: {
          DEFAULT: "#F1F0FB", // Soft gray
          foreground: "#8E9196", // Neutral gray
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;