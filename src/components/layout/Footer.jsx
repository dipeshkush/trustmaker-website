import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="w-full mx-auto px-6">
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

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Get in Touch</h3>
            <div className="space-y-3 text-gray-300">
              <p>customercare@trustmaker.in</p>
              <p>+91-9826042358</p>
              <p>Office No. 492, Netaji Subhash Marg,<br />Bada Ganpati, Indore,<br />Madhya Pradesh, India, 452005</p>
            </div>
          </div>
        </div>

        {/* Copyright + Designed By */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 Trustmaker Infrareal Pvt. Ltd. All rights reserved.</p>
          
          <p className="mt-4 md:mt-0">
            Designed by {'  '}
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
    </footer>
  );
}