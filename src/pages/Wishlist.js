import React from 'react';
import './Wishlist.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

function Wishlist({ onClose }) {
  return (
    <div className="wishlist-container">
      <div className="wishlist-content">
        <h2 className='head1'>Whishlist</h2>
        <ul className='ultag'>
          <li><Link to='/products/undefined'>HP Notebook</Link></li>
          <li> <Link to='/products/undefined'>HP Notebook</Link></li>
          <li> <Link to='/products/undefined'>HP Notebook</Link></li>
        </ul>
        {/* Close button */}
        <Link to='/' className='btn5' onClick={onClose}>Close</Link>
      </div>
    </div>
  );
}

export default Wishlist;
