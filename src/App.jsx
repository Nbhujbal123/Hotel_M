import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home/home';
import { Cart } from './pages/Cart/cart';
import { Placeorder } from './pages/Placeorder/placeorder';
import { Navbar } from './components/Navbar/navbar';
import { Filtermenu } from './components/Filtermenu/filtermenu';
import { Notfound } from './components/Notfound/notfound';
import { ExploreMenu } from './components/Menu/menu';
import { MyProvider } from './components/ContextMenu/context';

export function App(){
  return(
   
        <div className='app'>
            
          <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="home" element={<Home />} />
                  {/* <Route path="menu" element={<Menu />} /> */}
                  <Route path="cart" element={<Cart />} />
                  <Route path="placeorder" element={<Placeorder />} />
                  <Route path="/products/:cat" element={<Home />} />
                  <Route path="/products/:id" element={<Cart />} />
                  <Route path="*" element= {<div>Err not found</div>} /> 
              </Routes>

        </div>
         
  )
}