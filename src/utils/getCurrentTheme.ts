export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export function getCurrentTheme(): ETheme {
  if (typeof window === 'undefined') return ETheme.DARK;

  const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme;

  if (theme === ETheme.LIGHT || theme === ETheme.DARK) {
    return theme;
  }

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return ETheme.DARK;
  } else {
    return ETheme.LIGHT;
  }
}

export function setCurrentTheme(theme: ETheme): void {
  if (typeof window === 'undefined') return;

  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  const html = document.documentElement;

  if (theme === ETheme.DARK) {
    html.classList.add('dark');
  } else if (theme === ETheme.LIGHT) {
    html.classList.remove('dark');
  } else {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
