import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 w-full mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-8">
            Privacy Policy
          </h1>
          <p className="text-xl max-w-4xl mx-auto text-gray-100">
            Your privacy is important to us at Trustmaker Infrareal Pvt. Ltd.
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
              This Privacy Policy outlines how we handle your information when you visit our website, including any related mobile sites or applications. Please review this policy carefully. If you do not agree with its terms, please refrain from accessing the Site.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              Information Collection
            </h2>
            <p className="leading-relaxed mb-8">
              We collect personal information from users who create accounts and post property listings, including:
            </p>
            <ul className="list-disc pl-8 space-y-3 mb-8 text-lg">
              <li>Name</li>
              <li>Contact details (phone number, email)</li>
              <li>Property information (location, type, price, description, images)</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              Disclosure of Information
            </h2>
            <p className="leading-relaxed mb-8">
              We may share your information with third parties only when necessary to:
            </p>
            <ul className="list-disc pl-8 space-y-3 mb-8 text-lg">
              <li>Provide our services (e.g., property inquiries, site visits)</li>
              <li>Comply with legal obligations or government requests</li>
              <li>Protect the rights, property, or safety of Trustmaker Infrareal, our users, or others</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              Prohibited Activities
            </h2>
            <p className="leading-relaxed mb-8">
              By using this website, you agree not to:
            </p>
            <ul className="list-disc pl-8 space-y-3 mb-8 text-lg">
              <li>Use the website for any illegal purpose</li>
              <li>Post false or misleading property listings</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Engage in any activity that interferes with the website's functionality</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              Indemnification
            </h2>
            <p className="leading-relaxed mb-8">
              Users agree to protect and hold Trustmaker Infrareal Pvt. Ltd., its affiliates, officers, agents, and employees harmless from any claims, liabilities, damages, and expenses resulting from their use of the website.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              Limitation of Liability
            </h2>
            <p className="leading-relaxed mb-8">
              We are not responsible for any damages resulting from using or being unable to use the website, including direct, indirect, incidental, punitive, and consequential damages.
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-6 mt-12">
              Changes to This Policy
            </h2>
            <p className="leading-relaxed mb-12">
              We may update this Privacy Policy periodically. Users will be notified of significant changes via email or a prominent notice on the website. Continued use of the site after changes constitutes acceptance of the updated policy.
            </p>

            <div className="border-t-2 border-gray-200 pt-12">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <p className="text-xl leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-8 space-y-4">
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