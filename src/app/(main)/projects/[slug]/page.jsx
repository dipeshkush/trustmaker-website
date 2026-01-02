import Image from 'next/image';
import Link from 'next/link';
import EMICalculator from '@/components/layout/EMICalculator';
import { PROJECTS } from '@/app/data/projects';
import {
  ShieldCheck,
  Car,
  Cctv,
  ArrowUpDown,
  Waves,
  Dumbbell,
  Flame,
  Bus,
  Store,
  Zap,
  Toilet,
  Trees,
} from 'lucide-react';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((proj) => proj.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-black text-gray-900 mb-6">Project Not Found</h1>
          <Link href="/projects" className="text-xl text-teal-600 hover:text-teal-700 font-semibold transition">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }


  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              {project.title}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl text-gray-100">
              <p className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </p>
              <p className="hidden md:block text-gray-400">•</p>
              <p className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {project.type}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-14 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: Gallery */}
           <div className="space-y-6 order-2 lg:order-1 lg:sticky lg:top-28 self-start">

              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {(project.gallery || Array(4).fill(project.image)).map((img, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      width={200}
                      height={150}
                      className="w-full h-28 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Details */}
            <div className="space-y-8 order-1 lg:order-2">

              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h2>

              {/* Location & Type */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <p className="flex items-center gap-2 text-base">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </p>

                <span className="bg-[#9C2F5A]/10 text-[#9C2F5A] px-4 py-1.5 rounded-full text-sm font-semibold">
                  {project.type}
                </span>
              </div>

              {/* Price */}
              <p className="text-2xl font-semibold text-[#9C2F5A]">
                {project.priceRange || "Contact for Pricing"}
              </p>

              {/* Description */}
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>{project.desc}</p>
                <p>{project.details}</p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Key Highlights
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {project.features?.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-9 h-9 bg-teal-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}
                            d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-800 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EMI Calculator - Added Here */}
              <EMICalculator />

              {/* Status & CTA */}
              <div className="flex flex-col md:flex-row gap-5">
                <div
                  className={`flex-1 py-4 rounded-xl text-center font-semibold text-lg ${project.status === "Ready to Move"
                      ? "bg-green-600 text-white"
                      : "bg-orange-500 text-white"
                    }`}
                >
                  Status: {project.status || "Coming Soon"}
                </div>

                <Link
                  href="/contact-us"
                  className="flex-1 bg-[#9C2F5A] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#8a274f] transition shadow-lg flex items-center justify-center gap-3"
                >
                  Enquire Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M14 5l7 7-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="relative py-12 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-[url('/ami.webp')] bg-cover bg-center"
    aria-hidden
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/90" />

  {/* Content */}
  <div className="relative z-10 w-full mx-auto px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black text-white tracking-wide mb-4">
        AMENITIES
      </h2>
      <div className="w-32 h-1 bg-[#9C2F5A] mx-auto rounded-full" />
    </div>

    {/* Amenities Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
        { icon: ShieldCheck, label: "24×7 Security" },
        { icon: Car, label: "Covered Parking" },
        { icon: Cctv, label: "CCTV Surveillance" },
        { icon: ArrowUpDown, label: "High-Speed Lifts" },
        { icon: Waves, label: "Swimming Pool" },
        { icon: Dumbbell, label: "Gymnasium" },
        { icon: Flame, label: "Fire Safety System" },
        { icon: Bus, label: "Near Bus Stop" },
        { icon: Store, label: "Local Vendors Nearby" },
        { icon: Zap, label: "Power Backup" },
        { icon: Toilet, label: "Common & Private Toilets" },
        { icon: Trees, label: "Garden Area" },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center
                       hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2
                       transition-all duration-500 border border-white/10"
          >
            <Icon className="w-12 h-12 text-[#9C2F5A] mb-4" strokeWidth={1.5} />
            <p className="text-sm lg:text-base font-semibold text-gray-100 leading-tight">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Back to Projects */}
      <section className="py-6 bg-white text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-4 text-xl font-semibold text-[#9C2F5A] hover:text-[#8a274f] transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Projects
        </Link>
      </section>
    </>
  );
}