// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

// const MENU_ITEMS = [
//   { label: "Home", href: "/" },
//   { label: "Projects", href: "/projects" },
//   { label: "About Us", href: "/about-us" },
//   { label: "Blogs", href: "/blogs" },
//   { label: "Contact Us", href: "/contact-us" },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [visible, setVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'

//   const mobileMenuRef = useRef(null);
//   const hamburgerRef = useRef(null);

//   const toggleMenu = () => setIsOpen(prev => !prev);

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("associateLoggedIn") === "true";
//     setIsLoggedIn(loggedIn);
//   }, []);

//   // Scroll hide/show logic
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setVisible(currentScrollY < lastScrollY || currentScrollY < 10);
//       setLastScrollY(currentScrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest(".profile-dropdown")) setShowDropdown(false);
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   // Close mobile menu on outside click
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (isOpen && mobileMenuRef.current && hamburgerRef.current &&
//           !mobileMenuRef.current.contains(event.target) &&
//           !hamburgerRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     if (isOpen) document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [isOpen]);

//   const handleLogout = () => {
//     localStorage.removeItem("associateLoggedIn");
//     window.location.reload();
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
//         visible ? "translate-y-0" : "-translate-y-full"
//       } bg-white shadow-lg`}
//     >
//       <div className="w-full mx-auto px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">

//           {/* Logo */}
//           <Link href="/" className="flex items-center flex-shrink-0">
//             <div className="relative w-48 h-16">
//               <Image
//                 src="/trustmaker.png"
//                 alt="Trustmaker Logo"
//                 fill
//                 className="object-contain object-left"
//                 priority
//               />
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center justify-center flex-1">
//             <div className="flex items-center gap-12">
//               {MENU_ITEMS.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="relative text-lg font-medium text-gray-900 hover:text-[#9C2F5A] transition group"
//                 >
//                   {item.label}
//                   <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#9C2F5A] transition-all duration-300 group-hover:w-full" />
//                   <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#9C2F5A]/30 blur-md transition-all duration-300 group-hover:w-full" />
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right: Profile Dropdown + Mobile Button */}
//           <div className="flex items-center gap-6">
//             {/* Desktop Profile with Toggle */}
//             <div className="hidden lg:block relative profile-dropdown">
//               <button
//                 onClick={() => setShowDropdown(!showDropdown)}
//                 className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900 font-medium transition"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//                 <span>{isLoggedIn ? "My Account" : "Account"}</span>
//                 <svg className={`w-4 h-4 transition-transform ${showDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>

//               {showDropdown && !isLoggedIn && (
//                 <div className="absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
//                   {/* Toggle Buttons */}
//                   <div className="flex border-b border-gray-200">
//                     <button
//                       onClick={() => setActiveTab('login')}
//                       className={`flex-1 py-3 text-center font-medium transition-all ${
//                         activeTab === 'login'
//                           ? 'bg-[#9C2F5A] text-white'
//                           : 'text-gray-700 hover:text-gray-900'
//                       }`}
//                     >
//                       Login
//                     </button>
//                     <button
//                       onClick={() => setActiveTab('register')}
//                       className={`flex-1 py-3 text-center font-medium transition-all ${
//                         activeTab === 'register'
//                           ? 'bg-[#9C2F5A] text-white'
//                           : 'text-gray-700 hover:text-gray-900'
//                       }`}
//                     >
//                       Join as Associate
//                     </button>
//                   </div>

//                   {/* Content based on active tab */}
//                   <div className="p-6">
//                     {activeTab === 'login' ? (
//                       <Link
//                         href="/auth/login"
//                         className="block w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-900 text-center rounded-xl transition"
//                         onClick={() => setShowDropdown(false)}
//                       >
//                         Go to Login →
//                       </Link>
//                     ) : (
//                       <Link
//                         href="/auth/signup"
//                         className="block w-full py-3 px-6 bg-[#9C2F5A] hover:bg-[#7A2448] text-white text-center rounded-xl transition shadow-lg"
//                         onClick={() => setShowDropdown(false)}
//                       >
//                         Join Now →
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Logged In State */}
//               {showDropdown && isLoggedIn && (
//                 <div className="absolute right-0 mt-3 w-64 bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
//                   <Link href="/dashboard" className="block px-6 py-4 text-gray-900 hover:bg-gray-100 transition">
//                     My Profile
//                   </Link>
//                   <button onClick={handleLogout} className="block w-full text-left px-6 py-4 text-red-600 hover:bg-red-50 transition">
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Hamburger */}
//             <button
//               ref={hamburgerRef}
//               onClick={toggleMenu}
//               className="lg:hidden text-3xl text-gray-900 focus:outline-none z-50 relative"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? "✕" : "☰"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <>
//           <div className="fixed inset-0 top-18 z-30 lg:hidden bg-black/30" />
//           <div
//             ref={mobileMenuRef}
//             className="fixed top-18 left-0 right-0 z-40 lg:hidden bg-white shadow-2xl animate-slideDown origin-top"
//           >
//             {/* Main Nav */}
//             <div className="px-2 py-6 border-b border-gray-200">
//               <nav className="space-y-3">
//                 {MENU_ITEMS.map((item) => {
//                   const isActive = window.location.pathname === item.href;
//                   return (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       onClick={() => setIsOpen(false)}
//                       className={`block text-xl font-medium transition-all duration-300 rounded-lg ${
//                         isActive
//                           ? "bg-[#9C2F5A] text-white py-3 px-6 shadow-sm"
//                           : "text-gray-900 hover:text-[#9C2F5A] hover:bg-gray-100 py-3 px-6"
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   );
//                 })}
//               </nav>
//             </div>

