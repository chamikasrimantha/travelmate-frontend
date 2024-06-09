import React from 'react';
import { Card, CardContent, Typography, Box, Rating } from '@mui/material';

const RateCard = ({ rateData }) => {
    // Inline styles
    const cardStyle = {
        margin: '10px',
        padding: '15px',
        maxWidth: '330px',
        borderRadius: '8px',
        border: '0.1px solid gray',
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
        <div className="mb-3" style={cardStyle}>
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
        </div>
    );
};

export default RateCard;
