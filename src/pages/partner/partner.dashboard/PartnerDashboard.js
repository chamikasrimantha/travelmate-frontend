import React from 'react';
import NavBarPartner from '../../../components/navbar/NavBarPartner';
import Footer from '../../../components/footer/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Col, Container, Row } from 'react-bootstrap';
import RateCard from '../../../components/rate/RateCard';
import BookingCardPartner from '../../../components/booking/BookingCardPartner';

export default function PartnerDashboard() {

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

    const bookings = [
        {
            id: 1,
            userId: 1,
            propertyId: 1,
            propertyName: 'Luxury Hotel',
            propertyLocation: 'Colombo, Sri Lanka',
            propertyRate: 4.5,
            propertyReviews: 120,
            checkinDate: '2024-07-01',
            checkoutDate: '2024-07-07',
            totalPrice: 12000,
            paymentMethod: 'Cash',
            firstName: 'Chamika',
            lastName: 'Srimantha',
            email: 'chamika@gmail.com',
            address: 'Panadura, LK',
            phoneno: '765627212',
            bookingFor: 'Main guest',
            rentingAdditionals: 'Rent a car',
            specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
            arrivalTime: '2:00 PM - 03:00 PM'
        },
        {
            id: 2,
            userId: 1,
            propertyId: 1,
            propertyName: 'Luxury Hotel',
            propertyLocation: 'Colombo, Sri Lanka',
            propertyRate: 4.5,
            propertyReviews: 120,
            checkinDate: '2024-06-01',
            checkoutDate: '2024-06-07',
            totalPrice: 12000,
            paymentMethod: 'Cash',
            firstName: 'Chamika',
            lastName: 'Srimantha',
            email: 'chamika@gmail.com',
            address: 'Panadura, LK',
            phoneno: '765627212',
            bookingFor: 'Main guest',
            rentingAdditionals: 'Rent a car',
            specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
            arrivalTime: '2:00 PM - 03:00 PM'
        },
        {
            id: 2,
            userId: 1,
            propertyId: 1,
            propertyName: 'Luxury Hotel',
            propertyLocation: 'Colombo, Sri Lanka',
            propertyRate: 4.5,
            propertyReviews: 120,
            checkinDate: '2024-06-01',
            checkoutDate: '2024-06-07',
            totalPrice: 12000,
            paymentMethod: 'Cash',
            firstName: 'Chamika',
            lastName: 'Srimantha',
            email: 'chamika@gmail.com',
            address: 'Panadura, LK',
            phoneno: '765627212',
            bookingFor: 'Main guest',
            rentingAdditionals: 'Rent a car',
            specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
            arrivalTime: '2:00 PM - 03:00 PM'
        },
    ]

    const DashboardCard = ({ title, value }) => {
        return (
            <Card style={{ backgroundColor: '#1B68DD', color: 'white', margin: '10px' }}>
                <CardContent>
                    <Typography variant="h4" component="div">
                        {value}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        );
    };

    return (
        <div>
            <NavBarPartner />

            <Box display="flex" justifyContent="center" style={{ margin: '20px', marginLeft: '5%', marginRight: '5%' }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard title="Total Income" value="$10,000" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard title="Last Month Income" value="$2,000" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard title="Total Bookings" value="150" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard title="Total Rates" value="4.5" />
                    </Grid>
                </Grid>
            </Box>

            {/* Recent bookings */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Recent Bookings</h4>
                    <p style={{ textAlign: 'left' }}>Recent bookings</p>
                </div>
                <Row style={{ marginLeft: '0%', marginRight: '0%' }} xs={1} md={3} className="g-1 justify-content-center">
                    {bookings.map((booking, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <BookingCardPartner booking={booking} />
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Latest reviews */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Latest Reviews</h4>
                    <p style={{ textAlign: 'left' }}>Latest reviews</p>
                </div>
                <Row style={{ marginLeft: '2%', marginRight: '2%' }} xs={1} md={3} className="g-1 justify-content-center">
                    {rateData.map((rate, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <RateCard rateData={rate} />
                        </Col>
                    ))}
                </Row>
            </Container>



            <br />
            <Footer />
        </div>
    )
}
