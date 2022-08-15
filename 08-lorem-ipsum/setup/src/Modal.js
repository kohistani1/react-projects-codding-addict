import React from 'react';

function Modal({ count }) {
  return (
    <div className='section-center modal'>
      {`${count} paragraph generated`}
      {console.log(count)}
    </div>
  );
}

export default Modal;
