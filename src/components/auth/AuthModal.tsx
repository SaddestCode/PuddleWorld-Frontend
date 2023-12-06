// NOTE: For Login and Signup
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AuthMode } from '../../utils/auth/authMode';
import type { AuthFormInfo } from '../../utils/auth/authFormInfo';
import SignupFormModal from './SignupFormModal';

interface AuthModalProps {
  authMode: AuthMode;
  show: boolean;
  handleClose: () => void;
  handleSubmit: (authMode: AuthMode, info: AuthFormInfo) => void; 
  handleAuthModeChange: (newMode: AuthMode) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ authMode, show, handleClose, handleSubmit, handleAuthModeChange }) => {
  const handleFormSubmit = (info: AuthFormInfo) => {
    handleSubmit(authMode, info);
  }

  const flipAuthMode = () => {
    if (authMode == AuthMode.LOGIN) {
      handleAuthModeChange(AuthMode.SIGNUP);
    } else {
      handleAuthModeChange(AuthMode.LOGIN);
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      {
        (authMode == AuthMode.SIGNUP) &&
        <SignupFormModal handleSubmit={handleFormSubmit} handleLoginInstead={flipAuthMode}/>
      }
    </Modal>
  );
};

export default AuthModal;
