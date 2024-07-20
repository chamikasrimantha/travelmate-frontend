import React, { useMemo } from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import Footer from '../../../components/footer/Footer';
import UserHomeHeader from '../../../components/header/UserHomeHeader';
import CityCard from '../../../components/city/CityCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyCard from '../../../components/property/PropertyCard';
import AdminAnnouncementCard from '../../../components/announcement/AdminAnnouncementCard';

export default function UserHome() {

    // Sample data
    const rates = [
        {
            id: '1',
            rate: 4.3,
            comment: 'good',
            userId: 1,
            cityId: '2'
        },
        {
            id: '2',
            rate: 4.1,
            comment: 'good',
            userId: 1,
            cityId: '2'
        },
        {
            id: '3',
            rate: 4.6,
            comment: 'good',
            userId: 1,
            cityId: '1'
        },
        {
            id: '4',
            rate: 4.8,
            comment: 'good',
            userId: 1,
            cityId: '3'
        },
        {
            id: '5',
            rate: 4.9,
            comment: 'good',
            userId: 1,
            cityId: '2'
        },
    ]

    const cities = [
        {
            id: '1',
            name: 'Colombo',
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            districtId: '1'
        },
        {
            id: '2',
            name: 'Galle',
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            districtId: '2'
        },
        {
            id: '3',
            name: 'Jaffna',
            postCode: '12500',
            latitude: '8.5333',
            longitude: '80.4833',
            districtId: '3'
        }
    ];

    const districts = [
        { id: '1', name: 'Colombo District' },
        { id: '2', name: 'Galle District' },
        { id: '3', name: 'Jaffna District' }
    ];

    const defaultImage = 'https://via.placeholder.com/300'; // Sample image URL

    const citiesWithRates = useMemo(() => {
        return cities.map(city => {
            const cityRates = rates.filter(rate => rate.cityId === city.id);
            const averageRate = cityRates.length > 0
                ? cityRates.reduce((sum, rate) => sum + rate.rate, 0) / cityRates.length
                : 0;
            const district = districts.find(d => d.id === city.districtId);
            return {
                ...city,
                rate: averageRate,
                districtName: district ? district.name : 'Unknown',
                image: defaultImage
            };
        });
    }, [cities, rates, districts]);

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

    const announcements = [
        {
            id: 1,
            title: 'Maintenance Update',
            message: 'The system will be down for maintenance on 2024-07-01 from 02:00 AM to 04:00 AM.',
        },
        {
            id: 2,
            title: 'New Feature Release',
            message: 'We are excited to announce a new feature that will be available starting 2024-07-05.',
        },
        {
            id: 2,
            title: 'New Feature Release',
            message: 'We are excited to announce a new feature that will be available starting 2024-07-05.',
        },
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
                <Row style={{ marginLeft: '2%', marginRight: '2%' }} xs={1} md={3} className="g-1 justify-content-center">
                    {announcements.map((announcement, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <AdminAnnouncementCard announcement={announcement} />
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* trending cities */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Trending Destinations</h4>
                    <p style={{ textAlign: 'left' }}>Most popular choices for travelers from Sri Lanka</p>
                </div>
                <Row style={{ marginLeft: '1%', marginRight: '1%' }} xs={1} md={3} className="g-1 justify-content-center">
                    {citiesWithRates.map((city, index) => (
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
