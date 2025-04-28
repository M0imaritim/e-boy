// app/components/PricingSection.jsx
import React from "react";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Standard Errands",
      price: "KSh 300",
      unit: "/ errand",
      features: [
        "Simple shopping runs",
        "Document pickup/delivery",
        "Bill payments",
        "Within 5km radius",
      ],
      buttonText: "Book Now",
      whatsappMessage:
        "Hello SwiftAF Errands, I want to book a grocery shopping service",
      highlighted: false,
    },
    {
      name: "Premium Errands",
      price: "KSh 500",
      unit: "/ errand",
      features: [
        "Multiple store visits",
        "Queue services",
        "Up to 10km radius",
        "Priority handling",
      ],
      buttonText: "Book Now",
      whatsappMessage:
        "Hello SwiftAF Errands, I want to book a grocery shopping service",
      highlighted: true,
    },
    {
      name: "Custom Errands",
      price: "Custom",
      unit: " pricing",
      features: [
        "Corporate services",
        "Bulk orders",
        "Complex errands",
        "Tailored solutions",
      ],
      buttonText: "Get Quote",
      whatsappMessage:
        "Hello SwiftAF Errands, I want to book a grocery shopping service",
      highlighted: false,
    },
  ];

  return (
    <section className="py-16 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple & Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We offer competitive rates based on service type and distance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            Additional distance charges may apply. Contact us for a custom
            quote.
          </p>
        </div>
      </div>
    </section>
  );
}
