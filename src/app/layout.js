import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTA from '@/components/home/CTA';
import { Lato } from 'next/font/google';

// Lato Font - All weights
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s | Trustmaker Infrareal',
    default: 'Trustmaker Infrareal - Premium Real Estate Services in Indore',
  },
  description: 'Your trusted partner for verified properties in Indore with zero brokerage for buyers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${lato.variable} font-lato antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}