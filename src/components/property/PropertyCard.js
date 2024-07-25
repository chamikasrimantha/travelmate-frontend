import React from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function PropertyCard({ property }) {
    const { id, img, name, rate, location, sentence } = property;

    // Function to get the rating label
    const getRatingLabel = (rate) => {
        if (rate <= 2) return 'Low';
        if (rate <= 3) return 'Average';
        if (rate <= 4) return 'Good';
        if (rate <= 4.5) return 'Excellent';
        return 'Wonderful';
    };

    const cardStyle = {
        maxWidth: '550px',
        borderRadius: '8px',
        border: '0.1px solid #DEDDDD',
    };

    return (
        <div style={cardStyle} className="d-flex flex-column flex-md-row mb-3 p-3">
            {/* Image Section */}
            <div className="text-center" style={{ flex: '1 1 auto' }}>
                <img
                    src={img || 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'}
                    alt={name}
                    style={{ width: '100%', height: 'auto', minWidth: '150px', minHeight: '150px', objectFit: 'cover', borderRadius: '8px' }}
                />
            </div>

            {/* Details Section */}
            <div className="d-flex flex-column justify-content-start mt-3 mt-md-0 ms-md-3" style={{ flex: '2 1 auto' }}>
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                        {name}
                    </Typography>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between" style={{ marginTop: '5px' }}>

                    <div className="d-flex align-items-center mt-2 mt-md-0">
                        <Box
                            sx={{
                                backgroundColor: '#184D9D',
                                color: 'white',
                                borderRadius: '4px',
                                padding: '2px 6px',
                                marginRight: '5px'
                            }}
                        >
                            {rate ? rate.toFixed(1) : 'N/A'}
                        </Box>
                        <Rating name="read-only" value={rate || 0} readOnly sx={{ marginRight: '5px' }} />
                        {rate ? (
                            <Typography variant="body2">{getRatingLabel(rate)}</Typography>
                        ) : ''
                        }

                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between mt-1">
                    <Typography variant="body2">
                        {property?.districtEntity?.name}, {property?.cityEntity?.name}
                    </Typography>

                </div>
                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between mt-1">
                    <Link to={`/property/${id}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary" size="small" sx={{ backgroundColor: '#184D9D', marginTop: { xs: '8px', md: '0' } }}>
                            Show Prices
                        </Button>
                    </Link>
                </div>
                <Typography className="mt-2 d-flex align-items-center justify-content-between" variant="body2" color="textSecondary">
                    {location}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mt-2 d-flex align-items-center justify-content-between">
                    {sentence}
                </Typography>
            </div>
        </div>
    );
}
