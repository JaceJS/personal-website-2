/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {      
      fontFamily: {
        preloader: ['Bungee', 'sans-serif'],        
      },
      colors: {
        primary: '#000',
        secondary: '#ff59c7',
        third: '#ff94e0',        
      },
      backgroundImage: {
        'home-pattern': "url('./src/assets/home-bg2.jpg')",
      },
      boxShadow: {
        'btn': '0 0 5px #ff94e0, 0 0 25px #ff94e0, 0 0 50px #ff94e0, 0 0 100px #ff94e0',
      },
    },
  },
  plugins: [],
}

