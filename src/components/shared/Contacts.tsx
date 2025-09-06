'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { JSX } from 'react';
import { IconContext, IconType } from 'react-icons';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export enum EContactIconType {
  HERO = 'hero',
  FOOTER = 'footer',
}

const cnBase = 'cursor-pointer';
const cnIconHero = clsx(cnBase, 'w-6 h-6 fill-secondary');
const cnIconFooter = clsx(cnBase, 'w-5 h-5 fill-theme');
const baseCnIcon: Record<EContactIconType, string> = {
  [EContactIconType.HERO]: cnIconHero,
  [EContactIconType.FOOTER]: cnIconFooter,
};

type TContactProps = {
  type: EContactIconType;
  name: string;
  label?: string;
  href: string;
  iconClassName?: string;
  Icon: IconType;
};

export function Contact({
  type,
  name,
  label,
  href,
  iconClassName,
  Icon,
}: TContactProps): JSX.Element {
  const cnIcon = clsx(baseCnIcon[type], iconClassName);

  return (
    <>
      <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='group flex flex-row items-center space-x-2'
      >
        <IconContext.Provider value={{ className: cnIcon }}>
          <Icon title={name} />
        </IconContext.Provider>
      </Link>
    </>
  );
}

export type TContact = {
  name: string;
  label: string;
  href: string;
  // For tailwind class recognition purposes
  fillClassName?: string;
  Icon: IconType;
};

export const CONTACTS: TContact[] = [
  {
    name: 'Email',
    label: 'andrien.wy@gmail.com',
    href: 'mailto:arnnied03@gmail.com',
    fillClassName: 'hover:fill-[#EA4335] group-hover:fill-[#EA4335]',
    Icon: MdEmail,
  },
  {
    name: 'Github',
    label: 'ArnNied',
    href: 'https://github.com/ArnNied/',
    fillClassName:
      'dark:hover:fill-[#FAFBFC] dark:group-hover:fill-[#181717] hover:fill-[#1B1F24] group-hover:fill-[#1B1F24]',
    Icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    label: 'Andrien Wiandyano',
    href: 'https://www.linkedin.com/in/andrien-wiandyano/',
    fillClassName: 'hover:fill-[#0A66C2] group-hover:fill-[#0A66C2]',
    Icon: FaLinkedin,
  },
  {
    name: 'Discord',
    label: 'arnnied',
    href: 'https://discord.com/users/293697497535217664',
    fillClassName: 'hover:fill-[#7289DA] group-hover:fill-[#7289DA]',
    Icon: FaDiscord,
  },
];
