import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserSignUp from './pages/user/user.auth/UserSignUp';
import UserSignIn from './pages/user/user.auth/UserSignIn';
import PartnerSignUp from './pages/partner/partner.auth/PartnerSignUp';
import PartnerSignIn from './pages/partner/partner.auth/PartnerSignIn';
import AdminSignIn from './pages/admin/admin.auth/AdminSignIn';
import UserHome from './pages/user/user.home/UserHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/signup' element={<UserSignUp/>} />
          <Route path='/signin' element={<UserSignIn/>} />
          <Route path='/' element={<UserHome/>} />

          <Route path='/partner/signup' element={<PartnerSignUp/>} />
          <Route path='/partner/signin' element={<PartnerSignIn/>} />

          <Route path='/admin/signin' element={<AdminSignIn/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
