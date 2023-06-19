import { useModal } from '@/utils/handleModals';
import Box from './Box';
import Button from './Button';
import CustomContent from './CustomContent';
import SignUp from './SignUp';

const ContentCrypto = () => {
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
    <div className="flex justify-center items-center mt-72">
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-1">
          <Box imageSrc="/images/Bitcoin.png" altText="Bitcoin" />
        </div>
        <div className="col-span-1">
          <Box imageSrc="/images/Crypto.png" altText="Crypto" />
        </div>
        <div className="-ml-64 mr-64 col-start-2 col-span-1">
          <Box imageSrc="/images/Business.png" altText="Business" />
        </div>
        <div className="-ml-64 mr-64 col-start-3 col-span-1">
          <Box imageSrc="/images/Devices.png" altText="Devices" />
        </div>
      </div>

      <div className="-ml-52">
        <CustomContent
          classNames={dynamicClassNames}
          textContent={dynamicTextContent}
        />
        <Button
          onClick={handleSignUpClick}
          className="bg-customYellow w-44 h-12 rounded-full text-white flex items-center justify-center mt-8 mb-10"
        >
          Sign up now
        </Button>

        {showSignUpModal && <SignUp onClose={handleCloseSignUpModal} />}
      </div>
    </div>
  );
};

export default ContentCrypto;
