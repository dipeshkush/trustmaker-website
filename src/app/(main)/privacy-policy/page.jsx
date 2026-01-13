import Image from 'next/image';

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-xl max-w-4xl mx-auto text-gray-100 leading-relaxed drop-shadow-md">
            Welcome to Trustmaker Infrareal Pvt. Ltd. – your trusted partner in real estate solutions in Indore. 
            <br className="hidden md:block" />
            This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our services.
          </p>
        </div>
      </section>

      {/* Main Content – Exact same structure & classes as your Terms page */}
      <section className="py-8 bg-gray-50">
        <div className="w-full mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 prose prose-lg text-gray-700 max-w-none">
            <p className="text-lg leading-relaxed mb-10">
              Welcome to Trustmaker Infrareal Pvt. Ltd. This Privacy Policy outlines how we handle your personal information when you use our website, mobile platform, or any of our services.
            </p>
            <p className="text-lg leading-relaxed mb-10">
              We are committed to protecting your privacy and ensuring that your personal data is handled responsibly, securely, and in compliance with applicable laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Information We Collect
            </h2>
            <p className="text-lg mb-6">
              We may collect the following types of information:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-lg mb-10">
              <li>
                Personal Information: Name, email address, phone number, and other contact details you provide when registering, posting properties, or contacting us.
              </li>
              <li>
                Property Information: Details about properties you list or inquire about, including images, descriptions, location, and pricing.
              </li>
              <li>
                Usage Data: Information about how you interact with our website (IP address, browser type, pages visited, time spent, referral sources).
              </li>
              <li>
                Cookies & Similar Technologies: As described in our Cookie Policy.
              </li>
              <li>
                Payment Information: If applicable, billing details processed securely through third-party payment gateways (we do not store full card details).
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              How We Use Your Information
            </h2>
            <p className="text-lg leading-relaxed mb-10">
              We use the collected information for the following purposes:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-lg mb-10">
              <li>
                To provide, maintain, and improve our services.
              </li>
              <li>
                To verify your identity and prevent fraud.
              </li>
              <li>
                To communicate with you (respond to inquiries, send updates, notifications).
              </li>
              <li>
                To display relevant property listings and personalized recommendations.
              </li>
              <li>
                To comply with legal obligations and enforce our Terms and Conditions.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Sharing of Information
            </h2>
            <p className="text-lg leading-relaxed mb-10">
              We do not sell your personal information. We may share your data only in the following limited cases:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-lg mb-10">
              <li>
                With service providers who assist us in operating the website (hosting, analytics, payment processing) under strict confidentiality.
              </li>
              <li>
                When required by law, court order, or government request.
              </li>
              <li>
                To protect the rights, property, or safety of Trustmaker, our users, or the public.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Data Security
            </h2>
            <p className="text-lg leading-relaxed mb-10">
              We implement reasonable security measures to protect your information from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Your Rights
            </h2>
            <p className="text-lg leading-relaxed mb-10">
              You have the right to access, correct, update, or request deletion of your personal information. You may also withdraw consent or object to certain processing activities. To exercise these rights, please contact us.
            </p>

            <div className="border-t-2 border-gray-200 pt-12 mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please feel free to contact us:
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