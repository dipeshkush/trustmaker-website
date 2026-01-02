'use client';

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection({ showForm = true }) {
  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-6 lg:px-8">

        {/* ===== Section Heading ===== */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 relative inline-block">
            Get in <span className="text-[#9C2F5A]">Touch</span>
            <span className="absolute left-1/2 -bottom-3 w-20 h-[3px] bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Reach out to us for property enquiries, site visits, or any assistance.
            Our team is always ready to help you.
          </p>
        </div>

        {/* ===== Content ===== */}
        <div
          className={`grid grid-cols-1 ${
            showForm ? 'lg:grid-cols-2' : ''
          } gap-16 items-start`}
        >
          {/* LEFT: Contact Info */}
          <div className="space-y-8">
            <InfoItem
              icon={<Phone />}
              title="Phone"
              content={
                <a
                  href="tel:+919826042358"
                  className="hover:text-[#9C2F5A] transition"
                >
                  +91 9826042358
                </a>
              }
            />

            <InfoItem
              icon={<Mail />}
              title="Email"
              content={
                <a
                  href="mailto:customercare@trustmaker.in"
                  className="hover:text-[#9C2F5A] transition"
                >
                  customercare@trustmaker.in
                </a>
              }
            />

            <InfoItem
              icon={<MapPin />}
              title="Office Address"
              content="Office No. 492, Netaji Subhash Marg, Bada Ganpati, Indore, Madhya Pradesh, India, 452005"
            />

            <InfoItem
              icon={<Clock />}
              title="Working Hours"
              content={
                <>
                  Monday – Saturday: 10:00 AM – 7:00 PM <br />
                  Sunday: 11:00 AM – 5:00 PM
                </>
              }
            />
          </div>

          {/* RIGHT: Form */}
          {showForm && (
            <div>
              <ContactForm />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


function ContactForm() {
  return (
    <form className="bg-gray-50 p-8 rounded-3xl shadow-lg space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Full Name *" type="text" />
        <Input label="Phone Number *" type="tel" />
      </div>

      <Input label="Email Address" type="email" />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          rows={4}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#9C2F5A] focus:outline-none resize-none"
          placeholder="Tell us about your requirement..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#9C2F5A] text-white font-semibold text-lg py-3 rounded-xl hover:bg-[#8a274f] transition shadow-lg flex items-center justify-center gap-3"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );
}


function InfoItem({ icon, title, content }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-10 h-10 bg-[#9C2F5A]/10 rounded-xl flex items-center justify-center text-[#9C2F5A] flex-shrink-0">
          {icon}
        </div>

        {/* Content */}
        <div>
          <h4 className="text-md font-semibold text-gray-900">
            {title}
          </h4>
          <p className="text-gray-600 mt-1 leading-relaxed text-sm">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}


function Input({ label, type }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        required={label.includes('*')}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#9C2F5A] focus:outline-none"
      />
    </div>
  );
}
