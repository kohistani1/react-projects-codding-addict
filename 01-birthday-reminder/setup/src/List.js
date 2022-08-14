import React from 'react';

const List = ({ people }) => {
  console.log(people);
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image: imgUrl } = person;
        return (
          <>
            <article key={id} className='person'>
              <img src={imgUrl} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          </>
        );
      })}
    </>
  );
};
export default List;
