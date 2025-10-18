import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <Link href={`/posts/${slug}`}>
      <article className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 grid md:grid-cols-2 gap-0 max-w-6xl mx-auto">
        {/* Image Section - Left Side */}
        <div className="relative h-64 md:h-full min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-500">
            <CoverImage title={title} src={coverImage} slug={slug} />
          </div>
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Content Section - Right Side */}
        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <DateFormatter dateString={date} />
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-dark-purple group-hover:text-royal-purple transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-base lg:text-lg leading-relaxed mb-6 text-gray-600 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <Avatar name={author.name} picture={author.picture} />
            <div className="inline-flex items-center gap-2 text-royal-purple group-hover:text-gold font-semibold transition-colors duration-200">
              Read Article
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
