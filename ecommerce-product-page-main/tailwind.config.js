/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        tannedOrange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        mediumOrange: 'hsl(26, 100%, 68%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        lightboxBackground: 'hsl(0, 0%, 0%)',
        blackHawk: 'rgba(0, 0, 0, 0.7)',
      },
      fontFamily:{
        kumbhSans: ['Kumbh Sans', 'sans-serif'],
      },
      fontWeight:{
        normal: 400,
        bold: 700,
      }
    }
  },
  plugins: []
}
