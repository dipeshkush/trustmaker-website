import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen pt-32 flex flex-col justify-end pb-20 overflow-hidden">
      {/* Background Property Image */}
      <Image
        src="/hero.webp" 
        alt="Premium Property"
        fill
        className="object-cover object-center"
        priority
      />

        <div className="absolute inset-0">
        <svg
            viewBox="0 0 1440 800"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
        >
            <path
            d="
                M0,0
                H900
                C700,120 620,260 620,400
                C620,540 700,680 900,800
                H0
                Z
            "
            fill="#0D9488"
            opacity="0.92"
            />
        </svg>
        
        </div>

      {/* Content - Bottom Left */}
      <div className="relative z-10 w-full mx-auto px-6 w-full ml-4">
        <div className="max-w-3xl text-white space-y-8">
         <h1 className="font-semibold leading-tight "
          style={{ fontSize: '50px', lineHeight: '1.2' , fontWeight: '400' }}>
        Easy, Fast, and <br /> Reliable Real <br /> Estate Services
        </h1>


          <p className="text-xl md:text-2xl font-medium text-white">
            Professional agents, marketing & more
          </p>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
            No upfront costs — no sale, no fee.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Link
              href="/contact-us"
              className="bg-white text-teal-600 px-6 py-3 rounded-full text-xl  hover:bg-gray-100 transition shadow-2xl"
            >
              Contact Us
            </Link>

            <Link
              href="https://play.google.com/store/apps"  
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-3 hover:bg-gray-900 transition shadow-2xl"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.009 2.778c-.271-.36-.822-.469-1.229-.248l11.155 11.155 3.416-3.416-13.342-7.491zM2.78 3.009l9.613 5.395 1.829-1.829-11.442-3.566zM1.551 3.627l13.342 7.491-3.416 3.416-9.926-10.907zM2.778 3.009l-.998.998 9.926 10.907 3.416-3.416-12.344-8.489zM22.451 10.5l-19.672 11.378c-.271.156-.489.424-.489.756 0 .551.447 1 1 1 .271 0 .519-.107.707-.283l19.672-11.378c.391-.226.629-.645.629-1.11s-.238-.884-.629-1.11l-19.672-11.378c-.188-.109-.436-.175-.707-.175-.551 0-1 .449-1 1 0 .332.218.6.489.756l19.672 11.378z"/>
              </svg>
              Get it on Google Play
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}