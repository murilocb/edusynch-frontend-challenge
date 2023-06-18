import { useState } from "react";

export const useModal = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleOpenSignInModal = () => {
    setShowSignInModal(true);
  };

  const handleOpenSignUpModal = () => {
    setShowSignUpModal(true);
  };

  const handleCloseSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const handleCloseSignInModal = () => {
    setShowSignInModal(false);
  };

  return [showSignInModal, showSignUpModal, handleOpenSignInModal, handleOpenSignUpModal, handleCloseSignUpModal, handleCloseSignInModal] as const;
};
