import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserSignUp from './pages/user/user.auth/UserSignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<UserSignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
