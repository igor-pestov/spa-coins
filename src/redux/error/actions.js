export const actionTypes = {
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
};

export const setError = payload => {
  return {
    type: actionTypes.SET_ERROR,
    payload,
  }
};

export const clearError = payload => {
  return {
    type: actionTypes.CLEAR_ERROR,
    payload,
  }
};
