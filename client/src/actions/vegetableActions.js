import axios from 'axios';
import { GET_VEGETABLES, ADD_VEGETABLE, DELETE_VEGETABLE, VEGETABLES_LOADING } from './types';

export const getVegetables = () => dispatch => {
    dispatch(setFruitsLoading());
    axios
        .get('/api/vegetables')
        .then(res => 
            dispatch({
                type: GET_VEGETABLES,
                payload: res.data
            }))
};

export const addVegetable = vegetable => dispatch => {
    axios
        .post('/api/vegetables', vegetable)
        .then(res => 
            dispatch({
                type: ADD_VEGETABLE,
                payload: res.data
            }))
};

export const deleteVegetable = id => dispatch => {
    axios.delete(`/api/vegetables/${id}`).then(res => 
        dispatch({
            type: DELETE_VEGETABLE,
            payload: id
        })
    );
};

export const setFruitsLoading = () => {
    return {
        type: VEGETABLES_LOADING
    };
};