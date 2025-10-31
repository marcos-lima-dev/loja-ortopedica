// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Cores personalizadas do Footer
        'footer-bg': '#4C4C4C',       // cor principal (parte superior) — exata do Figma
        'footer-bottom': '#3E3E3E',   // faixa inferior (barra de direitos autorais)
      },
      fontFamily: {
        // 🖋️ Fonte global
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
