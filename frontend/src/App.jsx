import React from 'react'
import "./App.css"
import TransactionForm from "./components/TransactionForm"
import LinearChart from "./components/LinearChart"
import Statistics from "./components/Statistics/Statistics"

const App = () => {

    return (
        <div className="App">
            <TransactionForm/>
            <LinearChart/>
            <Statistics/>
        </div>
    )
}
export default App