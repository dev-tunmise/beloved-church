'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from "@/app/_components/container";
import Link from "next/link";
import { CheckIcon } from "@/app/_components/icons";

export default function GivingSuccessPage() {
  const searchParams = useSearchParams();
  const [paymentDetails, setPaymentDetails] = useState({
    reference: '',
    type: '',
    amount: '',
  });

  useEffect(() => {
    setPaymentDetails({
      reference: searchParams.get('reference') || '',
      type: searchParams.get('type') || 'donation',
      amount: searchParams.get('amount') || '0',
    });
  }, [searchParams]);

  const formatAmount = (amount: string) => {
    const numAmount = parseFloat(amount);
    return isNaN(numAmount) ? '0.00' : numAmount.toLocaleString('en-NG', { minimumFractionDigits: 2 });
  };

  const formatGivingType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Success Hero Section */}
      <section className="relative pt-32 pb-20 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-purple/95 via-royal-purple/90 to-dark-purple/95">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070')",
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
            {/* Success Icon */}
            <div className="inline-block mb-8 animate-fade-in">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <CheckIcon size={48} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              Thank You for Your <span className="text-gold">Generosity!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto mb-8 animate-slide-up-delay">
              Your payment has been received successfully
            </p>
            
            {/* Decorative element */}
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Payment Details Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold mb-6">
                  <CheckIcon size={24} className="text-green-600" />
                  <span>Payment Successful</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-4">
                  Payment Confirmation
                </h2>
                <p className="text-gray-600">Your transaction details</p>
              </div>

              {/* Payment Details Card */}
              <div className="space-y-6 mb-10">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">Transaction Reference</p>
                      <p className="text-lg font-bold text-royal-purple break-all">{paymentDetails.reference || 'N/A'}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">Giving Type</p>
                      <p className="text-lg font-bold text-dark-purple">{formatGivingType(paymentDetails.type)}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gold/10 to-accent-gold/10 rounded-xl p-6 border-2 border-gold/30">
                  <p className="text-sm text-gray-600 mb-2 font-semibold uppercase tracking-wide text-center">Amount Paid</p>
                  <p className="text-4xl font-bold text-gold text-center">₦{formatAmount(paymentDetails.amount)}</p>
                </div>
              </div>

              {/* Scripture */}
              <div className="bg-gradient-to-r from-royal-purple/10 to-gold/10 p-8 rounded-xl border-l-4 border-gold mb-8">
                <p className="text-royal-purple font-semibold italic text-lg text-center mb-2">
                  "God loves a cheerful giver."
                </p>
                <p className="text-gray-600 text-center">- 2 Corinthians 9:7</p>
              </div>

              {/* What's Next */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-dark-purple text-center">What Happens Next?</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-purple mb-1">Email Confirmation</h4>
                      <p className="text-gray-600 text-sm">You'll receive a payment receipt via email shortly</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-purple mb-1">Prayer & Blessing</h4>
                      <p className="text-gray-600 text-sm">Your gift will be acknowledged in prayer by our pastoral team</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="text-gold font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-purple mb-1">Kingdom Impact</h4>
                      <p className="text-gray-600 text-sm">Your generosity helps us spread the Gospel and support our community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-6">
              Continue Your Journey With Us
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Explore more ways to connect and grow in faith
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/"
                className="bg-gradient-to-br from-royal-purple to-dark-purple text-white p-8 rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h3 className="font-bold text-xl mb-2">Home</h3>
                <p className="text-gray-200 text-sm">Return to homepage</p>
              </Link>

              <Link
                href="/sermons"
                className="bg-gradient-to-br from-gold to-accent-gold text-dark-purple p-8 rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <h3 className="font-bold text-xl mb-2">Watch Sermons</h3>
                <p className="text-white text-sm">View latest messages</p>
              </Link>

              <Link
                href="/contact"
                className="bg-gradient-to-br from-royal-purple to-dark-purple text-white p-8 rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="font-bold text-xl mb-2">Contact Us</h3>
                <p className="text-gray-200 text-sm">Get in touch</p>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
