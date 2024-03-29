import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import SignIn from './pages/SignIn/SignIn';
import MeHome from './pages/home/MeHome';
import Profile from './pages/profile/Profile';
import './App.css';

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/dung2002' element={<Home/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/me/home' element={<MeHome/>}></Route>
        <Route path='/me/profile' element={<Profile/>}></Route>
      </Routes>
   </Router>
  );
}

export default App;
