'use client';

import Container from "@/app/_components/container";
import Link from "next/link";
import { useTranslations } from 'next-intl';
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

export default function AboutPage() {
  const t = useTranslations('about');
  
  return (
    <main className="bg-white">
      {/* Hero Section */}
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
              About <span className="text-gold">{t('hero.beloved')}</span>
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

      {/* About BNBM Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
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
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold/10 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-royal-purple/10 rounded-2xl -z-10"></div>
              </div>

              {/* Right - Text */}
              <div>
                <div className="inline-block mb-4">
                  <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('aboutBnbm.badge')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
                  About <span className="text-gold">{t('aboutBnbm.beloved')}</span>
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <strong className="text-royal-purple">{t('aboutBnbm.beloved')}</strong> {t('aboutBnbm.intro')}
                  </p>
                  <p>
                    Founded under the prophetic leadership of <strong className="text-dark-purple">{t('aboutBnbm.prophetess')}</strong>, our ministry is a beacon of hope, healing, and restoration for believers seeking to walk in their divine purpose and experience God's supernatural breakthrough.
                  </p>
                  <p>
                    We are committed to raising a generation of believers who walk in <strong className="text-gold">{t('aboutBnbm.royalGrace')}</strong>, equipped with the knowledge of God's Word and empowered by the Holy Spirit to fulfill their God-given destiny.
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
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

      {/* About Prophetess Toyin Section - Flowing Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-purple/5 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text */}
              <div className="lg:pr-8">
                <div className="inline-block mb-4">
                  <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">{t('prophetess.badge')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
                  Prophetess <span className="text-gold">{t('prophetess.styled')}</span>
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <strong className="text-royal-purple">{t('prophetess.strong')}</strong> is a woman of God with a powerful prophetic calling and an unwavering passion for souls. She is the founder and Senior Prophetess of <strong className="text-dark-purple">{t('prophetess.ministry')}</strong>.
                  </p>
                  <p>
                    {t('prophetess.paragraph2')}
                  </p>
                  <p>
                    {t('prophetess.paragraph3')}
                  </p>
                  <p>
                    Prophetess Toyin also founded <strong className="text-gold">{t('prophetess.tdgi')}</strong> and <strong className="text-royal-purple">{t('prophetess.foundation')}</strong>, extending her ministry's impact through faith-based products and humanitarian outreach programs.
                  </p>
                </div>

                {/* Ministry Highlights */}
              </div>

              {/* Right - Image with flowing design */}
              <div className="relative lg:pl-8">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/prophetess-toyin.jpg"
                      alt={t('prophetess.styled')}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Quote Card */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                      <p className="text-royal-purple font-semibold italic text-sm leading-relaxed">
                        {t('prophetess.quote')}
                      </p>
                      <p className="text-gold font-bold mt-2 text-sm">{t('prophetess.quoteAuthor')}</p>
                    </div>
                  </div>
                  
                  {/* Decorative flowing elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-gold to-accent-gold rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-royal-purple to-dark-purple rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">{t('values.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              {t('values.title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('values.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Prayer Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PrayerIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('values.prayer.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('values.prayer.description')}
              </p>
            </div>
            
            {/* The Word Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('values.word.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('values.word.description')}
              </p>
            </div>
            
            {/* Love Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('values.love.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('values.love.description')}
              </p>
            </div>
            
            {/* Excellence Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <StarIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('values.excellence.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('values.excellence.description')}
              </p>
            </div>
            
            {/* Community Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UsersIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('values.community.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('values.community.description')}
              </p>
            </div>
            
            {/* Mission/Outreach Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GlobeIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">{t('values.mission.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('values.mission.description')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Church Gallery */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('gallery.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('gallery.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Gallery Image 1 - Prophetess Oluwatoyin */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/prophetess-oluwatoyin.jpg"
                  alt={t('gallery.item1.title')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl text-dark-purple mb-2">{t('gallery.item1.title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('gallery.item1.description')}
                </p>
              </div>
            </div>

            {/* Gallery Image 2 - Prophetess and Husband */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/proophetess-and-husband.jpg"
                  alt={t('gallery.item2.title')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl text-dark-purple mb-2">{t('gallery.item2.title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('gallery.item2.description')}
                </p>
              </div>
            </div>

            {/* Gallery Image 3 - Prophetess and Members */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/prophetess-and-members.jpg"
                  alt={t('gallery.item3.title')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl text-dark-purple mb-2">{t('gallery.item3.title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('gallery.item3.description')}
                </p>
              </div>
            </div>

            {/* Gallery Image 4 - Prophetess and Excellent Men */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/prophetess-and-excellent-men.jpg"
                  alt={t('gallery.item4.title')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl text-dark-purple mb-2">{t('gallery.item4.title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('gallery.item4.description')}
                </p>
              </div>
            </div>

            {/* Gallery Image 5 - Prophetess and Good Women */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/prophetess-and-good-women.jpg"
                  alt={t('gallery.item5.title')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl text-dark-purple mb-2">{t('gallery.item5.title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('gallery.item5.description')}
                </p>
              </div>
            </div>

            {/* Gallery Image 6 - Prophetess and Women */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/prophetess-and-women.jpg"
                  alt={t('gallery.item6.title')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl text-dark-purple mb-2">{t('gallery.item6.title')}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('gallery.item6.description')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-royal-purple to-dark-purple text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gold">{t('cta.styled')}</span>
            </h2>
            <p className="text-xl text-gray-100 mb-10 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-dark-purple px-8 py-4 rounded-lg font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('cta.contactUs')}
                <ArrowRightIcon size={18} />
              </Link>
              <Link
                href="/sermons"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-purple transition-all duration-300"
              >
                {t('cta.watchSermons')}
                <ArrowRightIcon size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
