import { formatCareerDate } from '@/utils/formatCareerDate';
import clsx from 'clsx';
import Link from 'next/link';
import { JSX } from 'react';

export type TCareer = {
  category: 'Formal' | 'Education';
  title: {
    text: string;
    href?: string;
  };
  subtitle?: {
    text: string;
    href?: string;
  };
  type?: string;
  responsibilities?: string[];
  summary?: string;
  images?: string[];
  date: {
    start: { month?: number; year: number };
    end?: { year?: number; month?: number };
    current: boolean;
  };
};

export default function Career({
  career,
  isFirst,
  isLast,
  isCurrent,
  setCareerModalData,
}: {
  career: TCareer;
  isFirst: boolean;
  isLast: boolean;
  isCurrent?: boolean;
  setCareerModalData: (career: TCareer) => void;
}): JSX.Element {
  return (
    <article className='flex flex-col md:flex-row space-y-4 md:space-y-0'>
      <header className='w-full md:w-5/12 p-0 md:py-12 md:text-right'>
        <h3
          className={clsx('font-bold text-size-2xl gradient__lr gradient-text')}
        >
          {career.title.href ? (
            <Link className='hover:underline' href={career.title.href}>
              {career.title.text}
            </Link>
          ) : (
            <>{career.title.text}</>
          )}
        </h3>
        {career.subtitle && (
          <p className={clsx('font-semibold text-size-base')}>
            {career.subtitle.href ? (
              <Link className='hover:underline' href={career.subtitle.href}>
                {career.subtitle.text}
              </Link>
            ) : (
              <>{career.subtitle.text}</>
            )}
          </p>
        )}
        {career.type && (
          <p className='text-size-sm text-slate-500'>{career.type}</p>
        )}
        <p className='text-size-sm italic text-slate-500'>
          {formatCareerDate(career.date)}
        </p>
      </header>
      <div className='hidden md:flex relative grow-0 w-8 px-12 flex flex-col items-center'>
        {/* Circle indicator */}
        <span
          className={clsx('w-6 h-6 rounded-full border-4 bg-background-dark', {
            'border-accent mt-16': isFirst,
            'border-primary absolute top-16': !isFirst,
          })}
        ></span>
        {/* Ping animation */}
        {isCurrent && (
          <span
            className={clsx(
              'absolute w-6 h-6 rounded-full top-16 border-4 animate-ping',
              isFirst ? 'border-accent' : 'border-primary',
            )}
          ></span>
        )}
        {/* Bar */}
        <div
          className={clsx(
            'w-1 grow',
            isFirst ? 'gradient__lt' : 'bg-primary',
            isLast &&
              'bg-linear-to-b from-bg-primary from-50% to-background-dark',
          )}
        ></div>
      </div>
      <section className='w-full md:w-7/12 p-0 md:py-12'>
        {career.responsibilities && (
          <button
            type='button'
            onClick={() => setCareerModalData(career)}
            className='px-10 py-6 cursor-pointer hover:bg-primary text-left border border-secondary hover:ring-4 hover:ring-secondary rounded-lg transition-all hover:scale-102'
          >
            <ul className='list-disc space-y-2'>
              {career.responsibilities?.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </button>
        )}
      </section>
    </article>
  );
}
