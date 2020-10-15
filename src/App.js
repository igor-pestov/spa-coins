import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home/home';
import CurrencyPage from './pages/Currency/currency';
import { reducer } from './redux/rootReducer';
import mySaga from './redux/sagas';
import withKey from './HOCs/withKey';

import './App.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={withKey(HomePage)}/>
          <Route path="/currency/:symbol" exact component={withKey(CurrencyPage)}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
