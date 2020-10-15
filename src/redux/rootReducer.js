import { combineReducers } from 'redux';

import currency from './currency/reducer';
import apiKey from './apiKey/reducer';
import error from './error/reducer';

const reducers = {
  currency,
  apiKey,
  error,
};

export const reducer = combineReducers(reducers);
