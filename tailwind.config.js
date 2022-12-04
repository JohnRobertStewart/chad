//@type {import('tailwindcss').Config} 


module.exports = {
  content: {
    relative: true,
    files: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
},
  theme: {
    backgroundSize: ({ theme }) => ({
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      ...theme('spacing')
    }),
    extend: {   
      fontFamily: {
      bubble: ["Bubble"],
    },
  },
},
 
  plugins: [],

}