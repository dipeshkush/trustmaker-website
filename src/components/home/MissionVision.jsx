import {
  CursorArrowRaysIcon,
  LightBulbIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  ScaleIcon
} from "@heroicons/react/24/outline";

export default function MissionVision() {
  return (
    <section className="py-12 bg-white relative border border-[#9C2F5A] overflow-hidden">

      {/* Accent Strip */}
      <span className="absolute left-0 top-0 h-full w-1 bg-[#9C2F5A]"></span>

      <div className="w-full mx-auto px-6">

        {/* Heading */}
         <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-5 text-center">
            Mission & <span className="text-[#9C2F5A]">Vision</span>
            <span className="absolute left-1/2 bottom-0 w-28 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl text-lg mb-8">
            Building more than homes — creating lasting value for families
            through trust, quality, and responsible development.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Mission */}
          <div className="pl-8 border-l-4 border-[#9C2F5A]/80 animate-fade-in-up">
            <div className="flex items-center gap-4 mb-5">
              <CursorArrowRaysIcon className="w-9 h-9 text-[#9C2F5A]" />
              <h3 className="text-3xl font-semibold text-gray-900">
                Our Mission
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              To provide transparent, ethical, and reliable real estate solutions
              that help families make confident property decisions while ensuring
              quality, compliance, and long-term value.
            </p>
          </div>

          {/* Vision */}
          <div className="pl-8 border-l-4 border-[#9C2F5A]/80 animate-fade-in-up delay-150">
            <div className="flex items-center gap-4 mb-5">
              <LightBulbIcon className="w-9 h-9 text-[#9C2F5A]" />
              <h3 className="text-3xl font-semibold text-gray-900">
                Our Vision
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              To become a trusted name in real estate by shaping sustainable
              communities and delivering thoughtfully designed spaces that
              enhance the quality of life for future generations.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="pt-10 border-t border-gray-200">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12 animate-fade-in-up">
            Our Core Values
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {[
              { icon: ShieldCheckIcon, label: "Integrity" },
              { icon: CheckBadgeIcon, label: "Transparency" },
              { icon: SparklesIcon, label: "Quality" },
              { icon: HeartIcon, label: "Customer First" },
              { icon: UsersIcon, label: "Collaboration" },
              { icon: ChartBarIcon, label: "Growth Mindset" },
              { icon: ScaleIcon, label: "Ethical Practices" },
              { icon: BuildingOfficeIcon, label: "Strong Foundations" },
              { icon: CursorArrowRaysIcon, label: "Excellence" },
              { icon: LightBulbIcon, label: "Innovation" },
            ].map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-4 group animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-[#9C2F5A]/10 flex items-center justify-center group-hover:bg-[#9C2F5A]/20 transition">
                  <value.icon className="w-6 h-6 text-[#9C2F5A] group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-lg font-medium text-gray-800 group-hover:text-[#9C2F5A] transition-colors">
                  {value.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
