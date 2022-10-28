/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      1: "0em",
      2: "0.025em",
      3: "0.05em",
      4: "0.1em",
      5: "1em",
    },
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",

        // Complex site-specific row configuration
      },
      colors: {
        "color-01": "#08246c",
        "color-02": "#ce2832",
        "color-03": "#000000",
        "color-04": "#393939",
        "color-05": "#c1c8da",
        "color-06": "#202020",
        "color-07": "#A098AE",
      },
    },
    screens: {
      xs: "360px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1000px",
      // => @media (min-width: 1024px) { ... }

      xl: "1300px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
