const express = require('express');
const app = express();
const port = 5000;

const data = [
    { id: 1, currencyPair: 'BTCUSDT', capitalSize: 1000, creditLeverage: 10, startDate: "10-5-2023", endDate: "11-5-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 2, currencyPair: 'ETHUSDT', capitalSize: 1500, creditLeverage: 5, startDate: "12-5-2023", endDate: "13-5-2023", strategyType: 'anti-martingale', transactionType: 'cross margin' },
    { id: 3, currencyPair: 'ETHUSDT', capitalSize: 2000, creditLeverage: 8, startDate: "14-5-2023", endDate: "15-5-2023", strategyType: 'martingale', transactionType: 'isolated margin' },
    { id: 4, currencyPair: 'BTCUSDT', capitalSize: 800, creditLeverage: 12, startDate: "16-5-2023", endDate: "17-5-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 5, currencyPair: 'ETHUSDT', capitalSize: 1200, creditLeverage: 6, startDate: "18-5-2023", endDate: "19-5-2023", strategyType: 'martingale', transactionType: 'cross margin' },
    { id: 6, currencyPair: 'ETHUSDT', capitalSize: 1800, creditLeverage: 9, startDate: "20-5-2023", endDate: "21-5-2023", strategyType: 'anti-martingale', transactionType: 'isolated margin' },
    { id: 7, currencyPair: 'BTCUSDT', capitalSize: 950, creditLeverage: 11, startDate: "22-5-2023", endDate: "23-5-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 8, currencyPair: 'ETHUSDT', capitalSize: 1700, creditLeverage: 7, startDate: "24-5-2023", endDate: "25-5-2023", strategyType: 'anti-martingale', transactionType: 'cross margin' },
    { id: 9, currencyPair: 'ETHUSDT', capitalSize: 2200, creditLeverage: 10, startDate: "26-5-2023", endDate: "27-5-2023", strategyType: 'martingale', transactionType: 'isolated margin' },
    { id: 10, currencyPair: 'BTCUSDT', capitalSize: 1100, creditLeverage: 13, startDate: "28-5-2023", endDate: "29-5-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
];

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});