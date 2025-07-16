import React from 'react';
import { Clock, ThumbsUp, ShieldCheck } from 'lucide-react';

export const features = [
  {
    icon: <Clock size={24} className="text-gray-600 mb-2" />,
    title: 'No delays, low fees',
    description:
      'Sending payments to Payoneer customers is fast, and all transactions have refreshingly low fees.',
  },
  {
    icon: <ThumbsUp size={24} className="text-gray-600 mb-2" />,
    title: 'No surprises',
    description:
      "We'll always be completely transparent with our fees, so there'll be no unpleasant surprises.",
  },
  {
    icon: <ShieldCheck size={24} className="text-gray-600 mb-2" />,
    title: 'No trouble',
    description:
      "We collect our fees automatically, so you have the reassurance of knowing you're always up to date.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm w-60 text-center">
    {icon}
    <br/>
    <div className="h-1 w-[45px] bg-gradient-to-r from-pink-600 via-purple-700 to-[#0000ff] "></div>
    <h3 className="text-lg font-semibold text-gray-800 my-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const FeesSection = () => {
  return (
    <div className="bg-blue-50 px-5 py-10 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fees made easy</h2>
      <p className="text-base text-gray-600 mb-8">
        We've made our pricing easy to understand, the way it should be.
      </p>
      <div className="flex justify-center flex-wrap gap-5 mb-8">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
      <button className="bg-black text-white px-5 py-2  hover:bg-gray-900 transition rounded-full">
        See our pricing
      </button>
    </div>
  );
};

export default FeesSection;
