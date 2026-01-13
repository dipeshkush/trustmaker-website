import Image from 'next/image';

export default function CookiePolicy() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-24 min-h-screen md:min-h-[60vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/bg.webp"
          alt="Trustmaker Background"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-5">
          <h1 className="text-5xl font-bold leading-tight py-4 mb-4 text-white drop-shadow-lg">
            Cookie Policy
          </h1>
          <p className="text-xl max-w-4xl mx-auto text-gray-100 leading-relaxed drop-shadow-md">
            Welcome to Trustmaker Infrareal Pvt. Ltd., this Cookie Policy outlines the rules and practices regarding the use of cookies and similar technologies on our website and platform.
            <br className="hidden md:block" />
            We use cookies to enhance your browsing experience, ensure proper functioning of the website, analyze site performance, and provide a better user experience.
          </p>
        </div>
      </section>

      {/* Main Content – Exact same structure & classes as your Terms page */}
      <section className="py-8 bg-gray-50">
        <div className="w-full mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 prose prose-lg text-gray-700 max-w-none">
            <p className="text-lg leading-relaxed mb-10">
              At Trustmaker Infrareal Pvt. Ltd., we are committed to protecting your privacy while providing a smooth and secure online experience.
            </p>
            <p className="text-lg leading-relaxed mb-10">
              This Cookie Policy explains what cookies are, how we use them on our website, what types we use, and how you can manage them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What are Cookies?
            </h2>
            <p className="text-lg leading-relaxed mb-10">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember certain information about your visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              How We Use Cookies
            </h2>
            <p className="text-lg mb-6">
              We use cookies for the following purposes:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-lg mb-10">
              <li>
                To enable core website functionality such as navigation, login sessions, and form submissions.
              </li>
              <li>
                To analyze how visitors use our website so we can improve performance, content, and user experience.
              </li>
              <li>
                To remember your preferences (language, location, display settings) and make your next visit more convenient.
              </li>
              <li>
                To ensure security and prevent fraudulent activity on the platform.
              </li>
              <li>
                To measure and optimize the effectiveness of our services.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Types of Cookies We Use
            </h2>
            <ol className="list-decimal pl-6 space-y-4 text-lg mb-10">
              <li>
                <strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be disabled.
              </li>
              <li>
                <strong>Performance & Analytics Cookies:</strong> Help us understand how users interact with the site (e.g., page views, time spent). Data is anonymized.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences to improve usability on future visits.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Managing Cookies
            </h2>
            <p className="text-lg leading-relaxed mb-10">
              You can control or delete cookies through your browser settings. However, disabling essential cookies may affect the functionality of the website.
            </p>

            <div className="border-t-2 border-gray-200 pt-12 mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have any questions about this Cookie Policy or our use of cookies, please feel free to contact us:
              </p>
              <div className="space-y-4 text-lg">
                <p>
                  Email:{' '}
                  <a
                    href="mailto:customercare@trustmaker.in"
                    className="text-teal-600 font-semibold hover:underline"
                  >
                    customercare@trustmaker.in
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a
                    href="tel:+919589542358"
                    className="text-teal-600 font-semibold hover:underline"
                  >
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