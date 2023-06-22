import { useModal } from '@/utils/handleModals';
import Box from './Box';
import Button from './Button';
import CustomContent from './CustomContent';
import SignUp from './SignUp';
import Boxes from './Boxes';

const AboutUs = () => {
  const [
    showSignInModal,
    showSignUpModal,
    showTransferModal,
    showAddCryptoModal,
    handleOpenSignInModal,
    handleOpenSignUpModal,
    handleOpenTransferModal,
    handleOpenAddCryptoModal,
    handleCloseSignUpModal,
    handleCloseSignInModal,
    handleCloseTransferModal,
    handleCloseAddCryptoModal,
  ] = useModal();

  const handleSignUpClick = () => {
    handleCloseSignInModal(); // Close the sign-in modal
    handleOpenSignUpModal(); // Open the sign-up modal
  };

  const handleSignInClick = () => {
    handleCloseSignUpModal();
    handleOpenSignInModal();
  };

  const dynamicClassNames = {
    container: 'space-y-2 flex-auto w-96',
    title: 'text-customYellow text-xl font-semibold',
    subtitle: 'text-4xl font-semibold text-color-text',
    paragraph: 'text-color-text',
  };

  const dynamicTextContent = {
    title: 'Lorem ipsum',
    subtitle: 'Lorem ipsu',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
  };

  return (
    <div
      id="about-us"
      className="grid md:flex md:w-full md:h-full pb-40 justify-center items-center mt-40 md:mt-10 bg-gradient-to-b from-transparent to-[#F7F7F7]"
    >
      <div className="grid md:hidden">
        <CustomContent
          classNames={dynamicClassNames}
          textContent={dynamicTextContent}
        />
      </div>

      <Boxes message={''} />

      <div className="-ml-20 hidden md:grid">
        <CustomContent
          classNames={dynamicClassNames}
          textContent={dynamicTextContent}
        />
        <Button
          onClick={handleSignUpClick}
          className="bg-customYellow w-44 h-12 rounded-full text-white hidden md:flex items-center justify-center mt-8 mb-10"
        >
          Sign up now
        </Button>
        {showSignUpModal && <SignUp onClose={handleCloseSignUpModal} />}
      </div>
    </div>
  );
};

export default AboutUs;
