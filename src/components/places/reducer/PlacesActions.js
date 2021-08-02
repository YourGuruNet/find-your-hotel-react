import { PlacesApiCall } from '../../../app/api/api';


export const placesConst = {
  GET_ADDED_PLACES: 'GET_ADDED_PLACES',
};
export const getAddedPlaces = () => {
  return async function (dispatch) {
    await PlacesApiCall.getPlacesList.then((response) => {
      dispatch({
        type: placesConst.GET_ADDED_PLACES,
        payload:  response.data,
      });
    });
  };
};