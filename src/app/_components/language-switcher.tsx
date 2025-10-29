'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/i18n';
import { useState, useRef, useEffect } from 'react';

const languageNames: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  yo: 'Yorùbá',
};

const languageShortNames: Record<string, string> = {
  en: 'EN',
  fr: 'FR',
  es: 'ES',
  yo: 'YO',
};

const languageFlags: Record<string, string> = {
  en: '🇬🇧',
  fr: '🇫🇷',
  es: '🇪🇸',
  yo: '🇳🇬',
};

export function LanguageSwitcher() {
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    
    // Create a transition to the new locale
    const startTransition = (window as any).startTransition || ((fn: () => void) => fn());
    
    startTransition(() => {
      // Store locale preference
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
      
      // Reload to apply the new locale
      window.location.reload();
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group"
        aria-label={t('language')}
        aria-expanded={isOpen}
        title="Change language"
      >
        {/* Globe Icon */}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="text-xs font-medium uppercase tracking-wide">
          {languageShortNames[locale]}
        </span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-800 rounded-md shadow-xl border border-gray-200 dark:border-slate-700 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${
                locale === loc
                  ? 'bg-gray-50 dark:bg-slate-700/50 text-royal-purple dark:text-gold font-medium'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-base" role="img" aria-label={languageNames[loc]}>
                {languageFlags[loc]}
              </span>
              <span className="flex-1 text-left">{languageNames[loc]}</span>
              {locale === loc && (
                <svg
                  className="w-4 h-4 text-royal-purple dark:text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
