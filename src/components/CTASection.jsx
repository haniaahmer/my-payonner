import React from "react";

const CTASection = () => (
  <section className="relative overflow-hidden   bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 py-16">
    {/* Glow effect */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Get started now
      </h2>
      <p className="text-gray-300 mb-8">
        Tell us a few details and we'll help you find the account that's right for you.
      </p>
      <div className="mt-5">
        <button 
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Let's go
        </button>
      </div>
    </div>
  </section>
  
  
);

export default CTASection;