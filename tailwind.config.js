module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: true,
  theme: {
    colors: {
      white: "#ffffff",
      light: {
        primary: "#006877",
        "on-primary": "#ffffff",
        secondary: "#4b6268",
        tertiary: "#006b58",
        outline: "#6f797b",
        background: "#fbfcfd",
        "on-background": "#191c1d",
      },
      dark: {
        primary: "#52d7f0",
        "on-primary": "#00363f",
        secondary: "#b2cbd1",
        tertiary: "#58dcbc",
        outline: "#899295",
        background: "#191c1d",
        "on-background": "#e1e3e4",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        vargarda: "url('/src/vargarda.webp')",
        vargarda1200w: "url('/src/vargarda-1200w.webp')",
      },
    },
  },
  plugins: [],
};
