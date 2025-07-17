import React, { useState, useEffect } from 'react';
import FeatureList from './FeatureList';
import FeatureImagePreview from './FeatureImagePreview';
import { TABS, FEATURES } from './data';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('get-paid');
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const activeFeaturesList = FEATURES[activeTab];
  const activeFeature = selectedFeature || hoveredFeature;

  // Auto-select the first feature when the tab changes
  useEffect(() => {
    if (activeFeaturesList?.length > 0) {
      setSelectedFeature(activeFeaturesList[0].id);
    }
  }, [activeTab]);

  return (
    <section className="py-8 md:py-15 bg-gradient-to-r from-blue-50 via-gray-100 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 md:mb-16 overflow-x-auto">
          <span className="hidden md:block border-l border-gray-300 h-6 my-auto mx-2" />
          {TABS.map(({ id, label }, index, array) => (
            <React.Fragment key={id}>
              <button
                onClick={() => {
                  setActiveTab(id);
                  setHoveredFeature(null);
                }}
                onMouseEnter={() => setHoveredFeature(id === activeTab ? null : id)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`px-3 md:px-15 py-3 md:py-4 text-sm md:text-base font-medium border-b-2 transition-all duration-200 relative whitespace-nowrap ${
                  activeTab === id
                    ? hoveredFeature && hoveredFeature !== id
                      ? 'border-transparent text-gray-600'
                      : 'border-green-500 text-black'
                    : hoveredFeature === id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
                style={{ fontSize: window.innerWidth >= 768 ? '16px' : '14px' }}
              >
                {label}
                {(activeTab === id && !(hoveredFeature && hoveredFeature !== id)) || hoveredFeature === id ? (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 transition-transform duration-300" />
                ) : null}
              </button>
              {index < array.length - 1 && <span className="hidden md:block border-l border-gray-300 h-6 my-auto mx-2" />}
            </React.Fragment>
          ))}
          <span className="hidden md:block border-l border-gray-300 h-6 my-auto mx-2" />
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="order-2 lg:order-1">
            <FeatureList
              list={activeFeaturesList}
              activeFeature={activeFeature}
              onHover={setHoveredFeature}
              onClick={setSelectedFeature}
              selectedFeature={selectedFeature}
            />
          </div>
          <div className="order-2 lg:order-2 lg:sticky lg:top-8">
            <FeatureImagePreview
              list={activeFeaturesList}
              activeFeature={activeFeature}
              defaultId={activeFeaturesList[0]?.id}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab;