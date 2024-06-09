import React from 'react';
import { Card, CardContent, Typography, Box, Rating } from '@mui/material';

const RateCard = ({ rateData }) => {
    // Inline styles
    const cardStyle = {
        margin: '10px',
        padding: '15px',
        maxWidth: '330px',
        borderRadius: '8px',
        boxShadow: '5px 4px 8px 5px rgba(0, 0, 0, 0.2)', // Increased box shadow
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Added box-shadow to transition
        '&:hover': {
            transform: 'scale(1.1)', // Increased scale factor on hover
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Increased box shadow on hover
        },
    };

    const rateBoxStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
    };

    const rateNumberStyle = {
        backgroundColor: '#184D9D',
        color: 'white',
        borderRadius: '4px',
        padding: '4px 8px',
        marginRight: '10px',
    };

    const commentStyle = {
        marginTop: '12px',
    };

    return (
        <Card className="mb-3" style={cardStyle}>
            <CardContent>
                <Typography style={rateBoxStyle} variant="h6">{rateData.name}</Typography>
                <div style={rateBoxStyle}>
                    <Box style={rateNumberStyle}>{rateData.rate}</Box>
                    <Rating value={rateData.rate} readOnly />
                </div>
                <Typography variant="body1" style={commentStyle}>
                    {rateData.comment}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default RateCard;
