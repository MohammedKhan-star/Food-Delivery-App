import React,{ useState } from 'react'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import  './Navbar.css'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="log" />
            <ul className="navbar-menu">
                <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>home</Link>
                <a href="#explore-Menu" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-App")} className={menu==="mobile-App"?"active":""}>mobile-App</a>
                <a href="#footer" onClick={()=>setMenu("contact Us")} className={menu==="contact Us"?"active":""}>contact Us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
        
        <div className="navbar-search_icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign in</button>
          
        </div>
        
    </div>
  )
}

export default Navbar
