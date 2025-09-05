import { TCareer } from '@/pages/CareersPage';
import { formatCareerDate } from '@/utils/formatCareerDate';
import clsx from 'clsx';
import Link from 'next/link';
import { JSX } from 'react';

function CareerTitle({
  text,
  textLink,
}: {
  text: string;
  textLink?: string;
}): JSX.Element {
  return (
    <h3 className='font-bold text-size-2xl gradient__lr gradient-text w-fit'>
      {textLink ? (
        <Link className='hover:underline' href={textLink}>
          {text}
        </Link>
      ) : (
        <>{text}</>
      )}
    </h3>
  );
}

function CareerSubtitle({
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

function CareerSubtitleMuted({
  text,
  italic,
}: {
  text?: string;
  italic?: boolean;
}): JSX.Element {
  return (
    <>
      {text && (
        <p className={clsx('text-size-sm text-theme', italic && 'italic')}>
          {text}
        </p>
      )}
    </>
  );
}

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
      <header className='w-full md:w-5/12 p-0 md:py-12 md:text-right flex flex-col items-start md:items-end'>
        <CareerTitle text={career.title.text} textLink={career.title.href} />
        <CareerSubtitle
          text={career.subtitle?.text}
          textLink={career.subtitle?.href}
        />
        <CareerSubtitleMuted text={career.type} />
        <CareerSubtitleMuted text={formatCareerDate(career.date)} italic />
      </header>
      <div className='hidden md:flex relative grow-0 w-8 px-12 flex flex-col items-center'>
        {/* Circle indicator */}
        <span
          className={clsx('w-6 h-6 rounded-full border-4 bg-themer', {
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
              'bg-linear-to-b from-bg-primary from-50% to-background-lighter dark:to-background-darker transition-colors',
          )}
        ></div>
      </div>
      <section className='w-full md:w-7/12 p-0 md:py-12'>
        {career.responsibilities && (
          <button
            type='button'
            onClick={() => setCareerModalData(career)}
            className='px-10 py-6 cursor-pointer bg-themer text-left border border-secondary rounded-lg transition-all hover:scale-102 hover:shadow-2xl shadow-accent/20'
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
