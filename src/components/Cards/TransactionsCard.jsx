const TransactionsCard = () => {
  const transactions = [
    { name: 'Paypal', subtitle: 'Received Money', amount: '+$24,820', isPositive: true, icon: '/paypal.svg' },
    { name: 'Credit Card', subtitle: 'Digital Ocean', amount: '-$1,250', isPositive: false, icon: '/creditcard.svg' },
    { name: 'Mastercard', subtitle: 'Netflix', amount: '-$99', isPositive: false, icon: '/mastercard.svg' },
    { name: 'Wallet', subtitle: 'Mac\'D', amount: '-$82', isPositive: false, icon: '/wallet.svg' },
    { name: 'Transfer', subtitle: 'Refund', amount: '+$8,934', isPositive: true, icon: '/transfer.svg' },
    { name: 'Wallet', subtitle: 'Buy Apple Watch', amount: '-$399', isPositive: false, icon: '/wallet2.svg' },
  ];

  return (
    <div className="font-inter bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[rgba(58,53,65,0.87)]">Transactions</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={transaction.icon} alt={transaction.name} className="w-12 h-12" />
              <div>
                <p className="text-lg font-semibold text-[#3A3541]">{transaction.name}</p>
                <p className="text-sm font-normal text-[rgba(58,53,65,0.87)]">{transaction.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[rgba(58,53,65,0.87)]">
                {transaction.amount}
              </span>
              <svg 
                className={`w-6 h-6 ${transaction.isPositive ? 'text-[#56CA00]' : 'text-[#FF4C51]'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={transaction.isPositive ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsCard;
