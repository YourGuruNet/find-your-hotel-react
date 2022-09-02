import { hotelsActions } from "./actions";
import { createReducer } from "../rootReducer";

const initialState = {
  hotelsList: [],
};

const setHotelList = (state, action) => {
  return { ...state, hotelsList: action.payload };
};

const hotels = createReducer(
  { ...initialState },
  {
    [hotelsActions.GET_HOTELS_LIST]: (state, action) =>
      setHotelList(state, action),
  }
);

export default hotels;
