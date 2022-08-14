import React from 'react';

const Categories = ({ menuCat, filterItems }) => {
  return (
    <div className='btn-container'>
      {menuCat.map((cat, index) => {
        return (
          <button
            key={index}
            className='filter-btn'
            onClick={() => filterItems(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
