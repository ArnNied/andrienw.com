import { TCareer } from '@/app/careers/page';

export function sortCareers(careers: TCareer[]): TCareer[] {
  // Sort experience by descending:
  // 1. date.start.year
  // 2. date.start.month
  // 3. date.current = true
  // 3. date.end.year
  // 4. date.end.month
  // 6. title (fallback as last resort if everything is identical)
  // Note: Treat undefined as 0

  return careers.sort((a, b) => {
    return (
      (b.date.start.year || 0) - (a.date.start.year || 0) ||
      (b.date.start?.month || 0) - (a.date.start?.month || 0) ||
      (b.date.current ? 1 : 0) - (a.date.current ? 1 : 0) ||
      (b.date.end?.year || 0) - (a.date.end?.year || 0) ||
      (b.date.end?.month || 0) - (a.date.end?.month || 0) ||
      (b.title.text || '').localeCompare(a.title.text || '')
    );
  });
}
