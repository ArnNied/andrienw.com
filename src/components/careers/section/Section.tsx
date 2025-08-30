import { motion } from 'motion/react';
import { JSX } from 'react';

export default function Section({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className='container mt-10 py-16 space-y-8 md:space-y-0'
    >
      {children}
    </motion.section>
  );
}
