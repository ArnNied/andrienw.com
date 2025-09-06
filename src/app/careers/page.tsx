import CareersPage from '@/pages/CareersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/careers',
  },
  title: 'Careers',
  authors: [{ name: 'Andrien Wiandyano', url: 'https://andrienw.com' }],
  description: "Andrien Wiandyano's history of experiences and educations.",
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
    'Careers',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andrienw.com/careers',
    title: 'Andrien Wiandyano — Careers',
    description: "Andrien Wiandyano's history of experiences and educations.",
    siteName: 'Andrien Wiandyano — Careers',
  },
};

export default function Page() {
  return <CareersPage />;
}
