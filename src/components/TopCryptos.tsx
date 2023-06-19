import { useState } from 'react';

const TopCryptos = () => {
  const initialData = [
    {
      id: 1,
      crypto: 'Bitcoin',
      price: '$45,678',
      change: '+2.56%',
      trade: 'Buy',
    },
    {
      id: 2,
      crypto: 'Ethereum',
      price: '$2,345',
      change: '-1.23%',
      trade: 'Sell',
    },
    {
      id: 3,
      crypto: 'Litecoin',
      price: '$178',
      change: '+0.57%',
      trade: 'Buy',
    },
    {
      id: 4,
      crypto: 'Ripple',
      price: '$0.785',
      change: '-0.89%',
      trade: 'Sell',
    },
    {
      id: 5,
      crypto: 'Cardano',
      price: '$2.34',
      change: '+1.78%',
      trade: 'Buy',
    },
    {
      id: 6,
      crypto: 'Polkadot',
      price: '$35.67',
      change: '-0.32%',
      trade: 'Sell',
    },
    {
      id: 7,
      crypto: 'Chainlink',
      price: '$20.56',
      change: '+0.93%',
      trade: 'Buy',
    },
    {
      id: 8,
      crypto: 'Stellar',
      price: '$0.409',
      change: '-1.45%',
      trade: 'Sell',
    },
    {
      id: 9,
      crypto: 'Filecoin',
      price: '$73.12',
      change: '+3.21%',
      trade: 'Buy',
    },
    {
      id: 10,
      crypto: 'Uniswap',
      price: '$24.87',
      change: '-2.15%',
      trade: 'Sell',
    },
  ];

  const [showAllItems, setShowAllItems] = useState(false);
  const [data, setData] = useState(initialData.slice(0, 4));
  const tableHeight = showAllItems ? 'h-848' : 'h-424';

  const handleViewMore = () => {
    if (showAllItems) {
      setData(initialData.slice(0, 4));
    } else {
      setData(initialData);
    }
    setShowAllItems(!showAllItems);
  };

  const handleBuy = (crypto: string) => {
    // Handle buy logic for the specific crypto
    console.log(`Buying ${crypto}`);
  };

  return (
    <div id="top-cryptos" className="flex flex-col items-center justify-center mt-40">
      <p className='font-bold text-5xl mb-20 text-color-text'>Top Cryptos</p>
      <table className={`table-fixed w-1440 ${tableHeight}`}>
        <thead>
          <tr>
            <th className="py-2 text-color-text font-extralight">#</th>
            <th className="py-2 text-color-text font-extralight">Crypto</th>
            <th className="py-2 text-color-text font-extralight">Price</th>
            <th className="py-2 text-color-text font-extralight">Change</th>
            <th className="py-2 text-color-text font-extralight">Trade</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="py-2 pl-32">{index < 9 ? '0' + item.id : item.id}</td>
              <td className="py-2 pl-28">{' '}{item.crypto}</td>
              <td className="py-2 pl-28">{item.price}</td>
              <td className={`py-2 pl-28 ${item.change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{item.change}</td>
              <td className="py-2 pl-28"><button
                  className="bg-green-600 py-1 px-2 w-24 h-10 rounded-full text-white"
                  onClick={() => handleBuy(item.crypto)}
                >
                  {item.trade}
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleViewMore}
        className="mt-4 text-customYellow py-2 px-4 rounded-full"
      >
        {showAllItems ? 'View less -' : 'View more +'}
      </button>
    </div>
  );
};

export default TopCryptos;
