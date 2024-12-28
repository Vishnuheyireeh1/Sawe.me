/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens:{
       
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
 
}


// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         customRed: '#ff0000',
//       },
//     },
//   },
// };
// 
// // tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths based on your project structure
    "./public/index.html",       // Add all files where Tailwind classes are used
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#D91919',
        customGreen: '#5E922D', 
      },
    },
  },
  plugins: [],
};








