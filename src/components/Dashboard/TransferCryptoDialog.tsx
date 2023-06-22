import { SetStateAction, useState } from 'react';
import Button from '../LandingPage/Button';
import { VscClose } from 'react-icons/vsc';
import Image from 'next/image';

const TransferCryptoDialog = ({ onClose }: any) => {
  const [transferType, setTransferType] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleTransferTypeChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setTransferType(e.target.value);
  };

  const handleQuantityChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuantity(e.target.value);
  };

  const handleTransferCrypto = () => {
    // Add logic to handle transferring crypto
    // For example, make an API call to transfer the specified quantity of the selected crypto
    // or update the wallet state in the parent component.
    // You can access the transfer type and quantity using the `transferType` and `quantity` state variables.
    console.log('Transfer type:', transferType);
    console.log('Quantity:', quantity);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md max-w-md">
        <div className="flex justify-end -mt-5 -mr-5">
          <Button onClick={handleClose} className="text-gray-600">
            <VscClose className="opacity-60" size={20} />
          </Button>
        </div>
        <h3 className="text-color-text text-2xl font-semibold mb-8 ml-4">
          Transfer Crypto
        </h3>
        <div className="flex mb-4 items-center justify-center">
          <span className="flex items-center justify-center text-color-secondary-400">
            You are transferring
            <Image
              className="ml-2"
              alt="BitcoinMini"
              src="/images/BitcoinMini.png"
              width={24}
              height={24}
              priority
            />
            <span className="ml-2 text-black">
              Bitcoin <span className="text-color-secondary-500">BTC</span>
            </span>
          </span>
        </div>
        <span className="text-color-text">Transfer</span>
        <select
          className="w-full border border-gray-300 rounded p-2 mb-8"
          value={transferType}
          onChange={handleTransferTypeChange}
        >
          <option className="" value="">
            Select transfer
          </option>
          <option value="transferIn">Transfer in</option>
          <option value="transferOut">Transfer out</option>
        </select>
        <span className="text-color-text">Quantity</span>
        <input
          type="number"
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="0,00"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <div className="flex items-center justify-center">
          <Button
            className="bg-customYellow text-white px-4 py-2 rounded-full w-full h-12 mt-4"
            onClick={handleTransferCrypto}
            disabled={!transferType || !quantity}
          >
            Transfer Crypto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransferCryptoDialog;
