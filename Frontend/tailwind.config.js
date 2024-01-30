/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {

    extend: {
      colors: {
        bgLightGray: "#F8F8F8",
        CardBlue: "#00A9CE",
        CardDarkBlue: "#5834A5",
        CardPink: "#C724B1",
      },
    },
    plugins: [



    ],
  }
}
