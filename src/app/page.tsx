import Container from "@/app/_components/container";
import Link from "next/link";
import { ArrowRightIcon } from "@/app/_components/icons";
import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";
import dynamic from "next/dynamic";
import SermonCards from "@/app/_components/sermon-cards";
import { 
  HeroSection, 
  WelcomeSection, 
  AboutSection,
  DeliveranceSection,
  SermonsSection, 
  GivingSection,
  BlogSection,
  ContactSection 
} from "@/app/_components/home-sections";
import { getTranslations } from 'next-intl/server';

// Dynamically import heavy components to reduce initial bundle size
const TDGIProductsSection = dynamic(
  () => import("@/app/_components/tdgi-products-section").then(mod => ({ default: mod.TDGIProductsSection })),
  { ssr: true }
);

export default async function Index() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);
  const t = await getTranslations('home.blog');
  const tSermons = await getTranslations('home.sermons');
  
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Deliverance & Healing Section */}
      <DeliveranceSection />

      {/* Sermons Section */}
      <section className="py-20 bg-white">
        <Container>
          <SermonsSection />
          <SermonCards />
          <div className="text-center mt-12">
            <Link
              href="/sermons"
              className="inline-flex items-center gap-2 bg-royal-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-purple transition-all duration-300 shadow-lg"
            >
              {tSermons('viewAll')}
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </Container>
      </section>

      {/* TGDI Section */}
      <TDGIProductsSection />

      {/* Giving Section */}
      <GivingSection />

      {/* Blog / Articles Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <BlogSection />
          
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
              {t('viewAll')}
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </Container>
      </section>
      
    </main>
  );
}
