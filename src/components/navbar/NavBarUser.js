import React from 'react';
import { Navbar, Container, Nav, OverlayTrigger, Tooltip, Dropdown, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function NavBarUser() {

    const navigate = useNavigate();

    const home = () => {
        navigate('/');
    }

    const cities = () => {
        navigate('/cities');
    }

    const properties = () => {
        navigate('/properties');
    }

    const chat = () => {
        navigate('/chat');
    }

    const ai = () => {
        navigate('/ai');
    }

    const bookings = () => {
        navigate('/bookings');
    }

    const gotoSignIn = () => {
        navigate('/signin');
    }

    const gotoSignUp = () => {
        navigate('/signup');
    }

    const isSignedIn = false; // check

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#043E96', minHeight: '70px' }} variant="dark">
            <Container>
                <Navbar.Brand href="" onClick={home} style={{ color: 'white', fontStyle: 'italic', fontWeight: 500, cursor: 'pointer' }}>
                    TravelMate.lk
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="" onClick={home} style={{ color: 'white', marginRight: '30px' }}>Home</Nav.Link>
                        <Nav.Link href="" onClick={cities} style={{ color: 'white', marginRight: '30px' }}>Cities</Nav.Link>
                        <Nav.Link href="" onClick={properties} style={{ color: 'white', marginRight: '30px' }}>Properties</Nav.Link>
                        <Nav.Link href="" onClick={chat} style={{ color: 'white', marginRight: '30px' }}>Chat</Nav.Link>
                        <Nav.Link href="" onClick={ai} style={{ color: 'white', marginRight: '30px' }}>AI Assistant</Nav.Link>
                        <Nav.Link href="" onClick={bookings} style={{ color: 'white', marginRight: '30px' }}>Bookings</Nav.Link>
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
                                <Button onClick={gotoSignIn} variant="light" style={{ color: '#043E96' }}>Sign In</Button>
                                <Button onClick={gotoSignUp} variant="light" style={{ color: '#043E96' }}>Sign Up</Button>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
