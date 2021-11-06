module.exports = {
  purge: [
    './src/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "curveBackground": "url('/src/resources/layered-waves-haikei.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
