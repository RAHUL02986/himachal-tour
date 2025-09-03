import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Himachal Tours - Explore the Beauty of Dharamshala & Himachal Pradesh',
  description: 'Book bus tickets, accommodations, and tour packages for Dharamshala and Himachal Pradesh. Experience the best of mountain tourism with our comprehensive travel services.',
  keywords: 'Himachal Pradesh, Dharamshala, tour packages, bus booking, hotel booking, mountain tourism, McLeod Ganj, Shimla, Manali, Spiti Valley',
  authors: [{ name: 'Himachal Tours' }],
  creator: 'Himachal Tours',
  publisher: 'Himachal Tours',
  robots: 'index, follow',
  openGraph: {
    title: 'Himachal Tours - Explore the Beauty of Dharamshala & Himachal Pradesh',
    description: 'Book bus tickets, accommodations, and tour packages for Dharamshala and Himachal Pradesh.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Himachal Tours',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himachal Tours - Mountain Adventures Await',
    description: 'Discover the beauty of Himachal Pradesh with our expert-guided tours and travel services.',
  },
  alternates: {
    canonical: 'https://himachaltours.com',
  },
  other: {
    'geo.region': 'IN-HP',
    'geo.placename': 'Himachal Pradesh',
    'geo.position': '32.1024;77.1734',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}