/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#002060',
          silver: '#c0c0c0',
          gold: '#d4af37',
          ink: '#2c2e3a'
        },
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        serif: ["Libre Caslon Text", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        'baseline': 'var(--space-baseline)',
      },
      borderRadius: {
        'radius': 'var(--radius)',
      },
      lineHeight: {
        "tight": "1.1",
        "relaxed": "1.65",
      },
      letterSpacing: {
        "tight": "-0.02em",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
