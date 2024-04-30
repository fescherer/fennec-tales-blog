import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: ['material-icons'],
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
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.mui-icon-filled': {
          fontFamily: 'Material Icons',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontSize: '24px', /* Preferred icon size */
          display: 'inline-block',
          lineHeight: '1',
          textTransform: 'none',
          letterSpacing: 'normal',
          wordWrap: 'normal',
          whiteSpace: 'nowrap',
          direction: 'ltr',

          /* Support for all WebKit browsers. */
          WebkitFontSmoothing: 'antialiased',
          /* Support for Safari and Chrome. */
          textRendering: 'optimizeLegibility',

          /* Support for Firefox. */
          MozOsxFontSmoothing: 'grayscale',

          /* Support for IE. */
          fontFeatureSettings: 'liga',

        },
      })
    }),
  ],
}
export default config
