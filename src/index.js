import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


import Home from '../src/container/Home/Home'
// State management
import { createStore } from 'redux'
import { Provider } from 'react-redux'


// GlobalState
const globalState = {
  totalOrder : 0
}

// Reducer
const rootReducer = (state = globalState, action) => {
 
  if (action.type === 'PLUS_ORDER') {
    return {
      ...state,
      totalOrder: state.totalOrder + 1
      }
  }


  if (action.type === 'MINUS_ORDER') {
    let totalOrder = 0
    if (state.totalOrder > 0) {
      return {
        ...state,
        totalOrder: state.totalOrder -1
      }
    }
   
    return {
      ...state,
      totalOrder: totalOrder
    }
  }


  return state;
}

// Store 
const storeRedux = createStore(rootReducer);

console.log(
  storeRedux.getState());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <Home />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
