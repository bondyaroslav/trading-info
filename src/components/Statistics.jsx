import React from 'react'
import Order from "./Order"
import {useSelector} from "react-redux"
import constants from "../constants"
import Select from "../UI/select/Select"

const Statistics = () => {

    const orders = useSelector(state => state.orders.orders)

    const mappedOrders = orders.map(order =>
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

    const sortOrders = (sortOption) => {
        const sortedOrders = orders.filter(  )
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
                <Select selectName={"currency pairs"} value={"none"} selectValues={constants.currencyPairs} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"capital size"} value={"none"} selectValues={constants.numericalData} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"credit leverage"} value={"none"} selectValues={constants.numericalData} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"strategyType"} value={"none"} selectValues={constants.strategyType} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"transactionType"} value={"none"} selectValues={constants.transactionType} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"start date"} value={"none"} selectValues={constants.date} onChange={handleChange} flexDirection={"column"}/>
                <Select selectName={"endDate"} value={"none"} selectValues={constants.date} onChange={handleChange} flexDirection={"column"}/>
            </div>
            {mappedOrders}
        </div>
    )
}

export default Statistics