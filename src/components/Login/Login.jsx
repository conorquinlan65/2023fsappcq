import React, {useState} from 'react'
import './Login.css'

import user_icon from '../Assets/Icons/user.png'
import email_icon from '../Assets/Icons/mail.png'
import pass_icon from '../Assets/Icons/padlock.png'

const Login = () => {

    const [action,setAction] = useState("Sign Up");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                /** When in the Registration Page, display more input fields to allow for:
                 * - a Name
                 * - a Username
                 * - a DOB
                 */
                {action === "Login"?<div></div>: 
                <div className="input">
                    <img src={user_icon} alt=""></img>
                    <input type="text" placeholder="Name"></input>
                </div>
                /** This would need to be fixed to have a different ICON */
                <div className="input">
                    <img src={user_icon} alt=""></img>
                    <input type="text" placeholder="Username"></input>
                </div>
                /** This would need to be fixed to have DOB be a LIST */
                <div className="input">
                    <img src={user_icon} alt=""></img>
                    <input type="text" placeholder="DOB"></input>
                </div>}
                /** When in the Login Page, display less input fields to allow for:
                 * - a Email
                 * - a Password
                 */

                 /** Input for a Email ID wrapped in a input, image, input, placeholder */
                <div className="input">
                    <img src={email_icon} alt=""></img>
                    <input type="email" placeholder="Email Id"></input>
                </div>
                /** Input for a Password wrapped in a input, image, input, placeholder */
                <div className="input">
                    <img src={pass_icon} alt=""></img>
                    <input type="password" placeholder="Password"></input>
                </div>
                /** This is what enables the Sign Up link page */
                {action==="Sign Up"?<div></div>:
                <div className="forgot-password"> Lost Password? <span>Click Here!</span></div>}
                <div>
                    <div className="submit-container">
                        <div className={action === "Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                        <div className={action === "Login"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login