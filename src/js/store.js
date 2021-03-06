import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(promise(),logger());

export default createStore(reducer, composeWithDevTools(middleware));