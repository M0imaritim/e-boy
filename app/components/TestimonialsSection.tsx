import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
  rating: number;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Kimani",
      title: "Busy Professional",
      text: "SwiftAF Errands has been a lifesaver for me! With my hectic work schedule, I never had time for grocery shopping. Now I just send my list and everything arrives perfectly. Highly recommend!",
      rating: 5,
      image:
        "https://res.cloudinary.com/dhueetsdf/image/upload/v1747291057/130523634n_-_Edited_cxal2a.png",
    },
    {
      id: 2,
      name: "James Ochieng",
      title: "Restaurant Owner",
      text: "When we run out of ingredients during peak hours, SwiftAF Errands comes through every time. Their emergency delivery service is the most reliable in Nairobi. Couldn't run my business without them!",
      rating: 5,
      image:
        "https://res.cloudinary.com/dhueetsdf/image/upload/v1747291049/istockphoto-1372607241-612x612_vjyipg.jpg",
    },
    {
      id: 3,
      name: "Mercy Wanjiku",
      title: "Air hostess - Qatar Airways",
      text: "I had been sent a package from shagz I needed to travel with but couldn’t leave the airport during my layover. SwiftAF picked everything up from town, packaged it to meet airline weight limits, and delivered it to me at JKIA—ready to check in! Their attention to detail saved me from excess baggage fees and last-minute stress. Truly a seamless service!",
      rating: 5,
      image:
        "https://res.cloudinary.com/dhueetsdf/image/upload/v1747291054/Qatar_-_Edited_atsngr.png",
    },
    {
      id: 4,
      name: "David Chinedu",
      title: "Expatriate",
      text: "New to Nairobi, I struggled with knowing where to find things. SwiftAF Errands not only runs errands for me but also helps me navigate the city. Their knowledge of local markets has saved me so much money!",
      rating: 4,
      image:
        "https://res.cloudinary.com/dhueetsdf/image/upload/v1747291089/1b9ed738-2719-402e-a34a-c0c8e8151914.jpg_d4dbwm.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const totalTestimonials = testimonials.length;

  const nextSlide = (): void => {
    setActiveIndex((prevIndex) =>
      prevIndex + 1 >= totalTestimonials ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (): void => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? totalTestimonials - 1 : prevIndex - 1
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
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don&#39;t just take our word for it - hear from some of our
            satisfied customers about their experience with SwiftAF Errands.
          </p>
        </div>

        {/* Testimonials slider */}
        <div className="relative">
          {/* Mobile view (1 testimonial) */}
          <div className="block md:hidden">
            <div className="relative">
              <div className="flex items-center justify-center">
                <button
                  onClick={prevSlide}
                  className="absolute left-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="w-full max-w-md">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`transition-opacity duration-300 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md ${
                        index === activeIndex
                          ? "opacity-100"
                          : "hidden opacity-0"
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {testimonial.text}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Tablet view (2 testimonials) */}
          <div className="hidden md:block lg:hidden">
            <div className="relative">
              <div className="flex items-center justify-center">
                <button
                  onClick={prevSlide}
                  className="absolute left-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="grid grid-cols-2 gap-6 mx-10">
                  {[0, 1].map((offset) => {
                    const index = (activeIndex + offset) % totalTestimonials;
                    const testimonial = testimonials[index];
                    return (
                      <div
                        key={testimonial.id}
                        className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                      >
                        <div className="flex items-center mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-lg">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                        <div className="flex mb-3">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {testimonial.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop view (3 testimonials) */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="flex items-center justify-center">
                <button
                  onClick={prevSlide}
                  className="absolute left-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>

                <div className="grid grid-cols-3 gap-6 mx-10">
                  {[0, 1, 2].map((offset) => {
                    const index = (activeIndex + offset) % totalTestimonials;
                    const testimonial = testimonials[index];
                    return (
                      <div
                        key={testimonial.id}
                        className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                      >
                        <div className="flex items-center mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-lg">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                        <div className="flex mb-3">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {testimonial.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-blue-500"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
