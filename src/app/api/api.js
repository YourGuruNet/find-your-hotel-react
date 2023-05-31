import { userActions } from "../../modules/user/actions";
import axios from "axios";

export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
export const apiUrl = "https://localhost:5001/api/";

const instance = axios.create({
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const apiCallWrapper = (type, url) => {
  return async function (dispatch) {
    await instance
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

export const apiCallWrapperPost = (type, url, modal, callBack = null) => {
  return async function (dispatch) {
    await instance
      .post(`${apiUrl}${url}`, modal)
      .then((response) => {
        if (callBack !== null) {
          callBack(response);
        }
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
  // Hotels
  getHotelsList: "hotels",

  // User
  setLogin: "Authentication/Login",
  addUser: "Authentication/AddUser",
};
