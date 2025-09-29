// utils/fonts.js
import localFont from 'next/font/local'

export const openSans = localFont({
  src: '../assets/fonts/OpenSans-VariableFont_wdth,wght.woff2',
  display: 'swap',
  variable: '--font-opensans',
  weight: '400 500 600 800',
  style: 'normal',
  adjustFontFallback: 'Arial',
})

export const raleWay = localFont({
  src: '../assets/fonts/Raleway-VariableFont_wght.woff2',
  display: 'swap',
  variable: '--font-raleway',
  weight: '500 600 700 800 900', 
  style: 'normal',
  adjustFontFallback: 'Arial',
})

export const sourceCode = localFont({
  src: '../assets/fonts/SourceCodePro-VariableFont_wght.woff2',
  display: 'swap',
  variable: '--font-source',
  weight: '400 500 600', // Only 400 and 500 weights
  style: 'normal',
  adjustFontFallback: 'Arial',
})

export const jakarta = localFont({
  src: '../assets/fonts/PlusJakartaSans-VariableFont_wght.woff2',
  display: 'swap',
  variable: '--font-jakarta',
  weight: '400 700', // Only 400-700 weights as per your import
  style: 'normal',
  adjustFontFallback: 'Arial',
})