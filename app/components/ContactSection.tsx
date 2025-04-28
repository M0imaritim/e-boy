// app/components/ContactSection.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl md:mx-auto">
            Have questions or need a custom quote? Fill out the form and
            we&#39;ll get back to you shortly.
          </p>
        </div>
        <div className="md:flex md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Kimathi Street, Nairobi CBD
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mr-3">
                  <FaWhatsapp className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    +254 717 782 277
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
