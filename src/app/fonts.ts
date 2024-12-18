// src/app/fonts.ts
import localFont from 'next/font/local'

export const araAlBayan = localFont({
  src: '../../public/fonts/AraAlBayan-Regular.ttf',
  variable: '--font-ara-al-bayan',
  display: 'swap',
})

export const alBayan = localFont({
  src: [
    {
      path: '../../public/fonts/AlBayan-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AlBayan-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-al-bayan',
  display: 'swap',
})