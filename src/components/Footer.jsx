import React from "react";
import { Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  
  <footer className="bg-gray-900 text-white px-6 py-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Solutions */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Solutions</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors">Freelancers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Business</li>
            <li className="hover:text-white cursor-pointer transition-colors">Marketplace</li>
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Partners</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors">Partner affiliate program</li>
            <li className="hover:text-white cursor-pointer transition-colors">Integration partnerships</li>
            <li className="hover:text-white cursor-pointer transition-colors">Bank partnerships</li>
            <li className="hover:text-white cursor-pointer transition-colors">Accounting software integration</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors">About Payoneer</li>
            <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
            <li className="hover:text-white cursor-pointer transition-colors">Investors</li>
            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Press Center</li>
            <li className="hover:text-white cursor-pointer transition-colors">Media assets</li>
            <li className="hover:text-white cursor-pointer transition-colors">Impact</li>
            <li className="hover:text-white cursor-pointer transition-colors">Multi-jurisdictional licenses</li>
            <li className="hover:text-white cursor-pointer transition-colors">Mobile app</li>
            <li className="hover:text-white cursor-pointer transition-colors">SMB Network</li>
            <li className="hover:text-white cursor-pointer transition-colors">Latest Product Innovations</li>
            <li className="hover:text-white cursor-pointer transition-colors">Open source software</li>
            <li className="hover:text-white cursor-pointer transition-colors">Service information</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Help</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors">Customer Care</li>
            <li className="hover:text-white cursor-pointer transition-colors">Security Center</li>
            <li className="hover:text-white cursor-pointer transition-colors">Customer assistance, complaints and disclosures policies</li>
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow us</h3>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
              <Twitter size={16} className="text-black" />
            </div>
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
              <Facebook size={16} className="text-black" />
            </div>
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
              <Linkedin size={16} className="text-black" />
            </div>
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
              <Youtube size={16} className="text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white border-opacity-20 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <img 
        src="https://www.payoneer.com/wp-content/themes/payo/assets/img/payoneer-white-logo.svg" 
        width="162" 
        height="33" 
        alt="Payoneer" 
        className="w-32 lg:w-[162px] lg:h-[33px]" // Adjusted only for mobile
      />
            </div>
            <span className="text-gray-400 text-sm">© 2005-2025 Payoneer Inc., All Rights Reserved</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span className="bg-blue-600 px-2 py-1 rounded text-white text-xs">PCI</span>
            <span className="hover:text-white cursor-pointer transition-colors">Legal</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies Settings</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;