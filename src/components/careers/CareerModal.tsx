import { JSX } from 'react';
import { Description } from '@headlessui/react';
import { TCareer } from './Career';
import { formatCareerDate } from '@/utils/formatCareerDate';
import Modal from '../shared/Modal';

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
      images={[
        'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1564659318382-6d44cf680407?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ]}
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
