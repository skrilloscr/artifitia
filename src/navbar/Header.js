import React from 'react';
import './navstyle.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const { pathname } = location;

  // Define paths where you want to hide the header
  const hideHeaderPaths = ['/sign-up', '/sign-in'];

  // Check if the current path is in the hideHeaderPaths array
  const isHidden = hideHeaderPaths.includes(pathname);

  if (isHidden) {
    return null; // Don't render anything if the header should be hidden
  }

  return (
    <div className="navbar">
      <div>
        <input type="text" className="search-bar" placeholder="Search..." />
        <button className="search-btn">Search</button>
        <Link to='/wishlist' className="wishlist-btn"><i className="fa-solid fa-heart"></i></Link>
        <a className="cart-btn"><i className="fa-solid fa-cart-shopping"></i></a>
        <a className='wish1'>1</a>
        <a className='cart1'>1</a>
        <Link to='/sign-in' className="signin-btn">Signin</Link>
      </div>
    </div>
  );
}

export default Header;
