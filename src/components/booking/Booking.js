import { Box, Rating, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import Receipt from './Receipt';
import { useParams } from 'react-router-dom';
import { getBookingsById } from '../../services/api/booking.service';
import { getPropertyRatingsByProperty } from '../../services/api/property_rating.service';

export default function Booking() {

    const { id } = useParams();

    const [booking, setBooking] = useState(null);
    const [rateData, setRatings] = useState([]);
    const [averageRating, setAverageRating] = useState(null);
    const [reviewCount, setReviewCount] = useState(0);

    const fetchBookingById = async () => {
        const response = await getBookingsById(id);
        setBooking(response.data);
        console.log(response);
    }

    const fetchPropertyRatingsByProperty = async () => {
        try {
            const id = booking?.propertyEntity?.id;
            const ratingsResponse = await getPropertyRatingsByProperty(id);
            setRatings(ratingsResponse.data);

            // Calculate average rating
            const totalRating = ratingsResponse.data.reduce((sum, rating) => sum + rating.rate, 0);
            const avgRating = ratingsResponse.data.length ? (totalRating / ratingsResponse.data.length).toFixed(1) : 0;
            setAverageRating(avgRating);
            setReviewCount(ratingsResponse.data.length);
        } catch (error) {
            console.error("Error fetching property ratings:", error);
        }
    };

    useEffect(() => {
        fetchBookingById();
    }, []);

    useEffect(() => {
        if (booking) {
            fetchPropertyRatingsByProperty();
        }
    }, [booking]);

    // const booking = {
    //     id: 1,
    //     userId: 1,
    //     propertyId: 1,
    //     propertyName: 'Luxury Hotel',
    //     propertyLocation: 'Colombo, Sri Lanka',
    //     propertyRate: 4.5,
    //     propertyReviews: 120,
    //     checkinDate: '2024-07-01',
    //     checkoutDate: '2024-07-07',
    //     totalPrice: 12000,
    //     paymentMethod: 'Cash',
    //     firstName: 'Chamika',
    //     lastName: 'Srimantha',
    //     email: 'chamika@gmail.com',
    //     address: 'Panadura, LK',
    //     phoneno: '+94 76 562 7212',
    //     bookingFor: 'Main guest',
    //     rentingAdditionals: 'Rent a car',
    //     specialRequests: 'No No No No No No No No No No No No No No No No No No No No No No No No',
    //     arrivalTime: '2:00 PM - 03:00 PM'
    // };

    const getRatingLabel = (rate) => {
        if (rate <= 2) return 'Low';
        if (rate <= 3) return 'Average';
        if (rate <= 4) return 'Good';
        if (rate <= 4.5) return 'Excellent';
        return 'Wonderful';
    };

    const isMobile = useMediaQuery('(max-width: 600px)');

    const squareStyle = {
        backgroundColor: 'white',
        border: '1px solid #DEDCDD',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '02px',
        textAlign: 'left',
    };

    const receiptRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => receiptRef.current,
    });

    return (
        <div className='mt-4'>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                        <div style={squareStyle}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Your Booking Details</h4>
                        </div>
                    </Col>
                    <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                        <div style={squareStyle}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{booking?.propertyEntity?.name}</h4>
                            <p>{booking?.propertyEntity?.location}</p>
                            <div className="d-flex align-items-center mt-2 mt-md-0">
                                <Box style={{ backgroundColor: '#184D9D', color: 'white', padding: '5px', borderRadius: '5px', width: '50px', textAlign: 'center' }}>
                                    {averageRating ? averageRating : 'N/A'}
                                </Box>
                                <Rating value={Number(averageRating) || 0} precision={0.1} readOnly style={{ marginLeft: '10px', color: '#FFD700' }} />
                                <Typography variant="body2" style={{ marginLeft: '10px', fontSize: '1rem' }}>
                                    {averageRating ? getRatingLabel(Number(averageRating)) : 'N/A'}
                                </Typography>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                        <div style={squareStyle}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Guest Details</h4>
                            <p>Guest Name: {booking?.firstName} {booking?.lastName}</p>
                            <p>Email: {booking?.email}</p>
                            <p>Address: {booking?.address}</p>
                            <p>Phone Number: {booking?.phoneNo}</p>
                        </div>
                    </Col>
                    <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                        <div style={squareStyle}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Additional Details</h4>
                            <p>Booking for: {booking?.bookingFor}</p>
                            <p>Extra services added: {booking?.airportShuttle ? 'Airport shuttle added' : ''}, {booking?.rentingCar ? 'Rent a car added' : ''}, {booking?.rentingBicycle ? 'Rent a bicycle added' : ''}</p>
                            <p>Special requests: {booking?.specialRequests}</p>
                            <p>Arrival time: {booking?.arrivalTime}</p>
                        </div>
                    </Col>
                    <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                        <div style={squareStyle}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Checkin & Checkout Details</h4>
                            <p>Check-in Date: {booking?.checkinDate}</p>
                            <p>Check-out Date: {booking?.checkoutDate}</p>
                            <p>Total Length of Stay: {Math.ceil((new Date(booking?.checkoutDate) - new Date(booking?.checkinDate)) / (1000 * 60 * 60 * 24))} nights</p>
                        </div>
                    </Col>
                    <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                        <div style={squareStyle}>
                            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Total price summary</h4>
                            <p>Payment Method: {booking?.paymentMethod}</p>
                            <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Total: {booking?.totalPrice} LKR</h4>
                        </div>
                    </Col>
                    <Col md={6} className="mb-3" style={{ width: isMobile ? '100%' : '70%' }}>
                        <div style={squareStyle}>
                            <Button variant="primary" onClick={handlePrint}>
                                View Receipt
                            </Button>
                        </div>
                    </Col>
                </Row>
                <div style={{ display: 'none' }}>
                    <Receipt ref={receiptRef} booking={booking} />
                </div>
            </Container>
        </div>
    )
}
