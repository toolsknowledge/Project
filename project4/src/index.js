import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { createStore,applyMiddleware, combineReducers } from "redux";
import ProductReducer from './reducer/ProductReducer';
import thunk from "redux-thunk";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AddProductReducer } from './reducer/AddProductReducer';
import { deleteproductReducer } from './reducer/DeleteProductReducer';

const allReducers = combineReducers({"fetch":ProductReducer,
                 "insert":AddProductReducer,
                 "remove":deleteproductReducer});


const store = createStore(allReducers,applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
