'use client';

import { useTranslations } from 'next-intl';
import Container from '@/app/_components/container';
import EventHallBookingForm from '@/app/_components/event-hall-booking-form';
import Image from 'next/image';

// SVG Icon Components
const UsersIcon = () => (
  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MicrophoneIcon = () => (
  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const SnowflakeIcon = () => (
  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07M7 12l5 5 5-5" />
  </svg>
);

const ChairIcon = () => (
  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const ParkingIcon = () => (
  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CateringIcon = () => (
  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-16 h-16 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function EventHallBookingPage() {
  const t = useTranslations('eventHall');

  const hallFeatures = [
    { icon: <UsersIcon />, title: t('features.capacity'), description: t('features.capacityDesc') },
    { icon: <MicrophoneIcon />, title: t('features.soundSystem'), description: t('features.soundSystemDesc') },
    { icon: <SnowflakeIcon />, title: t('features.airConditioned'), description: t('features.airConditionedDesc') },
    { icon: <ChairIcon />, title: t('features.seating'), description: t('features.seatingDesc') },
    { icon: <ParkingIcon />, title: t('features.parking'), description: t('features.parkingDesc') },
    { icon: <CateringIcon />, title: t('features.catering'), description: t('features.cateringDesc') },
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
                    <BuildingIcon />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
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
                <div className="flex justify-center mb-4">{feature.icon}</div>
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-dark-purple hover:bg-purple-800 rounded-lg transition-colors shadow-lg"
              >
                <PhoneIcon />
                {t('pricing.callButton')}
              </a>
              <a
                href={`https://wa.me/${t('pricing.whatsappNumber')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-dark-purple bg-gold hover:bg-yellow-500 rounded-lg transition-colors shadow-lg"
              >
                <WhatsAppIcon />
                {t('pricing.whatsappButton')}
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
