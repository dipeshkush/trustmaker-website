export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-teal-50/30 overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose <span className="text-[#9C2F5A]">Trustmaker</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We make buying a home in Indore simple, transparent, and truly stress-free — every step of the way.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT: Premium Image */}
          <div className="hidden lg:block order-2 lg:order-1">
            <div className="relative group">
              {/* Subtle glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9C2F5A]/20 to-pink-400/20 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
              
              <div className="relative">
                <img
                  src="/whychoose.webp"
                  alt="Happy family receiving keys to their new home with Trustmaker guidance"
                  className="w-full h-[500px] mx-auto rounded-3xl shadow-2xl object-cover"
                />
                
                {/* Hover overlay text */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 flex items-end justify-center pb-10">
                  <p className="text-white text-2xl font-semibold tracking-wide">
                    Your Dream Home Starts Here
                  </p>
                </div>
              </div>

              <p className="mt-8 text-center text-lg text-gray-600 font-medium italic">
                Personalized guidance at every step of your journey
              </p>
            </div>
          </div>

          {/* RIGHT: Paragraph + Contact Us Button */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-10">
              At Trustmaker, we believe finding your dream home in Indore should be a joyful experience. 
              Every property we recommend is <span className="font-semibold text-[#9C2F5A]">100% authentic and personally hand-verified</span> by our team — no staged photos, no false promises. 
              Backed by over a decade of deep-rooted local expertise, we know every neighborhood and upcoming hotspot inside out. 
              Our service is <span className="font-semibold text-[#9C2F5A]">completely free for buyers</span> — zero brokerage or hidden fees — because your perfect home shouldn’t come with extra costs. 
              We provide lightning-fast responses with curated options within 24 hours, flexible site visits, and full journey support — from paperwork and negotiations to loan assistance and final possession. 
              Above all, we’re proud to be <span className="font-semibold text-[#9C2F5A]">trusted by over 5,000 happy families</span> who’ve turned their home-owning dreams into reality with us.
            </p>

            {/* Contact Us Button */}
            {/* <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#9C2F5A] text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-[#8a274f]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us Today
              </a>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}