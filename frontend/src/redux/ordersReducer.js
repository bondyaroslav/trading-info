const initialState = {
    allOrders: [],
    matchingOrders: [],
    sortedOrders: [],
}

const SET_ALL_ORDERS = "SET_ALL_ORDERS"
const SET_MATCHING_ORDERS = "SET_MATCHING_ORDERS"
const SET_SORTED_ORDERS = "SET_SORTED_ORDERS"

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_ORDERS:
            return {
                ...state,
                allOrders: action.json
            }
        case SET_MATCHING_ORDERS:
            return {
                ...state,
                matchingOrders: action.json
            }
        case SET_SORTED_ORDERS:
            return {
                ...state,
                sortedOrders: action.json
            }
        default: return state
    }
}

export const setAllOrdersAC = (json) => ({type: SET_ALL_ORDERS, json})
export const setMatchingOrders = (json) => ({type: SET_MATCHING_ORDERS, json})
export const setSortedOrdersAC = (json) => ({type: SET_SORTED_ORDERS, json})


export default ordersReducer