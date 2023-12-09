import './productDetails.css'
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { BuyContext } from "../../context/context";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import imgg from '../../assets/img/salad.png'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import LogoTopMenu from '../../assets/img/IMG_20230624_114437_735.jpg'


const ProductDetails = () => {
    const { cartItems } = useContext(BuyContext);
    const [ product, setProduct] = useState({});
    const { id } = useParams();

    const getDetailsProduct = async () => {
        try {
          const response = await axios.get(`https://persian-devs.ir/api/product/${id}`);
          setProduct(response.data['result']);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };


    useEffect(() => {
        getDetailsProduct()
    }, [id])

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
                            <Link to="/salad">
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
                            <a className='a'>مواد تشکیل دهنده :</a>
                            <div className='c-detail'>
                                <a>گوجه</a> <span>|</span>
                                <a>نخودفرنگی</a> <span>|</span>
                                <a>خیار</a> <span>|</span>
                                <a>لیمو</a> <span>|</span>
                                <a>کلم قرمز</a>
                            </div>
                            <a className='a'>توضیحات :</a>
                            <p className='description'>{product.description}</p>
                            <div className='div-price'>
                                {/* <Typography className='Satisfaction' component="legend">رضایت مشتری</Typography> */}
                                <Rating name="read-only" value={value} readOnly />
                                <p className='pricee'>قیمت : <span>{product.price}</span> تومان </p>
                            </div>

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
        </>
    )
}

export default ProductDetails;