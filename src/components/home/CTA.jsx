import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        // poster="/cta-fallback.jpg"
      >
        <source src="/cta.mp4" type="video/mp4" />
        {/* <source src="/cta.webm" type="video/webm" /> */}
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#9C2F5A]/40" />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-6">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LEFT: Text */}
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug drop-shadow-2xl">
              Ready to Find Your Dream Home <br />
              in Indore?
            </h2>

            <p className="mt-6 text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-lg">
              Let us help you discover the perfect property — completely free,
              with honest guidance every step of the way.
            </p>
          </div>

          {/* RIGHT: Button */}
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#9C2F5A] font-bold text-lg md:text-xl px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Contact Us Today
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
