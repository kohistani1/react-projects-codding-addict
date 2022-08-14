import React, { useState } from 'react';

const Tour = ({ tour, removeItem }) => {
  const { id, name, info, image, price } = tour;

  const [readMore, setReadMore] = useState(false);
  console.log();
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price} </h4>
        </div>
        <p>
          {readMore ? info.slice(0, info.length / 1.5) : info}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'read more ..' : 'show less'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeItem(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
