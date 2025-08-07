import React,{ useState } from 'react'
import {assets} from '../../assets/assets'
import  './Navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="log" />
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>home</li>
                <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
                <li onClick={()=>setMenu("mobile-App")} className={menu==="mobile-App"?"active":""}>mobile-App</li>
                <li onClick={()=>setMenu("contact Us")} className={menu==="contact Us"?"active":""}>contact Us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
        
        <div className="navbar-search_icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
          </div>
          <button>Sign in</button>
          
        </div>
        
    </div>
  )
}

export default Navbar
