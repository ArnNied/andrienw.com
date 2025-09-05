import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://andrienw.com'),
  alternates: {
    canonical: '/',
  },
  // title: 'Andrien Wiandyano — Web Developer',
  title: {
    template: 'Andrien Wiandyano — %s',
    default: 'Andrien Wiandyano — Web Developer',
  },
  authors: [{ name: 'Andrien Wiandyano', url: 'https://andrienw.com' }],
  description:
    "Andrien Wiandyano's personal website and portfolio. I'm an aspiring Web Developer based in Indonesia",
  keywords: [
    'Andrien Wiandyano',
    'Andrien',
    'Wiandyano',
    'AndrienW',
    'Portfolio',
    'Personal Website',
    'Developer',
    'Web Developer',
    'Software Developer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andrienw.com',
    title: 'Andrien Wiandyano — Web Developer',
    description:
      "Andrien Wiandyano's personal website and portfolio. I'm an aspiring Web Developer based in Indonesia",
    siteName: 'Andrien Wiandyano — Web Developer',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className='bg-themer text-themer antialiased'>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
