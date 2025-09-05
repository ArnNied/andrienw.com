'use client';

import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX, useState } from 'react';
import NavbarTheme from './NavbarTheme';

type TNavbarRoute = {
  name: string;
  path: string;
  newTab: boolean;
};

function NavbarLink({
  route,
  pathname,
}: {
  route: TNavbarRoute;
  pathname: string;
}): JSX.Element {
  return (
    <Link
      href={route.path}
      className='block w-full sm:w-auto sm:inline-block py-2 sm:py-0 hover:text-primary focus:text-primary'
      target={route.newTab ? '_blank' : '_self'}
      rel={route.newTab ? 'noopener noreferrer' : undefined}
    >
      <span
        className={clsx('transition-colors', {
          'gradient__lr gradient-text !text-transparent':
            pathname === route.path,
        })}
      >
        {route.name}
      </span>
    </Link>
  );
}

export default function Navbar(): JSX.Element {
  const pathname = usePathname();

  const routes: TNavbarRoute[] = [
    {
      name: 'Home',
      path: '/',
      newTab: false,
    },
    // {
    //   name: 'Blog',
    //   path: '/blog',
    //   newTab: false,
    // },
    {
      name: 'Projects',
      path: 'https://github.com/ArnNied/',
      newTab: true,
    },
    {
      name: 'Careers',
      path: '/careers',
      newTab: false,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.getElementById('nav-link')?.classList.replace('h-44', 'h-0');
    } else {
      document.getElementById('nav-link')?.classList.replace('h-0', 'h-44');
    }
  }

  return (
    <header className='inset-x-0 fixed top-0 bg-themer shadow-lg shadow-primary/20 backdrop-blur-lg z-20'>
      <div className='w-full py-3 flex flex-wrap justify-start items-center container'>
        <div className='w-full sm:w-auto mr-0 sm:mr-12 flex justify-between items-center'>
          <Link href='/' className='flex items-center'>
            <Image
              rel='icon'
              src='/icon/icon512x512.png'
              alt='logo'
              width={48}
              height={48}
            />
          </Link>
          {/* Displays the path name */}
          <h1 className='block sm:hidden'>
            {routes.find((route) => route.path === pathname)?.name}
          </h1>
          <button
            type='button'
            onClick={toggleMenu}
            className='w-11 h-9 p-1.5 block flex items-center justify-center sm:hidden rounded cursor-pointer hover:text-primary transition-colors'
          >
            {isOpen ? (
              <X className='w-full h-full' />
            ) : (
              <Menu className='w-full h-full' />
            )}
          </button>
        </div>
        <nav
          id='nav-link'
          className='w-full sm:flex-1 h-0 sm:h-auto block flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 transition-[height] duration-300 overflow-hidden'
        >
          {routes.map((route) => (
            <NavbarLink
              key={route.name}
              route={route}
              pathname={pathname || ''}
            />
          ))}
          <NavbarTheme />
        </nav>
      </div>
      {/* Gradient line */}
      <div className='h-1 gradient__lr'></div>
    </header>
  );
}
