import React, { useEffect, useMemo, useState } from 'react';
import NavBarAdmin from '../../../components/navbar/NavBarAdmin';
import Footer from '../../../components/footer/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Col, Container, Row } from 'react-bootstrap';
import PropertyCard from '../../../components/property/PropertyCard';
import BookingCardPartner from '../../../components/booking/BookingCardPartner';
import { getAllProperties } from '../../../services/api/property.service';
import { getPropertyRatingsByProperty } from '../../../services/api/property_rating.service';
import { getAllBookings } from '../../../services/api/booking.service';
import { getAllUsers, getAllPartners } from '../../../services/api/user.service';

export default function AdminDashboard() {

    const [properties, setProperties] = useState([]);
    const [propertyRatings, setPropertyRatings] = useState([]);

    const [bookings, setBookings] = useState([]);

    const [users, setUsers] = useState([]);
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        async function fetchPropertyData() {
            try {
                const propertiesResponse = await getAllProperties();
                setProperties(propertiesResponse.data);

                // Fetch ratings for each property
                const ratingsPromises = propertiesResponse.data.map(property =>
                    getPropertyRatingsByProperty(property.id)
                        .then(response => ({ propertyId: property.id, ratings: response.data }))
                        .catch(error => {
                            console.error(`Error fetching ratings for property ${property.id}:`, error);
                            return { propertyId: property.id, ratings: [] };
                        })
                );

                const ratingsResults = await Promise.all(ratingsPromises);

                const ratingsMap = ratingsResults.reduce((acc, { propertyId, ratings }) => {
                    acc[propertyId] = ratings;
                    return acc;
                }, {});

                setPropertyRatings(ratingsMap);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        async function fetchBookingData () {
            const response = await getAllBookings();
            setBookings(response.data);
            console.log(response);
        }

        async function fetchUserData() {
            try {
                const usersResponse = await getAllUsers();
                setUsers(usersResponse.data);
                const partnersResponse = await getAllPartners();
                setPartners(partnersResponse.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchPropertyData();
        fetchBookingData();
        fetchUserData();
    }, []);

    const propertiesWithRates = useMemo(() => {
        return properties.map(property => {
            const propertyRates = propertyRatings[property.id] || [];
            const averageRate = propertyRates.length > 0
                ? propertyRates.reduce((sum, rate) => sum + rate.rate, 0) / propertyRates.length
                : 0;
            return {
                ...property,
                rate: averageRate
            };
        });
    }, [properties, propertyRatings]);

    const totalUsers = users.length + partners.length;
    const totalProperties = properties.length;

    const totalTransactions = bookings.reduce((sum, booking) => sum + booking.totalPrice, 0);

    const lastMonthIncome = bookings
        .filter(booking => {
            const checkinDate = new Date(booking.checkinDate);
            const now = new Date();
            const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
            const nextMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            return checkinDate >= lastMonth && checkinDate < nextMonth;
        })
        .reduce((sum, booking) => sum + booking.totalPrice, 0);

    // const properties = [
    //     {
    //         id: '1',
    //         image: 'https://via.placeholder.com/150',
    //         name: 'Luxury Hotel',
    //         rate: 4.3,
    //         district: 'Colombo District',
    //         city: 'Colombo',
    //         location: '123 Main Street, Colombo, Sri Lanka',
    //         description: 'A luxurious hotel with stunning views and excellent amenities.'
    //     },
    //     {
    //         id: '2',
    //         image: 'https://via.placeholder.com/150',
    //         name: 'Luxury Hotel',
    //         rate: 4.3,
    //         district: 'Colombo District',
    //         city: 'Colombo',
    //         location: '123 Main Street, Colombo, Sri Lanka',
    //         description: 'A luxurious hotel with stunning views and excellent amenities.'
    //     }
    // ];

    // const bookings = [
    //     {
    //         id: 1,
    //         userId: 1,
    //         propertyId: 1,
    //         propertyName: 'Luxury Hotel',
    //         propertyLocation: 'Colombo, Sri Lanka',
    //         propertyRate: 4.5,
    //         propertyReviews: 120,
    //         checkinDate: '2024-07-01',
    //         checkoutDate: '2024-07-07',
    //         totalPrice: 12000,
    //         paymentMethod: 'Cash',
    //         firstName: 'Chamika',
    //         lastName: 'Srimantha',
    //         email: 'chamika@gmail.com',
    //         address: 'Panadura, LK',
    //         phoneno: '765627212',
    //         bookingFor: 'Main guest',
    //         rentingAdditionals: 'Rent a car',
    //         specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
    //         arrivalTime: '2:00 PM - 03:00 PM'
    //     },
    //     {
    //         id: 2,
    //         userId: 1,
    //         propertyId: 1,
    //         propertyName: 'Luxury Hotel',
    //         propertyLocation: 'Colombo, Sri Lanka',
    //         propertyRate: 4.5,
    //         propertyReviews: 120,
    //         checkinDate: '2024-06-01',
    //         checkoutDate: '2024-06-07',
    //         totalPrice: 12000,
    //         paymentMethod: 'Cash',
    //         firstName: 'Chamika',
    //         lastName: 'Srimantha',
    //         email: 'chamika@gmail.com',
    //         address: 'Panadura, LK',
    //         phoneno: '765627212',
    //         bookingFor: 'Main guest',
    //         rentingAdditionals: 'Rent a car',
    //         specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
    //         arrivalTime: '2:00 PM - 03:00 PM'
    //     },
    //     {
    //         id: 2,
    //         userId: 1,
    //         propertyId: 1,
    //         propertyName: 'Luxury Hotel',
    //         propertyLocation: 'Colombo, Sri Lanka',
    //         propertyRate: 4.5,
    //         propertyReviews: 120,
    //         checkinDate: '2024-06-01',
    //         checkoutDate: '2024-06-07',
    //         totalPrice: 12000,
    //         paymentMethod: 'Cash',
    //         firstName: 'Chamika',
    //         lastName: 'Srimantha',
    //         email: 'chamika@gmail.com',
    //         address: 'Panadura, LK',
    //         phoneno: '765627212',
    //         bookingFor: 'Main guest',
    //         rentingAdditionals: 'Rent a car',
    //         specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
    //         arrivalTime: '2:00 PM - 03:00 PM'
    //     },
    // ]

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
            <NavBarAdmin />

            <Box display="flex" justifyContent="center" style={{ margin: '20px', marginLeft: '5%', marginRight: '5%' }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard title="Total Users" value={totalUsers} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard title="Total Properties" value={totalProperties} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard title="Total Transactions" value={`${totalTransactions.toLocaleString()} LKR`} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <DashboardCard title="Last Month Income" value={`${lastMonthIncome.toLocaleString()} LKR`} />
                    </Grid>
                </Grid>
            </Box>

            {/* recent properties */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Recent properties added</h4>
                    <p style={{ textAlign: 'left' }}>Recent properties added.</p>
                </div>
                <Row style={{ marginLeft: '4%', marginRight: '4%' }} xs={1} md={2} className="g-1 justify-content-center">
                    {propertiesWithRates.slice(-2).map((property, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <PropertyCard property={property} />
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Recent bookings */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Recent Bookings</h4>
                    <p style={{ textAlign: 'left' }}>Recent bookings</p>
                </div>
                <Row style={{ marginLeft: '0%', marginRight: '0%' }} xs={1} md={3} className="g-1 justify-content-center">
                    {bookings.slice(-3).map((booking, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <BookingCardPartner booking={booking} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <br />
            <Footer />
        </div>
    )
}
