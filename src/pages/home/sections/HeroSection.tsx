'use client';

import {
  Contact,
  CONTACTS,
  EContactIconType,
} from '@/components/shared/Contacts';
import { JSX } from 'react';

export default function HeroSection(): JSX.Element {
  return (
    <section className='h-screen grid content-center space-y-2 md:space-y-6 container'>
      <header>
        <h1 className='w-fit font-bold descender-fix gradient__lr gradient-text text-size-4xl'>
          Andrien Wiandyano
        </h1>
        <p className='font-semibold italic text-size-2xl'>Web Developer</p>
      </header>
      <div className='w-8 md:w-12 h-1 md:h-1.5 bg-primary'></div>
      <div className='max-w-4xl space-y-1 text-size-base'>
        <p>
          Welcome to my website. I&apos;m an aspiring Web Developer based in
          Indonesia.
        </p>
      </div>
      <address className='flex flex-row flex-wrap gap-x-4 gap-y-2 not-italic'>
        {CONTACTS.map(({ name, label, href, fillClassName, Icon }) => (
          <Contact
            key={name}
            type={EContactIconType.HERO}
            name={name}
            label={label}
            href={href}
            iconClassName={fillClassName}
            Icon={Icon}
          />
        ))}
      </address>
    </section>
  );
}
