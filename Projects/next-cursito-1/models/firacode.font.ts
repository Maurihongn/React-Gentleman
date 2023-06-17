import localFont from 'next/font/local';

export const firacode = localFont({
  src: [
    {
      path: '../app/FiraCode-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/FiraCode-Medium.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
