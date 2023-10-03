'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SharedNavbar(): JSX.Element {
  const pathname = usePathname();

  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    // {
    //   name: 'Projects',
    //   path: 'https://github.com/ArnNied/',
    // },
  ];

  return (
    <header className='sticky top-0 light:bg-background-light/60 dark:bg-background-dark/60 shadow-lg shadow-primary/20 backdrop-blur-lg'>
      <div className='flex flex-row justify-between py-6 container'>
        <nav className='flex flex-row space-x-6'>
          {routes.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={clsx('hover:text-primary transition-colors', {
                'text-gradient !text-transparent': pathname === path,
              })}
            >
              {name}
            </Link>
          ))}
          <a
            href='https://github.com/ArnNied'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary transition-colors'
          >
            Projects
          </a>
        </nav>
      </div>
      <div className='h-1 bg-gradient'></div>
    </header>
  );
}
