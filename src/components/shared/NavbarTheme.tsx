import {
  ETheme,
  getCurrentTheme,
  setCurrentTheme,
} from '@/utils/getCurrentTheme';
import clsx from 'clsx';
import { LucideIcon, Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { JSX, useCallback, useEffect, useState } from 'react';

const baseCnIcon = 'p-0 w-5.5 h-5.5 hover:text-primary transition-colors';

function NavbarThemeToggle({
  theme,
  toggleTheme,
}: {
  theme: ETheme;
  toggleTheme: () => void;
}): JSX.Element {
  return (
    <button
      className='hidden sm:block cursor-pointer'
      onClick={toggleTheme}
      aria-label='Toggle Theme'
    >
      <AnimatePresence mode='wait'>
        {theme === ETheme.DARK ? (
          <motion.span
            key='icon-moon'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Moon className={baseCnIcon} />
          </motion.span>
        ) : (
          <motion.span
            key='icon-sun'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Sun className={baseCnIcon} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function NavbarThemeSelectButton({
  theme,
  Icon,
  currentTheme,
  setTheme,
}: {
  theme: ETheme;
  Icon: LucideIcon;
  currentTheme: ETheme;
  setTheme: (theme: ETheme) => void;
}): JSX.Element {
  const buttonIsActive = currentTheme === theme;

  return (
    <motion.button
      className='group relative w-1/2 py-1.5 flex justify-center items-center transition-colors cursor-pointer'
      onClick={() => setTheme(theme)}
    >
      <Icon
        className={clsx(
          baseCnIcon,
          buttonIsActive && '!text-text-lighter',
          !buttonIsActive && 'group-hover:text-primary',
        )}
      />
      {buttonIsActive && (
        <motion.span
          layoutId='navbar-theme-select-background'
          transition={{ duration: 0.3, type: 'spring' }}
          className='absolute top-0 left-0 w-full h-full bg-primary -z-10'
        ></motion.span>
      )}
    </motion.button>
  );
}

function NavbarThemeSelect({
  theme,
  setTheme,
}: {
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
}): JSX.Element {
  return (
    <div className='mt-2 sm:mt-0 sm:hidden flex border border-secondary rounded-lg overflow-hidden'>
      <NavbarThemeSelectButton
        theme={ETheme.DARK}
        Icon={Moon}
        currentTheme={theme}
        setTheme={setTheme}
      />
      <NavbarThemeSelectButton
        theme={ETheme.LIGHT}
        Icon={Sun}
        currentTheme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default function NavbarTheme(): JSX.Element {
  const [theme, setTheme] = useState<ETheme>(getCurrentTheme());
  const [mounted, setMounted] = useState(false);

  const _setTheme = useCallback((newTheme: ETheme) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  }, []);

  useEffect(() => {
    const savedTheme = getCurrentTheme();
    setTheme(savedTheme);
    setCurrentTheme(savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;

    setTheme(newTheme);
    setCurrentTheme(newTheme);
  }, [theme]);

  if (!mounted) return <div className='w-full sm:w-auto ml-0 sm:ml-auto' />;

  return (
    <div className='w-full sm:w-auto ml-0 sm:ml-auto'>
      {mounted && (
        <>
          <NavbarThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <NavbarThemeSelect theme={theme} setTheme={_setTheme} />
        </>
      )}
    </div>
  );
}
