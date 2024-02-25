import React, { useState } from 'react';
import './homeStyle.css'; // Import the CSS file
import Category from './category'; // Import the Category component
import Card from './card'; // Import the Card component

const PAGE_SIZE = 6;

const HomePage = () => {
  const [categories, setCategories] = useState([
    { name: 'Lapttop', subcategories: ['HP', 'Lenovo','Dell'] },
    { name: 'Tablets', subcategories: ['Samsung', 'Apple'] },
  ]);

  const [products, setProducts] = useState([
    {id:1, name: 'HP Notebook', image: 'https://th.bing.com/th/id/OIP.jTXQJLv7sAtoSWWo1CD0jwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7', price: 'Rs.45,000' },
    { id:2, name: 'HP Notebook', image: 'https://th.bing.com/th/id/OIP.jTXQJLv7sAtoSWWo1CD0jwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7', price: 'Rs.45,000' },
    { id:3, name: 'HP Notebook', image: 'https://th.bing.com/th/id/OIP.jTXQJLv7sAtoSWWo1CD0jwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7', price: 'Rs.45,000' },
    { id:4, name: 'HP Notebook', image: 'https://th.bing.com/th/id/OIP.jTXQJLv7sAtoSWWo1CD0jwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7', price: 'Rs.45,000' },
    { id:5, name: 'HP Notebook', image: 'https://th.bing.com/th/id/OIP.jTXQJLv7sAtoSWWo1CD0jwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7', price: 'Rs.45,000' },
    { id:6, name: 'HP Notebook', image: 'https://th.bing.com/th/id/OIP.jTXQJLv7sAtoSWWo1CD0jwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7', price: 'Rs.45,000' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const indexOfLastProduct = currentPage * PAGE_SIZE;
  const indexOfFirstProduct = indexOfLastProduct - PAGE_SIZE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const addCategory = () => {
    const categoryName = prompt('Enter category name:');
    if (categoryName) {
      setCategories([...categories, { name: categoryName, subcategories: [] }]);
    }
  };

  const addSubcategory = (index, newSubcategory) => {
    const updatedCategories = [...categories];
    updatedCategories[index].subcategories.push(newSubcategory);
    setCategories(updatedCategories);
  };

  const addProduct = () => {
    const productName = prompt('Enter product name:');
    const productImage = prompt('Enter product image URL:');
    const productPrice = prompt('Enter product price:');
    if (productName && productImage && productPrice) {
      setProducts([...products, { name: productName, image: productImage, price: productPrice }]);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='body'>
      <div className="sidebar">
        <h2>Categories</h2>
        <button className="orange-button" onClick={addCategory}>Add Category</button>
        {categories.map((category, index) => (
          <Category 
            key={index} 
            name={category.name} 
            subcategories={category.subcategories} 
            onAddSubcategory={(newSubcategory) => addSubcategory(index, newSubcategory)}
          />
        ))}
      </div>
      <div className="main-content">
        <h2>Products</h2>
        <button className="orange-button" onClick={addProduct}>Add Product</button>
        <div className="cards">
          {currentProducts.map((product, index) => (
            <Card key={index} name={product.name} image={product.image} price={product.price} />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            <p>Page {currentPage} of {totalPages}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
