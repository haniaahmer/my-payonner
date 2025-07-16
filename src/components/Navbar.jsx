
import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [showFreelancersDropdown, setShowFreelancersDropdown] = useState(false);
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const FreelancerLinks = [
    { name: 'Freelancer Option 1', url: '#' },
    { name: 'Freelancer Option 2', url: '#' },
    { name: 'Freelancer Option 3', url: '#', target: '_blank' },
    { name: 'Freelancer Option 4', url: '#' },
    { name: 'Freelancer Option 5', url: '#', target: '_blank' },
  ];

  const BusinessLinks = [
    { name: 'Business Option 1', url: '#' },
    { name: 'Business Option 2', url: '#' },
    { name: 'Business Option 3', url: '#' },
  ];

  const MarketplaceLinks = [
    { name: 'Marketplace Option 1', url: '#' },
    { name: 'Marketplace Option 2', url: '#' },
    { name: 'Marketplace Option 3', url: '#' },
  ];

 const renderDropdown = (links) => (
  <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg space-y-2 p-2 rounded min-w-[180px] z-50">
    {links.map((link) => (
      <li key={link.name}>
        <a
          href={link.url}
          target={link.target || '_self'}
          rel="noopener noreferrer"
          className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded flex justify-between items-center"
        >
          {link.name}
          <ChevronRight size={12} />
        </a>
      </li>
    ))}
  </ul>
);



  return (
    <header className="bg-white text-black py-4 flex justify-between items-center px-4 lg:px-40 shadow-sm font-bold relative">
      <img 
        src="https://www.payoneer.com/wp-content/themes/payo/assets/img/payoneer-dark-logo.svg" 
        width="162" 
        height="33" 
        alt="Payoneer" 
        className="w-32 lg:w-[162px] lg:h-[33px]"
      />

      <nav className="hidden lg:flex flex-1 justify-center space-x-4">
        <ul className="flex space-x-9">
          <li
            className="cursor-pointer relative flex items-center"
            onMouseEnter={() => setShowFreelancersDropdown(true)}
            onMouseLeave={() => setShowFreelancersDropdown(false)}
          >
            Freelancers
            <ChevronDown size={14} className={`transition-transform ${showFreelancersDropdown ? 'rotate-180' : ''}`} />
            {showFreelancersDropdown && renderDropdown(FreelancerLinks)}
          </li>

          <li
            className="cursor-pointer relative flex items-center"
            onMouseEnter={() => setShowBusinessDropdown(true)}
            onMouseLeave={() => setShowBusinessDropdown(false)}
          >
            Business
            <ChevronDown size={14} className={`transition-transform ${showBusinessDropdown ? 'rotate-180' : ''}`} />
            {showBusinessDropdown && renderDropdown(BusinessLinks)}
          </li>

          <li
            className="cursor-pointer relative flex items-center gap-1"
            onMouseEnter={() => setShowMarketplaceDropdown(true)}
            onMouseLeave={() => setShowMarketplaceDropdown(false)}
          >
            Marketplace
            <ChevronDown size={14} className={`transition-transform ${showMarketplaceDropdown ? 'rotate-180' : ''}`} />
            {showMarketplaceDropdown && renderDropdown(MarketplaceLinks)}
          </li>
        </ul>

        <div className="flex items-center space-x-12">
          <button className="text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-blue-700 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2">
            Register <ArrowRight size={18} />
          </button>
        </div>
      </nav>

      <button 
        className="lg:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-[100] p-4">
          <ul className="space-y-4">
            <li className="border-b pb-2">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowFreelancersDropdown(!showFreelancersDropdown)}
              >
                Freelancers
                <ChevronDown size={14} className={`transition-transform ${showFreelancersDropdown ? 'rotate-180' : ''}`} />
              </div>
              {showFreelancersDropdown && (
                <ul className="pl-4 mt-2 space-y-2">
                  {FreelancerLinks.map(link => (
                    <li key={link.name}>
                      <a href={link.url} className="block py-1">{link.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="border-b pb-2">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowBusinessDropdown(!showBusinessDropdown)}
              >
                Business
                <ChevronDown size={14} className={`transition-transform ${showBusinessDropdown ? 'rotate-180' : ''}`} />
              </div>
              {showBusinessDropdown && (
                <ul className="pl-4 mt-2 space-y-2">
                  {BusinessLinks.map(link => (
                    <li key={link.name}>
                      <a href={link.url} className="block py-1">{link.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="border-b pb-2">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowMarketplaceDropdown(!showMarketplaceDropdown)}
              >
                Marketplace
                <ChevronDown size={14} className={`transition-transform ${showMarketplaceDropdown ? 'rotate-180' : ''}`} />
              </div>
              {showMarketplaceDropdown && (
                <ul className="pl-4 mt-2 space-y-2">
                  {MarketplaceLinks.map(link => (
                    <li key={link.name}>
                      <a href={link.url} className="block py-1">{link.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="pt-4 space-y-2">
              <button className="w-full text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                Sign In
              </button>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-700 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Register <ArrowRight size={18} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