//             {/* Auth Section with Toggle in Mobile */}
//             <div className="px-8 py-4">
//               {!isLoggedIn && (
//                 <>
//                   <div className="flex border-b border-gray-200 mb-6">
//                     <button
//                       onClick={() => setActiveTab('login')}
//                       className={`flex-1 py-3 text-center font-medium transition ${
//                         activeTab === 'login' ? 'border-b-4 border-[#9C2F5A] text-[#9C2F5A]' : 'text-gray-700'
//                       }`}
//                     >
//                       Login
//                     </button>
//                     <button
//                       onClick={() => setActiveTab('register')}
//                       className={`flex-1 py-3 text-center font-medium transition ${
//                         activeTab === 'register' ? 'border-b-4 border-[#9C2F5A] text-[#9C2F5A]' : 'text-gray-700'
//                       }`}
//                     >
//                       Join as Associate
//                     </button>
//                   </div>

//                   <div className="mb-8">
//                     {activeTab === 'login' ? (
//                       <Link
//                         href="/auth/login"
//                         onClick={() => setIsOpen(false)}
//                         className="block w-full py-3 px-6 bg-[#9C2F5A] text-white text-center rounded-xl font-bold hover:bg-[#7A2448] transition"
//                       >
//                         Login Now →
//                       </Link>
//                     ) : (
//                       <Link
//                         href="/auth/signup"
//                         onClick={() => setIsOpen(false)}
//                         className="block w-full py-3 px-6 bg-[#9C2F5A] text-white text-center rounded-xl font-bold hover:bg-[#7A2448] transition"
//                       >
//                         Join as Associate →
//                       </Link>
//                     )}
//                   </div>
//                 </>
//               )}

//               {isLoggedIn && (
//                 <div className="space-y-5 pb-6 border-b border-gray-200">
//                   <Link
//                     href="/dashboard"
//                     onClick={() => setIsOpen(false)}
//                     className="block text-lg font-medium text-gray-900 hover:text-[#9C2F5A] transition"
//                   >
//                     My Profile
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="block text-lg font-medium text-red-600 hover:text-red-700 transition w-full text-left"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}

