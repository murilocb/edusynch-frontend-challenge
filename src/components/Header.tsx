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
    <header className="flex justify-center items-center h-16 w-full px-96">
      <div className="flex space-x-8">
        <Image
          src="/svgs/CoinSynch.svg"
          alt="CoinSynch Logo"
          width={124}
          height={21}
          priority
        />
        <div className="flex space-x-6">
          <p className="text-gray-700 text-base">About us</p>
          <p className="text-gray-700 text-base">Top Cryptos</p>
        </div>
      </div>

      <HeaderCoins />

      <div className="flex">
        <Button onClick={handleSignInClick} className="text-base">
          Sign in
        </Button>
        {showSignInModal && <SignIn onClose={handleCloseSignInModal} />}
        <Button
          onClick={handleSignUpClick}
          className="bg-customYellow w-32 h-10 rounded-full text-white text-base ml-8"
        >
          Sign up
        </Button>
        {showSignUpModal && <SignUp onClose={handleCloseSignUpModal} />}
      </div>
    </header>
  );
}
