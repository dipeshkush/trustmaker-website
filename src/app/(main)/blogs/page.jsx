import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/home/CTA';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Localities to Invest in Indore in 2025",
    excerpt: "Discover the most promising residential and commercial areas in Indore for high returns and growth potential.",
    date: "December 15, 2025",
    readTime: "5 min read",
    image: "https://destinationcompress.s3.ap-south-1.amazonaws.com/a48d69f2-eedc-430e-ba1a-ece36d2eb633.jpg"  
  },
  {
    id: 2,
    title: "RERA Guidelines: What Every Property Buyer Should Know",
    excerpt: "Complete guide to RERA rules in Madhya Pradesh – protect your investment and know your rights.",
    date: "December 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  
  },
  {
    id: 3,
    title: "How to Choose the Right Property in Indore: Complete Checklist",
    excerpt: "Location, builder reputation, legal verification, amenities – everything you need to check before buying.",
    date: "December 5, 2025",
    readTime: "8 min read",
    image: "https://imgcdn.houssed.com/assets/Files/Blog/2025/6/Indore-property-price-trends-2025-1749444016.webp"  
  },
  {
    id: 4,
    title: "Indore Real Estate Market Trends 2025",
    excerpt: "Latest price trends, new launches, and investment opportunities in Indore's growing property market.",
    date: "November 28, 2025",
    readTime: "6 min read",
    image: "https://dyimg1.realestateindia.com/prop_images/1707194/882143_3-350x350.jpg" 
  },
  {
    id: 5,
    title: "Home Loan Guide for First-Time Buyers in Indore",
    excerpt: "Best banks, interest rates, eligibility, documents required, and tips to get quick approval.",
    date: "November 20, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  
  },
  {
    id: 6,
    title: "Commercial Property Investment in Indore: Opportunities & Risks",
    excerpt: "Best locations for shops, offices, and showrooms. Rental yields and growth potential analysis.",
    date: "November 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"  
  }
];

export default function Blogs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 w-full mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-8">
            Trustmaker <span className='text-[#D97A9F]'>Blogs</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-100">
            Latest insights, guides, and market updates from Indore's trusted real estate experts
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