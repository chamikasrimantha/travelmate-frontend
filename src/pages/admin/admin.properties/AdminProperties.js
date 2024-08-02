import React, { useEffect, useMemo, useState } from 'react';
import NavBarAdmin from '../../../components/navbar/NavBarAdmin';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from '../../../components/footer/Footer';
import PropertyCard from '../../../components/property/PropertyCard';
import { getAllProperties, getPropertiesByCategory, getPropertiesByDistrict } from '../../../services/api/property.service';
import { getPropertyRatingsByProperty } from '../../../services/api/property_rating.service';
import { getAllCategories } from '../../../services/api/category.service';
import { getAllDistricts } from '../../../services/api/district.service';

export default function UserProperties() {
    const isMobile = useMediaQuery('(max-width: 600px)');

    const [properties, setProperties] = useState([]);
    const [propertyRatings, setPropertyRatings] = useState({});
    const [categories, setCategories] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedDistricts, setSelectedDistricts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const categoriesResponse = await getAllCategories();
                setCategories(categoriesResponse.data);

                const districtsResponse = await getAllDistricts();
                setDistricts(districtsResponse.data);

                // Fetch initial properties
                const propertiesResponse = await getAllProperties();
                setProperties(propertiesResponse.data);

                // Fetch ratings for each property
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

    useEffect(() => {
        async function fetchFilteredProperties() {
            try {
                let propertiesResponse;

                if (selectedCategories.length > 0 && selectedDistricts.length > 0) {
                    propertiesResponse = await getPropertiesByCategory(selectedCategories);
                    propertiesResponse = await getPropertiesByDistrict(selectedDistricts, propertiesResponse.data);
                } else if (selectedCategories.length > 0) {
                    propertiesResponse = await getPropertiesByCategory(selectedCategories);
                } else if (selectedDistricts.length > 0) {
                    propertiesResponse = await getPropertiesByDistrict(selectedDistricts);
                } else {
                    propertiesResponse = await getAllProperties();
                }

                setProperties(propertiesResponse.data || []); // Ensure properties are always an array

            } catch (error) {
                console.error('Error fetching filtered properties:', error);
                setProperties([]); // Clear properties on error
            }
        }
        fetchFilteredProperties();
    }, [selectedCategories, selectedDistricts]);

    const handleCategoryChange = (categoryId) => {
        setSelectedCategories(prevState =>
            prevState.includes(categoryId)
                ? prevState.filter(id => id !== categoryId)
                : [...prevState, categoryId]
        );
    };

    const handleDistrictChange = (districtId) => {
        setSelectedDistricts(prevState =>
            prevState.includes(districtId)
                ? prevState.filter(id => id !== districtId)
                : [...prevState, districtId]
        );
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredProperties = useMemo(() => {
        return properties.filter(property =>
            property.name.toLowerCase().includes(searchQuery)
        );
    }, [properties, searchQuery]);

    const propertiesWithRates = useMemo(() => {
        return filteredProperties.map(property => {
            const propertyRates = propertyRatings[property.id] || [];
            const averageRate = propertyRates.length > 0
                ? propertyRates.reduce((sum, rate) => sum + rate.rate, 0) / propertyRates.length
                : 0;
            return {
                ...property,
                rate: averageRate
            };
        });
    }, [filteredProperties, propertyRatings]);

    return (
        <div>
            <NavBarAdmin />
            <Container fluid>
                <Row style={{ marginLeft: '5%', marginRight: '5%', marginTop: '20px' }}>
                    <Col xs={12} md={4} style={{ borderRight: '1px solid #ddd', paddingRight: '20px' }}>
                        <h5 style={{ textAlign: 'left', marginBottom: '30px' }}>Filter By:</h5>
                        <div style={{ marginBottom: '20px' }}>
                            <h6 style={{ textAlign: 'left' }}>Categories</h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
                                {categories.map(category => (
                                    <Form.Check
                                        key={category.id}
                                        type="checkbox"
                                        id={`category-${category.id}`}
                                        label={category.name}
                                        checked={selectedCategories.includes(category.id)}
                                        onChange={() => handleCategoryChange(category.id)}
                                        style={{ marginRight: '15px', marginBottom: '10px' }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <h6 style={{ textAlign: 'left' }}>Districts</h6>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {districts.map(district => (
                                    <Form.Check
                                        key={district.id}
                                        type="checkbox"
                                        id={`district-${district.id}`}
                                        label={district.name}
                                        checked={selectedDistricts.includes(district.id)}
                                        onChange={() => handleDistrictChange(district.id)}
                                        style={{ marginRight: '15px', marginBottom: '10px' }}
                                    />
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={8} style={{ paddingLeft: '20px' }}>
                        <Row>
                            <Col xs={12} className={isMobile ? 'mb-3 mt-3' : ''}>
                                <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Manage properties</h4>
                                <p style={{ textAlign: 'left' }}>Click on each properrty to view.</p>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={handleSearch}
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
                        <Row className="g-2 mt-4">
                            {propertiesWithRates.map((property, index) => (
                                <Col key={index} xs={12} className="d-flex justify-content-center">
                                    <PropertyCard property={property} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div >
    );
}
