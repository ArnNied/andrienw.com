'use client';

import Page from '@/components/core/Page';
import ExperienceSection from '@/components/careers/section/ExperienceSection';
import EducationSection from '@/components/careers/section/EducationSection';
import CategorySwitch from '@/components/careers/CategorySwitch';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

export enum ECareerSections {
  Experience = 'experience',
  Education = 'education',
}

export default function CareersPage() {
  const [activeSection, setActiveSection] = useState<ECareerSections>(
    ECareerSections.Experience,
  );

  return (
    <Page>
      <AnimatePresence>
        {activeSection === ECareerSections.Experience && <ExperienceSection />}
        {activeSection === ECareerSections.Education && <EducationSection />}
      </AnimatePresence>
      <CategorySwitch
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </Page>
  );
}
