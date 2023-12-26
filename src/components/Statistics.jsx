import React from 'react';
import Order from "./Order";
import {useSelector} from "react-redux";

const Statistics = () => {

    const orders = useSelector( state => state.orders.orders)

    const mappedOrders = orders.map( order =>
        <Order
            key={order.id}
            id={order.id}
            currencyPair={order.currencyPair}
            capitalSize={order.capitalSize}
            creditLeverage={order.creditLeverage}
            startDate={order.startDate}
            endDate={order.endDate}
            strategyType={order.strategyType}
            transactionType={order.transactionType}
        />
    )

    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
            }}>
                <p style={{width: 150}}>currency pair</p>
                <p style={{width: 150}}>capital size</p>
                <p style={{width: 150}}>credit leverage</p>
                <p style={{width: 150}}>start date</p>
                <p style={{width: 150}}>end date</p>
                <p style={{width: 150}}>strategy type</p>
                <p style={{width: 150}}>transaction type</p>
            </div>
            {mappedOrders}
        </div>
    );
};

export default Statistics;