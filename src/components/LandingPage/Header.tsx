import Image from 'next/image';
import { HeaderCoins } from './HeaderCoins';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useModal } from '@/utils/handleModals';
import Button from './Button';

interface Props {}

export function Header(props: Props) {
  const [
    showSignInModal,
    showSignUpModal,
    handleOpenSignInModal,
    handleOpenSignUpModal,
    handleCloseSignUpModal,
    handleCloseSignInModal,
  ] = useModal();

  const handleSignUpClick = () => {
    handleCloseSignInModal(); // Close the sign-in modal
    handleOpenSignUpModal(); // Open the sign-up modal
  };

  const handleSignInClick = () => {
    handleCloseSignUpModal();
    handleOpenSignInModal();
  };

  return (
    <header className="flex justify-center items-center h-16 w-full px-96 mx-auto">
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
        <div className="flex space-x-6">
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
      </div>

      <HeaderCoins />

      <div className="flex">
        <Button
          onClick={handleSignInClick}
          className="text-base flex items-center justify-center"
        >
          Sign in
        </Button>
        {showSignInModal && <SignIn onClose={handleCloseSignInModal} />}
        <Button
          onClick={handleSignUpClick}
          className="bg-customYellow w-32 h-10 rounded-full text-white text-base ml-8 flex items-center justify-center"
        >
          Sign up
        </Button>
        {showSignUpModal && <SignUp onClose={handleCloseSignUpModal} />}
      </div>
    </header>
  );
}