import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CategoryCard = ({ category }) => {
  // Inline styles
  const cardStyle = {
    margin: '10px',
    padding: '15px',
    maxWidth: '330px',
    borderRadius: '8px',
    border: '0.1px solid #DEDDDD',
  };

  const titleStyle = {
    fontWeight: 'bold',
    marginBottom: '8px',
    textAlign: 'left', // Added textAlign
  };

  const messageStyle = {
    marginTop: '12px',
    textAlign: 'left', // Added textAlign
  };

  return (
    <div className="mb-3" style={cardStyle}>
      <CardContent>
        <Typography variant="h6" style={titleStyle}>
          {category.name}
        </Typography>
      </CardContent>
    </div>
  );
};

export default CategoryCard;