import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducers, kinda like .reduce() array method in JS
// similar to const [count, setCount] = useState(0);
const count = (state = 110, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
};

const elementList = (state = [], action) => {
  if (action.type === 'ADD_ELEMENT') {
    // using methods like .push() is array mutation, react/redux don't like it
    // we need to create a new array with old array data and adding new data
    // so, use the spread operator to break the state array and make a new one!
    return [...state, action.payload];
  }
  return state;
};

// store, which contains all the reducers
const storeInstance = createStore(
  combineReducers({
    count,
    elementList,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
