'use client';

import Container from "@/app/_components/container";
import { useState } from "react";
import { GiftIcon, HeartIcon, GlobeIcon, ChurchIcon, CheckIcon } from "@/app/_components/icons";

export default function GivingPage() {
  const [amount, setAmount] = useState<string>("");
  const [givingType, setGivingType] = useState<string>("tithe");
  const [frequency, setFrequency] = useState<string>("one-time");

  const predefinedAmounts = [3000, 5000, 10000, 20000, 50000, 100000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your payment processor (Stripe, PayPal, etc.)
    alert(`Thank you for your ${givingType} of ₦${amount}!`);
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
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Give Back</span>
                <div className="h-px w-8 bg-gold"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Give <span className="text-gold">Generously</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto mb-4 animate-slide-up-delay">
              "Give, and it will be given to you" - Luke 6:38
            </p>
            <p className="text-lg text-gray-200">
              Your generosity helps us transform lives and spread God's love
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
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Join Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6">
                Become a <span className="text-gold">Partner</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  At <strong className="text-royal-purple">Beloved New Beginning Ministries</strong>, we believe that 
                  partnership is a divine connection—where hearts, prayers, and resources unite to advance God's Kingdom on earth.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We welcome spirit-led individuals, churches, and organizations who desire to support this vision of 
                  spreading the gospel, restoring lives, and empowering communities through the love of Christ.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Your partnership helps us reach more souls, support the needy, and carry out outreach missions that 
                  transform lives for God's glory.
                </p>

                <div className="bg-gradient-to-r from-royal-purple/10 to-gold/10 p-6 rounded-xl border-l-4 border-gold mb-8">
                  <p className="text-royal-purple font-semibold italic text-lg">
                    "Two are better than one, because they have a good reward for their labor."
                  </p>
                  <p className="text-gray-600 mt-2">— Ecclesiastes 4:9</p>
                </div>

                <h3 className="text-2xl font-bold text-dark-purple mb-6">Ways to Partner:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckIcon size={24} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Monthly or one-time financial support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon size={24} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Donations (materials, equipment, food items, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon size={24} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Volunteering during outreaches or church programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon size={24} className="text-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Ministry collaborations or sponsorship</span>
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
                  Why We Give
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
                Your generous giving helps us spread the Gospel, support our community, and fulfill God's vision
                for Beloved New Beginning Ministries. Every gift makes a difference and is greatly appreciated.
              </p>
              <div className="bg-gradient-to-r from-royal-purple/10 to-gold/10 p-8 rounded-xl border-l-4 border-gold">
                <p className="text-royal-purple font-semibold italic text-lg text-center">
                  "Each of you should give what you have decided in your heart to give, not reluctantly or under
                  compulsion, for God loves a cheerful giver."
                </p>
                <p className="text-gray-600 text-center mt-3">- 2 Corinthians 9:7</p>
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
                  Make Your Contribution
                </h2>
                <p className="text-gray-600">Choose how you'd like to give today</p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Giving Type */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-4 text-lg">
                    Type of Giving
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
                      <div className="font-bold text-lg">Tithe</div>
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
                      <div className="font-bold text-lg">Offering</div>
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
                      <div className="font-bold text-lg">Missions</div>
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
                      <div className="font-bold text-lg">Building Fund</div>
                    </button>
                  </div>
                </div>

                {/* Frequency */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-4 text-lg">
                    Frequency
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
                      One-Time
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
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-4 text-lg">
                    Select Amount
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
                      placeholder="Enter custom amount"
                      className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none text-lg"
                      min="1"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!amount || parseFloat(amount) <= 0}
                  className="w-full bg-gradient-to-r from-gold to-accent-gold text-white py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <GiftIcon size={24} />
                  Proceed to Secure Payment
                </button>
              </form>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  <p className="font-semibold">Secure SSL Encrypted Payment</p>
                </div>
                <p className="text-sm text-gray-600">All transactions are encrypted and secure</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Bank Transfer */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              Or Make a Bank Transfer
            </h2>
            <p className="text-gray-600 text-lg">
              You can also give directly to our church account
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-royal-purple to-dark-purple rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              
              <div className="space-y-6">
                <div className="text-center pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-dark-purple mb-2">Bank Transfer Details</h3>
                  <p className="text-gray-500">Transfer directly to our church account</p>
                </div>
                
                <div className="space-y-5">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">Bank Name</p>
                    <p className="text-2xl font-bold text-royal-purple">Union Bank</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">Account Name</p>
                    <p className="text-2xl font-bold text-dark-purple">BELOVED New Beginning Ministries</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gold/10 to-accent-gold/10 rounded-xl p-5 border-2 border-gold/30">
                    <p className="text-sm text-gray-600 mb-2 font-semibold uppercase tracking-wide">Account Number</p>
                    <p className="text-3xl font-bold text-gold tracking-wider">0236577830</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-royal-purple/5 to-gold/5 rounded-xl p-6 mt-8 border border-royal-purple/20">
                  <p className="text-center text-gray-700 leading-relaxed">
                    <strong className="text-royal-purple">Please note:</strong> After making your transfer, you can send us a confirmation message via WhatsApp or email for prayer and proper documentation.
                  </p>
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
                <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">Connect with God</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
                Prophetic Encounters & <span className="text-gold">Prayer Requests</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Submit your prayer request and connect with us for a prophetic word
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
                  Submit Prayer Request
                </h3>
                
                <form className="space-y-5">
                  <div>
                    <label htmlFor="prayerName" className="block text-sm font-semibold text-dark-purple mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="prayerName"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-dark-purple mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                      placeholder="Enter your country"
                    />
                  </div>

                  <div>
                    <label htmlFor="prayerRequest" className="block text-sm font-semibold text-dark-purple mb-2">
                      Prayer Request *
                    </label>
                    <textarea
                      id="prayerRequest"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all resize-none"
                      placeholder="Share your prayer request..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-royal-purple to-dark-purple text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Submit Prayer Request
                  </button>
                </form>
              </div>

              {/* Online Prophetic Connection & Encouraging Scriptures */}
              <div className="space-y-6">
                {/* Prophetic Connection */}
                <div className="bg-gradient-to-br from-royal-purple to-dark-purple text-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-gold">Online Prophetic Connection</h3>
                  <p className="text-gray-100 mb-6 leading-relaxed">
                    Connect with Prophetess Toyin Jato for a prophetic word, spiritual guidance, and divine direction for your life.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckIcon size={20} className="text-gold flex-shrink-0 mt-1" />
                      <span>Personal prophetic ministry sessions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon size={20} className="text-gold flex-shrink-0 mt-1" />
                      <span>Online prayer and deliverance services</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon size={20} className="text-gold flex-shrink-0 mt-1" />
                      <span>Spiritual counseling and breakthrough</span>
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
                    Schedule Connection
                  </a>
                </div>

                {/* Encouraging Scriptures */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-dark-purple mb-6">Encouraging Scriptures</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-gold pl-4">
                      <p className="text-gray-700 italic mb-2">
                        "The prayer of a righteous person is powerful and effective."
                      </p>
                      <p className="text-royal-purple font-semibold text-sm">— James 5:16</p>
                    </div>
                    <div className="border-l-4 border-royal-purple pl-4">
                      <p className="text-gray-700 italic mb-2">
                        "Call to me and I will answer you and tell you great and unsearchable things you do not know."
                      </p>
                      <p className="text-royal-purple font-semibold text-sm">— Jeremiah 33:3</p>
                    </div>
                    <div className="border-l-4 border-gold pl-4">
                      <p className="text-gray-700 italic mb-2">
                        "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
                      </p>
                      <p className="text-royal-purple font-semibold text-sm">— Philippians 4:6</p>
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
