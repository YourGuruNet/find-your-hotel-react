import { apiCallWrapperPost, collectionList } from "../../app/api/api";

export const userActions = {
  SET_LAYOUT_THEME: "SET_LAYOUT_THEME",
  SET_ERROR: "SET_ERROR",
  SET_TOKEN: "SET_TOKEN",
  SET_NEW_ACCOUNT: "SET_NEW_ACCOUNT",
};

export const setLayoutTheme = (theme) => {
  return function (dispatch) {
    dispatch({
      type: userActions.SET_LAYOUT_THEME,
      payload: theme,
    });
  };
};

export const getLoginToken = (model) => {
  return apiCallWrapperPost(
    userActions.SET_TOKEN,
    collectionList.setLogin,
    model
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
