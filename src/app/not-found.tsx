'use client';

import { usePathname } from 'next/navigation';

import SharedNavbar from '@/components/shared/Navbar';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <>
      <SharedNavbar />
      <main className=''>
        <section className='h-screen grid justify-center items-center -mt-20 space-y-6 container'>
          <div className='max-w-xl px-16 py-8 border-2 border-secondary rounded space-y-4'>
            <h1 className='font-bold text-gradient text-center'>Not Found</h1>
            <p className='text-center'>
              The url{' '}
              <span className='text-gradient'>
                {pathname === '/_not-found' ? '...' : pathname}
              </span>{' '}
              has been moved or does not exist
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
