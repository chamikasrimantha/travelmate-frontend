import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Define components for each section
const PersonalDetails = () => {

    const isMobile = useMediaQuery('(max-width: 600px)');

    const squareStyle = {
        backgroundColor: 'white',
        border: '1px solid #DEDCDD',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '02px',
        textAlign: 'left',
    };

    return (
        <div>
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Personal details</h4>
                    <p style={{ textAlign: 'left' }}>Update your information and find out how it's used.</p>
                </div>
                <Row className="justify-content-center">
                    <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '90%' }}>
                        <div style={squareStyle}>
                            <p>Name: </p>
                            <p>Username: </p>
                            <p>Email: </p>
                            <p>Address: </p>
                            <p>Phone Number: </p>
                        </div>
                    </Col>
                    <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '90%' }}>
                        <div style={squareStyle}>
                            <Button variant="primary" >
                                Update
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const Security = () => <div>Security Section</div>;
const Privacy = () => <div>Privacy Section</div>;
const DeleteAccount = () => <div>Delete Account Section</div>;
const Logout = () => <div>Logout Section</div>;

const UserProfileCard = () => {
    const [activeSection, setActiveSection] = useState('personal-details');

    const buttonStyle = {
        marginTop: '10px',
        fontWeight: 'bold', 
        fontSize: '1rem',
        backgroundColor: 'white',
        border: '1px solid #DEDDDD',
        marginBottom: '10px',
        width: '100%',
        height: '70px',
        textAlign: 'left',
        padding: '10px'
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'personal-details':
                return <PersonalDetails />;
            case 'security':
                return <Security />;
            case 'privacy':
                return <Privacy />;
            case 'delete-account':
                return <DeleteAccount />;
            case 'logout':
                return <Logout />;
            default:
                return <PersonalDetails />;
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={3} style={{ borderRight: '1px solid #DEDDDD', padding: '10px' }}>
                    <Button variant="light" style={buttonStyle} onClick={() => setActiveSection('personal-details')}>
                        Personal details
                    </Button>
                    <Button variant="light" style={buttonStyle} onClick={() => setActiveSection('security')}>
                        Security
                    </Button>
                    <Button variant="light" style={buttonStyle} onClick={() => setActiveSection('privacy')}>
                        Privacy
                    </Button>
                    <Button variant="light" style={buttonStyle} onClick={() => setActiveSection('delete-account')}>
                        Delete account
                    </Button>
                    <Button variant="light" style={buttonStyle} onClick={() => setActiveSection('logout')}>
                        Logout
                    </Button>
                </Col>
                <Col xs={9} style={{ padding: '10px' }}>
                    {renderSection()}
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfileCard;
