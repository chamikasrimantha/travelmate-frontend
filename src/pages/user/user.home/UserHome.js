import React from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import Footer from '../../../components/footer/Footer';
import UserHomeHeader from '../../../components/header/UserHomeHeader';
import CityCard from '../../../components/city/CityCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserHome() {

    // Sample data
    const cities = [
        {
            image: 'https://via.placeholder.com/300', // Sample image URL
            name: 'Colombo',
            rate: 4.4,
            district: 'Colombo District'
        },
        {
            image: 'https://via.placeholder.com/300',
            name: 'Galle',
            rate: 4.2,
            district: 'Galle District'
        },
        {
            image: 'https://via.placeholder.com/300',
            name: 'Jaffna',
            rate: 3.8,
            district: 'Jaffna District'
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
                <Row style={{ marginLeft: '0%' }} xs={1} md={3} className="g-1 justify-content-center">
                    
                </Row>
            </Container>

            <br />

            {/* footer */}
            <Footer />
        </div>
    );
}
