import Container from "@/app/_components/container";
import Link from "next/link";
import { BookIcon, VideoIcon, EditIcon, LeafIcon, HeartIcon, GiftIcon, ArrowRightIcon, UsersIcon } from "@/app/_components/icons";

export default function Index() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-purple/95 via-royal-purple/90 to-dark-purple/95">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('/images/hero-image.jpg')",
              backgroundPosition: "center 40%"
            }}
          />
        </div>
        
        {/* Content */}
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              A Place Where <span className="text-gold">Faith</span> Comes Alive
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed max-w-3xl mx-auto">
              Join us as we worship, grow, and serve together in community
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/sermons"
                className="inline-flex items-center justify-center gap-3 bg-gold text-dark-purple px-8 py-4 rounded-lg font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <VideoIcon size={22} />
                Watch Sermons
              </Link>
              <Link
                href="/giving"
                className="inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-purple transition-all duration-300"
              >
                <GiftIcon size={22} />
                Give to Church
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/prophetess-toyin.jpg')"
                  }}
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Welcome</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
                A Message from Our Prophetess
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Welcome to our community of faith. Here, we believe in hope, healing, and the power of God's Word to transform lives.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're searching for answers, seeking a deeper relationship with Christ, or looking for a church family to call home, you are welcomed here with open arms.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-accent-gold flex items-center justify-center">
                  <HeartIcon size={28} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-dark-purple text-lg">Prophetess Toyin Jato</p>
                  <p className="text-gray-500 text-sm">Senior Prophetess</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block mb-4">
                <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
                Who We Are
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Beloved New Beginning Ministries is a vibrant community of believers committed to spreading the gospel, nurturing faith, and serving our community with excellence and love.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Founded on biblical principles and guided by the Holy Spirit, we strive to create an environment where every person can encounter God, grow in their faith, and discover their purpose.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-royal-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-purple transition-all duration-300 shadow-lg"
              >
                Learn More
                <ArrowRightIcon size={18} />
              </Link>
            </div>
            <div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/who-we-are.jpg')"
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sermons Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Messages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              Recent Sermons
            </h2>
            <p className="text-gray-600 text-lg">
              Watch our latest messages and be inspired by the Word of God
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Sermon Card 1 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-royal-purple to-dark-purple overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <VideoIcon size={32} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gold font-semibold mb-2 uppercase tracking-wider">October 6, 2025</div>
                <h3 className="text-xl font-bold text-dark-purple mb-3 leading-tight">
                  Walking in Purpose and Destiny
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Discover God's unique plan for your life and learn how to walk confidently in your divine purpose.
                </p>
                <Link
                  href="/sermons"
                  className="inline-flex items-center gap-2 text-royal-purple font-semibold text-sm hover:gap-3 transition-all"
                >
                  Watch Now
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>

            {/* Sermon Card 2 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-gold to-accent-gold overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <VideoIcon size={32} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gold font-semibold mb-2 uppercase tracking-wider">September 29, 2025</div>
                <h3 className="text-xl font-bold text-dark-purple mb-3 leading-tight">
                  The Power of Faith in Action
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Understanding how faith moves mountains and transforms impossible situations into divine opportunities.
                </p>
                <Link
                  href="/sermons"
                  className="inline-flex items-center gap-2 text-royal-purple font-semibold text-sm hover:gap-3 transition-all"
                >
                  Watch Now
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>

            {/* Sermon Card 3 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 bg-gradient-to-br from-light-purple to-royal-purple overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <VideoIcon size={32} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gold font-semibold mb-2 uppercase tracking-wider">September 22, 2025</div>
                <h3 className="text-xl font-bold text-dark-purple mb-3 leading-tight">
                  Living a Life of Worship
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Explore what it means to worship God not just in song, but through every aspect of your daily life.
                </p>
                <Link
                  href="/sermons"
                  className="inline-flex items-center gap-2 text-royal-purple font-semibold text-sm hover:gap-3 transition-all"
                >
                  Watch Now
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Natural Herbs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Wellness</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              Natural Herbs
            </h2>
            <p className="text-gray-600 text-lg">
              Premium herbal products for your health and wellness journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {/* Herb Product 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 bg-gradient-to-br from-green-50 to-green-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <LeafIcon size={64} className="text-green-600 opacity-30" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark-purple mb-2">
                  Immune Booster Tea
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Natural blend to strengthen your immune system
                </p>
              </div>
            </div>

            {/* Herb Product 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 bg-gradient-to-br from-amber-50 to-amber-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <LeafIcon size={64} className="text-amber-600 opacity-30" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark-purple mb-2">
                  Vitality Tonic
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Herbal formula for energy and vitality
                </p>
              </div>
            </div>

            {/* Herb Product 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <LeafIcon size={64} className="text-purple-600 opacity-30" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark-purple mb-2">
                  Calm & Balance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Soothing herbs for peace and relaxation
                </p>
              </div>
            </div>

            {/* Herb Product 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-56 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <LeafIcon size={64} className="text-blue-600 opacity-30" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark-purple mb-2">
                  Detox Blend
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cleansing formula for natural detoxification
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg"
            >
              Explore Products
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Giving Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-gold font-semibold text-sm uppercase tracking-wider">Partnership</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-6 leading-tight">
                  Support the Ministry
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Your generosity enables us to spread the gospel, support our community, and impact lives for the Kingdom of God.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Every gift, regardless of size, makes a significant difference in advancing God's work through our ministry.
                </p>
                <Link
                  href="/giving"
                  className="inline-flex items-center gap-2 bg-gold text-dark-purple px-8 py-4 rounded-lg font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg"
                >
                  <GiftIcon size={20} />
                  Give Now
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-royal-purple to-dark-purple rounded-2xl p-8 text-white shadow-2xl">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                    <GiftIcon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Bank Details</h3>
                  <p className="text-gray-300 text-sm">For direct transfers and donations</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-400 text-sm mb-1">Bank Name</p>
                    <p className="font-semibold text-lg">First National Bank</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-400 text-sm mb-1">Account Name</p>
                    <p className="font-semibold text-lg">Beloved New Beginning Ministries</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-400 text-sm mb-1">Account Number</p>
                    <p className="font-semibold text-lg">1234567890</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-400 text-sm mb-1">Routing Number</p>
                    <p className="font-semibold text-lg">987654321</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Blog / Articles Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="text-royal-purple font-semibold text-sm uppercase tracking-wider">Blog</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600 text-lg">
              Read inspiring stories and insights from our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600')"
                }}
              />
              <div className="p-6">
                <div className="text-xs text-gold font-semibold mb-2 uppercase tracking-wider">Faith & Life</div>
                <h3 className="text-xl font-bold text-dark-purple mb-3 leading-tight">
                  5 Ways to Deepen Your Prayer Life
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Practical steps to cultivate a more meaningful and powerful prayer experience with God.
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-royal-purple font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=600')"
                }}
              />
              <div className="p-6">
                <div className="text-xs text-gold font-semibold mb-2 uppercase tracking-wider">Community</div>
                <h3 className="text-xl font-bold text-dark-purple mb-3 leading-tight">
                  Building Authentic Relationships
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Discover the importance of genuine fellowship and community in your spiritual journey.
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-royal-purple font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600')"
                }}
              />
              <div className="p-6">
                <div className="text-xs text-gold font-semibold mb-2 uppercase tracking-wider">Growth</div>
                <h3 className="text-xl font-bold text-dark-purple mb-3 leading-tight">
                  Understanding God's Grace
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Explore the depths of God's unmerited favor and how it transforms every area of your life.
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-royal-purple font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact / Get in Touch Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Contact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-purple mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Have questions or want to connect? We'd love to hear from you
              </p>
            </div>
            
            <form className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-purple mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-purple mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-dark-purple mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-royal-purple to-dark-purple text-white py-4 rounded-lg font-semibold hover:from-dark-purple hover:to-royal-purple transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
