
import { GET_VEGETABLES, ADD_VEGETABLE, DELETE_VEGETABLE, VEGETABLES_LOADING } from '../actions/types';

const initialState = {
    vegetables: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_VEGETABLES:
            return {
                ...state,
                vegetables: action.payload,
                loading: false
            };
        case DELETE_VEGETABLE:
            return {
                ...state,
                vegetables: state.vegetables.filter(vegetable => vegetable._id !== action.payload)
            }
        case ADD_VEGETABLE:
            return {
                ...state,
                vegetables: [action.payload, ...state.vegetables]
            };
        case VEGETABLES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}