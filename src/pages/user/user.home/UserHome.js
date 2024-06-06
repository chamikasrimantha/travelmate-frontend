import React from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import Footer from '../../../components/footer/Footer';
import UserHomeHeader from '../../../components/header/UserHomeHeader';

export default function UserHome() {
    return (
        <div>
            <NavBarUser />
            <UserHomeHeader/>
            <br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}
