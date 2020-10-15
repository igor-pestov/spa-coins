export const actionTypes = {
  INC_PAGE_NUMBER: 'INC_PAGE_NUMBER',
  DEC_PAGE_NUMBER: 'DEC_PAGE_NUMBER',
  GET_CURRENCIES: 'GET_CURRENCIES',
  SET_CURRENCIES: 'SET_CURRENCIES',
  GET_CURRENCY: 'GET_CURRENCY',
  SET_CURRENCY: 'SET_CURRENCY',
};

export const incPageNumber = () => {
  return {
    type: actionTypes.INC_PAGE_NUMBER,
  }
};

export const decPageNumber = () => {
  return {
    type: actionTypes.DEC_PAGE_NUMBER,
  }
};

export const getCurrenciesByPage = () => {
  return {
    type: actionTypes.GET_CURRENCIES,
  }
};

export const setCurrencies = payload => {
  return {
    type: actionTypes.SET_CURRENCIES,
    payload,
  }
};

export const getCurrencyBySymbol = payload => {
  return {
    type: actionTypes.GET_CURRENCY,
    payload,
  }
};

export const setCurrency = payload => {
  return {
    type: actionTypes.SET_CURRENCY,
    payload,
  }
};
