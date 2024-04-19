import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        // Background 1 color
        DEFAULT: '#0E1716',
        active: '',
        label: {
          primary: '',
          secondary: '',
          tertiary: '',
          active: '',
        },
      },
      secondary: {
        // Background 2 color
        DEFAULT: '',
        active: '',
        disabled: '',
        label: {
          primary: '',
          secondary: '',
          tertiary: '',
          active: '',
          disabled: '',
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
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
