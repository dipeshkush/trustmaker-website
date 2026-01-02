import Image from 'next/image';
import Link from 'next/link';
import Contact from '@/components/home/Contact';

export default function ContactUsPage() {
  return (
    <>
      <section className="relative h-96 md:h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80"
          alt="Contact Trustmaker Infrareal - Indore Real Estate"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
              Talk to <span className="text-[#D97A9F]">Trustmaker</span> Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We're here to help you find your dream home in Indore. Reach out today — your perfect property is just a message away.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="2 bg-gray-50">
        <Contact />
      </section>

      {/* Google Map Section */}
      <section className="py-12 bg-white">
        <div className="w-full mx-auto px-6 lg:px-8">
          <h2 className="text-3xl text-center text-gray-900 mb-12">
            Find Us on the Map
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.999!2d75.8399175!3d22.7223625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fde7b19cc999%3A0xe0174b40722e2f27!2sTRUSTMAKER%20INFRAREAL%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1735200000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}