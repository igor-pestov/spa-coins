export const actionTypes = {
  SET_API_KEY: 'SET_API_KEY',
  CLEAR_API_KEY: 'CLEAR_API_KEY',
};

export const setApiKey = payload => {
  return {
    type: actionTypes.SET_API_KEY,
    payload,
  }
};

export const clearApiKey = payload => {
  return {
    type: actionTypes.CLEAR_API_KEY,
    payload,
  }
};
