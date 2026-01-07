export default function Legal() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-4">
                Legal And <span className="text-[#9C2F5A]">Trust Assurance</span>
                <span className="absolute left-1/2 bottom-0 w-28 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
            </h2>
            <p className="text-lg max-w-xl text-gray-600">
                A transparent and legally verified process designed to protect your
                investment at every stage.
            </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:pt-12">

          <div className="grid gap-16 md:grid-cols-4">

            {/* Step 1 */}
            <div className="relative flex md:block gap-6">
              <span className="absolute -left-4 top-1 md:static md:mb-6 w-8 h-8 rounded-full bg-[#9C2F5A] text-white flex items-center justify-center font-semibold">
                01
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  RERA Compliance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every project is RERA registered and verified to ensure
                  full regulatory compliance and buyer protection.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex md:block gap-6">
              <span className="absolute -left-4 top-1 md:static md:mb-6 w-8 h-8 rounded-full bg-[#9C2F5A] text-white flex items-center justify-center font-semibold">
                02
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Legal Due Diligence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Title checks, approvals, and documentation are thoroughly
                  reviewed to eliminate legal risks.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex md:block gap-6">
              <span className="absolute -left-4 top-1 md:static md:mb-6 w-8 h-8 rounded-full bg-[#9C2F5A] text-white flex items-center justify-center font-semibold">
                03
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Clear cost breakdowns with no hidden charges,
                  ensuring complete financial transparency.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex md:block gap-6">
              <span className="absolute -left-4 top-1 md:static md:mb-6 w-8 h-8 rounded-full bg-[#9C2F5A] text-white flex items-center justify-center font-semibold">
                04
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Complete Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From site visits to registration and possession,
                  we assist you throughout the entire journey.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Assurance Strip */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-4 text-center shadow-sm">
          <p className="text-xl font-medium text-gray-800">
            Your investment is protected by verified legality, ethical practices,
            and long-term value assurance.
          </p>
        </div>

      </div>
    </section>
  );
}
