import React from 'react'
import './Login.css'

import user_icon from '../Assets/Icons/user.png'
import email_icon from '../Assets/Icons/mail.png'
import pass_icon from '../Assets/Icons/padlock.png'

const Login = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt=""></img>
                    <input type="user"></input>
                </div>
                <div className="input">
                    <img src={email_icon} alt=""></img>
                    <input type="email"></input>
                </div>
                <div className="input">
                    <img src={pass_icon} alt=""></img>
                    <input type="password"></input>
                </div>
            </div>
        </div>
    );
}
export default Login