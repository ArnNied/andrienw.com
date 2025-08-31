import { ECareerSections } from '@/app/careers/page';
import { Briefcase, School } from 'lucide-react';
import { JSX } from 'react';
import { motion } from 'motion/react';

export function SwitchButton({
  text,
  icon,
  buttonSection,
  activeSection,
  onClick,
}: Readonly<{
  text: string;
  icon: React.ReactNode;
  buttonSection: ECareerSections;
  activeSection: ECareerSections;
  onClick: (section: ECareerSections) => void;
}>): JSX.Element {
  return (
    <motion.button
      type='button'
      className='relative w-full p-2 flex flex-row items-center cursor-pointer'
      onClick={() => onClick(activeSection)}
    >
      {icon}
      <span className='ml-2 hidden md:block'>{text}</span>
      {activeSection === buttonSection && (
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
    <nav className='grow-0 fixed h-fit inset-y-0 left-2 lg:left-10 my-auto flex flex-col justify-center items-start bg-background-dark rounded-lg border-2 border-secondary overflow-hidden'>
      <SwitchButton
        text='Experience'
        icon={<Briefcase />}
        buttonSection={ECareerSections.Experience}
        activeSection={activeSection}
        onClick={() => setActiveSection(ECareerSections.Experience)}
      />
      <SwitchButton
        text='Education'
        icon={<School />}
        buttonSection={ECareerSections.Education}
        activeSection={activeSection}
        onClick={() => setActiveSection(ECareerSections.Education)}
      />
    </nav>
  );
}
