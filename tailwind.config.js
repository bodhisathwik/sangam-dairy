/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B45BB',
          blueDark: '#002E72',
          blueLight: '#2D72FF',
          navy: '#001146',
          red: '#EA1D24',
          gray: '#64748B',
        },
        accent: {
          rose: '#C56387',
          coral: '#ED745E',
          lime: '#A7C13A',
          teal: '#3FB7AE',
          cyan: '#2F8E9F',
          sky: '#5F9BFF',
          slate: '#53777A',
        },
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(0deg, #0B45BB, #2D72FF)',
        'brand-gradient-rev': 'linear-gradient(0deg, #2D72FF, #0B45BB)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounceDown: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp .8s ease both',
        marquee: 'marquee 22s linear infinite',
        bounceDown: 'bounceDown 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
