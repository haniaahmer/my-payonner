import React, { useState, useEffect } from 'react';

const CompanyLogos = () => {
  const [logos, setLogos] = useState({});
  const [loading, setLoading] = useState(true);

  const companies = [
    { name: 'Google', fallback: 'https://logo.clearbit.com/google.com' },
    { name: 'Visa', fallback: 'https://logo.clearbit.com/visa.com' },
    { name: 'Taboola', fallback: 'https://logo.clearbit.com/taboola.com' },
    { name: 'TuneCore', fallback: 'https://logo.clearbit.com/tunecore.com' },
    { name: 'eBay', fallback: 'https://logo.clearbit.com/ebay.com' },
    { name: 'Airbnb', fallback: 'https://logo.clearbit.com/airbnb.com' }
  ];

  useEffect(() => {
    const fetchLogos = async () => {
      const logoPromises = companies.map(async (company) => {
        try {
          // Using Clearbit Logo API as a reliable alternative to Google Images
          // This provides high-quality company logos
          const response = await fetch(`https://logo.clearbit.com/${company.name.toLowerCase()}.com`);
          if (response.ok) {
            return { [company.name]: `https://logo.clearbit.com/${company.name.toLowerCase()}.com` };
          }
          throw new Error('Failed to fetch from Clearbit');
        } catch (error) {
          // Fallback to a constructed logo URL or placeholder
          return { [company.name]: company.fallback };
        }
      });

      try {
        const results = await Promise.all(logoPromises);
        const logoMap = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
        setLogos(logoMap);
      } catch (error) {
        console.error('Error fetching logos:', error);
        // Set fallback logos
        const fallbackLogos = companies.reduce((acc, company) => {
          acc[company.name] = company.fallback;
          return acc;
        }, {});
        setLogos(fallbackLogos);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600">Loading company logos...</p>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          In good company
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We work with businesses and marketplaces of every size,
          <br />
          including several you might recognize.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
            >
              <img
                src={logos[company.name]}
                alt={`${company.name} logo`}
                className="max-h-12 max-w-24 object-contain"
                onError={(e) => {
                  // Fallback to a simple text logo if image fails
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div
                className="hidden text-gray-700 font-semibold text-sm"
                style={{ display: 'none' }}
              >
                {company.name}
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </div>
  );
};

export default CompanyLogos;