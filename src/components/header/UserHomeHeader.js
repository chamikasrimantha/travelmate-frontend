import React from 'react';
import { Container, Button } from 'react-bootstrap';
import img from './img.png';

export default function UserHomeHeader() {
    return (
        <div>
            <div style={{ position: 'relative', color: 'white' }}>
                <img src={img} alt="Vacation" style={{ width: '100%', height: '300px' }} />
                <div style={{ position: 'absolute', top: '50%', left: '6%', transform: 'translateY(-50%)', textAlign: 'left' }}>
                    <h1 style={{ fontSize: '2.5rem' }}>Pack the whole toybox</h1>
                    <p style={{ fontSize: '1.2rem' }}>Unwind and stretch out in a vacation home</p>
                    <Button
                        variant="primary"
                        style={{
                            backgroundColor: '#1B68DD',
                            borderColor: '#1B68DD',
                            height: '40px',
                            fontWeight: 'bold'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#1456A0';
                            e.target.style.borderColor = '#1456A0';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#1B68DD';
                            e.target.style.borderColor = '#1B68DD';
                        }}
                    >
                        Discover vacation rentals
                    </Button>
                </div>
                <div className="custom-container" style={{
                    position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)',
                    width: '80%', height: '50px', backgroundColor: 'white', borderRadius: '30px', border: '4px solid #DAA520', display: 'flex', alignItems: 'center'
                }}>
                    <div className="desktop-only" style={{ flex: 1, color: 'black', textAlign: 'center', borderRight: '3px solid #DAA520' }}>
                        Where do you want to go?
                    </div>
                    <div className="desktop-only" style={{ flex: 0.75, color: 'black', textAlign: 'center', borderRight: '3px solid #DAA520' }}>
                        Don't you have plans?
                    </div>
                    <div className="mobile-hide" style={{ flex: 1.25, color: 'black', textAlign: 'center', borderRight: '3px solid #DAA520' }}>
                        Try TravelMate AI Assistant, It's free!
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <Button
                            variant="primary"
                            style={{
                                width: '90%',
                                borderRadius: '30px',
                                backgroundColor: '#043E96',
                                color: 'white',
                                borderColor: '#043E96',
                                height: '38px',
                                fontWeight: 'bold'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#032C70';
                                e.target.style.borderColor = '#032C70';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#043E96';
                                e.target.style.borderColor = '#043E96';
                            }}
                        >
                            Try Now
                        </Button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    img {
                        height: 200px;
                    }
                    h1 {
                        font-size: 1rem;
                    }
                    p {
                        font-size: 0.875rem;
                    }
                    .btn {
                        height: 35px;
                    }
                    .custom-container {
                        width: 90%;
                        height: auto;
                        bottom: -25px;
                        flex-direction: column;
                        text-align: center;
                        padding: 10px;
                    }
                    .custom-container .desktop-only {
                        display: none;
                    }
                    .custom-container .mobile-hide {
                        font-size: 0.875rem;
                        border-right: 0px solid #DAA520;
                    }
                    .custom-container div {
                        border: none;
                        padding: 5px 0;
                    }
                    .custom-container div:last-child {
                        padding-top: 10px;
                    }
                }

                @media (min-width: 769px) and (max-width: 1200px) {
                    img {
                        height: 250px;
                    }
                    h1 {
                        font-size: 2rem;
                    }
                    p {
                        font-size: 1rem;
                    }
                    .btn {
                        height: 38px;
                    }
                }
            `}</style>
        </div>
    )
}
