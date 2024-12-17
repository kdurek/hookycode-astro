import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0px 36px 100px 0px rgba(8, 8, 8, 0.15)",
      },
      screens: {
        // xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          // sm: '2rem',
          // lg: '4rem',
          // xl: '5rem',
          // '2xl': '6rem',
        },
      },
      fontFamily: {
        syne: ['"Syne"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        sans: [...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      colors: {
        // transparent: 'transparent',
        // current: 'currentColor',
        black: {
          300: "rgba(8, 8, 8, 0.03)",
          800: "#080808",
          700: "rgba(8, 8, 8, 0.80)",
          600: "rgba(8, 8, 8, 0.60)",
          500: "rgba(8, 8, 8, 0.04)",
          text: {
            100: "rgba(8, 8, 8, 0.1)",
            800: "rgba(8, 8, 8, 0.8)",
            600: "rgba(8, 8, 8, 0.6)",
            400: "rgba(8, 8, 8, 0.4)",
          },
        },
        // active: 'rgba(8, 8, 8, 0.95)',
        // primary: '#0DB17D',
        // orange: '#FF9330',
        // secondary: '#FFE9D9',
        // blue: '#24E9FF ',
        // violet: '#BF29FF',
        // green: '#05EB05',
        // yellow: '#FFE600',
        // bermuda: '#78dcca',
        // 'border-white': 'rgba(255, 255, 255, 0.2)',

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        moveUp: {
          "0%": {
            opacity: 1,
            transform: "translateX(0px) translateY(0px) scale(1)",
          },
          "25%": {
            opacity: 0,
            transform: "translateX(10px) translateY(-10px) scale(0.9)",
          },
          "26%": {
            opacity: 0,
            transform: "translateX(-10px) translateY(10px) scale(0.9)",
          },
          "55%": {
            opacity: 1,
            transform: "translateX(0px) translateY(0px) scale(1)",
          },
        },

        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 0px, 10px)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0px, 0px)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100px, 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translate3d(100px,0 , 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        animateSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "arrow-move-up": "moveUp 0.8s linear",
        fadeInLeft1: "fadeInLeft 1.2s ease-in-out",
        fadeInLeft2: "fadeInLeft 1.4s ease-in-out",
        fadeInLeft3: "fadeInLeft 1.6s ease-in-out",
        fadeInLeft4: "fadeInLeft 1.8s ease-in-out",
        fadeInLeft5: "fadeInLeft 2s ease-in-out",
        fadeInLeft6: "fadeInLeft 2.3s ease-in-out",
        fadeInLeft7: "fadeInLeft 2.6s ease-in-out",
        fadeInRight: "fadeInRight 1.8s ease-in-out",
        fadeInDown: "fadeInDown 0.7s ease-in-out 0s normal none 1 running",
        spin: "animateSpin 7s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
