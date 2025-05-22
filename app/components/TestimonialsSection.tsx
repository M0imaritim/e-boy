import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
  rating: number;
  image: string;
  service: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Kimani",
      title: "Busy Professional",
      text: "Runsafi Errands has been a lifesaver for me! With my hectic work schedule, I never had time for grocery shopping. Now I just send my list and everything arrives perfectly. The quality check they do is amazing - my fruits are always fresh and they even suggest better alternatives when items are out of stock.",
      rating: 5,
      image:
        "https://res.cloudinary.com/dhueetsdf/image/upload/v1747291057/130523634n_-_Edited_cxal2a.png",
      service: "Grocery Shopping",
    },
    {
      id: 2,
      name: "James Ochieng",
      title: "Restaurant Owner",
      text: "When we run out of ingredients during peak hours, Runsafi Errands comes through every time. Their emergency delivery service is the most reliable in Nairobi. They understand the urgency of restaurant operations and have saved us from disappointed customers countless times. Couldn't run my business without them!",
      rating: 5,
      image:
        "https://res.cloudinary.com/dhueetsdf/image/upload/v1747291049/istockphoto-1372607241-612x612_vjyipg.jpg",
      service: "Emergency Delivery",
    },
    {
      id: 3,
      name: "Mercy Wanjiku",
      title: "Air Hostess - Qatar Airways",
      text: "I had been sent a package from shagz I needed to travel with but couldn't leave the airport during my layover. Runsafi picked everything up from town, packaged it to meet airline weight limits, and delivered it to me at JKIA—ready to check in! Their attention to detail saved me from excess baggage fees and last-minute stress.",
      rating: 5,
      image:
        "https://res.cloudinary.com/dhueetsdf/image/upload/v1747291054/Qatar_-_Edited_atsngr.png",
      service: "Specialized Delivery",
    },
    {
      id: 4,
      name: "David Chinedu",
      title: "Expatriate",
      text: "New to Nairobi, I struggled with knowing where to find things and how to navigate the city systems. Runsafi Errands not only runs errands for me but also helps me understand local processes. Their knowledge of local markets has saved me so much money, and they always explain the 'why' behind their choices.",
      rating: 4,
      image:
        "https://res.cloudinary.com/dhueetsdf/image/upload/v1747291089/1b9ed738-2719-402e-a34a-c0c8e8151914.jpg_d4dbwm.png",
      service: "Local Navigation",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = (): void => {
    setActiveIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (): void => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number): React.ReactElement[] => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? "currentColor" : "none"}
          className={
            i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
          }
        />
      ));
  };

  const TestimonialCard = ({
    testimonial,
    featured = false,
  }: {
    testimonial: Testimonial;
    featured?: boolean;
  }) => (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        featured
          ? "scale-105 ring-2 ring-emerald-200 dark:ring-emerald-800"
          : "hover:shadow-2xl"
      }`}
    >
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-6">
        <Quote className="w-8 h-8 text-emerald-500 dark:text-emerald-400 opacity-50" />
        <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full">
          {testimonial.service}
        </div>
      </div>

      {/* Rating */}
      <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

      {/* Testimonial Text */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
        &#34;{testimonial.text}&#34;
      </p>

      {/* Customer Info */}
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-emerald-200 dark:border-emerald-700"
        />
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
            ⭐ Customer Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don&#39;t just take our word for it - hear from some of our
            satisfied customers about their experience with Runsafi Errands.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative mb-16">
          {/* Mobile View (1 testimonial) */}
          <div className="block lg:hidden">
            <div className="relative">
              <button
                onClick={prevSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="mx-12">
                <TestimonialCard
                  testimonial={testimonials[activeIndex]}
                  featured
                />
              </div>

              <button
                onClick={nextSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Desktop View (3 testimonials) */}
          <div className="hidden lg:block">
            <div className="relative">
              <button
                onClick={prevSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="grid grid-cols-3 gap-8 mx-16">
                {[0, 1, 2].map((offset) => {
                  const index = (activeIndex + offset) % testimonials.length;
                  const testimonial = testimonials[index];
                  return (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      featured={offset === 1}
                    />
                  );
                })}
              </div>

              <button
                onClick={nextSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 3000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-emerald-500 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-emerald-300 dark:hover:bg-emerald-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Nairobi Trusts Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Numbers speak louder than words. Here&#39;s why we&#39;re the
              preferred errand service in the city.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Happy Clients
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Satisfied customers across Nairobi
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                2K+
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Errands Done
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Successfully completed tasks
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Available
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Round the clock support
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                99%
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Success Rate
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tasks completed successfully
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
