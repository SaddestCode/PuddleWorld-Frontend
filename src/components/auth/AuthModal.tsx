// NOTE: For Login and Signup
import React from 'react';
import { Modal } from 'react-bootstrap';
import { AuthMode } from '@/models/auth/authMode';
import type { AuthFormInfo, LoginFormInfo, SignupFormInfo } from '@/models/auth/authFormInfo';
import SignupFormModal from './SignupFormModal';
import LoginFormModal from './LoginFormModal';
import { API_ROUTES } from '@/const';

import { getThemeCookie } from '@/utils/cookies/themeCookieHandler';
import type { ResponseMessage } from '@/models/responseMessage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { AuthResponseData } from '@/models/auth/authResponseData';
import { setSessionCookie } from '@/utils/cookies/sessionCookieHandler';

interface AuthModalProps {
  authMode: AuthMode;
  show: boolean;
  handleClose: () => void;
  handleAuthModeChange: (newMode: AuthMode) => void;
}

async function requestLogin(info: LoginFormInfo) {
  const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info) 
  };

  const response = await fetch(API_ROUTES.USER_LOGIN, options);
  return response;
}

async function requestSignup(info: SignupFormInfo) {
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(info) 
  };

  const response = await fetch(API_ROUTES.USER_SIGNUP, options);
  return response;
}

async function requestDoneCallback(mode: AuthMode, response: Response) {
  let data = await response.json();
  let responseMessage = data.message as ResponseMessage;

  if (responseMessage.title != "SUCCESS") {
    toast.error(responseMessage.message);
    return;
  }

  let authData = responseMessage.data as AuthResponseData;
  setSessionCookie(authData.token, authData.displayName);

  let successMessage = "Signup successful, bringing you to the account page..."
  if (mode == AuthMode.LOGIN) {
    successMessage = `Welcome back ${authData.displayName}, bringing you to the account page...`
  }

  toast.success(successMessage);
  // TODO: Wait for 2 seconds or so, then bring to account page...
}

/**
 * A popup form, for user to either login or signup.
 * 
 * (Based off React Boostrap, see https://react-bootstrap.netlify.app/docs/components/modal/)
 */
const AuthModal: React.FC<AuthModalProps> = ({ authMode, show, handleClose, handleAuthModeChange }) => {

  const handleFormSubmit = (info: AuthFormInfo) => {
    if (authMode == AuthMode.LOGIN) {
      requestLogin(info as LoginFormInfo).then((response) => requestDoneCallback(authMode, response));
    } else {
      requestSignup(info as SignupFormInfo).then((response) => requestDoneCallback(authMode, response));
    }
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={getThemeCookie()}
      />
    </Modal>
  );
};

export default AuthModal;
