import React, { useState } from 'react';

const TABS = [
  { id: 'get-paid', label: 'Get paid' },
  { id: 'pay-use-funds', label: 'Pay and use funds' },
  { id: 'go-further', label: 'Go further, faster' },
  { id: 'hire-pay', label: 'Hire & Pay Globally' },
];

const FEATURES = {
  'get-paid': [
    {
      id: 'billing',
      title: "Billing's a breeze",
      content:
        "Overseas doesn't mean overcomplicated. With a few clicks, request payments from nearly anyone, anywhere and leave the rest to us.",
      image: (
        <img
          src="https://www.payoneer.com/wp-content/uploads/billing-a-breeze.png.webp"
          alt="Billing's a breeze"
          className="w-64 h-64 object-contain"
        />
      ),
    },
    {
      id: 'work-global',
      title: 'Work global, feel local',
      content:
        'Need a local bank account to get paid on Amazon or by a client? Local receiving accounts act just like local bank details making it easy for the world to pay you, fast.',
      image: (
        <img
          src="https://www.payoneer.com/wp-content/uploads/work-global-feel-local.png.webp"
          alt="Work global, feel local"
          className="w-64 h-64 object-contain"
        />
      ),
    },
    {
      id: 'marketplace',
      title: 'Seamless marketplace integrations',
      content:
        "We're integrated with 2,000 marketplaces, networks, and platforms like Wish, eBay, Airbnb, Fiverr, Upwork, and more so you can receive marketplace payments without a hassle.",
      image: (
        <img
          src="https://www.payoneer.com/wp-content/uploads/seamless-marketplace-integrations.png.webp"
          alt="Seamless marketplace integrations"
          className="w-64 h-64 object-contain"
        />
      ),
    },
    {
      id: 'online-shop',
      title: 'Online shop? No problem',
      content:
        'Accept credit card payments on your personal website with fast settlements, high global acceptance rates, and 0% currency conversion fees on USD and EUR.',
      image: (
        <img
          src="https://www.payoneer.com/wp-content/uploads/personal-webstore-no-problem.png.webp"
          alt="Online shop? No problem"
          className="w-64 h-64 object-contain"
        />
      ),
    },
  ],
  'pay-use-funds': [
    {
      id: 'make-payments',
      title: 'Make payments from your Payoneer account',
      content:
        'If you need to settle with contractors or suppliers, you can use the earnings in your Payoneer balance to pay directly to their bank accounts or their Payoneer account.',
      image: (
        <img
          src="https://www.payoneer.com/wp-content/uploads/make-payments-from-earnings-300x296.png.webp"
          alt="Make payments"
          className="w-64 h-64 object-contain"
        />
      ),
    },
    {
      id: 'other-ways',
      title: 'Use other ways to pay',
      content:
        'Pay your contractors, suppliers, or remote team with credit card, local bank transfer, ACH bank debit (US only), or direct bank payment (UK only)',
      image: (
        <img
          src="https://www.payoneer.com/wp-content/uploads/make-payments-with-other-methods.png.webp"
          alt="Other ways to pay"
          className="w-64 h-64 object-contain"
        />
      ),
    },
    {
      id: 'pay-way',
      title: 'Pay your way',
      content:
        "Need a card to pay business expenses? We'll give you a physical or virtual card in multiple currencies attached to your account so you can make payments and withdraw funds.",
      image: (
        <img
          src="https://www.payoneer.com/wp-content/uploads/pay-your-way-card.png.webp"
          alt="Pay your way"
          className="w-64 h-64 object-contain"
        />
      ),
    },
    {
      id: 'withdraw',
      title: 'Withdraw your profits',
      content:
        'Get the flexibility you need. Withdraw funds from your Payoneer account to your bank account in over 190 countries and 70 currencies or at ATMs worldwide.',
      image: (
        <img
          src="https://www.payoneer.com/wp-content/uploads/withdraw-your-profits.png.webp"
          alt="Withdraw profits"
          className="w-64 h-64 object-contain"
        />
      ),
    },
  ],
};

const FeatureList = ({
  list,
  activeFeature,
  onHover,
  onClick,
  selectedFeature,
}) => (
  <div className="space-y-12">
    {list.map((feature) => (
      <div
        key={feature.id}
        className="flex items-start space-x-4 cursor-pointer"
        onMouseEnter={() => onHover(feature.id)}
        onMouseLeave={() => onHover(null)}
        onClick={() =>
          onClick(feature.id === selectedFeature ? null : feature.id)
        }
      >
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 ${
            activeFeature === feature.id ? 'bg-blue-500' : 'bg-blue-100'
          }`}
        >
          <div
            className={`w-4 h-4 rounded ${
              activeFeature === feature.id ? 'bg-white' : 'bg-blue-500'
            }`}
          ></div>
        </div>
        <div>
          <h3
            className={`text-xl font-semibold mb-3 ${
              activeFeature === feature.id
                ? 'text-blue-600'
                : 'text-gray-900'
            }`}
          >
            {feature.title}
          </h3>
          <p className="text-gray-600 mb-4">{feature.content}</p>
          {feature.id !== 'billing' && feature.id !== 'make-payments' && (
            <button className="text-blue-500 hover:text-blue-600 font-medium">
              Explore more →
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
);

const FeatureImagePreview = ({ list, activeFeature, defaultId }) => (
  <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
    <div className="bg-white rounded-2xl shadow-lg p-6 relative z-10 h-96 flex items-center justify-center">
      {list.map((feature) => (
        <div
          key={feature.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            activeFeature === feature.id ||
            (!activeFeature && feature.id === defaultId)
              ? 'opacity-100'
              : 'opacity-0'
          }`}
        >
          {feature.image}
        </div>
      ))}
    </div>
    <div className="absolute top-4 right-4 w-32 h-32 bg-pink-200 rounded-full opacity-50"></div>
    <div className="absolute bottom-4 left-4 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
  </div>
);

export function Tab() {
  const [activeTab, setActiveTab] = useState('get-paid');
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const activeFeature = selectedFeature || hoveredFeature;
  const activeFeaturesList = FEATURES[activeTab];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center border-b border-gray-200 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-lg font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {(activeTab === 'get-paid' || activeTab === 'pay-use-funds') && (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FeatureList
              list={activeFeaturesList}
              activeFeature={activeFeature}
              onHover={setHoveredFeature}
              onClick={setSelectedFeature}
              selectedFeature={selectedFeature}
            />
            <FeatureImagePreview
              list={activeFeaturesList}
              activeFeature={activeFeature}
              defaultId="billing"
            />
          </div>
        )}

        {activeTab === 'go-further' && (
          <div className="space-y-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Scale your business globally
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access advanced tools and services to help your business grow
              beyond borders with multi-currency accounts and business insights.
            </p>
          </div>
        )}

        {activeTab === 'hire-pay' && (
          <div className="space-y-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Manage global workforce payments
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamline payments to freelancers and contractors worldwide with
              bulk payment options and automated workflows.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tab;
