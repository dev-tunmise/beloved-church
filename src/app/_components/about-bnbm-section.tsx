'use client';

import { useTranslations } from 'next-intl';

export function AboutBnbmSection() {
  const t = useTranslations('about');

  return (
    <div>
      <div className="inline-block mb-4">
        <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('aboutBnbm.badge')}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
        {t.rich('aboutBnbm.title', {
          beloved: (chunks) => <span className="text-gold">{chunks}</span>
        })}
      </h2>
      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <p>
          {t.rich('aboutBnbm.intro')}
        </p>
        <p>
          {t.rich('aboutBnbm.leadership', {
            prophetess: (chunks) => <strong className="text-dark-purple">{chunks}</strong>
          })}
        </p>
        <p>
          {t.rich('aboutBnbm.commitment', {
            royalGrace: (chunks) => <strong className="text-gold">{chunks}</strong>
          })}
        </p>
      </div>
    </div>
  );
}
