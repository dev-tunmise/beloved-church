import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-royal-purple to-dark-purple text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Church <span className="text-gold">Blog</span>
            </h1>
            <p className="text-xl text-gray-200">
              Updates, teachings, and messages from our community
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </section>
    </main>
  );
}
