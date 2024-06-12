import React from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import { Card, CardContent, CardActions } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export default function BookingCard({ booking }) {
    const {
        propertyName,
        propertyLocation,
        propertyRate,
        checkinDate,
        checkoutDate,
        totalPrice
    } = booking;

    const isMobile = useMediaQuery('(max-width:600px)');

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        border: '0.1px solid #DEDDDD',
        padding: '16px',
        marginBottom: '20px',
    };

    const sectionStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
    };

    const leftSection = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: '1',
        marginBottom: isMobile ? '16px' : '0',
    };

    const rightSection = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: '1.3',
        marginTop: '-6px',
        marginLeft: isMobile ? '0' : '20px',
    };

    const rateStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        marginTop: '10px',
    };

    const buttonContainerStyle = {
        marginLeft: '10px',
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '5px',
        flexDirection: isMobile ? 'column' : 'row',
    };

    return (
        <Card style={cardStyle}>
            <CardContent style={sectionStyle}>
                <div style={leftSection}>
                    <Typography variant="h4" style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                        {propertyName}
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '10px', fontSize: '1rem' }} color="textSecondary">
                        {propertyLocation}
                    </Typography>
                    <div style={rateStyle}>
                        <Box
                            sx={{
                                backgroundColor: '#184D9D',
                                color: 'white',
                                borderRadius: '4px',
                                padding: '2px 6px',
                                marginRight: '5px'
                            }}
                        >
                            {propertyRate}
                        </Box>
                        <Rating name="read-only" value={propertyRate} readOnly />
                    </div>
                </div>
                <div style={rightSection}>
                    <Typography variant="body2" style={{ fontSize: '1rem' }}>
                        <b>Check-in: </b> {checkinDate}
                    </Typography>
                    <Typography style={{ marginTop: '13px', fontSize: '1rem' }} variant="body2">
                        <b>Check-out: </b> {checkoutDate}
                    </Typography>
                    <Typography style={{ marginTop: '13px', fontSize: '1rem' }} variant="body2">
                        <b>Total price: </b> {totalPrice} LKR
                    </Typography>
                </div>
            </CardContent>
            <CardActions style={buttonContainerStyle}>
                <Button variant="contained" color="primary" size="small" style={{ marginBottom: isMobile ? '10px' : '0', marginRight: isMobile ? '0' : '10px' }}>
                    View
                </Button>
                <Button variant="contained" color="secondary" size="small">
                    Cancel
                </Button>
            </CardActions>
        </Card>
    );
}
