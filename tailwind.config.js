/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
       'xxxs': '320px',
       'xxs' : '375px',
       'xs' : '425px',
     },
    extend: {
      screens: {
        '1xl': '1440px',
        '3xl': '1920px',
      },
      colors: {
        Neutral: {
          PaleCyan: '#EBFBFF',
          DarkCyan: 'hsl(192, 100%, 9%)',
          GrayishBlue: 'hsl(208, 11%, 55%)'
        },
        Primary: {
          PinkP: 'hsl(322, 100%, 66%)',
          PinkCl: '#FF9BDB',
        },
      },
      width: {
        '400': '25rem',
        '1440': '90rem',
        '656': '39.5rem',
        '320': '20rem',
        '1200': '75rem',
        '576': '36rem',
        '762': '47.634',
        '480': '30rem',
        '560' : '35rem',
      },
      fontFamily: {
        body:['Open Sans'],
        heading:['Poppins'],
      },
    },
    container: {
			center: true,
		},
  },
  plugins: [],
}

