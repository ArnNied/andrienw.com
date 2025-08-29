import { sortCareers } from '@/utils/sortCareers';
import Career, { TCareer } from '@/components/careers/Career';

const educations: TCareer[] = [
  {
    category: 'Education',
    title: 'Bina Sarana Informatika University',
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
    title: 'Vocational High School 2 Jakarta',
    // responsibilities: [
    // ],
    date: {
      start: { year: 2018 },
      end: { year: 2021 },
      current: false,
    },
  },
];

export default function EducationSection() {
  const sortedEducations = sortCareers(educations);

  return (
    <section className='container mt-10 py-16 space-y-8 md:space-y-0'>
      {sortedEducations.map((career, index) => (
        <Career
          key={index}
          career={career}
          isFirst={index === 0}
          isLast={index === educations.length - 1}
          isCurrent={career.date.current}
        />
      ))}
    </section>
  );
}
