import React, { useState } from 'react';

const Category = ({ name, subcategories, onAddSubcategory }) => {
  const [newSubcategory, setNewSubcategory] = useState('');

  const handleInputChange = (event) => {
    setNewSubcategory(event.target.value);
  };

  const handleAddSubcategory = () => {
    onAddSubcategory(newSubcategory);
    setNewSubcategory('');
  };

  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {subcategories.map((subcategory, index) => (
          <li key={index}>{subcategory}</li>
        ))}
      </ul>
      <div>
        <input className='inputCat'
          type="text" 
          placeholder="New Subcategory Name" 
          value={newSubcategory} 
          onChange={handleInputChange} 
        />
        <button className='catBtn' onClick={handleAddSubcategory}>Add Subcategory</button>
      </div>
    </div>
  );
};

export default Category;
