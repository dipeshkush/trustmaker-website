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
        poster="/cta-fallback.jpg"  
      >
        <source src="/cta.mp4" type="video/mp4" />
        <source src="/cta.webm" type="video/webm" /> 
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay with Brand Color */}
      <div className="absolute inset-0 bg-[#9C2F5A]/30" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
          Ready to Find Your Dream Home
          in Indore?
        </h2>

        {/* Subheading */}
        <p className="text-xl text-white/95 max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
          Let us help you discover the perfect property — completely free, with honest guidance every step of the way.
        </p>

        {/* Button */}
        <Link
          href="/contact"
          className="inline-block bg-white text-[#9C2F5A] font-bold text-xl px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 "
        >
          Contact Us Today
        </Link>

        {/* Trust Line */}
        <p className="mt-8 text-xl md:text-2xl text-white font-semibold drop-shadow-lg">
          Trusted by over <span className="text-yellow-300">5,000+</span> families in Indore
        </p>
      </div>
    </section>
  );
}