import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('https://localhost:5001/api/TodoItems').then((response) => {
      console.log(response);
      setItems(response.data);
    });
  });
  return (
    <div className='App'>
      <header className='App-header'>
        <ul>
          {items.map((value, id) => {
            return <p key={id}>{value.name}</p>;
          })}
        </ul>
      </header>
    </div>
  );
};

export default App;
