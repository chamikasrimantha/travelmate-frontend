import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarAuth from '../../../components/navbar/NavBarAuth';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';

export default function PartnerSignUp() {

    const navigate = useNavigate();

    const gotoSignIn = () => {
        navigate('/partner/signin');
    }

    return (
        <div>
            <NavBarAuth />
            <Container style={{ padding: '20px', marginTop: '20px', textAlign: 'left' }} className="mt-1">
                <h2 className="fw-bold">Create your partner account</h2>
                <p>Create an account to list and manage your properties.</p>

                <Form>
                    <Row className="mb-3">
                        <Col>
                            <TextField id="formFirstName" label="First Name" variant="outlined" fullWidth size="small" />
                        </Col>
                        <Col>
                            <TextField id="formLastName" label="Last Name" variant="outlined" fullWidth size="small" />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <TextField id="formUsername" label="Username" variant="outlined" fullWidth size="small" />
                        </Col>
                        <Col>
                            <TextField id="formEmail" label="Email Address" variant="outlined" fullWidth size="small" />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <TextField id="formPassword" label="Password" variant="outlined" type="password" fullWidth size="small" />
                        </Col>
                        <Col>
                            <TextField id="formConfirmPassword" label="Confirm Password" variant="outlined" type="password" fullWidth size="small" />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <TextField id="formPhoneNumber" label="Phone Number" variant="outlined" fullWidth size="small" />
                        </Col>
                        <Col>
                            <TextField id="formAddress" label="Address" variant="outlined" fullWidth size="small" />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Button variant="primary" type="submit" className="btn-register" style={{ backgroundColor: '#1B68DD', borderColor: '#1B68DD', height: '42px', minWidth: '280px', fontWeight: 'bold' }}>
                                Become a partner
                            </Button>
                        </Col>
                    </Row>

                </Form>

                <p className="mt-3">Already have an account? <br /> <a href='' onClick={gotoSignIn} className="text-primary" style={{ color: '#1677FF', textDecoration: 'none' }}>Click here to sign in</a></p>
            </Container>
        </div>
    )
}
