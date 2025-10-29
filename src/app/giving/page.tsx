'use client';

import Container from "@/app/_components/container";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { GiftIcon, HeartIcon, GlobeIcon, ChurchIcon, CheckIcon } from "@/app/_components/icons";
import { usePaystackDonation } from "@/hooks/usePaystackDonation";
import { PaystackDonationButton } from "@/app/_components/paystack-button";

// Giving page with Paystack integration - Updated Oct 2025
export default function GivingPage() {
  const t = useTranslations('giving');
  const [amount, setAmount] = useState<string>("");
  const [givingType, setGivingType] = useState<'tithe' | 'offering' | 'missions' | 'building'>("tithe");
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>("one-time");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const { initializePayment, redirectToSuccess, isConfigured } = usePaystackDonation();

  const predefinedAmounts = [10000, 20000, 50000, 100000, 300000, 500000];

  const handlePaystackPayment = () => {
    // Validate inputs
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    if (!isConfigured) {
      alert('Payment system is not configured. Please contact the administrator.');
      return;
    }

    setIsProcessing(true);

    // Payment success handler
    const handleSuccess = (response: any) => {
      console.log('Payment successful:', response);
      setIsProcessing(false);
      
      // Redirect to success page
      redirectToSuccess(response.reference, givingType, parseFloat(amount));
    };

    // Payment close handler
    const handleClose = () => {
      console.log('Payment modal closed');
      setIsProcessing(false);
    };

    // Initialize Paystack payment
    initializePayment(
      {
        amount: parseFloat(amount),
        email,
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        phone: phone || undefined,
        givingType,
        frequency,
      },
      handleSuccess,
      handleClose
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePaystackPayment();
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-purple/95 via-royal-purple/90 to-dark-purple/95">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070')",
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
              Give <span className="text-gold">Generously</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto mb-4 animate-slide-up-delay">
              {t('hero.scripture')}
            </p>
            <p className="text-lg text-gray-200">
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

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">{t('partnership.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6">
                Become a <span className="text-gold">Partner</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {t.rich('partnership.intro', {
                    bnbm: (chunks) => <strong className="text-royal-purple">{chunks}</strong>
                  })}
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {t('partnership.paragraph1')}
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {t('partnership.paragraph2')}
                </p>

                <div className="bg-gradient-to-r from-royal-purple/10 to-gold/10 p-6 rounded-xl border-l-4 border-gold mb-8">
                  <p className="text-royal-purple font-semibold italic text-lg">
                    {t('partnership.scripture')}
                  </p>
                  <p className="text-gray-600 mt-2">{t('partnership.scriptureRef')}</p>
                </div>

                <h3 className="text-2xl font-bold text-dark-purple mb-6">{t('partnership.waysTitle')}</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon size={24} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{t('partnership.financialSupport')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon size={24} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{t('partnership.donations')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon size={24} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{t('partnership.volunteering')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon size={24} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{t('partnership.collaboration')}</span>
                  </li>
                </ul>

                
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Scripture & Message */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HeartIcon size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-4">
                  {t('whyGive.title')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
                {t('whyGive.description')}
              </p>
              <div className="bg-gradient-to-r from-royal-purple/10 to-gold/10 p-8 rounded-xl border-l-4 border-gold">
                <p className="text-royal-purple font-semibold italic text-lg text-center">
                  {t('whyGive.scripture')}
                </p>
                <p className="text-gray-600 text-center mt-3">{t('whyGive.scriptureRef')}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Giving Form */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-3">
                  {t('form.title')}
                </h2>
                <p className="text-gray-600">{t('form.subtitle')}</p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="mb-8">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-3 text-lg">
                    {t('form.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('form.emailPlaceholder')}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none text-lg"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">{t('form.receiptInfo')}</p>
                </div>

                {/* Optional: Name Fields */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
                      {t('form.firstName')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder={t('form.firstNamePlaceholder')}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">
                      {t('form.lastName')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder={t('form.lastNamePlaceholder')}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none"
                    />
                  </div>
                </div>

                {/* Optional: Phone Field */}
                <div className="mb-8">
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    {t('form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('form.phonePlaceholder')}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none"
                  />
                </div>

                {/* Giving Type */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-4 text-lg">
                    {t('form.givingType')}
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setGivingType("tithe")}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        givingType === "tithe"
                          ? "border-royal-purple bg-gradient-to-br from-royal-purple to-dark-purple text-white shadow-lg"
                          : "border-gray-200 hover:border-royal-purple hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <HeartIcon size={32} className={givingType === "tithe" ? "text-gold" : "text-royal-purple"} />
                      </div>
                      <div className="font-bold text-lg">{t('form.types.tithe')}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGivingType("offering")}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        givingType === "offering"
                          ? "border-royal-purple bg-gradient-to-br from-royal-purple to-dark-purple text-white shadow-lg"
                          : "border-gray-200 hover:border-royal-purple hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <GiftIcon size={32} className={givingType === "offering" ? "text-gold" : "text-royal-purple"} />
                      </div>
                      <div className="font-bold text-lg">{t('form.types.offering')}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGivingType("missions")}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        givingType === "missions"
                          ? "border-royal-purple bg-gradient-to-br from-royal-purple to-dark-purple text-white shadow-lg"
                          : "border-gray-200 hover:border-royal-purple hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <GlobeIcon size={32} className={givingType === "missions" ? "text-gold" : "text-royal-purple"} />
                      </div>
                      <div className="font-bold text-lg">{t('form.types.missions')}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGivingType("building")}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        givingType === "building"
                          ? "border-royal-purple bg-gradient-to-br from-royal-purple to-dark-purple text-white shadow-lg"
                          : "border-gray-200 hover:border-royal-purple hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <ChurchIcon size={32} className={givingType === "building" ? "text-gold" : "text-royal-purple"} />
                      </div>
                      <div className="font-bold text-lg">{t('form.types.building')}</div>
                    </button>
                  </div>
                </div>

                {/* Frequency */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-4 text-lg">
                    {t('form.frequency')}
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFrequency("one-time")}
                      className={`py-4 rounded-xl border-2 transition-all duration-300 font-bold text-lg ${
                        frequency === "one-time"
                          ? "border-royal-purple bg-gradient-to-r from-royal-purple to-dark-purple text-white shadow-lg"
                          : "border-gray-200 hover:border-royal-purple hover:shadow-md"
                      }`}
                    >
                      {t('form.oneTime')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency("monthly")}
                      className={`py-4 rounded-xl border-2 transition-all duration-300 font-bold text-lg ${
                        frequency === "monthly"
                          ? "border-royal-purple bg-gradient-to-r from-royal-purple to-dark-purple text-white shadow-lg"
                          : "border-gray-200 hover:border-royal-purple hover:shadow-md"
                      }`}
                    >
                      {t('form.monthly')}
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-4 text-lg">
                    {t('form.selectAmount')}
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((preAmount) => (
                      <button
                        key={preAmount}
                        type="button"
                        onClick={() => setAmount(preAmount.toString())}
                        className={`py-4 rounded-xl border-2 transition-all duration-300 font-bold text-lg ${
                          amount === preAmount.toString()
                            ? "border-gold bg-gradient-to-br from-gold to-accent-gold text-white shadow-lg"
                            : "border-gray-200 hover:border-gold hover:shadow-md"
                        }`}
                      >
                        ₦{preAmount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-6 top-5 text-gray-500 text-xl font-bold">₦</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder={t('form.customAmountPlaceholder')}
                      className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none text-lg"
                      min="1"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <PaystackDonationButton
                  amount={parseFloat(amount) || 0}
                  givingType={givingType}
                  onPaymentClick={handlePaystackPayment}
                  disabled={!amount || parseFloat(amount) <= 0 || !email || isProcessing}
                  loading={isProcessing}
                />
              </form>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <p className="font-semibold">{t('form.securePayment')}</p>
                </div>
                <p className="text-sm text-gray-600">{t('form.paymentInfo')}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bank Transfer - Combined Local & International */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              {t('bankTransfer.title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('bankTransfer.subtitle')}
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Local Bank Transfer (Left) */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b border-gray-200">
                    <div className="inline-block mb-2 px-3 py-1 bg-royal-purple/10 rounded-full">
                      <span className="text-royal-purple font-semibold text-xs uppercase tracking-wider">Local (NGN)</span>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-purple mb-2">{t('bankTransfer.detailsTitle')}</h3>
                    <p className="text-gray-500 text-sm">{t('bankTransfer.detailsSubtitle')}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">{t('bankTransfer.bankName')}</p>
                      <p className="text-xl font-bold text-royal-purple">Union Bank</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200">
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">{t('bankTransfer.accountName')}</p>
                      <p className="text-lg font-bold text-dark-purple">BELOVED New Beginning Ministries</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-royal-purple/10 to-royal-purple/5 rounded-xl p-4 border-2 border-royal-purple/30">
                      <p className="text-xs text-gray-600 mb-1 font-semibold uppercase tracking-wide">{t('bankTransfer.accountNumber')}</p>
                      <p className="text-2xl font-bold text-royal-purple tracking-wider">0236577830</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* International Bank Transfer (Right) */}
              <div className="bg-gradient-to-br from-gold/5 to-accent-gold/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gold/30">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <GlobeIcon size={32} className="text-white" />
                </div>
                
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b border-gold/20">
                    <div className="inline-flex items-center gap-2 bg-gold/10 px-3 py-1 rounded-full mb-2">
                      <GlobeIcon size={14} className="text-gold" />
                      <span className="text-gold font-semibold text-xs uppercase tracking-wider">International (USD)</span>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-purple mb-2">{t('internationalTransfer.detailsTitle')}</h3>
                    <p className="text-gray-500 text-sm">{t('internationalTransfer.detailsSubtitle')}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border-2 border-gold/20">
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">{t('internationalTransfer.accountName')}</p>
                      <p className="text-lg font-bold text-dark-purple">Beloved New Beginning Ministries</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border-2 border-gold/20">
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">{t('internationalTransfer.accountNumber')}</p>
                      <p className="text-xl font-bold text-royal-purple tracking-wider">0236581110</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 border-2 border-gold/20">
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">{t('internationalTransfer.bankName')}</p>
                      <p className="text-lg font-bold text-dark-purple">Union Bank of Nigeria Plc</p>
                      <p className="text-xs text-gray-500 mt-1">Union Bank House, 36 Marina, Lagos Island, Nigeria</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gradient-to-br from-gold/10 to-accent-gold/10 rounded-xl p-4 border-2 border-gold/40">
                        <p className="text-xs text-gray-600 mb-1 font-semibold uppercase tracking-wide">{t('internationalTransfer.swiftCode')}</p>
                        <p className="text-xl font-bold text-dark-purple">UBNINGLA</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-gold/15 to-accent-gold/15 rounded-xl p-4 border-2 border-gold/40">
                        <p className="text-xs text-gray-600 mb-1 font-semibold uppercase tracking-wide">{t('internationalTransfer.currency')}</p>
                        <p className="text-xl font-bold text-gold">USD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Prophetic Encounters / Prayer Requests Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">{t('prayer.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
                {t.rich('prayer.title', {
                  span: (chunks) => <span className="text-gold">{chunks}</span>
                })}
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {t('prayer.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Prayer Request Form */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-dark-purple mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-royal-purple/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-royal-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  {t('prayer.formTitle')}
                </h3>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);
                    const name = formData.get('prayerName') as string;
                    const country = formData.get('country') as string;
                    const request = formData.get('prayerRequest') as string;
                    
                    // Create mailto link with pre-filled content
                    const subject = encodeURIComponent(`Prayer Request from ${name}`);
                    const body = encodeURIComponent(
                      `Name: ${name}\n` +
                      `Country: ${country}\n\n` +
                      `Prayer Request:\n${request}`
                    );
                    const mailtoLink = `mailto:toyinjato8@gmail.com?subject=${subject}&body=${body}`;
                    
                    // Open user's email client
                    window.location.href = mailtoLink;
                    
                    // Reset form
                    form.reset();
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="prayerName" className="block text-sm font-semibold text-dark-purple mb-2">
                      {t('prayer.fullName')} *
                    </label>
                    <input
                      type="text"
                      id="prayerName"
                      name="prayerName"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                      placeholder={t('prayer.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-dark-purple mb-2">
                      {t('prayer.country')} *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                      placeholder={t('prayer.countryPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="prayerRequest" className="block text-sm font-semibold text-dark-purple mb-2">
                      {t('prayer.request')} *
                    </label>
                    <textarea
                      id="prayerRequest"
                      name="prayerRequest"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all resize-none"
                      placeholder={t('prayer.requestPlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-royal-purple to-dark-purple text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {t('prayer.submit')}
                  </button>
                </form>
              </div>

              {/* Online Prophetic Connection & Encouraging Scriptures */}
              <div className="space-y-6">
                {/* Prophetic Connection */}
                <div className="bg-gradient-to-br from-royal-purple to-dark-purple text-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-gold">{t('prayer.prophetic.title')}</h3>
                  <p className="text-gray-100 mb-6 leading-relaxed">
                    {t('prayer.prophetic.description')}
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckIcon size={20} className="text-gold flex-shrink-0 mt-1" />
                      <span>{t('prayer.prophetic.ministry')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon size={20} className="text-gold flex-shrink-0 mt-1" />
                      <span>{t('prayer.prophetic.deliverance')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon size={20} className="text-gold flex-shrink-0 mt-1" />
                      <span>{t('prayer.prophetic.counseling')}</span>
                    </div>
                  </div>
                  <a
                    href="mailto:toyinjato@gmail.com"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-dark-purple px-6 py-3 rounded-lg font-semibold hover:bg-accent-gold transition-all duration-300 w-full"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    {t('prayer.prophetic.schedule')}
                  </a>
                </div>

                {/* Encouraging Scriptures */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-dark-purple mb-6">{t('prayer.scriptures.title')}</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-gold pl-4">
                      <p className="text-gray-700 italic mb-2">
                        {t('prayer.scriptures.verse1')}
                      </p>
                      <p className="text-royal-purple font-semibold text-sm">{t('prayer.scriptures.ref1')}</p>
                    </div>
                    <div className="border-l-4 border-royal-purple pl-4">
                      <p className="text-gray-700 italic mb-2">
                        {t('prayer.scriptures.verse2')}
                      </p>
                      <p className="text-royal-purple font-semibold text-sm">{t('prayer.scriptures.ref2')}</p>
                    </div>
                    <div className="border-l-4 border-gold pl-4">
                      <p className="text-gray-700 italic mb-2">
                        {t('prayer.scriptures.verse3')}
                      </p>
                      <p className="text-royal-purple font-semibold text-sm">{t('prayer.scriptures.ref3')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
    </main>
  );
}
