import React from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import { Box, Typography, Rating } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer/Footer';

export default function City() {
    // Sample data
    const cityData = {
        name: "Colombo",
        district: "Colombo District",
        image: 'https://via.placeholder.com/300',
        rate: 4.3,
        postCode: '12500',
        latitude: '6.9271',
        longitude: '79.8612',
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

    // Function to generate the Google Maps URL
    const generateMapUrl = (lat, lon) => {
        return `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
    };

    return (
        <div>
            <div style={{ height: '140px', backgroundColor: '#184D9D', width: '100%' }}>
                <Container fluid>
                    {/* For larger screens */}
                    <Row className="align-items-center d-none d-md-flex" style={{ height: '50%' }}>
                        <Col xs={6} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', marginRight: '10px' }}>
                                {cityData.name}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: 'white', fontStyle: 'italic' }}>
                                | {cityData.district}
                            </Typography>
                        </Col>
                        <Col xs={6} style={{ textAlign: 'right', paddingRight: '6%', marginTop: '20px' }}>
                            <Form inline>
                                <FormControl type="text" placeholder="Search for more cities" className="mr-sm-2" style={{ borderRadius: '20px' }} />
                            </Form>
                        </Col>
                    </Row>
                    <Row className="align-items-center d-none d-md-flex" style={{ height: '50%' }}>
                        <Col xs={12} md={6} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '25px' }}>
                            <Rating
                                value={cityData.rate}
                                readOnly
                                sx={{
                                    color: 'white',
                                    '& .MuiRating-iconEmpty': {
                                        color: 'white',
                                    }
                                }}
                            />
                        </Col>
                        <Col xs={6} style={{ textAlign: 'right', paddingRight: '6%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '25px' }}>
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    backgroundColor: 'white',
                                    color: '#184D9D',
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    marginRight: '15px'
                                }}
                            >
                                {cityData.rate}
                            </Box>
                            <Typography variant="body1" style={{ color: 'white' }}>
                                {getRatingLabel(cityData.rate)} . {cityData.reviews} Reviews - Read all reviews
                            </Typography>
                        </Col>
                    </Row>

                    {/* For mobile screens */}
                    <Row className="align-items-center d-flex d-md-none" style={{ height: '33.3%' }}>
                        <Col xs={12} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', marginRight: '10px' }}>
                                {cityData.name}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: 'white', fontStyle: 'italic' }}>
                                | {cityData.district}
                            </Typography>
                        </Col>
                    </Row>
                    <Row className="align-items-center d-flex d-md-none" style={{ height: '33.3%' }}>
                        <Col xs={12} style={{ textAlign: 'right', paddingRight: '6%', marginTop: '10px' }}>
                            <Form inline>
                                <FormControl type="text" placeholder="Search for more cities" className="mr-sm-2" style={{ borderRadius: '4px' }} />
                            </Form>
                        </Col>
                    </Row>
                    <Row className="align-items-center d-flex d-md-none" style={{ height: '33.3%' }}>
                        <Col xs={12} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    backgroundColor: 'white',
                                    color: '#184D9D',
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    marginRight: '10px'
                                }}
                            >
                                {cityData.rate}
                            </Box>
                            <Rating
                                value={cityData.rate}
                                readOnly
                                sx={{
                                    color: 'white',
                                    '& .MuiRating-iconEmpty': {
                                        color: 'white',
                                    }
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Image and Map Section */}
            <div style={{ display: 'flex', height: '300px', width: '100%' }}>
                <div style={{ flex: '40%' }}>
                    <img src={cityData.image} alt={cityData.name} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '60%' }}>
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src={generateMapUrl(cityData.latitude, cityData.longitude)}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Description Section */}
            <Container>
                <Row>
                    <Col>
                        <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'justify' }}>
                            Colombo, the bustling commercial capital of Sri Lanka, offers a rich tapestry of cultural, historical, and contemporary attractions. From its colonial-era buildings to modern skyscrapers, the city blends the old and new in a vibrant mix. The city's diverse population and historical significance make it a fascinating destination for travelers. Whether exploring the markets, enjoying the beach, or visiting temples and museums, Colombo provides a dynamic urban experience that captivates visitors.
                        </Typography>
                    </Col>
                </Row>
            </Container>

            {/* Rates */}

            {/* Line */}
            <Container style={{ backgroundColor: '#184D9D', padding: '10px', marginTop: '20px', borderRadius: '20px' }}>
                <Typography variant="body1" style={{ color: 'white' }}>
                    <i>{cityData.name}</i> : {cityData.postCode} Properties found
                </Typography>
            </Container>

            {/* Properties */}

        </div>
    );
}
