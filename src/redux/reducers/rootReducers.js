import { combineReducers } from 'redux';
import move_money from './moveMoneyReducer';

const rootReducers = combineReducers({
  move_money,
});

export default rootReducers;
