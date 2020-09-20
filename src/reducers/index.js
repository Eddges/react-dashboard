import { combineReducers, applyMiddleware } from "redux";
import {createStore} from "redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import profileReducer from "./profileReducer";
import loginReducer from './loginReducer';

const appReducer = combineReducers({
  profile: profileReducer,
  login: loginReducer
});

const store = createStore(appReducer,applyMiddleware(thunk,logger))

export default store;
