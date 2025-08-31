'use client';

import Page from '@/components/core/Page';
import CategorySwitch from '@/components/careers/CategorySwitch';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Section from '@/components/careers/Section';
import { TCareer } from '@/components/careers/Career';
import CareerModal from '@/components/careers/CareerModal';

export enum ECareerSections {
  Experience = 'experience',
  Education = 'education',
}

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

export default function CareersPage() {
  const [activeSection, setActiveSection] = useState<ECareerSections>(
    ECareerSections.Experience,
  );

  const [careerModalIsOpen, setCareerModalIsOpen] = useState<boolean>(false);
  const [careerModalData, setCareerModalData] = useState<TCareer>(works[0]);

  function _setCareerModalData(career: TCareer) {
    setCareerModalData(career);
    setCareerModalIsOpen(true);
  }

  return (
    <Page>
      <AnimatePresence mode='wait'>
        {activeSection === ECareerSections.Experience && (
          <Section
            key='experience'
            careers={works}
            setCareerModalData={_setCareerModalData}
          />
        )}
        {activeSection === ECareerSections.Education && (
          <Section
            key='education'
            careers={educations}
            setCareerModalData={_setCareerModalData}
          />
        )}
      </AnimatePresence>
      <CareerModal
        isOpen={careerModalIsOpen}
        career={careerModalData}
        setCareerModalIsOpen={setCareerModalIsOpen}
      />
      <CategorySwitch
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </Page>
  );
}
