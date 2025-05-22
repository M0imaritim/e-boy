// app/components/PricingSection.tsx
import React from "react";
import PricingCard from "./PricingCard";
import { FaDollarSign, FaQuestionCircle } from "react-icons/fa";

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Standard Errands",
      price: "KSh 300",
      unit: "/ errand",
      features: [
        "Simple shopping runs within your area",
        "Document pickup and delivery",
        "Utility and subscription bill payments",
        "Service radius up to 5km from CBD",
        "Basic errand completion photos",
      ],
      buttonText: "Book Standard",
      whatsappMessage:
        "Hello Runsafi Errands! I'm interested in your Standard Errands service. Can you help me with my errand needs?",
      highlighted: false,
    },
    {
      name: "Premium Errands",
      price: "KSh 500",
      unit: "/ errand",
      features: [
        "Multiple store visits in one trip",
        "Queue services at banks & offices",
        "Extended radius up to 10km",
        "Priority handling and faster service",
        "Detailed progress updates via WhatsApp",
        "Real-time photos and receipts",
      ],
      buttonText: "Book Premium",
      whatsappMessage:
        "Hello Runsafi Errands! I'd like to book your Premium Errands service. Please let me know how to get started.",
      highlighted: true,
    },
    {
      name: "Corporate & Custom",
      price: "Custom",
      unit: " pricing",
      features: [
        "Dedicated corporate account management",
        "Bulk order discounts available",
        "Complex multi-step errands",
        "Flexible scheduling options",
        "Monthly billing and reporting",
        "Tailored solutions for your business",
      ],
      buttonText: "Get Custom Quote",
      whatsappMessage:
        "Hello Runsafi Errands! I need a custom quote for corporate/bulk errand services. Please contact me to discuss my requirements.",
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaDollarSign className="text-base" />
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Simple & Fair Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. No hidden fees, no surprise
            charges — just honest, upfront pricing for quality errand services.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              unit={plan.unit}
              features={plan.features}
              buttonText={plan.buttonText}
              whatsappMessage={plan.whatsappMessage}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Distance & Charges Info */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Distance-Based Pricing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Additional charges may apply for distances beyond the included
                  radius. We&#39;ll always inform you of any extra costs upfront
                  before starting your errand.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Quick Info */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                <FaQuestionCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Questions?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  If you have any questions or need help choosing the right
                  plan, feel free to reach out via WhatsApp. We&#39;re always
                  happy to assist!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
