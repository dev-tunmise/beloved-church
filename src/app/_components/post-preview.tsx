import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <Link href={`/posts/${slug}`}>
      <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full cursor-pointer">
        <div className="relative overflow-hidden h-64">
          <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-500">
            <CoverImage slug={undefined} title={title} src={coverImage} />
          </div>
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-purple/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <DateFormatter dateString={date} />
          </div>
          
          <h3 className="text-2xl font-bold mb-3 leading-tight text-dark-purple min-h-[4rem] group-hover:text-royal-purple transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-base leading-relaxed mb-4 text-gray-600 line-clamp-3 flex-grow">{excerpt}</p>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
            <Avatar name={author.name} picture={author.picture} />
            <div className="inline-flex items-center gap-1 text-royal-purple group-hover:text-gold font-semibold text-sm transition-colors duration-200">
              Read
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
