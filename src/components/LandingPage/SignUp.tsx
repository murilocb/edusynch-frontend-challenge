import Link from 'next/link';
import { useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import { BsEye, BsEyeSlash, BsPerson } from 'react-icons/bs';
import { BiLock } from 'react-icons/bi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { useModal } from '@/utils/handleModals';
import SignIn from './SignIn';
import { validateEmail } from '@/utils/validateEmail';
import ErrorMessage from './ErrorMessage';
import Button from './Button';
import router from 'next/router';

const SignUp = ({ onClose }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

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

  const handleSignInClick = () => {
    handleCloseSignUpModal();
    handleOpenSignInModal();
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setEmailError('Invalid email');
      return;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 6 characters long');
      return;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Password and confirm password do not match');
      return;
    } else {
      setEmailError('');
      setPasswordError('');
      setConfirmPasswordError('');
      router.push('/dashboard');
    }
  };

  const handleClose = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAcceptedTerms(false);
    onClose();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white pt-8 pb-8 pl-6 pr-6 rounded-md shadow-md max-w-md w-full">
        <div className="flex justify-end -mt-4 -mr-4">
          <Button onClick={handleClose} className="text-gray-600">
            <VscClose className="opacity-60" size={20} />
          </Button>
        </div>
        <div className="flex justify-center items-center mb-4 mt-2">
          <span className="text-lg">
            Sign Up To<span className="text-customYellow font-bold"> Coin</span>
            <span className="font-bold text-gray-400">Synch</span>
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <BsPerson className="text-gray-400 opacity-40" size={18} />
              </span>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border border-gray-300 pl-9 py-2 rounded"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <MdOutlineMailOutline
                  className="text-gray-400 opacity-40"
                  size={18}
                />
              </span>
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                className="w-full border border-gray-300 pl-9 py-2 rounded"
                placeholder="Email"
                required
              />
            </div>
          </div>
          {emailError && <ErrorMessage message={emailError} />}
          <div className="mb-4 relative">
            <div className="flex items-center">
              <span
                className="absolute inset-y-0 left-0 pl-3 flex items-center"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              >
                <BiLock className="text-gray-400 opacity-40" size={18} />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                  setPasswordError('');
                }}
                className="w-full border border-gray-300 pl-9 py-2 rounded"
                placeholder="Password"
                required
              />
            </div>
            <Button
              type="button"
              className="absolute top-1/3 right-2 text-gray-500 opacity-40"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BsEyeSlash size={18} /> : <BsEye size={18} />}
            </Button>
          </div>
          {passwordError && <ErrorMessage message={passwordError} />}
          <div className="mb-4 relative">
            <div className="flex items-center">
              <span
                className="absolute inset-y-0 left-0 pl-3 flex items-center"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              >
                <BiLock className="text-gray-400 opacity-40" size={18} />
              </span>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={e => {
                  setConfirmPassword(e.target.value);
                  setConfirmPasswordError('');
                }}
                className="w-full border border-gray-300 pl-9 py-2 rounded"
                placeholder="Confirm password"
                required
              />
            </div>
            <Button
              type="button"
              className="absolute top-1/3 right-2 text-gray-500 opacity-40"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <BsEyeSlash size={18} />
              ) : (
                <BsEye size={18} />
              )}
            </Button>
          </div>
          {confirmPasswordError && (
            <ErrorMessage message={confirmPasswordError} />
          )}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={e => setAcceptedTerms(e.target.checked)}
                className="mr-2 bg-customYellow mb-6"
              />
              <span>
                I have read and accept the{' '}
                <Link className="font-bold" href={''}>
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link className="font-bold" href={''}>
                  Terms of User Sign Up
                </Link>
              </span>
            </label>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-customYellow text-white w-full md:w-full h-10 md:h-12 rounded-full"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <div className="flex justify-center items-center mt-4">
          <Button onClick={handleSignInClick}>
            <span className="text-sm font-light">
              Already have an account?
              <span className="font-bold text-gray-600"> Sign in to</span>
              <span className="text-customYellow font-bold"> Coin</span>
              <span className="font-bold text-gray-400">Synch</span>
            </span>
          </Button>
          {showSignInModal && <SignIn onClose={handleCloseSignInModal} />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
