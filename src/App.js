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
import UserBooking from './pages/user/user.booking/UserBooking';
import UserProfile from './pages/user/user.profile/UserProfile';
import PartnerDashboard from './pages/partner/partner.dashboard/PartnerDashboard';
import PartnerProperties from './pages/partner/partner.properties/PartnerProperties';
import PartnerAddNewProperty from './pages/partner/partner.properties/PartnerAddNewProperty';
import PartnerAnnouncements from './pages/partner/partner.announcements/PartnerAnnouncements';
import PartnerBookings from './pages/partner/partner.bookings/PartnerBookings';
import PartnerProfile from './pages/partner/partner.profile/PartnerProfile';
import AdminDashboard from './pages/admin/admin.dashboard/AdminDashboard';
import AdminCategories from './pages/admin/admin.categories/AdminCategories';
import AdminCities from './pages/admin/admin.cities/AdminCities';
import AdminAnnouncements from './pages/admin/admin.announcements/AdminAnnouncements';
import AdminProperties from './pages/admin/admin.properties/AdminProperties';
import AdminUsers from './pages/admin/admin.users/AdminUsers';
import PartnerProtectedRoutes from './utils/PartnerProtectedRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/signup' element={<UserSignUp />} />
          <Route path='/signin' element={<UserSignIn />} />

          <Route path='/' element={<UserHome />} />
          <Route path='/city/:id' element={<UserCity />} />
          <Route path='/cities' element={<UserCities />} />
          <Route path='/property/:id' element={<UserProperty />} />
          <Route path='/properties' element={<UserProperties />} />
          <Route path='/book' element={<UserBookingForm />} />
          <Route path='/bookings' element={<UserBookings />} />
          <Route path='/booking/:id' element={<UserBooking />} />
          <Route path='/profile' element={<UserProfile />} />

          <Route path='/partner/signup' element={<PartnerSignUp />} />
          <Route path='/partner/signin' element={<PartnerSignIn />} />


          <Route element={<PartnerProtectedRoutes />}>
            <Route path='/partner/dashboard' element={<PartnerDashboard />} />
            <Route path='/partner/properties' element={<PartnerProperties />} />
            <Route path='/partner/add-new-property' element={<PartnerAddNewProperty />} />
          </Route>
          <Route path='/partner/announcements' element={<PartnerAnnouncements />} />
          <Route path='/partner/bookings' element={<PartnerBookings />} />
          <Route path='/partner/profile' element={<PartnerProfile />} />

          <Route path='/admin/signin' element={<AdminSignIn />} />

          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/categories' element={<AdminCategories />} />
          <Route path='/admin/cities' element={<AdminCities />} />
          <Route path='/admin/announcements' element={<AdminAnnouncements />} />
          <Route path='/admin/properties' element={<AdminProperties />} />
          <Route path='/admin/users' element={<AdminUsers />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
