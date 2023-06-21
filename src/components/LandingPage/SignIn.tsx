import { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import Link from 'next/link';
import { BiLock } from 'react-icons/bi';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import SignUp from './SignUp';
import { useModal } from '@/utils/handleModals';
import { validateEmail } from '@/utils/validateEmail';
import ErrorMessage from './ErrorMessage';
import Button from './Button';
import { useRouter } from 'next/router';

const SignIn = ({ onClose }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPasswordError, setEmailOrPasswordError] = useState('');
  const router = useRouter();

  const [
    showSignInModal,
    showSignUpModal,
    showTransferpModal,
    showAddCryptoModal,
    handleOpenSignInModal,
    handleOpenSignUpModal,
    handleCloseSignUpModal,
    handleCloseSignInModal,
    handleCloseTransferModal,
    handleCloseAddCryptoModal,
  ] = useModal();

  const handleSignUpClick = () => {
    handleCloseSignInModal();
    handleOpenSignUpModal();
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const isValidEmail = validateEmail(email);
    if (!isValidEmail || password.length < 8) {
      setEmailOrPasswordError('Invalid email or password!');
    } else {
      setEmailOrPasswordError('');
      router.push('/dashboard');
    }
  };

  const handleClose = () => {
    setEmail('');
    setPassword('');
    onClose();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white pt-12 pb-12 pl-12 pr-12 rounded-md shadow-md max-w-md w-full">
        <div className="flex justify-end -mt-8 -mr-8">
          <Button onClick={handleClose} className="text-gray-600">
            <VscClose className="opacity-60" size={20} />
          </Button>
        </div>
        <div className="flex justify-center items-center mb-4 mt-2">
          <span className="text-xl">
            Sign In To<span className="text-customYellow font-bold"> Coin</span>
            <span className="font-bold text-gray-400">Synch</span>
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <div className="flex items-center">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <MdOutlineMailOutline
                  className="text-gray-400 opacity-40"
                  size={20}
                />
              </span>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-gray-300 pl-10 py-2 rounded"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <div className="flex items-center">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <BiLock className="text-gray-400 opacity-40" size={20} />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-gray-300 pl-10 py-2 rounded"
                placeholder="Password"
                required
              />
            </div>
            <Button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 opacity-40"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </Button>
          </div>
          {emailOrPasswordError && (
            <ErrorMessage message={emailOrPasswordError} />
          )}
          <div className="flex justify-end -mt-2 mb-4">
            <Link
              href={''}
              className="text-xs font-light text-gray-600 opacity-80"
            >
              Forgot password?
            </Link>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-customYellow text-white w-full md:w-full h-10 md:h-12 rounded-full"
            >
              Sign In
            </Button>
          </div>
          <div className="flex justify-center items-center mt-4 -mb-6">
            <Button onClick={handleSignUpClick}>
              <span className="text-sm font-light">
                Don't have an account?
                <span className="font-bold text-gray-600"> Sign up to</span>
                <span className="text-customYellow font-bold"> Coin</span>
                <span className="font-bold text-gray-400">Synch</span>
              </span>
            </Button>
            {showSignUpModal && <SignUp onClose={handleCloseSignUpModal} />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
