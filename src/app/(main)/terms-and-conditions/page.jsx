import Image from 'next/image';
import Link from 'next/link';

export default function TermsAndConditions() {
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
            Terms and Conditions
          </h1>
          <p className="text-xl max-w-4xl mx-auto text-gray-100 leading-relaxed drop-shadow-md">
            Welcome to Trustmaker Infrareal Pvt. Ltd. – your trusted partner in real estate solutions in Indore. 
            <br className="hidden md:block" />
            These Terms and Conditions govern your access to and use of our platform, including viewing properties, posting listings, managing accounts, and all related services.
          </p>
        </div>
      </section>

      {/* Main Content – Same structure as About Us */}
    <section className="py-8 bg-gray-50">
        <div className="w-full mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 prose prose-lg text-gray-700 max-w-none">
            <p className="text-lg leading-relaxed mb-10">
              Welcome to Trustmaker Infrareal Pvt. Ltd. These Terms and Conditions outline the rules and regulations to be adhered to while using our services.
            </p>
            <p className="text-lg leading-relaxed mb-10">
              Here, we provide an online platform for users to view, post, and manage property listings.
              To access our services, users are required to create an account.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              User Instructions
            </h2>
            <p className="text-lg mb-6">
              Any property enlister who visits or uses the website shall agree to the following rules:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-lg mb-10">
              <li>
                Users who post properties must provide accurate and truthful information about the properties.
              </li>
              <li>
                When listing their properties, users should be aware that any actions or activities they undertake during the listing process, as well as any actions taken afterward, are solely their responsibility.
              </li>
              <li>
                Once the property is enlisted, Trustmaker will grant a licence to use, display, and distribute the content on the website.
              </li>
              <li>
                The users registering on Trustmaker Infrareal Pvt. Ltd. are liable for maintaining the confidentiality of their account information.
              </li>
              <li>
                Trustmaker Infrareal Pvt. Ltd. reserves the right to remove any listings that violate these terms and conditions or are otherwise deemed inappropriate.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              2. Eligibility
            </h2>
            <p className="text-lg leading-relaxed mb-10">
              To use this website, you must be at least 18 years old. By using the site, you affirm that you meet this age requirement and are legally capable of entering into binding agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              3. Use of the Website
            </h2>
            <p className="text-lg leading-relaxed mb-10">
              Users are required to ensure that all information they provide on the website is accurate, complete, and kept up-to-date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              4. Fees and Payments
            </h2>
            <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8">
              Listing Fees
            </h3>
            <ol className="list-decimal pl-6 space-y-4 text-lg mb-8">
              <li>
                Every user using this platform is obligated to pay a sum fee of 2% (Taxes will be extra) out of the profit earned.
              </li>
              <li>
                Listings of properties available for rent or sale are required to be posted on the website.
              </li>
            </ol>
            <p className="text-lg leading-relaxed mb-6">
              Trustmaker Infrareal Pvt Ltd is a paid platform for the users to post, manage and maintain their properties.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Payment Terms:</strong> All payments must be made in accordance with the payment terms specified on the website.
            </p>

            <div className="border-t-2 border-gray-200 pt-12 mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have any questions about these Terms and Conditions, please feel free to contact us:
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