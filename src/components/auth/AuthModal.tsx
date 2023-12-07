// NOTE: For Login and Signup
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AuthMode } from '../../utils/auth/authMode';
import type { AuthFormInfo } from '../../utils/auth/authFormInfo';
import SignupFormModal from './SignupFormModal';
import LoginFormModal from './LoginFormModal';

interface AuthModalProps {
  authMode: AuthMode;
  show: boolean;
  handleClose: () => void;
  handleAuthModeChange: (newMode: AuthMode) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ authMode, show, handleClose, handleAuthModeChange }) => {
  const handleFormSubmit = (info: AuthFormInfo) => {
    // TODO: Backend request to login or signup
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

      {
        (authMode == AuthMode.LOGIN) &&
        <LoginFormModal handleSubmit={handleFormSubmit} handleSignupInstead={flipAuthMode}/>
      }
    </Modal>
  );
};

export default AuthModal;
