/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      black: "#1D1D1B",
      red: "#BD1622",
      white: "#FFFFFF",
      gray: "#ECECEC",
      "bg-gray": "#F8F8F8"
    },
    fontSize: {
      xs: ['.8125rem', '1.1375rem'], // 13px
      sm: ['.875rem', '1.45rem'], // 14px
      base: ['1rem', '1.4rem'], // 16px
      'base-plus': ['1.0625rem', '1.3125rem'], // 17px
      lg: ['1.125rem', '1.575rem'], // 18px
      xl: ['1.25rem', '1.75rem'], // 20px
      '2xl': ['1.375rem', '1.875rem'], // 22px
      '3xl': ['1.5rem', '24px'], // 24px
      '4xl': ['1.75rem', '2.1rem'], // 28px
      '3/5xl': ['1.875rem', '2.625rem'], // 28px
      '5xl': ['2.185rem', '3.0625rem'], // 34,96px
      '3/6xl': ['2.5rem', '3.5rem'], // 40px
      '6xl': ['45px', '45px'], // 45px
      '8xl': ['4.125rem', '5.775rem'], // 66px
      '10xl': ['5.375rem', '6.5rem'], // 86px
    },
    screens: {
      'max-sm': { max: '639px' },

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      'max-md': { max: '767px' },

      md: '768px',
      // => @media (min-width: 768px) { ... }

      'only-md': { min: '768px', max: '1023px' },

      'max-lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      lg: '1170px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1630px',
      // => @media (min-width: 1630px) { ... }
    },
    backgroundImage: {
    },
    extend: {
      keyframes: {
        'show-layout': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        rotate360: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'show-layout': 'show-layout 2s ease-in-out forwards',
        rotate360: 'rotate360 1s infinite',
      },
      boxShadow: {
        'review-shadow':'0px 0px 15px 0px #0000001A'
}
    },
  },
  plugins: [],
}
