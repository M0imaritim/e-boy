// app/components/ProcessSection.jsx
import React from "react";
import ProcessStep from "./ProcessStep";

export default function ProcessSection() {
  // How it works steps
  const steps = [
    {
      number: "01",
      title: "Request Service",
      description:
        "Fill out our simple form with your errand details or call our hotline.",
    },
    {
      number: "02",
      title: "Get a Quote",
      description:
        "Receive a transparent pricing quote based on your specific needs.",
    },
    {
      number: "03",
      title: "Confirm & Pay",
      description:
        "Approve the quote and pay via M-Pesa, card, or other preferred method.",
    },
    {
      number: "04",
      title: "We Handle It",
      description:
        "Our trusted agents complete your errand efficiently and keep you updated.",
    },
  ];

  return (
    <section id="process" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our simple 4-step process makes getting help with your errands quick
            and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={parseInt(step.number, 10)}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
