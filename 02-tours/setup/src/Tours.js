import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeItem }) => {
  return (
    <div>
      {tours.map((tour) => {
        // console.log(tour);
        return (
          <>
            <Tour key={tour.id} tour={tour} removeItem={removeItem} />
          </>
        );
      })}
    </div>
  );
};

export default Tours;
