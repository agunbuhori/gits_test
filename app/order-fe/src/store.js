import {combineReducers} from 'redux';
import {createStore} from 'redux';
import orderReducer from './reducers/orderReducer';

export default createStore(
  combineReducers({
    order: orderReducer,
  }),
);