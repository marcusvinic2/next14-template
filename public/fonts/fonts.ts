import { Kanit, Lato } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--kanit'
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--lato'
});

export const fonts = {
  kanit,
  lato
};
