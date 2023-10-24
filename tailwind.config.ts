import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'Kantor-blue': '#062258',
        Ultramarine: '#0D3179',
        'Macrage-blue': '#1946A0',
        'Lothern-blue': '#3D61A7',
        'Blue-Horror': '#6B88C2',
        'SPDark-blue': '#17181A',
        'SPLight-blue': '#B8CAED',
        'OrangeIsIt?': '#d97706',
        'Yellow?': '#F8CD00'
      },
      fontFamily: {
        CenturyGothicPro: 'CenturyGothicPro',
        SeuratProN: 'SeuratProN',
        NewRodinPro: 'NewRodinPro',
        SkipStd: 'SkipStd',
        UDKakugo: 'UDKakugo',
        NotoSerif: 'NotoSerifJP'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
} satisfies Config
