// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',    // Include all files in the 'app' directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Include all files in 'components'
  ],
  theme: {
    extend: {
      // Add your custom theme configurations here
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins here
  ],
};

export default config;
