import { useState } from 'react';
import Image from 'next/image';
import Button from '../LandingPage/Button';
import { useModal } from '@/utils/handleModals';
import AddCryptoDialog from './AddCryptoDialog';
import { GiTrade } from 'react-icons/gi';

const MyWallet = () => {
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
  ];

  const [
    showSignInModal,
    showSignUpModal,
    showTransferpModal,
    showAddCryptoModal,
    handleOpenSignInModal,
    handleOpenSignUpModal,
    handleCloseSignUpModal,
    handleCloseSignInModal,
    handleCloseTransferModal,
    handleCloseAddCryptoModal,
  ] = useModal();

  const [data, setData] = useState(initialData);

  const handleBuy = (crypto: string) => {
    // Handle buy logic for the specific crypto
    console.log(`Buying ${crypto}`);
  };

  return (
    <div className="flex flex-col bg-white shadow-md p-8 md:p-8 m-px mb-16">
      <p className="font-bold text-5xl md:mb-20 text-color-text flex items-center">
        <Image
          className="mr-3 md:mr-4"
          src="/images/WalletCrypto.png"
          alt="WalletCrypto"
          width={32}
          height={32}
          priority
        />
        My Wallet
        <Button className="text-sm font-roboto flex items-center justify-center bg-customYellow rounded-full h-8 md:h-10 w-28 md:w-36 text-white ml-auto">
          + Add Crypto
        </Button>
        {showAddCryptoModal && (
          <AddCryptoDialog onClose={handleCloseAddCryptoModal} />
        )}
      </p>
      <div className="overflow-x-auto">
        <table className="table-auto md:w-1055 w-full h-424 md:h-424">
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
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : ''
                } hover:bg-gray-300`}
              >
                <td className="py-2 pl-2 md:pl-4 text-center">
                  {index < 9 ? '0' + item.id : item.id}
                </td>
                <td className="py-2 pl-1 md:pl-4 text-center">{item.crypto}</td>
                <td className="py-2 pl-1 md:pl-4 text-center">{item.price}</td>
                <td
                  className={`py-2 pl-1 md:pl-4 ${
                    item.change.includes('-')
                      ? 'text-red-500'
                      : 'text-green-500'
                  } text-center`}
                >
                  {item.change}
                </td>
                <td className="py-2 pl-1 md:pl-4 text-center">
                  <Button
                    className="py-1 px-2 md:px-4 text-color-text"
                    onClick={() => handleBuy(item.crypto)}
                  >
                    <GiTrade />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWallet;
