import axios from "axios"
import { API } from "../../config"
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDER_REQUEST, MY_ORDER_FAIL, MY_ORDER_SUCCESS } from "../constants/orderConstants"


export const placeOrder = (order, token) => async(dispatch, getState) => {
    console.log(order)
    dispatch({
        type: CREATE_ORDER_REQUEST,
    })
    try {
        // place order in backend
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        const { data } = await axios.post(`${API}/postorder`, order, config)


        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.error
        })
    }
}

export const getMyOrders = (user_id, token) => async(dispatch, getState) => {
    dispatch({
        type: MY_ORDER_REQUEST,
    })
    try {
        // place order in backend
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        const { data } = await axios.get(`${API}/userorder/${user_id}`, config)


        dispatch({
            type: MY_ORDER_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: MY_ORDER_FAIL,
            payload: error.error
        })
    }
}