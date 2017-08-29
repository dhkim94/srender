import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import {routerMiddleware} from 'react-router-redux'
// import {hashHistory} from "react-router";
import reducers from '../reducers/Reducer';
import initialState from './InitialState';

const createStoreWithMiddleware = applyMiddleware(
    // routerMiddleware(hashHistory),
    logger,
    thunk
)(createStore);

const store = createStoreWithMiddleware(reducers, initialState);

export default store;