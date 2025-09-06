import Page from '@/components/core/Page';
import { Construction } from 'lucide-react';
import { JSX } from 'react';

export default function ConstructionPage(): JSX.Element {
  return (
    <Page cta={false} footer={false}>
      <section className='h-screen grid justify-center items-center container'>
        <div className='max-w-2xl px-8 md:px-16 py-8 border-2 border-secondary rounded-md space-y-4'>
          <div className='flex flex-col md:flex-row items-center space-x-0 md:space-x-4'>
            <span className='w-32 md:w-40 xl:w-64'>
              <Construction className='w-full h-full' />
            </span>
            <h1 className='font-bold text-center gradient__lr gradient-text grow text-size-4xl'>
              Under Construction
            </h1>
          </div>
          <p className='text-center'>
            This page is currently under construction.
            <br />
            Please check back later.
          </p>
        </div>
      </section>
    </Page>
  );
}
