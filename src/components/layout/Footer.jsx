import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-6">
      <div className="w-full mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Left: About the Company */}
          <div className="space-y-6 ">
            <div>
              <h3 className="text-lg text-gray-50">Trustmaker Infrareal Pvt. Ltd.</h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              We are a dedicated platform providing verified, transparent, and detailed information on premium residential and commercial properties across India. Our mission is to empower buyers and investors with reliable data for confident decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div className='ml-4'>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition">Projects</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link href="/blogs" className="text-gray-300 hover:text-white transition">Blogs</Link></li>
              <li><Link href="/testimonials" className="text-gray-300 hover:text-white transition">Testimonials</Link></li>
              {/* <li><Link href="/team" className="text-gray-300 hover:text-white transition">Team</Link></li> */}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Company</h3>
            <ul className="space-y-4">
              {/* <li><Link href="/vision-mission" className="text-gray-300 hover:text-white transition">Mission & Vision</Link></li> */}
              <li><Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="text-gray-300 hover:text-white transition">Cookie Policy</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-200">Get in Touch</h3>
            <div className="space-y-3 text-gray-300">
              <p>customercare@trustmaker.in</p>
              <p>+91-9826042358</p>
              <p>Office No. 492, Netaji Subhash Marg , Bada Ganpati, Indore, Madhya Pradesh, India, 452005</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-4 border-t border-gray-600 text-center text-gray-400 text-sm">
          © 2025 Trustmaker Infrareal Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}