// app/components/HeroSection.jsx
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HeroSection() {
  const gifs = [
    "https://res.cloudinary.com/dhueetsdf/image/upload/v1747222971/d4k3ler5fwsxss8dq6qd.svg",
    "https://res.cloudinary.com/dhueetsdf/image/upload/v1747222973/dslsx1og2ck3sscggdpa.svg",
    "https://res.cloudinary.com/dhueetsdf/image/upload/v1747222971/zlbloue7zlnc9veofaj4.svg",
    "https://res.cloudinary.com/dhueetsdf/image/upload/v1747222973/w2woyrhb6yt3dnethgtx.svg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  interface ScrollToElementOptions {
    elementId: string;
    offset?: number;
  }

  const scrollToElement = (
    elementId: ScrollToElementOptions["elementId"],
    offset: ScrollToElementOptions["offset"] = 0
  ): void => {
    const element = document.getElementById(elementId);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-700 dark:to-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Personal City Assistant in Nairobi
            </h1>
            <p className="text-lg md:text-xl text-white opacity-90 mb-8">
              We run your errands so you don&apos;t have to. Save time, avoid
              traffic, and focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-lg"
                onClick={() => scrollToElement("services")}
              >
                View Services
              </button>
              <button
                onClick={() => scrollToElement("process", -100)}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg shadow-lg"
              >
                How it works
              </button>
            </div>
          </div>
          {/* GIF Carousel */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-2xl h-80 md:h-96">
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
  );
}
