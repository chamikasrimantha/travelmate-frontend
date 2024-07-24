import React, { useEffect, useState } from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import Footer from '../../../components/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import BookingCard from '../../../components/booking/BookingCard';
import { getBookingsByUser } from '../../../services/api/booking.service';
import { getPropertyRatingsByProperty } from '../../../services/api/property_rating.service';

export default function UserBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookingsByUser = async () => {
            const id = localStorage.getItem("userId");
            if (id) {
                const response = await getBookingsByUser(id);
                setBookings(response.data);
                console.log(response);
            }
        };

        fetchBookingsByUser();
    }, []);

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
    //         phoneno: '+94 76 562 7212',
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
    //         phoneno: '+94 76 562 7212',
    //         bookingFor: 'Main guest',
    //         rentingAdditionals: 'Rent a car',
    //         specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
    //         arrivalTime: '2:00 PM - 03:00 PM'
    //     },
    //     {
    //         id: 3,
    //         userId: 1,
    //         propertyId: 1,
    //         propertyName: 'Luxury Hotel',
    //         propertyLocation: 'Colombo, Sri Lanka',
    //         propertyRate: 4.5,
    //         propertyReviews: 120,
    //         checkinDate: '2024-06-10',
    //         checkoutDate: '2024-06-12',
    //         totalPrice: 12000,
    //         paymentMethod: 'Cash',
    //         firstName: 'Chamika',
    //         lastName: 'Srimantha',
    //         email: 'chamika@gmail.com',
    //         address: 'Panadura, LK',
    //         phoneno: '+94 76 562 7212',
    //         bookingFor: 'Main guest',
    //         rentingAdditionals: 'Rent a car',
    //         specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
    //         arrivalTime: '2:00 PM - 03:00 PM'
    //     },
    //     {
    //         id: 4,
    //         userId: 1,
    //         propertyId: 1,
    //         propertyName: 'Luxury Hotel',
    //         propertyLocation: 'Colombo, Sri Lanka',
    //         propertyRate: 4.5,
    //         propertyReviews: 120,
    //         checkinDate: '2024-06-04',
    //         checkoutDate: '2024-06-05',
    //         totalPrice: 12000,
    //         paymentMethod: 'Cash',
    //         firstName: 'Chamika',
    //         lastName: 'Srimantha',
    //         email: 'chamika@gmail.com',
    //         address: 'Panadura, LK',
    //         phoneno: '+94 76 562 7212',
    //         bookingFor: 'Main guest',
    //         rentingAdditionals: 'Rent a car',
    //         specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
    //         arrivalTime: '2:00 PM - 03:00 PM'
    //     }
    // ];

    const currentDate = new Date();

    const activeBookings = bookings.filter(booking => new Date(booking?.checkoutDate) >= currentDate);
    const completedBookings = bookings.filter(booking => new Date(booking?.checkoutDate) < currentDate);

    return (
        <div>
            <NavBarUser />
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>My bookings</h4>
                    <p style={{ textAlign: 'left' }}>Your bookings</p>
                </div>
                <Row style={{ marginLeft: '1%', marginRight: '1%' }} xs={1} md={2} className="g-1 justify-content-center">
                    {activeBookings.map((booking, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <BookingCard booking={booking} />
                        </Col>
                    ))}
                </Row>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>My completed bookings</h4>
                    <p style={{ textAlign: 'left' }}>Your completed bookings</p>
                </div>
                <Row style={{ marginLeft: '1%', marginRight: '1%' }} xs={1} md={2} className="g-1 justify-content-center">
                    {completedBookings.map((booking, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <BookingCard booking={booking} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
}
