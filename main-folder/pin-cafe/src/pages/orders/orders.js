import './orders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart , faSearch , faUser, faTrashAlt, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import imgs from '../assets/img/salad.png'
import { BuyContext } from '../../context/context';
import MenuBar from '../../componenet/menu-bar';
import LogoTopMenu from '../../assets/img/IMG_20230624_114437_735.jpg'


const Orders = () =>{
    const { cartItems, removeFromCart} = useContext(BuyContext)

    // const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    const totalPricePerItem = cartItems.reduce((total, item) => total + item.price * item.count, 0);
    const initializedCartItems = cartItems.map(item => ({ ...item, count: 1 }));

    return(
        <>
        <div className='inset'>
            <div className='header'>
                <div className='logo-page'>
                    <FontAwesomeIcon className='icon-logo-gage' icon={faShoppingCart} />
                    <p>سبد خرید</p>
                </div>
                <div className='div-img-logo'>
                    <img clssName='LogoTopMenu' src={LogoTopMenu}/>
                </div>
                <div className='menu-page'>
                    <input className='input-search' type={'search'} placeholder='غذای مورد علاقه خود را پیدا کنید'></input>
                    <div className='back'>
                        <Link to="/salad">
                            <FontAwesomeIcon  className='icon-left' icon={faLeftLong} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='content' uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 50; repeat: true">
                {cartItems.length === 0 ? (
                    <p>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                          سبد خرید شما خالی است
                    </p>
                ) : (
                <div className='content-list'>
                    {cartItems.map((item) => {
                        return (
                            <div className='it1 div uk-card uk-card-default' key={item.id}>
                                <div className='div-img'>
                                    <Link to={`/products/${item.id}`}>
                                        <img className='img-s' src={item.image} />
                                    </Link>
                                </div>
                                <div className='info-item'>
                                    <div className='it-name'>
                                        <p>نام :</p>
                                        <Link className='link-to-detail' to={`/products/${item.id}`}>
                                            <p className='link-p'>{item.name}</p>
                                        </Link>
                                    </div>
                                    <div className='count'>
                                        <p>تعداد :</p>
                                        <h3 className='item-count'>{item.count}</h3>
                                    </div>
                                    <div className='dev-price'>
                                        <p>قیمت :</p>
                                        <p className='title-price'><span>{item.price}</span> تومان</p>
                                    </div>
                                    <button className='btn-trash' onClick={() => removeFromCart(item.id)}>
                                       <FontAwesomeIcon className='trash' icon={faTrashAlt}/>
                                    </button>
                                   
                                </div>                
                            </div>
                        )
                                    // <p>{item.id}</p>
                    })}
                </div>
                )}
                <div className='content-count'>
                    <ul>
                        <li><a>مبلغ کل: <span>{totalPricePerItem}</span> تومان</a></li>
                        <li><a> تخفیف: <span>0</span></a></li> 
                        <li><a> قابل پرداخت: <span>{totalPricePerItem}</span> تومان</a></li> 
                    </ul>      
                    <button className='fainal'>خرید خود را نهایی کنید</button>              
                </div>
            </div>
        </div>
        <MenuBar/>
        </>
    )
}
export default Orders;