'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="w-full mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Left: About the Company */}
          <div className="space-y-6">
            <div>
              <Image
                src="/trustmaker.png"
                alt="Trustmaker Logo"
                width={100}
                height={20}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Verified, transparent property information across India—empowering confident buying and investment decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition">Projects</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link href="/blogs" className="text-gray-300 hover:text-white transition">Blogs</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-gray-300 hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info with Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Get in Touch</h3>
            <div className="space-y-5 text-gray-300">
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:customercare@trustmaker.in" className="hover:text-teal-400 transition">
                  customercare@trustmaker.in
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+919826042358" className="hover:text-teal-400 transition">
                  +91-9826042358
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <p className="leading-relaxed">
                  Office No. 492, Netaji Subhash Marg,<br />
                  Bada Ganpati, Indore,<br />
                  Madhya Pradesh, India, 452005
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright + Designed By */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-gray-400 text-sm">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="text-center md:text-left">
              © 2025 Trustmaker Infrareal Pvt. Ltd. All rights reserved.
            </p>

            <p className="mt-4 md:mt-0 text-center md:text-right">
              Designed by{' '}
              <a
                href="https://webseeder.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 font-medium transition"
              >
                Webseeder Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}