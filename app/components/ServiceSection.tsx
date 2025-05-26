// components/ServicesSection.tsx
import Link from "next/link";

interface ServicesSectionProps {
  isPreview?: boolean;
}

const services = [
  {
    id: 1,
    title: "Grocery Shopping",
    description:
      "We'll handle your grocery shopping with care, ensuring you get fresh, quality items.",
    icon: "🛒",
    price: "From KES 500",
  },
  {
    id: 2,
    title: "Document Services",
    description:
      "Pick up, drop off, and handle important documents and paperwork.",
    icon: "📄",
    price: "From KES 300",
  },
  {
    id: 3,
    title: "Package Delivery",
    description:
      "Safe and reliable package delivery across Nairobi and surrounding areas.",
    icon: "📦",
    price: "From KES 400",
  },
  {
    id: 4,
    title: "Bill Payments",
    description:
      "Pay your utilities, rent, and other bills on time without the hassle.",
    icon: "💳",
    price: "From KES 200",
  },
  {
    id: 5,
    title: "Pharmacy Runs",
    description:
      "Prescription pickups and over-the-counter medication delivery.",
    icon: "💊",
    price: "From KES 350",
  },
  {
    id: 6,
    title: "Bank Errands",
    description:
      "Deposits, withdrawals, and other banking services assistance.",
    icon: "🏦",
    price: "From KES 400",
  },
];

export default function ServicesSection({
  isPreview = false,
}: ServicesSectionProps) {
  const displayedServices = isPreview ? services.slice(0, 3) : services;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedServices.map((service) => (
        <div
          key={service.id}
          className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            {service.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {service.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              {service.price}
            </span>
            {!isPreview && (
              <Link
                href="/contact"
                className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                Get Quote →
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
