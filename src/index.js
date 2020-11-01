import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const howFeelReducer = (state = [], action) => {

  switch(action.type) {
    case 'HOW_FEEL':
      return [action.payload];
    default:
      return state;
  }
}

const howUnderstandReducer = (state = [], action) => {

  switch(action.type) {
    case 'HOW_UNDERSTAND':
      return [action.payload];
    default:
      return state;
  }
}

const howSupportReducer = (state = [], action) => {

  switch(action.type) {
    case 'HOW_SUPPORT':
      return [action.payload];
    default:
      return state;
  }
}

const howCommentReducer = (state = [], action) => {

  switch(action.type) {
    case 'HOW_COMMENT':
      return [action.payload];
    default:
      return state;
  }
}

const storeInstance = createStore(
    combineReducers({
      howFeelReducer,
      howUnderstandReducer,
      howSupportReducer,
      howCommentReducer
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
