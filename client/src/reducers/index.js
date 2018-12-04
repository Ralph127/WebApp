import { combineReducers } from 'redux';
import fruitReducer from './fruitReducer';
import vegetableReducer from './vegetableReducer';
import orderReducer from './orderReducer';
export default combineReducers({
    fruit: fruitReducer,
    vegetable: vegetableReducer,
    order: orderReducer
});