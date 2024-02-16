/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html", "./pages/**/*.html" ],
  theme: {
    extend: {
      fontFamily: {
        "primary": ["Alata", "sans-serif"],
        "thin-heading": ["Josefin Sans", "sans-serif"]
      },
      colors: {
        "white": "hsl(0, 0%, 100%)",
        "black": "hsl(0, 0%, 0%)",
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)"
      }
    },
  },
  plugins: [],
}

