import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// reducers, kinda like .reduce() array method in JS
// similar to const [count, setCount] = useState(0);
const count = (state = 110, action) => {
  console.log(`Hi, I'm a reducer!`, action);

  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
  }

  return state;
};

const elementList = (state = [], action) => {
  return state;
};

// store, which contains all the reducers
const storeInstance = createStore(
  combineReducers({
    count,
    elementList,
  })
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
