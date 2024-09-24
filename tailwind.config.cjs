const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Univers", ...defaultTheme.fontFamily.sans],
        serif: ["Novarese Book", ...defaultTheme.fontFamily.serif],
        condensed: ["Univers Condensed", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")({
    values: {
      xs: [-2, 1.6],
      sm: [-1, 1.6],
      base: [0, 1.6],
      lg: [1, 1.6],
      xl: [2, 1.2],
      "2xl": [3, 1.2],
      "3xl": [4, 1.2],
      "4xl": [5, 1.1],
      "5xl": [6, 1.1],
      "6xl": [7, 1.1],
      "7xl": [8, 1],
      "8xl": [9, 1],
      "9xl": [10, 1],
      title: [12, 1],
    },
  })],
};
