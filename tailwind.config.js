/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.js',
    './pages/**/*.js',
    './pages/**/**/*.js',
    './atoms/*.js',
    './atoms/**/*.js',
    './molecules/*.js',
    './molecules/**/*.js',
    './components/**/*.js',
    './components/**/**/*.js',
    './components/**/**/**/*.js'
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
