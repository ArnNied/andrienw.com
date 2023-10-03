import './globals.scss';

import { Analytics } from '@vercel/analytics/react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://andrienw.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Andrien Wiandyano — Full Stack Developer',
  authors: [{ name: 'Andrien Wiandyano', url: 'https://andrienw.com' }],
  description:
    "Andrien Wiandyano's personal website and portfolio. I'm a Full Stack developer on a mission to make the web an exciting playground!",
  keywords: [
    'Andrien Wiandyano',
    'Andrien',
    'Wiandyano',
    'AndrienW',
    'Portfolio',
    'React',
    'Full Stack',
    'Developer',
    'React Developer',
    'Full Stack Developer',
    'Personal Website',
    'Web Developer',
    'Frontend Developer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andrienw.com',
    title: 'Andrien Wiandyano — Full Stack Developer',
    description:
      "Andrien Wiandyano's personal website and portfolio. I'm a Full Stack developer on a mission to make the web an exciting playground!",
    siteName: 'Andrien Wiandyano — Full Stack Developer',
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
