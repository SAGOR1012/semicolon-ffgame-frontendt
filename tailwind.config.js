/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Add or override colors here
        primary: '#4A90E2',
        secondary: '#FFA500',
      },
      backgroundImage: {
        'primary-bg-image': 'linear-gradient(to bottom, #0a0f2c, #0d1a4d)',
        'secondary-bg-image':
          'linear-gradient(to right, #6366F1, #A855F7, #EC4899)', // Matches the Tailwind colors
      },
    },
  },
  plugins: [require('daisyui')],
};
