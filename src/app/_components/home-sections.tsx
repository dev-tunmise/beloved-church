'use client';

import React from 'react';
import Container from "@/app/_components/container";
import Link from "next/link";
import Image from "next/image";
import { VideoIcon, HeartIcon, GiftIcon, ArrowRightIcon, CheckIcon } from "@/app/_components/icons";
import { useTranslations } from 'next-intl';
import { useForm, ValidationError } from '@formspree/react';

export function HeroSection() {
  const t = useTranslations('home.hero');
  
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-purple/95 via-royal-purple/90 to-dark-purple/95">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero-image.jpg"
            alt="Hero Background"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </div>
      </div>
      
      {/* Content */}
      <Container>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t.rich('title', {
              faith: (chunks) => <span className="text-gold">{chunks}</span>
            })}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/sermons"
              className="inline-flex items-center justify-center gap-3 bg-gold text-dark-purple px-8 py-4 rounded-lg font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <VideoIcon size={22} />
              {t('watchSermons')}
            </Link>
            <Link
              href="/giving"
              className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-purple transition-all duration-300"
            >
              <GiftIcon size={22} />
              {t('giveToChurch')}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function WelcomeSection() {
  const t = useTranslations('home.welcome');
  
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/prophetess-toyin.jpg"
                alt="Prophetess Toyin Jato"
                fill
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block mb-4">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
              {t('title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('paragraph1')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('paragraph2')}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-accent-gold flex items-center justify-center">
                <HeartIcon size={28} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-dark-purple text-lg">{t('name')}</p>
                <p className="text-gray-500 text-sm">{t('role')}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutSection() {
  const t = useTranslations('home.about');
  
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-block mb-4">
              <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">{t('badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
              {t('title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('paragraph1')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('paragraph2')}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-royal-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-purple transition-all duration-300 shadow-lg"
            >
              {t('learnMore')}
              <ArrowRightIcon size={18} />
            </Link>
          </div>
          <div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/who-we-are.jpg"
                alt="Who We Are"
                fill
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DeliveranceSection() {
  const t = useTranslations('home.deliverance');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">
                {t('confirmationTitle')}
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                {t('confirmationMessage')}
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">{t('badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4 leading-tight">
              {t('title')}
            </h2>
            <p className="text-2xl text-gold font-semibold mb-6">
              {t('subtitle')}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('intro')}
            </p>

            {/* Types of Sessions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-dark-purple mb-4">{t('typesTitle')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t('type1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t('type2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t('type3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t('type4')}</span>
                </li>
              </ul>
            </div>

            {/* What to Expect */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-dark-purple mb-4">{t('expectTitle')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-royal-purple mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t('expect1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-royal-purple mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t('expect2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-royal-purple mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t('expect3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-royal-purple mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t('expect4')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-royal-purple mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t('expect5')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon size={20} className="text-royal-purple mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{t('expect6')}</span>
                </li>
              </ul>
            </div>

            {/* CTA Text */}
            <p className="text-lg font-semibold text-dark-purple">
              {t('cta')}
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-dark-purple mb-6">{t('formTitle')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-dark-purple mb-2">
                  {t('fullName')}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                  placeholder={t('fullNamePlaceholder')}
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-dark-purple mb-2">
                  {t('whatsapp')}
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                  placeholder={t('whatsappPlaceholder')}
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-dark-purple mb-2">
                  {t('country')}
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                  placeholder={t('countryPlaceholder')}
                />
              </div>

              {/* What you need deliverance from */}
              <div>
                <label htmlFor="needDeliverance" className="block text-sm font-semibold text-dark-purple mb-2">
                  {t('needDeliverance')}
                </label>
                <textarea
                  id="needDeliverance"
                  name="needDeliverance"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all resize-none"
                  placeholder={t('needDeliverancePlaceholder')}
                ></textarea>
              </div>

              {/* Preferred Date & Time */}
              <div>
                <label htmlFor="datetime" className="block text-sm font-semibold text-dark-purple mb-2">
                  {t('datetime')}
                </label>
                <input
                  type="datetime-local"
                  id="datetime"
                  name="datetime"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                />
              </div>

              {/* Session Type */}
              <div>
                <label htmlFor="sessionType" className="block text-sm font-semibold text-dark-purple mb-2">
                  {t('sessionType')}
                </label>
                <select
                  id="sessionType"
                  name="sessionType"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all bg-white"
                >
                  <option value="">{t('selectSessionType')}</option>
                  <option value="one-on-one">{t('type1')}</option>
                  <option value="healing">{t('type2')}</option>
                  <option value="breakthrough">{t('type3')}</option>
                  <option value="family">{t('type4')}</option>
                </select>
              </div>

              {/* Online or Physical */}
              <div>
                <label className="block text-sm font-semibold text-dark-purple mb-3">
                  {t('sessionMode')}
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mode"
                      value="online"
                      required
                      className="w-4 h-4 text-royal-purple focus:ring-royal-purple"
                    />
                    <span className="text-gray-700">{t('online')}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="mode"
                      value="physical"
                      required
                      className="w-4 h-4 text-royal-purple focus:ring-royal-purple"
                    />
                    <span className="text-gray-700">{t('physical')}</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-royal-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-purple transition-all duration-300 shadow-lg hover:shadow-xl mt-6"
              >
                {t('submitButton')}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SermonsSection() {
  const t = useTranslations('home.sermons');
  
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="inline-block mb-4">
        <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('badge')}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
        {t('title')}
      </h2>
      <p className="text-gray-600 text-lg">
        {t('description')}
      </p>
    </div>
  );
}

export function GivingSection() {
  const t = useTranslations('home.giving');
  
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
                {t('title')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t('paragraph1')}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t('paragraph2')}
              </p>
              <Link
                href="/giving"
                className="inline-flex items-center gap-2 bg-gold text-dark-purple px-8 py-4 rounded-lg font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg"
              >
                <GiftIcon size={20} />
                {t('giveNow')}
              </Link>
            </div>
            <div className="bg-gradient-to-br from-royal-purple to-dark-purple rounded-2xl p-8 text-white shadow-2xl">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                  <GiftIcon size={24} className="text-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{t('bankDetails')}</h3>
                <p className="text-gray-300 text-sm">{t('bankDetailsSubtitle')}</p>
              </div>
              
              <div className="space-y-4">
                <div className="border-t border-white/10 pt-4">
                  <p className="text-gray-400 text-sm mb-1">{t('bankName')}</p>
                  <p className="font-semibold text-lg">{t('bankNameValue')}</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-gray-400 text-sm mb-1">{t('accountName')}</p>
                  <p className="font-semibold text-lg">{t('accountNameValue')}</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-gray-400 text-sm mb-1">{t('accountNumber')}</p>
                  <p className="font-semibold text-lg">{t('accountNumberValue')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function BlogSection() {
  const t = useTranslations('home.blog');
  
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="inline-block mb-4">
        <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">{t('badge')}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
        {t('title')}
      </h2>
      <p className="text-gray-600 text-lg">
        {t('description')}
      </p>
    </div>
  );
}

export function ContactSection() {
  const t = useTranslations('home.contact');
  const [state, handleSubmit] = useForm("manawpad");

  if (state.succeeded) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon size={32} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-dark-purple mb-3">
            {t('success')}
          </h3>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            {t('successMessage')}
          </p>
          <Link href="/" className="text-royal-purple hover:text-dark-purple transition-colors">
            {t('backToHome')}
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('badge')}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
          {t('title')}
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-dark-purple mb-2">
              {t('fullName')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
              placeholder={t('namePlaceholder')}
            />
            <ValidationError 
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-600 mt-1 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-dark-purple mb-2">
              {t('emailAddress')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
              placeholder={t('emailPlaceholder')}
            />
            <ValidationError 
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-600 mt-1 text-sm"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-semibold text-dark-purple mb-2">
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all resize-none"
            placeholder={t('messagePlaceholder')}
          ></textarea>
          <ValidationError 
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-600 mt-1 text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-royal-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-purple transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {state.submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('sending')}
            </>
          ) : (
            t('sendMessage')
          )}
        </button>
      </form>
    </div>
  );
}
