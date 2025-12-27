'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-20 h-16">
              <Image
                src="/trustmaker.png"
                alt="Trustmaker Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`text-2xl font-extrabold transition-colors duration-300 ${
              scrolled ? 'text-gray-600' : 'text-gray-50 drop-shadow-2xl'
            }`}>
              Trustmaker
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-16">
            {['Home', 'Projects', 'About Us', 'Blogs', 'Contact Us'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className={`relative text-lg font-medium transition-colors duration-300 group ${
                  scrolled 
                    ? 'text-gray-700 hover:text-[#9C2F5A]' 
                    : 'text-white hover:text-[#9C2F5A]'
                }`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#9C2F5A] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden text-3xl transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
            }`}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 shadow-2xl transition-all duration-300 ${
          scrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-md'
        }`}>
          <div className="py-8 space-y-6 text-center">
            {['Home', 'Projects', 'About Us', 'Blogs', 'Contact Us'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsOpen(false)}
                className={`block text-xl font-medium ${scrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}