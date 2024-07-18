import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarAuth from '../../../components/navbar/NavBarAuth';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { createPartner } from '../../../services/api/user.service'

export default function PartnerSignUp() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();

    const gotoSignIn = () => {
        navigate('/partner/signin');
    }

    const register = async (event) => {
        event.preventDefault();
        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "username": username,
            "email": email,
            "password": password,
            "phoneNo": phoneNo,
            "address": address
        }
        const response = await createPartner(data);
        if (response.status === 200) {
            gotoSignIn();
        } else {
            console.log("error");
        }
    }

    return (
        <div>
            <NavBarAuth />
            <Container style={{ padding: '20px', marginTop: '20px', textAlign: 'left' }} className="mt-1">
                <h2 className="fw-bold">Create your partner account</h2>
                <p>Create an account to list and manage your properties.</p>

                <Form onSubmit={register}>
                    <Row className="mb-3">
                        <Col>
                            <TextField value={firstName} onChange={(e) => setFirstName(e.target.value)} id="formFirstName" label="First Name" variant="outlined" fullWidth size="small" />
                        </Col>
                        <Col>
                            <TextField value={lastName} onChange={(e) => setLastName(e.target.value)} id="formLastName" label="Last Name" variant="outlined" fullWidth size="small" />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <TextField value={username} onChange={(e) => setUsername(e.target.value)} id="formUsername" label="Username" variant="outlined" fullWidth size="small" />
                        </Col>
                        <Col>
                            <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="formEmail" label="Email Address" variant="outlined" fullWidth size="small" />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="formPassword" label="Password" variant="outlined" type="password" fullWidth size="small" />
                        </Col>
                        <Col>
                            <TextField id="formConfirmPassword" label="Confirm Password" variant="outlined" type="password" fullWidth size="small" />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <TextField value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} id="formPhoneNumber" label="Phone Number" variant="outlined" fullWidth size="small" />
                        </Col>
                        <Col>
                            <TextField value={address} onChange={(e) => setAddress(e.target.value)} id="formAddress" label="Address" variant="outlined" fullWidth size="small" />
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
