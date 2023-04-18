export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4F2F0',
        secondary: '#656565'
      },
      backgroundImage: {
        banner: 'url("./src/assets/banner.png")',
        acc: 'url("./src/assets/3200x800_v1.png")'
      }
    },
  },
  plugins: [],
}