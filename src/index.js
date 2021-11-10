import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createAPI } from './services/api';
import { fetchStreetsAction } from './store/api-actions'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';

// Инициализируем axios и store
const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

// Отправляем запрос на список улиц при инициализации приложения и сохраняем в хранилище
store.dispatch(fetchStreetsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

