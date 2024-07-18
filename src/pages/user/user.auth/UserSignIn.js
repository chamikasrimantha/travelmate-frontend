import React from 'react';
import NavBarAuth from '../../../components/navbar/NavBarAuth';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../../services/api/user.service'

export default function UserSignIn() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const gotoSignUp = () => {
    navigate('/signup');
  }

  const login = async (event) => {
    event.preventDefault();
    const data = {
      "username": username,
      "password": password
    }
    const response = await userLogin(data);
    if (response.status === 200) {
      localStorage.setItem("token", response.data);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
      navigate("/");
    } else {
      console.log("login error!");
    }
  }

  return (
    <div>
      <NavBarAuth />
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '85vh' }}>
        <div style={{ width: '100%', maxWidth: '500px', background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 className="fw-bold">Sign in to your account</h2>
          <p>Sign in to your account to explore travel destinations in LK.</p>

          <Form onSubmit={login}>
            <Row className="mt-4 mb-4">
              <Col>
                <TextField value={username} onChange={(e) => setUsername(e.target.value)} id="formUsername" label="Username" variant="outlined" fullWidth size="small" />
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="formPassword" label="Password" variant="outlined" type="password" fullWidth size="small" />
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <Button variant="primary" type="submit" className="btn-register" style={{ backgroundColor: '#1B68DD', borderColor: '#1B68DD', height: '42px', width: '215px', fontWeight: 'bold' }}>
                  Sign In
                </Button>
              </Col>
            </Row>

          </Form>

          <p className="mt-3">Don't have an account? <br /> <a href='' onClick={gotoSignUp} className="text-primary" style={{ color: '#1677FF', textDecoration: 'none' }}>Click here to sign up</a></p>
        </div>
      </Container>
    </div>
  )
}
