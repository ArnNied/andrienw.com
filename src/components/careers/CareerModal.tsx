import { JSX } from 'react';
import { Description } from '@headlessui/react';
import { formatCareerDate } from '@/utils/formatCareerDate';
import Modal from '@/components/shared/Modal';
import { TCareer } from '@/app/careers/page';

export default function CareerModal({
  isOpen,
  career,
  setCareerModalIsOpen,
}: {
  isOpen: boolean;
  career: TCareer;
  setCareerModalIsOpen: (isOpen: boolean) => void;
}): JSX.Element {
  return (
    <Modal
      title={career.title.text}
      titleLink={career.title.href}
      subtitle={career.subtitle?.text}
      subtitleLink={career.subtitle?.href}
      subtitleMuted={career.type}
      subtitleMutedItalic={formatCareerDate(career.date)}
      images={career.images}
      isOpen={isOpen}
      modalCloseCallback={() => setCareerModalIsOpen(false)}
    >
      <Description as='ul' className='list-disc space-y-2'>
        {career.responsibilities?.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </Description>
    </Modal>
  );
}
