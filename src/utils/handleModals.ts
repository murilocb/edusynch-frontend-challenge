import { useState } from "react";

export const useModal = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showAddCryptoModal, setShowAddCryptoModal] = useState(false);

  const handleOpenSignInModal = () => {
    setShowSignInModal(true);
  };

  const handleOpenSignUpModal = () => {
    setShowSignUpModal(true);
  };

  const handleOpenTransferModal = () => {
    setShowTransferModal(true);
  };

  const handleOpenAddCryptoModal = () => {
    setShowAddCryptoModal(true);
  };

  const handleCloseSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const handleCloseSignInModal = () => {
    setShowSignInModal(false);
  };

  const handleCloseTransferModal = () => {
    setShowTransferModal(false);
  };

  const handleCloseAddCryptoModal = () => {
    setShowAddCryptoModal(false);
  };

  return [showSignInModal,
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
    handleCloseAddCryptoModal,] as const;
};
