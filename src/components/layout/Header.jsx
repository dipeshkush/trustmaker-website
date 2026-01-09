'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Ref for mobile menu panel
  const mobileMenuRef = useRef(null);

  // Login status
  useEffect(() => {
    const loggedIn = localStorage.getItem("associateLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Hide on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-dropdown")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Outside click for mobile menu - Proper function
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem("associateLoggedIn");
    window.location.reload();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-black shadow-lg`}
    >
      <div className="w-full mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 ">

          {/* LEFT: Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="relative w-48 h-16">
              <Image
                src="/trustmaker.png"
                alt="Trustmaker Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* CENTER: Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-12">
              {MENU_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-lg font-medium text-white hover:text-teal-300 transition group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-teal-400 transition-all duration-300 group-hover:w-full" />
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-teal-400/30 blur-md transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: Profile + Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Desktop Profile Dropdown */}
            <div className="hidden lg:block relative profile-dropdown">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{isLoggedIn ? "My Account" : "Login"}</span>
                <svg className={`w-4 h-4 transition-transform ${showDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 mt-3 w-64 bg-black/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                  <div className="py-2">
                    {isLoggedIn ? (
                      <>
                        <Link href="/dashboard" className="flex items-center gap-4 px-6 py-4 text-white hover:bg-white/10 transition">
                          My Profile
                        </Link>
                        <button onClick={handleLogout} className="flex items-center gap-4 w-full text-left px-6 py-4 text-red-400 hover:bg-red-900/30 transition">
                         Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link href="/auth/login" className="flex items-center gap-4 px-6 py-4 text-white hover:bg-teal-900/30 hover:text-teal-300 transition">
                          Login
                        </Link>
                        <Link href="/auth/signup" className="flex items-center gap-4 px-6 py-4 text-white hover:bg-[#9C2F5A]/30 transition">
                          Join as Associate
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-3xl text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Slide-Down Menu */}
      {isOpen && (
        <>
          {/* Overlay - Visual blur */}
          <div 
            className="fixed inset-0 top-18 z-30 lg:hidden bg-black/30"
          />

          {/* Menu Panel - Ref attached for outside click */}
          <div 
            ref={mobileMenuRef}
            className="fixed top-18 left-0 right-0 z-40 lg:hidden bg-white shadow-2xl animate-slideDown origin-top"
          >
            {/* Main Navigation Links */}
            <div className="px-2 py-6 border-b border-gray-200">
              <nav className="space-y-3">
                {MENU_ITEMS.map((item) => {
                  const isActive = window.location.pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-xl font-medium transition-all duration-300 rounded-lg ${
                        isActive
                          ? "bg-[#9C2F5A] text-white py-3 px-6 shadow-sm"
                          : "text-gray-800 hover:text-[#9C2F5A] hover:bg-gray-50 py-3 px-6"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Section: Auth + Simple Contact */}
            <div className="px-8 py-6">
              {/* Auth Links */}
              <div className="space-y-5 pb-6 border-b border-gray-200">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-medium text-gray-800 hover:text-[#9C2F5A] transition"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block text-lg font-medium text-red-600 hover:text-red-700 transition w-full text-left"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-medium text-gray-800 hover:text-[#9C2F5A] transition"
                    >
                      Login

                    </Link>
                    <Link
                      href="/auth/signup"
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-semibold text-[#9C2F5A] hover:opacity-80 transition"
                    >
                      Join as Associate →
                    </Link>
                  </>
                )}
              </div>

              {/* Simple Contact Row - Phone & Email Only */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 text-gray-700 text-md">
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-[#9C2F5A]" />
                  <span>+91-9826042358</span>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-[#9C2F5A]" />
                  <span>customercare@trustmaker.in</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </nav>
  );
}