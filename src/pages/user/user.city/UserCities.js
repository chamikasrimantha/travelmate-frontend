import React from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from '../../../components/footer/Footer';
import CityCard from '../../../components/city/CityCard';

export default function UserCities() {

    const isMobile = useMediaQuery('(max-width: 600px)');

    const cities = [
        {
            id: '1',
            image: 'https://via.placeholder.com/300', // Sample image URL
            name: 'Colombo',
            rate: 4.4,
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            district: 'Colombo District'
        },
        {
            id: '2',
            image: 'https://via.placeholder.com/300',
            name: 'Galle',
            rate: 4.2,
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            district: 'Galle District'
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/300',
            name: 'Jaffna',
            rate: 3.8,
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            district: 'Jaffna District'
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/300',
            name: 'Jaffna',
            rate: 3.8,
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            district: 'Jaffna District'
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/300',
            name: 'Jaffna',
            rate: 3.8,
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            district: 'Jaffna District'
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/300',
            name: 'Jaffna',
            rate: 3.8,
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            district: 'Jaffna District'
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/300',
            name: 'Jaffna',
            rate: 3.8,
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            district: 'Jaffna District'
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/300',
            name: 'Jaffna',
            rate: 3.8,
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            district: 'Jaffna District'
        },
        {
            id: '3',
            image: 'https://via.placeholder.com/300',
            name: 'Jaffna',
            rate: 3.8,
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            district: 'Jaffna District'
        }
    ];

    return (
        <div>
            <NavBarUser />
            {/* trending cities */}
            <Container fluid>
                <div className="mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <Row>
                        <Col xs={12} md={8}>
                            <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Trending Destinations</h4>
                            <p style={{ textAlign: 'left' }}>Most popular choices for travelers from Sri Lanka</p>
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
                <Row style={{ marginLeft: '1%', marginRight: '1%' }} xs={1} md={3} className="g-1 justify-content-center">
                    {cities.map((city, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <CityCard city={city} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
