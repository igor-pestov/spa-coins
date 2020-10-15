import { actionTypes } from './actions';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return action.payload;
    case actionTypes.CLEAR_ERROR:
      return null;
    default:
      return state;
  }
}
