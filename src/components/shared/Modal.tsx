import { JSX } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { X } from 'lucide-react';
import Carousel from './carousel/Carousel';

function ModalTitle({
  text,
  textLink,
}: {
  text: string;
  textLink?: string;
}): JSX.Element {
  return (
    <DialogTitle
      as='h4'
      className='font-bold text-size-2xl gradient__lr gradient-text w-fit'
    >
      {textLink ? (
        <Link className='hover:underline' href={textLink}>
          {text}
        </Link>
      ) : (
        <>{text}</>
      )}
    </DialogTitle>
  );
}

function ModalSubtitle({
  text,
  textLink,
}: {
  text?: string;
  textLink?: string;
}): JSX.Element {
  return (
    <>
      {text && (
        <p className='font-semibold text-size-base'>
          {textLink ? (
            <Link className='hover:underline' href={textLink}>
              {text}
            </Link>
          ) : (
            <>{text}</>
          )}
        </p>
      )}
    </>
  );
}

function ModalSubtitleMuted({
  text,
  italic,
}: {
  text?: string;
  italic?: boolean;
}): JSX.Element {
  return (
    <>
      {text && (
        <p className={clsx('text-size-sm text-slate-500', italic && 'italic')}>
          {text}
        </p>
      )}
    </>
  );
}

export default function Modal({
  title,
  titleLink,
  subtitle,
  subtitleLink,
  subtitleMuted,
  subtitleMutedItalic,
  images,
  isOpen,
  modalCloseCallback,
  children,
}: {
  title: string;
  titleLink?: string;
  subtitle?: string;
  subtitleLink?: string;
  subtitleMuted?: string;
  subtitleMutedItalic?: string;
  images?: {
    src: string;
    alt?: string;
  }[];
  isOpen: boolean;
  modalCloseCallback: () => void;
  children: React.ReactNode;
}): JSX.Element {
  const cnCarousel = images?.length
    ? 'w-full lg:w-1/2 flex justify-center items-center'
    : 'hidden';
  const cnBody = clsx(
    ' px-4 py-4',
    images?.length ? 'w-full lg:w-1/2 lg:px-12 lg:py-8' : 'w-full',
  );

  return (
    <Dialog
      transition
      open={isOpen}
      onClose={modalCloseCallback}
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
              onClick={modalCloseCallback}
              className='absolute top-4 right-4 p-2 cursor-pointer hover:text-primary transition-colors'
            >
              <X />
            </button>
            <header className='pb-4 border-b border-secondary'>
              <ModalTitle text={title} textLink={titleLink} />
              <ModalSubtitle text={subtitle} textLink={subtitleLink} />
              <ModalSubtitleMuted text={subtitleMuted} />
              <ModalSubtitleMuted text={subtitleMutedItalic} italic />
            </header>
            <div className='flex flex-col lg:flex-row divide-y divide-secondary lg:divide-y-0 lg:divide-x'>
              <section className={cnCarousel}>
                <Carousel images={images} />
              </section>
              <section className={cnBody}>{children}</section>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
