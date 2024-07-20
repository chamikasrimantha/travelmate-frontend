import React, { useEffect, useMemo, useState } from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from '../../../components/footer/Footer';
import CityCard from '../../../components/city/CityCard';
import { getAllCities } from '../../../services/api/city.service';
import { getCityRatingsByCity } from '../../../services/api/city_rating.service';

export default function UserCities() {

    const isMobile = useMediaQuery('(max-width: 600px)');

    const [cities, setCities] = useState([]);
    const [cityRatings, setCityRatings] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const citiesResponse = await getAllCities();
                setCities(citiesResponse.data);

                // Fetch ratings for each city
                const ratingsPromises = citiesResponse.data.map(city =>
                    getCityRatingsByCity(city.id)
                        .then(response => ({ cityId: city.id, ratings: response.data }))
                        .catch(error => {
                            console.error(`Error fetching ratings for city ${city.id}:`, error);
                            return { cityId: city.id, ratings: [] };
                        })
                );

                const ratingsResults = await Promise.all(ratingsPromises);

                const ratingsMap = ratingsResults.reduce((acc, { cityId, ratings }) => {
                    acc[cityId] = ratings;
                    return acc;
                }, {});

                setCityRatings(ratingsMap);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);


    // const rates = [
    //     {
    //         id: '1',
    //         rate: 4.3,
    //         comment: 'good',
    //         userId: 1,
    //         cityId: '2'
    //     },
    //     {
    //         id: '2',
    //         rate: 4.1,
    //         comment: 'good',
    //         userId: 1,
    //         cityId: '2'
    //     },
    //     {
    //         id: '3',
    //         rate: 4.6,
    //         comment: 'good',
    //         userId: 1,
    //         cityId: '1'
    //     },
    //     {
    //         id: '4',
    //         rate: 4.8,
    //         comment: 'good',
    //         userId: 1,
    //         cityId: '2'
    //     },
    //     {
    //         id: '5',
    //         rate: 4.9,
    //         comment: 'good',
    //         userId: 1,
    //         cityId: '2'
    //     },
    // ]

    // const cities = [
    //     {
    //         id: '1',
    //         name: 'Colombo',
    //         postCode: '12500',
    //         latitude: '8.5333',
    //         longitude: '80.4833',
    //         districtId: '1'
    //     },
    //     {
    //         id: '2',
    //         name: 'Galle',
    //         postCode: '12500',
    //         latitude: '8.5333',
    //         longitude: '80.4833',
    //         districtId: '2'
    //     },
    //     {
    //         id: '3',
    //         name: 'Jaffna',
    //         postCode: '12500',
    //         latitude: '8.5333',
    //         longitude: '80.4833',
    //         districtId: '1'
    //     },
    //     {
    //         id: '4',
    //         name: 'Jaffna',
    //         postCode: '12500',
    //         latitude: '8.5333',
    //         longitude: '80.4833',
    //         districtId: '2'
    //     },
    //     {
    //         id: '5',
    //         name: 'Jaffna',
    //         postCode: '12500',
    //         latitude: '8.5333',
    //         longitude: '80.4833',
    //         districtId: '2'
    //     },
    //     {
    //         id: '6',
    //         name: 'Jaffna',
    //         postCode: '12500',
    //         latitude: '8.5333',
    //         longitude: '80.4833',
    //         districtId: '2'
    //     },
    //     {
    //         id: '7',
    //         name: 'Jaffna',
    //         postCode: '12500',
    //         latitude: '8.5333',
    //         longitude: '80.4833',
    //         districtId: '1'
    //     },
    //     {
    //         id: '8',
    //         name: 'Jaffna',
    //         postCode: '12500',
    //         latitude: '8.5333',
    //         longitude: '80.4833',
    //         districtId: '3'
    //     },
    //     {
    //         id: '9',
    //         name: 'Jaffna',
    //         postCode: '12500',
    //         latitude: '8.5333',
    //         longitude: '80.4833',
    //         districtId: '2'
    //     }
    // ];

    // const districts = [
    //     { id: '1', name: 'Colombo District' },
    //     { id: '2', name: 'Galle District' },
    //     { id: '3', name: 'Jaffna District' }
    // ];

    const defaultImage = 'https://via.placeholder.com/300'; // Sample image URL

    const citiesWithRates = useMemo(() => {
        return cities.map(city => {
            const cityRates = cityRatings[city.id] || [];
            const averageRate = cityRates.length > 0
                ? cityRates.reduce((sum, rate) => sum + rate.rate, 0) / cityRates.length
                : 0;
            return {
                ...city,
                rate: averageRate,
                image: defaultImage
            };
        });
    }, [cities, cityRatings]);

    return (
        <div>
            <NavBarUser />
            {/* trending cities */}
            <Container fluid>
                <div className="mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <Row>
                        <Col xs={12} md={8}>
                            <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Trending Destinations</h4>
                            <p style={{ textAlign: 'left' }}>Most popular choices for travelers from Sri Lanka</p>
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
                <Row style={{ marginLeft: '1%', marginRight: '1%' }} xs={1} md={3} className="g-1 justify-content-center">
                    {citiesWithRates.map((city, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <CityCard city={city} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
