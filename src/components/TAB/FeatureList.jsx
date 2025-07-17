import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureList = ({ list, activeFeature, onHover, onClick, selectedFeature }) => (
  <div className="space-y-6">
    {list.map(({ id, title, content, icon: Icon }) => {
      const isActive = activeFeature === id;
      const isSelected = selectedFeature === id;

      return (
        <div
          key={id}
          className={`flex items-start space-x-4 cursor-pointer rounded-lg p-4 transition-all duration-300 ${
            isActive 
              ? 'translate-y-0 opacity-100 bg-blue-50 border-l-4 border-blue-500' 
              : 'translate-y-2 opacity-80 hover:translate-y-0 hover:opacity-100 hover:bg-gray-200'
          }`}
          onMouseEnter={() => onHover(id)}
          onMouseLeave={() => onHover(null)}
          onClick={() => onClick(id === selectedFeature ? null : id)}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mt-1 transition-all duration-300 ${
              isActive ? 'bg-blue-500 shadow-lg shadow-blue-200' : 'bg-gray-100 hover:bg-blue-100'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`} />
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                isActive ? 'text-blue-600' : 'text-gray-900'
              }`}
            >
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3 transition-opacity duration-200">
              {content}
            </p>

            {id !== 'billing' && id !== 'make-payments' && (
              <button 
                className={`text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group transition-all duration-300 ${
                  isActive ? 'translate-y-0' : 'translate-y-1'
                }`}
              >
                Explore more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            )}
          </div>
        </div>
      );
    })}
  </div>
);

export default FeatureList;