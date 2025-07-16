import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const MovingNewsCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsCards = [
    {
      id: 1,
      title: "The ins and outs of Receiving payments",
      description: "In today's hyper-connected world, small and medium-sized businesses (SMBs) have more opportunities than ever to expand their reach and grow their customer base...",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
      readMore: "Read more →"
    },
    {
      id: 2,
      title: "How to keep your funds safe: Advanced security measures",
      description: "Maxim Polyachenko, Payoneer's VP of Financial Crime Prevention — and one of the leading experts in the field — shares his insights on keeping your money secure...",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      readMore: "Read more →"
    },
    {
      id: 3,
      title: "Top challenges and solutions for international payments",
      description: "When it comes to international payments, there are several things to consider when choosing the right solution for your business needs...",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      readMore: "Read more →"
    },
    {
      id: 4,
      title: "Boost your sales: 10 habits of successful online entrepreneurs",
      description: "Are you ready to transform your online sales game? The most successful online entrepreneurs share common habits that set them apart from the competition...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      readMore: "Read more →"
    },
    {
      id: 5,
      title: "How to keep your funds safe: Advanced security measures",
      description: "Maxim Polyachenko, Payoneer's VP of Financial Crime Prevention — and one of the leading experts in the field — shares his insights on keeping your money secure...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      readMore: "Read more →"
    },
    {
      id: 6,
      title: "Boost your sales: 10 habits of successful online entrepreneurs",
      description: "Are you ready to transform your online sales game? The most successful online entrepreneurs share common habits that set them apart from the competition...",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
      readMore: "Read more →"
    },
    {
      id: 7,
      title: "How to keep your funds safe: Advanced security measures",
      description: "Maxim Polyachenko, Payoneer's VP of Financial Crime Prevention — and one of the leading experts in the field — shares his insights on keeping your money secure...",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
      readMore: "Read more →"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (Math.ceil(newsCards.length / 4)));
    }, 8000); // Slower interval for slow motion (8 seconds)

    return () => clearInterval(timer);
  }, [newsCards.length]);

  return (
   <div className="px-4 sm:px-8 md:px-20 lg:px-60 bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-1 h-auto items-center">
      {/* Left Side - Resource Hub */}
      <div className="bg-transparent px-4 md:px-20 p-4 flex flex-col justify-center">
        <div className="text-xs font-semibold text-gray-600 tracking-wider uppercase mb-5">
          RESOURCE HUB
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
          Visit our resource hub
        </h1>
        <p className="text-gray-700 mb-6 md:mb-10">
          Videos, articles, case studies, product guides, testimonials, and useful tools to help you find the answers you're looking for.
        </p>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          Start exploring
        </button>
      </div>

      {/* Right Side - Vertical Moving 2x2 Grid */}
      <div className="relative h-[520px] overflow-hidden">
        <div
          className="grid grid-cols-2 gap-2 transition-transform duration-8000 ease-in-out"
          style={{ transform: `translateY(-${currentIndex * 50}%)` }}
        >
          {newsCards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-auto object-fit" />
              <div className="p-3 md:p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">{card.title}</h3>
                <p className="text-gray-600 text-xs mb-1 line-clamp-3">{card.description}</p>
                <a href="#" className="text-blue-600 text-xs font-medium hover:text-blue-700 flex items-center">
                  {card.readMore}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default MovingNewsCards;