import { motion } from 'motion/react';
import { JSX } from 'react';
import Career from './Career';
import { sortCareers } from '@/utils/sortCareers';
import { TCareer } from '@/pages/CareersPage';

export default function Section({
  careers,
  setCareerModalData,
}: {
  careers: TCareer[];
  setCareerModalData: (career: TCareer) => void;
}): JSX.Element {
  const sortedCareers = sortCareers(careers);

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className='container mt-10 py-16 space-y-8 md:space-y-0'
    >
      {sortedCareers.map((career, index) => (
        <Career
          key={index}
          career={career}
          isFirst={index === 0}
          isLast={index === careers.length - 1}
          isCurrent={career.date.current}
          setCareerModalData={setCareerModalData}
        />
      ))}
    </motion.section>
  );
}
