import React from 'react';
<<<<<<< HEAD
import Order from "./Order";
import {useSelector} from "react-redux";
import constants from "../constants";

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
                <div style={{width: 150}}>
                    <p>currency pair</p>
                    <select name="currency pair" id="">
                        <option value="" selected>none</option>
                        <option value="">{constants.BTCUSDT}</option>
                        <option value="">{constants.ETHUSDT}</option>
                        <option value="">{constants.BNBUSDT}</option>
                    </select>
                </div>
                <div style={{width: 150}}>
                <p>capital size</p>
                    <select name="capital size" id="">
                        <option value="" selected>none</option>
                        <option value="">from bigger to smaller</option>
                        <option value="">from smaller to bigger</option>
                    </select>
                </div>
                <p style={{width: 150}}>credit leverage</p>
                <p style={{width: 150}}>start date</p>
                <p style={{width: 150}}>end date</p>
                <div style={{width: 150}}>
                    <p>strategy type</p>
                    <select name="" id="">
                        <option value="">martingale</option>
                        <option value="">anti-martingale</option>
                    </select>
                </div>
                <p style={{width: 150}}>transaction type</p>
            </div>
            {mappedOrders}
=======

const Statistics = ({}) => {
    return (
        <div>
            <h1>{}</h1>
>>>>>>> f33f55bda55c0864ada68e5dc8a60a36c3fbfa0a
        </div>
    );
};

export default Statistics;