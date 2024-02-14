/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "primary": ["Alata", "sans-serif"],
        "thin-heading": ["Josefin Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

