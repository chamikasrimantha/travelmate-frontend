import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../../../components/navbar/NavBarAdmin';
import Footer from '../../../components/footer/Footer';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IconButton, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getAllCities } from '../../../services/api/city.service';

export default function AdminCities() {

    const [cities, setCities] = useState([]);

    const isMobile = useMediaQuery('(max-width: 600px)');

    useEffect(() => {
        async function fetchData() {
            try {
                const citiesResponse = await getAllCities();
                setCities(citiesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    // const cities = [
    //     {
    //         id: 1,
    //         name: 'Colombo',
    //         districtName: 'Colombo District',
    //         postcode: '00100',
    //     },
    //     {
    //         id: 2,
    //         name: 'Kandy',
    //         districtName: 'Kandy District',
    //         postcode: '20000',
    //     },
    //     {
    //         id: 3,
    //         name: 'Galle',
    //         districtName: 'Galle District',
    //         postcode: '80000',
    //     },
    // ]; 

    const handleViewClick = (id) => {
        // Handle the view button click
        console.log('View city with ID:', id);
    };

    return (
        <div>
            <NavBarAdmin />

            {/* cities */}
            <Container fluid>
                <div className="mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <Row>
                        <Col xs={12} md={8}>
                            <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Manage cities</h4>
                            <p style={{ textAlign: 'left' }}>Click on each city to view</p>
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
            </Container>

            <Container>
                <Table striped bordered hover style={{ marginBottom: '30px', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>District Name</th>
                            <th>Postcode</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cities.map((city) => (
                            <tr key={city.id}>
                                <td>{city.id}</td>
                                <td>{city.name}</td>
                                <td>{city.districtEntity.name}</td>
                                <td>{city.postcode}</td>
                                <td>
                                    <Link to={`/city/${city.id}`} style={{ textDecoration: 'none' }}>
                                        <Button
                                            variant="primary"
                                            onClick={() => handleViewClick(city.id)}
                                        >
                                            View
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>

            <br />
            <Footer />
        </div>
    );
}
