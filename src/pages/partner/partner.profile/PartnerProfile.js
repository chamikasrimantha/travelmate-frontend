import React from 'react';
import NavBarPartner from '../../../components/navbar/NavBarPartner';
import Footer from '../../../components/footer/Footer';
import PartnerProfileCard from '../../../components/profile/PartnerProfileCard';

export default function PartnerProfile() {
    return (
        <div>
            <NavBarPartner />
            <PartnerProfileCard />
            <Footer />
        </div>
    )
}
