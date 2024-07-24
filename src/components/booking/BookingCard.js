import React, { useState } from 'react';
import { Box, Typography, Button, Rating, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Card, CardContent, CardActions } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import AddPropertyReview from '../rate/AddPropertyReview';

export default function BookingCard({ booking }) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {
        id,
        propertyRate,
        propertyEntity: { id: propertyId } = {},
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
    };

    return (
        <div>
            <Card style={cardStyle}>
                <CardContent style={sectionStyle}>
                    <div style={leftSection}>
                        <Typography variant="h4" style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                            {booking?.propertyEntity?.name}
                        </Typography>
                        <Typography variant="body2" style={{ marginTop: '10px', fontSize: '1rem' }} color="textSecondary">
                            {booking?.propertyEntity?.location}
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
                            <b>Check-in: </b> {booking?.checkinDate}
                        </Typography>
                        <Typography style={{ marginTop: '13px', fontSize: '1rem' }} variant="body2">
                            <b>Check-out: </b> {booking?.checkoutDate}
                        </Typography>
                        <Typography style={{ marginTop: '13px', fontSize: '1rem' }} variant="body2">
                            <b>Total price: </b> {booking?.totalPrice} LKR
                        </Typography>
                    </div>
                </CardContent>
                <CardActions style={buttonContainerStyle}>
                    <Link to={`/booking/${id}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary" size="small" style={{ marginRight: isMobile ? '0' : '10px' }}>
                            View
                        </Button>
                    </Link>
                    <Button onClick={handleClickOpen} variant="contained" color="secondary" size="small">
                        Add review
                    </Button>
                </CardActions>
            </Card>

            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Add Review</DialogTitle>
                <DialogContent>
                    <AddPropertyReview userId={localStorage.getItem("userId")} propertyId={propertyId} handleClose={handleClose} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
