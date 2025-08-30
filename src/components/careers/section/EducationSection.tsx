import { sortCareers } from '@/utils/sortCareers';
import Career, { TCareer } from '@/components/careers/Career';
import { JSX } from 'react';
import Section from './Section';

const educations: TCareer[] = [
  {
    category: 'Education',
    title: {
      text: 'Bina Sarana Informatika University',
      href: 'https://www.bsi.ac.id/',
    },
    responsibilities: [
      'GPA: 4.00',
      'Became a central figure in study circles as fellow students often sought guidance for navigating academic hurdles',
      'Earned recognition within the student community for providing effective solutions and guidance to peers facing academic difficulties',
    ],
    date: {
      start: { year: 2021 },
      end: { year: 2025 },
      current: true,
    },
  },
  {
    category: 'Education',
    title: {
      text: 'Vocational High School 2 Jakarta',
      href: 'https://smkn2jkt.sch.id/',
    },
    // responsibilities: [
    // ],
    date: {
      start: { year: 2018 },
      end: { year: 2021 },
      current: false,
    },
  },
];

export default function EducationSection(): JSX.Element {
  const sortedEducations = sortCareers(educations);

  return (
    <Section>
      {sortedEducations.map((career, index) => (
        <Career
          key={index}
          career={career}
          isFirst={index === 0}
          isLast={index === educations.length - 1}
          isCurrent={career.date.current}
        />
      ))}
    </Section>
  );
}
