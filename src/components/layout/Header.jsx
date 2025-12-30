// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
//     }`}>
//       <div className="w-full mx-auto px-6 py-2">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-4">
//             <div className="relative w-20 h-16">
//               <Image
//                 src="/trustmaker.png"
//                 alt="Trustmaker Logo"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             <span className={`text-2xl font-extrabold transition-colors duration-300 ${
//               scrolled ? 'text-gray-600' : 'text-gray-50 drop-shadow-2xl'
//             }`}>
//               Trustmaker
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-16">
//             {['Home', 'Projects', 'About Us', 'Blogs', 'Contact Us'].map((item) => (
//               <Link
//                 key={item}
//                 href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
//                 className={`relative text-lg font-medium transition-colors duration-300 group ${
//                   scrolled 
//                     ? 'text-gray-700 hover:text-[#9C2F5A]' 
//                     : 'text-white hover:text-[#9C2F5A]'
//                 }`}
//               >
//                 {item}
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#9C2F5A] transition-all duration-300 group-hover:w-full" />
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className={`lg:hidden text-3xl transition-colors duration-300 ${
//               scrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
//             }`}
//           >
//             {isOpen ? '✕' : '☰'}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className={`lg:hidden absolute top-full left-0 right-0 shadow-2xl transition-all duration-300 ${
//           scrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-md'
//         }`}>
//           <div className="py-8 space-y-6 text-center">
//             {['Home', 'Projects', 'About Us', 'Blogs', 'Contact Us'].map((item) => (
//               <Link
//                 key={item}
//                 href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
//                 onClick={() => setIsOpen(false)}
//                 className={`block text-xl font-medium ${scrolled ? 'text-gray-800' : 'text-white'}`}
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Check login status
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('associateLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.profile-dropdown')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('associateLoggedIn');
    setIsLoggedIn(false);
    setShowDropdown(false);
    window.location.reload();
  };

  const menuItems = ['Home', 'Projects', 'About Us', 'Blogs', 'Contact Us'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
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
              scrolled ? 'text-gray-800' : 'text-white drop-shadow-2xl'
            }`}>
              Trustmaker
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-11">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className={`relative text-lg font-medium transition-all duration-300 group pb-1 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-[#9C2F5A]' 
                    : 'text-white hover:text-[#9C2F5A]'
                }`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#9C2F5A] transition-all duration-300 group-hover:w-full" />
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#9C2F5A]/30 blur-md transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Profile Icon with Dropdown */}
            <div className="relative profile-dropdown">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                  scrolled 
                    ? 'bg-gray-200 hover:bg-gray-300' 
                    : 'bg-white/20 backdrop-blur-md hover:bg-white/30'
                }`}
              >
                <svg className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className={`absolute right-0 mt-3 w-56 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
                  scrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-md'
                }`}>
                  <div className="py-3">
                    {isLoggedIn ? (
                      <>
                        <Link
                          href="/dashboard" 
                          onClick={() => setShowDropdown(false)}
                          className="block px-6 py-3 text-gray-800 hover:bg-gray-100 transition"
                        >
                          My Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-6 py-3 text-red-600 hover:bg-red-50 transition"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/auth/login"
                          onClick={() => setShowDropdown(false)}
                          className="block px-6 py-3 text-gray-800 hover:bg-teal-50 hover:text-teal-600 transition font-medium"
                        >
                          Associate Login
                        </Link>
                        <Link
                          href="/auth/signup"
                          onClick={() => setShowDropdown(false)}
                          className="block px-6 py-3 text-gray-800 hover:bg-[#9C2F5A]/10 hover:text-[#9C2F5A] transition font-medium"
                        >
                          Join as Associate
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden text-3xl transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 shadow-2xl transition-all duration-300 ${
          scrolled ? 'bg-white' : 'bg-black/95 backdrop-blur-md'
        }`}>
          <div className="py-8 space-y-6 text-center">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsOpen(false)}
                className={`block text-2xl font-medium transition-colors duration-200 ${
                  scrolled ? 'text-gray-800 hover:text-[#9C2F5A]' : 'text-white hover:text-[#9C2F5A]'
                }`}
              >
                {item}
              </Link>
            ))}

            {/* Mobile Auth Section */}
            <div className="border-t border-gray-300 pt-6 mt-6">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="block w-3/4 mx-auto py-3 text-xl font-medium bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    onClick={() => setIsOpen(false)}
                    className="block w-3/4 mx-auto py-3 text-xl font-medium bg-teal-600 text-white rounded-full hover:bg-teal-700 transition mb-4"
                  >
                    Associate Login
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={() => setIsOpen(false)}
                    className="block w-3/4 mx-auto py-3 text-xl font-medium bg-[#9C2F5A] text-white rounded-full hover:bg-[#8a274f] transition"
                  >
                    Join as Associate
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