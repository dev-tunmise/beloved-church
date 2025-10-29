'use client';

import Container from "@/app/_components/container";
import Link from "next/link";
import { 
  PrayerIcon, 
  BookIcon, 
  HeartIcon, 
  StarIcon, 
  UsersIcon, 
  GlobeIcon, 
  ChurchIcon,
  ArrowRightIcon 
} from "@/app/_components/icons";
import { useTranslations } from 'next-intl';

export function AboutHeroSection() {
  const t = useTranslations('about.hero');
  
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
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('badge')}</span>
              <div className="h-px w-8 bg-gold"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            {t.rich('title', {
              beloved: (chunks) => <span className="text-gold">{chunks}</span>
            })}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto animate-slide-up-delay">
            {t('subtitle')}
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export function AboutBNBMSection() {
  const t = useTranslations('about.aboutBnbm');
  
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="/images/beloved-full-logo.jpg"
                    alt="Beloved New Beginning Ministries"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-royal-purple/10 rounded-2xl -z-10"></div>
            </div>

            <div>
              <div className="inline-block mb-4">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
                {t.rich('title', {
                  beloved: (chunks) => <span className="text-gold">{chunks}</span>
                })}
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong className="text-royal-purple">{t('beloved')}</strong> {t('intro')}
                </p>
                <p>
                  {t.rich('leadership', {
                    prophetess: (chunks) => <strong className="text-dark-purple">{chunks}</strong>
                  })}
                </p>
                <p>
                  {t.rich('commitment', {
                    royalGrace: (chunks) => <strong className="text-gold">{chunks}</strong>
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function VisionMissionSection() {
  const tVision = useTranslations('about.vision');
  const tMission = useTranslations('about.mission');
  
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-royal-purple to-dark-purple"></div>
            <div className="relative p-10 text-white">
              <div className="w-16 h-16 bg-gold/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GlobeIcon size={32} className="text-gold" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">{tVision('title')}</h2>
              <p className="text-lg leading-relaxed text-gray-100">
                {tVision('description')}
              </p>
            </div>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-accent-gold"></div>
            <div className="relative p-10 text-dark-purple">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChurchIcon size={32} className="text-dark-purple" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{tMission('title')}</h2>
              <p className="text-lg leading-relaxed">
                {tMission('description')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CoreValuesSection() {
  const t = useTranslations('about.coreValues');
  
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">{t('subtitle')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
            {t('title')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PrayerIcon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('prayer')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('prayerDesc')}
            </p>
          </div>
          
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookIcon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('word')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('wordDesc')}
            </p>
          </div>
          
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HeartIcon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('love')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('loveDesc')}
            </p>
          </div>
          
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <StarIcon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('holiness')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('holinessDesc')}
            </p>
          </div>
          
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <UsersIcon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('service')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('serviceDesc')}
            </p>
          </div>
          
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GlobeIcon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('faith')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('faithDesc')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function JoinCTASection() {
  const t = useTranslations('about.joinUs');
  
  return (
    <section className="py-20 bg-gradient-to-r from-royal-purple to-dark-purple text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-100 mb-10 leading-relaxed">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-dark-purple px-8 py-4 rounded-lg font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('contactUs')}
              <ArrowRightIcon size={18} />
            </Link>
            <Link
              href="/sermons"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-purple transition-all duration-300"
            >
              {t('watchSermons')}
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
