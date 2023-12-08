import React, { useState } from "react";
import './Login.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { Box } from "@mui/material";
import logologin from '../assets/img/logo-menu.jpg'


function Login() {
  const navigate = useNavigate()
    const [phone, setPhone] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [isPhoneNumberEntered, setIsPhoneNumberEntered] = useState(false);

    const handleLogin = async (event) => {
        try {
          event.preventDefault();
          
          const data = new URLSearchParams();
          data.append("phone", phone);
      
          const response = await axios.post("https://persian-devs.ir/account/api/v1/login/", data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          });
      
          if (response.status === 200) {
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
    
            console.log(localStorage);
            console.log(response.data);
              setIsPhoneNumberEntered(true);
          } else {
            console.error('فراخوانی ناموفق بود:', response.statusText);
          }
        } catch (error) {
          toast.error("خطا در ارسال درخواست. لطفاً دوباره تلاش کنید.");
        }
      };
    
      const handleVerify = async (e) => {
        e.preventDefault();
        try {
          const data = new URLSearchParams();
          data.append('phone', phone);
          data.append('password', verificationCode);
      
          const config = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: 'https://persian-devs.ir/account/api/v1/verify/',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data,
          };
      
          const response = await axios(config);
          
          if(response?.status == 200) {
            localStorage.setItem('shop-token', response?.data?.refresh)
            navigate('/salad')
          }
        } catch (error) {
          toast.error("خطا در ارسال درخواست. لطفاً دوباره تلاش کنید.");
          console.log(error.message);
        }
      };
    
  
    return(
        <>
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off"></Box>
            <div className="Login">
                <form>
                    <div className='inset-login'>
                        <div>
                            <img className='img-logo' src={logologin} />
                        </div>
                        <div className='inputs'>
                            {isPhoneNumberEntered ? (
                                <div className='divs-code'>
                                    <div className='input-code'>
                                        <label> کد تایید: </label>
                                        <input
                                            placeholder='کد تایید را وارد کنید'
                                            type="text"
                                            value={verificationCode}
                                            onChange={(e) => setVerificationCode(e.target.value)}
                                        />
                                    </div>
                                    <button type='button' className='btn-login' onClick={handleVerify}>تایید</button>
                                </div>
                            ) : (
                                <div className='input-phone'>
                                    <div className='div-phone'>
                                        <label> شماره تلفن: </label>
                                        <input
                                            placeholder='شماره تلفن خود را وارد کنید'
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div className='div-send-code'>
                                        <button onClick={handleLogin}>ورود</button>
                                    </div>
                                </div>
                            )}
                            <ToastContainer />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;