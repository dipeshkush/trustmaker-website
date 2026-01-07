import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 w-full mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold py-4 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl max-w-4xl mx-auto text-gray-100">
            Rules and regulations for using Trustmaker Infrareal Pvt. Ltd. services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-gray-50">
        <div className="w-full mx-auto px-6 prose prose-lg text-gray-700">
          <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-16">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Welcome to Trustmaker Infrareal Pvt. Ltd.
            </h2>
            <p className="leading-relaxed mb-8">
              These Terms and Conditions outline the rules and regulations for using our services. We provide an online platform for users to view, post, and manage property listings. To access our services, users are required to create an account.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              1. User Instructions
            </h2>
            <p className="leading-relaxed mb-8">
              Any property enlister who visits or uses the website must agree to the following rules:
            </p>
            <ol className="list-roman pl-8 space-y-4 mb-8 text-lg">
              <li>Users who post properties must provide accurate and truthful information about the properties.</li>
              <li>When listing their properties, users are solely responsible for any actions or activities undertaken during and after the listing process.</li>
              <li>Once the property is listed, Trustmaker Infrareal Pvt. Ltd. is granted a license to use, display, and distribute the content on the website.</li>
              <li>Users registering on the platform are liable for maintaining the confidentiality of their account information.</li>
              <li>Trustmaker Infrareal Pvt. Ltd. reserves the right to remove any listings that violate these terms and conditions or are otherwise deemed inappropriate.</li>
            </ol>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              2. Eligibility
            </h2>
            <p className="leading-relaxed mb-8">
              To use this website, you must be at least 18 years old. By using the site, you affirm that you meet this age requirement and are legally capable of entering into binding agreements.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              3. Use of the Website
            </h2>
            <p className="leading-relaxed mb-8">
              Users are required to ensure that all information provided on the website is accurate, complete, and kept up-to-date.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              4. Fees and Payments
            </h2>
            <p className="leading-relaxed mb-6 font-semibold">
              Listing Fees:
            </p>
            <ol className="list-decimal pl-8 space-y-4 mb-8 text-lg">
              <li>Every user using this platform is obligated to pay a fee of <strong>2% (Taxes extra)</strong> out of the profit earned.</li>
              <li>Listings of properties available for rent or sale must be posted on the website.</li>
            </ol>
            <p className="leading-relaxed mb-8">
              Trustmaker Infrareal Pvt. Ltd. is a paid platform for users to post, manage, and maintain their properties.
            </p>
            <p className="leading-relaxed mb-12">
              <strong>Payment Terms:</strong> All payments must be made in accordance with the payment terms specified on the website.
            </p>

            <div className="border-t-2 border-gray-200 pt-12">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                If you have any questions about these Terms and Conditions, please contact us at:
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