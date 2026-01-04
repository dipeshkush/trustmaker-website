'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
                <span>{isLoggedIn ? "My Account" : "Associate"}</span>
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
                          <span className="text-xl">👤</span> My Profile
                        </Link>
                        <button onClick={handleLogout} className="flex items-center gap-4 w-full text-left px-6 py-4 text-red-400 hover:bg-red-900/30 transition">
                          <span className="text-xl">🚪</span> Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link href="/auth/login" className="flex items-center gap-4 px-6 py-4 text-white hover:bg-teal-900/30 hover:text-teal-300 transition">
                          <span className="text-xl">🔑</span> Associate Login
                        </Link>
                        <Link href="/auth/signup" className="flex items-center gap-4 px-6 py-4 text-white hover:bg-[#9C2F5A]/30 transition">
                          <span className="text-xl">📝</span> Join as Associate
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="py-8 space-y-6 text-center">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-medium text-white hover:text-teal-300 transition"
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-white/20 pt-6 mt-6 px-8">
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" className="block py-3 text-xl text-white hover:text-teal-300">
                    👤 My Profile
                  </Link>
                  <button onClick={handleLogout} className="block py-3 text-xl text-red-400 hover:text-red-300 w-full">
                    🚪 Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth/login" className="block py-3 text-xl text-white hover:text-teal-300">
                    🔑 Associate Login
                  </Link>
                  <Link href="/auth/signup" className="block py-3 text-xl text-white hover:text-[#9C2F5A]">
                    📝 Join as Associate
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}