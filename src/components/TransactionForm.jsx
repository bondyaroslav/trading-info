import React, {useState} from "react"
import constants from "../constants"
import {useDispatch} from "react-redux"
import {setOrdersAC} from "../store/ordersReducer"
import styles from "./TransactionForm.module.css"
import Select from "../UI/select/Select"
import Input from "../UI/input/Input"

const TransactionForm = () => {
    const dispatch = useDispatch()
    const [currencyPairs, setCurrencyPairs] = useState("BNBUSDT")
    const [strategyType, setStrategyType] = useState("martingale")
    const [transactionType, setTransactionType] = useState("isolatedMargin")
    const [capitalSize, setCapitalSize] = useState("")
    const [creditLeveraging, setCreditLeveraging] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const fetchOrdersData = () => {
        if (
            currencyPairs !== "" &&
            strategyType !== "" &&
            transactionType !== "" &&
            capitalSize !== "" &&
            creditLeveraging !== "" &&
            startDate !== "" &&
            endDate !== ""
        ) {
            const url = `${constants.url}`
                + `&currencyPairs=${currencyPairs}`
                + `&strategyType=${strategyType}`
                + `&transactionType=${transactionType}`
                + `&capitalSize=${capitalSize}`
                + `&creditLeveraging=${creditLeveraging}`
                + `&startDate=${startDate}`
                + `&endDate=${endDate}`
            console.log(url)
            fetch(url)
                .then( response => response.json() )
                .then( json => { if (json !== null) {
                    dispatch(setOrdersAC(json))
                }})
        } else console.log("error")
    }

    const handleCurrencyPairsChange = (newValue) => {setCurrencyPairs(newValue)}
    const handleStrategyTypeChange = (newValue) => {setStrategyType(newValue)}
    const handleTransactionTypeChange = (newValue) => {setTransactionType(newValue)}
    const handleCapitalSize = (newValue) => {setCapitalSize(newValue)}
    const handleCreditLeveraging = (newValue) => {setCreditLeveraging(newValue)}
    const handleStartDate = (newValue) => {setStartDate(newValue)}
    const handleEndDate = (newValue) => {setEndDate(newValue)}

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 100,
        }}>
            <Select selectName={"currency pairs"} value={currencyPairs} selectValues={constants.currencyPairs} onChange={handleCurrencyPairsChange}/>

            <div className={styles.parameter}>
                <Select selectName={"strategy type"} value={strategyType} selectValues={constants.strategyType} onChange={handleStrategyTypeChange}/>
                <Select selectName={"transaction type"} value={transactionType} selectValues={constants.transactionType} onChange={handleTransactionTypeChange}/>
            </div>

            <div className={styles.parameter}>
                <Input inputType={"text"} inputName={"capital size($)"} onChange={handleCapitalSize}/>
                <Input inputType={"text"} inputName={"credit leveraging(x)"} onChange={handleCreditLeveraging}/>
            </div>

            <div className={styles.parameter}>
                <Input inputType={"date"} inputName={"start date"} onChange={handleStartDate}/>
                <Input inputType={"date"} inputName={"end date"} onChange={handleEndDate}/>
            </div>

            <button onClick={fetchOrdersData}>submit</button>
        </div>
    )
}

export default TransactionForm