import './menu-bar.css';
import React from 'react';
import logomenu from '../assets/img/logo-menu.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faShoppingCart, faSearch , faUser, faBarsStaggered, faHeadset } from '@fortawesome/free-solid-svg-icons';


const MenuBar =() =>{
    return(
        <>
        <div className='menu-bnttom'>
            <div className='it-menu-b'>
                <Link to="/salad" className='link-it-menu-b'>
                    <FontAwesomeIcon className='icon-menu-b' icon={faThLarge} />
                    <p>منو</p>
                </Link>
            </div>
            <div className='it-menu-b'>
                <Link to="/orders" className='link-it-menu-b'>
                    <FontAwesomeIcon className='icon-menu-b' icon={faShoppingCart} />
                    <p>سبد خرید</p>
                </Link>        
            </div>
            <div className='it-menu-b'>
                <Link to="/profile" className='link-it-menu-b'>
                    <FontAwesomeIcon className='icon-menu-b' icon={faUser} /><p>پروفایل</p>
                </Link>
            </div>
            {/* <div className='it-menu-b'>
                <Link to="/buy" className='link-it-menu-b'>
                    <FontAwesomeIcon className='icon-menu-b' icon={} /><p>پشتیبانی</p>
                </Link>
            </div> */}
        </div>
        </>
    )
}
export default MenuBar;