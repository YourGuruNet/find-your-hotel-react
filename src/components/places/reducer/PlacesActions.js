// import { PlacesApiCall } from '../../../app/api/api';
import axios from 'axios';
const url = 'https://localhost:5001/api';

export const placesConst = {
  GET_ADDED_PLACES: 'GET_ADDED_PLACES',
};
// await axios.get('https://api.npms.io/v2/search?q=react')
export const getAddedPlaces = () => {
  return async function (dispatch) {
    await axios.get(`${url}/Places`).then((response) => {
        let addedPlaces = [];
        // response.data.forEach((place) => {
        //   place.date = place.date.split('.')[0];
        //   addedPlaces.push(place);
        // });
      dispatch({
        type: placesConst.GET_ADDED_PLACES,
        payload:  response.data,
      });
    });
  };
};