import React from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from '../../../components/footer/Footer';
import PropertyCard from '../../../components/property/PropertyCard';

export default function UserProperties() {

    const isMobile = useMediaQuery('(max-width: 600px)');

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

    return (
        <div>
            <NavBarUser />
            {/* properties */}
            <Container fluid>
                <div className="mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <Row>
                        <Col xs={12} md={8}>
                            <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Stay at our top unique properties</h4>
                            <p style={{ textAlign: 'left' }}>From castles and villas to boats and igloos, we have it all</p>
                        </Col>
                        <Col xs={12} md={4} className={isMobile ? 'mt-1 mb-3' : ''}>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Search"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton edge="start">
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                            />
                        </Col>
                    </Row>
                </div>
                <Row style={{ marginLeft: '4%', marginRight: '4%' }} xs={1} md={2} className="g-1 justify-content-center">
                    {properties.map((property, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <PropertyCard property={property} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
