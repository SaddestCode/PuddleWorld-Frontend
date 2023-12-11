import React, { useState } from 'react';
import { Modal, Form, Button, Nav } from 'react-bootstrap';
import { UAParser } from 'ua-parser-js';
import type { LoginFormInfo } from '@/utils/auth/authFormInfo';

interface LoginFormModalProps {
  handleSubmit: (info: LoginFormInfo) => void;
  handleSignupInstead: () => void;
}

const LoginFormModal: React.FC<LoginFormModalProps> = ({ handleSubmit, handleSignupInstead }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parser = new UAParser();
    const browserInfo = parser.getBrowser();

    const signupInfo: LoginFormInfo = {
      username: username,
      plainPassword: password,
      browserInfo: browserInfo.name + " " + browserInfo.version
    };

    handleSubmit(signupInfo);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="loginUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button className="mt-3" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        Dont have an account?
        <Nav.Link onClick={handleSignupInstead} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          Sign up for one now.
        </Nav.Link>
      </Modal.Footer>
    </>
  );
};

export default LoginFormModal;