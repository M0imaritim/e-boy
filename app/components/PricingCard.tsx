// app/components/PricingCard.jsx
import React from "react";
import WhatsAppButton from "./WhatsAppButton";

interface PricingCardProps {
  name: string;
  price: number | string;
  unit: string;
  features: string[];
  buttonText: string;
  whatsappMessage: string;
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  unit,
  features,
  buttonText,
  whatsappMessage,
  highlighted,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${
        highlighted
          ? "border-2 border-emerald-500 dark:border-emerald-400 relative"
          : ""
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
          POPULAR
        </div>
      )}
      <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
          {price}
          <span className="text-base font-normal text-gray-600 dark:text-gray-400">
            {unit}
          </span>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center">
              <span className="text-emerald-500 mr-2">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <WhatsAppButton phoneNumber="254717782277" message={whatsappMessage}>
          {buttonText}
        </WhatsAppButton>
      </div>
    </div>
  );
}
