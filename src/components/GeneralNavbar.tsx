import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import ThemeChangerIcon from './ThemeToggleIcon';
import AuthModal from './auth/AuthModal';
import { useState } from 'react';
import { AuthMode } from '../utils/auth/authMode';
import type { AuthFormInfo } from '../utils/auth/authFormInfo';

const GeneralNavbar = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [currentAuthMode, setAuthMode] = useState(AuthMode.SIGNUP);
    const handleAuthClose = () => {
        setShowAuthModal(false);
    };

    const displaySignup = () => {
        setAuthMode(AuthMode.SIGNUP);
        setShowAuthModal(true);
    }

    const displayLogin = () => {
        setAuthMode(AuthMode.LOGIN);
        setShowAuthModal(true);
    }
    
    const handleAuthChange = (newMode: AuthMode) => {
        setAuthMode(newMode);
    }

    return (
    <>
        <Navbar expand="lg" className="mt-3">
            <Container>
                {/* TODO: Add logo or smth... */}
                <Navbar.Brand className="ml-5" href="#home">Puddle World</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/forum">Forum</Nav.Link>
                        <Nav.Link href="/flashcard">Flashcard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    <Button
                        className="mr-2"
                        variant="primary"
                        onClick={displaySignup}>
                            Sign Up
                    </Button>
                    <Button
                        className="mr-4"
                        variant="secondary"
                        onClick={displayLogin}>
                            Login
                    </Button>
                    <ThemeChangerIcon/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <hr></hr>

        <AuthModal
            authMode={currentAuthMode}
            show={showAuthModal}
            handleClose={handleAuthClose}
            handleAuthModeChange={handleAuthChange}
        />
    </>
  );
};

export default GeneralNavbar;