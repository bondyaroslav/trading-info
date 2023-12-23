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
        />
    )

    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 1000,
            }}>
                <p style={{width: 200}}>currency pair</p>
                <p style={{width: 200}}>capital size</p>
                <p style={{width: 200}}>credit leverage</p>
                <p style={{width: 200}}>start date</p>
                <p style={{width: 200}}>end date</p>
            </div>
            {mappedOrders}
        </div>
    );
};

export default Statistics;