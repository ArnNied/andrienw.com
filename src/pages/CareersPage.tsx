'use client';

import Page from '@/components/core/Page';
import CategorySwitch from '@/components/careers/CategorySwitch';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Section from '@/components/careers/Section';
import CareerModal from '@/components/careers/CareerModal';

export enum ECareerSections {
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
}

export type TCareer = {
  title: {
    text: string;
    href?: string;
  };
  subtitle?: {
    text: string;
    href?: string;
  };
  type?: string;
  responsibilities?: string[];
  summary?: string;
  images?: {
    src: string;
    alt?: string;
  }[];
  date: {
    start: { month?: number; year: number };
    end?: { year?: number; month?: number };
    current: boolean;
  };
};

const experiences: TCareer[] = [
  {
    title: {
      text: 'Backend Developer',
    },
    subtitle: {
      text: 'PT Angkasa Defender Indonesia',
      href: 'https://www.wangsit.id/',
    },
    type: 'Internship',
    responsibilities: [
      'Worked within an Agile framework to deliver high-quality software solutions',
      'Developed and maintained microservices with Typescript, Golang, and MongoDB across three key projects',
      'Applied Repository patterns to create a scalable and maintainable codebase',
      'Enhanced internal tools to streamline and automate Swagger documentation generation within the development pipeline',
      'Wrote unit tests and integration tests with 95%+ coverage to ensure code quality and reliability',
    ],
    images: [
      {
        src: '/img/asdf/certificate.jpg',
        alt: 'Certificate of Internship at PT Angkasa Defender Indonesia',
      },
      {
        src: '/img/asdf/first-week.jpg',
        alt: 'First week at PT Angkasa Defender Indonesia',
      },
      {
        src: '/img/asdf/onboarding.jpg',
        alt: 'Onboarding at PT Angkasa Defender Indonesia',
      },
      {
        src: '/img/asdf/project-initialization.jpg',
        alt: 'Project Initialization at PT Angkasa Defender Indonesia',
      },
      {
        src: '/img/asdf/daily.jpg',
        alt: 'Daily Activity at PT Angkasa Defender Indonesia',
      },
    ],
    date: {
      start: { month: 8, year: 2024 },
      end: { month: 2, year: 2025 },
      current: false,
    },
  },
  {
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
    images: [
      {
        src: '/img/bangkit/graduate-with-distinction.jpg',
        alt: 'Certificate of Graduate with Distinction from Bangkit Academy',
      },
      {
        src: '/img/bangkit/top-50-team.jpg',
        alt: 'Top 50 Team Certificate from Bangkit Academy',
      },
      {
        src: '/img/bangkit/final-transcript.jpg',
        alt: 'Final Transcript from Bangkit Academy',
      },
      {
        src: '/img/bangkit/graduation-letter.jpg',
        alt: 'Graduation Letter from Bangkit Academy',
      },
      {
        src: '/img/bangkit/top-graduate.jpg',
        alt: 'Proof of Top Graduate from Bangkit Academy',
      },
      {
        src: '/img/bangkit/capstone-team-meeting.jpg',
        alt: 'Capstone Team Meeting at Bangkit Academy',
      },
      {
        src: '/img/bangkit/signa-lingua.jpg',
        alt: 'Capstone Project Github Organization for Bangkit Academy',
      },
    ],
    date: {
      start: { month: 2, year: 2024 },
      end: { month: 7, year: 2024 },
      current: false,
    },
  },
  {
    title: {
      text: 'Freelance Web Developer',
    },
    subtitle: {
      text: 'Freelance',
    },
    type: 'Freelance',
    responsibilities: [
      'Transformed Figma designs into front-end code',
      'Provided customized solution to refine website design',
      'Utilized front-end technologies to create interactive and responsive interfaces',
      'Provided services to colleagues in university regarding their projects',
    ],
    images: [
      {
        src: '/img/freelance2022/genesix.jpg',
        alt: 'GENESIX Website',
      },
    ],
    date: {
      start: { month: 3, year: 2022 },
      end: { month: 8, year: 2022 },
      current: false,
    },
  },
  {
    title: {
      text: 'Quality Assurance',
    },
    subtitle: {
      text: 'PT Megacom Alfa Pratama',
      href: 'https://digitalalliance.co.id/',
    },
    type: 'Internship',
    responsibilities: [
      'Diagnosed and resolved hardware and software issues, providing technical support to customers',
      'Assembled custom-built PCs according to company specifications, ensuring performance and quality standards were met',
      'Contributed to quality control processes, ensuring products met company standards and specifications',
      'Assisted in network configuration to ensure proper setup and functionality',
      'Managed and optimized warehouse inventory, ensuring accurate stock levels and efficient operations',
    ],
    images: [
      {
        src: '/img/digital_alliance/certificate.jpg',
        alt: 'Certificate of Internship at PT Megacom Alfa Pratama',
      },
    ],
    date: {
      start: { month: 2, year: 2020 },
      end: { month: 4, year: 2020 },
      current: false,
    },
  },
  {
    title: {
      text: 'Private Tutor',
    },
    subtitle: {
      text: 'Rumah Les Bunda Ellyssa',
    },
    type: 'Part-time',
    responsibilities: [
      'Provided tutoring sessions for students from grade 4 to grade 11 in various subjects',
      'Assisted students in improving their study habits and academic performance',
      'Communicated regularly with parents to update them on student progress',
    ],
    date: {
      start: { year: 2019 },
      end: { year: 2022 },
      current: false,
    },
  },
];

const educations: TCareer[] = [
  {
    title: {
      text: 'Bina Sarana Informatika University',
      href: 'https://www.bsi.ac.id/',
    },
    subtitle: {
      text: 'Bachelor of Computer Science',
    },
    responsibilities: [
      'GPA: 3.96',
      'Became a central figure in study circles as fellow students often sought guidance for navigating academic hurdles',
      'Earned recognition within the student community for providing effective solutions and guidance to peers facing academic difficulties',
    ],
    images: [
      {
        src: '/img/ubsi/average-score.jpg',
        alt: 'Average Score at Bina Sarana Informatika University',
      },
      {
        src: '/img/ubsi/student-profile.jpg',
        alt: 'Student Profile at Bina Sarana Informatika University',
      },
      {
        src: '/img/ubsi/khs.jpg',
        alt: 'KHS at Bina Sarana Informatika University',
      },
    ],
    date: {
      start: { year: 2021 },
      end: { year: 2025 },
      current: true,
    },
  },
  {
    title: {
      text: 'Vocational High School 2 Jakarta',
      href: 'https://smkn2jkt.sch.id/',
    },
    subtitle: {
      text: 'Software Engineering',
    },
    date: {
      start: { year: 2018 },
      end: { year: 2021 },
      current: false,
    },
  },
];

export default function CareersPage() {
  const [activeSection, setActiveSection] = useState<ECareerSections>(
    ECareerSections.EXPERIENCE,
  );

  const [careerModalIsOpen, setCareerModalIsOpen] = useState<boolean>(false);
  const [careerModalData, setCareerModalData] = useState<TCareer>(
    experiences[0],
  );

  function _setCareerModalData(career: TCareer) {
    setCareerModalData(career);
    setCareerModalIsOpen(true);
  }

  return (
    <Page>
      <AnimatePresence mode='wait'>
        {activeSection === ECareerSections.EXPERIENCE && (
          <Section
            key='experience'
            careers={experiences}
            setCareerModalData={_setCareerModalData}
          />
        )}
        {activeSection === ECareerSections.EDUCATION && (
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
