// app/components/ContactSection.tsx
import React from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaHeadset } from "react-icons/fa";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaHeadset className="text-base" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions or need a custom quote? Reach out to us and we&#39;ll
            respond within minutes during business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {/* Location Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Kimathi Street, Nairobi CBD
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Serving all areas within Nairobi and surrounding counties
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/254717782277"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline mb-2 block"
                    >
                      +254 717 782 277
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Available 24/7 for urgent requests
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaClock className="text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      Business Hours
                    </h3>
                    <div className="space-y-1 text-gray-600 dark:text-gray-400">
                      <p className="text-sm">
                        Monday - Friday: 7:00 AM - 8:00 PM
                      </p>
                      <p className="text-sm">Saturday: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm">Sunday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-4">
                Why Choose Runsafi Errands?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Fast Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Reliable Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Fair Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Trusted Team</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="font-bold text-xl mb-2">
              Need immediate assistance?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              For urgent errands, call us directly or send a WhatsApp message
            </p>
            <a
              href="https://wa.me/254717782277?text=Hello%20Runsafi%20Errands!%20I%20need%20urgent%20assistance%20with%20an%20errand."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
