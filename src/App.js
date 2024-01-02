import React from 'react';
import "./App.css"
import TransactionForm from "./components/TransactionForm";
<<<<<<< HEAD
import Statistics from "./components/Statistics";
import ChartComponent from "./components/ChartComponent";



const App = () => {

    return (
        <div className="App">
            <TransactionForm/>
            <ChartComponent/>
=======
import ContainerStatistics from "./components/ContainerStatistics";

const App = () => {
    return (
        <div className="App">
            <TransactionForm/>
            <ContainerStatistics/>
>>>>>>> f33f55bda55c0864ada68e5dc8a60a36c3fbfa0a
        </div>
    );
};

export default App;