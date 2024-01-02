import React from "react";
import constants from "../constants";
import {useDispatch} from "react-redux";
import {setOrdersAC} from "../store/ordersReducer";
import styles from "./TransactionForm.module.css"

const TransactionForm = () => {

    const dispatch = useDispatch()

    const fetchOrdersData = () => {
        const url = constants.url
        fetch(url)
            .then( response => response.json() )
            .then( json => { if (json !== null) {
                dispatch(setOrdersAC(json))
            }})
    }

    return (
        <form action={constants.url} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 100,
        }}>
            <div className={styles.parameter}>
                <label htmlFor="currencyPair">currency pair: </label>
                <select id="currencyPair" name="currencyPair">
                    <option value={constants.ETHUSDT}>ETH/USDT</option>
                    <option value={constants.BTCUSDT}>BTC/USDT</option>
                    <option value={constants.BNBUSDT}>BNB/USDT</option>
                </select>
            </div>

            <div className={styles.parameter}>
                <div className={styles.parameter_element}>
                    <label htmlFor="strategyType">strategy type: </label>
                    <select id="strategyType" name="strategyType">
                        <option value={"martingale"}>martingale</option>
                        <option value={"anti-martingale"}>anti-martingale</option>
                    </select>
                </div>
                <div className={styles.parameter_element}>
                    <label htmlFor="transactionType">transaction type: </label>
                    <select id="transactionType" name="transactionType">
                        <option value={"isolated margin"}>isolated margin</option>
                        <option value={"cross margin"}>cross margin</option>
                        <option value={"futures"}>futures</option>
                    </select>
                </div>
            </div>

            <div className={styles.parameter}>
                <div className={styles.parameter_element}>
                    <label htmlFor="capitalSize">capital size($): </label>
                    <input type="number" name="capitalSize" required/>
                </div>

                <div className={styles.parameter_element}>
                    <label htmlFor="leverage">credit leveraging(x): </label>
                    <input type="number"/>
                </div>
            </div>

            <div className={styles.parameter}>
                <div className={styles.parameter_element}>
                    <label htmlFor="startDate">start date: </label>
                    <input type="date" name="startDate"/>
                </div>

                <div className={styles.parameter_element}>
                    <label htmlFor="endDate">end date: </label>
                    <input type="date" name="endDate"/>
                </div>
            </div>

            <button onClick={() => {
                fetchOrdersData()
            }}>submit
            </button>
        </form>
    )
}

export default TransactionForm