import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'

const LoginPopup = (setShowLogin) => {
    const [currState,setCurrState]=useState("Login")
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                <input type="text"  placeholder='Your name' required/>
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
                
                <input type="email"  placeholder='Your email' className="" required/>
                <input type="password" placeholder='Password' required />
             </div>
             <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
