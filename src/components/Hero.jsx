import React from 'react';
import img from '../assets/download.png';

const Hero = () => {
  return (
    <section className="relative flex justify-between items-center  bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100 overflow-hidden">
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute top-20 right-20 w-20 h-20 bg-pink-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-30 h-30 bg-pink-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-200 rounded-full opacity-50"></div>

      <div className="absolute inset-0 flex justify-between items-center">
        <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto px-20 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2 space-y-8 ml-20">
           <h1 className="text-5xl lg:text-5xl leading-tight">
  <span 
    className="bg-gradient-to-r from-[rgb(208,84,206)] via-[rgb(0,146,244)] to-[rgb(21,196,116)] bg-clip-text text-transparent"
  >
    Smart & Secure <strong>Business Payments</strong>
  </span>
</h1>

            <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
              Send and receive cross-border payments wherever your business operates. Every Payoneer account features a variety of reliable services and tools that can simplify the way you work with your global clients, contractors, and suppliers.
            </p>

            <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:scale-105">
              Sign up now
            </button>
          </div>

       <div className="lg:w-1/2 relative flex items-center justify-center">
  <div className="relative z-3">
  {/* Layered circular background */}
  <div className="w-110 h-110 lg:w-110 lg:h-110 rounded-full bg-gradient-to-br bg-gray flex items-center justify-center shadow-2xl">
    <div className="w-95 h-95 lg:w-95 lg:h-95 rounded-full bg-gradient-to-br bg-white flex items-center justify-center shadow-2xl relative">
  <div className="w-80 h-80 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-300 via-purple-300 flex items-center justify-center relative z-10">
    {/* Image container with proper sizing and overflow control */}
    <div className="w-[300px] h-[300px] rounded-full overflow-hidden flex justify-center items-center">
  <img
    src="https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
    alt="description"
    width={700}
    height={700}
    className="w-full h-full object-cover rounded-full object-position: center "
  />
</div>
  </div>

  {/* Pink orbiting ball (around white circle) */}
  <div className="absolute inset-0 animate-spin-slow z-10" style={{ animationDuration: '10s' }}>
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pink-600 rounded-full shadow-md"></div>
  </div>
</div>
  </div>

  {/* Blue orbiting ball (around colored circle) */}
  <div className="absolute inset-0 animate-spin-slow z-0" style={{ animationDuration: '12s' }}>
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 r bg-blue-500 rounded-full shadow-md"></div>
  </div>
</div>

</div>


        </div>
      </div>
      
    </section>
  );
};

export default Hero;
