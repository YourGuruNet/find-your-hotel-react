import { placesConst } from './PlacesActions';

export const addedPlaces = {
  places: [],
};

export const PlacesReducer = (state = addedPlaces, action) => {
  switch (action.type) {
    case placesConst.GET_ADDED_PLACES:
        return { ...state, places: action.payload };
    default:
      return state;
  }
}