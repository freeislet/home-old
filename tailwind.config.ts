import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'theme-white': "rgb(var(--theme-white) / <alpha-value>)",  
        'theme-black': "rgb(var(--theme-black) / <alpha-value>)",  
        'theme-primary': "rgb(var(--theme-primary) / <alpha-value>)",
        'theme-active': "rgb(var(--theme-active) / <alpha-value>)",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
