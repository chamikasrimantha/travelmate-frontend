import React from 'react';
import NavBarPartner from '../../../components/navbar/NavBarPartner';
import Footer from '../../../components/footer/Footer';
import { Container } from 'react-bootstrap';
import { ButtonBase } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

export default function PartnerAnnouncements() {

    const navigate = useNavigate();

    const gotoAddAnnouncement = () => {
        navigate('/partner/add-new-announcement')
    }
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
                            onClick={gotoAddAnnouncement}
                        >
                            <AddCircleOutlineIcon style={{ marginRight: '10px' }} />Add new announcement
                        </ButtonBase>
                    </div>
                </div>
            </Container>

            <br />
            <Footer />
        </div>
    )
}
