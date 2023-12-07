import React, { useState } from 'react';
import { Modal, Form, Button, Nav } from 'react-bootstrap';
import PasswordStrengthBar from 'react-password-strength-bar';
import type { SignupFormInfo } from '../../utils/auth/authFormInfo';

interface SignupFormModalProps {
  handleSubmit: (info: SignupFormInfo) => void;
  handleLoginInstead: () => void;
}

const SignupFormModal: React.FC<SignupFormModalProps> = ({ handleSubmit, handleLoginInstead }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const signupInfo: SignupFormInfo = {
      username: username,
      plainPassword: password,
      email: email,
    };

    handleSubmit(signupInfo);
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
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="signupEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="signupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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