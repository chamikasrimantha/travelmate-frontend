import React from 'react';
import { Typography, Divider } from '@mui/material';

const Receipt = React.forwardRef((props, ref) => {

    const { booking } = props;

    const receiptStyle = {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#fff',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '20px'
    };

    const sectionStyle = {
        marginBottom: '15px',
        padding: '20px',
        borderBottom: '1px solid #ccc',
    };

    const sectionStyle1 = {
        marginBottom: '15px',
        padding: '20px',
        borderTop: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
    };

    const sectionStyle2 = {
        marginBottom: '15px',
        padding: '20px',
    };

    const titleStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
    };

    const detailStyle = {
        fontSize: '1rem',
        marginBottom: '5px',
        color: '#555',
    };

    const strongStyle = {
        fontWeight: 'bold',
    };

    return (
        <div ref={ref} style={receiptStyle}>
            <div style={headerStyle}>
                <Typography variant="h4" style={{ color: '#184D9D', marginBottom: '10px', marginTop: '10px' }}>
                    TravelMate
                </Typography>
                <Typography variant="h5" style={{ color: '#333', marginBottom: '20px' }}>
                    Booking Receipt
                </Typography>
            </div>
            <div style={sectionStyle1}>
                <Typography variant="h6" style={titleStyle}>Property Details</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Name:</strong> {booking?.propertyEntity?.name}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Location:</strong> {booking?.propertyEntity?.location}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Rate:</strong> {booking?.propertyRate}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Reviews:</strong> {booking?.propertyReviews}</Typography>
            </div>
            <div style={sectionStyle}>
                <Typography variant="h6" style={titleStyle}>Guest Details</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Name:</strong> {booking?.firstName} {booking?.lastName}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Email:</strong> {booking?.email}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Address:</strong> {booking?.address}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Phone Number:</strong> {booking?.phoneNo}</Typography>
            </div>
            <div style={sectionStyle}>
                <Typography variant="h6" style={titleStyle}>Booking Details</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Check-in Date:</strong> {booking?.checkinDate}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Check-out Date:</strong> {booking?.checkoutDate}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Total Price:</strong> {booking?.totalPrice} LKR</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Payment Method:</strong> {booking?.paymentMethod}</Typography>
            </div>
            <div style={sectionStyle2}>
                <Typography variant="h6" style={titleStyle}>Additional Details</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Booking for:</strong> {booking?.bookingFor}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Extra services added:</strong> {booking?.rentingAdditionals}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Special requests:</strong> {booking?.specialRequests}</Typography>
                <Typography variant="body1" style={detailStyle}><strong>Arrival time:</strong> {booking?.arrivalTime}</Typography>
            </div>
        </div>
    );
});

export default Receipt;
