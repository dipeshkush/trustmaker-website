import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.webp"
        alt="Premium Real Estate in Indore"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/90 " />

      {/* Hero Content - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Main Headline */}
          <h1 className="text-5xl font-bold leading-tight text-white relative inline-block py-6">
              Easy, Fast &
              <span className="text-teal-300"> Reliable</span> Real Estate<br className="hidden md:block" />
              Services in Indore
              {/* <span className="absolute left-1/2 -bottom-1 w-32 h-1.5 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span> */}
            </h1>

          {/* Subheadline */}
          <p className="text-lg font-medium text-gray-100 max-w-4xl mx-auto">
            Professional guidance • Verified properties • Zero hidden costs
          </p>

          <p className="text-lg text-gray-200">
            No brokerage for buyers • Complete support till possession
          </p>

          {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
            {/* Get Free Consultation - White to Magenta Slide */}
            <Link
              href="/contact-us"
              className={`
                group relative inline-flex items-center justify-center
                overflow-hidden
                bg-white text-[#9C2F5A] font-bold text-lg md:text-xl
                px-6 py-3 rounded-xl
                shadow-xl shadow-[#9C2F5A]/10
                border border-[#9C2F5A]/20
                transition-all duration-300 ease-out
                hover:text-white hover:shadow-2xl hover:shadow-[#9C2F5A]/30
              `}
            >
              <span
                className={`
                  absolute inset-0 
                  bg-gradient-to-r from-[#9C2F5A] to-[#7A2448]
                  -translate-x-full
                  group-hover:translate-x-0
                  transition-transform duration-500 ease-out
                `}
              />
              <span
                className={`
                  absolute inset-0 
                  bg-gradient-to-r from-transparent via-white/15 to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform duration-1000 ease-in-out
                  opacity-0 group-hover:opacity-100
                `}
              />
              <span className="relative z-10">Get Free Consultation</span>
            </Link>

            {/* Download App - Dark Glass to Magenta Slide (same animation) */}
            <Link
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative inline-flex items-center justify-center gap-4
                overflow-hidden
                bg-black/70 backdrop-blur-md text-white font-bold text-lg md:text-xl
                px-6 py-2 rounded-xl
                border border-white/20
                shadow-2xl shadow-black/30
                transition-all duration-300 ease-out
                hover:text-white hover:shadow-2xl hover:shadow-[#9C2F5A]/30
              `}
            >
              <span
                className={`
                  absolute inset-0 
                  bg-gradient-to-r from-[#9C2F5A] to-[#7A2448]
                  -translate-x-full
                  group-hover:translate-x-0
                  transition-transform duration-500 ease-out
                `}
              />
              <span
                className={`
                  absolute inset-0 
                  bg-gradient-to-r from-transparent via-white/15 to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform duration-1000 ease-in-out
                  opacity-0 group-hover:opacity-100
                `}
              />
              <svg className="w-9 h-9 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.009 2.778c-.271-.36-.822-.469-1.229-.248l11.155 11.155 3.416-3.416-13.342-7.491zM2.78 3.009l9.613 5.395 1.829-1.829-11.442-3.566zM1.551 3.627l13.342 7.491-3.416 3.416-9.926-10.907zM2.778 3.009l-.998.998 9.926 10.907 3.416-3.416-12.344-8.489zM22.451 10.5l-19.672 11.378c-.271.156-.489.424-.489.756 0 .551.447 1 1 1 .271 0 .519-.107.707-.283l19.672-11.378c.391-.226.629-.645.629-1.11s-.238-.884-.629-1.11l-19.672-11.378c-.188-.109-.436-.175-.707-.175-.551 0-1 .449-1 1 0 .332.218.6.489.756l19.672 11.378z"/>
              </svg>
              <span className="relative z-10">Download App</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-10
         text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}