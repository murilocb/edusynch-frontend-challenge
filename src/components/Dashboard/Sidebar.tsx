import { useRouter } from 'next/router';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    // Redirect to the specified path
    router.push(path);
  };

  return (
    <>
      <div className="flex flex-col bg-white text-black h-screen w-20 shadow-md mb-px">
        <div className="flex items-center justify-center p-4 mt-4"></div>
        <nav className="flex-grow">
          <ul className="flex flex-col space-y-2 space-x-2">
            <li>
              <button
                type="button"
                onClick={() => handleNavigation('/dashboard/wallet')}
                className="flex items-center p-4 ml-2"
                data-tooltip-id="tooltip"
                data-tooltip-content="Lorem Ipsum"
                data-tooltip-place="right"
              >
                <Image
                  src="/images/WalletCrypto.png"
                  alt="WalletCrypto"
                  width={32}
                  height={32}
                  priority
                />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavigation('/dashboard/crypto')}
                className="flex items-center p-4"
                data-tooltip-id="tooltip"
                data-tooltip-content="Lorem Ipsum"
                data-tooltip-place="right"
              >
                <Image
                  src="/images/Crypto.png"
                  alt="Crypto"
                  width={32}
                  height={32}
                  priority
                />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavigation('/dashboard/bitcoin')}
                className="flex items-center p-4"
                data-tooltip-id="tooltip"
                data-tooltip-content="Lorem Ipsum"
                data-tooltip-place="right"
              >
                <Image
                  src="/images/Bitcoin.png"
                  alt="Bitcoin"
                  width={32}
                  height={32}
                  priority
                />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleNavigation('/dashboard/business')}
                className="flex items-center p-4"
                data-tooltip-id="tooltip"
                data-tooltip-content="Lorem Ipsum"
                data-tooltip-place="right"
              >
                <Image
                  src="/images/Business.png"
                  alt="Business"
                  width={32}
                  height={32}
                  priority
                />
              </button>
            </li>
          </ul>
        </nav>
        <Tooltip
          id="tooltip"
          style={{ backgroundColor: '#FBAB34', color: '#FFFF' }}
        />
      </div>
    </>
  );
};

export default Sidebar;
