import './globals.css';
import Header from '@/components/layout/Header'; 
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Trustmaker - Premium Property Information',
  description: 'Your trusted source for residential and commercial properties',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}