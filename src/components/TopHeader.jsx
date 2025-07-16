import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const TopHeader = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const aboutLinks = [
    { name: 'About Payoneer', url: 'https://www.payoneer.com/about/' },
    { name: 'Pricing', url: 'https://www.payoneer.com/about/pricing/' },
    { name: 'Careers', url: 'https://www.payoneer.com/careers/', target: '_blank' },
    { name: 'Success stories', url: 'https://www.payoneer.com/success-stories/' },
    { name: 'Investors', url: 'https://investor.payoneer.com/', target: '_blank' },
  ];

  const languages = [
    { name: 'English', code: 'en', url: 'https://www.payoneer.com/business/' },
    { name: 'Español', code: 'es', url: 'https://www.payoneer.com/es/business/' },
    { name: '简体中文', code: 'zh-hans', url: 'https://www.payoneer.com/zh-hans/business/' },
    { name: '日本語', code: 'ja', url: 'https://www.payoneer.com/ja/business/' },
    { name: '한국어', code: 'ko', url: 'https://www.payoneer.com/ko/business/' },
  ];

  return (
    <nav className="bg-black text-white font-sans font-bold text-[11px] py-2   flex justify-between items-center px-50 hidden md:block">
      <div className="container mx-auto px-6">
        <div className="flex justify-end items-center space-x-6">
          <a href="https://www.payoneer.com/resources/" className="hover:text-gray-300 transition-colors">
            RESOURCES
          </a>
          <a href="https://www.payoneer.com/developers/" className="hover:text-gray-300 transition-colors">
            DEVELOPERS API
          </a>
          
          {/* About dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <button 
              className="hover:text-gray-300 transition-colors flex items-center gap-1"
              aria-expanded={showAboutDropdown}
              aria-haspopup="true"
            >
              ABOUT US
            </button>
            {showAboutDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded shadow-lg z-10">
                {aboutLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url} 
                    target={link.target || '_self'}
                    rel="noopener noreferrer"
                    className="flex px-4 py-2 hover:bg-gray-800 transition-colors items-center justify-between"
                  >
                    {link.name}
                    <ChevronRight size={12} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Language dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowLanguageDropdown(true)}
            onMouseLeave={() => setShowLanguageDropdown(false)}
          >
            <button 
              className="hover:text-gray-300 transition-colors flex items-center gap-1 rounded-full  bg-gray-700 p-2"
              aria-expanded={showLanguageDropdown}
              aria-haspopup="true"
            >
              ENGLISH 
            </button>
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded shadow-lg z-10">
                {languages.map((lang) => (
                  <a 
                    key={lang.code}
                    href={lang.url} 
                    className="px-4 py-2 hover:bg-gray-800 transition-colors flex items-center justify-between"
                  >
                    {lang.name}
                    <ChevronRight size={12} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopHeader;