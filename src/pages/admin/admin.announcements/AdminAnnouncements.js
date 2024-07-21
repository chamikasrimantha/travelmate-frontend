import React, { useEffect, useState } from 'react';
import Footer from '../../../components/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { ButtonBase, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import AdminAnnouncementCard from '../../../components/announcement/AdminAnnouncementCard';
import NavBarAdmin from '../../../components/navbar/NavBarAdmin';
import { getAllAdminAnnouncements, createAdminAnnouncement } from '../../../services/api/admin_announcement.service';

export default function AdminAnnouncements() {

    const [announcements, setAnnouncements] = useState([]);

    const fetchAllAdminAnnouncements = async () => {
        const response = await getAllAdminAnnouncements();
        setAnnouncements(response.data);
        console.log(response);
    }

    useEffect(() => {
        fetchAllAdminAnnouncements();
    }, []);

    // const announcements = [
    //     {
    //         id: 1,
    //         title: 'Maintenance Notice',
    //         message: 'The system will be down for maintenance on 2024-07-01 from 02:00 AM to 04:00 AM.'
    //     },
    //     {
    //         id: 2,
    //         title: 'Maintenance Notice',
    //         message: 'We are excited to announce a new feature that will be available starting 2024-07-05.'
    //     },
    //     {
    //         id: 3,
    //         title: 'Maintenance Notice',
    //         message: 'The system will be down for maintenance on 2024-07-01 from 02:00 AM to 04:00 AM.'
    //     },
    // ];

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            "title": title,
            "message": message
        };
        const response = await createAdminAnnouncement(data);
        if (response.status === 200) {
            handleClose();
        } else {
            handleClose();
        }
    };

    return (
        <div>
            <NavBarAdmin />

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
                            <AdminAnnouncementCard announcement={announcement} />
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
                    <TextField
                        margin="dense"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        name="message"
                        label="Message"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
