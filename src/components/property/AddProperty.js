import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TextField, Checkbox, FormControlLabel, MenuItem } from '@mui/material';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { Rating, Typography, Box, useMediaQuery } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

export default function AddProperty() {
    const [step, setStep] = useState(1); // Step 1: Your Selection, Step 2: Enter Your Details, Step 3: Confirm Your Reservation
    const [confirmed, setConfirmed] = useState(false); // To track if the booking is confirmed

    const isMobile = useMediaQuery('(max-width: 600px)');

    const navigate = useNavigate();

    const Bookings = () => {
        navigate('/bookings');
    }

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else if (step === 3) {
            handleConfirm();
        }
    };

    const handleBackStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleConfirm = () => {
        setConfirmed(true);
        setStep(4); // Step 4 indicates the final confirmation step
    };

    const squareStyle = {
        backgroundColor: 'white',
        border: '1px solid #DEDCDD',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '02px',
        textAlign: 'left',
    };

    const circleStyle = {
        fontSize: '1.5rem', // Increase size of the circles
    };

    const stepLineStyle = {
        flexGrow: 1,
        height: '2px',
        backgroundColor: '#000',
        margin: '0 8px',
    };

    const activeStepStyle = {
        fontSize: '1.5rem',
        color: '#28a745',
    };

    const activeStepCircleStyle = {
        fontSize: '1.5rem',
        color: '#fff',
        backgroundColor: '#28a745',
        borderRadius: '50%',
        padding: '2px',
    };

    return (
        <Container fluid>
            <div style={{ marginLeft: '5%', marginRight: '5%' }} className="text-center mt-4">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        {step > 1 ? (
                            <FaCheckCircle style={activeStepStyle} />
                        ) : (
                            <FaRegCircle style={step === 1 ? activeStepCircleStyle : circleStyle} />
                        )}
                        <p>01</p>
                    </div>
                    <div style={stepLineStyle}></div>
                    <div className="d-flex flex-column align-items-center">
                        {step > 2 ? (
                            <FaCheckCircle style={activeStepStyle} />
                        ) : (
                            <FaRegCircle style={step === 2 ? activeStepCircleStyle : circleStyle} />
                        )}
                        <p>02</p>
                    </div>
                    <div style={stepLineStyle}></div>
                    <div className="d-flex flex-column align-items-center">
                        {confirmed ? (
                            <FaCheckCircle style={activeStepStyle} />
                        ) : (
                            <FaRegCircle style={step === 3 ? activeStepCircleStyle : circleStyle} />
                        )}
                        <p>03</p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                {step === 1 && (
                    <div>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Property details</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                                    <div style={squareStyle}>
                                        {/* <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Almost done! Just fill in the required info</h4> */}
                                        <TextField label="Property name" variant="outlined" className="mb-3" fullWidth />
                                        <TextField label="Property Email" variant="outlined" className="mb-3" fullWidth />
                                        <TextField label="Property Hotline" variant="outlined" className="mb-3" fullWidth />
                                        <TextField
                                            select
                                            label="Select category"
                                            variant="outlined"
                                            // value={arrivalTime}
                                            // onChange={handleArrivalTimeChange}
                                            className="mb-3"
                                            fullWidth
                                        >
                                            <MenuItem value="I don't know">I don't know</MenuItem>
                                        </TextField>
                                        <TextField
                                            select
                                            label="Select district"
                                            variant="outlined"
                                            // value={arrivalTime}
                                            // onChange={handleArrivalTimeChange}
                                            className="mb-3"
                                            style={{width : isMobile ? '100%' : '47%', marginRight: isMobile ? '0' : '42px'}}
                                        >
                                            <MenuItem value="I don't know">I don't know</MenuItem>
                                        </TextField>
                                        <TextField
                                            select
                                            label="Select city"
                                            variant="outlined"
                                            // value={arrivalTime}
                                            // onChange={handleArrivalTimeChange}
                                            className="mb-3"
                                            style={{width : isMobile ? '100%' : '47%'}}
                                        >
                                            <MenuItem value="I don't know">I don't know</MenuItem>
                                        </TextField>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
                {step === 2 && (
                    <div>

                    </div>
                )}

                {step === 3 && (
                    <div>

                    </div>
                )}
            </div>
        </Container>
    );
}
