import { TCareer } from '@/components/careers/Career';

export function formatCareerDate(date: TCareer['date']): string {
  if (!date) return '';

  const formatter = Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
  });

  const startDate = new Date(
    date.start.year,
    date.start.month ? date.start.month - 1 : 0,
  );
  const endDate = date.end?.year
    ? new Date(date.end?.year, date.end?.month ? date.end.month - 1 : 0)
    : new Date();

  // Format: M YYYY
  // Ex: Jul 2025
  let startIntl = formatter.format(startDate);
  startIntl = !date.start.month ? startIntl.split(' ')[1] : startIntl; // Remove month if undefined

  let endIntl = !date.current ? formatter.format(endDate) : 'Present';
  endIntl = !date.current && !date.end?.month ? endIntl.split(' ')[1] : endIntl; // Remove month if undefined

  return `${startIntl} - ${endIntl}`;
}
