import { placesConst } from "./PlacesActions";

export const addedPlaces = {
  placesList: [],
};

export const CoffeePlacesReducer = (state = addedPlaces, action) => {
  switch (action.type) {
    case placesConst.GET_ADDED_PLACES:
      return { ...state, placesList: action.payload };
    default:
      return state;
  }
};
