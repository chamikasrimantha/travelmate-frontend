import React from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import { Box, Typography, Rating } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function City() {
    // Sample data
    const cityData = {
        name: "Colombo",
        district: "Colombo District",
        rate: 4.3,
        reviews: 231
    };

    // Function to get the rating label
    const getRatingLabel = (rate) => {
        if (rate <= 2) return 'Low';
        if (rate <= 3) return 'Average';
        if (rate <= 4) return 'Good';
        if (rate <= 4.5) return 'Excellent';
        return 'Wonderful';
    };

    return (
        <div>
            <div style={{ height: '100px', backgroundColor: '#184D9D', width: '100%' }}>
                <Container fluid>
                    <Row className="align-items-center" style={{ height: '50%' }}>
                        <Col xs={6} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', marginRight: '10px' }}>
                                {cityData.name}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: 'white', fontStyle: 'italic' }}>
                                | {cityData.district}
                            </Typography>
                        </Col>
                        <Col xs={6} style={{ textAlign: 'right', paddingRight: '6%', marginTop: '10px' }}>
                            <Form inline>
                                <FormControl type="text" placeholder="Search for more cities" className="mr-sm-2" />
                            </Form>
                        </Col>
                    </Row>
                    <Row className="align-items-center" style={{ height: '50%' }}>
                        <Col xs={6} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <Rating value={cityData.rate} readOnly style={{ border: '2px', borderColor: 'white', color: 'white' }} />
                        </Col>
                        <Col xs={6} style={{ textAlign: 'right', paddingRight: '6%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px' }}>
                            <Typography variant="body1" style={{ color: 'white' }}>
                                {cityData.rate} {getRatingLabel(cityData.rate)} . {cityData.reviews} Reviews - Read all reviews
                            </Typography>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
