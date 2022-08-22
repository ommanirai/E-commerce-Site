import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, MY_ORDER_REQUEST, MY_ORDER_SUCCESS, MY_ORDER_FAIL } from "./constants/orderConstants";

const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return { ...state, loading: true }

        case CREATE_ORDER_SUCCESS:
            return { ...state, loading: false, order: action.payload }

        case CREATE_ORDER_FAIL:
            return { ...state, loading: false, error: action.payload }

        default: return state
    }
}
export default orderReducer



export const myOrderReducer = (state = [], action) => {
    switch (action.type) {
        case MY_ORDER_REQUEST:
            return { ...state, loading: true }

        case MY_ORDER_SUCCESS:
            return { ...state, loading: false, order: action.payload }

        case MY_ORDER_FAIL:
            return { ...state, loading: false, error: action.payload }

        default: return state
    }
}


