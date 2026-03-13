'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const propertyTypes = [
  {
    title: 'Residential Apartments',
    subtitle:
      'Premium 2–5 BHK homes in gated communities with lifestyle amenities and green views.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90',
  },
  {
    title: 'Luxury Villas',
    subtitle:
      'Independent villas designed for privacy, elegance, and resort-style living.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
  },
  {
    title: 'Commercial Spaces',
    subtitle:
      'High-visibility offices and retail spaces in Indore’s prime business zones.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90',
  },
  {
    title: 'Plots & Land',
    subtitle:
      'RERA-approved plots in fast-developing corridors with long-term value growth.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90',
  },
];

export default function PropertyTypes() {
  const slidesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const visibilityMap = useRef(new Map());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

useEffect(() => {
  if (!mounted) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        visibilityMap.current.set(index, entry.intersectionRatio);

        if (entry.intersectionRatio > 0.1) {
          entry.target.classList.add('show');
        }
      });

      let maxRatio = 0;
      let active = activeIndex;

      visibilityMap.current.forEach((ratio, index) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          active = index;
        }
      });

      if (maxRatio > 0) setActiveIndex(active);
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: "0px 0px -30% 0px",
    }
  );

  slidesRef.current.forEach((el) => el && observer.observe(el));

  return () => observer.disconnect();
}, [mounted]);   // ← only mounted

  return (
    <section className="bg-[#0f0f0f] py-16 md:py-20 lg:py-24 text-white">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        {/* Mobile-only heading */}
        <div className="lg:hidden text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Elevating Your <span className="text-[#9C2F5A]">Property Journey</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Trustsathi delivers carefully selected properties with zero brokerage,
            complete transparency, and expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-20">
          {/* LEFT PANEL - Desktop only */}
          <aside className="hidden lg:sticky lg:top-24 lg:block self-start space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl inline-block font-bold pb-4">
                Elevating Your <br />
                <span className="text-[#9C2F5A]">Property Journey</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Trustsathi delivers carefully selected properties with zero brokerage,
                complete transparency, and expert guidance.
              </p>
            </div>

            {/* Progress indicators */}
            <div className="flex flex-col gap-5 mt-8">
              {propertyTypes.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-700 ${
                    i === activeIndex ? 'bg-[#9C2F5A] w-28' : 'bg-white/20 w-12'
                  }`}
                />
              ))}
            </div>
          </aside>

          {/* RIGHT PANEL - Cards (always visible, centered on mobile) */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-28">
            {propertyTypes.map((property, index) => (
              <article
                key={index}
                data-index={index}
                ref={(el) => (slidesRef.current[index] = el)}
                className={`property-slide transition-opacity duration-700 ${
                  mounted ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative h-[65vh] sm:h-[70vh] lg:h-[80vh] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-2000 ease-out hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                  {/* Glass Card - centered on mobile, left on desktop */}
                  <div
                    className={`
                      absolute bottom-6 sm:bottom-10 
                      left-4 sm:left-8 lg:left-10 
                      right-4 sm:right-8 lg:right-auto
                      max-w-lg lg:max-w-md 
                      backdrop-blur-xl bg-white/10 border border-white/20 
                      rounded-2xl p-6 sm:p-7 lg:p-8
                    `}
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
                      {property.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 sm:mb-6">
                      {property.subtitle}
                    </p>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold uppercase tracking-wide text-white hover:text-[#9C2F5A] transition-colors"
                    >
                      Explore Projects →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}