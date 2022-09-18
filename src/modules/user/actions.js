export const userActions = {
  SET_LAYOUT_THEME: "SET_LAYOUT_THEME",
};

export const setLayoutTheme = (theme) => {
  return function (dispatch) {
    dispatch({
      type: userActions.SET_LAYOUT_THEME,
      payload: theme,
    });
  };
};
