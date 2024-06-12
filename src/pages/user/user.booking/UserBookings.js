import React from 'react'
import NavBarUser from '../../../components/navbar/NavBarUser'
import Footer from '../../../components/footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import BookingCard from '../../../components/booking/BookingCard'

export default function UserBookings() {

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
            firstName: 'Chamika',
            lastName: 'Srimantha',
            email: 'chamika@gmail.com',
            address: 'Panadura, LK',
            phoneno: '+94 76 562 7212',
            bookingFor: 'Main guest',
            rentingAdditionals: 'Rent a car',
            specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
            arrivalTime: '2:00 PM - 03:00 PM'
        },
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
            firstName: 'Chamika',
            lastName: 'Srimantha',
            email: 'chamika@gmail.com',
            address: 'Panadura, LK',
            phoneno: '+94 76 562 7212',
            bookingFor: 'Main guest',
            rentingAdditionals: 'Rent a car',
            specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
            arrivalTime: '2:00 PM - 03:00 PM'
        },
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
            firstName: 'Chamika',
            lastName: 'Srimantha',
            email: 'chamika@gmail.com',
            address: 'Panadura, LK',
            phoneno: '+94 76 562 7212',
            bookingFor: 'Main guest',
            rentingAdditionals: 'Rent a car',
            specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
            arrivalTime: '2:00 PM - 03:00 PM'
        },
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
            firstName: 'Chamika',
            lastName: 'Srimantha',
            email: 'chamika@gmail.com',
            address: 'Panadura, LK',
            phoneno: '+94 76 562 7212',
            bookingFor: 'Main guest',
            rentingAdditionals: 'Rent a car',
            specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
            arrivalTime: '2:00 PM - 03:00 PM'
        }
    ]


    return (
        <div>
            <NavBarUser />
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>My bookings</h4>
                    <p style={{ textAlign: 'left' }}>Your bookings</p>
                </div>
                <Row style={{ marginLeft: '1%', marginRight: '1%' }} xs={1} md={2} className="g-1 justify-content-center">
                    {bookings.map((booking, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <BookingCard booking={booking} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
