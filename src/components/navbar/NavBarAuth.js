import React from 'react';
import { Navbar, Container, Nav, OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function NavBarAuth() {

    const navigate = useNavigate();

    const gotoUserSignIn = () => {
        navigate('/signin');
    }

    const gotoPartnerSignIn = () => {
        navigate('/partner/signin');
    }

    return (
        <div>
            <Navbar style={{ backgroundColor: '#043E96', minHeight: '70px' }} variant="dark">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="" style={{ color: 'white', fontStyle: 'italic', fontWeight: 500, alignItems: 'center' }}>
                        TravelMate.lk
                    </Navbar.Brand>
                    <Nav>
                        <Dropdown align="end">
                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id="tooltip-bottom">You should sign in</Tooltip>}
                            >
                                <Dropdown.Toggle as={Nav.Link} id="dropdown-custom-components" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                                    <FaQuestionCircle size={24} />
                                </Dropdown.Toggle>
                            </OverlayTrigger>
                            <Dropdown.Menu style={{ minWidth: '200px', right: 0, left: 'auto' }}>
                                <Dropdown.Item href="" onClick={gotoUserSignIn}>Sign in as a user</Dropdown.Item>
                                <Dropdown.Item href="" onClick={gotoPartnerSignIn}>Sign in as a partner</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
