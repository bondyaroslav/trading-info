import React from 'react'

const Order = ({
        currencyPair,
        capitalSize,
        creditLeverage,
        startDate,
        endDate,
        strategyType,
        transactionType
    }) => {

    const order = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
        height: 30,
        width: 1050,
    }
    const orderArgument = {
        width: 150
    }

    return (
        <div style={order}>
            <p style={orderArgument}>{currencyPair}</p>
            <p style={orderArgument}>{capitalSize}</p>
            <p style={orderArgument}>{creditLeverage}</p>
            <p style={orderArgument}>{strategyType}</p>
            <p style={orderArgument}>{transactionType}</p>
            <p style={orderArgument}>{startDate}</p>
            <p style={orderArgument}>{endDate}</p>
        </div>
    )
}

export default Order