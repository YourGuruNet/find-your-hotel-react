import { HotelsApiCall } from "../../app/api/api";

export const hotelsActions = {
  GET_HOTELS_LIST: "GET_HOTELS_LIST",
};

export const getHotelList = () => {
  return async function (dispatch) {
    await HotelsApiCall.getHotelsList.then((response) => {
      dispatch({
        type: hotelsActions.GET_HOTELS_LIST,
        payload: response.data,
      });
    });
  };
};
