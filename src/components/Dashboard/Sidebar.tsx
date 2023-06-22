import { useRouter } from 'next/router';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import Button from '../LandingPage/Button';

const Sidebar = () => {
  const router = useRouter();
  const [showContent, setShowContent] = useState(true);
  const [showAllItems, setShowAllItems] = useState(false);
  const topButton = showAllItems ? 'ml-2' : 'ml-6';
  const buttonWidth = showAllItems ? 'w-48' : 'w-16';
  const tableText = showAllItems ? 'flex' : 'hidden';

  const handleShowContent = () => {
    setShowContent(true);
  };

  const handleHiddenContent = () => {
    setShowContent(false);
  };

  const handleShowSideText = () => {
    if (showAllItems) {
      setShowAllItems(false);
    } else {
      setShowAllItems(true);
    }
  };

  const handleNavigation = (path: string) => {
    // Redirect to the specified path
    router.push(path);
  };

  return (
    <>
      {showContent && (
        <div
          className={`flex flex-col bg-white text-black h-screen ${buttonWidth} shadow-md mb-px`}
        >
          <div className="flex items-center justify-center p-4 mt-4"></div>
          <nav className="flex-grow">
            <ul className="flex flex-col space-y-2 md:space-y-4">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('/dashboard/wallet')}
                  className="flex items-center p-2 md:p-4"
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
                  <span className={`${tableText} ml-3 text-color-text`}>
                    Lorem Ipsum
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('/dashboard/crypto')}
                  className="flex items-center p-2 md:p-4"
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
                  <span className={`${tableText} ml-3 text-color-text`}>
                    Lorem Ipsum
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('/dashboard/bitcoin')}
                  className="flex items-center p-2 md:p-4"
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
                  <span className={`${tableText} ml-3 text-color-text`}>
                    Lorem Ipsum
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigation('/dashboard/business')}
                  className="flex items-center p-2 md:p-4"
                  data-tip="Lorem Ipsum"
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
                  <span className={`${tableText} ml-3 text-color-text`}>
                    Lorem Ipsum
                  </span>
                </button>
              </li>
              <li>
                <div className="flex md:hidden items-center p-1 ml-1 md:p-4 mt-12">
                  {
                    <Button
                      onClick={handleShowSideText}
                      className="text-customYellow"
                    >
                      {showAllItems ? (
                        <FiArrowLeftCircle className="text-customYellow w-7 h-7" />
                      ) : (
                        <FiArrowRightCircle className="text-customYellow w-7 h-7" />
                      )}
                    </Button>
                  }
                </div>
              </li>
            </ul>
          </nav>
          <Tooltip
            id="tooltip"
            place="right"
            style={{ backgroundColor: '#FBAB34', color: '#FFFF' }}
          />
        </div>
      )}
      <div className={`md:hidden absolute mt-6 ${topButton}`}>
        {!showContent && (
          <Button
            onClick={handleShowContent}
            className="text-base flex items-center justify-center"
          >
            <RxHamburgerMenu />
          </Button>
        )}
        {showContent && (
          <Button
            onClick={handleHiddenContent}
            className="text-base flex items-center justify-center"
          >
            <RxHamburgerMenu />
          </Button>
        )}
      </div>
    </>
  );
};

export default Sidebar;
