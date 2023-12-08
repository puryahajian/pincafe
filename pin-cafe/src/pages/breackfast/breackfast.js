import './breackfast.css';
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BuyContext } from '../../context/context';
import { Link, useParams } from 'react-router-dom';


const Breackfast = () =>{
    const [allPosts, setAllPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const getallpost = async ()=>{
        setIsLoading(true);
        const response = await axios.get(`https://persian-devs.ir/api/product?category=${id}`);
        setAllPosts(response.data['results']);
        setIsLoading(false);
    }
   
    useEffect(()=>{
        getallpost();
    }, [id]);

    const { addToCart} = useContext(BuyContext)

    const handleAddTocart = (item) => {
        addToCart(item)
     }

    return(
        <>
        <div className='list-salad' uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 50; repeat: true">
            {isLoading ? (
                <p className='isloading'><span class="uk-margin-small-right" uk-spinner="ratio: 3"></span></p>
                ) :
                allPosts.map(item=>(
                    <div className='it1 div uk-card uk-card-default' key={item.id}>
                        <div className='div-img'>
                            <Link to={`/products/${item.id}`}>
                                <img className='img-s' src={item.image} />
                            </Link>
                        </div>
                        <div className='info-item'>
                            <div className='it-name'>
                                <p>نام :</p>
                                <Link className='link-to-detail' to={`/product/${item.id}`}>
                                    <p className='link-p'>{item.name}</p>
                                </Link>
                            </div>
                            <div className='c-detal'>
                                {/* <p className='d'>محتویات :</p> */}
                                <p className='content-detal'>{item.description}</p>
                            </div>
                            <div className='dev-price'>
                                <p>قیمت :</p>
                                <p className='title-price'><span>{item.price}</span> تومان</p>
                            </div>
                            <button className='add-to-cart name-res '  onClick={() => handleAddTocart(item)}>
                                <span>اضافه کردن</span>
                                <FontAwesomeIcon className='icon-plus' icon={faPlus}></FontAwesomeIcon>
                            </button>
                        </div>                
                    </div>
                ))
            }
        </div>       
        </>
    )
}
export default Breackfast;


