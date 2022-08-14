import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from './Loading';
import Tours from './Tours';
import NoTour from './NoTour';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const getTours = async (url) => {
    try {
      const { data } = await axios.get(url);
      setTours(data);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getTours(url);
  }, []);

  const removeItem = (id) => {
    const newTours = tours.filter((t) => t.id !== id);
    setTours(newTours);
  };

  return (
    <>
      {!tours.length > 0 && !loading ? <NoTour /> : ''}
      {loading ? (
        <main>
          <Loading />
        </main>
      ) : (
        <main>
          <Tours tours={tours} removeItem={removeItem} />
        </main>
      )}
    </>
  );
}

export default App;
