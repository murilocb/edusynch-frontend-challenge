import Image from 'next/image';
import { HeaderCoins } from './HeaderCoins';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useModal } from '@/utils/handleModals';
import Button from './Button';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

interface Props {}

export function Header(props: Props) {
  const [showContent, setShowContent] = useState(false);

  const [
    showSignInModal,
    showSignUpModal,
    showTransferModal,
    showAddCryptoModal,
    handleOpenSignInModal,
    handleOpenSignUpModal,
    handleCloseSignUpModal,
    handleCloseSignInModal,
    handleCloseTransferModal,
    handleCloseAddCryptoModal,
  ] = useModal();

  const handleShowContent = () => {
    setShowContent(false);
  };

  const handleHiddenContent = () => {
    setShowContent(true);
  };

  const handleSignUpClick = () => {
    handleCloseSignInModal(); // Close the sign-in modal
    handleOpenSignUpModal(); // Open the sign-up modal
  };

  const handleSignInClick = () => {
    handleCloseSignUpModal();
    handleOpenSignInModal();
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center h-16 w-full px-4 md:px-8 xl:px-96">
      <div className="flex space-x-8">
        <a href="#home">
          <Image
            src="/svgs/CoinSynch.svg"
            alt="CoinSynch Logo"
            width={124}
            height={21}
            priority
          />
        </a>
        {!showContent && (
          <div className="flex space-x-2 md:space-x-6">
            <a
              href="#about-us"
              className="text-gray-700 text-base"
              scroll-behavior="smooth"
            >
              About us
            </a>
            <a
              href="#top-cryptos"
              className="text-gray-700 text-base"
              scroll-behavior="smooth"
            >
              Top Cryptos
            </a>
          </div>
        )}
        <div className="md:hidden">
          {showContent && (
            <Button
              onClick={handleShowContent}
              className="text-base flex items-center justify-center"
            >
              <RxHamburgerMenu />
            </Button>
          )}
          {!showContent && (
            <Button
              onClick={handleHiddenContent}
              className="text-base flex items-center justify-center"
            >
              <RxHamburgerMenu />
            </Button>
          )}
        </div>
      </div>

      <div className="hidden md:flex">
        <HeaderCoins />
      </div>

      <div className="flex">
        {!showContent && (
          <Button
            onClick={handleSignInClick}
            className="text-base flex items-center justify-center"
          >
            Sign in
          </Button>
        )}
        {showSignInModal && <SignIn onClose={handleCloseSignInModal} />}
        {!showContent && (
          <Button
            onClick={handleSignUpClick}
            className="bg-customYellow w-32 h-10 rounded-full text-white text-base ml-8 flex items-center justify-center"
          >
            Sign up
          </Button>
        )}
        {showSignUpModal && <SignUp onClose={handleCloseSignUpModal} />}
      </div>
    </header>
  );
}
