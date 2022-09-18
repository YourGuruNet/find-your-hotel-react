import { THEMES } from "../../app/constants/constants";
import { createReducer } from "../rootReducer";
import { userActions } from "./actions";

const initialState = {
  preferences: {
    layoutTheme: THEMES.LIGHT,
  },
};

const setTheme = (state, action) => {
  return {
    ...state,
    preferences: { ...state.preferences, layoutTheme: action.payload },
  };
};

const user = createReducer(
  { ...initialState },
  {
    [userActions.SET_LAYOUT_THEME]: (state, action) => setTheme(state, action),
  }
);

export default user;
