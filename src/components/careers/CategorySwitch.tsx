import { Briefcase, LucideIcon, School } from 'lucide-react';
import { JSX } from 'react';
import { motion } from 'motion/react';
import { ECareerSections } from '@/pages/CareersPage';
import clsx from 'clsx';

export function SwitchButton({
  text,
  Icon,
  buttonSection,
  activeSection,
  onClick,
}: Readonly<{
  text: string;
  Icon: LucideIcon;
  buttonSection: ECareerSections;
  activeSection: ECareerSections;
  onClick: (section: ECareerSections) => void;
}>): JSX.Element {
  const buttonIsActive = activeSection === buttonSection;

  return (
    <motion.button
      type='button'
      className='group relative w-full p-2 flex flex-row items-center cursor-pointer'
      onClick={() => onClick(activeSection)}
    >
      <Icon
        className={clsx(
          'transition-colors',
          buttonIsActive && 'text-text-lighter',
          !buttonIsActive && 'group-hover:text-primary',
        )}
      />
      <span
        className={clsx(
          'ml-2 hidden md:block transition-colors',
          buttonIsActive && 'text-text-lighter',
          !buttonIsActive && 'group-hover:text-primary',
        )}
      >
        {text}
      </span>
      {buttonIsActive && (
        <motion.span
          layoutId='career-category-switch-background'
          transition={{ duration: 0.3, type: 'spring' }}
          className='absolute top-0 left-0 w-full h-full bg-primary -z-10'
        ></motion.span>
      )}
    </motion.button>
  );
}

export default function CategorySwitch({
  activeSection,
  setActiveSection,
}: {
  activeSection: ECareerSections;
  setActiveSection: (section: ECareerSections) => void;
}): JSX.Element {
  return (
    <nav className='grow-0 fixed h-fit inset-y-0 left-2 lg:left-10 my-auto flex flex-col justify-center items-start bg-themer rounded-lg border-1 border-secondary overflow-hidden shadow-lg shadow-accent/20'>
      <SwitchButton
        text='Experience'
        Icon={Briefcase}
        buttonSection={ECareerSections.Experience}
        activeSection={activeSection}
        onClick={() => setActiveSection(ECareerSections.Experience)}
      />
      <SwitchButton
        text='Education'
        Icon={School}
        buttonSection={ECareerSections.Education}
        activeSection={activeSection}
        onClick={() => setActiveSection(ECareerSections.Education)}
      />
    </nav>
  );
}
