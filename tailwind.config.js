/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
      boxShadow: {
        'blue-glow': '0 0 10px 2px rgba(0, 191, 255, 0.7)', // Adjust color and spread as needed
      },
      colors: {
        // Custom color template
        // ------------------------------------------------
        peach: {
          light: '#FEC89A', // Lightest peach
          DEFAULT: '#FCD5CE', // Default peach if you just use 'peach'
          dark: '#936A61', // Darker peach
          medium: '#FFB5A7', // Medium peach
        },
        cream: {
          light: '#F8EDEB',
          DEFAULT: '#F9DCC4',
        },
        smokey: {
          DEFAULT: '#1A1A1A',
        },
        inverted_peach: {
          light: '#013765', // Lightest peach
          DEFAULT: '#032a31', // Default peach if you just use 'peach'
          dark: '#6c959e', // Darker peach
          medium: '#004a58', // Medium peach
        },
        inverted_cream: {
          light: '#071214',
          DEFAULT: '#06233b',
        },
        inverted_smokey: {
          DEFAULT: '#e5e5e5',
        },
        // ------------------------------------------------
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'spin-reverse': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(-360deg)'},
        }
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}