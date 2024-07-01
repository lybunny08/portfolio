/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Assurez-vous que Tailwind scanne les fichiers
  ],
  theme: {
    extend: {
      fontSize: {
        '140px': '140px', // Taille de texte personnalisée
      },
      colors: {
        'custom-color': '#1C1C1C',
      },
    },
  },
  plugins: [],
}
