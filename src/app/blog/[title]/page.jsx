import { notFound } from "next/navigation";
import blogData from "@/components/Blog/blogData"; 
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { formatTitleForURL } from "/utils/slugify";

export async function generateMetadata({ params }) {
  const decodedTitle = decodeURIComponent(params.title); // Fix URL encoding issues
  console.log("Incoming Slug from URL:", params.title);
  console.log("Decoded Slug:", decodedTitle);

  const post = blogData.find((post) => formatTitleForURL(post.title) === decodedTitle);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.sections[0]?.content.slice(0, 150) || "Read more about this topic.",
  };
}

export default function BlogPost({ params }) {
  const decodedTitle = decodeURIComponent(params.title);
  console.log("Rendering Post for Slug:", decodedTitle);

  const post = blogData.find((post) => formatTitleForURL(post.title) === decodedTitle);

  if (!post) {
    console.log("Post not found:", decodedTitle);
    return notFound();
  }

  return (
    <main className="mt-20 w-full min-h-screen flex flex-col items-center pt-24 px-6 md:px-10 lg:px-20 bg-white dark:bg-[#121723] text-black dark:text-white transition-colors duration-300">
      {/* Blog Header */}
      <div className="w-full mb-10 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Published on {post.publishDate} • {post.readTime} min read
        </p>
      </div>

      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="w-full flex justify-center">
          <Image src={post.thumbnail} width={800} height={450} alt={post.title} className="rounded-lg object-cover" />
        </div>
      )}

      {/* Blog Content */}
      <div className="w-full max-w-3xl mt-10">
        {post.sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            <ReactMarkdown className="text-lg text-justify leading-relaxed">{section.content}</ReactMarkdown>
          </div>
        ))}
      </div>
    </main>
  );
}
