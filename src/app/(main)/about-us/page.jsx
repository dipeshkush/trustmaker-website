import CTA from '@/components/home/CTA';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-8">
            About  <span className="text-[#D97A9F]">Trustmaker </span>
            Infrareal Pvt. Ltd.
          </h1>
          <p className="text-xl max-w-5xl mx-auto leading-relaxed text-gray-100">
            Established with visionary leadership, Trustmaker Infrareal Pvt. Ltd. brings 23+ years of experience in real estate, helping over 3,000 youth achieve their dreams of owning a home, vehicle, and more. We are Indore's most reliable real estate services company.
          </p>
        </div>
      </section>

      {/* Alternating Content + Image Sections */}
      <section className="py-12 bg-gray-50">
        <div className="w-full mx-auto px-6">
          {/* First Block: Left Text – Right Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Our Story & Commitment
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Trustmaker Infrareal, we don't just see property ownership as an investment; we view it as the realization of a dream. Our commitment lies in simplifying and streamlining the process, ensuring that finding your dream property is not only achievable but a hassle-free journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a successful track record and a team driven by discipline, hard work, and honesty, we have earned the trust of thousands in Indore.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-1.webp" 
                alt="Premium Residential Projects in Indore"
                width={600}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Second Block: Left Image – Right Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-2.webp"  
                alt="Commercial Properties by Trustmaker Infrareal"
                width={600}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">
                Vision, Goal & Strength
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Our Vision:</strong> To become one of the most respected real estate companies in Indore by fulfilling promises with the highest integrity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Our Goal:</strong> To provide the most professional, informative, dedicated, and prompt service with discipline, hard work, honesty, and complete client trust.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold text-teal-600">
                Our Strength: 200+ Associate Experience in Real Estate Industry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Clean List */}
      <section className="py-16 bg-white">
        <div className="w-full mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why Choose Trustmaker Infrareal?
          </h2>

          {/* Main Reasons List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              {/* First Column */}
              <ul className="space-y-8 text-lg max-w-md mx-auto">
                <li className="flex items-start gap-4 justify-center md:justify-start">
                  <span className="text-3xl text-teal-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-center md:text-left">Expert Guidance for Every Step</span>
                </li>
                <li className="flex items-start gap-4 justify-center md:justify-start">
                  <span className="text-3xl text-teal-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-center md:text-left">Diverse Property Options (Residential, Commercial, Industrial)</span>
                </li>
                <li className="flex items-start gap-4 justify-center md:justify-start">
                  <span className="text-3xl text-teal-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-center md:text-left">Exceptional Customer Service</span>
                </li>
              </ul>

              {/* Second Column */}
              <ul className="space-y-8 text-lg max-w-md mx-auto">
                <li className="flex items-start gap-4 justify-center md:justify-start">
                  <span className="text-3xl text-teal-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-center md:text-left">Fast and Easy Property Search</span>
                </li>
                <li className="flex items-start gap-4 justify-center md:justify-start">
                  <span className="text-3xl text-teal-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-center md:text-left">Personalized Approach</span>
                </li>
                <li className="flex items-start gap-4 justify-center md:justify-start">
                  <span className="text-3xl text-teal-600 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-center md:text-left">Transparency and Integrity in Every Deal</span>
                </li>
              </ul>
            </div>

          {/* Our Strength - Highlighted Block */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-12 ">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Strength
            </h3>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
              Trustmaker Infrareal stands as a testament to success, having worked with <span className="font-bold text-teal-600">200+ Associates</span> with extensive experience in the Real Estate industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Personalized Approach
                </h4>
                <p className="text-gray-600">
                  We understand that every property seeker is unique. Our approach is personalized to your specific requirements, ensuring a tailor-made experience.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Transparency and Integrity
                </h4>
                <p className="text-gray-600">
                  Trust is the cornerstone of our operations. We believe in transparency and integrity, providing you with the information you need to make informed decisions.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Building Dreams Together
                </h4>
                <p className="text-gray-600">
                  More than just a property transaction, Trustmaker Infrareal is about building dreams. We take pride in being a part of your journey toward property ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <CTA />
      
    </>
  );
}