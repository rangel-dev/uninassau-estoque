export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      display: ['group-data-open'],
      opacity: ['group-data-open'],
      // Adicione outras variantes conforme necessário
    },
  theme: {
    extend: {},
  },
  plugins: [],
  },
};