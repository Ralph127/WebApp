import axios from 'axios';
import { GET_ORDERS, ADD_ORDER, DELETE_ORDER, ORDER_LOADING, PUT_ORDER} from './types';

export const getOrders = () => dispatch => {
    dispatch(setOrdersLoading());
    axios
        .get('/api/orders')
        .then(res => 
            dispatch({
                type: GET_ORDERS,
                payload: res.data
            }))
};

export const addOrder = order => dispatch => {
    axios
        .post('/api/orders', order)
        .then(res => 
            dispatch({
                type: ADD_ORDER,
                payload: res.data
            }))
};

export const deleteOrder = id => dispatch => {
    axios.delete(`/api/orders/${id}`).then(res => 
        dispatch({
            type: DELETE_ORDER,
            payload: id
        })
    );
    console.log("axios was engaged")
};

export const setOrdersLoading = () => {
    return {
        type: ORDER_LOADING
    };
};

export const putOrder = (id, order) => dispatch => {
    axios.put(`/api/orders/${id}`, order)
        .then(res => 
        dispatch({
            type: PUT_ORDER,
            payload: res.data
        })
    );
};