import React from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import Footer from '../../../components/footer/Footer';
import UserHomeHeader from '../../../components/header/UserHomeHeader';
import CityCard from '../../../components/city/CityCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyCard from '../../../components/property/PropertyCard';

export default function UserHome() {

    // Sample data
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

    return (
        <div>
            {/* navbar */}
            <NavBarUser />

            {/* header */}
            <UserHomeHeader />

            <br />

            {/* announcements */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Offers</h4>
                    <p style={{ textAlign: 'left' }}>Promotions, deals, and special offers for you</p>
                </div>
                <Row style={{ marginLeft: '0%' }} xs={1} md={3} className="g-1 justify-content-center">

                </Row>
            </Container>

            {/* trending cities */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Trending Destinations</h4>
                    <p style={{ textAlign: 'left' }}>Most popular choices for travelers from Sri Lanka</p>
                </div>
                <Row style={{ marginLeft: '0%' }} xs={1} md={3} className="g-1 justify-content-center">
                    {cities.map((city, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <CityCard city={city} />
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* properties */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Stay at our top unique properties</h4>
                    <p style={{ textAlign: 'left' }}>From castles and villas to boats and igloos, we have it all</p>
                </div>
                <Row style={{ marginLeft: '4%', marginRight: '4%' }} xs={1} md={2} className="g-1 justify-content-center">
                    {properties.map((property, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <PropertyCard property={property} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <br />

            {/* footer */}
            <Footer />
        </div>
    );
}
