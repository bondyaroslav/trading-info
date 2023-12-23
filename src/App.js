import React from 'react';
import "./App.css"
import TransactionForm from "./components/TransactionForm";
import Statistics from "./components/Statistics";

const App = () => {
    return (
        <div className={"App"}>
            <TransactionForm/>
            <Statistics/>
        </div>
    );
};

export default App;