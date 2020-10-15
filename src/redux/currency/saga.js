import { call, put, select, takeLatest } from 'redux-saga/effects';

import { getApi } from '../../api/api';
import { actionTypes, setCurrencies, setCurrency } from './actions';
import { selectCurrencyLimit, selectCurrencyPage } from './selectors';
import { getApiKey } from '../apiKey/selectors';
import { clearApiKey } from '../apiKey/actions';
import { clearError, setError } from '../error/actions';

function* getCurrenciesSaga() {
  const page = yield select(selectCurrencyPage);
  const limit = yield select(selectCurrencyLimit);
  const apiKey = yield select(getApiKey);

  const start = (page - 1) * limit + 1;

  try {
    const { body: { data } } = yield call(getApi, `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}&start=${start}&limit=${limit}`);


    yield put(clearError());
    yield put(setCurrencies(data));
  } catch (e) {
    yield put(setError(e?.response?.body?.status?.error_message));
    yield put(clearApiKey());
  }
}

function* getCurrencySaga({payload: symbol}) {
  const apiKey = yield select(getApiKey);

  try {
    const { body: { data } } = yield call(getApi, `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=${apiKey}&symbol=${symbol}&aux=logo,description,tags,date_added`);
      console.log(data)
    yield put(clearError());
    yield put(setCurrency(data[symbol]));
  } catch (e) {
    yield put(setError(e?.response?.body?.status?.error_message));
    yield put(clearApiKey());

  }
}


export default function* () {
  yield takeLatest(actionTypes.GET_CURRENCIES, getCurrenciesSaga);
  yield takeLatest(actionTypes.GET_CURRENCY, getCurrencySaga);
}
