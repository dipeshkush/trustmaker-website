'use client';

import { useState } from 'react';

const FAQS = [
  {
    question: 'Why should I invest with Trustmaker?',
    answer:
      'Trustmaker offers verified, RERA-approved residential and commercial projects with zero brokerage, transparent pricing, and complete support till possession.',
  },
  {
    question: 'Are all properties legally verified?',
    answer:
      'Yes. Every property listed is legally verified, RERA registered, and approved by leading banks to ensure a safe purchase.',
  },
  {
    question: 'Do you provide home loan assistance?',
    answer:
      'Yes, we assist with home loans from top banks and NBFCs, helping you get the best interest rates and smooth approvals.',
  },
  {
    question: 'Do you arrange site visits?',
    answer:
      'Absolutely. We arrange site visits at your convenience and guide you through every detail of the project.',
  },
  {
    question: 'Is your service suitable for first-time buyers?',
    answer:
      'Yes. We specialize in helping first-time buyers by offering end-to-end guidance, from property selection to registry.',
  },
  {
    question: 'Do you charge any brokerage or hidden fees?',
    answer:
      'No. Our services are completely free for buyers. We do not charge any brokerage or hidden costs at any stage.',
  },
];

export default function FAQPage() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-8">

        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block pb-5 text-center">
            Frequently Asked <span className="text-[#9C2F5A]">Questions</span>
            <span className="absolute left-1/2 bottom-0 w-28 h-1 bg-[#9C2F5A] -translate-x-1/2 rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl text-lg mb-8">
            Find answers to common questions about our services and property listings.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQS.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300
                  ${isOpen
                    ? 'border-[#9C2F5A] bg-[#F9F2F5]'
                    : 'border-[#E7C2D1]'
                  } hover:shadow-md`}
              >
                {/* Question */}
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Q badge */}
                    <span className="bg-[#9C2F5A] text-white text-sm font-semibold px-3 py-1 rounded-md">
                      Q{index + 1}
                    </span>

                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>

                  {/* Icon */}
                  <span
                    className={`text-3xl font-light transition-all duration-300
                      ${isOpen ? 'text-[#9C2F5A] rotate-180' : 'text-[#E7C2D1]'}
                    `}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Smooth Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-[88px] text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
