import React from 'react'
import styles from "./Order.module.css"

const Order = ({
        currencyPair,
        capitalSize,
        creditLeverage,
        startDate,
        endDate,
        strategyType,
        transactionType
    }) => {

    return (
        <div className={styles.order}>
            <p className={styles.order_argument}>{currencyPair}</p>
            <p className={styles.order_argument}>{capitalSize}</p>
            <p className={styles.order_argument}>{creditLeverage}</p>
            <p className={styles.order_argument}>{strategyType}</p>
            <p className={styles.order_argument}>{transactionType}</p>
            <p className={styles.order_argument}>{startDate}</p>
            <p className={styles.order_argument}>{endDate}</p>
        </div>
    )
}

export default Order