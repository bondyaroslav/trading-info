import React from 'react';
import "./App.css"
import TransactionForm from "./components/TransactionForm";
import Statistics from "./components/Statistics";
import ChartComponent from "./components/ChartComponent";



const App = () => {

    return (
        <div className="App">
            <TransactionForm/>
            <ChartComponent/>
        </div>
    );
};

export default App;