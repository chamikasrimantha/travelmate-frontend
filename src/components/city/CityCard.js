import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CityCard({ city }) {
    const { image, name, rate, district } = city;

    // Function to get the rating label
    const getRatingLabel = (rate) => {
        if (rate <= 2) return 'Low';
        if (rate <= 3) return 'Average';
        if (rate <= 4) return 'Good';
        if (rate <= 4.5) return 'Excellent';
        return 'Wonderful';
    };

    return (
        <Link to={`/city/${name}`} style={{ textDecoration: 'none' }}>
            <Card className="mb-3 d-flex flex-row" style={{ maxWidth: 345, height: 160 }}>
                <CardMedia
                    component="img"
                    alt={name}
                    height="160"
                    image={image}
                    style={{ width: 160 }}
                />
                <CardContent className="d-flex flex-column justify-content-center" style={{ marginLeft: "7px", padding: '10px' }}>
                    <Box display="flex" flexDirection="column" alignItems="flex-start" flex="1" gap={1}>
                        <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {district}
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <Rating style={{ marginLeft: "-4px" }} name="read-only" value={rate} readOnly />
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Typography variant="body1" style={{ marginRight: '3px' }}>
                                {rate}
                            </Typography>
                            <Typography variant="body1" style={{ marginRight: '5px' }}>
                                /
                            </Typography>
                            <Typography variant="body1">
                                {getRatingLabel(rate)}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    );
}
