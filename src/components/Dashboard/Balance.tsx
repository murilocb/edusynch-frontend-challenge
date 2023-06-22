import { useEffect, useState } from 'react';
import formatCurrency from '@/utils/formatCurrency';
import Image from 'next/image';

const Balance = () => {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    // Fetch balance data from API
    // For example:
    // const fetchBalance = async () => {
    //   const response = await fetch('/api/balance');
    //   const data = await response.json();
    //   setBalance(data.balance);
    // };
    // fetchBalance();
    // For demonstration purposes, I'll use a static value here:
    setBalance(10000);
  }, []);

  return (
    <div className="bg-white rounded-md h-28 w-auto ml-6 md:w-auto flex flex-row md:mt-10 md:flex-row md:items-center shadow-md">
      <div className="flex -mr-8">
        <Image
          className="m-6"
          alt="Balance"
          src="/images/Balance.png"
          width={64}
          height={64}
          priority
        />
      </div>
      <div className="flex flex-col justify-center flex-grow p-10 md:p-10">
        <h3 className="text-color-secondary-500 text-lg md:text-xl font-semibold mb-1">
          Balance in US$
        </h3>
        <span className="text-color-secondary-500 text-sm font-light">
          (approximately)
        </span>
      </div>
      <div className="bg-color-primary-100 flex items-center justify-center p-6 md:p-10">
        <p className="text-2xl md:text-3xl font-bold text-color-text">
          {formatCurrency(balance)}
        </p>
      </div>
    </div>
  );
};

export default Balance;
