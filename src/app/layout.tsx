import './globals.scss';

import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Andrien Wiandyano | React Developer',
  authors: [{ name: 'Andrien Wiandyano', url: 'https://andrienw.com' }],
  description:
    "Andrien Wiandyano's personal website and portfolio. I'm a React developer on a mission to make the web an exciting playground!",
  keywords: [
    'Andrien Wiandyano',
    'Andrien',
    'Wiandyano',
    'AndrienW',
    'Portfolio',
    'React',
    'Developer',
    'React Developer',
    'Personal Website',
    'Web Developer',
    'Frontend Developer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andrienw.com',
    title: 'Andrien Wiandyano | React Developer',
    description:
      "Andrien Wiandyano's personal website and portfolio. I'm a React developer on a mission to make the web an exciting playground!",
    images: [
      {
        url: 'https://andrienw.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Andrien Wiandyano | React Developer',
      },
    ],
    siteName: 'Andrien Wiandyano | React Developer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en' className='dark'>
      <body className='bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light antialiased'>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
