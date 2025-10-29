'use client';

import { useTranslations } from 'next-intl';
import Container from "@/app/_components/container";

export function AboutHero() {
  const t = useTranslations('about');

  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-purple/95 via-royal-purple/90 to-dark-purple/95">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2070')",
            backgroundPosition: "center"
          }}
        />
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }}
        />
      </div>
      
      <Container>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="flex items-center gap-3 justify-center">
              <div className="h-px w-8 bg-gold"></div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('hero.badge')}</span>
              <div className="h-px w-8 bg-gold"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            {t.rich('hero.title', {
              beloved: (chunks) => <span className="text-gold">{chunks}</span>
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto animate-slide-up-delay">
            {t('hero.subtitle')}
          </p>
          
          {/* Decorative element */}
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
