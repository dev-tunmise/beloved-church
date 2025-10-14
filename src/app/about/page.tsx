import Container from "@/app/_components/container";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-purple to-dark-purple text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-gold">Beloved New Beginning Ministries</span>
            </h1>
            <p className="text-xl text-gray-200">
              A community of believers walking in Royal Grace and Purity
            </p>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-royal-purple text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-gold">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be a beacon of God's love, spreading the gospel of Jesus Christ to all nations,
                and raising a generation of believers who walk in righteousness, power, and divine purpose.
                We envision a church where every member is equipped to fulfill their God-given destiny.
              </p>
            </div>
            
            <div className="bg-gold text-royal-purple p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To worship God in spirit and in truth, disciple believers to spiritual maturity,
                evangelize the lost, and serve our community with compassion and excellence.
                We are committed to transforming lives through the power of God's Word and the Holy Spirit.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-center text-royal-purple mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-royal-purple text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🙏
              </div>
              <h3 className="text-xl font-bold text-royal-purple mb-3">Prayer</h3>
              <p className="text-gray-600">
                We believe in the power of prayer and seek God's guidance in all we do.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                📖
              </div>
              <h3 className="text-xl font-bold text-royal-purple mb-3">The Word</h3>
              <p className="text-gray-600">
                The Bible is our foundation and guide for life and ministry.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-royal-purple text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                ❤️
              </div>
              <h3 className="text-xl font-bold text-royal-purple mb-3">Love</h3>
              <p className="text-gray-600">
                We demonstrate God's love through our actions and service to others.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-royal-purple mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything, honoring God with our best.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-royal-purple text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🤝
              </div>
              <h3 className="text-xl font-bold text-royal-purple mb-3">Community</h3>
              <p className="text-gray-600">
                We foster authentic relationships and support one another in love.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🌍
              </div>
              <h3 className="text-xl font-bold text-royal-purple mb-3">Mission</h3>
              <p className="text-gray-600">
                We are passionate about reaching the world with the Gospel of Christ.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-4xl font-bold text-center text-royal-purple mb-12">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-royal-purple">Pastor John Doe</h3>
              <p className="text-gold font-semibold mb-2">Senior Pastor</p>
              <p className="text-gray-600 text-sm">
                Leading with vision and passion for over 15 years.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-royal-purple">Pastor Jane Smith</h3>
              <p className="text-gold font-semibold mb-2">Associate Pastor</p>
              <p className="text-gray-600 text-sm">
                Dedicated to nurturing and discipling believers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-royal-purple">Elder Michael Brown</h3>
              <p className="text-gold font-semibold mb-2">Youth Pastor</p>
              <p className="text-gray-600 text-sm">
                Empowering the next generation for Christ.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-royal-purple mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-4">
                Beloved New Beginning Ministries was founded in [Year] with a heart to see lives transformed by the power of God.
                What began as a small gathering in a living room has grown into a thriving community of believers
                from diverse backgrounds, united in our love for Christ.
              </p>
              <p className="mb-4">
                Over the years, we've witnessed countless miracles, healings, and breakthroughs. Our church has
                become a place where the broken find healing, the lost find hope, and believers grow in their faith.
                We are committed to maintaining the atmosphere of God's presence where lives are continually changed.
              </p>
              <p>
                Today, we continue to pursue God's vision for our church—reaching the nations, building strong families,
                and raising up leaders who will impact their generation for Christ. We invite you to be part of this
                incredible journey.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
