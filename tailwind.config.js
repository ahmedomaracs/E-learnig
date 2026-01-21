/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Cairo", "sans-serif"],
        heading: ["IBM Plex Arabic", "sans-serif"],
        body: ["Tajawal", "sans-serif"]
      },
    },
  },
  plugins: [
    require("tailwindcss-rtl"),
  ],
}
