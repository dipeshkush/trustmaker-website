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
      text: "Professional and honest team. They showed only verified properties and guided me through the entire process. Finally got my shop without any hassle.",
    },
    {
      name: "Neha Gupta",
      location: "Super Corridor, Indore",
      rating: 5,
      text: "Excellent service! Found a perfect 4BHK in a premium project. Their knowledge of Indore market is unmatched. 100% trustworthy.",
    },
    {
      name: "Rajesh Mehta",
      location: "Palasia, Indore",
      rating: 5,
      text: "Trustmaker made buying commercial space so easy. No pressure, full transparency, and great negotiation. Will always recommend them.",
    },
    {
      name: "Sunita Verma",
      location: "Scheme No. 54, Indore",
      rating: 5,
      text: "As a first-time buyer, I was confused. Trustmaker team patiently explained everything and helped me buy my home at the best price. Thank you!",
    },
    // Duplicate for seamless infinite scroll
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
      text: "Professional and honest team. They showed only verified properties and guided me through the entire process. Finally got my shop without any hassle.",
    },
    {
      name: "Neha Gupta",
      location: "Super Corridor, Indore",
      rating: 5,
      text: "Excellent service! Found a perfect 4BHK in a premium project. Their knowledge of Indore market is unmatched. 100% trustworthy.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="w-full mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 5,000+ families in Indore have trusted us to find their dream property
          </p>
        </div>

        {/* Auto Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-hidden p-4">
            <div className="flex gap-8 animate-marquee">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-96 bg-white rounded-3xl p-10 hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Star Rating */}
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-7 h-7 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fade Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>

      {/* Tailwind Animation - No styled-jsx */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}