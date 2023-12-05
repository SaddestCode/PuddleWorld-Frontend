import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeChangerIcon from './ThemeToggleIcon';

const GeneralNavbar = () => {
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
                <ThemeChangerIcon/>
                {/* TODO: SIGNUP/LOGIN buttons...*/}
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <hr></hr>
    </>
  );
};

export default GeneralNavbar;