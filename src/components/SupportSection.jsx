import React from 'react';
import { Headphones, BookOpen, Users, ArrowRight } from 'lucide-react';

const SupportSection = () => {
  const supportOptions = [
    {
      icon: <Headphones className="w-8 h-8 text-gray-700" />,
      title: "Get online support",
      link: "Take me there",
      color: "from-orange-400 to-purple-500",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gray-700" />,
      title: "How-to videos and guides",
      link: "Take me there",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: <Users className="w-8 h-8 text-gray-700" />,
      title: "Payoneer Community",
      link: "Take me there",
      color: "from-blue-500 to-teal-500",
    },
  ];

  // Responsive icon positions for different screen sizes
  const getIconPositions = () => {
    const width = window.innerWidth;
    if (width >= 1024) { // lg screens
      return ['31%', '50%', '68%'];
    } else if (width >= 768) { // md screens
      return ['20%', '56%', '70%'];
    } else { // sm and smaller screens
      return ['25%', '50%', '75%'];
    }
  };

  return (
    <div className="relative bg-white py-8 sm:py-12 md:py-20">
      {/* Decorative background circles */}
      <div className="absolute top-2 sm:top-10 left-2 sm:left-10 w-10 sm:w-32 h-10 sm:h-32 bg-purple-400 rounded-full opacity-20 sm:opacity-40"></div>
      <div className="absolute top-5 sm:top-40 right-2 sm:right-20 w-8 sm:w-24 h-8 sm:h-24 bg-pink-300 rounded-full opacity-15 sm:opacity-30"></div>
      <div className="absolute bottom-5 sm:bottom-40 left-1/6 sm:left-1/4 w-6 sm:w-28 h-6 sm:h-28 bg-orange-300 rounded-full opacity-10 sm:opacity-20"></div>
      <div className="absolute bottom-2 sm:bottom-20 right-2 sm:right-40 w-5 sm:w-20 h-5 sm:h-20 bg-pink-300 rounded-full opacity-25 sm:opacity-50"></div>
      <div className="absolute top-10 sm:top-60 left-1 sm:left-1 w-8 sm:w-36 h-8 sm:h-36 bg-indigo-300 rounded-full opacity-15 sm:opacity-35"></div>
      <div className="absolute top-2 sm:top-20 right-2 sm:right-50 w-4 sm:w-16 h-4 sm:h-16 bg-teal-300 rounded-full opacity-10 sm:opacity-25"></div>
      <div className="absolute bottom-2 sm:bottom-10 left-1/3 sm:left-2/3 w-6 sm:w-30 h-6 sm:h-30 bg-yellow-400 rounded-full opacity-5 sm:opacity-15"></div>

      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 relative z-10 px-4 sm:px-6 md:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
          Support when you need it
        </h1>
        <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-400 to-purple-500 mx-auto mb-4 sm:mb-6"></div>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-1 sm:mb-2">
          When you want some help, you want it fast and from a real person.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Our international teams are ready to help you in 22+ languages.
        </p>
      </div>

      {/* Progress Bar Section */}
      <div className="mb-6 sm:mb-8 md:mb-10 relative z-10 px-4 sm:px-6 md:px-0">
        <div className="relative w-full mx-auto">
          {/* Progress bar */}
          <div className="flex items-center h-1 w-full">
            <div className="h-1 w-full bg-gradient-to-r from-red-600 via-purple-700 via-blue-500 to-green-500"></div>
          </div>

          {/* Icons positioned above the progress bar with custom positions */}
          <div className="absolute -top-8 left-0 w-full h-12">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200"
                style={{ left: getIconPositions()[index], transform: 'translateX(-50%)' }}
              >
                {option.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Options Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        {supportOptions.map((option, index) => (
          <div key={index} className="text-center">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">
              {option.title}
            </h3>
            <button className="text-blue-500 hover:text-blue-700 font-normal text-xs sm:text-sm md:text-base flex items-center gap-0.5 sm:gap-1 md:gap-1 mx-auto hover:gap-1 sm:hover:gap-2 md:hover:gap-2 transition-all duration-300 group">
              {option.link}
              <ArrowRight className="w-2 sm:w-3 h-2 sm:h-3 group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportSection;