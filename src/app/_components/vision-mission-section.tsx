'use client';

import { useTranslations } from 'next-intl';
import { GlobeIcon, ChurchIcon } from "@/app/_components/icons";
import Container from "@/app/_components/container";

export function VisionMissionSection() {
  const t = useTranslations('about');

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-royal-purple to-dark-purple"></div>
            <div className="relative p-10 text-white">
              <div className="w-16 h-16 bg-gold/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GlobeIcon size={32} className="text-gold" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">{t('vision.title')}</h2>
              <p className="text-lg leading-relaxed text-gray-100">
                {t('vision.description')}
              </p>
            </div>
          </div>
          
          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-accent-gold"></div>
            <div className="relative p-10 text-dark-purple">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChurchIcon size={32} className="text-dark-purple" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('mission.title')}</h2>
              <p className="text-lg leading-relaxed">
                {t('mission.description')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
