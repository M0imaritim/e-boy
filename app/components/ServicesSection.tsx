// app/components/ServicesSection.jsx
import React from "react";
import {
  FaShoppingBasket,
  FaFileAlt,
  FaMoneyBillWave,
  FaUserClock,
  FaBriefcase,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  // Service items data
  const services = [
    {
      icon: <FaShoppingBasket size={32} />,
      title: "Grocery Shopping",
      description:
        "We'll buy and deliver groceries from your preferred supermarkets around Nairobi.",
    },
    {
      icon: <MdDeliveryDining size={32} />,
      title: "Package Delivery",
      description:
        "Fast and secure delivery of packages, documents, and items across the city.",
    },
    {
      icon: <FaMoneyBillWave size={32} />,
      title: "Bill Payments",
      description:
        "Never miss a deadline with our utility and subscription bill payment service.",
    },
    {
      icon: <FaUserClock size={32} />,
      title: "Queue Services",
      description:
        "We'll stand in line for you at banks, government offices, and service centers.",
    },
    {
      icon: <FaBriefcase size={32} />,
      title: "Corporate Errands",
      description:
        "Document processing, office supplies pickup, and other business needs.",
    },
    {
      icon: <FaFileAlt size={32} />,
      title: "Custom Errands",
      description:
        "Don't see what you need? Contact us for personalized errand services.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From grocery runs to bill payments, we handle all your errands with
            efficiency and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
