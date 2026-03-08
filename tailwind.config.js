/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // off-white
        primary: '#0D9488', // teal-600
        primaryLight: '#CCFBF1', // teal-50 // used for accents
        secondary: '#F43F5E', // rose-500
        secondaryLight: '#FFE4E6', // rose-50
        text: '#1F2937', // gray-800
        textMuted: '#4B5563', // gray-600
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 10px 40px -10px rgba(13, 148, 136, 0.15)',
      }
    },
  },
  plugins: [],
}
