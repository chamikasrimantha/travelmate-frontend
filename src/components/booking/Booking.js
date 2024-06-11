import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

export default function Booking() {
    const [step, setStep] = useState(1); // Step 1: Your Selection, Step 2: Enter Your Details, Step 3: Confirm Your Reservation
    const [confirmed, setConfirmed] = useState(false); // To track if the booking is confirmed
    const checkinDate = localStorage.getItem('checkinDate');
    const checkoutDate = localStorage.getItem('checkoutDate');

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
                        <p>Your Selection</p>
                    </div>
                    <div style={stepLineStyle}></div>
                    <div className="d-flex flex-column align-items-center">
                        {step > 2 ? (
                            <FaCheckCircle style={activeStepStyle} />
                        ) : (
                            <FaRegCircle style={step === 2 ? activeStepCircleStyle : circleStyle} />
                        )}
                        <p>Enter Your Details</p>
                    </div>
                    <div style={stepLineStyle}></div>
                    <div className="d-flex flex-column align-items-center">
                        {confirmed ? (
                            <FaCheckCircle style={activeStepStyle} />
                        ) : (
                            <FaRegCircle style={step === 3 ? activeStepCircleStyle : circleStyle} />
                        )}
                        <p>Confirm Your Reservation</p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                {step === 1 && (
                    <div>
                        <h2>Your Selection</h2>
                        <p>Check-in Date: {checkinDate}</p>
                        <p>Check-out Date: {checkoutDate}</p>
                        <Button variant="primary" onClick={handleNextStep}>
                            I'll Serve
                        </Button>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <h2>Enter Your Details</h2>
                        {/* Add form for entering details here */}
                        <Button variant="secondary" onClick={handleBackStep}>
                            Back
                        </Button>
                        <Button variant="primary" onClick={handleNextStep}>
                            Next
                        </Button>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <h2>Confirm Your Reservation</h2>
                        {/* Add confirmation details here */}
                        <Button variant="secondary" onClick={handleBackStep}>
                            Back
                        </Button>
                        <Button variant="primary" onClick={handleConfirm}>
                            Confirm
                        </Button>
                    </div>
                )}
                {step === 4 && (
                    <div>
                        <h2>Reservation Confirmed</h2>
                        <p>Your reservation is confirmed. Thank you!</p>
                    </div>
                )}
            </div>
        </Container>
    );
}
