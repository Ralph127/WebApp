
import { GET_FRUITS, ADD_FRUIT, DELETE_FRUIT, FRUITS_LOADING} from '../actions/types';

const initialState = {
    fruits: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_FRUITS:
            return {
                ...state,
                fruits: action.payload,
                loading: false
            };
        case DELETE_FRUIT:
            return {
                ...state,
                fruits: state.fruits.filter(fruit => fruit._id !== action.payload)
            }
        case ADD_FRUIT:
            return {
                ...state,
                fruits: [action.payload, ...state.fruits]
            };
        case FRUITS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}