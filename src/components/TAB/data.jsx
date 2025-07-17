import {
  CreditCard,
  Globe,
  ShoppingCart,
  Store,
  FileText,
  Users,
  DollarSign,
  Banknote,
  Eye,
  HandCoins,
  UserCheck,
  Settings,
} from 'lucide-react';

export const TABS = [
  { id: 'get-paid', label: 'Get paid' },
  { id: 'pay-use-funds', label: 'Pay and use funds' },
  { id: 'go-further', label: 'Go further, faster' },
  { id: 'hire-pay', label: 'Hire & Pay Globally' },
];

export const FEATURES = {
  'get-paid': [
    {
      id: 'billing',
      title: "Billing's a breeze",
      content: "Overseas doesn't mean overcomplicated With a few clicks, request payments from nearly anyone, anywhere and leave the rest to us.",
      icon: FileText,
      image: (
        <img
          src="https://www.payoneer.com/wp-content/uploads/billing-a-breeze.png.webp"
          alt="Billing's a breeze"
          className="w-90 h-90 object-contain"
        />
      ),
    },
    {
      id: 'work-global',
      title: 'Work global, feel local',
      content: 'Need a local bank account to get paid...',
      icon: Globe,
      image: (
        <img
          src="https://www.payoneer.com/wp-content/uploads/work-global-feel-local.png.webp"
          alt="Work global, feel local"
          className="w-90 h-90 object-contain"
        />
      ),
    },
     {
          id: 'marketplace',
          title: 'Seamless marketplace integrations',
          content:
            "We're integrated with 2,000 marketplaces, networks, and platforms like Wish, eBay, Airbnb, Fiverr, Upwork, and more so you can receive marketplace payments without a hassle.",
          icon: ShoppingCart,
          image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/seamless-marketplace-integrations.png.webp"
              alt="Seamless marketplace integrations"
              className="w-90 h-90 object-contain"
            />
          ),
        },
        {
          id: 'online-shop',
          title: 'Online shop? No problem',
          content:
            'Accept credit card payments on your personal website with fast settlements, high global acceptance rates, and 0% currency conversion fees on USD and EUR.',
          icon: Store,
          image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/personal-webstore-no-problem.png.webp"
              alt="Online shop? No problem"
              className="w-90 h-90 object-contain"
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
          icon: DollarSign,
          image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/make-payments-from-earnings-300x296.png.webp"
              alt="Make payments"
              className="w-90 h-90 object-contain"
            />
          ),
        },
        {
          id: 'other-ways',
          title: 'Use other ways to pay',
          content:
            'Pay your contractors, suppliers, or remote team with credit card, local bank transfer, ACH bank debit (US only), or direct bank payment (UK only)',
          icon: CreditCard,
          image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/make-payments-with-other-methods.png.webp"
              alt="Other ways to pay"
              className="w-90 h-90 object-contain"
            />
          ),
        },
        {
          id: 'pay-way',
          title: 'Pay your way',
          content:
            "Need a card to pay business expenses? We'll give you a physical or virtual card in multiple currencies attached to your account so you can make payments and withdraw funds.",
          icon: Banknote,
          image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/pay-your-way-card.png.webp"
              alt="Pay your way"
              className="w-90 h-90 object-contain"
            />
          ),
        },
        {
          id: 'withdraw',
          title: 'Withdraw your profits',
          content:
            'Get the flexibility you need. Withdraw funds from your Payoneer account to your bank account in over 190 countries and 70 currencies or at ATMs worldwide.',
          icon: Users,
          image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/withdraw-your-profits.png.webp"
              alt="Withdraw profits"
              className="w-90 h-90 object-contain"
            />
          ),
        },
    
  ],
  'go-further': [
    {
      id: 'multicurrency',
      title: 'Move in a multicurrency world',
      content: 'Manage multiple currencies and transfer between them at low cost so you always have the currency your business needs.',
      icon: Globe,
       image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/move-in-a-multicurrency-world.png.webp"
              alt="Move in a multicurrency world"
              className="w-90 h-90 object-contain"
            />
          ),
    },
    {
      id: 'finance-eye',
      title: 'Keep an eye on your finances',
      content: 'Payoneer lets you track your payments and download monthly reports so it’s easy to stay up to date and monitor your performance.',
      icon: Eye,
       image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/keep-an-eye-on-your-finances.png.webp"
              alt="Move in a multicurrency world"
              className="w-90 h-90 object-contain"
            />
          ),
    },
    {
      id: 'instant-funding',
      title: 'Instant funding',
      content: 'See a growth opportunity? Get funds through Capital Advance, based on future projected earnings.',
      icon: HandCoins,
       image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/instant-funding.png.webp"
              alt="Move in a multicurrency world"
              className="w-90 h-90 object-contain"
            />
          ),
    },
    {
      id: 'multiple-accounts',
      title: 'Manage multiple accounts',
      content: 'One Manager Account can give you payment transparency for all your Payoneer accounts with an intuitive dashboard and automatic funds consolidation.',
      icon: UserCheck,
      image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/keep-an-eye-on-your-finances.png.webp"
              alt="Move in a multicurrency world"
              className="w-90 h-90 object-contain"
            />
          ),
    },
    {
      id: 'streamline',
      title: 'Streamline your workflow',
      content: 'Enhance business efficiency by adding users and controlling their permissions. Scale up and delegate tasks without compromising on security.',
      icon: Settings,
        image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/user-management-product-illustration-updated.png.webp"
              alt="Move in a multicurrency world"
              className="w-90 h-90 object-contain"
            />
          ),
    },
  ],
  'hire-pay': [
    
    {
      id: 'onboard-hires',
      title: 'Onboard new hires in minutes',
      content: 'Hiring globally doesn’t have to be a hassle. Onboard your new team members in no time — we manage contracts, devices, work permits, and more.',
      icon: Users,
       image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/wfm-business-visual.jpg.webp"
              alt="Move in a multicurrency world"
              className="w-90 h-90 object-contain"
            />
          ),
    },
    {
      id: 'one-click-payments',
      title: 'Make payments with one click',
      content: 'Pay your global team easily in over 120 currencies, with Payoneer making local payments quick, accurate, and hassle-free.',
      icon: DollarSign,
        image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/wfm-business-visual.jpg.webp"
              alt="Move in a multicurrency world"
              className="w-90 h-90 object-contain"
            />
          ),
    },
    {
      id: 'hire-globally',
      title: 'Hire globally, manage locally',
      content: 'One platform for everything — benefits, invoicing, reimbursements, and more. Keep your team’s journey smooth, no matter where they are.',
      icon: Globe,
       image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/wfm-business-visual.jpg.webp"
              alt="Move in a multicurrency world"
              className="w-90 h-90 object-contain"
            />
          ),
    },
    {
      id: 'compliance',
      title: 'Stay 100% compliant',
      content: 'We’ve got compliance covered, so you don’t have to worry about local laws. Focus on your business, while we keep you compliant, always.',
      icon: FileText,
       image: (
            <img
              src="https://www.payoneer.com/wp-content/uploads/wfm-business-visual.jpg.webp"
              alt="Move in a multicurrency world"
              className="w-90 h-90 object-contain"
            />
          ),
    },
  ],
};
