'use client';

import Container from "@/app/_components/container";
import { useState } from "react";
import { LocationIcon, PhoneIcon, EmailIcon, ClockIcon } from "@/app/_components/icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
                <div className="h-px w-8 bg-gold"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Contact <span className="text-gold">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto animate-slide-up-delay">
              We'd love to hear from you. Reach out to us anytime!
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
                  <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">Let's Connect</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether you have a question, need prayer, or want to learn more about our church,
                  we're here for you. Contact us through any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <LocationIcon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark-purple mb-2 text-lg">Visit Us</h3>
                      <p className="text-gray-600 leading-relaxed">
                        6 Ibrahim Alade Street<br />
                        Erunwen, Ikorodu<br />
                        Lagos, Nigeria
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
                      <h3 className="font-bold text-dark-purple mb-2 text-lg">Call Us</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Office: <a href="tel:+2347069609892" className="text-royal-purple hover:text-gold transition-colors">07069609892</a>
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
                      <h3 className="font-bold text-dark-purple mb-2 text-lg">Email Us</h3>
                      <p className="text-gray-600 leading-relaxed">
                        General: <a href="mailto:toyinjato8@gmail.com" className="text-royal-purple hover:text-gold transition-colors">toyinjato8@gmail.com</a>
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
                      <h3 className="font-bold text-dark-purple mb-2 text-lg">Service Times</h3>
                      <p className="text-gray-600 leading-relaxed">
                        <strong>Glorious Sunday Service:</strong> 8:00 AM - 10:00 AM<br />
                        <strong>Thursday Service:</strong> 5:00 PM - 7:00 PM<br />
                        <strong>Last Friday Vigil:</strong> 12:00 AM - 2:00 AM<br />
                        <strong>Counseling:</strong> Tuesday 12:00 PM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <h2 className="text-3xl font-bold text-dark-purple mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="visit">Visit Information</option>
                    <option value="partnership">Partnership/Giving</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-royal-purple focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-royal-purple to-dark-purple text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <EmailIcon size={22} />
                  Send Message
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.9537353153169!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1566524721694!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Church Location Map"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-dark-purple mb-2">
                  What should I expect on my first visit?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  You can expect a warm welcome, uplifting worship, and practical biblical teaching.
                  Come as you are – there's no dress code! Our service lasts about 90 minutes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-dark-purple mb-2">
                  Do you have programs for children?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! We have age-appropriate programs for children from nursery through high school
                  during our Sunday services. All our children's workers are background-checked and trained.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-dark-purple mb-2">
                  Is parking available?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We have ample free parking on-site. Our parking team will help direct you
                  to available spots when you arrive.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-dark-purple mb-2">
                  How can I get involved?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  There are many ways to serve! Contact us to learn about volunteer opportunities
                  in worship, hospitality, children's ministry, and community outreach.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
