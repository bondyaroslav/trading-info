import React, {useState} from 'react'
import Order from "./Order"
import {useSelector} from "react-redux"
import constants from "../constants"
import Select from "../UI/select/Select"

const Statistics = () => {

    const orders = useSelector(state => state.orders.orders)

    let sortedOrders = []

    const sortOrdersByCurrencyPairs = (currencyPair) => {
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].currencyPair === currencyPair) {
                sortedOrders.push(orders[i])
            }
        }
    }

    sortOrdersByCurrencyPairs("ETHUSDT")

    const sortByCapitalSize = (sortOption) => {
        if (sortOption === "from bigger to smaller") {
            return orders.sort((a, b) => b.capitalSize - a.capitalSize)
        }
        if (sortOption === "from smaller to bigger") {
            return orders.sort((a, b) => a.capitalSize - b.capitalSize)
        }
    }
    sortByCapitalSize("from smaller to bigger")


    const sortOrdersByStrategyType = (strategyType) => {
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].strategyType === strategyType) {
                sortedOrders.push(orders[i])
            }
        }
    }

    const sortOrdersByTransactionType = (transactionType) => {
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].transactionType === transactionType) {
                sortedOrders.push(orders[i])
            }
        }
    }

    const handleChange = () => {
        console.log("change")
    }

    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginTop: 20
            }}>
                <Select selectName={"currency pairs"} value={"none"} selectValues={constants.currencyPairs} onChange={sortOrdersByCurrencyPairs} flexDirection={"column"}/>
                <Select selectName={"capital size"} value={"none"} selectValues={constants.numericalData} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"credit leverage"} value={"none"} selectValues={constants.numericalData} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"strategyType"} value={"none"} selectValues={constants.strategyType} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"transactionType"} value={"none"} selectValues={constants.transactionType} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"start date"} value={"none"} selectValues={constants.date} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"endDate"} value={"none"} selectValues={constants.date} onChange={handleChange} flexDirection={"column"}/>
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
                    orders.map(order =>
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
                }
        </div>
    )
}

export default Statistics