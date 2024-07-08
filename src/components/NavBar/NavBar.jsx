import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const NavBar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home")
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="menu">
        <li onClick={() => {setMenu("home")}} className={menu === "home" ? "active" : ""}><a href="/">Home</a></li>
        <li onClick={() => {setMenu("menu")}} className={menu === "menu" ? "active" : ""}><a href="#explore-menu">Menu</a></li>
        <li onClick={() => {setMenu("contact")}} className={menu === "contact" ? "active" : ""}><a href="#footer">Contact</a></li>
        <li onClick={() => {setMenu("about")}} className={menu === "about" ? "active" : ""}><a href="#footer">About</a></li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="basket-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt=""></img></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={()=>{setShowLogin(true)}}>Sign in</button>
      </div>
    </div>
  )
}

export default NavBar