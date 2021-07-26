import { PlacesApiCall } from '../../../app/api/api';


export const placesConst = {
  GET_ADDED_PLACES: 'GET_ADDED_PLACES',
};

export const getAddedPlaces = () => {
  return async function (dispatch) {
    await PlacesApiCall.list().then((response) => {
        console.log(response)
      let addedPlaces = [];
      response.forEach((place) => {
        place.date = place.date.split('.')[0];
        addedPlaces.push(place);
        console.log(addedPlaces)
      });
      dispatch({
        type: placesConst.GET_ADDED_PLACES,
        payload: addedPlaces,
      });
    });
  };
};