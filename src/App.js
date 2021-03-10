import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:5001';

// const responseBody = (response) => response.data;

// const requests = {
//   get: (url) => axios.get(url).then(responseBody),
//   post: (url, body) => axios.post(url, body).then(responseBody),
//   put: (url, body) => axios.put(url, body).then(responseBody),
//   del: (url) => axios.delete(url).then(responseBody),
// };

// const ActivitiesApiCall = {
//   list: () => requests.get('/activities'),
//   details: (id) => requests.get(`/activities/${id}`),
//   create: (activity) => requests.post('/activities', activity),
//   update: (activity) => requests.put(`/activities/${activity.id}`, activity),
//   delete: (id) => requests.del(`/activities/${id}`),
// };

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
