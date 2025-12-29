
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/50"></div>
        <div className="relative w-full mx-auto px-6 lg:px-8 text-center mt-10">
          <h1 className="text-4xl font-bold text-white mb-6">
            Get in Touch with <span className="text-[#D97A9F]">Trustmaker</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            We're here to help you find your dream home in Indore. Reach out today — your perfect property is just a message away.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: Contact Form */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9C2F5A] focus:border-transparent transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9C2F5A] focus:border-transparent transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9C2F5A] focus:border-transparent transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9C2F5A] focus:border-transparent transition resize-none"
                    placeholder="Tell us about your requirements — budget, location preference, property type, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9C2F5A] text-white font-semibold text-lg py-3 rounded-xl hover:bg-[#8a274f] transform  shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Details */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-10">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#9C2F5A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-[#9C2F5A]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Phone</h4>
                    <p className="text-lg text-gray-600 mt-1">
                      <a href="tel:+919876543211" className="hover:text-[#9C2F5A] transition">+91 9826042358</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#9C2F5A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-[#9C2F5A]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Email</h4>
                    <p className="text-lg text-gray-600 mt-1">
                      <a href="mailto:info@trustmaker.in" className="hover:text-[#9C2F5A] transition"> customercare@trustmaker.in</a>
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#9C2F5A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#9C2F5A]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Office Address</h4>
                    <p className="text-lg text-gray-600 mt-1 max-w-md">
                      Office No. 492, Netaji Subhash Marg , Bada Ganpati, Indore, Madhya Pradesh, India, 452005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#9C2F5A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-[#9C2F5A]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Working Hours</h4>
                    <p className="text-lg text-gray-600 mt-1">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: 11:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              {/* <div className="mt-10">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.814-2.197-2.58-.56-.91-.868-2.04-.924-2.438-.057-.398.074-.607.276-.847.203-.24.47-.493.725-.662.256-.169.512-.268.76-.268.248 0 .482.06.693.174.21.114.46.456.54.756.08.3.147.64.097 1.04-.05.4-.29.76-.48 1.04-.19.28-.54.54-.76.66-.22.12-.38.196-.48.24-.1.044-.21.088-.31.08-.1-.008-.21-.024-.32-.084-.11-.06-.3-.21-.53-.43-.23-.22-.48-.47-.68-.72-.2-.25-.37-.51-.48-.78-.11-.27-.16-.51-.16-.77 0-.26.07-.51.21-.73.14-.22.36-.41.58-.53.22-.12.46-.18.7-.18.24 0 .48.06.68.18.2.12.38.28.52.48.14.2.26.42.34.64.08.22.12.46.12.7 0 .24-.04.48-.12.7-.08.22-.2.42-.34.64-.14.2-.34.38-.52.48-.18.1-.4.12-.62.12-.22 0-.44-.06-.64-.18-.2-.12-.38-.28-.52-.48-.14-.2-.26-.42-.34-.64-.08-.22-.12-.46-.12-.7 0-.24.04-.48.12-.7.08-.22.2-.42.34-.64.14-.2.38-.38.52-.48.18-.1.4-.12.62-.12.22 0 .44.06.64.18.2.12.38.28.52.48.14.2.26.42.34.64.08.22.12.46.12.7 0 .24-.04.48-.12.7-.08.22-.2.42-.34.64-.14.2-.38.38-.52.48-.18.1-.4.12-.62.12-.22 0-.44-.06-.64-.18-.2-.12-.38-.28-.52-.48-.14-.2-.26-.42-.34-.64-.08-.22-.12-.46-.12-.7z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div> */}
            </div>

          </div>
        </div>
      </section>

      {/* Optional: Google Map Embed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Find Us on the Map
          </h2>
         <div className="rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.999!2d75.8399175!3d22.7223625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fde7b19cc999%3A0xe0174b40722e2f27!2sTRUSTMAKER%20INFRAREAL%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1735200000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
      </section>
    </>
  );
}