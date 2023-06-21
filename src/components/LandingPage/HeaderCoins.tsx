interface Props {}

export function HeaderCoins(props: Props) {
  return (
    <div className="grid overflow-hidden mx-auto md:h-6">
      <div className="slide flex flex-row md:flex-row space-x-2 md:space-x-2">
        <p>BIT</p>
        <p className="text-gray-500">R$ 23,62</p>
        <p className="text-green-500">+7,082</p>
        <p>DOG</p>
        <p className="text-gray-500">R$ 23,62</p>
        <p className="text-red-500">-5,230</p>
        <p>ETH</p>
        <p className="text-gray-500">R$ 42,42</p>
        <p className="text-green-500">+4,424</p>
      </div>
    </div>
  );
}
