import React, { useEffect, useState } from 'react';
import NavBarPartner from '../../../components/navbar/NavBarPartner';
import Footer from '../../../components/footer/Footer';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPropertiesByUser } from '../../../services/api/property.service';
import { getBookingsByProperty } from '../../../services/api/booking.service';

export default function PartnerBookings() {

    const [properties, setProperties] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        async function fetchPropertiesAndBookings() {
            try {
                const userId = localStorage.getItem('userId');
                const propertiesResponse = await getPropertiesByUser(userId);
                const properties = propertiesResponse.data;
                setProperties(properties);

                // Fetch bookings for each property
                const bookingsPromises = properties.map(property =>
                    getBookingsByProperty(property.id)
                        .then(response => response.data)
                        .catch(error => {
                            console.error(`Error fetching bookings for property ${property.id}:`, error);
                            return [];
                        })
                );

                const bookingsResults = await Promise.all(bookingsPromises);
                const allBookings = bookingsResults.flat();
                setBookings(allBookings);
            } catch (error) {
                console.error('Error fetching properties or bookings:', error);
            }
        }

        fetchPropertiesAndBookings();
    }, []);

    // const bookings = [
    //     {
    //         id: 1,
    //         firstName: 'John',
    //         lastName: 'Doe',
    //         email: 'john.doe@example.com',
    //         phoneNo: '123-456-7890',
    //         checkinDate: '2024-07-15',
    //         totalPrice: 200.0,
    //     },
    //     {
    //         id: 2,
    //         firstName: 'Jane',
    //         lastName: 'Smith',
    //         email: 'jane.smith@example.com',
    //         phoneNo: '098-765-4321',
    //         checkinDate: '2024-08-10',
    //         totalPrice: 300.0,
    //     },
    //     {
    //         id: 3,
    //         firstName: 'Alice',
    //         lastName: 'Johnson',
    //         email: 'alice.johnson@example.com',
    //         phoneNo: '111-222-3333',
    //         checkinDate: '2024-09-05',
    //         totalPrice: 150.0,
    //     },
    // ];

    const handleViewClick = (id) => {
        // Handle the view button click
        console.log('View booking with ID:', id);
    };

    return (
        <div>
            <NavBarPartner />

            {/* Bookings */}
            <Container fluid>
                <div className="text-center mt-4" style={{ marginLeft: '5%' }}>
                    <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Manage bookings</h4>
                    <p style={{ textAlign: 'left', fontSize: '1rem' }}>Click on each booking to view or delete.</p>
                </div>
            </Container>

            <Container>
                <Table striped bordered hover style={{ marginBottom: '30px', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Check-in Date</th>
                            <th>Total Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings && bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{`${booking.firstName} ${booking.lastName}`}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phoneNo}</td>
                                <td>{booking.checkinDate}</td>
                                <td>{booking.totalPrice}</td>
                                <td>
                                    <Link to={`/booking/${booking.id}`} style={{ textDecoration: 'none' }}>
                                        <Button
                                            variant="primary"
                                            onClick={() => handleViewClick(booking.id)}
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
            <br /><br /><br /><br />
            <Footer />
        </div>
    );
}
