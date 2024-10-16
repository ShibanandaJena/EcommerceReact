import React from 'react'
import {FaUserCircle,FaShoppingBag,FaRegHeart,FaSearch} from "react-icons/fa";
import img from '../../images/myntra_logo.webp'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <header>
            <div className="logo_container">
                
                    <Link to="/">
                    <img className="myntra_home" src={img} alt="Myntra Home" />
                    </Link>
                
            </div>
            <nav className="nav_bar">
                <Link to="/clothing">Clothing</Link>
                <Link to="/grocery">Grocery</Link>
                <Link to="/beauty">Beauty</Link>
                <Link to="/studio">Studio <sup>New</sup></Link>
            </nav>
            <div className="search_bar">
                <span className="material-symbols-outlined search_icon"><FaSearch/></span>
                <input className="search_input" placeholder="Search for products, brands and more" />
            </div>
            <div className="action_bar">
                <div className="action_container">
                    
                    <span className="material-symbols-outlined action_icon"><FaUserCircle/></span>
                    <Link className='link-right-navbar' to='/account' style={{textDecoration:"none",color:"black"}}>
                    <span className="action_name">Profile</span> 
                    </Link>
                    
                </div>
                <div className="action_container">
                    <span className="material-symbols-outlined action_icon"><FaRegHeart/></span>
                    <Link className='link-right-navbar' to='/wishlist' style={{textDecoration:"none",color:"black"}}>
                    <span className="action_name">Wishlist</span> 
                    </Link>

                </div>

                <div className="action_container">
                <span className="material-symbols-outlined action_icon"><FaShoppingBag/></span>
                    <Link className='link-right-navbar' to='/bag' style={{textDecoration:"none",color:"black"}}>
                    <span className="action_name">Bag</span> 
                    </Link>

                </div>
            </div>
        </header>

    </>
  )
}

export default Header