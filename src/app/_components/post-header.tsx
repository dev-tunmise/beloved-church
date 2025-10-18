import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <div className="mb-8 text-center">
        <PostTitle>{title}</PostTitle>
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
      
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
}
