/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        acwa: {
          deep: '#16A34A',       // Vibrant Fresh Light Green (replaces dark green)
          green: '#22C55E',      // Bright Leaf Green
          lightgreen: '#DCFCE7', // Light green tint
          cream: '#D5EBD9',      // Soft light green container fill
          offwhite: '#F0FDF4',   // Canvas light green background
          earth: '#A8875A',      // Warm Earth secondary accent
          earthlight: '#E6F4EA', // Light Earth/Green tint
          orange: '#D87532',     // Warm Orange action highlight
          dark: '#171A17',       // Editorial Dark Text
          muted: '#2D5A3B',      // Subtitle & secondary body text
          border: '#B8E3C3',     // Soft tactile light green border
        },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Nunito', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 10px 30px -10px rgba(4, 78, 53, 0.08)',
        card: '0 4px 20px -2px rgba(4, 78, 53, 0.05)',
        hover: '0 20px 40px -15px rgba(4, 78, 53, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
