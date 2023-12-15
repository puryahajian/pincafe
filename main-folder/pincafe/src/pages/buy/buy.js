import './buy.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faThLarge, faShoppingCart, faSearch , faUser, faLeftLong, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import MenuBar from '../../componenet/menu-bar';


const Buy = () =>{
    
    return(
        <>
        <div className="inset">
            <div className='header'>
                <div className='logo-page'>
                    <FontAwesomeIcon className='icon-logo-gage' icon={faThLarge} />
                    <p>منو</p>
                </div>
                <div className='menu-page'>
                    {/*<FontAwesomeIcon className='icon-search' icon={faSearch} />*/}
                    <input className='input-search' type={'search'} placeholder='غذای مورد علاقه خود را پیدا کنید'></input>
                    <Link to="orders">
                        {/* <FontAwesomeIcon className='icon-shopping' icon={faShoppingCart} /> */}
                    </Link>
                    <div className='profile'>
                        <Link to="profile">
                            <FontAwesomeIcon  className='icon-profile' icon={faUser} />
                        </Link>
                    </div>
                    <div className='back'>
                        <Link to="/salad">
                            <FontAwesomeIcon  className='icon-profile' icon={faLeftLong} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='c-chat'>
                <div className='conten-chat'>
                    <div className='box-chat'>
                        <div className='c-user'>
                            <div className='chat-user'>
                                <div className='titr-user'>
                                    <div><p>یوزر</p></div>
                                    <div><h3>1402/02/28</h3></div>
                                </div>
                                <p>fwefefefe</p>
                            </div>
                        </div>
                        <div className='c-admin'>
                            <div className='chat-admin'>
                                <div className='titr-admin'>
                                    <div><p>یوزر</p></div>
                                    <div><h3>1402/02/28</h3></div>
                                </div>
                                <p>fwefefefe</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className='c-user'>
                            <div className='chat-user'>
                                <div className='titr-user'>
                                    <div><p>یوزر</p></div>
                                    <div><h3>1402/02/28</h3></div>
                                </div>
                                <p>fwefefefe</p>
                            </div>
                        </div>
                        <div className='c-admin'>
                            <div className='chat-admin'>
                                <div className='titr-admin'>
                                    <div><p>یوزر</p></div>
                                    <div><h3>1402/02/28</h3></div>
                                </div>
                                <p>fwefefefe</p>
                            </div>
                        </div>
                        <div className='c-user'>
                            <div className='chat-user'>
                                <div className='titr-user'>
                                    <div><p>یوزر</p></div>
                                    <div><h3>1402/02/28</h3></div>
                                </div>
                                <p>fwefefefe</p>
                            </div>
                        </div>
                        <div className='c-admin'>
                            <div className='chat-admin'>
                                <div className='titr-admin'>
                                    <div><p>یوزر</p></div>
                                    <div><h3>1402/02/28</h3></div>
                                </div>
                                <p>fwefefefe</p>
                            </div>
                        </div>
                        <div className='c-user'>
                            <div className='chat-user'>
                                <div className='titr-user'>
                                    <div><p>یوزر</p></div>
                                    <div><h3>1402/02/28</h3></div>
                                </div>
                                <p>fwefefefe</p>
                            </div>
                        </div>
                        <div className='c-admin'>
                            <div className='chat-admin'>
                                <div className='titr-admin'>
                                    <div><p>یوزر</p></div>
                                    <div><h3>1402/02/28</h3></div>
                                </div>
                                <p>fwefefefe</p>
                            </div>
                        </div>
                        <div className='c-user'>
                            <div className='chat-user'>
                                <div className='titr-user'>
                                    <div><p>یوزر</p></div>
                                    <div><h3>1402/02/28</h3></div>
                                </div>
                                <p>fwefefefe</p>
                            </div>
                        </div>
                        <div className='c-admin'>
                            <div className='chat-admin'>
                                <div className='titr-admin'>
                                    <div><p>یوزر</p></div>
                                    <div><h3>1402/02/28</h3></div>
                                </div>
                                <p>fwefefefe</p>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className='input-chat'>
                            <div>
                                <button className='btn-send' type='submit'><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></button>
                            </div>
                            <div>
                                <input className='input-message' type='text'></input>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
        <MenuBar/>
        </>
    )
}
export default Buy;