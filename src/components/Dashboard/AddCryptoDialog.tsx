import { SetStateAction, useState } from 'react';
import Button from '../LandingPage/Button';
import { VscClose } from 'react-icons/vsc';

const AddCryptoDialog =( { onClose }: any) => {
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [quantity, setQuantity] = useState('');

  // Fetch crypto options from API
  // For example:
  // const fetchCryptoOptions = async () => {
  //   const response = await fetch('/api/cryptos');
  //   const data = await response.json();
  //   // Set the data to a state variable or pass it as a prop to the component
  // };
  // fetchCryptoOptions();
  // Replace the above code with your API logic to fetch the crypto options
  // and set them to a state variable or pass them as a prop to the component.
  // For demonstration purposes, I'll use a static array of options here:
  const staticCryptoOptions = [
    'Bitcoin',
    'Ethereum',
    'Cardano',
    'Solana',
    'USD Coin',
  ];

  const handleSelectCrypto = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedCrypto(e.target.value);
  };

  const handleQuantityChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuantity(e.target.value);
  };

  const handleAddCrypto = () => {
    // Add logic to handle adding the selected crypto to the wallet
    // For example, make an API call to add the crypto to the user's wallet
    // or update the wallet state in the parent component.
    // You can access the selected crypto using the `selectedCrypto` state variable.
    console.log('Adding crypto:', selectedCrypto);
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
        <h3 className="text-color-text text-2xl font-semibold mb-8 ml-32">
          Add Crypto
        </h3>
        <select
          className="w-full border border-gray-300 rounded p-2 mb-8"
          value={selectedCrypto}
          onChange={handleSelectCrypto}
        >
          <option value="">Choose Crypto</option>
          {staticCryptoOptions.map((crypto) => (
            <option key={crypto} value={crypto}>
              {crypto}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="0,00"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <div className="flex items-center justify-center">
          <button
            className="bg-customYellow text-white px-4 py-2 rounded-full w-full h-12 mt-4"
            onClick={handleAddCrypto}
            disabled={!selectedCrypto}
          >
            Add Crypto
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCryptoDialog;
