import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PartnerAnnouncementCard = ({ announcement }) => {
    // Inline styles
    const cardStyle = {
        margin: '10px',
        padding: '15px',
        maxWidth: '330px',
        minWidth: '330px',
        borderRadius: '8px',
        border: '0.1px solid #DEDDDD',
    };

    const titleStyle = {
        fontWeight: 'bold',
        marginBottom: '8px',
        textAlign: 'left',
    };

    const messageStyle = {
        marginTop: '12px',
        textAlign: 'left',
    };

    return (
        <div className="mb-3" style={cardStyle}>
            <CardContent>
                <Typography variant="h6" style={titleStyle}>
                    {announcement.title}
                </Typography>
                <Typography variant="body1" style={messageStyle}>
                    {announcement.message}
                </Typography>
            </CardContent>
        </div>
    );
};

export default PartnerAnnouncementCard;
