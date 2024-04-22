import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        // Background 1 color
        DEFAULT: '#080809',
        active: '',
        border: '#ffffff55',
        label: {
          primary: '#FFFFFF',
          secondary: '#FFFFFFaa',
          tertiary: '',
          active: '',
        },
      },
      secondary: {
        // Background 2 color
        DEFAULT: '#0E0F0F',
        active: '',
        disabled: '#FFFFFF44',
        label: {
          primary: '#FFFFFFdd',
          secondary: '#FFFFFFaa',
          tertiary: '#FFFFFF77',
          active: '',
          disabled: '#FFFFFF22',
        },
      },
      accent: {
        // Brand color
        DEFAULT: '#08fabd',
        active: '#08faee',
        disabled: '',
        label: {
          primary: '#0f0f0f',
          secondary: '#0f0f0faa',
          tertiary: '#0f0f0f70',
          active: '#ff0000',
          disabled: '',
        },
      },
      feedback: {
        info: {
          DEFAULT: '',
          active: '',
          disabled: '',
        },
        sucess: {
          DEFAULT: '',
          active: '',
          disabled: '',
        },
        error: {
          DEFAULT: '',
          active: '',
          disabled: '',
        },
        warning: {
          DEFAULT: '',
          active: '',
          disabled: '',
        },
      },
      transparent: 'transparent',
    },
    extend: {
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [],
}
export default config
