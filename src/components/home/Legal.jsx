import { 
  ShieldCheckIcon, 
  DocumentCheckIcon, 
  CurrencyRupeeIcon, 
  HandThumbUpIcon 
} from '@heroicons/react/24/outline';

export default function Legal() {
  const steps = [
    {
      number: "01",
      title: "RERA Compliance",
      desc: "Every project is RERA registered and verified to ensure full regulatory compliance and buyer protection.",
      icon: ShieldCheckIcon,
    },
    {
      number: "02",
      title: "Legal Due Diligence",
      desc: "Title checks, approvals, and documentation are thoroughly reviewed to eliminate legal risks.",
      icon: DocumentCheckIcon,
    },
    {
      number: "03",
      title: "Transparent Pricing",
      desc: "Clear cost breakdowns with no hidden charges, ensuring complete financial transparency.",
      icon: CurrencyRupeeIcon,
    },
    {
      number: "04",
      title: "Complete Support",
      desc: "From site visits to registration and possession, we assist you throughout the entire journey.",
      icon: HandThumbUpIcon,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-5 text-center">
           Legal And <span className="text-[#9C2F5A]">Trust Assurance</span>
            <span className="absolute left-1/2 bottom-0 w-28 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl text-lg mb-8">
            A transparent and legally verified process designed to protect your investment at every stage.
          </p>
        </div>

        {/* Responsive Timeline */}
        <div className="relative">
          {/* Horizontal connecting line - Desktop only */}
          {/* <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#9C2F5A]/30 to-transparent"></div> */}

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Vertical line for mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-20 left-10 w-0.5 h-full bg-[#9C2F5A]/20 -z-10"></div>
                )}

                {/* Number Circle
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#9C2F5A] text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div> */}

                {/* Icon */}
                <step.icon className="w-12 h-12 text-[#9C2F5A] mb-4" />

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base ">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Assurance Strip */}
        <div className="mt-12 bg-white border border-gray-200 rounded-3xl p-6 text-center shadow-xl">
          <p className="text-xl  font-medium text-gray-800">
            Your investment is protected by verified legality, ethical practices,
            and long-term value assurance.
          </p>
        </div>
      </div>
    </section>
  );
}