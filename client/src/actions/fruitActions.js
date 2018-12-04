import axios from 'axios';
import { GET_FRUITS, ADD_FRUIT, DELETE_FRUIT, FRUITS_LOADING, PUT_FRUIT} from './types';

export const getFruits = () => dispatch => {
    dispatch(setFruitsLoading());
    axios
        .get('/api/fruits')
        .then(res => 
            dispatch({
                type: GET_FRUITS,
                payload: res.data
            }))
};

export const addFruit = fruit => dispatch => {
    axios
        .post('/api/fruits', fruit)
        .then(res => 
            dispatch({
                type: ADD_FRUIT,
                payload: res.data
            }))
};

export const deleteFruit = id => dispatch => {
    axios.delete(`/api/fruits/${id}`).then(res => 
        dispatch({
            type: DELETE_FRUIT,
            payload: id
        })
    );
};

export const setFruitsLoading = () => {
    return {
        type: FRUITS_LOADING
    };
};

export const putFruit = (id, fruit) => dispatch => {
    axios.put(`/api/fruits/${id}`, fruit)
        .then(res => 
        dispatch({
            type: PUT_FRUIT,
            payload: res.data
        })
    );
};