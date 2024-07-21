import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../../../components/navbar/NavBarAdmin';
import Footer from '../../../components/footer/Footer';
import { Table, Container } from 'react-bootstrap';
import { getAllUsers, getAllPartners } from '../../../services/api/user.service';

export default function AdminUsers() {

  const [users, setUsers] = useState([]);
  const [partners, setPartners] = useState([]);

  const fetchAllUsers = async () => {
    const response = await getAllUsers();
    setUsers(response.data);
    console.log(response);
  }

  const fetchAllPartners = async () => {
    const response = await getAllPartners();
    setPartners(response.data);
    console.log(response);
  }

  useEffect(() => {
    fetchAllUsers();
    fetchAllPartners();
  }, []);

  // const users = [
  //   {
  //     id: 1,
  //     username: 'johndoe',
  //     email: 'johndoe@example.com',
  //     role: 'user',
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     phoneNo: '1234567890',
  //   },
  //   {
  //     id: 3,
  //     username: 'bobsmith',
  //     email: 'bobsmith@example.com',
  //     role: 'user',
  //     firstName: 'Bob',
  //     lastName: 'Smith',
  //     phoneNo: '1122334455',
  //   },
  // ];

  // const partners = [
  //   {
  //     id: 2,
  //     username: 'janedoe',
  //     email: 'janedoe@example.com',
  //     role: 'partner',
  //     firstName: 'Jane',
  //     lastName: 'Doe',
  //     phoneNo: '0987654321',
  //   },
  // ];

  return (
    <div>
      <NavBarAdmin />

      {/* Users */}
      <Container fluid>
        <div className="text-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
          <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Manage Users</h4>
          <p style={{ textAlign: 'left', fontSize: '1rem' }}>List of users and partners in the system.</p>
        </div>
      </Container>

      <Container fluid>
        <div className="text-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
          <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1rem' }}>Users in the system</h4>
        </div>
      </Container>

      <Container>
        <Table striped bordered hover style={{ marginBottom: '30px', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone No</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Container fluid>
        <div className="text-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
          <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1rem' }}>Partners in the system</h4>
        </div>
      </Container>

      <Container>
        <Table striped bordered hover style={{ marginBottom: '30px', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone No</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => (
              <tr key={partner.id}>
                <td>{partner.id}</td>
                <td>{`${partner.firstName} ${partner.lastName}`}</td>
                <td>{partner.username}</td>
                <td>{partner.email}</td>
                <td>{partner.phoneNo}</td>
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
