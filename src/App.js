import React from 'react';
import "./App.css"
import TransactionForm from "./components/TransactionForm";
import ContainerStatistics from "./components/ContainerStatistics";

const App = () => {
    return (
        <div className={"App"}>
            <TransactionForm/>
            <ContainerStatistics/>
        </div>
    );
};

export default App;