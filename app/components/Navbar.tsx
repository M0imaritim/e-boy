// app/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
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
  );
}
