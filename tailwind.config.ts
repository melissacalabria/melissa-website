// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Include all files in the 'app' directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Include all files in 'components'
    './public/**/*.html', // Include HTML files in 'public' (if any)
  ],
  darkMode: 'media', // Enables dark mode based on user's system preference
  theme: {
    extend: {
      colors: {
        // Custom color variables based on CSS variables defined in globals.css
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        lightBg: 'var(--light-bg)',
        darkBg: 'var(--dark-bg)',
        lightText: 'var(--light-text)',
        darkText: 'var(--dark-text)',
      },
      animation: {
        // Custom animation for fade-in effect
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        // Keyframes for the fade-in animation
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        // Custom font family if needed
        sans: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        // Custom spacing values if needed
        '128': '32rem',
        '144': '36rem',
      },
      // Add any additional customizations here
    },
  },
  plugins: [
    // Tailwind CSS plugins can be added here
    // Example: require('@tailwindcss/forms'),
  ],
};

export default config;
