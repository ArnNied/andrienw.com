'use client';

import { JSX } from 'react';
import { Contact, CONTACTS, EContactIconType } from './Contacts';

export default function Footer(): JSX.Element {
  return (
    <footer className='bg-themer backdrop-blur-lg z-20'>
      {/* Gradient line */}
      <div className='h-0.5 gradient__lr'></div>
      <div className='py-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 container'>
        <p>&copy; 2025 Andrien Wiandyano</p>
        <span className='hidden sm:block'>•</span>
        <address className='h-6 flex flex-row items-center space-x-2'>
          {CONTACTS.map(({ name, label, href, fillClassName, Icon }) => (
            <Contact
              key={name}
              type={EContactIconType.FOOTER}
              name={name}
              label={label}
              href={href}
              iconClassName={fillClassName}
              Icon={Icon}
            />
          ))}
        </address>
      </div>
    </footer>
  );
}
