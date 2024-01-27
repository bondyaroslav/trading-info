import React, {useState} from "react"
import constants from "../constants"
import {useDispatch} from "react-redux"
import {setOrdersAC} from "../store/ordersReducer"
import Select from "../UI/select/Select"
import Input from "../UI/input/Input"

const TransactionForm = () => {
    const dispatch = useDispatch()
    const [currencyPairs, setCurrencyPairs] = useState("")
    const [strategyType, setStrategyType] = useState("")
    const [transactionType, setTransactionType] = useState("")
    const [capitalSize, setCapitalSize] = useState("")
    const [creditLeverage, setCreditLeverage] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const fetchOrdersData = () => {
        const isNumerical = (value) => !isNaN(parseFloat(value)) && isFinite(value)
        if (
            currencyPairs !== "" &&
            strategyType !== "" &&
            transactionType !== "" &&
            isNumerical(capitalSize) &&
            isNumerical(creditLeverage) &&
            startDate !== "" &&
            endDate !== ""
        ) {
            const startDateTimestamp = new Date(startDate).getTime()
            const endDateTimestamp = new Date(endDate).getTime()

            // Validate start date is not later than end date
            if (startDateTimestamp <= endDateTimestamp) {
                const url = `http://localhost:5000/api/data`
                    + `?currencyPairs=${currencyPairs}`
                    + `&strategyType=${strategyType}`
                    + `&transactionType=${transactionType}`
                    + `&capitalSize=${capitalSize}`
                    + `&creditLeveraging=${creditLeverage}`
                    + `&startDate=${startDate}`
                    + `&endDate=${endDate}`
                console.log(url)
                fetch(url)
                    .then(response => response.json())
                    .then(json => {
                        if (json.length !== 0) {
                            // dispatch(setOrdersAC(json))
                            console.log(json)
                        } else console.log("Orders not found")
                    })
                    .catch(error => console.error("Error fetching data:", error))
            } else {
                console.log("Start date cannot be later than end date")
            }
        } else {
            console.log("Validation error: Some parameters are missing or not valid")
        }
    }

    const handleCurrencyPairsChange = (newValue) => {setCurrencyPairs(newValue)}
    const handleStrategyTypeChange = (newValue) => {setStrategyType(newValue)}
    const handleTransactionTypeChange = (newValue) => {setTransactionType(newValue)}
    const handleCapitalSize = (newValue) => {setCapitalSize(newValue)}
    const handleCreditLeveraging = (newValue) => {setCreditLeverage(newValue)}
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

            <div>
                <Select selectName={"strategy type"} value={strategyType} selectValues={constants.strategyType} onChange={handleStrategyTypeChange}/>
                <Select selectName={"transaction type"} value={transactionType} selectValues={constants.transactionType} onChange={handleTransactionTypeChange}/>
            </div>

            <div>
                <Input inputType={"text"} inputName={"capital size($)"} onChange={handleCapitalSize}/>
                <Input inputType={"text"} inputName={"credit leveraging(x)"} onChange={handleCreditLeveraging}/>
            </div>

            <div>
                <Input inputType={"date"} inputName={"start date"} onChange={handleStartDate}/>
                <Input inputType={"date"} inputName={"end date"} onChange={handleEndDate}/>
            </div>

            <button onClick={fetchOrdersData}>submit</button>
        </div>
    )
}

export default TransactionForm