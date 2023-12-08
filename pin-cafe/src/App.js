import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './font/IRANSans.ttf';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart , faThLarge, faUser, faHeadset } from '@fortawesome/free-solid-svg-icons';
import {BuyContextProvider} from './context/context';
import { useState, Suspense } from 'react';
import "react-toastify/dist/ReactToastify.css";
import Menu from './pages/menu/menu';
import Buy from './pages/buy/buy';
import Orders from './pages/orders/orders';
import Profile from './pages/profile/profile';
import Loading from './componenet/lazy';
import Login from './componenet/Login';
import ProductDetails from './componenet/productDetails/productDetails';
import LogoTopMenu from './assets/img/IMG_20230624_114437_735.jpg';
import Breackfast from './pages/breackfast/breackfast';


function App() {
  const [activeIndex , setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index)
  }


  return (
    <>
    <div className='c-main'>
      <div className='c-right'>
        <div className='space'>
          <h2>رستوران</h2>
          <ul className='ul-menu'>
            <li id='li-menu' className={activeIndex === 0 ? 'active' : ''} onClick={() => handleClick(0)}>
              <Link to="/" className='link'>
                <FontAwesomeIcon className='icon-menu' icon={faThLarge} /><p>منو</p>
              </Link>
            </li>
            <li id='li-menu' className={activeIndex === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
              <Link to="/orders" className='link'>
                <FontAwesomeIcon className='icon-menu' icon={faShoppingCart} /><p>سبد خرید</p>
              </Link>
            </li>
            <li id='li-menu' className={activeIndex === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
              <Link to="/profile" className='link'>
                <FontAwesomeIcon className='icon-menu' icon={faUser} /><p>پروفایل</p>
              </Link>
            </li>
            <li id='li-menu' className={activeIndex === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
              <Link to="/buy" className='link'>
                <FontAwesomeIcon className='icon-menu' icon={faHeadset} /><p>پشتیبانی</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className='logo-b'>
          <img className="logo-menu" src={LogoTopMenu}></img>
        </div>
      </div>
      <div className='c-left'>
        <BuyContextProvider>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route element={<Menu />}>
                <Route path='*' element={<Breackfast />}/>
              </Route>
              <Route path="login" element={<Login />}/>
              <Route path="buy" element={<Buy />}/>
              <Route path="/products/:id" element={<ProductDetails/>} />
              <Route path="orders" element={<Orders />}/>
              <Route path="profile" element={<Profile />}/>
            </Routes>
          </Suspense>
        </BuyContextProvider>
      </div>
    </div>
    </>
  );
}

export default App;
