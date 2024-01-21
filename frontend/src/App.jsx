import React from 'react'
import "./App.css"
import TransactionForm from "./components/TransactionForm"
import ChartComponent from "./components/ChartComponent"
import Statistics from "./components/Statistics"

const App = () => {

    // fetch("http://localhost:5000/api/data")
    //     .then( response =>  response.json() )
    //     .then( json => console.log(json) )

    return (
        <div className="App">
            <TransactionForm/>
            <ChartComponent/>
            <Statistics/>
        </div>
    )
}
export default App