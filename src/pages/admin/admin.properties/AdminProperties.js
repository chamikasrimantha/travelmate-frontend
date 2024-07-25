import React, { useEffect, useMemo, useState } from 'react';
import NavBarAdmin from '../../../components/navbar/NavBarAdmin';
import Footer from '../../../components/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropertyCard from '../../../components/property/PropertyCard';
import { getAllProperties } from '../../../services/api/property.service';
import { getPropertyRatingsByProperty } from '../../../services/api/property_rating.service';

export default function AdminProperties() {

  const isMobile = useMediaQuery('(max-width: 600px)');

  const [properties, setProperties] = useState([]);
  const [propertyRatings, setPropertyRatings] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const propertiesResponse = await getAllProperties();
        setProperties(propertiesResponse.data);

        // Fetch ratings for each city
        const ratingsPromises = propertiesResponse.data.map(property =>
          getPropertyRatingsByProperty(property.id)
            .then(response => ({ propertyId: property.id, ratings: response.data }))
            .catch(error => {
              console.error(`Error fetching ratings for property ${property.id}:`, error);
              return { propertyId: property.id, ratings: [] };
            })
        );

        const ratingsResults = await Promise.all(ratingsPromises);

        const ratingsMap = ratingsResults.reduce((acc, { propertyId, ratings }) => {
          acc[propertyId] = ratings;
          return acc;
        }, {});

        setPropertyRatings(ratingsMap);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const propertiesWithRates = useMemo(() => {
    return properties.map(property => {
      const propertyRates = propertyRatings[property.id] || [];
      const averageRate = propertyRates.length > 0
        ? propertyRates.reduce((sum, rate) => sum + rate.rate, 0) / propertyRates.length
        : 0;
      return {
        ...property,
        rate: averageRate
      };
    });
  }, [properties, propertyRatings]);

  // const properties = [
  //   {
  //     id: '1',
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Luxury Hotel',
  //     rate: 4.3,
  //     district: 'Colombo District',
  //     city: 'Colombo',
  //     location: '123 Main Street, Colombo, Sri Lanka',
  //     description: 'A luxurious hotel with stunning views and excellent amenities.'
  //   },
  //   {
  //     id: '2',
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Luxury Hotel',
  //     rate: 4.3,
  //     district: 'Colombo District',
  //     city: 'Colombo',
  //     location: '123 Main Street, Colombo, Sri Lanka',
  //     description: 'A luxurious hotel with stunning views and excellent amenities.'
  //   },
  //   {
  //     id: '2',
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Luxury Hotel',
  //     rate: 4.3,
  //     district: 'Colombo District',
  //     city: 'Colombo',
  //     location: '123 Main Street, Colombo, Sri Lanka',
  //     description: 'A luxurious hotel with stunning views and excellent amenities.'
  //   },
  //   {
  //     id: '2',
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Luxury Hotel',
  //     rate: 4.3,
  //     district: 'Colombo District',
  //     city: 'Colombo',
  //     location: '123 Main Street, Colombo, Sri Lanka',
  //     description: 'A luxurious hotel with stunning views and excellent amenities.'
  //   },
  //   {
  //     id: '2',
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Luxury Hotel',
  //     rate: 4.3,
  //     district: 'Colombo District',
  //     city: 'Colombo',
  //     location: '123 Main Street, Colombo, Sri Lanka',
  //     description: 'A luxurious hotel with stunning views and excellent amenities.'
  //   },
  //   {
  //     id: '2',
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Luxury Hotel',
  //     rate: 4.3,
  //     district: 'Colombo District',
  //     city: 'Colombo',
  //     location: '123 Main Street, Colombo, Sri Lanka',
  //     description: 'A luxurious hotel with stunning views and excellent amenities.'
  //   }
  // ];

  return (
    <div>
      <NavBarAdmin />

      {/* properties */}
      <Container fluid>
        <div className="mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
          <Row>
            <Col xs={12} md={8}>
              <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Manage properties</h4>
              <p style={{ textAlign: 'left' }}>Click on each properrty to view.</p>
            </Col>
            <Col xs={12} md={4} className={isMobile ? 'mt-1 mb-3' : ''}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Col>
          </Row>
        </div>
        <Row style={{ marginLeft: '4%', marginRight: '4%' }} xs={1} md={2} className="g-1 justify-content-center">
          {propertiesWithRates.map((property, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <PropertyCard property={property} />
            </Col>
          ))}
        </Row>
      </Container>

      <br />
      <Footer />
    </div>
  )
}
