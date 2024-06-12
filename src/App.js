import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserSignUp from './pages/user/user.auth/UserSignUp';
import UserSignIn from './pages/user/user.auth/UserSignIn';
import PartnerSignUp from './pages/partner/partner.auth/PartnerSignUp';
import PartnerSignIn from './pages/partner/partner.auth/PartnerSignIn';
import AdminSignIn from './pages/admin/admin.auth/AdminSignIn';
import UserHome from './pages/user/user.home/UserHome';
import UserCity from './pages/user/user.city/UserCity';
import UserProperty from './pages/user/user.property/UserProperty';
import UserCities from './pages/user/user.city/UserCities';
import UserProperties from './pages/user/user.property/UserProperties';
import UserBookingForm from './pages/user/user.booking/UserBookingForm';
import UserBookings from './pages/user/user.booking/UserBookings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/signup' element={<UserSignUp/>} />
          <Route path='/signin' element={<UserSignIn/>} />
          <Route path='/' element={<UserHome/>} />
          <Route path='/city/:id' element={<UserCity/>} />
          <Route path='/cities' element={<UserCities/>} />
          <Route path='/property/:id' element={<UserProperty/>} />
          <Route path='/properties' element={<UserProperties/>} />
          <Route path='/book' element={<UserBookingForm />} />
          <Route path='/bookings' element={<UserBookings />} />

          <Route path='/partner/signup' element={<PartnerSignUp/>} />
          <Route path='/partner/signin' element={<PartnerSignIn/>} />

          <Route path='/admin/signin' element={<AdminSignIn/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
