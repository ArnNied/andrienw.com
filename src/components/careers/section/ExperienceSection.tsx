import { sortCareers } from '@/utils/sortCareers';
import Career, { TCareer } from '@/components/careers/Career';
import { JSX } from 'react';
import Section from './Section';

const works: TCareer[] = [
  {
    category: 'Formal',
    title: {
      text: 'Backend Developer',
    },
    subtitle: {
      text: 'PT Angkasa Defender Indonesia',
      href: 'https://www.asdf.id/',
    },
    type: 'Internship',
    responsibilities: [
      'Worked within an Agile framework to deliver high-quality software solutions',
      'Improved codebase maintainability by proposing and implementing widely adopted design patterns',
      'Developed and maintained microservices with Typescript, Golang, and MongoDB across three key projects',
      'Enhanced internal tools to streamline and automate documentation generation within the development pipeline',
      'Implemented unit tests with 90%+ coverage to ensure robust code quality',
    ],
    date: {
      start: { month: 8, year: 2024 },
      end: { month: 2, year: 2025 },
      current: false,
    },
  },
  {
    category: 'Formal',
    title: {
      text: 'Cloud Computing Cohort',
    },
    subtitle: {
      text: 'Bangkit Academy By Google, GoTo, and Traveloka',
      href: 'https://grow.google/intl/id_id/bangkit/',
    },
    type: 'Student Internship',
    responsibilities: [
      'Graduated with distinction as the top 10% (136 out of 1.3k+) of the Cloud Computing learning path',
      'Achieved a top 10% (50 out of 500+) ranking among teams with the highest scores for final project',
      'Achieved a top 25% (1125 out of 4.5k+) ranking for most active student in lectures',
      'Ranked in the top 3 out of 20 for most active participant in the study group',
    ],
    date: {
      start: { month: 2, year: 2024 },
      end: { month: 7, year: 2024 },
      current: false,
    },
  },
];

export default function ExperienceSection(): JSX.Element {
  const sortedExperience = sortCareers(works);

  return (
    <Section>
      {sortedExperience.map((career, index) => (
        <Career
          key={index}
          career={career}
          isFirst={index === 0}
          isLast={index === works.length - 1}
          isCurrent={career.date.current}
        />
      ))}
    </Section>
  );
}
