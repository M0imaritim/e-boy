// app/components/ServicesSection.tsx
import React from "react";
import {
  FaShoppingBasket,
  FaMoneyBillWave,
  FaUserClock,
  FaBriefcase,
  FaCogs,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  // Service items data
  const services = [
    {
      icon: <FaShoppingBasket size={28} />,
      title: "Grocery Shopping",
      description:
        "From weekly groceries to specific items, we shop at your preferred supermarkets and deliver fresh produce right to your doorstep with care.",
    },
    {
      icon: <MdDeliveryDining size={28} />,
      title: "Package Delivery",
      description:
        "Fast, secure, and reliable delivery service for packages, documents, and important items across Nairobi with real-time tracking updates.",
    },
    {
      icon: <FaMoneyBillWave size={28} />,
      title: "Bill Payments",
      description:
        "Never miss a due date again. We handle utility bills, subscriptions, loan payments, and more at banks and service centers across the city.",
    },
    {
      icon: <FaUserClock size={28} />,
      title: "Queue Services",
      description:
        "Save hours of your precious time. We'll stand in line for you at banks, government offices, hospitals, and other service centers.",
    },
    {
      icon: <FaBriefcase size={28} />,
      title: "Corporate Errands",
      description:
        "Professional business services including document processing, office supply runs, client deliveries, and administrative support for companies.",
    },
    {
      icon: <FaCogs size={28} />,
      title: "Custom Solutions",
      description:
        "Unique needs require tailored solutions. Contact us for specialized errands, event support, or any other personalized service requirements.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaCogs className="text-base" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            We Handle It All
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From grocery runs to bill payments, we&#39;re your trusted partner
            for all errands in Nairobi. Professional, reliable, and always on
            time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Save Time?</h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Let us handle your errands while you focus on what matters most.
                Professional, reliable, and always on time.
              </p>
              <a
                href="https://wa.me/254717782277?text=Hello%20Runsafi%20Errands!%20I'd%20like%20to%20book%20an%20errand%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.520.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Start Your First Errand
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
