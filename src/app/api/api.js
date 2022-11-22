import { userActions } from "../../modules/user/actions";
import axios from "axios";

export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
export const apiUrl = "https://localhost:5001/api/";

export const apiCallWrapper = (type, url) => {
  return async function (dispatch) {
    await axios
      .get(`${apiUrl}${url}`)
      .then((response) => {
        dispatch({
          type: type,
          payload: response.data,
        });
      })
      .catch((response) => {
        console.log(response);
        dispatch({
          type: userActions.SET_ERROR,
          payload: response,
        });
      });
  };
};

export const collectionList = {
  getHotelsList: "hotels",
};
