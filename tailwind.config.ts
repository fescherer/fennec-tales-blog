import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: ['material-icons'],
  theme: {
    colors: {
      primary: {
        // Background 1 color
        DEFAULT: '#080809',
        active: 'red',
        border: '#ffffff55',
        label: {
          primary: '#FFFFFF',
          secondary: '#FFFFFFaa',
          tertiary: '#FFFFFF77',
          active: '#FFFFFF',
          disabled: '#FFFFFF22',
        },
      },
      secondary: {
        // Background 2 color
        DEFAULT: '#0E0F0F',
        active: 'blue',
        disabled: '#FFFFFF44',
        label: {
          primary: '#FFFFFFdd',
          secondary: '#FFFFFFaa',
          tertiary: '#FFFFFF77',
          active: '#FFFFFF',
          disabled: '#FFFFFF22',
        },
      },
      accent: {
        // Brand color
        DEFAULT: '#08fabd',
        active: '#08faee',
        disabled: '#FFFFFF22',
        label: {
          primary: '#0f0f0f',
          secondary: '#0f0f0faa',
          tertiary: '#0f0f0f70',
          active: '#ff0000',
          disabled: '#FFFFFF22',
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
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif', ...defaultTheme.fontFamily.sans],
      cabinetGrotesk: ['Cabinet Grotesk', 'serif', ...defaultTheme.fontFamily.sans],

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
