import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Network,
  ShoppingCart,
  MapPin,
  DollarSign,
  Users,
} from 'lucide-react';

import InfoCard from './InfoCard';

const cardData = [
  {
    Icon: Network,
    title: 'Join the network',
    description:
      "When you're with Payoneer, you're with something big, as are millions of businesses and platforms around the globe.",
    iconColor: 'text-green-400',
  },
  {
    Icon: ShoppingCart,
    title: 'Integrate with marketplaces',
    description:
      "We're integrated with 2,000 marketplaces, networks, and platforms like Wish, EBay, Airbnb, Fiverr, and Upwork. With such connections, you're free to grow.",
    iconColor: 'text-blue-400',
  },
  {
    Icon: MapPin,
    title: 'Work like a local',
    description:
      'There are no lengthy or costly international wire transfers to think about. With Payoneer you can get paid quickly and simply, as if you were a local.',
    iconColor: 'text-purple-400',
  },
  {
    Icon: DollarSign,
    title: 'The funds you need',
    description:
      "We not only have the network, we can also give you access to up to 750,000 USD to grasp opportunities in new markets with Payoneer's Capital Advance.",
    iconColor: 'text-yellow-400',
  },
  {
    Icon: Users,
    title: 'With you at every step',
    description:
      'Our global teams are ready to talk everything business payments in your language. We speak more than 22!',
    iconColor: 'text-red-400',
  },
];

const BusinessNetworkExpansion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1); // Default to 1 for mobile

  // Update cardsPerView based on screen size
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3); // lg and up
      else if (window.innerWidth >= 640) setCardsPerView(2); // md and up
      else setCardsPerView(1); // sm and down
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, cardData.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section className="mx-auto px-20 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            Expand your business network
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Open up your business to any market and feel confident that Payoneer has the local currency and regulations covered. One account connects you to the many partners, markets, and customers who already trust us with their business payments.
          </p>
        </header>

        {/* Card Slider */}
        <div className="relative mb-6 sm:mb-8 md:mb-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {cardData.map((card, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2 sm:px-3">
                  <InfoCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-3 sm:space-x-4">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            <ChevronLeft size={16} sm:size={20} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
          >
            <ChevronRight size={16} sm:size={20} />
          </button>

          <div className="w-16 sm:w-20 md:w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessNetworkExpansion;