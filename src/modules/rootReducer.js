import { combineReducers } from "redux";
import hotel from "../modules/hotels/reducer";
import user from "../modules/user/reducer";
export const appReducer = combineReducers({
  user,
  hotel,
});

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
