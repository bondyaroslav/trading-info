import React, {useState} from "react"
import constants from "../constants"
import {useDispatch} from "react-redux"
import {setOrdersAC} from "../store/ordersReducer"
import styles from "./TransactionForm.module.css"
import Select from "../UI/select/Select";
import Input from "../UI/input/Input";

const TransactionForm = () => {
    const dispatch = useDispatch()
    const [currencyPairs, setCurrencyPairs] = useState(null)
    const [strategyType, setStrategyType] = useState(null)
    const [transactionType, setTransactionType] = useState(null)
    const [capitalSize, setCapitalSize] = useState(null)
    const [creditLeveraging, setCreditLeveraging] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const fetchOrdersData = () => {
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
            <Select selectName={"currency pairs"} selectValues={constants.currencyPairs} onChange={handleCurrencyPairsChange}/>

            <div className={styles.parameter}>
                <Select selectName={"strategy type"} selectValues={constants.strategyType} onChange={handleStrategyTypeChange}/>
                <Select selectName={"transaction type"} selectValues={constants.transactionType} onChange={handleTransactionTypeChange}/>
            </div>

            <div className={styles.parameter}>
                <Input inputType={"text"} inputName={"capital size($)"} onChange={handleCapitalSize}/>
                <Input inputType={"text"} inputName={"credit leveraging(x)"} onChange={handleCreditLeveraging}/>
            </div>

            <div className={styles.parameter}>
                <Input inputType={"date"} inputName={"start date"} onChange={handleStartDate}/>
                <Input inputType={"date"} inputName={"end date"} onChange={handleEndDate}/>
            </div>

            <button onClick={fetchOrdersData}>submit
            </button>
        </div>
    )
}

export default TransactionForm
