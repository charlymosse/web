/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        crema: {
          100: '#FDFBF7',
          200: '#F8F4EC',
          300: '#EFE7D7',
        },
        tinta: {
          100: '#1A1815',
          200: '#2A2723',
          300: '#3D3934',
          400: '#6B645B',
          500: '#8B8478',
        },
        ocre: {
          DEFAULT: '#B5742A',
          hover: '#9C5F1F',
          dark: '#7D4A14',
        },
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
}
