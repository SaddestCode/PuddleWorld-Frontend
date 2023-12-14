import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import ThemeChangerIcon from './ThemeToggleIcon';
import AuthModal from './auth/AuthModal';
import { useEffect, useState } from 'react';
import { AuthMode } from '@/models/auth/authMode';
import { getSessionCookie, type SessionCookie } from '@/utils/cookies/sessionCookieHandler';

const GeneralNavbar = () => {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [currentAuthMode, setAuthMode] = useState(AuthMode.SIGNUP);
    
    const [userSession, setUserSession] = useState<SessionCookie | undefined>(undefined);

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

    useEffect(() => {
        setUserSession(getSessionCookie());
    }, [])

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

                    { 
                        // Show login/signup button if user is not logged in...
                        !userSession &&
                        <>
                            <Button
                                className="mr-2"
                                variant="primary"
                                onClick={displaySignup}>
                                    Sign Up
                            </Button>
                            <Button
                                className="mr-2"
                                variant="secondary"
                                onClick={displayLogin}>
                                    Login
                            </Button>
                        </>
                    }

                    { 
                        // TODO: Show user profile picture
                        // TODO: Display name should be dropdown on click, accessing user settings or profile page, etc...
                        userSession &&
                        <>
                            Welcome back, <b>{userSession.displayName}</b>
                        </>
                    }
                    
                    <div className="ml-2"/>
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