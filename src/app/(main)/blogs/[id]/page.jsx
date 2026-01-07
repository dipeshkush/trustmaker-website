"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import CTA from '@/components/home/CTA';
import { blogPosts } from '@/app/data/blogPosts';
import { useParams } from 'next/navigation';

export default function BlogDetailPage() {
  const params = useParams();
  const postId = params.id;
  const post = blogPosts.find(p => p.id.toString() === postId);

  if (!post) {
    return (
      <div className="py-32 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Blog Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link href="/blogs" className="inline-block bg-[#D97A9F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c05d82] transition">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-0 p-8 md:p-16 text-white max-w-5xl mx-auto w-full left-0 right-0">
          <span className="bg-[#D97A9F] px-4 py-2 rounded-full text-sm mb-6 inline-block">Real Estate Trends</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap gap-6 text-lg">
            <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /> {post.date}</div>
            <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> {post.readTime}</div>
            <div className="flex items-center gap-2"><User className="w-5 h-5" /> Trustmaker Research Team</div>
          </div>
        </div>
      </section>

     {/* Article Content */}
      <article className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

            {/* Excerpt */}
            <p className="text-xl md:text-2xl font-medium text-gray-800 italic border-l-4 border-[#D97A9F] pl-6">
              {post.excerpt}
            </p>

            {/* Intro */}
            <p>
              As of January 2026, Indore stands out as India's premier Tier-2 real estate
              destination, driven by robust infrastructure, IT growth, and sustained demand.
              Recent guideline rate hikes averaging 26% (up to 190% in hotspots) reflect strong
              long-term appreciation.
            </p>

            {/* Market Drivers */}
            <h2 className="text-3xl font-bold text-gray-900">
              Key Market Drivers in 2026
            </h2>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>
                <strong>Indore Metro Progress:</strong> Priority corridors operational, with
                rapid advancement of the full metro network improving city-wide connectivity.
              </li>
              <li>
                <strong>IT Sector Expansion:</strong> TCS and Infosys campuses fully active,
                attracting professionals and driving demand for premium and rental housing.
              </li>
              <li>
                <strong>Infrastructure Boom:</strong> Ring road expansion, national highways,
                and Smart City projects significantly enhancing livability.
              </li>
              <li>
                <strong>NRI & Investor Influx:</strong> Transparent regulations and stable
                pricing trends continue to attract domestic and overseas investors.
              </li>
            </ul>

            {/* Hotspots */}
            <h2 className="text-3xl font-bold text-gray-900">
              Top Investment Hotspots
            </h2>
            <div className="grid md:grid-cols-2 gap-8 my-12 not-prose">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold mb-3">
                  Super Corridor & Nipania
                </h3>
                <p>
                  Luxury townships near IT hubs with strong infrastructure support •
                  <strong> 12–18% expected annual appreciation</strong>
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold mb-3">
                  Vijay Nagar & AB Bypass
                </h3>
                <p>
                  Premium, well-established areas witnessing continuous residential and
                  commercial expansion.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold mb-3">
                  Rau & Bicholi Mardana
                </h3>
                <p>
                  High-growth emerging zones with some of the highest recent guideline rate
                  hikes (up to 89%).
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold mb-3">
                  Dewas Naka
                </h3>
                <p>
                  Established commercial and industrial belt offering
                  <strong> 6–8% rental yields</strong>.
                </p>
              </div>
            </div>

            {/* Residential vs Commercial */}
            <h2 className="text-3xl font-bold text-gray-900">
              Residential vs Commercial Investment Outlook
            </h2>
            <p>
              Indore offers balanced opportunities across both residential and commercial
              segments. Residential properties remain ideal for capital appreciation and
              end-use demand, while commercial spaces provide stable rental income and long-term
              portfolio diversification.
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>
                <strong>Residential:</strong> Strong demand from IT professionals, students,
                and families seeking affordable premium living.
              </li>
              <li>
                <strong>Commercial:</strong> Growing absorption of office spaces, retail
                complexes, and mixed-use developments.
              </li>
            </ul>

            {/* Price Trends */}
            <h2 className="text-3xl font-bold text-gray-900">
              Price Trends & Growth Potential
            </h2>
            <p>
              Unlike saturated metro cities, Indore remains in a healthy growth phase.
              Infrastructure-led development and employment generation are expected to drive
              steady appreciation over the next five years.
            </p>
            <ul className="list-disc pl-8 space-y-3 text-lg">
              <li>8–12% projected annual residential price growth</li>
              <li>6–9% rental yield growth in commercial micro-markets</li>
              <li>Higher upside in metro and highway-connected zones</li>
            </ul>

            {/* Investment Guidance */}
            <h2 className="text-3xl font-bold text-gray-900">
              Investment Guidance
            </h2>
            <ol className="list-decimal pl-8 space-y-3 text-lg">
              <li>Choose only RERA-approved projects (mandatory in Madhya Pradesh)</li>
              <li>Prioritize infrastructure-linked and metro-adjacent areas</li>
              <li>Diversify investments between residential and commercial assets</li>
              <li>Conduct thorough legal and title verification</li>
            </ol>

            {/* Conclusion */}
            <p className="text-xl font-medium mt-12">
              Indore’s real estate market in 2026 offers a rare combination of stability,
              affordability, and strong growth potential—making it an ideal destination for
              first-time buyers and seasoned investors alike.
            </p>

          </div>
        </div>
      </article>


      {/* Visual Gallery - 2026 Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Indore Real Estate in 2026</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Luxury townships on Super Corridor, premium residences in Vijay Nagar/AB Bypass, metro progress, TCS/Infosys campuses, and emerging hotspots.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="py-8 bg-gray-50">
        <div className="w-full mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative pb-5 text-center">
            Related <span className="text-[#9C2F5A]">Articles</span>
            <span className="absolute left-1/2 bottom-0 w-24 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center mb-10">
  Explore more insights, market trends, and expert perspectives on real estate, investment,
  and urban development to help you make informed property decisions.
</p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {blogPosts
            .filter(p => p.id.toString() !== postId)
            .slice(0, 3).map(related => (
              <article key={related.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="relative h-56">
                  <Image src={related.image} alt={related.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{related.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{related.excerpt}</p>
                  <Link href={`/blogs/${related.id}`} className="text-[#D97A9F] font-semibold hover:underline">
                    Read More →
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