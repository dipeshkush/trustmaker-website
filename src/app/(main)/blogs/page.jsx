import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/home/CTA';
import { blogPosts } from '@/app/data/blogPosts';


export default function Blogs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen md:h-[60vh] overflow-hidden mb-12">
        {/* Background Image */}
        <Image
          src="/blogsimg.webp"   
          alt="Trustmaker Blogs"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center mt-5">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight relative inline-block text-center mx-auto">
            <span className="text-[#D97A9F]">Trustmaker</span> Blogs
          </h1>
         <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Expert insights, up-to-date market trends, and practical guidance from Indore’s trusted real estate professionals—empowering you to make smarter, well-informed property decisions with confidence.
        </p>

        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="w-full mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{post.date}</p>
                    <p className="text-sm opacity-90">{post.readTime}</p>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${post.id}`}
                    className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition"
                  >
                    Read More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}