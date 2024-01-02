import {combineReducers, createStore} from "redux";
import ordersReducer from "./ordersReducer";

const reducers = combineReducers({
    orders: ordersReducer
})

const store = createStore(reducers)

export default store