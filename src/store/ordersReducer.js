import constants from "../constants";

const initialState = {
    orders: [
        { id: 1, currencyPair: constants.BTCUSDT, capitalSize: 1000, creditLeverage: 10, startDate: "10-5-2023", endDate: "11-5-2023" },
        { id: 2, currencyPair: constants.ETHUSDT, capitalSize: 1500, creditLeverage: 5, startDate: "12-5-2023", endDate: "13-5-2023" },
        { id: 3, currencyPair: constants.ETHUSDT, capitalSize: 2000, creditLeverage: 8, startDate: "14-5-2023", endDate: "15-5-2023" },
        { id: 4, currencyPair: constants.BTCUSDT, capitalSize: 800, creditLeverage: 12, startDate: "16-5-2023", endDate: "17-5-2023" },
        { id: 5, currencyPair: constants.ETHUSDT, capitalSize: 1200, creditLeverage: 6, startDate: "18-5-2023", endDate: "19-5-2023" },
        { id: 6, currencyPair: constants.ETHUSDT, capitalSize: 1800, creditLeverage: 9, startDate: "20-5-2023", endDate: "21-5-2023" },
        { id: 7, currencyPair: constants.BTCUSDT, capitalSize: 950, creditLeverage: 11, startDate: "22-5-2023", endDate: "23-5-2023" },
        { id: 8, currencyPair: constants.ETHUSDT, capitalSize: 1700, creditLeverage: 7, startDate: "24-5-2023", endDate: "25-5-2023" },
        { id: 9, currencyPair: constants.ETHUSDT, capitalSize: 2200, creditLeverage: 10, startDate: "26-5-2023", endDate: "27-5-2023" },
        { id: 10, currencyPair: constants.BTCUSDT, capitalSize: 1100, creditLeverage: 13, startDate: "28-5-2023", endDate: "29-5-2023" },
        { id: 11, currencyPair: constants.ETHUSDT, capitalSize: 1300, creditLeverage: 5, startDate: "30-5-2023", endDate: "31-5-2023" },
        { id: 12, currencyPair: constants.ETHUSDT, capitalSize: 1600, creditLeverage: 8, startDate: "1-6-2023", endDate: "2-6-2023" },
        { id: 13, currencyPair: constants.BTCUSDT, capitalSize: 900, creditLeverage: 12, startDate: "3-6-2023", endDate: "4-6-2023" },
        { id: 14, currencyPair: constants.ETHUSDT, capitalSize: 1400, creditLeverage: 6, startDate: "5-6-2023", endDate: "6-6-2023" },
        { id: 15, currencyPair: constants.ETHUSDT, capitalSize: 1900, creditLeverage: 9, startDate: "7-6-2023", endDate: "8-6-2023" },
        { id: 16, currencyPair: constants.BTCUSDT, capitalSize: 1000, creditLeverage: 11, startDate: "9-6-2023", endDate: "10-6-2023" },
        { id: 17, currencyPair: constants.ETHUSDT, capitalSize: 1500, creditLeverage: 7, startDate: "11-6-2023", endDate: "12-6-2023" },
        { id: 18, currencyPair: constants.ETHUSDT, capitalSize: 2000, creditLeverage: 10, startDate: "13-6-2023", endDate: "14-6-2023" },
        { id: 19, currencyPair: constants.BTCUSDT, capitalSize: 800, creditLeverage: 13, startDate: "15-6-2023", endDate: "16-6-2023" },
        { id: 20, currencyPair: constants.ETHUSDT, capitalSize: 1200, creditLeverage: 6, startDate: "17-6-2023", endDate: "18-6-2023" }
    ]
}

const SET_ORDERS = "SET_ORDERS"

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default: return state
    }
}

export const setOrdersAC = (payload) => ({type: SET_ORDERS, payload})

export default ordersReducer

