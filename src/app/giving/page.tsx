'use client';

import Container from "@/app/_components/container";
import { useState } from "react";

export default function GivingPage() {
  const [amount, setAmount] = useState<string>("");
  const [givingType, setGivingType] = useState<string>("tithe");
  const [frequency, setFrequency] = useState<string>("one-time");

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your payment processor (Stripe, PayPal, etc.)
    alert(`Thank you for your ${givingType} of $${amount}!`);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-purple to-dark-purple text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Give <span className="text-gold">Generously</span>
            </h1>
            <p className="text-xl text-gray-200">
              "Give, and it will be given to you" - Luke 6:38
            </p>
          </div>
        </Container>
      </section>

      {/* Scripture & Message */}
      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              Your generous giving helps us spread the Gospel, support our community, and fulfill God's vision
              for Beloved New Beginning Ministries. Every gift makes a difference and is greatly appreciated.
            </p>
            <div className="bg-gold bg-opacity-10 p-6 rounded-lg">
              <p className="text-royal-purple font-semibold italic">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under
                compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Giving Form */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-royal-purple mb-6 text-center">
                Make Your Contribution
              </h2>

              <form onSubmit={handleSubmit}>
                {/* Giving Type */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Type of Giving
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setGivingType("tithe")}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        givingType === "tithe"
                          ? "border-royal-purple bg-royal-purple text-white"
                          : "border-gray-300 hover:border-royal-purple"
                      }`}
                    >
                      <div className="text-2xl mb-2">💝</div>
                      <div className="font-semibold">Tithe</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGivingType("offering")}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        givingType === "offering"
                          ? "border-royal-purple bg-royal-purple text-white"
                          : "border-gray-300 hover:border-royal-purple"
                      }`}
                    >
                      <div className="text-2xl mb-2">🎁</div>
                      <div className="font-semibold">Offering</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGivingType("missions")}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        givingType === "missions"
                          ? "border-royal-purple bg-royal-purple text-white"
                          : "border-gray-300 hover:border-royal-purple"
                      }`}
                    >
                      <div className="text-2xl mb-2">🌍</div>
                      <div className="font-semibold">Missions</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setGivingType("building")}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        givingType === "building"
                          ? "border-royal-purple bg-royal-purple text-white"
                          : "border-gray-300 hover:border-royal-purple"
                      }`}
                    >
                      <div className="text-2xl mb-2">🏛️</div>
                      <div className="font-semibold">Building Fund</div>
                    </button>
                  </div>
                </div>

                {/* Frequency */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Frequency
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFrequency("one-time")}
                      className={`flex-1 py-3 rounded-lg border-2 transition-colors font-semibold ${
                        frequency === "one-time"
                          ? "border-royal-purple bg-royal-purple text-white"
                          : "border-gray-300 hover:border-royal-purple"
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency("monthly")}
                      className={`flex-1 py-3 rounded-lg border-2 transition-colors font-semibold ${
                        frequency === "monthly"
                          ? "border-royal-purple bg-royal-purple text-white"
                          : "border-gray-300 hover:border-royal-purple"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((preAmount) => (
                      <button
                        key={preAmount}
                        type="button"
                        onClick={() => setAmount(preAmount.toString())}
                        className={`py-3 rounded-lg border-2 transition-colors font-semibold ${
                          amount === preAmount.toString()
                            ? "border-gold bg-gold text-white"
                            : "border-gray-300 hover:border-gold"
                        }`}
                      >
                        ${preAmount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-500 text-xl">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter custom amount"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-royal-purple focus:outline-none text-lg"
                      min="1"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!amount || parseFloat(amount) <= 0}
                  className="w-full bg-gold text-white py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Proceed to Payment
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>🔒 Secure payment processing</p>
                <p>All transactions are encrypted and secure</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-center text-royal-purple mb-12">
            Other Ways to Give
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-royal-purple mb-3">Bank Transfer</h3>
              <p className="text-gray-600 mb-2">
                Bank Name: Example Bank<br />
                Account Name: Beloved New Beginning Ministries<br />
                Account Number: 1234567890<br />
                Routing: 987654321
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-royal-purple mb-3">Mobile Money</h3>
              <p className="text-gray-600 mb-2">
                Send via:<br />
                Cash App: $BelovedChurch<br />
                Venmo: @BelovedChurch<br />
                Zelle: giving@belovedchurch.org
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-royal-purple mb-3">Mail a Check</h3>
              <p className="text-gray-600 mb-2">
                Beloved New Beginning Ministries<br />
                123 Church Street<br />
                City, State 12345<br />
                United States
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-royal-purple text-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">500+</div>
              <p>Lives Transformed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">50+</div>
              <p>Communities Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">1000+</div>
              <p>Meals Provided</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">25+</div>
              <p>Countries Reached</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
