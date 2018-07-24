import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App/app.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/index.js';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

const router = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
ReactDOM.render(router, document.getElementById("root"));