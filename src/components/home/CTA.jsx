import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Video Background */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        // poster="/cta-fallback.jpg"
      >
        <source src="/cta.mp4" type="video/mp4" />
      </video> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#551931]" />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-8">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LEFT: Text */}
          <div className="max-w-3xl text-left">
            <h2 className="text-3xl font-bold text-white leading-snug drop-shadow-2xl">
              Ready to Find Your Dream Home
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
              href="/contact-us"
              className={`
                group relative inline-flex items-center justify-center
                overflow-hidden
                bg-white text-[#9C2F5A] font-bold text-lg md:text-xl
                px-8 py-3.5 rounded-xl
                shadow-xl shadow-[#9C2F5A]/10
                border border-[#9C2F5A]/20
                transition-all duration-300 ease-out
                hover:text-white hover:shadow-2xl hover:shadow-[#9C2F5A]/30
              `}
            >
              {/* Sliding background layer */}
              <span 
                className={`
                  absolute inset-0 
                  bg-gradient-to-r from-[#9C2F5A] to-[#7A2448]
                  translate-x-[-100%]
                  group-hover:translate-x-0
                  transition-transform duration-500 ease-out
                `}
              />
              
              {/* Text stays on top */}
              <span className="relative z-10">Contact Us Today</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
