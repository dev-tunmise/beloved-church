'use client';

import Container from "@/app/_components/container";
import { useState } from "react";
import Link from "next/link";
import { LeafIcon, CheckIcon, StarIcon, HeartIcon } from "@/app/_components/icons";

// WhatsApp Icon component
const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Email Icon component
const EmailIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Book Icon component
const BookIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

// Faith-based anointed products from TDGI Enterprise
const products = [
  {
    id: 1,
    name: "Favour Soap",
    purpose: "For attracting divine favour and open doors",
    scripture: "Psalm 5:12",
    scriptureText: "For surely, O LORD, you bless the righteous; you surround them with your favor as with a shield.",
    image: "/images/favour-soap.jpg",
    category: "Soaps"
  },
  {
    id: 2,
    name: "Connection Soap",
    purpose: "For destiny helpers and divine relationships",
    scripture: "Psalm 20",
    scriptureText: "May the LORD answer you when you are in distress; may the name of the God of Jacob protect you.",
    image: "/images/connection-soap.jpg",
    category: "Soaps"
  },
  {
    id: 3,
    name: "Breakthrough Soap",
    purpose: "For destroying spiritual barriers and unlocking success",
    scripture: "Isaiah 45:2-3",
    scriptureText: "I will go before you and will level the mountains; I will break down gates of bronze and cut through bars of iron.",
    image: "/images/breakthrough-soap.jpg",
    category: "Soaps"
  },
  {
    id: 4,
    name: "Mercy Soap",
    purpose: "For receiving God's mercy and compassion",
    scripture: "Lamentations 3:22-23",
    scriptureText: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
    image: "/images/mercy-soap.jpg",
    category: "Soaps"
  },
  {
    id: 5,
    name: "Glory Oil",
    purpose: "For healing, deliverance, and divine touch",
    scripture: "James 5:14",
    scriptureText: "Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord.",
    image: "/images/glory-oil.jpg",
    category: "Oils & Liquids"
  },
  {
    id: 6,
    name: "Healing Balm",
    purpose: "For relief, strength, and divine restoration",
    scripture: "Jeremiah 8:22",
    scriptureText: "Is there no balm in Gilead? Is there no physician there? Why then is there no healing for the wound of my people?",
    image: "/images/healing-balm.jpg",
    category: "Balms"
  },
];

