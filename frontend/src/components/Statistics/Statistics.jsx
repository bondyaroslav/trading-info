import React, {useState} from 'react'
import Order from "./Order"
import {useSelector} from "react-redux"
import constants from "../../constants"
import Select from "../../UI/select/Select"
import NotFoundOrders from "./NotFoundOrders"

const Statistics = () => {
    const orders = useSelector(state => state.orders.orders)
    const [sortedOrders, setSortedOrders] = useState(orders)

    const setOrders = () => { setSortedOrders(orders) }

    const sortOrdersByCurrencyPairs = (currencyPair) => {
        const filteredOrders = sortedOrders.filter( order => order.currencyPair === currencyPair )
        setSortedOrders(filteredOrders)
    }

    const sortOrdersByCapitalSize = (sortOption) => {
        const sorted = [...sortedOrders]
        if (sortOption === "from bigger to smaller") {
            sorted.sort((a, b) => b.capitalSize - a.capitalSize)
        }
        if (sortOption === "from smaller to bigger") {
            sorted.sort((a, b) => a.capitalSize - b.capitalSize)
        }
        setSortedOrders(sorted)
    }

    const sortOrdersByCreditLeverage = (sortOption) => {
        const sorted = [...sortedOrders]
        if (sortOption === "from bigger to smaller") {
            sorted.sort((a, b) => b.creditLeverage - a.creditLeverage)
        }
        if (sortOption === "from smaller to bigger") {
            sorted.sort((a, b) => a.creditLeverage - b.creditLeverage)
        }
        setSortedOrders(sorted)
    }

    const sortOrdersByStrategyType = (strategyType) => {
        const filteredOrders = sortedOrders.filter( order => order.strategyType === strategyType )
        setSortedOrders(filteredOrders)
    }

    const sortOrdersByTransactionType = (transactionType) => {
        const filteredOrders = sortedOrders.filter( order => order.transactionType === transactionType )
        setSortedOrders(filteredOrders)
    }

    const sortByDate = (sortOption) => {
        const sorted = [...sortedOrders]
        sorted.sort((a, b) => {
            const dateA = new Date(a.startDate).getTime()
            const dateB = new Date(b.startDate).getTime()

            if (sortOption === 'from earlier to later') {
                return dateA - dateB
            } else if (sortOption === 'from later to earlier') {
                return dateB - dateA
            }
            return 0
        })
        setSortedOrders(sorted)
    }

    const handleChange = (selectName, selectedValue) => {
        switch (selectName) {
            case "currency pairs":
                sortOrdersByCurrencyPairs(selectedValue)
                break

            case "capital size":
                sortOrdersByCapitalSize(selectedValue)
                break

            case "credit leverage":
                sortOrdersByCreditLeverage(selectedValue)
                break

            case "strategy type":
                sortOrdersByStrategyType(selectedValue)
                break

            case "transaction type":
                sortOrdersByTransactionType(selectedValue)
                break

            case "start date":
                sortByDate(selectedValue)
                break

            case "end date":
                sortByDate(selectedValue)
                break

            default:
                return orders
        }
        console.log(sortedOrders)
    }

    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginTop: 20
            }}>
                <Select selectName={"currency pairs"}
                        value={"none"}
                        selectValues={constants.currencyPairs}
                        onChange={ (value) => {handleChange("currency pairs", value)} }
                        flexDirection={"column"}/>

                <Select selectName={"capital size"}
                        value={"none"}
                        selectValues={constants.numericalData}
                        onChange={ (value) => {handleChange("capital size", value)} }
                        flexDirection={"column"}/>

                <Select selectName={"credit leverage"}
                        value={"none"}
                        selectValues={constants.numericalData}
                        onChange={ (value) => {handleChange("credit leverage", value)} }
                        flexDirection={"column"}/>

                <Select selectName={"strategy type"}
                        value={"none"}
                        selectValues={constants.strategyType}
                        onChange={ (value) => {handleChange("strategy type", value)} }
                        flexDirection={"column"}/>

                <Select selectName={"transaction type"}
                        value={"none"}
                        selectValues={constants.transactionType}
                        onChange={ (value) => {handleChange("transaction type", value)} }
                        flexDirection={"column"}/>

                <Select selectName={"start date"}
                        value={"none"}
                        selectValues={constants.date}
                        onChange={ (value) => {handleChange("start date", value)} }
                        flexDirection={"column"}/>

                <Select selectName={"endDate"}
                        value={"none"}
                        selectValues={constants.date}
                        onChange={ (value) => {handleChange("end date", value)} }
                        flexDirection={"column"}/>
            </div>
            {
                sortedOrders.length !== 0
                    ?
                    sortedOrders.map(order =>
                        <Order
                            key={order.id}
                            id={order.id}
                            currencyPair={order.currencyPair}
                            capitalSize={order.capitalSize}
                            creditLeverage={order.creditLeverage}
                            strategyType={order.strategyType}
                            transactionType={order.transactionType}
                            startDate={order.startDate}
                            endDate={order.endDate}
                        />
                    )
                    :
                    <NotFoundOrders setOrders={ setOrders }/>
            }
        </div>
    )
}

export default Statistics