import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = [
  'all',
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, seCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Manu</h2>
          <div className='underline'></div>
        </div>
        <Categories menuCat={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
