import Container from "@/app/_components/container";
import Link from "next/link";
import { 
  PrayerIcon, 
  BookIcon, 
  HeartIcon, 
  StarIcon, 
  UsersIcon, 
  GlobeIcon, 
  ChurchIcon,
  ArrowRightIcon 
} from "@/app/_components/icons";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-purple/95 via-royal-purple/90 to-dark-purple/95">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2070')",
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
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Story</span>
                <div className="h-px w-8 bg-gold"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              About <span className="text-gold">Beloved New Beginning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto animate-slide-up-delay">
              A community of believers walking in Royal Grace and Purity
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

      {/* About BNBM Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/beloved-full-logo.jpg"
                    alt="Beloved New Beginning Ministries"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-dark-purple/30 to-transparent"></div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold/10 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-royal-purple/10 rounded-2xl -z-10"></div>
              </div>

              {/* Right - Text */}
              <div>
                <div className="inline-block mb-4">
                  <span className="text-gold font-semibold text-sm uppercase tracking-wider">Who We Are</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
                  About <span className="text-gold">Beloved New Beginning Ministries</span>
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <strong className="text-royal-purple">Beloved New Beginning Ministries (BNBM)</strong> is a Spirit-filled, 
                    Christ-centered ministry dedicated to spreading the gospel of Jesus Christ and transforming lives 
                    through the power of God's Word.
                  </p>
                  <p>
                    Founded under the prophetic leadership of <strong className="text-dark-purple">Prophetess Toyin Jato</strong>, 
                    our ministry is a beacon of hope, healing, and restoration for believers seeking to walk in their divine 
                    purpose and experience God's supernatural breakthrough.
                  </p>
                  <p>
                    We are committed to raising a generation of believers who walk in <strong className="text-gold">Royal Grace and Purity</strong>, 
                    equipped with the knowledge of God's Word and empowered by the Holy Spirit to fulfill their God-given destiny.
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-royal-purple to-dark-purple"></div>
              <div className="relative p-10 text-white">
                <div className="w-16 h-16 bg-gold/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GlobeIcon size={32} className="text-gold" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gold">Our Vision</h2>
                <p className="text-lg leading-relaxed text-gray-100">
                  To be a beacon of God's love, spreading the gospel of Jesus Christ to all nations,
                  and raising a generation of believers who walk in righteousness, power, and divine purpose.
                  We envision a church where every member is equipped to fulfill their God-given destiny.
                </p>
              </div>
            </div>
            
            {/* Mission Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-accent-gold"></div>
              <div className="relative p-10 text-dark-purple">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ChurchIcon size={32} className="text-dark-purple" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                  To worship God in spirit and in truth, disciple believers to spiritual maturity,
                  evangelize the lost, and serve our community with compassion and excellence.
                  We are committed to transforming lives through the power of God's Word and the Holy Spirit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Prophetess Toyin Section - Flowing Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-purple/5 rounded-full blur-3xl"></div>
        
        <Container>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text */}
              <div className="lg:pr-8">
                <div className="inline-block mb-4">
                  <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">Our Leader</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
                  Prophetess <span className="text-gold">Toyin Jato</span>
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <strong className="text-royal-purple">Prophetess Toyin Jato</strong> is a woman of God with a powerful 
                    prophetic calling and an unwavering passion for souls. She is the founder and Senior Prophetess of 
                    <strong className="text-dark-purple"> Beloved New Beginning Ministries</strong>.
                  </p>
                  <p>
                    With a heart ablaze for God's presence and a deep burden for the lost, she operates in the prophetic 
                    with remarkable accuracy, bringing forth timely words of direction, comfort, and breakthrough to believers 
                    across nations.
                  </p>
                  <p>
                    Her ministry is characterized by powerful worship, supernatural healings, deliverance from demonic 
                    oppression, and life-changing testimonies. Through her leadership, countless individuals have experienced 
                    divine restoration, financial breakthroughs, marital restoration, and freedom from generational curses.
                  </p>
                  <p>
                    Prophetess Toyin also founded <strong className="text-gold">TDGI Enterprise</strong> and 
                    <strong className="text-royal-purple"> Toyin Jato Foundation International</strong>, extending her 
                    ministry's impact through faith-based products and humanitarian outreach programs.
                  </p>
                </div>

                {/* Ministry Highlights */}
              </div>

              {/* Right - Image with flowing design */}
              <div className="relative lg:pl-8">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/prophetess-toyin.jpg"
                      alt="Prophetess Toyin Jato"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Quote Card */}
                    <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                      <p className="text-royal-purple font-semibold italic text-sm leading-relaxed">
                        "I am called to raise a generation that walks in Royal Grace and Purity, 
                        empowered by the Holy Spirit to fulfill their divine destiny."
                      </p>
                      <p className="text-gold font-bold mt-2 text-sm">- Prophetess Toyin Jato</p>
                    </div>
                  </div>
                  
                  {/* Decorative flowing elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-gold to-accent-gold rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-royal-purple to-dark-purple rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              These principles guide everything we do as a church community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Prayer Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PrayerIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">Prayer</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of prayer and seek God's guidance in all we do. Prayer is the foundation of our ministry.
              </p>
            </div>
            
            {/* The Word Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">The Word</h3>
              <p className="text-gray-600 leading-relaxed">
                The Bible is our foundation and guide for life and ministry. We stand firmly on God's unchanging Word.
              </p>
            </div>
            
            {/* Love Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">Love</h3>
              <p className="text-gray-600 leading-relaxed">
                We demonstrate God's love through our actions and service to others, showing Christ's compassion to all.
              </p>
            </div>
            
            {/* Excellence Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <StarIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in everything, honoring God with our best and highest standards.
              </p>
            </div>
            
            {/* Community Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-purple to-dark-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UsersIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We foster authentic relationships and support one another in love, creating a family atmosphere.
              </p>
            </div>
            
            {/* Mission/Outreach Value */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GlobeIcon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-3">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We are passionate about reaching the world with the Gospel of Christ and making disciples of all nations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Meet Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              Our Leadership
            </h2>
            <p className="text-gray-600 text-lg">
              Dedicated servants committed to leading with integrity and compassion
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Prophetess */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-royal-purple to-dark-purple">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400')"
                    }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-1">Prophetess Toyin Jato</h3>
              <p className="text-gold font-semibold mb-3">Senior Prophetess & Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Leading with prophetic vision and passion, guiding the church with wisdom and love.
              </p>
            </div>
            
            {/* Pastor/Leader 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-gold to-accent-gold">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400')"
                    }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-1">Pastor Emmanuel</h3>
              <p className="text-gold font-semibold mb-3">Associate Pastor</p>
              <p className="text-gray-600 leading-relaxed">
                Dedicated to discipleship and spiritual growth, nurturing believers in their faith journey.
              </p>
            </div>
            
            {/* Leader 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-royal-purple to-dark-purple">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400')"
                    }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-dark-purple mb-1">Minister Grace</h3>
              <p className="text-gold font-semibold mb-3">Worship Leader</p>
              <p className="text-gray-600 leading-relaxed">
                Leading worship with passion and excellence, ushering in God's presence through praise.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block mb-4">
                <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">Our Faith</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
                What We Believe
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-purple mb-2">The Holy Trinity</h3>
                    <p className="text-gray-600">One God existing in three persons: Father, Son, and Holy Spirit.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-purple mb-2">The Bible</h3>
                    <p className="text-gray-600">The inspired, infallible Word of God and our ultimate authority.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-purple mb-2">Salvation Through Christ</h3>
                    <p className="text-gray-600">Salvation is by grace through faith in Jesus Christ alone.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-purple mb-2">The Power of the Holy Spirit</h3>
                    <p className="text-gray-600">We believe in the baptism and gifts of the Holy Spirit for believers today.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1000')"
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-royal-purple to-dark-purple text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-gold">Church Family</span>
            </h2>
            <p className="text-xl text-gray-100 mb-10 leading-relaxed">
              Whether you're new to faith or looking for a church home, we'd love to welcome you.
              Experience authentic worship, solid biblical teaching, and a community that cares.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-dark-purple px-8 py-4 rounded-lg font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
                <ArrowRightIcon size={18} />
              </Link>
              <Link
                href="/sermons"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-purple transition-all duration-300"
              >
                Watch Sermons
                <ArrowRightIcon size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
