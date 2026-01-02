"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, IndianRupee, Clock, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      gsap.from(imageRef.current, {
        x: -60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });

      gsap.from(contentRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });


      gsap.from(".key-point", {
        y: 30,
        opacity: 0,
        stagger: 0.5,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-gradient-to-b from-white to-teal-50/30 overflow-hidden"
    >
      <div className="w-full mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div
          ref={headingRef}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight text-center">
            Why Choose <span className="text-[#9C2F5A]">Trustmaker</span>

            <span className="block mx-auto mt-3 w-24 h-1 bg-[#9C2F5A] rounded-full"></span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We make buying a home in Indore simple, transparent, and stress-free.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Image */}
          <div ref={imageRef} className="hidden lg:block">
            <div className="relative group">
              <div className="absolute -inset-4  blur-3xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>

              <img
                src="/whychoose.webp"
                alt="Trustmaker Home Buying"
                className="w-full h-[500px] rounded-md object-cover"
              />

              <p className="mt-8 text-center text-lg text-gray-600 italic">
                Personalized guidance at every step
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="flex flex-col justify-center items-start"
          >
            <p className="text-sm lg:text-lg text-gray-700 leading-7 tracking-wide">
                At Trustmaker, we believe finding your dream home in Indore should be a joyful and stress-free
                experience. Every property we recommend is{" "}
                <span className="font-semibold text-[#9C2F5A]">
                  100% authentic and personally hand-verified
                </span>{" "}
                by our experienced team — no staged photos, no misleading listings, and no false promises.
                With over a decade of deep-rooted local expertise, we understand the real value of each
                neighborhood, future growth potential, connectivity, and lifestyle benefits before
                recommending any property. Our service is{" "}
                <span className="font-semibold text-[#9C2F5A]">
                  completely free for buyers
                </span>{" "}
                — zero brokerage, zero hidden charges, and complete transparency at every stage. We focus on
                matching you with homes that truly fit your needs, budget, and long-term goals, ensuring you
                make a confident and informed decision.
              </p>
            <p className="mt-10 text-sm lg:text-lg text-gray-700 leading-7 tracking-wide">
              We go beyond just property listings by offering end-to-end assistance throughout your
              home-buying journey. From shortlisting and site visits to negotiations, documentation,
              home loan assistance, and final possession — our team stays with you at every step.
              That’s why we’re proudly trusted by{" "}
              <span className="font-semibold text-[#9C2F5A]">
                5,000+ happy families
              </span>{" "}
              across Indore.
            </p>

            {/* Key Importance */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-8">
              <div className="flex items-start gap-3 key-point">
                <ShieldCheck className="w-6 h-6 text-[#9C2F5A]" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Verified Properties</span><br />
                  100% authentic listings
                </p>
              </div>

              <div className="flex items-start gap-3 key-point">
                <IndianRupee className="w-6 h-6 text-[#9C2F5A]" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Zero Brokerage</span><br />
                  No hidden charges
                </p>
              </div>

              <div className="flex items-start gap-3 key-point">
                <Clock className="w-6 h-6 text-[#9C2F5A]" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Quick Response</span><br />
                  Options in 24 hours
                </p>
              </div>

              <div className="flex items-start gap-3 key-point">
                <Users className="w-6 h-6 text-[#9C2F5A]" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Trusted by 5,000+</span><br />
                  Happy families
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
