import NavBar from '../NavBar/NavBar.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactPage from '../../pages/ContactPage/ContactPage';
import HomePage from '../../pages/HomePage/HomePage'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from '../ItemListContainer/ItemListContainer.js';
import { CustomContext } from '../../context/cartContext.js';
import Cart from '../Cart/Cart.js';

export default function AppRouter() {
  return (
    <div className="App">
        <BrowserRouter>
          <CustomContext>
            <NavBar/>
            <Routes>
              <Route path='/about' element={<AboutUsPage/>}  />
              <Route path='/contact' element={<ContactPage/>}  />
              <Route path= '/' element={<HomePage/>} />
              <Route path= '/items/:id' element={<ItemDetailContainer/>} />
              <Route path= '/category/:id' element={<ItemListContainer/>} /> 
              <Route path='/cart' element={<Cart/>}  />
            </Routes>
          </CustomContext>
        </BrowserRouter>
    </div>
  );
}