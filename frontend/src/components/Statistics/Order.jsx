import React from 'react'
import {Box} from "@mui/material";

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
        <Box style={order}>
            <p style={orderArgument}>{currencyPair}</p>
            <p style={orderArgument}>{capitalSize}</p>
            <p style={orderArgument}>{creditLeverage}</p>
            <p style={orderArgument}>{strategyType}</p>
            <p style={orderArgument}>{transactionType}</p>
            <p style={orderArgument}>{startDate}</p>
            <p style={orderArgument}>{endDate}</p>
        </Box>
    )
}

export default Order