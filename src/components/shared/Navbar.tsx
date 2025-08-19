'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBars, FaXmark } from 'react-icons/fa6';

export default function SharedNavbar(): JSX.Element {
  const pathname = usePathname();

  const routes = [
    {
      name: 'Home',
      path: '/',
      newTab: false,
    },
    {
      name: 'Projects',
      path: 'https://github.com/ArnNied/',
      newTab: true,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.getElementById('nav-link')?.classList.replace('h-26', 'h-0');
    } else {
      document.getElementById('nav-link')?.classList.replace('h-0', 'h-26');
    }
  }

  return (
    <header className='w-full fixed top-0 light:bg-background-light/60 dark:bg-background-dark/60 shadow-lg shadow-primary/20 backdrop-blur-lg z-50'>
      <div className='py-2 sm:py-0 flex flex-wrap justify-start sm:justify-start items-center container'>
        <div className='w-full sm:w-auto mr-0 sm:mr-12 flex justify-between items-center'>
          <Link href='/' className='flex items-center'>
            <Image
              rel='icon'
              src='/icons/icon512x512.png'
              alt='logo'
              width={48}
              height={48}
            />
          </Link>
          <button
            type='button'
            onClick={toggleMenu}
            className='w-12 h-10 block flex items-center justify-center sm:hidden border border-text-light rounded'
          >
            <IconContext.Provider value={{ size: '20px' }}>
              {isOpen ? <FaXmark /> : <FaBars />}
            </IconContext.Provider>
          </button>
        </div>
        <nav
          id='nav-link'
          className='w-full sm:w-auto h-0 sm:h-auto block flex-col sm:flex-row items-start sm:items-center sm:space-x-6 sm:py-6 transition-[height] duration-300 overflow-hidden'
        >
          {routes.map(({ name, path, newTab }) => (
            <Link
              key={name}
              href={path}
              className='block sm:inline-block py-3 sm:py-0 hover:text-primary focus:text-primary tracking-widest sm:tracking-normal'
              target={newTab ? '_blank' : '_self'}
              rel={newTab ? 'noopener noreferrer' : undefined}
            >
              <span
                className={clsx('transition-colors', {
                  'text-gradient !text-transparent': pathname === path,
                })}
              >
                {name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      {/* Gradient line */}
      <div className='h-1 bg-gradient'></div>
    </header>
  );
}
