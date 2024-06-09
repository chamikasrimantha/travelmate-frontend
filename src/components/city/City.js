import React, { useState } from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import { Box, Typography, Rating, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer/Footer';
import RateCard from '../rate/RateCard';
import { useNavigate } from 'react-router-dom';
import AddCityReview from '../rate/AddCityReview';
import PropertyCard from '../property/PropertyCard';

export default function City() {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Sample data
    const cityData = {
        id: 1,
        name: "Colombo",
        district: "Colombo District",
        image: 'https://via.placeholder.com/300',
        rate: 4.3,
        postCode: '12500',
        latitude: '6.9271',
        longitude: '79.8612',
        reviews: 231
    };

    const rateData = [
        {
            name: 'Jane Doe',
            rate: 3.5,
            comment: 'Nice place, but could be better. Nice place, but could be better.',
        },
        {
            name: 'Jane Doe',
            rate: 3.5,
            comment: 'Nice place, but could be better. Nice place, but could be better.',
        },
        {
            name: 'Jane Doe',
            rate: 3.5,
            comment: 'Nice place, but could be better. Nice place, but could be better.',
        }
    ];

    const properties = [
        {
            id: '1',
            image: 'https://via.placeholder.com/150',
            name: 'Luxury Hotel',
            rate: 4.3,
            district: 'Colombo District',
            city: 'Colombo',
            location: '123 Main Street, Colombo, Sri Lanka',
            description: 'A luxurious hotel with stunning views and excellent amenities.'
        },
        {
            id: '2',
            image: 'https://via.placeholder.com/150',
            name: 'Luxury Hotel',
            rate: 4.3,
            district: 'Colombo District',
            city: 'Colombo',
            location: '123 Main Street, Colombo, Sri Lanka',
            description: 'A luxurious hotel with stunning views and excellent amenities.'
        }
    ];

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
                        <Col xs={6} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '25px' }}>
                            <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', marginRight: '10px' }}>
                                {cityData.name}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: 'white', fontStyle: 'italic' }}>
                                | {cityData.district}
                            </Typography>
                        </Col>
                        <Col xs={6} style={{ textAlign: 'right', paddingRight: '6%', marginTop: '25px' }}>
                            <Form inline>
                                <FormControl type="text" placeholder="Search for more cities" className="mr-sm-2" style={{ borderRadius: '20px' }} />
                            </Form>
                        </Col>
                    </Row>
                    <Row className="align-items-center d-none d-md-flex" style={{ height: '50%' }}>
                        <Col xs={12} md={6} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
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
                        <Col xs={6} style={{ textAlign: 'right', paddingRight: '6%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px' }}>
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
                {/* <div style={{ flex: '40%' }}>
                    <img src={cityData.image} alt={cityData.name} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div> */}
                <div style={{ flex: '100%' }}>
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

            {/* Reviews */}
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <div>
                        <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Reviews</h4>
                    </div>
                    <div>
                        <Button
                            style={{
                                backgroundColor: '#184D9D',
                                color: 'white',
                                borderRadius: '4px',
                                padding: '8px 12px',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onClick={handleClickOpen}
                        >
                            Add Review
                        </Button>
                    </div>
                </div>
                <div style={{ marginTop: '7px', textAlign: 'left', display: 'flex', alignItems: 'center', marginLeft: '5%' }}>
                    <div style={{ backgroundColor: '#184D9D', color: 'white', borderRadius: '4px', padding: '4px 8px', marginRight: '10px' }}>
                        {cityData.rate}
                    </div>
                    <span>{getRatingLabel(cityData.rate)}</span>
                    <span style={{ marginLeft: '10px' }}>. {cityData.reviews} reviews</span>
                    <span style={{ marginLeft: '10px', color: '#184D9D', cursor: 'pointer' }}> Read all reviews</span>
                </div>
                <Row style={{ marginLeft: '02%', marginRight: '02%', marginTop: '10px' }} xs={1} md={2} lg={3} className="g-1 justify-content-center">
                    {rateData.map((rate, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <RateCard rateData={rate} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Add Review</DialogTitle>
                <DialogContent>
                    <AddCityReview userId={1} cityId={cityData.id} handleClose={handleClose} />
                </DialogContent>
            </Dialog>


            {/* Properties */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>{cityData.name}: {cityData.postCode} properties found</h4>
                    <p style={{ textAlign: 'left', color: '#184D9D', cursor: 'pointer' }}>Load all properties</p>
                </div>
                <Row style={{ marginLeft: '4%', marginRight: '4%' }} xs={1} md={2} className="g-1 justify-content-center">
                    {properties.map((property, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <PropertyCard property={property} />
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    );
}
