import React from 'react';
import { Navbar, Container, Nav, OverlayTrigger, Tooltip, Dropdown, Button } from 'react-bootstrap';
import { FaQuestionCircle, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function NavBarUser() {

    const navigate = useNavigate();

    const gotoSignIn = () => {
        navigate('/signin');
    }

    const gotoSignUp = () => {
        navigate('/signup');
    }

    const isSignedIn = true; // check

    return (
        <div>
            <Navbar style={{ backgroundColor: '#043E96', minHeight: '70px' }} variant="dark">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="" style={{ color: 'white', fontStyle: 'italic', fontWeight: 500, alignItems: 'center' }}>
                        TravelMate.lk
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" style={{ color: 'white', marginRight: '20px' }}>Home</Nav.Link>
                        <Nav.Link href="#cities" style={{ color: 'white', marginRight: '20px' }}>Cities</Nav.Link>
                        <Nav.Link href="#properties" style={{ color: 'white', marginRight: '20px' }}>Properties</Nav.Link>
                        <Nav.Link href="#chat" style={{ color: 'white', marginRight: '20px' }}>Chat</Nav.Link>
                        <Nav.Link href="#ai-assistant" style={{ color: 'white', marginRight: '20px' }}>AI Assistant</Nav.Link>
                        <Nav.Link href="#bookings" style={{ color: 'white', marginRight: '20px' }}>Bookings</Nav.Link>
                    </Nav>
                    <Nav>
                        {isSignedIn ? (
                            <Dropdown align="end">
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip id="tooltip-bottom">User settings</Tooltip>}
                                >
                                    <Dropdown.Toggle as="div" style={{ color: 'white', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                        <FaUserCircle size={30} />
                                    </Dropdown.Toggle>
                                </OverlayTrigger>
                                <Dropdown.Menu style={{ minWidth: '200px', right: 0, left: 'auto' }}>
                                    <Dropdown.Item href="#profile-settings">My profile settings</Dropdown.Item>
                                    <Dropdown.Item href="#logout">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <Button href="" onClick={gotoSignIn} variant="light" style={{ color: '#043E96' }}>Sign In</Button>
                                <Button href="" onClick={gotoSignUp} variant="light" style={{ color: '#043E96' }}>Sign Up</Button>
                            </div>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
