'use client';

import Container from "@/app/_components/container";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { LocationIcon, PhoneIcon, EmailIcon, ClockIcon } from "@/app/_components/icons";

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled content
    const subject = encodeURIComponent(`${formData.subject || 'Contact Form'}: Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    const mailtoLink = `mailto:toyinjato8@gmail.com?subject=${subject}&body=${body}`;
    
    // Open user's email client
    window.location.href = mailtoLink;
    
    // Show success message and reset form
    setTimeout(() => {
      alert(t('form.successMessage'));
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-purple/95 via-royal-purple/90 to-dark-purple/95">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074')",
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
              Contact <span className="text-gold">Us</span>
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

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <div className="inline-block mb-4">
                  <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">{t('info.badge')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6">
                  {t('info.title')}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('info.description')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <LocationIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-purple mb-2 text-lg">{t('info.location.title')}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t('info.location.address')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <PhoneIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-purple mb-2 text-lg">{t('info.phone.title')}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t('info.phone.label')} <a href="tel:+2347069609892" className="text-royal-purple hover:text-gold transition-colors">07069609892</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <EmailIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-purple mb-2 text-lg">{t('info.email.title')}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t('info.email.label')} <a href="mailto:toyinjato8@gmail.com" className="text-royal-purple hover:text-gold transition-colors">toyinjato8@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <ClockIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-purple mb-2 text-lg">{t('info.hours.title')}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        <strong>{t('info.hours.sunday')}:</strong> {t('info.hours.sundayTime')}<br />
                        <strong>{t('info.hours.thursday')}:</strong> {t('info.hours.thursdayTime')}<br />
                        <strong>{t('info.hours.vigil')}:</strong> {t('info.hours.vigilTime')}<br />
                        <strong>{t('info.hours.counseling')}:</strong> {t('info.hours.counselingTime')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <h2 className="text-3xl font-bold text-dark-purple mb-6">
                {t('form.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    {t('form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none transition-colors"
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    {t('form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none transition-colors"
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    {t('form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none transition-colors"
                    placeholder={t('form.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    {t('form.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none transition-colors"
                  >
                    <option value="">{t('form.selectSubject')}</option>
                    <option value="general">{t('form.subjects.general')}</option>
                    <option value="prayer">{t('form.subjects.prayer')}</option>
                    <option value="visit">{t('form.subjects.visit')}</option>
                    <option value="partnership">{t('form.subjects.partnership')}</option>
                    <option value="other">{t('form.subjects.other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    {t('form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none transition-colors resize-none"
                    placeholder={t('form.messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-royal-purple to-dark-purple text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <EmailIcon size={22} />
                  {t('form.submit')}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7193688446886!2d3.5044889!3d6.614444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e8b8b8b8b8%3A0x0!2zNsKwMzYnNTIuMCJOIDPCsDMwJzE2LjIiRQ!5e0!3m2!1sen!2sng!4v1698000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Beloved New Beginning Ministries - 6 Ibrahim Alade Street, Erunwen, Ikorodu, Lagos"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">{t('faq.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
                {t('faq.title')}
              </h2>
              <p className="text-gray-600 text-lg">
                {t('faq.subtitle')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-dark-purple mb-2">
                  {t('faq.questions.0.question')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('faq.questions.0.answer')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-dark-purple mb-2">
                  {t('faq.questions.1.question')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('faq.questions.1.answer')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-dark-purple mb-2">
                  {t('faq.questions.2.question')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('faq.questions.2.answer')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-dark-purple mb-2">
                  {t('faq.questions.3.question')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('faq.questions.3.answer')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
