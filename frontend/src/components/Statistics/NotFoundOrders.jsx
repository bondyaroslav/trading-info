import React from "react"

const NotFoundOrders = ({setOrders}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 30
        }}>
            <p>Orders not found</p>
            <button onClick={ () => setOrders() }>show all orders</button>
        </div>
    )
}

export default NotFoundOrders