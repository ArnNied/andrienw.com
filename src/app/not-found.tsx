'use client';

import { usePathname } from 'next/navigation';

import Page from '@/components/core/Page';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <Page cta={false} footer={false}>
      <section className='h-screen grid justify-center items-center container'>
        <div className='max-w-xl px-8 sm:px-16 py-8 border-2 border-secondary rounded-md'>
          <h1 className='font-bold text-center gradient__lr gradient-text text-size-4xl'>
            Not Found
          </h1>
          <p className='text-center mt-2'>
            The url{' '}
            <span className='gradient__lr gradient-text'>
              {pathname === '/_not-found' ? '...' : pathname}
            </span>{' '}
            has been moved or does not exist
          </p>
        </div>
      </section>
    </Page>
  );
}
