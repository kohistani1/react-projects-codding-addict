import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import data from './data';
function App() {
  const [count, setCount] = useState('');
  const [render, setRender] = useState(false);
  const [text, setText] = useState([]);

  let amount = +count || 1;

  useEffect(() => {
    setTimeout(() => {
      renderModal();
    }, 1000);
  }, [amount]);

  const renderModal = () => {
    setRender(!render);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count > 8) amount = 8;
    setText(data.slice(0, amount));
    setRender(true);
  };
  console.log(count);
  const handleChange = (e) => setCount(e.target.value);
  return (
    <>
      {render && <Modal count={amount} />}

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
