import './orders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart , faSearch , faUser, faTrashAlt, faLeftLong, faThLarge } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { BuyContext } from '../../context/context';
import MenuBar from '../../componenet/menu-bar';
import LogoTopMenu from '../../assets/img/IMG_20230624_114437_735.jpg'


const Orders = () =>{
    const { cartItems, removeFromCart} = useContext(BuyContext)

    // const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    const totalPricePerItem = cartItems.reduce((total, item) => total + item.price * item.count, 0);
    const initializedCartItems = cartItems.map(item => ({ ...item, count: 1 }));

    const [itemCounts, setItemCounts] = useState(
        cartItems.reduce((counts, item) => {
            counts[item.id] = item.count;
            return counts;
        }, {})
    );

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * itemCounts[item.id], 0);
    };

    const incrementItemCount = (itemId) => {
        setItemCounts(prevCounts => ({
            ...prevCounts,
            [itemId]: (prevCounts[itemId] || 0) + 1
        }));
    };

    const decrementItemCount = (itemId) => {
        if (itemCounts[itemId] > 1) {
            setItemCounts(prevCounts => ({
                ...prevCounts,
                [itemId]: prevCounts[itemId] - 1
            }));
        }
    };
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
                    {/* <input className='input-search' type={'search'} placeholder='غذای مورد علاقه خود را پیدا کنید'></input> */}
                    <div className='back'>
                        <Link to="/">
                            <FontAwesomeIcon  className='icon-left' icon={faLeftLong} />
                        </Link>
                    </div>
                </div>
            </div>
                </div>
            <div className='content'>
                {cartItems.length === 0 ? (
                    <p>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                          سبد خرید شما خالی است
                    </p>
                ) : (
                <div className='content-list'>
                    <div className='titr-chart'>
                        <div className='name-foods'>نام غذا</div>
                        <div></div>
                        <div>تعداد</div>
                        <div>قیمت</div>
                        <div>وضعیت</div>
                    </div>
                    {cartItems.map((item) => {
                        return (
                            <>
                            <div className='it-order'>
                                <div className='image-order'>
                                    <img className='img-order' src={item.image}></img>
                                    <p className='link-p'>{item.name}</p>
                                </div>
                                {/* <div className='it-name-order'>
                                    <Link className='link-order' to={`/products/${item.id}`}>
                                    </Link>
                                </div> */}
                                <div className='count'>
                                    <button className='btn-increment' onClick={() => incrementItemCount(item.id)}>+</button>
                                    <h3 className='item-count'>{itemCounts[item.id]}</h3>
                                    <button className='btn-decrement' onClick={() => decrementItemCount(item.id)}>-</button>
                                </div>
                                <div className='box-price-order'>
                                    <p className='price-order'><span>{item.price}</span> تومان</p>
                                </div>
                                <button className='btn-trash' onClick={() => removeFromCart(item.id)}>
                                    <FontAwesomeIcon className='trash-order' icon={faTrashAlt}/>
                                </button>
                            </div>
                            {/*  */}
                            <div className='it-order-res'>
                                <div className='image-order-res'>
                                    <img className='img-res' src={item.image}></img>
                                </div>
                                <div className='info-item-res'>
                                    <div className='info-titr'>
                                        <p className='link-p-res'>{item.name}</p>
                                        <button className='btn-trash-res' onClick={() => removeFromCart(item.id)}>
                                            <FontAwesomeIcon className='trash-order-res' icon={faTrashAlt}/>
                                        </button>
                                    </div>
                                    <div className='price-count'>
                                        <div className='box-price-res'>
                                            <p className='price-order-res'><span>{item.price}</span> تومان</p>
                                        </div>
                                        <div className='btn-count-res'>
                                            <button className='btn-increment' onClick={() => incrementItemCount(item.id)}>+</button>
                                            <h3 className='item-count-res'>{itemCounts[item.id]}</h3>
                                            <button className='btn-decrement' onClick={() => decrementItemCount(item.id)}>-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
                )}
                <div className='content-count'>
                    <ul>
                        <li><a>مبلغ کل: <span>{getTotalPrice()}</span> تومان</a></li>
                        <li><a> تخفیف: <span>0</span></a></li> 
                        <li><a> قابل پرداخت: <span>{getTotalPrice()}</span> تومان</a></li> 
                    </ul>      
                    <button className='fainal'>خرید خود را نهایی کنید</button>              
                </div>
            </div>
        <div className='menu-bnttom'>
            <div className='it-menu-b'>
                <Link to="/" className='link-it-menu-b'>
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
export default Orders;