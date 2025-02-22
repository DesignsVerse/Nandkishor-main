import Image from "next/image";
import { notFound } from "next/navigation";
import data from "@/data/servicedata.json";
import Link from "next/link";

// Fetch metadata for SEO
export async function generateMetadata({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) return { title: "Service Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ServicePost({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) {
    return notFound();
  }

  return (
    <main className="mt-[140px] max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Main Content */}
        <section className="w-full lg:w-2/3 border p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-left">{post.title}</h1>
          <p className="text-gray-500 pl-1 text-left">{post.author}</p>

          {/* Image Section instead of Video */}
          {post.image && (
            <div className="relative mt-6 w-full rounded-lg overflow-hidden">
              <Image 
                src={post.image} 
                alt="image" 
                width={800}  // ✅ Added proper width
                height={400} // ✅ Added proper height
                className="w-full h-[400px] object-cover rounded-lg"
                unoptimized // ✅ Optional for local images
              />
            </div>
          )}

          {/* Service Description */}
          <article className="prose lg:prose-xl justify-text text-left mt-6">
            <div className="text-justify" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          
        </section>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 p-5 pt-24 rounded-lg shadow-md order-2 lg:order-none">
          
          {/* All Services */}
          <h2 className="text-xl font-semibold mb-4">All Services</h2>
          <ul className="space-y-2">
            {data.map((service) => (
              <li key={service.id} className="border p-2 rounded hover:bg-gray-200 cursor-pointer transition-colors">
                <Link href={`/services/${service.id}`} className="flex justify-between items-center">
                  {service.title}
                  <span className="text-blue-500">→</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="p-4 bg-gradient-to-r from-[#c0392b] to-[#e67e22] text-white rounded-lg mt-6">
            <h3 className="text-lg font-semibold text-black">कोई भी प्रश्न है?</h3>
            <p className="mt-3 text-sm text-white">
              बेझिझक हमसे संपर्क करें। हम जितनी जल्दी हो सकेगा आप को वापस संपर्क करेंगे।
              या अभी हमें फोन करें।
            </p>

            <div className="mt-4">
              <p className="text-sm text-white">कॉल करें: <span className="text-black">+(91) 9752165718</span></p>
              
              {/* Call Button */}
              <a href="tel:+919752165718" className="mt-3 inline-block bg-[#121725] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
                📞 अभी कॉल करें
              </a>
            </div>
          </div>


        </aside>
      </div>
    </main>
  );
}
