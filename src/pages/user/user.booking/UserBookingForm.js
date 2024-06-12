import React from 'react';
import NavBarUser from '../../../components/navbar/NavBarUser';
import BookingForm from '../../../components/booking/BookingForm';
import Footer from '../../../components/footer/Footer';

export default function UserBookingForm() {
  return (
    <div>
      <NavBarUser />
      <BookingForm />
      <Footer />
    </div>
  )
}
