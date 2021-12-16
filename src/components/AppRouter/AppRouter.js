import NavBar from '../NavBar/NavBar.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactPage from '../../pages/ContactPage/ContactPage';
import HomePage from '../../pages/HomePage/HomePage'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';

export default function AppRouter() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/about' element={<AboutUsPage/>}  />
            <Route path='/contact' element={<ContactPage/>}  />
            <Route path= '/' element={<HomePage/>}>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}