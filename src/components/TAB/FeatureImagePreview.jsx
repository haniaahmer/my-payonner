import React from 'react';

const FeatureImagePreview = ({ list, activeFeature, defaultId }) => (
  <div className="h-[500px] relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 shadow-lg border border-gray-200">
    <div className="relative z-7 h-full overflow-hidden p-2">
      {list.map(({ id, image }) => {
        const isActive = activeFeature === id || (!activeFeature && id === defaultId);

        return (
          <div
            key={id}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
              isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="max-w-[90%] max-h-full flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-300 rounded-xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm">
              {image ? (
                <div className="w-full h-full flex items-center justify-center ">
                  {image}
                </div>
              ) : (
                <div className="w-80 h-100 flex items-center justify-center bg-gray-100 rounded-lg">
                  <div className="text-gray-500 text-lg font-medium">Image Preview</div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default FeatureImagePreview;