import React from "react";
import constants from "../constants";
import {useDispatch} from "react-redux";
import {setOrdersAC} from "../store/ordersReducer";

const TransactionForm = () => {

    // const dispatch = useDispatch()
    //
    // const fetchData = () => {
    //     const url = constants.url
    //     fetch(url)
    //         .then( response => response.json() )
    //         .then( dispatch(setOrdersAC) )
    // }

    return (
        <form>
            <div>
                <label htmlFor="currencyPair">currency pair:</label>
                <select id="currencyPair" name="currencyPair">
                    <option value={constants.ETHUSDT}>ETH/USDT</option>
                    <option value={constants.BTCUSDT}>BTC/USDT</option>
                    <option value={constants.BNBUSDT}>BNB/USDT</option>
                </select>
            </div>

            <div>
                <label htmlFor="capitalSize">capital size($):</label>
                <input type="number" name="capitalSize" required/>
            </div>

            <div>
                <label htmlFor="leverage">credit leveraging(x):</label>
                <input type="number"/>
            </div>

            <div>
                <label htmlFor="startDate">start date:</label>
                <input type="date" name="startDate"/>
            </div>

            <div>
                <label htmlFor="endDate">end date:</label>
                <input type="date" name="endDate"/>
            </div>

            <button onClick={() => {
                console.log("fetch data")
            }}>submit
            </button>
        </form>
    )
}

export default TransactionForm