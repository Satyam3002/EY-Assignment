const UpgradePlanCard = () => {
  return (
    <div className="font-inter bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-[rgba(58,53,65,0.87)]">Upgrade Your Plan</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      <p className="text-base font-medium text-[rgba(58,53,65,0.87)] mb-6">
        Plase make the payment to start enjoying all the features of our premium plan as soon as possible.
      </p>

      <div className="flex items-center justify-between bg-[#F7F5FF] rounded-lg p-4 mb-6">
        <div className="flex items-center gap-3">
          <img src="/platinum.svg" alt="Platinum" className="w-14 h-14" />
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold text-[rgba(58,53,65,0.87)]">Platinum</p>
            <p className="text-sm font-medium text-[#9155FD]">Upgrade Plan</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-[rgba(58,53,65,0.87)]">$5,250</span>
          <span className="text-sm text-gray-500">/Year</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium text-[#3A3541] mb-3">Payment details</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <img src="/mastercardicon.svg" alt="Mastercard" className="w-14 h-14" />
            <div>
              <p className="text-base font-semibold text-[#3A3541]">Credit card</p>
              <p className="text-sm font-normal text-[rgba(58,53,65,0.87)]">2566 xxxx xxxx 8908</p>
            </div>
          </div>
          <input
            type="text"
            placeholder="CVV"
            maxLength={3}
            className="w-18 border border-gray-300 rounded px-4 py-2 text-sm text-gray-500 text-center outline-none "
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src="/visaicon.svg" alt="Visa" className="w-12 h-12" />
            <div>
              <p className="text-base font-semibold text-[#3A3541]">Credit card</p>
              <p className="text-sm font-normal text-[rgba(58,53,65,0.87)]">2566 xxxx xxxx 8908</p>
            </div>
          </div>
          <input
            type="text"
            placeholder="CVV"
            maxLength={3}
            className="w-18 border border-gray-300 rounded px-4 py-2 text-sm text-gray-500 text-center outline-none "
          />
        </div>

        <button className="text-sm font-medium text-[#9155FD] hover:underline mb-4">
          Add Payment Method
        </button>
      </div>

      <input
        type="email"
        placeholder="Email Address"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-[rgba(58,53,65,0.87)] placeholder-[rgba(58,53,65,0.87)] outline-none mb-4"
      />

      <button className="w-full bg-[#9155FD] text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity">
        CONTECT NOW
      </button>
    </div>
  );
};

export default UpgradePlanCard;
