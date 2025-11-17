'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const EventHallBookingForm = () => {
  const t = useTranslations('eventHall.bookingForm');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    preferredDate: '',
    additionalNotes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send the data to your backend or email service
      console.log('Form submitted:', formData);

      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        eventType: '',
        preferredDate: '',
        additionalNotes: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
          {t('successTitle')}
        </h3>
        <p className="text-green-700 dark:text-green-400 mb-6">
          {t('successMessage')}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-dark-purple hover:bg-purple-800 text-white font-semibold rounded-lg transition-colors"
        >
          {t('submitAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          {t('fullName')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder={t('fullNamePlaceholder')}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          {t('email')} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder={t('emailPlaceholder')}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          {t('phone')} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder={t('phonePlaceholder')}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Event Type */}
      <div>
        <label
          htmlFor="eventType"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          {t('eventType')} <span className="text-red-500">*</span>
        </label>
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <option value="">{t('selectEventType')}</option>
          <option value="wedding">{t('eventTypes.wedding')}</option>
          <option value="birthday">{t('eventTypes.birthday')}</option>
          <option value="conference">{t('eventTypes.conference')}</option>
          <option value="seminar">{t('eventTypes.seminar')}</option>
          <option value="reception">{t('eventTypes.reception')}</option>
          <option value="meeting">{t('eventTypes.meeting')}</option>
          <option value="other">{t('eventTypes.other')}</option>
        </select>
      </div>

      {/* Preferred Date */}
      <div>
        <label
          htmlFor="preferredDate"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          {t('preferredDate')} <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="preferredDate"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Additional Notes */}
      <div>
        <label
          htmlFor="additionalNotes"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          {t('additionalNotes')}
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          rows={5}
          placeholder={t('additionalNotesPlaceholder')}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 px-8 py-4 bg-dark-purple hover:bg-purple-800 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors shadow-lg disabled:cursor-not-allowed"
        >
          {isSubmitting ? t('submitting') : t('submitButton')}
        </button>
        <a
          href={`tel:${t('callNumber')}`}
          className="flex-1 px-8 py-4 bg-gold hover:bg-yellow-500 text-dark-purple font-semibold rounded-lg transition-colors shadow-lg text-center"
        >
          📞 {t('callButton')}
        </a>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        {t('privacyNote')}
      </p>
    </form>
  );
};

export default EventHallBookingForm;
