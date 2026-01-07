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

        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("show");
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

      setActiveIndex(active);
    },
    {
      threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      rootMargin: "0px 0px -35% 0px",
    }
  );

  slidesRef.current.forEach((el) => el && observer.observe(el));

  return () => observer.disconnect();
}, [mounted]);




  return (
    <section className="bg-[#0f0f0f] py-18 text-white">
      <div className="w-full mx-auto px-12">
        <div className="grid lg:grid-cols-[420px_1fr] gap-20">
          {/* LEFT PANEL */}
          <aside className="lg:sticky lg:top-28 self-start space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight relative inline-block pb-5">
                Elevating Your <br className="hidden md:block" />
                <span className="text-[#9C2F5A]">Property Journey</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                Trustmaker Infrareal delivers carefully selected properties with
                zero brokerage, complete transparency, and expert guidance.
              </p>
            </div>

            {/* Progress */}
            <div className="flex flex-col gap-4">
              {propertyTypes.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? 'bg-[#9C2F5A] w-24'
                      : 'bg-white/20 w-10'
                  }`}
                />
              ))}
            </div>
          </aside>

          {/* RIGHT PANEL */}
          <div className="space-y-28">
            {propertyTypes.map((property, index) => (
              <article
                key={index}
                data-index={index}
                ref={(el) => (slidesRef.current[index] = el)}
                className={`property-slide ${mounted ? "" : "opacity-0"}`}
              >
                <div className="relative h-[75vh]  overflow-hidden">
                  {/* Image */}
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-[1800ms] will-change-transform hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

                  {/* Glass Card */}
                  <div className="absolute bottom-10 left-10 max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-7">
                    <h3 className="text-2xl font-semibold mb-3">
                      {property.title}
                    </h3>

                    <p className="text-gray-200 text-base leading-relaxed mb-5">
                      {property.subtitle}
                    </p>

                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-[#9C2F5A] transition"
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
