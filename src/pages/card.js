import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Card = ({ name, image, price }) => {
  const [inWishlist, setInWishlist] = useState(false);

  const toggleWishlist = () => {
    setInWishlist(!inWishlist);
  };

  return (
    <>
        <div className="card">
          <Link key={Product.id} to={`/products/${Product.id}`}>
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <p>{price}</p>
              <div className="rating">
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="far fa-star"></i></span>
         
          </div>
          </Link>
          <button 
            className={`wishlist-button ${inWishlist ? 'in-wishlist' : ''}`}
            onClick={toggleWishlist}
          >
            <i className={`fas ${inWishlist ? 'fa-heart' : 'fa-heart-o'}`}></i><i class="fa-solid fa-heart"></i>
          </button>
        </div>
    </>
  );
};

export default Card;
