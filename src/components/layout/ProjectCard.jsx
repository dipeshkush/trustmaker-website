// import Image from 'next/image';
// import Link from 'next/link';

// export default function ProjectCard({ project }) {
//   return (
//     <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700">
//       {/* Image */}
//       <div className="relative h-70 overflow-hidden">
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           className="object-cover group-hover:scale-110 group-hover:blur-sm transition-all duration-700"
//         />

//         {/* Type Badge */}
//         <span className="absolute top-6 left-6 bg-[#9C2F5A] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
//           {project.type}
//         </span>

//         {/* Hover: Read More Button */}
//         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//           <Link
//             href={`/projects/${project.slug}`}
//             className=" px-6 py-2 rounded-full font-bold text-black text-lg shadow-2xl hover:bg-white/10 transition-all duration-300"
//           >
//             View Details →
//           </Link>
//         </div>
//       </div>

//       {/* Card Content */}
//       <div className="p-6">
//         <h3 className="text-2xl font-bold text-gray-900 mb-3">
//           {project.title}
//         </h3>
//         <p className="text-lg text-gray-600 mb-4 flex items-center gap-2">
//           <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//           </svg>
//           {project.location}
//         </p>
//         <p className="text-gray-700 leading-relaxed line-clamp-3">
//           {project.desc}
//         </p>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  if (!project) return null;

  const {
    image,
    title,
    type,
    slug,
    location,
    desc,
  } = project;

  return (
    <div className="group relative bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700">
      
      {/* Image */}
      <div className="relative h-70 overflow-hidden">
        <Image
          src={image}
          alt={title || "Project Image"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 group-hover:blur-sm transition-all duration-700"
          priority={false}
        />

        {/* Type Badge */}
        {type && (
          <span className="absolute top-6 left-6 bg-[#9C2F5A] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
            {type}
          </span>
        )}

        {/* Hover Button */}
        {slug && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Link
              href={`/projects/${slug}`}
              className="px-6 py-2 rounded-full font-bold text-black text-lg shadow-2xl hover:bg-white/10 transition-all duration-300"
            >
              View Details →
            </Link>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>

        {location && (
          <p className="text-lg text-gray-600 mb-4 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {location}
          </p>
        )}

        {desc && (
          <p className="text-gray-700 leading-relaxed line-clamp-3">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}
