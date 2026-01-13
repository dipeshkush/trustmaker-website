import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen md:h-[60vh] overflow-hidden">
        <Image
          src="/about.webp"
          alt="About Trustmaker Infrareal"
          fill
          className="object-cover object-center "
          priority
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center mt-5">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight relative inline-block text-center">
              About <span className="text-[#D97A9F]">Trustmaker </span>Infrareal
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              At Trustmaker Infrareal, we are more than just a real estate service — we are your trusted partner in one of life's biggest decisions. 
              Founded with a simple yet powerful vision: to bring honesty, transparency, and genuine care back to property buying in Indore.
            </p>
          </div>
        </div>
      </div>

      {/* Alternating Content + Image Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* First Block: Text Left – Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block pb-5 text-center mx-auto">
                Our Story & <span className="text-[#9C2F5A]">Commitment</span>
                <span className="absolute left-1/2 bottom-0 w-32 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
              </h2>

              <div className="space-y-5 text-lg text-gray-700 leading-relaxed max-w-xl">
                <p>
                  At Trustmaker Infrareal, property is more than land or buildings — it is the
                  foundation of dreams, long-term security, and personal growth.
                </p>

                <p>
                  Since our inception, we have been dedicated to simplifying the real estate
                  journey for buyers, investors, and families through disciplined processes,
                  honest communication, and expert market guidance.
                </p>

                <p>
                  Every interaction is driven by transparency and responsibility, ensuring our
                  clients feel confident, informed, and supported at every step of the process.
                </p>

                <p className="font-medium text-gray-800">
                  This unwavering commitment has earned us the trust of thousands of satisfied
                  clients across Indore.
                </p>
              </div>

            </div>

            {/* Smaller Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/about-1.webp"
                alt="Premium Residential Projects in Indore"
                width={550}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>

          {/* Second Block: Image Left – Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Smaller Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/about-2.webp"
                alt="Commercial Properties by Trustmaker Infrareal"
                width={550}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 relative inline-block pb-5 text-center mx-auto">
                Vision, Goal & <span className="text-[#9C2F5A]">Strength</span>
                <span className="absolute left-1/2 bottom-0 w-32 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-teal-600">Our Vision:</span> To emerge as one of Indore’s most respected real estate organizations by consistently delivering on our promises with integrity and professionalism.
                </p>
                <p>
                  <span className="font-bold text-teal-600">Our Goal:</span> To provide transparent, timely, and personalized real estate solutions backed by discipline, hard work, and complete client trust.
                </p>
                <p className="text-xl font-bold text-teal-600">
                  Our Strength: A network of <span className="text-[#9C2F5A]">200+ experienced associates</span> driving excellence across the real estate industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-6  bg-white">
        <div className="w-full mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          <span className="relative inline-block pb-5">
            Why Choose <span className="text-[#9C2F5A]">Trustmaker</span> Infrareal?
            <span className="absolute left-1/2 bottom-0 w-36 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
          </span>
        </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {/* Card 1: Expert Guidance */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 mx-auto bg-teal-50 rounded-full">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Expert Guidance</h3>
              <p className="text-gray-600 px-4">Personalized support at every step of your property journey</p>
            </div>

            {/* Card 2: Zero Hidden Costs */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 mx-auto bg-teal-50 rounded-full">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Zero Hidden Costs</h3>
              <p className="text-gray-600 px-4">Completely free for buyers — no brokerage or surprise fees</p>
            </div>

            {/* Card 3: Verified Properties */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 mx-auto bg-teal-50 rounded-full">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Verified Properties</h3>
              <p className="text-gray-600 px-4">100% authentic projects personally checked by our team</p>
            </div>
          </div>

          {/* Our Strength */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-12 lg:p-16 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Our Greatest Strength
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A powerful network of <span className="font-bold text-[#9C2F5A]">200+ experienced associates</span> working together to deliver excellence in every real estate transaction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}