import '../profile/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch , faUser,faLeftLong, faClose, faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import imgUser from '../assets/img/img-user.jpeg'
import React ,{ useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import MenuBar from '../../componenet/menu-bar';
import LogoTopMenu from "../../assets/img/IMG_20230624_114437_735.jpg";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  

const Profile = () =>{

    const [editMode, setEditMode] = useState(false); // وضعیت نمایش اطلاعات ویرایش

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
    };

    const [allPosts, setAllPosts] = useState([])
    const getallpost = async ()=>{
        const allPosts = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setAllPosts(allPosts.data);
    }
    useEffect(()=>{
        getallpost()
    }, [])


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };   

    const[isModalVisible, setIsModalVisible] = useState(false);

    const handleLocationClick = () => {
        setIsModalVisible(true);
    };
    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return(
        <>
        {isModalVisible && (
            <div className='modal-map'>
                <div className='inset-modal'>
                    <div className='header-modal'>
                        <div className='header-modal-text'>
                            <p>انتخواب آدرس</p>
                            <h3>موقعیت مکانی آدرس را مشخص کنید.</h3>
                        </div>
                        <FontAwesomeIcon className='icon-close' icon={faClose} onClick={handleCloseModal} />
                    </div>
                    <form>
                        <div className='map'>
                            <div className='box-search'>
                                <FontAwesomeIcon className='icon-input-search-map' icon={faArrowRight} />
                                <input type='text' className='input-search-map' placeholder='جستجوی آدرس'></input>
                            </div>
                        </div>
                        <div className='footer-modal'>
                            <p>مرسوله‌های شما به این موقعیت ارسال خواهد شد.</p>
                            <button type='submit'>تایید و ادامه</button>
                        </div>
                    </form>  
                </div>
            </div>
        )}
        <div className="inset-profile">
            <div className='header'>
                <div className='div-img-logo'>
                    <img clssName='LogoTopMenu' src={LogoTopMenu}/>
                </div>
                <div className='logo-page'>
                   <FontAwesomeIcon className='icon-logo-gage' icon={faUser} />
                   <p>پروفایل</p>
                </div>
                <div className='menu-page'>
                    
                    <div className='back'>
                        <Link to="/salad">
                            <FontAwesomeIcon  className='icon-profile' icon={faLeftLong} />
                        </Link>
                    </div>
                </div>
            </div>
            <article class="uk-comment" role="comment">
                <header class="uk-comment-header">
                    <div class="div-profile" style={{ display: editMode ? 'none' : 'block' }}>
                        <div class="div-avatar">
                            <img class="uk-comment-avatar" src={imgUser} width="80" height="80" alt=""/>
                        </div>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="اطلاعات حساب شخصی" {...a11yProps(0)} />
                                <Tab label="اطلاعات حساب بانکی" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <div className='user-information'>
                                    <div className='div-info-user'>
                                        <a>نام : <span>نام</span></a>
                                    </div>
                                    <div className='div-info-user'>
                                        <a>نام خانوادگی : <span>نام خانوادگی</span></a>
                                    </div>
                                    <div className='div-info-user'>
                                        <a>ایمیل : <span> ایمیل</span></a>
                                    </div>
                                    <div className='div-info-user'>
                                        <a> شماره همراه : <span> شماره همراه</span></a>
                                    </div>
                                    <div className='div-info-user'>
                                        <a>  کد پستی : <span> کد پستی</span></a>
                                    </div>
                                    <div className='div-info-user'>
                                        <a> شماره حساب : <span> شماره حساب</span></a>
                                    </div>
                                    <div className='div-info-user'>
                                        <a> کد ملی: <span> کد ملی</span></a>
                                    </div>
                                    <div className='div-info-user'>
                                        <a>  آدرس: <span>  مازندران-ساری-ساری-ساری</span></a>
                                    </div>
                                    <button className='edit-profile' onClick={handleEditClick}>ویرایش اطلاعات</button>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                Item Two
                            </CustomTabPanel>
                        </Box>
                    </div>

                    <div className='page-edit-profile' style={{ display: editMode ? 'block' : 'none' }}>
                    <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="اطلاعات حساب شخصی" {...a11yProps(0)} />
                                {/* <Tab label="اطلاعات حساب بانکی" {...a11yProps(1)} /> */}
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <div className='user-information'>
                                    <div className='div-info-user input'>
                                        <label>نام : </label>
                                        <input className='input-text' type='text' placeholder='نام'/>
                                    </div>
                                    <div className='div-info-user input'>
                                        <label>نام خانوادگی : </label>
                                        <input className='input-text' type='text' placeholder='نام خانوادگی'/>
                                    </div>
                                    <div className='div-info-user input'>
                                        <label>ایمیل : </label>
                                        <input className='input-text' type='text' placeholder='ایمیل'/>
                                    </div>
                                    <div className='div-info-user input'>
                                        <label>شماره همراه : </label>
                                        <input className='input-text' type='text' placeholder='شماره همراه'/>
                                    </div>
                                    <div className='div-info-user input'>
                                        <label>کد پستی : </label>
                                        <input className='input-text' type='text' placeholder='کد پستی'/>
                                    </div>
                                    <div className='div-info-user input'>
                                        <label>شماره حساب : </label>
                                        <input className='input-text' type='text' placeholder='شماره حساب'/>
                                    </div>
                                    <div className='div-info-user input'>
                                        <label>کد ملی : </label>
                                        <input className='input-text' type='text' placeholder='کد ملی'/>
                                    </div>
                                    <div className='div-info-user input'>
                                        <label> انتخواب آدرس : </label>
                                        {/* <input className='input-text' type='text' placeholder='کد ملی'/> */}
                                        <button className='btn-info-map' type='button' onClick={handleLocationClick}>جستجو روی نقشه</button>
                                    </div>
                                    <button className='save-profile' onClick={handleSaveClick}>ثبت و ذخیره اطلاعات</button>
                                </div>
                            </CustomTabPanel>
                        </Box>
                    </div>
                </header>
            </article>
        </div>
        <MenuBar/>
        </>
    )
}
export default Profile;