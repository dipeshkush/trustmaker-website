'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rakesh Sharma",
      location: "Vijay Nagar, Indore",
      rating: 5,
      text: "Trustmaker helped me find my dream 3BHK flat in just 15 days. Completely free service and full support till registration. Highly recommended!",
    },
    {
      name: "Priya Patel",
      location: "Rau, Indore",
      rating: 5,
      text: "Best real estate service in Indore! No brokerage fee, transparent dealing, and they arranged everything from site visit to loan. Saved me lakhs.",
    },
    {
      name: "Amit Singh",
      location: "Bhawarkuan, Indore",
      rating: 5,
      text: "Professional and honest team. They showed only verified properties and guided me through the entire process.",
    },
    {
      name: "Neha Gupta",
      location: "Super Corridor, Indore",
      rating: 5,
      text: "Excellent service! Found a perfect 4BHK in a premium project. Their knowledge of Indore market is unmatched.",
    },
    {
      name: "Rajesh Mehta",
      location: "Palasia, Indore",
      rating: 5,
      text: "Trustmaker made buying commercial space so easy. No pressure, full transparency, and great negotiation.",
    },
    {
      name: "Sunita Verma",
      location: "Scheme No. 54, Indore",
      rating: 5,
      text: "As a first-time buyer, I was confused. Trustmaker team patiently explained everything and helped me buy my home.",
    },

    // duplicate for infinite scroll
    {
      name: "Rakesh Sharma",
      location: "Vijay Nagar, Indore",
      rating: 5,
      text: "Trustmaker helped me find my dream 3BHK flat in just 15 days. Completely free service and full support till registration. Highly recommended!",
    },
    {
      name: "Priya Patel",
      location: "Rau, Indore",
      rating: 5,
      text: "Best real estate service in Indore! No brokerage fee, transparent dealing, and they arranged everything from site visit to loan. Saved me lakhs.",
    },
  ];

  return (
    <section className="mb-12 bg-gray-50 overflow-hidden">
      <div className="w-full mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            What Our <span className="text-[#9C2F5A]">Clients Say</span>
          </h2>

          {/* Short underline */}
          <span className="block mx-auto mt-4 w-20 h-1 rounded-full bg-[#9C2F5A]" />

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Over <span className="font-semibold text-[#9C2F5A]">5,000+ families</span> in Indore
            have trusted Trustmaker to find their dream property.
          </p>
        </div>

        {/* Auto Scroll */}
        <div className="relative">
          <div className="overflow-hidden py-6">
            <div className="flex gap-8 animate-marquee">

              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-96 h-[300px] bg-white rounded-xl p-8
                             flex flex-col justify-between
                             hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Top Content */}
                  <div>
                    {/* Stars */}
                    <div className="flex text-yellow-400 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 text-base leading-relaxed italic">
                      “{testimonial.text}”
                    </p>
                  </div>

                  {/* Bottom Profile */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full
                                    flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* Marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 55s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
