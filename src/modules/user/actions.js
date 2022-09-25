export const userActions = {
  SET_LAYOUT_THEME: "SET_LAYOUT_THEME",
  SET_ERROR: "SET_ERROR",
};

export const setLayoutTheme = (theme) => {
  return function (dispatch) {
    dispatch({
      type: userActions.SET_LAYOUT_THEME,
      payload: theme,
    });
  };
};
