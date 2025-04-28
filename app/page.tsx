"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import WhatsAppButton from "./components/WhatsAppButton";

import {
  FaShoppingBasket,
  FaFileAlt,
  FaMoneyBillWave,
  FaUserClock,
  FaBriefcase,
  FaWhatsapp,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Detect system preference for dark mode on component mount
  useEffect(() => {
    // Check if user prefers dark mode
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }

    // Listen for changes in color scheme preference
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setDarkMode(event.matches);
      });

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  const gifs = [
    "/Stress-amico.svg",
    "/Order ahead-rafiki.svg",
    "/Delivery-bro.svg",
    "/Delivery-rafiki.svg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Head>
          <title>SwiftErrands Nairobi | Your Personal City Assistant</title>
          <meta
            name="description"
            content="Swift and reliable errand services in Nairobi. We handle grocery shopping, deliveries, bill payments and more so you don't have to."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navigation */}
        <nav className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  SwiftErrands
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="https://wa.me/254717782277?text=Hello%20SwiftAF%20Errands,%20I%20would%20like%20to%20place%20an%20order!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-700 dark:to-teal-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Your Personal City Assistant in Nairobi
                </h1>
                <p className="text-lg md:text-xl text-white opacity-90 mb-8">
                  We run your errands so you don&apos;t have to. Save time,
                  avoid traffic, and focus on what matters most.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-lg"
                    onClick={() => {
                      const element = document.getElementById("services");
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    View Services
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById("process");
                      if (element) {
                        const yOffset = -100; // Adjust this based on your header height
                        const y =
                          element.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                    className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg shadow-lg"
                  >
                    How it works
                  </button>
                </div>
              </div>
              {/* GIF Carousel */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-2xl h-80 md:h-[500px]">
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="w-full h-full rounded-2xl overflow-hidden"
                  >
                    {gifs.map((gif, index) => (
                      <SwiperSlide key={`${index}`}>
                        <Image
                          key={`${index}-${
                            activeIndex === index ? activeIndex : ""
                          }`}
                          src={gif}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-contain"
                          unoptimized
                          priority
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div> */}
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From grocery runs to bill payments, we handle all your errands
              with efficiency and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-emerald-600 dark:text-emerald-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="process" className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our simple 4-step process makes getting help with your errands
              quick and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-emerald-600 dark:bg-emerald-500 text-white text-2xl font-bold w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6">
                <h3 className="text-xl font-semibold mb-2">Standard Errands</h3>
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                  KSh 300
                  <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                    {" "}
                    / errand
                  </span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Simple shopping runs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Document pickup/delivery</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Bill payments</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Within 5km radius</span>
                  </li>
                </ul>
                <WhatsAppButton
                  phoneNumber="254717782277"
                  message="Hello SwiftAF Errands, I want to book a grocery shopping service"
                >
                  Book Now
                </WhatsAppButton>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border-2 border-emerald-500 dark:border-emerald-400 relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                POPULAR
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6">
                <h3 className="text-xl font-semibold mb-2">Premium Errands</h3>
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                  KSh 500
                  <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                    {" "}
                    / errand
                  </span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Multiple store visits</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Queue services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Up to 10km radius</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Priority handling</span>
                  </li>
                </ul>
                <WhatsAppButton
                  phoneNumber="254717782277"
                  message="Hello SwiftAF Errands, I want to book a grocery shopping service"
                >
                  Book Now
                </WhatsAppButton>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6">
                <h3 className="text-xl font-semibold mb-2">Custom Errands</h3>
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                  Custom
                  <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                    {" "}
                    pricing
                  </span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Corporate services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Bulk orders</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Complex errands</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    <span>Tailored solutions</span>
                  </li>
                </ul>
                <WhatsAppButton
                  phoneNumber="254717782277"
                  message="Hello SwiftAF Errands, I want to book a grocery shopping service"
                >
                  Get Quote
                </WhatsAppButton>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
            <p>
              Additional distance charges may apply. Contact us for a custom
              quote.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 dark:bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to save time?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Let us handle your errands while you focus on what&#39;s important.
            Our reliable team is ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Have questions or need a custom quote? Fill out the form and
                we&#39;ll get back to you shortly.
              </p>
              <div className="space-y-4">
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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);

                  const firstName = formData.get("firstName") as string;
                  const lastName = formData.get("lastName") as string;
                  const email = formData.get("email") as string;
                  const phone = formData.get("phone") as string;
                  const message = formData.get("message") as string;

                  const whatsappMessage = `Hello SwiftAF!%0A%0A*Name:* ${firstName} ${lastName}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A%0A*Message:*%0A${message}`;

                  window.open(
                    `https://wa.me/254717782277?text=${whatsappMessage}`,
                    "_blank"
                  );
                }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold text-emerald-400 mb-4">
                SwiftErrands
              </div>
              <p className="text-gray-400 max-w-md">
                Your trusted errand service in Nairobi. We save you time and
                hassle by handling your errands efficiently.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Grocery Shopping</li>
                  <li>Package Delivery</li>
                  <li>Bill Payments</li>
                  <li>Queue Services</li>
                  <li>Corporate Errands</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>About Us</li>
                  <li>How It Works</li>
                  <li>Pricing</li>
                  <li>FAQ</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row md:justify-between">
            <div className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SwiftErrands. All rights
              reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
