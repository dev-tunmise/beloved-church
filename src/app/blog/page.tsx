import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { BlogHero, BlogStats, BlogCTA } from "./blog-client";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <BlogHero />

      {/* Featured Post */}
      {heroPost && (
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          </Container>
        </section>
      )}

      {/* Blog Stats/Info Section */}
      <BlogStats />

      {/* Recent Blog Posts */}
      {morePosts.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <MoreStories posts={morePosts} />
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <BlogCTA />
    </main>
  );
}
