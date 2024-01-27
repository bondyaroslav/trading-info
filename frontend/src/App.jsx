import React from 'react'
import "./App.css"
import TransactionForm from "./components/TransactionForm"
import ChartComponent from "./components/ChartComponent"
import Statistics from "./components/Statistics/Statistics"

const App = () => {

    return (
        <div className="App">
            <TransactionForm/>
            <ChartComponent/>
            <Statistics/>
        </div>
    )
}
export default App