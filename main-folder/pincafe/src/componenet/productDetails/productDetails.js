import './productDetails.css'
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faShoppingCart, faThLarge, faUser } from "@fortawesome/free-solid-svg-icons";
import { BuyContext } from "../../context/context";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import LogoTopMenu from '../../assets/img/IMG_20230624_114437_735.jpg'
import MenuBar from '../menu-bar';


const ProductDetails = () => {
    const { cartItems } = useContext(BuyContext);
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const getDetailsProduct = async () => {
        console.log(product);
        try {
            const response = await axios.get(`https://persian-devs.ir/api/product/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    useEffect(() => {
        getDetailsProduct();
    }, [id]);

    const { addToCart } = useContext(BuyContext);
    const navigate = useNavigate();
    const handleAddTocart = () => {
        const productWithCount = {...product, count};
        addToCart(productWithCount);
        navigate("/orders");
    }
    const [value, setValue] = React.useState(1);

    const [count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return(
        <>
        <Box sx={{'& > legend': { mt: 2 },}}></Box>
        <div className='container'>
            <div className="inset-product">
                <div className='header-datail'>
                    <div className='div-img-logo'>
                        <img clssName='LogoTopMenuu' src={LogoTopMenu}/>
                    </div>

                    <div className='divs-header'>
                        <div className='shop'>
                            <Link to="orders">
                                <span className='length'>{cartItems.length}</span>
                                <FontAwesomeIcon className='icon-shopping' icon={faShoppingCart} />
                            </Link>
                        </div>
                        <div className='back'>
                            <Link to={`/product/category/${id}`}>
                                <FontAwesomeIcon  className='icon-profile' icon={faLeftLong} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='Details'>
                    <div className='c-img-details'>
                        <img className='img-Details' src={product.image}></img>
                    </div>
                    <div className='c-info-details'>
                        <div className='h3'>
                            <h3>{product.name}</h3>
                        </div>
                        <div className='inset-info-details'>
                            <p className='description'>{product.description}</p>
                            <div className='div-price'>
                                <Rating name="read-only" value={value} readOnly />
                                <p className='pricee'>قیمت : <span>{product.price}</span> تومان </p>
                            </div>

                            {/* responsive */}
                            <div className='div-only-res'>
                                <Rating name="read-only-res" value={value} readOnly />
                            </div>
                            <div className='div-price-res'>
                                <p className='pricee-res-detail'>قیمت : <span>{product.price}</span> تومان </p>
                                <div className='btn-count-res'>
                                    <button className='btn-plus-res' onClick={increaseCount}>+</button>
                                    <a>{count}</a>
                                    <button className='btn-plus-res' onClick={decreaseCount}>-</button>
                                </div>
                            </div>
                            <button className='btn-add-to-cart-res' onClick={handleAddTocart}>افزودن به سبد خرید</button>
                            {/* responsive */}


                            <div className='c-AddToCart'>
                                <button onClick={handleAddTocart}>افزودن به سبد خرید</button>
                                <div className='btn-count'>
                                    <button className='btn-plus' onClick={increaseCount}>+</button>
                                    <a>{count}</a>
                                    <button onClick={decreaseCount}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default ProductDetails;