import React, { useState } from 'react';
import { Modal, Form, Button, Nav } from 'react-bootstrap';
import PasswordStrengthBar from 'react-password-strength-bar';
import type { SignupFormInfo } from '@/models/auth/authFormInfo';

interface SignupFormModalProps {
  handleSubmit: (info: SignupFormInfo) => void;
  handleLoginInstead: () => void;
}

const SignupFormModal: React.FC<SignupFormModalProps> = ({ handleSubmit, handleLoginInstead }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validateForm = () => {
    const isUsernameValid = username.length >= 3;
    const isPasswordValid = password.length >= 8;

    setUsernameValid(isUsernameValid);
    setPasswordValid(isPasswordValid);

    return isUsernameValid && isPasswordValid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const signupInfo: SignupFormInfo = {
        username: username,
        plainPassword: password
      };

      handleSubmit(signupInfo);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="signupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isInvalid={!usernameValid}
            />
            <Form.Control.Feedback type="invalid">
              Username must be at least 3 characters long.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-3" controlId="signupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!passwordValid}
            />
            <Form.Control.Feedback type="invalid">
              Password must be at least 8 characters long.
            </Form.Control.Feedback>
          </Form.Group>
          <PasswordStrengthBar password={password} />

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        Already have an account?
        <Nav.Link onClick={handleLoginInstead} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          Login Instead.
        </Nav.Link>
      </Modal.Footer>
    </>
  );
};

export default SignupFormModal;