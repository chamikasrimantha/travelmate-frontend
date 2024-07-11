import React, { useState } from 'react';
import NavBarPartner from '../../../components/navbar/NavBarPartner';
import Footer from '../../../components/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { ButtonBase, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import PartnerAnnouncementCard from '../../../components/announcement/PartnerAnnouncementCard';

export default function PartnerAnnouncements() {

    const announcements = [
        {
            id: 1,
            title: 'Maintenance Notice',
            message: 'The pool will be closed for maintenance on July 20th.',
            propertyId: 101
        },
        {
            id: 2,
            title: 'Maintenance Notice',
            message: 'The pool will be closed for maintenance on July 20th.',
            propertyId: 101
        },
        {
            id: 3,
            title: 'Maintenance Notice',
            message: 'The pool will be closed for maintenance on July 20th.',
            propertyId: 101
        },
    ];

    const properties = [
        { id: 101, name: 'Property 1' },
        { id: 102, name: 'Property 2' },
        { id: 103, name: 'Property 3' },
    ];

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState({
        property: '',
        title: '',
        message: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setNewAnnouncement({
            ...newAnnouncement,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        // Handle the form submission logic here
        console.log(newAnnouncement);
        handleClose();
    };

    return (
        <div>
            <NavBarPartner />

            {/* Top */}
            <Container fluid>
                <div className="d-flex justify-content-between align-items-center mt-4" style={{ marginLeft: '5%', marginRight: '5%' }}>
                    <div>
                        <h4 style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.25rem' }}>Manage your announcements</h4>
                        <p style={{ textAlign: 'left' }}>Click on each announcement to edit/ update or delete</p>
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
                            onClick={handleClickOpen}
                        >
                            <AddCircleOutlineIcon style={{ marginRight: '10px' }} />Add new announcement
                        </ButtonBase>
                    </div>
                </div>
            </Container>

            {/* Announcements */}
            <Container fluid>
                <Row style={{ marginLeft: '02%', marginRight: '02%', marginTop: '10px' }} xs={1} md={3} className="g-1 justify-content-center">
                    {announcements.map((announcement, index) => (
                        <Col key={index} className="d-flex justify-content-center">
                            <PartnerAnnouncementCard announcement={announcement} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <br />
            <Footer />

            {/* Add Announcement Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Announcement</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth margin="dense" variant="outlined">
                        <InputLabel>Property</InputLabel>
                        <Select
                            name="property"
                            value={newAnnouncement.property}
                            onChange={handleChange}
                            label="Property"
                        >
                            {properties.map((property) => (
                                <MenuItem key={property.id} value={property.id}>
                                    {property.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        margin="dense"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={newAnnouncement.title}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="message"
                        label="Message"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={newAnnouncement.message}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
