import axios from 'axios';

export const apiUrl = 'https://localhost:5001/api';

export const PlacesApiCall = {
  getPlacesList: axios.get(`${apiUrl}/Places`),
};