import { JSX, useState } from 'react';
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { TCareer } from './Career';
import { formatCareerDate } from '@/utils/formatCareerDate';
import clsx from 'clsx';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CareerModal({
  isOpen,
  career,
  setCareerModalIsOpen,
}: {
  isOpen: boolean;
  career: TCareer | null;
  setCareerModalIsOpen: (isOpen: boolean) => void;
}): JSX.Element {
  return (
    <>
      <Dialog
        transition
        open={isOpen}
        onClose={() => setCareerModalIsOpen(false)}
        className='relative z-50 transition-all data-closed:opacity-0'
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-background-dark/50 backdrop-blur-lg data-closed:opacity-0 transition-all'
        />
        <div className='fixed inset-0 w-screen overflow-y-auto py-4'>
          <div className='container flex min-h-full items-center justify-center'>
            <DialogPanel className='relative px-6 md:px-12 py-4 md:py-8 bg-background-dark border border-secondary rounded-lg'>
              <button
                type='button'
                onClick={() => setCareerModalIsOpen(false)}
                className='absolute top-4 right-4 p-2 cursor-pointer hover:text-primary transition-colors'
              >
                <X />
              </button>
              <header className='pb-4 border-b border-secondary'>
                {/* <DialogTitle className='font-bold'>
                {career?.title.text}
              </DialogTitle> */}
                <DialogTitle
                  as='h4'
                  className={clsx(
                    'font-bold text-size-2xl gradient__lr gradient-text w-fit',
                  )}
                >
                  {career?.title.href ? (
                    <Link className='hover:underline' href={career.title.href}>
                      {career?.title.text}
                    </Link>
                  ) : (
                    <>{career?.title.text}</>
                  )}
                </DialogTitle>
                {career?.subtitle && (
                  <p className={clsx('font-semibold text-size-base')}>
                    {career.subtitle.href ? (
                      <Link
                        className='hover:underline'
                        href={career.subtitle.href}
                      >
                        {career.subtitle.text}
                      </Link>
                    ) : (
                      <>{career.subtitle.text}</>
                    )}
                  </p>
                )}
                {career?.type && (
                  <p className='text-size-sm text-slate-500'>{career.type}</p>
                )}
                <p className='text-size-sm italic text-slate-500'>
                  {career?.date ? formatCareerDate(career.date) : null}
                </p>
              </header>
              <div className='flex flex-col lg:flex-row divide-y divide-secondary lg:divide-y-0 lg:divide-x'>
                <section className='w-full lg:w-1/2 p-4 lg:p-8'>IMAGES</section>
                <section className='w-full lg:w-1/2 px-4 lg:px-12 py-8'>
                  <Description as='ul' className='list-disc space-y-2'>
                    {career?.responsibilities?.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </Description>
                </section>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
