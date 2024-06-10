import React from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import { Box, Typography, Rating, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import WifiIcon from '@mui/icons-material/Wifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import TvIcon from '@mui/icons-material/Tv';
import PoolIcon from '@mui/icons-material/Pool';
import HotTubIcon from '@mui/icons-material/HotTub';
import BalconyIcon from '@mui/icons-material/Balcony';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import DeckIcon from '@mui/icons-material/Deck';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import RateCard from '../rate/RateCard';

export default function Property() {

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

    const propertyData = {
        id: '1',
        image: 'https://via.placeholder.com/150',
        name: 'Luxury Hotel',
        category: 'Normal Hotel',
        rate: 4.3,
        district: 'Colombo District',
        city: 'Colombo',
        location: '123 Main Street, Colombo, Sri Lanka',
        sentence: 'A luxurious hotel with stunning views and excellent amenities.',
        description: 'Colombo, the bustling commercial capital of Sri Lanka, offers a rich tapestry of cultural, historical, and contemporary attractions. From its colonial-era buildings to modern skyscrapers, the city blends the old and new in a vibrant mix. The citys diverse population and historical significance make it a fascinating destination for travelers. Whether exploring the markets, enjoying the beach, or visiting temples and museums, Colombo provides a dynamic urban experience that captivates visitors.',
        latitude: '6.9271',
        longitude: '79.8612',
        email: 'luxury@gmail.com',
        hotline: '+94 76 163 5652',
        price: 'Rs. 12,000/-',
        airconditioning: true,
        heating: false,
        wifi: true,
        kitchen: true,
        breakfast: true,
        washingmachine: false,
        tv: true,
        swimmingpool: true,
        hottub: false,
        balcony: true,
        gardenview: true,
        terrace: true
    }

    const facilities = [
        { name: 'Air Conditioning', available: propertyData.airconditioning, icon: <AcUnitIcon /> },
        { name: 'Heating', available: propertyData.heating, icon: <WhatshotIcon /> },
        { name: 'WiFi', available: propertyData.wifi, icon: <WifiIcon /> },
        { name: 'Kitchen', available: propertyData.kitchen, icon: <KitchenIcon /> },
        { name: 'Washing Machine', available: propertyData.washingmachine, icon: <LocalLaundryServiceIcon /> },
        { name: 'TV', available: propertyData.tv, icon: <TvIcon /> },
        { name: 'Swimming Pool', available: propertyData.swimmingpool, icon: <PoolIcon /> },
        { name: 'Hot Tub', available: propertyData.hottub, icon: <HotTubIcon /> },
        { name: 'Balcony', available: propertyData.balcony, icon: <BalconyIcon /> },
        { name: 'Garden View', available: propertyData.gardenview, icon: <LocalFloristIcon /> },
        { name: 'Terrace', available: propertyData.terrace, icon: <DeckIcon /> },
        { name: 'Breakfast', available: propertyData.breakfast, icon: <BreakfastDiningIcon /> }
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
                                {propertyData.name}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: 'white', fontStyle: 'italic' }}>
                                | {propertyData.category} - {propertyData.district}
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
                            <Typography variant="body1" style={{ color: 'white' }}>
                                {propertyData.location}
                            </Typography>
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
                                {propertyData.rate}
                            </Box>
                            <Rating
                                value={propertyData.rate}
                                readOnly
                                sx={{
                                    color: 'white',
                                    '& .MuiRating-iconEmpty': {
                                        color: 'white',
                                    }
                                }}
                            />
                            <Typography variant="body1" style={{ color: 'white', marginLeft: '15px' }}>
                                {getRatingLabel(propertyData.rate)} . {propertyData.reviews} Reviews - Read all reviews
                            </Typography>
                        </Col>
                    </Row>

                    {/* For mobile screens */}
                    <Row className="align-items-center d-flex d-md-none" style={{ height: '33.3%' }}>
                        <Col xs={12} style={{ paddingLeft: '6%', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', marginRight: '10px' }}>
                                {propertyData.name}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: 'white', fontStyle: 'italic' }}>
                                | {propertyData.district}
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
                                {propertyData.rate}
                            </Box>
                            <Rating
                                value={propertyData.rate}
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
                        src={generateMapUrl(propertyData.latitude, propertyData.longitude)}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Description Section */}
            <Container>
                <Row>
                    <Col>
                        <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'justify' }}>
                            {propertyData.description}
                        </Typography>
                    </Col>
                </Row>
            </Container>

            {/* Facilities Section */}
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <div>
                        <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Most popular facilities</h4>

                        <p style={{ textAlign: 'left' }}>
                            <CheckCircleIcon style={{ color: '#043E96', marginRight: '5px' }} />
                            : Included
                            <CancelIcon style={{ color: '#D9241F', marginLeft: '10px', marginRight: '5px' }} />
                            : Excluded
                        </p>

                    </div>
                </div>
                <Row style={{ marginTop: '7px', marginLeft: '4%', marginRight: '4%' }} xs={1} md={4} className="g-1 justify-content-center">
                    {facilities.map((facility, index) => (
                        <Col key={index} className="d-flex align-items-center mb-2">
                            <Typography variant="body1" style={{ color: facility.available ? '#043E96' : '#D9241F', marginLeft: '8px' }}>
                                {facility.icon}
                                {facility.name}
                            </Typography>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Reviews */}
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <div>
                        <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Reviews</h4>
                    </div>
                    {/* <div>
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
                    </div> */}
                </div>
                <div style={{ marginTop: '7px', textAlign: 'left', display: 'flex', alignItems: 'center', marginLeft: '5%' }}>
                    <div style={{ backgroundColor: '#184D9D', color: 'white', borderRadius: '4px', padding: '4px 8px', marginRight: '10px' }}>
                        {propertyData.rate}
                    </div>
                    <span>{getRatingLabel(propertyData.rate)}</span>
                    <span style={{ marginLeft: '10px' }}>. {propertyData.reviews} reviews</span>
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

        </div>
    )
}
