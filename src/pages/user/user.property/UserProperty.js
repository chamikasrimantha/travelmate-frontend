import React from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import Property from '../../../components/property/Property';
import Footer from '../../../components/footer/Footer';

export default function UserProperty() {
  return (
    <div>
      <NavBarUser />
      <Property />
      <br />
      <Footer />
    </div>
  )
}
