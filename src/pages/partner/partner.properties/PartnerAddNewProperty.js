import React from 'react';
import NavBarPartner from '../../../components/navbar/NavBarPartner';
import Footer from '../../../components/footer/Footer';
import AddProperty from '../../../components/property/AddProperty';

export default function PartnerAddNewProperty() {
  return (
    <div>
      <NavBarPartner />
      <AddProperty />
      <br />
      <Footer />
    </div>
  )
}
