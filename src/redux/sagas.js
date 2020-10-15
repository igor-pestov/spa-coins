import { all } from 'redux-saga/effects';

import currencySagas from './currency/saga';

export default function* rootSaga() {
  yield all([
    currencySagas(),
  ]);
}
