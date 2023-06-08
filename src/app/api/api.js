import { userActions } from "../../modules/user/actions";
import axios from "axios";
import LocalStorageWrapper, {
  LocalStorageKeys,
} from "../Helpers/LocalStorageWrapper";
import { toast } from "react-toastify";

export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
export const apiUrl = "https://localhost:5001/api/";

const instance = axios.create({
  headers: {
    Authorization: `Bearer ${LocalStorageWrapper.get(LocalStorageKeys.TOKEN)}`,
    "Content-Type": "application/json",
    // if not added, IE caches requests
    Pragma: "no-cache",
  },
});

export const apiCallWrapper = (type, url) => {
  return async function (dispatch) {
    const token = LocalStorageWrapper.get(LocalStorageKeys.TOKEN);
    if (token) {
      const instance = axios.create({
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Pragma: "no-cache",
        },
      });

      try {
        const response = await instance.get(`${apiUrl}${url}`);
        dispatch({
          type: type,
          payload: response.data,
        });
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Token not found in local storage");
    }
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
        toast.error(response.message);
      });
  };
};

export const collectionList = {
  // Hotels
  getHotelsList: "hotels",

  // User
  setLogin: "Authentication/Login",
  addUser: "Authentication/AddUser",
  setNewPasswordLink: "Authentication/SetNewPasswordLink",
  checkUser: "Authentication/CheckUser",
};
