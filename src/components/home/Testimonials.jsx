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

    // Duplicate for smooth infinite scroll (must be exact copy)
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
    <section className="bg-gray-50 overflow-hidden py-12">
      <div className="w-full mx-auto px-8">

        {/* Heading */}
         <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            What Our <span className="text-[#9C2F5A]">Clients Say</span>
            <span className="absolute left-1/2 -bottom-3 w-20 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl text-lg mb-8">
            Hear from clients who found their perfect property with Trustmaker.
          </p>
        </div>

        {/* Auto Scroll Marquee */}
        <div className="relative">
          <div className="overflow-hidden py-6">
           <div className="flex gap-8 w-max animate-marquee hover:animation-paused">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-96 h-[300px] bg-white rounded-xl p-8
                              flex flex-col justify-between
                              hover:shadow-2xl transition-shadow duration-300`}
                >
                  {/* Stars */}
                  <div>
                    <div className="flex text-yellow-400 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 text-base leading-relaxed italic">
                      “{testimonial.text}”
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-6">
                    <div className={`w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full
                                      flex items-center justify-center text-white font-bold text-lg`}>
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
    </section>
  );
}