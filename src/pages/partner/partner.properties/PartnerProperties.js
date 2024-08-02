import React, { useEffect, useMemo, useState } from 'react';
import NavBarPartner from '../../../components/navbar/NavBarPartner';
import Footer from '../../../components/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import PropertyCardPartner from '../../../components/property/PropertyCardPartner';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { getPropertiesByUser } from '../../../services/api/property.service';
import { getPropertyRatingsByProperty } from '../../../services/api/property_rating.service';

export default function PartnerProperties() {

    const [properties, setProperties] = useState([]);
    const [propertyRatings, setPropertyRatings] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const userId = localStorage.getItem('userId');
                const propertiesResponse = await getPropertiesByUser(userId);
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
    });

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
    //     {
    //         id: '1',
    //         image: 'https://via.placeholder.com/150',
    //         name: 'Luxury Hotel',
    //         rate: 4.3,
    //         district: 'Colombo District',
    //         city: 'Colombo',
    //         location: '123 Main Street, Colombo, Sri Lanka',
    //         description: 'A luxurious hotel with stunning views and excellent amenities.'
    //     },
    //     {
    //         id: '2',
    //         image: 'https://via.placeholder.com/150',
    //         name: 'Luxury Hotel',
    //         rate: 4.3,
    //         district: 'Colombo District',
    //         city: 'Colombo',
    //         location: '123 Main Street, Colombo, Sri Lanka',
    //         description: 'A luxurious hotel with stunning views and excellent amenities.'
    //     }
    // ];

    const navigate = useNavigate();

    const gotoAddProperty = () => {
        navigate('/partner/add-new-property')
    }

    return (
        <div>
            <NavBarPartner />

            {/* Top */}
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <div>
                        <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Manage your properties</h4>
                        <p style={{ textAlign: 'left' }}>Click on each property to edit/ update or delete</p>
                    </div>
                    <div>
                        <ButtonBase
                            style={{
                                backgroundColor: '#184D9D',
                                color: 'white',
                                borderRadius: '8px',
                                padding: '8px 12px',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onClick={gotoAddProperty}
                        >
                            <AddCircleOutlineIcon style={{ marginRight: '10px' }} />List new property
                        </ButtonBase>
                    </div>
                </div>
            </Container>

            {/* properties */}
            <Container fluid>
                <Row style={{ marginTop: '5px', marginLeft: '4%', marginRight: '4%' }} xs={1} md={2} className="g-1 justify-content-center">
                    {propertiesWithRates.map((property, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <PropertyCardPartner property={property} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <br /><br /><br />
            <Footer />
        </div>
    )
}
