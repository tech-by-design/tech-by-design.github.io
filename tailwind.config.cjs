/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "orange": {
          DEFAULT: '#FE6D18',
          100 : '#FFEBB4',
          500 : '#FFC122',
          800 : '#FF8C18',
          900 : '#FE6D18',
        },
        "spruce": {
          DEFAULT: '#03464C',
          50 : '#E0F1EF',
          100 : '#B7E6E4',
          200 : '#72CCC6',
          900 : '#03464C',
        },
        "neutral": {
          DEFAULT: '#FDFDFB', //white
          200 : '#F7F7F5', //light gray
          300 : '#D4D5D5', // sandstone
          400 : '#505455', //charcoal
          500 : '#231F20' //black
        },
      },
      fontFamily: {
        sans: ['Indivisible'],
        body: ['Indivisible'],
        display: ['Indivisible']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
