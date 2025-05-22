// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent): void => {
      setDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Head>
          <title>Runsafi Errands Nairobi | Your Personal City Assistant</title>
          <meta
            name="description"
            content="Swift and reliable errand services in Nairobi. We handle grocery shopping, deliveries, bill payments and more so you don't have to. Professional, trusted, and efficient."
          />
          <meta
            name="keywords"
            content="errand services nairobi, grocery shopping nairobi, delivery services kenya, personal assistant nairobi, runsafi errands"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph Meta Tags */}
          <meta
            property="og:title"
            content="Runsafi Errands Nairobi | Your Personal City Assistant"
          />
          <meta
            property="og:description"
            content="Swift and reliable errand services in Nairobi. We handle grocery shopping, deliveries, bill payments and more."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://runsafi.co.ke" />
          <meta property="og:image" content="/og-image.jpg" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Runsafi Errands Nairobi" />
          <meta
            name="twitter:description"
            content="Swift and reliable errand services in Nairobi"
          />
          <meta name="twitter:image" content="/twitter-image.jpg" />
        </Head>

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <Navbar darkMode={darkMode} />

        <main id="main-content">
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <TestimonialsSection />
          <PricingSection />
          <ContactSection />
        </main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/254700000000?text=Hello%20Runsafi%20Errands,%20I%20need%20help%20with%20an%20errand!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Contact us on WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>
          </a>
        </div>

        {/* Loading animation for better UX */}
        <div
          id="loading-overlay"
          className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Loading Runsafi Errands...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
