import Image from 'next/image';
import Link from 'next/link';
import Contact from '@/components/home/Contact';
import FAQ from '@/components/home/FAQ';
import Testimonials from '@/components/home/Testimonials';
import { UsersIcon, BuildingOffice2Icon, CalendarDaysIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function ContactUsPage() {
  return (
    <>
      <section className="relative h-screen md:h-[60vh] overflow-hidden">
        <Image
          src="/contact.webp"
          alt="Contact Trustmaker Infrareal - Indore Real Estate"
          fill
          className="object-cover object-top"
          priority
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight relative inline-block text-center">
              Talk to <span className="text-[#D97A9F]">Trustmaker</span> Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We're here to help you find your dream home in Indore — be it a cozy first apartment, a spacious family villa, a smart investment plot, or a prime commercial space.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements / Stats Section */}

      <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-pink-50 overflow-hidden">
        <div className="w-full mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-5 text-center">
              Building Dreams, <span className="text-[#9C2F5A]">Delivering Trust</span>
              <span className="absolute left-1/2 bottom-0 w-24 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
            </h2>
            <p className="mt-2 text-xl text-gray-600 max-w-3xl mx-auto">
              Building dreams with transparency, quality, and unmatched trust for over a decade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Stat 1: Happy Customers */}
            <div className="group relative bg-white rounded-3xl shadow-lg p-6 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-[#D97A9F]/20 border-2 border-transparent">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-[#D97A9F]/10 group-hover:bg-[#D97A9F]/20 transition-colors">
                <UsersIcon className="w-10 h-10 text-[#D97A9F]" />
              </div>
              <div
                className="text-3xl font-extrabold text-[#D97A9F] mb-3"
                data-count="500"
              >
                500+
              </div>
              <p className="text-2xl font-semibold text-gray-900">Happy Customers</p>
              <p className="text-gray-500 mt-2">Dream homes delivered with joy</p>
            </div>

            {/* Stat 2: Projects Completed */}
            <div className="group relative bg-white rounded-3xl shadow-lg p-6 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-[#D97A9F]/20 border-2 border-transparent">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-[#D97A9F]/10 group-hover:bg-[#D97A9F]/20 transition-colors">
                <BuildingOffice2Icon className="w-10 h-10 text-[#D97A9F]" />
              </div>
              <div
                className="text-3xl font-extrabold text-[#D97A9F] mb-3"
                data-count="50"
              >
                50+
              </div>
              <p className="text-2xl font-semibold text-gray-900">Projects Completed</p>
              <p className="text-gray-500 mt-2">Premium residential & commercial spaces</p>
            </div>

            {/* Stat 3: Years of Excellence */}
            <div className="group relative bg-white rounded-3xl shadow-lg p-6 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-[#D97A9F]/20 border-2 border-transparent">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-[#D97A9F]/10 group-hover:bg-[#D97A9F]/20 transition-colors">
                <CalendarDaysIcon className="w-10 h-10 text-[#D97A9F]" />
              </div>
              <div
                className="text-3xl font-extrabold text-[#D97A9F] mb-3"
                data-count="10"
              >
                10+
              </div>
              <p className="text-2xl font-semibold text-gray-900">Years of Excellence</p>
              <p className="text-gray-500 mt-2">Building trust since 2014</p>
            </div>

            {/* Stat 4: RERA Registered */}
            <div className="group relative bg-white rounded-3xl shadow-lg p-6 text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:border-[#D97A9F]/20 border-2 border-transparent">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-[#D97A9F]/10 group-hover:bg-[#D97A9F]/20 transition-colors">
                <ShieldCheckIcon className="w-10 h-10 text-[#D97A9F]" />
              </div>
              <div className="text-3xl font-extrabold text-[#D97A9F] mb-3">100%</div>
              <p className="text-2xl font-semibold text-gray-900">RERA Registered</p>
              <p className="text-gray-500 mt-2">Fully transparent & legal projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="2 bg-gray-50">
        <Contact />
      </section>

      {/* Testimonials Section */}
      <section>
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section>
        <FAQ />
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