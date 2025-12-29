import Link from 'next/link';

export default function VisionMission() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-10 leading-tight">
            Our Vision & Mission
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-100 leading-relaxed">
            The guiding principles that drive Trustmaker Infrareal Pvt. Ltd. to deliver excellence in real estate services in Indore
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              To become one of the most respected real estate companies in Indore by fulfilling every promise made to our clients with the highest level of integrity, honesty, and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              To provide the most professional, informative, dedicated, and prompt real estate services in Indore through discipline, hard work, complete transparency, and building lasting trust with our clients.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-8">
              At Trustmaker Infrareal Pvt. Ltd., we are committed to simplifying property decisions, offering verified listings, personalized guidance, and end-to-end support – all while ensuring a hassle-free experience for buyers, sellers, and investors in Indore.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}