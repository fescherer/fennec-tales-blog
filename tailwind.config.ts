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
        border: '#ffffff55',
        label: {
          primary: '#F2F4FF',
          secondary: '#F2F4FFcc',
          active: '#FFFFFF',
        },
      },
      secondary: {
        // Background 2 color
        DEFAULT: '#0E0F0F',
        border: '#ffffff55',
        label: {
          primary: '#FFFFFFdd',
          secondary: '#FFFFFFaa',
          active: '#FFFFFF',
        },
      },
      accent: {
        // Brand color
        DEFAULT: '#08fabd',
        active: '#08faee',
        label: {
          primary: '#0f0f0f',
          active: '#ff0000',
        },
      },
      feedback: {
        info: {
          DEFAULT: '',
          active: '',
        },
        sucess: {
          DEFAULT: '',
          active: '',
        },
        error: {
          DEFAULT: '#ff0000',
          active: '',
        },
        warning: {
          DEFAULT: '',
          active: '',
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
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },

    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.styled-scrollbars': {
          'scrollbar-color': 'red',
          'scrollbar-width': 'thin',

          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '@media (hover:hover)': {
            '&': {
              scrollbarColor: '#47484baa transparent',
              scrollbarWidth: 'thin',
              transition: 'cubic-bezier(0.165, 0.84, 0.44, 1) 500ms all',
            },
            '&:hover': {
              scrollbarColor: '#47484b transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              'background': '#47484b',
              '-ms-overflow-style': 'none',
              'scrollbarWidth': 'thin',
            },
          },
        },
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