export default function TDGIPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleWhatsAppOrder = (productName: string) => {
    const message = encodeURIComponent(`Hello, I would like to order: ${productName}`);
    window.open(`https://wa.me/2347069609892?text=${message}`, '_blank');
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-purple/95 via-royal-purple/90 to-dark-purple/95">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070')",
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
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Anointed Products</span>
                <div className="h-px w-8 bg-gold"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Faith-Based <span className="text-gold">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto animate-slide-up-delay">
              Blessed, anointed tools for healing, favour, and breakthrough
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

      {/* About TDGI Enterprise Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6">
                About <span className="text-gold">TDGI Enterprise</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The official product arm of Prophetess Toyin Jato's ministry, bringing faith-based solutions to believers worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left Column - Story */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-royal-purple/5 to-gold/5 rounded-2xl p-8 border border-gold/20">
                  <h3 className="text-2xl font-bold text-dark-purple mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                      <BookIcon size={20} className="text-gold" />
                    </div>
                    Who We Are
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-royal-purple">TDGI Enterprise (RC:3603675)</strong> is the registered product division of 
                    <strong className="text-dark-purple"> Beloved New Beginning Ministries</strong>, operating in partnership with 
                    <strong className="text-royal-purple"> Toyin Jato Foundation International</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Under the spiritual leadership of <strong className="text-gold">Prophetess Toyin Jato</strong>, 
                    we produce divinely inspired, faith-based products that serve as spiritual tools for healing, 
                    breakthrough, favor, and divine connection.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-royal-purple/5 to-gold/5 rounded-2xl p-8 border border-gold/20">
                  <h3 className="text-2xl font-bold text-dark-purple mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-royal-purple/20 flex items-center justify-center">
                      <HeartIcon size={20} className="text-royal-purple" />
                    </div>
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide anointed, scripture-based products that empower believers to activate their faith, 
                    receive divine healing, attract supernatural favor, and experience breakthrough in every area of life. 
                    Each product is prayerfully created and blessed to serve as a point of contact for miracles.
                  </p>
                </div>
              </div>

              {/* Right Column - What Makes Us Different */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-dark-purple to-royal-purple rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">What Makes TDGI Different</h3>
                  
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                        <StarIcon size={24} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gold mb-1">Prayerfully Blessed</h4>
                        <p className="text-gray-200 text-sm">Every product goes through intense prayer and spiritual consecration before reaching you</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                        <BookIcon size={24} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gold mb-1">Scripture-Rooted</h4>
                        <p className="text-gray-200 text-sm">Each product is anchored in specific Bible verses and divine promises from God's Word</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                        <CheckIcon size={24} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gold mb-1">Faith Activation</h4>
                        <p className="text-gray-200 text-sm">Designed as contact points to activate your faith and release God's power in your life</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                        <LeafIcon size={24} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gold mb-1">Quality & Purity</h4>
                        <p className="text-gray-200 text-sm">Made with high-quality, natural ingredients combined with spiritual anointing</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gold/10 to-accent-gold/10 rounded-2xl p-8 border-2 border-gold/30">
                  <h3 className="text-xl font-bold text-dark-purple mb-3">Our Commitment</h3>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    We are committed to maintaining the highest standards of spiritual integrity and product quality. 
                    Every item is produced with excellence, blessed with prayer, and sent forth with faith for your breakthrough.
                  </p>
                  <p className="text-royal-purple font-semibold text-sm italic">
                    "These products are not just commodities—they are spiritual tools consecrated for your victory."
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Info Banner */}
            <div className="bg-gradient-to-r from-royal-purple to-dark-purple rounded-2xl p-8 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Registered & Officially Recognized
                </h3>
                <p className="text-gray-200 text-lg mb-2">
                  <strong className="text-gold">TDGI Enterprise</strong> is officially registered with the Corporate Affairs Commission
                </p>
                <p className="text-gold font-bold text-xl">
                  RC: 3603675
                </p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-gray-300 text-sm">
                    A legitimate business entity operating under <strong>Beloved New Beginning Ministries</strong> in partnership with <strong>Toyin Jato Foundation International</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* TDGI Enterprise Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-purple mb-4">
                Product Philosophy
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Faith-based tools for your spiritual journey
              </p>
              
              <div className="bg-gradient-to-br from-royal-purple/10 to-gold/10 rounded-2xl p-8 md:p-10 border-2 border-gold/30 max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Each TDGI product is <strong className="text-royal-purple">divinely inspired</strong>, 
                  <strong className="text-dark-purple"> prayerfully produced</strong>, and dedicated to the spiritual and physical well-being of believers worldwide.
                </p>
                <div className="pt-6 border-t border-gold/30">
                  <p className="text-base md:text-lg text-gray-700 italic">
                    Every product is blessed, anointed, and serves as a <strong className="text-gold">faith point</strong> for healing, favour, 
                    connection, and breakthroughs in your life.
                  </p>
                </div>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <StarIcon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-purple mb-2">Blessed & Anointed</h3>
                <p className="text-gray-600">Every product is prayerfully blessed</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookIcon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-purple mb-2">Scripture Based</h3>
                <p className="text-gray-600">Rooted in God's Word and promises</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckIcon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-purple mb-2">Faith Points</h3>
                <p className="text-gray-600">Tools for healing and breakthrough</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TDGI Products Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">Anointed Products</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              Our <span className="text-gold">Faith-Based Products</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Divinely inspired, prayerfully produced faith tools for your spiritual journey
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-royal-purple to-dark-purple text-white"
                  : "bg-white text-dark-purple border-2 border-gray-200 hover:border-royal-purple"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory("Soaps")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                selectedCategory === "Soaps"
                  ? "bg-gradient-to-r from-royal-purple to-dark-purple text-white"
                  : "bg-white text-dark-purple border-2 border-gray-200 hover:border-royal-purple"
              }`}
            >
              Anointed Soaps
            </button>
            <button
              onClick={() => setSelectedCategory("Oils & Liquids")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                selectedCategory === "Oils & Liquids"
                  ? "bg-gradient-to-r from-royal-purple to-dark-purple text-white"
                  : "bg-white text-dark-purple border-2 border-gray-200 hover:border-royal-purple"
              }`}
            >
              Oils & Waters
            </button>
            <button
              onClick={() => setSelectedCategory("Balms")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                selectedCategory === "Balms"
                  ? "bg-gradient-to-r from-royal-purple to-dark-purple text-white"
                  : "bg-white text-dark-purple border-2 border-gray-200 hover:border-royal-purple"
              }`}
            >
              Healing Balms
            </button>
            <button
              onClick={() => setSelectedCategory("Perfumes")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                selectedCategory === "Perfumes"
                  ? "bg-gradient-to-r from-royal-purple to-dark-purple text-white"
                  : "bg-white text-dark-purple border-2 border-gray-200 hover:border-royal-purple"
              }`}
            >
              Glory Perfumes
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-royal-purple/10 to-gold/10">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${product.image}')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold text-dark-purple px-4 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                      Blessed
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-royal-purple text-xs font-bold uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-dark-purple mb-4 group-hover:text-royal-purple transition-colors">
                    {product.name}
                  </h3>
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {product.purpose}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleWhatsAppOrder(product.name)}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-800"
                  >
                    <WhatsAppIcon size={20} />
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How to Order Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
                How to <span className="text-gold">Order</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Multiple convenient ways to place your order
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-gray-100 hover:border-green-500 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <WhatsAppIcon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-purple mb-3">WhatsApp Orders</h3>
                <p className="text-gray-600 mb-4">Fast and easy ordering via WhatsApp</p>
                <a 
                  href="https://wa.me/2347069609892"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-green-600 font-bold hover:text-green-700 transition-colors"
                >
                  +234 706 960 9892
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-gray-100 hover:border-royal-purple transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark-purple mb-3">Online Payments</h3>
                <p className="text-gray-600 mb-4">Secure payments via trusted platforms</p>
                <div className="space-y-2">
                  <p className="text-royal-purple font-semibold">Paystack</p>
                  <p className="text-royal-purple font-semibold">Flutterwave</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center border-2 border-gray-100 hover:border-gold transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mx-auto mb-6">
                  <EmailIcon size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-purple mb-3">Email Orders</h3>
                <p className="text-gray-600 mb-4">Send your order details via email</p>
                <a 
                  href="mailto:toyinjato@gmail.com"
                  className="inline-block text-gold font-bold hover:text-accent-gold transition-colors break-all"
                >
                  toyinjato@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-royal-purple to-dark-purple text-white rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
              <p className="text-xl text-gray-100 mb-8">
                Click the "Order on WhatsApp" button on any product or contact us directly
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/2347069609892"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <WhatsAppIcon size={24} />
                  WhatsApp Us Now
                </a>
                <a
                  href="mailto:toyinjato@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-accent-gold text-dark-purple px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <EmailIcon size={24} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
