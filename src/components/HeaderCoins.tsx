interface Props {}

export function HeaderCoins(props: Props) {
  return (
    <div className="flex overflow-hidden ml-auto mr-10">
      <div className="slide flex md:space-x-6">
        <div className="flex space-x-2">
          <p>BIT</p>
          <p className="text-gray-500">R$ 23,62</p>
          <p className="text-green-500">+7,082</p>
        </div>

        <div className="flex space-x-2">
          <p>DOG</p>
          <p className="text-gray-500">R$ 23,62</p>
          <p className="text-red-500">-5,230</p>
        </div>

        <div className="flex space-x-2">
          <p>ETH</p>
          <p className="text-gray-500">R$ 42,42</p>
          <p className="text-green-500">+4,424</p>
        </div>
      </div>
    </div>
  );
}

