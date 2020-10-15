import { actionTypes } from './actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_API_KEY:
      return action.payload;
    case actionTypes.CLEAR_API_KEY:
      return null;
    default:
      return state;
  }
}
