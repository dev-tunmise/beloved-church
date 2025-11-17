'use client';

import { useTranslations } from 'next-intl';
import Container from '@/app/_components/container';
import EventHallBookingForm from '@/app/_components/event-hall-booking-form';
import Image from 'next/image';

export default function EventHallBookingPage() {
  const t = useTranslations('eventHall');

  const hallFeatures = [
    { icon: '👥', title: t('features.capacity'), description: t('features.capacityDesc') },
    { icon: '🎤', title: t('features.soundSystem'), description: t('features.soundSystemDesc') },
    { icon: '❄️', title: t('features.airConditioned'), description: t('features.airConditionedDesc') },
    { icon: '🪑', title: t('features.seating'), description: t('features.seatingDesc') },
    { icon: '🅿️', title: t('features.parking'), description: t('features.parkingDesc') },
    { icon: '🍽️', title: t('features.catering'), description: t('features.cateringDesc') },
  ];

  const galleryImages = [
    { src: '/images/hall-1.jpg', alt: 'Event Hall Main View', title: t('gallery.mainView') },
    { src: '/images/hall-2.jpg', alt: 'Event Hall Interior', title: t('gallery.interior') },
    { src: '/images/hall-3.jpg', alt: 'Event Hall Setup', title: t('gallery.setup') },
    { src: '/images/hall-4.jpg', alt: 'Event Hall Ceremony', title: t('gallery.ceremony') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-purple via-purple-900 to-dark-purple text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-gold">
              {t('hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('intro.title')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {t('intro.paragraph1')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t('intro.paragraph2')}
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider uppercase bg-gold/10 border border-gold/30 rounded-full text-gold">
              {t('gallery.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {t('gallery.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden group"
              >
                {/* Placeholder for images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-900 dark:to-purple-800">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🏛️</div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {image.title}
                    </p>
                  </div>
                </div>
                {/* Uncomment when images are available */}
                {/* <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider uppercase bg-gold/10 border border-gold/30 rounded-full text-gold">
              {t('features.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('features.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hallFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider uppercase bg-gold/10 border border-gold/30 rounded-full text-gold">
              {t('pricing.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('pricing.title')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t('pricing.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${t('pricing.phoneNumber')}`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-dark-purple hover:bg-purple-800 rounded-lg transition-colors shadow-lg"
              >
                📞 {t('pricing.callButton')}
              </a>
              <a
                href={`https://wa.me/${t('pricing.whatsappNumber')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-dark-purple bg-gold hover:bg-yellow-500 rounded-lg transition-colors shadow-lg"
              >
                💬 {t('pricing.whatsappButton')}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider uppercase bg-gold/10 border border-gold/30 rounded-full text-gold">
                {t('bookingForm.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('bookingForm.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t('bookingForm.subtitle')}
              </p>
            </div>
            <EventHallBookingForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
