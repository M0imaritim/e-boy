"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaSpinner } from "react-icons/fa";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Add a small delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 500));

    const whatsappMessage = `Hello SwiftAF Errands!%0A%0A*Name:* ${firstName} ${lastName}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A%0A*Message:*%0A${message}`;

    window.open(`https://wa.me/254717782277?text=${whatsappMessage}`, "_blank");
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <FaWhatsapp className="text-2xl" />
          Send us a message
        </h3>
        <p className="text-emerald-100 mt-1">
          We&#39;ll get back to you within minutes!
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              First Name *
            </label>
            <input
              name="firstName"
              type="text"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-500"
              placeholder="Enter your first name"
            />
          </div>
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Last Name *
            </label>
            <input
              name="lastName"
              type="text"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-500"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-500"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Phone Number *
          </label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-500"
            placeholder="+254 7XX XXX XXX"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Tell us how we can help *
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-200 resize-none group-hover:border-gray-300 dark:group-hover:border-gray-500"
            placeholder="Describe your errand needs, preferred time, location, or any special requirements..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin text-xl" />
              Sending...
            </>
          ) : (
            <>
              <FaWhatsapp className="text-xl" />
              Send via WhatsApp
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          By submitting this form, you&#39;ll be redirected to WhatsApp to
          complete your message.
        </p>
      </form>
    </div>
  );
}
