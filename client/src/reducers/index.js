import { combineReducers } from 'redux';
import fruitReducer from './fruitReducer';
import vegetableReducer from './vegetableReducer';

export default combineReducers({
    fruit: fruitReducer,
    vegetable: vegetableReducer
});