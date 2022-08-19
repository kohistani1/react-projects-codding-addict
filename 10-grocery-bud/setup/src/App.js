import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getList = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState(''); //input will store here
  const [list, setList] = useState(getList()); // all inputs will be pushed here
  const [isEditing, setIsEditing] = useState(false); //flag to do some operations
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'please enter something', 'danger');
    } else if (name && isEditing) {
      setList(
        list.map((item, index) => {
          if (item.id === editId) {
            let nth = index + 1;
            setIsEditing(false);
            showAlert(true, `${nth}th Note Edited`, 'success');
            return { ...item, title: name };
          }
          return item;
        })
      );
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      showAlert(true, 'item added', 'success');
    }

    //clearing input field and editId back to initial position
    setName(''); //name is cleared
    setEditId(null);
  };
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };
  const removeAlert = () => {
    showAlert(false);
  };
  const clearItems = () => {
    setList([]);
    showAlert(true, 'items deleted', 'danger');
  };
  const removeItem = (id) => {
    const filterdItems = list.filter((ite) => ite.id !== id);
    setList(filterdItems);
    showAlert(true, 'item deleted', 'danger');
  };
  const editItem = (id) => {
    const { title } = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(title);
  };

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.show && (
          <Alert {...alert} list={list} removeAlert={removeAlert} />
        )}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.egg'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className='submit-btn'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
        </div>
      )}
      <button className='clear-btn' onClick={clearItems}>
        clear all
      </button>
    </section>
  );
}

export default App;
