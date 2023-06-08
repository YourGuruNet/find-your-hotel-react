import { apiCallWrapperPost, collectionList } from "../../app/api/api";

export const userActions = {
  SET_LAYOUT_THEME: "SET_LAYOUT_THEME",
  SET_ERROR: "SET_ERROR",
  SET_TOKEN: "SET_TOKEN",
  SET_NEW_ACCOUNT: "SET_NEW_ACCOUNT",
  CHECK_USER: "CHECK_USER",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
};

export const setLayoutTheme = (theme) => {
  return function (dispatch) {
    dispatch({
      type: userActions.SET_LAYOUT_THEME,
      payload: theme,
    });
  };
};

export const getLoginToken = (model, callBack) => {
  return apiCallWrapperPost(
    userActions.SET_TOKEN,
    collectionList.setLogin,
    model,
    callBack
  );
};

export const generatePasswordLink = (model, callBack) => {
  return apiCallWrapperPost(
    userActions.SET_CHANGE_PASSWORD_LINK,
    collectionList.setNewPasswordLink,
    model,
    callBack
  );
};

export const setNewAccount = (model, callBack) => {
  return apiCallWrapperPost(
    userActions.SET_NEW_ACCOUNT,
    collectionList.addUser,
    model,
    callBack
  );
};

export const checkUser = (model, callBack) => {
  return apiCallWrapperPost(
    userActions.CHECK_USER,
    collectionList.checkUser,
    model,
    callBack
  );
};

export const changePassword = (model, callBack) => {
  return apiCallWrapperPost(
    userActions.CHECK_USER,
    collectionList.changePassword,
    model,
    callBack
  );
};
