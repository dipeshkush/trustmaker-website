'use client';

import Link from 'next/link';
import ProjectCard from '@/components/layout/ProjectCard';
import { PROJECTS } from '@/app/data/projects';

export default function ProjectsSection() {
  const featuredProjects = PROJECTS.slice(0, 3);
  const carouselProjects = [...featuredProjects, ...featuredProjects, ...featuredProjects];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="w-full mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Featured <span className="text-[#9C2F5A]">Projects</span>
              <span className="absolute left-1/2 -bottom-3 w-20 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl text-lg">
              Discover handpicked verified residential & commercial projects in Indore
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-lg font-semibold text-[#9C2F5A] hover:bg-gray-100 px-6 py-3 rounded-full transition"
          >
            View All Projects
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-3">
              →
            </span>
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden py-8">
          <div className="flex gap-8 animate-step-scroll">
            {carouselProjects.map((project, index) => (
              <div
                key={`${project.slug}-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[400px] lg:w-[420px]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes step-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-step-scroll {
          animation: step-scroll 20s linear infinite;
        }

        .animate-step-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}