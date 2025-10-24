import Container from "@/app/_components/container";
import Link from "next/link";
import Image from "next/image";
import { BookIcon, VideoIcon, EditIcon, LeafIcon, HeartIcon, GiftIcon, ArrowRightIcon, UsersIcon } from "@/app/_components/icons";
import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";
import dynamic from "next/dynamic";
import SermonCards from "@/app/_components/sermon-cards";

// Dynamically import heavy components to reduce initial bundle size
const TDGIProductsSection = dynamic(
  () => import("@/app/_components/tdgi-products-section").then(mod => ({ default: mod.TDGIProductsSection })),
  { ssr: true }
);

export default async function Index() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-purple/95 via-royal-purple/90 to-dark-purple/95">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/hero-image.jpg"
              alt="Hero Background"
              fill
              priority
              quality={75}
              sizes="100vw"
              className="object-cover object-[center_40%]"
            />
          </div>
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
                <Image
                  src="/images/prophetess-toyin.jpg"
                  alt="Prophetess Toyin Jato"
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
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
                  <p className="font-bold text-dark-purple text-lg">(Evang.) Prophetess Oluwatoyin Jato</p>
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
                <Image
                  src="/images/who-we-are.jpg"
                  alt="Who We Are"
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
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
          
          <SermonCards />
        </Container>
      </section>

      {/* TGDI Section */}
      <TDGIProductsSection />

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
                    <p className="font-semibold text-lg">Union Bank</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-400 text-sm mb-1">Account Name</p>
                    <p className="font-semibold text-lg">BELOVED New Beginning Ministries</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-400 text-sm mb-1">Account Number</p>
                    <p className="font-semibold text-lg">0236577830</p>
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {recentPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-royal-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-purple transition-all duration-300 shadow-lg"
            >
              View All Articles
              <ArrowRightIcon size={18} />
            </Link>
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
