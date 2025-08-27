'use client';

import { usePathname } from 'next/navigation';

import Page from '@/components/core/Page';
import { IconContext } from 'react-icons';
import { LuConstruction } from 'react-icons/lu';

export default function Construction() {
  const pathname = usePathname();

  return (
    <Page cta={false} footer={false}>
      <section className='h-screen grid justify-center items-center container'>
        <div className='max-w-2xl px-8 md:px-16 py-8 border-2 border-secondary rounded space-y-4'>
          <div className='flex flex-col md:flex-row items-center space-x-0 md:space-x-4'>
            <span className='w-32 md:w-40 xl:w-64'>
              <IconContext.Provider value={{ size: 'auto' }}>
                <LuConstruction />
              </IconContext.Provider>
            </span>
            <h1 className='h1 font-bold text-center gradient__lr gradient-text grow'>
              Under Construction
            </h1>
          </div>
          <p className='text-center'>
            This page is currently under construction.
            <br />
            Thank you for your interest.
          </p>
        </div>
      </section>
    </Page>
  );
}
