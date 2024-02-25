// Product.js

import React, { useState } from 'react';
import './Product.css'; // Import the CSS file for styling

const Product = ({ name, image, price, inStock, stockQuantity, ramVariants }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedRamVariant, setSelectedRamVariant] = useState(ramVariants && ramVariants.length > 0 ? ramVariants[0] : '');

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1 && value <= stockQuantity) {
      setQuantity(value);
    }
  };

  const handleRamVariantChange = (event) => {
    setSelectedRamVariant(event.target.value);
  };

  const handleEditClick = () => {
    // Implement edit functionality
    console.log('Edit product:', name);
  };

  const handleBuyClick = () => {
    // Implement buy functionality
    console.log('Buy product:', name);
  };

  const handleWishlistClick = () => {
    // Implement wishlist functionality
    console.log('Wishlist product:', name);
  };

  return (
    <div className="product">
      <img src='https://th.bing.com/th/id/OIP.jTXQJLv7sAtoSWWo1CD0jwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7' alt={name} />
      <div className="product-details">
        <h3>HP Notebook</h3>
        <p>Price: 45,000</p>
        <p>{inStock ? `In Stock (${stockQuantity} available)` : 'in Stock'}</p>
        <p> ram : 
            <button className='btnRam'>4GB</button>
            <button className='btnRam'>6GB</button>
            <button className='btnRam'>8GB</button>
    
        </p>
        {ramVariants && ramVariants.length > 0 && (
          <div className="selectors">
            <label htmlFor="quantity">quantity</label>
            <input 
              type="number" 
              id="quantity" 
              min="1" 
              max={stockQuantity} 
              value={quantity} 
              onChange={handleQuantityChange} 
            />
            <label htmlFor="ram">RAM Variant:</label>
            <select id="ram" value={selectedRamVariant} onChange={handleRamVariantChange}>
              {ramVariants.map((variant, index) => (
                <option key={index} value={variant}>8gb</option>
              ))}
            </select>
          </div>
        )}
        <div className="buttons">
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleBuyClick}>Buy</button>
          <button onClick={handleWishlistClick}>Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
