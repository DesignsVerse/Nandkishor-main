import Link from "next/link";
import Image from "next/image";
import { formatTitleForURL } from 'utils/slugify'; // Importing the function

const SingleBlog = ({ blog }) => {
  return (
    <div className="w-full p-4 rounded-2xl text-center transform transition-transform hover:scale-105 bg-gray-light">
      {/* Updated Link to use title-based dynamic routing */}
      <Link href={`/blog/${formatTitleForURL(blog.title)}`}>
        <div className="cursor-pointer">
          {blog.thumbnail && (
            <Image
              src={blog.thumbnail}
              width={800}
              height={450}
              alt={blog.title}
              className="rounded-lg object-cover"
            />
          )}
          <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {blog.publishDate} • {blog.readTime} min read
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SingleBlog;
