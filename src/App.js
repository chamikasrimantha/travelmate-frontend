import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserSignUp from './pages/user/user.auth/UserSignUp';
import UserSignIn from './pages/user/user.auth/UserSignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<UserSignUp/>} />
          <Route path='/signin' element={<UserSignIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
