import React, { useState } from 'react';
import FeatureList from './FeatureList';
import FeatureImagePreview from './FeatureImagePreview';
import { TABS, FEATURES } from './data';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('get-paid');
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const activeFeature = selectedFeature || hoveredFeature;
  const activeFeaturesList = FEATURES[activeTab];

  return (
    <section className="py-15 bg-gradient-to-r  from-blue-50 via-gray-100  to-gray-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-16">
          <span className="border-l border-gray-300 h-6 my-auto mx-2" />
          {TABS.map(({ id, label }, index, array) => (
            <React.Fragment key={id}>
              <button
                onClick={() => {
                  setActiveTab(id);
                  setSelectedFeature(null);
                  setHoveredFeature(null);
                }}
                onMouseEnter={() => setHoveredFeature(id === activeTab ? null : id)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`px-15 py-4 text-base font-medium border-b-2 transition-all duration-200 relative ${
                  activeTab === id
                    ? hoveredFeature && hoveredFeature !== id
                      ? 'border-transparent text-gray-600'
                      : 'border-green-500 text-black'
                    : hoveredFeature === id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
                style={{ fontSize: '16px' }}
              >
                {label}
                {(activeTab === id && !(hoveredFeature && hoveredFeature !== id)) || hoveredFeature === id ? (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 transition-transform duration-300" />
                ) : null}
              </button>
              {index < array.length - 1 && <span className="border-l border-gray-300 h-6 my-auto mx-2" />}
            </React.Fragment>
          ))}
          <span className="border-l border-gray-300 h-6 my-auto mx-2" />
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="order-2 lg:order-1">
            <FeatureList
              list={activeFeaturesList}
              activeFeature={activeFeature}
              onHover={setHoveredFeature}
              onClick={setSelectedFeature}
              selectedFeature={selectedFeature}
            />
          </div>
          <div className="order-1 lg:order-2 sticky top-8">
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