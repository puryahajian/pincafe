import './menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../font/IRANSans.ttf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faShoppingCart, faSearch , faUser, faLocationDot, faClose, faPlusCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import React ,{ useState, useContext, useEffect } from 'react';
import { BuyContext } from '../../context/context';
import MenuBar from '../../componenet/menu-bar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LogoTopMenu from '../../assets/img/IMG_20230624_114437_735.jpg'
import logologin from "../../assets/img/logo-menu.jpg";
import axios from 'axios';
import PersianFood from '../breackfast/breackfast';
import Breackfast from '../breackfast/breackfast';


const Menu = () =>{
    const [allPosts, setAllPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAddressVisible, setIsAddressVisible] = useState(false);
    const { cartItems } = useContext(BuyContext);

    const getallpost = async ()=>{
        setIsLoading(true);
        const response = await axios.get('https://persian-devs.ir/api/category');
        setAllPosts(response.data['results']);
        setIsLoading(false);
    }
   
    useEffect(()=>{
        getallpost()
    }, [])

    const handleClick = (index) => {
        // allPosts[index]['id']
        setActiveIndex(index);
    };

    const handleLocationClick = () => {
        setIsAddressVisible(true);
    };
    
    const handleCloseModal = () => {
        setIsAddressVisible(false);
    };

    return(      
        <>
        {isAddressVisible && (
            <div className='modal-address'>
                <div className='inset-modal-address'>
                    <div className='header-modal-address'>
                        <p>انتخواب آدرس</p>
                        <FontAwesomeIcon className='btn-close' icon={faClose} onClick={handleCloseModal}/>
                    </div>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="میدان امام-کوی آزادی -کوی آزادی" />
                        </RadioGroup>
                    </FormControl>
                    <div className='Add-address'>
                        <FontAwesomeIcon className='icon-plus' icon={faPlusCircle}/>
                        <p>افزودن آدرس</p>
                    </div>
                </div>
            </div>
        )}
        <div className='inset'>
            <div className='header'>
                <div className='logo-page'>
                    <FontAwesomeIcon className='icon-logo-gage' icon={faThLarge} />
                    <p>منو</p>
                </div>
                <div className='div-img-logo'>
                    <img clssName='LogoTopMenu' src={LogoTopMenu}/>
                </div>
                <div className='menu-page'>
                    <div className='location' onClick={handleLocationClick}>
                        <FontAwesomeIcon className='icon-location' icon={faLocationDot}/>
                        <p className='p-addres'>مازندران - ساری</p>
                    </div>
                    <div className='divs'>
                        <FontAwesomeIcon className='icon-search' icon={faSearch} />
                        <input className='input-search' type={'search'} placeholder='غذای مورد علاقه خود را پیدا کنید'></input>
                        <div className='shop'>
                            <Link to="orders">
                                <span className='length'>{cartItems.length}</span>
                                <FontAwesomeIcon className='icon-shopping' icon={faShoppingCart} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu-foods'>
                <ul className='ul-menu-foods'>
                    {allPosts.map((item, index) => (
                        <li
                        key={index}
                        id='li-menu-foods'
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleClick(index)}
                        >
                        <Link to={`/product/category/` + item.id} className='link-menu-foods'>
                            <img className='icon-menu-foods' src={item.image} />
                            <p>{item.name}</p>
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
            <div className='list-food'>
                <Routes>
                    <Route path='/product/category/:id' element={<Breackfast />} />
                </Routes>
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
export default Menu;
