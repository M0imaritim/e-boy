// app/components/PricingCard.tsx
import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import { FaStar, FaCheck } from "react-icons/fa";

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
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
        highlighted
          ? "border-2 border-emerald-500 dark:border-emerald-400 scale-105"
          : "border border-gray-200 dark:border-gray-700"
      }`}
    >
      {/* Popular Badge */}
      {highlighted && (
        <div className="absolute -top-0 -right-0 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-6 py-2 rounded-bl-2xl shadow-lg flex items-center gap-1">
          <FaStar className="text-xs" />
          MOST POPULAR
        </div>
      )}

      {/* Pricing Header */}
      <div
        className={`p-8 text-center relative overflow-hidden ${
          highlighted
            ? "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/20"
            : "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/30"
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-20 h-20 bg-current rounded-full -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-current rounded-full translate-x-8 translate-y-8"></div>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            {name}
          </h3>
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span
              className={`text-5xl font-bold ${
                highlighted
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {price}
            </span>
            <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
              {unit}
            </span>
          </div>
          {price !== "Custom" && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {highlighted
                ? "Best value for most users"
                : "Perfect for basic needs"}
            </p>
          )}
        </div>
      </div>

      {/* Features List */}
      <div className="p-8">
        <div className="space-y-4 mb-8">
          {features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-start gap-3 group">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  highlighted
                    ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                } group-hover:scale-110 transition-transform duration-200`}
              >
                <FaCheck className="text-xs" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Enhanced WhatsApp Button */}
        <div className="relative">
          <WhatsAppButton
            phoneNumber="254717782277"
            message={whatsappMessage}
            className={`transform transition-all duration-200 hover:scale-105 hover:shadow-lg ${
              highlighted
                ? "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
                : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900"
            }`}
          >
            <span className="font-semibold">{buttonText}</span>
          </WhatsAppButton>

          {highlighted && (
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl opacity-20 blur-sm -z-10"></div>
          )}
        </div>

        {/* Additional Info */}
        {price !== "Custom" && (
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              No hidden fees • Pay per service
            </p>
          </div>
        )}

        {price === "Custom" && (
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Tailored pricing based on your needs
            </p>
          </div>
        )}
      </div>

      {/* Hover Effect Border */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          highlighted
            ? "bg-gradient-to-r from-emerald-500/20 to-emerald-600/20"
            : "bg-gradient-to-r from-gray-500/10 to-gray-600/10"
        }`}
      ></div>
    </div>
  );
}
