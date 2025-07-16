// src/components/InfoCard.jsx
import React from 'react';

const InfoCard = ({ Icon, title, description, iconColor }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition duration-300 hover:shadow-lg">
    <div className="mb-4">
      <div className={`inline-flex p-3 rounded-lg bg-gray-800 ${iconColor}`}>
        <Icon size={24} />
      </div>
    </div>
    <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default InfoCard;
