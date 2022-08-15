//even the type of input is number we only get string in
//minimum value for paragraph can only be 1 and max is 8

import React, { useState } from 'react';
import Modal from './Modal';
import data from './data';
function App() {
  const [count, setCount] = useState('');
  const [showModal, setshowModal] = useState(false);
  const [text, setText] = useState([]);

  let amount = +count || 1;

  //after 2s set showModal to false
  const showmodal = setTimeout(() => {
    setshowModal(false);
  }, 2000);

  const handleSubmit = (e) => {
    e.preventDefault();
    //max paragraph can only be 8
    if (count > 8) amount = 8;
    //slicing the arr based on the amount(count) got from the user
    setText(data.slice(0, amount));
    //modal is showing
    setshowModal(true);
    //to hide th modal after 2s
    showmodal();
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <>
      {/* showModal is true the render Moadl */}
      {showModal && <Modal count={amount} />}

      <div className='section-center'>
        <h2>tired of boring lorem Ipsum?</h2>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='count'>Paragraph: </label>
          <input
            type='number'
            name='count'
            id='count'
            value={count}
            onChange={handleChange}
          />
          <button type='submit' className='btn'>
            Generate
          </button>
        </form>
        <article className='lorem-text'>
          {text.map((txt, index) => {
            return <p key={index}>{txt}</p>;
          })}
        </article>
      </div>
    </>
  );
}

export default App;