//               {/* Contact */}
//               <div className="mt-6 flex flex-col sm:flex-row gap-4 text-gray-700 text-md">
//                 <div className="flex items-center gap-3">
//                   <PhoneIcon className="w-5 h-5 text-[#9C2F5A]" />
//                   <span>+91-9826042358</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <EnvelopeIcon className="w-5 h-5 text-[#9C2F5A]" />
//                   <span>customercare@trustmaker.in</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// }

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
  const [isMenuVisible, setIsMenuVisible] = useState(false); // controls toggle
  const [isAnimatingOut, setIsAnimatingOut] = useState(false); // keeps panel during close animation
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    if (isMenuVisible) {
      // Start closing animation
      setIsAnimatingOut(true);
    } else {
      // Open immediately
      setIsMenuVisible(true);
      setIsAnimatingOut(false);
    }
  };

  // Handle animation end (for closing)
  const handleAnimationEnd = () => {
    if (isAnimatingOut) {
      setIsMenuVisible(false);
      setIsAnimatingOut(false);
    }
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("associateLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Scroll hide/show logic
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
      if (!e.target.closest(".profile-dropdown")) setShowDropdown(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if ((isMenuVisible || isAnimatingOut) && mobileMenuRef.current && hamburgerRef.current &&
          !mobileMenuRef.current.contains(event.target) &&
          !hamburgerRef.current.contains(event.target)) {
        setIsAnimatingOut(true);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuVisible, isAnimatingOut]);

  const handleLogout = () => {
    localStorage.removeItem("associateLoggedIn");
    window.location.reload();
  };

  // Determine if panel should be rendered
  const shouldRenderMenu = isMenuVisible || isAnimatingOut;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-lg`}
    >
      <div className="w-full mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-12">
              {MENU_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-lg font-medium text-gray-900 hover:text-[#9C2F5A] transition group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#9C2F5A] transition-all duration-300 group-hover:w-full" />
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#9C2F5A]/30 blur-md transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Profile + Mobile Button */}
          <div className="flex items-center gap-6">
            {/* Desktop Profile */}
            <div className="hidden lg:block relative profile-dropdown">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900 font-medium transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{isLoggedIn ? "My Account" : "Account"}</span>
                <svg className={`w-4 h-4 transition-transform ${showDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showDropdown && !isLoggedIn && (
                <div className="absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="flex border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab('login')}
                      className={`flex-1 py-3 text-center font-medium transition-all ${
                        activeTab === 'login'
                          ? 'bg-[#9C2F5A] text-white'
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setActiveTab('register')}
                      className={`flex-1 py-3 text-center font-medium transition-all ${
                        activeTab === 'register'
                          ? 'bg-[#9C2F5A] text-white'
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      Join as Associate
                    </button>
                  </div>

                  <div className="p-6">
                    {activeTab === 'login' ? (
                      <Link
                        href="/auth/login"
                        className="block w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-900 text-center rounded-xl transition"
                        onClick={() => setShowDropdown(false)}
                      >
                        Go to Login →
                      </Link>
                    ) : (
                      <Link
                        href="/auth/signup"
                        className="block w-full py-3 px-6 bg-[#9C2F5A] hover:bg-[#7A2448] text-white text-center rounded-xl transition shadow-lg"
                        onClick={() => setShowDropdown(false)}
                      >
                        Join Now →
                      </Link>
                    )}
                  </div>
                </div>
              )}

              {showDropdown && isLoggedIn && (
                <div className="absolute right-0 mt-3 w-64 bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
                  <Link href="/dashboard" className="block px-6 py-4 text-gray-900 hover:bg-gray-100 transition">
                    My Profile
                  </Link>
                  <button onClick={handleLogout} className="block w-full text-left px-6 py-4 text-red-600 hover:bg-red-50 transition">
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              ref={hamburgerRef}
              onClick={toggleMenu}
              className="lg:hidden text-3xl text-gray-900 focus:outline-none z-50 relative"
              aria-label="Toggle menu"
            >
              {isMenuVisible || isAnimatingOut ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Open & Close Animation */}
      {shouldRenderMenu && (
        <>
          {/* Overlay */}
          <div className={`fixed inset-0 top-16 z-30 lg:hidden bg-black/30 transition-opacity duration-300 ${
            isAnimatingOut ? 'opacity-0' : 'opacity-100'
          }`} />

          {/* Menu Panel */}
          <div
            ref={mobileMenuRef}
            className={`fixed top-16 left-0 right-0 z-40 lg:hidden bg-white shadow-2xl origin-top transition-all duration-300 ease-in-out ${
              isAnimatingOut ? 'animate-slideUp scale-y-0 opacity-0' : 'animate-slideDown scale-y-100 opacity-100'
            }`}
            onAnimationEnd={handleAnimationEnd}
          >
            {/* Main Nav */}
            <div className="px-2 py-6 border-b border-gray-200">
              <nav className="space-y-3">
                {MENU_ITEMS.map((item) => {
                  const isActive = window.location.pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsAnimatingOut(true)}
                      className={`block text-xl font-medium transition-all duration-300 rounded-lg ${
                        isActive
                          ? "bg-[#9C2F5A] text-white py-3 px-6 shadow-sm"
                          : "text-gray-900 hover:text-[#9C2F5A] hover:bg-gray-100 py-3 px-6"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Auth Section */}
            <div className="px-8 py-4">
              {!isLoggedIn && (
                <>
                  <div className="flex border-b border-gray-200 mb-6">
                    <button
                      onClick={() => setActiveTab('login')}
                      className={`flex-1 py-3 text-center font-medium transition ${
                        activeTab === 'login' ? 'border-b-4 border-[#9C2F5A] text-[#9C2F5A]' : 'text-gray-700'
                      }`}
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setActiveTab('register')}
                      className={`flex-1 py-3 text-center font-medium transition ${
                        activeTab === 'register' ? 'border-b-4 border-[#9C2F5A] text-[#9C2F5A]' : 'text-gray-700'
                      }`}
                    >
                      Join as Associate
                    </button>
                  </div>

                  <div className="mb-8">
                    {activeTab === 'login' ? (
                      <Link
                        href="/auth/login"
                        onClick={() => setIsAnimatingOut(true)}
                        className="block w-full py-3 px-6 bg-[#9C2F5A] text-white text-center rounded-xl font-bold hover:bg-[#7A2448] transition"
                      >
                        Login Now →
                      </Link>
                    ) : (
                      <Link
                        href="/auth/signup"
                        onClick={() => setIsAnimatingOut(true)}
                        className="block w-full py-3 px-6 bg-[#9C2F5A] text-white text-center rounded-xl font-bold hover:bg-[#7A2448] transition"
                      >
                        Join as Associate →
                      </Link>
                    )}
                  </div>
                </>
              )}

              {isLoggedIn && (
                <div className="space-y-5 pb-6 border-b border-gray-200">
                  <Link
                    href="/dashboard"
                    onClick={() => setIsAnimatingOut(true)}
                    className="block text-lg font-medium text-gray-900 hover:text-[#9C2F5A] transition"
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block text-lg font-medium text-red-600 hover:text-red-700 transition w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}

              {/* Contact */}
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