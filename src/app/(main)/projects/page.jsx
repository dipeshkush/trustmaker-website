// import Image from 'next/image';
// import ProjectCard from '@/components/layout/ProjectCard.jsx';

// const PROJECTS = [
//   {
//     slug: "emerald-heights-residency",
//     title: "Emerald Heights Residency",
//     location: "Super Corridor, Indore",
//     desc: "Luxury 2-4 BHK apartments with modern amenities and green surroundings.",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//     type: "Residential",
//   },
//   {
//     slug: "skyline-business-park",
//     title: "Skyline Business Park",
//     location: "Vijay Nagar, Indore",
//     desc: "Premium Grade-A office spaces with excellent connectivity and facilities.",
//     image: "https://images.unsplash.com/photo-1550515040-9daffea2d4ee?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     type: "Commercial",
//   },
//   {
//     slug: "palm-greens-villas",
//     title: "Palm Greens Villas",
//     location: "Rau, Indore",
//     desc: "Exclusive 4-5 BHK villas with private gardens and serene lake views.",
//     image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     type: "Villa",
//   },
//   {
//     slug: "royal-orchid-towers",
//     title: "Royal Orchid Towers",
//     location: "Bhawarkuan, Indore",
//     desc: "High-rise luxury apartments with rooftop infinity pool and city views.",
//     image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//     type: "Residential",
//   },
//   {
//     slug: "elite-corporate-hub",
//     title: "Elite Corporate Hub",
//     location: "Palasia, Indore",
//     desc: "Modern commercial complex with smart offices and premium retail spaces.",
//     image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
//     type: "Commercial",
//   },
//   {
//     slug: "serene-lake-view-homes",
//     title: "Serene Lake View Homes",
//     location: "Scheme No. 54, Indore",
//     desc: "Peaceful waterfront living with modern 3-4 BHK homes and nature trails.",
//     image: "https://images.unsplash.com/photo-1568605114967-8660f0a8658d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//     type: "Residential",
//   },
// ];

// export default function ProjectsPage() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative h-96 md:h-[60vh] overflow-hidden">
//         <Image
//           src="/projects.webp"
//           alt="Premium Projects in Indore - Trustmaker Infrareal"
//           fill
//           className="object-cover object-center"
//           priority
//         />

//         <div className="absolute inset-0 bg-black/70 to-transparent" />

//         <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
//           <div className="max-w-5xl mx-auto">
//             <h1 className="text-4xl font-black text-white mb-6 leading-tight">
//               Our Premium Projects
//             </h1>
//             <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
//               Handpicked residential, commercial, and villa projects across Indore — verified, transparent, and ready for you.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
//         <div className="w-full mx-auto px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               All Featured <span className="text-[#9C2F5A]">Projects</span>
//             </h2>
//             <div className="w-32 h-1 bg-[#9C2F5A] mx-auto rounded-full mb-6" />
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Explore our complete portfolio of verified properties in Indore
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
//             {PROJECTS.map((project) => (
//               <ProjectCard key={project.slug} project={project} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import Image from "next/image";
import ProjectCard from "@/components/layout/ProjectCard";

import { PROJECTS } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] overflow-hidden">
        <Image
          src="/projects.webp"
          alt="Premium Projects in Indore - Trustmaker Infrareal"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-black text-white mb-6 leading-tight">
              Our Premium Projects
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Handpicked residential, commercial, and villa projects across
              Indore — verified, transparent, and ready for you.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Featured <span className="text-[#9C2F5A]">Projects</span>
            </h2>

            <div className="w-32 h-1 bg-[#9C2F5A] mx-auto rounded-full mb-6" />

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete portfolio of verified properties in Indore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
