
import { GET_ORDERS, ADD_ORDER, DELETE_ORDER, ORDER_LOADING, PUT_ORDER} from '../actions/types';

const initialState = {
    orders: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
                loading: false
            };
        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order._id !== action.payload)
            }
        case ADD_ORDER:
            return {
                ...state,
                orders: [action.payload, ...state.orders]
            };
        case ORDER_LOADING:
            return {
                ...state,
                loading: true
            };
        case PUT_ORDER:
            return{
                ...state,
                orders: action.payload
            };
        default:
            return state;
    }
}