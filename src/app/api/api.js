import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5001/api';

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

export const PlacesApiCall = {
    list: () => requests.get('/Places'),
  };