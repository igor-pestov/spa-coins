import { actionTypes } from './actions';

const INITIAL_STATE = {
  page: 1,
  limit: 20,
  currencies: [],
  activeCurrency: null,
  isFetching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.INC_PAGE_NUMBER:
      return  {
        ...state,
        page: state.page + 1,
      };
    case actionTypes.DEC_PAGE_NUMBER:
      return  {
        ...state,
        page: state.page - 1,
      };
    case actionTypes.GET_CURRENCIES:
      return  {
        ...state,
        isFetching: true,
      };
    case actionTypes.SET_CURRENCIES:
      return  {
        ...state,
        currencies: action.payload,
        isFetching: false,
      };
    case actionTypes.GET_CURRENCY:
      return  {
        ...state,
        isFetching: true,
      };
    case actionTypes.SET_CURRENCY:
      return  {
        ...state,
        activeCurrency: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
