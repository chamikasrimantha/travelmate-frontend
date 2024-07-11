import React from 'react';
import { Navbar, Container, Nav, OverlayTrigger, Tooltip, Dropdown, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function NavBarAdmin() {

    const navigate = useNavigate();

    const dashboard = () => {
        navigate('/admin/dashboard');
    }

    const categories = () => {
        navigate('/admin/categories');
    }

    const cities = () => {
        navigate('/admin/cities');
    }

    const announcements = () => {
        navigate('/admin/announcements');
    }

    const properties = () => {
        navigate('/admin/properties');
    }

    const users = () => {
        navigate('/admin/users');
    }

    const gotoSignIn = () => {
        navigate('/admin/signin');
    }

    // const gotoSignUp = () => {
    //     navigate('/admin/signup');
    // }

    const gotoProfile = () => {
        navigate('/admin/profile');
    }

    const isSignedIn = true; // check

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#043E96', minHeight: '70px' }} variant="dark">
            <Container>
                <Navbar.Brand href="" onClick={dashboard} style={{ color: 'white', fontStyle: 'italic', fontWeight: 500, cursor: 'pointer' }}>
                    TravelMate.lk
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="" onClick={dashboard} style={{ color: 'white', marginRight: '30px' }}>Dashboard</Nav.Link>
                        <Nav.Link href="" onClick={categories} style={{ color: 'white', marginRight: '30px' }}>Categories</Nav.Link>
                        <Nav.Link href="" onClick={cities} style={{ color: 'white', marginRight: '30px' }}>Cities</Nav.Link>
                        <Nav.Link href="" onClick={announcements} style={{ color: 'white', marginRight: '30px' }}>Announcements</Nav.Link>
                        <Nav.Link href="" onClick={properties} style={{ color: 'white', marginRight: '30px' }}>Properties</Nav.Link>
                        <Nav.Link href="" onClick={users} style={{ color: 'white', marginRight: '30px' }}>Users</Nav.Link>
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
                                    <Dropdown.Item onClick={gotoProfile} href="">My profile settings</Dropdown.Item>
                                    <Dropdown.Item onClick={gotoSignIn} href="">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <Button onClick={gotoSignIn} variant="light" style={{ color: '#043E96' }}>Sign In</Button>
                                {/* <Button onClick={gotoSignUp} variant="light" style={{ color: '#043E96' }}>Sign Up</Button> */}
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
