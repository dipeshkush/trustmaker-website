import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-600  to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight py-4 mb-4">
            Cookie Policy
          </h1>
          <p className="text-xl max-w-4xl mx-auto text-gray-100 leading-relaxed">
            How Trustmaker Infrareal Pvt. Ltd. uses cookies to improve your experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-gray-50">
        <div className="w-full mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-16 prose prose-lg text-gray-700">
            <p className="text-lg leading-relaxed mb-8">
              This Cookie Policy explains what cookies are, how Trustmaker Infrareal Pvt. Ltd. ("we", "us", or "our") uses them on our website, and your choices regarding cookies. We use cookies to improve your experience, analyze site performance, and provide personalized content.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              What Are Cookies?
            </h2>
            <p className="leading-relaxed mb-8">
              Cookies are small text files that are placed on your device (computer, mobile, or tablet) when you visit a website. They help the website remember your preferences and improve functionality.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              Types of Cookies We Use
            </h2>
            <p className="leading-relaxed mb-8">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-8 space-y-4 mb-8 text-lg">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly (e.g., navigation, form submission).</li>
              <li><strong>Performance/Analytics Cookies:</strong> Help us understand how visitors use the site (e.g., Google Analytics – anonymous data only).</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences (e.g., language, location).</li>
              <li><strong>Marketing Cookies:</strong> Currently not used on our site.</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              How We Use Cookies
            </h2>
            <p className="leading-relaxed mb-8">
              Cookies help us:
            </p>
            <ul className="list-disc pl-8 space-y-4 mb-8 text-lg">
              <li>Improve website performance and loading speed</li>
              <li>Analyze visitor traffic (anonymously)</li>
              <li>Remember your preferences for better experience</li>
              <li>Ensure security and prevent fraud</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              Third-Party Cookies
            </h2>
            <p className="leading-relaxed mb-8">
              We may use third-party services like Google Analytics, which set their own cookies. These help us understand site usage but do not collect personal information.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              Managing Cookies
            </h2>
            <p className="leading-relaxed mb-8">
              You can control cookies through your browser settings:
            </p>
            <ul className="list-disc pl-8 space-y-4 mb-8 text-lg">
              <li>Block or delete cookies</li>
              <li>Receive alerts when cookies are set</li>
              <li>Most browsers allow control via Settings  Privacy</li>
            </ul>
            <p className="leading-relaxed mb-12">
              Note: Blocking essential cookies may affect website functionality.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              Changes to This Policy
            </h2>
            <p className="leading-relaxed mb-8">
              We may update this Cookie Policy from time to time. Changes will be posted on this page with updated date.
            </p>

            <div className="border-t-2 border-gray-200 pt-12 mt-12">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Contact Us
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                If you have questions about this Cookie Policy, please contact:
              </p>
              <div className="space-y-4">
                <p className="text-xl">
                  Email: <a href="mailto:customercare@trustmaker.in" className="text-teal-600 font-bold hover:underline">
                    customercare@trustmaker.in
                  </a>
                </p>
                <p className="text-xl">
                  Phone: <a href="tel:9589542358" className="text-teal-600 font-bold hover:underline">
                    95895 42358
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}