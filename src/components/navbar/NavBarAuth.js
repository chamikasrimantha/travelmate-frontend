import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';

export default function NavBarAuth() {
    return (
        <div>
            <Navbar style={{ backgroundColor: '#043E96', minHeight: '70px' }} variant="dark">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="" style={{ color: 'white', fontStyle: 'italic', fontWeight: 500, alignItems: 'center' }}>
                        TravelMate.lk
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#help" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                            <FaQuestionCircle size={24} />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
