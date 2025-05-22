import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight, Play } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

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
    <div className="relative overflow-hidden">
      {/* Background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 dark:from-emerald-800 dark:via-teal-800 dark:to-cyan-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content Section */}
          <div className="lg:col-span-6 mb-12 lg:mb-0">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Now serving Nairobi
              </div>

              {/* Main Headlines */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Your Personal
                  <span className="block text-yellow-300">City Assistant</span>
                  <span className="block">in Nairobi</span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                  We run your errands so you don&apos;t have to. Save time,
                  avoid traffic, and focus on what matters most while we handle
                  the rest.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2hrs</div>
                  <div className="text-sm opacity-90">Avg Delivery</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToElement("services")}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 hover:bg-gray-50 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToElement("process", -100)}
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-200"
                >
                  <Play className="mr-2 h-5 w-5" />
                  How It Works
                </button>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main carousel container */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="relative h-80 md:h-96 lg:h-[28rem]">
                  <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                  >
                    {gifs.map((gif, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative w-full h-full bg-white/10 backdrop-blur-sm">
                          <Image
                            src={gif}
                            alt={`Service illustration ${index + 1}`}
                            fill
                            className="object-contain p-4"
                            unoptimized
                            priority={index === 0}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Slide indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {gifs.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">⚡</span>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
