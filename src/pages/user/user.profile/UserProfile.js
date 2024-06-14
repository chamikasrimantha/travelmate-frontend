import React from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import Footer from '../../../components/footer/Footer';
import UserProfileCard from '../../../components/profile/UserProfileCard';

export default function UserProfile() {
    return (
        <div>
            <NavBarUser />
            <UserProfileCard />
            <Footer />
        </div>
    )
}
