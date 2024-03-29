const express = require('express')
const app = express()
const port = 5000
const moment = require('moment')

const data = [
    { id: 1, currencyPair: 'BTCUSDT', capitalSize: 1000, creditLeverage: 10, startDate: "10-5-2023", endDate: "11-5-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 2, currencyPair: 'ETHUSDT', capitalSize: 1500, creditLeverage: 5, startDate: "12-5-2023", endDate: "13-5-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 3, currencyPair: 'ETHUSDT', capitalSize: 2000, creditLeverage: 8, startDate: "14-5-2023", endDate: "15-5-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 4, currencyPair: 'BTCUSDT', capitalSize: 800, creditLeverage: 12, startDate: "16-5-2023", endDate: "17-5-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 5, currencyPair: 'ETHUSDT', capitalSize: 1200, creditLeverage: 6, startDate: "18-5-2023", endDate: "19-5-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 6, currencyPair: 'ETHUSDT', capitalSize: 1800, creditLeverage: 9, startDate: "20-5-2023", endDate: "21-5-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 7, currencyPair: 'BTCUSDT', capitalSize: 950, creditLeverage: 11, startDate: "22-5-2023", endDate: "23-5-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 8, currencyPair: 'ETHUSDT', capitalSize: 1700, creditLeverage: 7, startDate: "24-5-2023", endDate: "25-5-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 9, currencyPair: 'ETHUSDT', capitalSize: 2200, creditLeverage: 10, startDate: "26-5-2023", endDate: "27-5-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 10, currencyPair: 'BTCUSDT', capitalSize: 1100, creditLeverage: 13, startDate: "28-5-2023", endDate: "29-5-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 11, currencyPair: 'ETHUSDT', capitalSize: 1300, creditLeverage: 5, startDate: "30-5-2023", endDate: "31-5-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 12, currencyPair: 'ETHUSDT', capitalSize: 1600, creditLeverage: 8, startDate: "1-6-2023", endDate: "2-6-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 13, currencyPair: 'BTCUSDT', capitalSize: 900, creditLeverage: 12, startDate: "3-6-2023", endDate: "4-6-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 14, currencyPair: 'ETHUSDT', capitalSize: 1400, creditLeverage: 6, startDate: "5-6-2023", endDate: "6-6-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 15, currencyPair: 'ETHUSDT', capitalSize: 1900, creditLeverage: 9, startDate: "7-6-2023", endDate: "8-6-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 16, currencyPair: 'BTCUSDT', capitalSize: 1000, creditLeverage: 11, startDate: "9-6-2023", endDate: "10-6-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 17, currencyPair: 'ETHUSDT', capitalSize: 1500, creditLeverage: 7, startDate: "11-6-2023", endDate: "12-6-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 18, currencyPair: 'ETHUSDT', capitalSize: 2000, creditLeverage: 10, startDate: "13-6-2023", endDate: "14-6-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 19, currencyPair: 'BTCUSDT', capitalSize: 800, creditLeverage: 13, startDate: "15-6-2023", endDate: "16-6-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 20, currencyPair: 'ETHUSDT', capitalSize: 1200, creditLeverage: 6, startDate: "17-6-2023", endDate: "18-6-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 21, currencyPair: 'BTCUSDT', capitalSize: 950, creditLeverage: 8, startDate: "19-6-2023", endDate: "20-6-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 22, currencyPair: 'ETHUSDT', capitalSize: 1400, creditLeverage: 11, startDate: "21-6-2023", endDate: "22-6-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 23, currencyPair: 'ETHUSDT', capitalSize: 1800, creditLeverage: 9, startDate: "23-6-2023", endDate: "24-6-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 24, currencyPair: 'BTCUSDT', capitalSize: 1100, creditLeverage: 6, startDate: "25-6-2023", endDate: "26-6-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 25, currencyPair: 'ETHUSDT', capitalSize: 1600, creditLeverage: 10, startDate: "27-6-2023", endDate: "28-6-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 26, currencyPair: 'ETHUSDT', capitalSize: 2000, creditLeverage: 7, startDate: "29-6-2023", endDate: "30-6-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 27, currencyPair: 'BTCUSDT', capitalSize: 1050, creditLeverage: 12, startDate: "1-7-2023", endDate: "2-7-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 28, currencyPair: 'ETHUSDT', capitalSize: 1750, creditLeverage: 5, startDate: "3-7-2023", endDate: "4-7-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 29, currencyPair: 'ETHUSDT', capitalSize: 2100, creditLeverage: 8, startDate: "5-7-2023", endDate: "6-7-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 30, currencyPair: 'BTCUSDT', capitalSize: 1150, creditLeverage: 13, startDate: "7-7-2023", endDate: "8-7-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 31, currencyPair: 'ETHUSDT', capitalSize: 1350, creditLeverage: 9, startDate: "9-7-2023", endDate: "10-7-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 32, currencyPair: 'ETHUSDT', capitalSize: 1900, creditLeverage: 6, startDate: "11-7-2023", endDate: "12-7-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 33, currencyPair: 'BTCUSDT', capitalSize: 1250, creditLeverage: 11, startDate: "13-7-2023", endDate: "14-7-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 34, currencyPair: 'ETHUSDT', capitalSize: 1650, creditLeverage: 8, startDate: "15-7-2023", endDate: "16-7-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 35, currencyPair: 'ETHUSDT', capitalSize: 1950, creditLeverage: 5, startDate: "17-7-2023", endDate: "18-7-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 36, currencyPair: 'BTCUSDT', capitalSize: 1200, creditLeverage: 12, startDate: "19-7-2023", endDate: "20-7-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 37, currencyPair: 'ETHUSDT', capitalSize: 1300, creditLeverage: 7, startDate: "21-7-2023", endDate: "22-7-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 38, currencyPair: 'ETHUSDT', capitalSize: 1700, creditLeverage: 10, startDate: "23-7-2023", endDate: "24-7-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 39, currencyPair: 'BTCUSDT', capitalSize: 1000, creditLeverage: 9, startDate: "25-7-2023", endDate: "26-7-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 40, currencyPair: 'ETHUSDT', capitalSize: 1500, creditLeverage: 6, startDate: "27-7-2023", endDate: "28-7-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 41, currencyPair: 'ETHUSDT', capitalSize: 1850, creditLeverage: 11, startDate: "29-7-2023", endDate: "30-7-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 42, currencyPair: 'BTCUSDT', capitalSize: 950, creditLeverage: 8, startDate: "31-7-2023", endDate: "1-8-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 43, currencyPair: 'ETHUSDT', capitalSize: 1400, creditLeverage: 9, startDate: "2-8-2023", endDate: "3-8-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 44, currencyPair: 'ETHUSDT', capitalSize: 1800, creditLeverage: 7, startDate: "4-8-2023", endDate: "5-8-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 45, currencyPair: 'BTCUSDT', capitalSize: 1100, creditLeverage: 12, startDate: "6-8-2023", endDate: "7-8-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 46, currencyPair: 'ETHUSDT', capitalSize: 1600, creditLeverage: 8, startDate: "8-8-2023", endDate: "9-8-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 47, currencyPair: 'ETHUSDT', capitalSize: 2000, creditLeverage: 5, startDate: "10-8-2023", endDate: "11-8-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 48, currencyPair: 'BTCUSDT', capitalSize: 1050, creditLeverage: 11, startDate: "12-8-2023", endDate: "13-8-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 49, currencyPair: 'ETHUSDT', capitalSize: 1750, creditLeverage: 6, startDate: "14-8-2023", endDate: "15-8-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 50, currencyPair: 'ETHUSDT', capitalSize: 2100, creditLeverage: 10, startDate: "16-8-2023", endDate: "17-8-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 51, currencyPair: 'BTCUSDT', capitalSize: 950, creditLeverage: 8, startDate: "18-8-2023", endDate: "19-8-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 52, currencyPair: 'ETHUSDT', capitalSize: 1400, creditLeverage: 11, startDate: "20-8-2023", endDate: "21-8-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 53, currencyPair: 'ETHUSDT', capitalSize: 1800, creditLeverage: 9, startDate: "22-8-2023", endDate: "23-8-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 54, currencyPair: 'BTCUSDT', capitalSize: 1100, creditLeverage: 6, startDate: "24-8-2023", endDate: "25-8-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 55, currencyPair: 'ETHUSDT', capitalSize: 1600, creditLeverage: 10, startDate: "26-8-2023", endDate: "27-8-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 56, currencyPair: 'ETHUSDT', capitalSize: 2000, creditLeverage: 7, startDate: "28-8-2023", endDate: "29-8-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 57, currencyPair: 'BTCUSDT', capitalSize: 1050, creditLeverage: 12, startDate: "30-8-2023", endDate: "31-8-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 58, currencyPair: 'ETHUSDT', capitalSize: 1750, creditLeverage: 5, startDate: "1-9-2023", endDate: "2-9-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 59, currencyPair: 'ETHUSDT', capitalSize: 2100, creditLeverage: 8, startDate: "3-9-2023", endDate: "4-9-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 60, currencyPair: 'BTCUSDT', capitalSize: 1150, creditLeverage: 13, startDate: "5-9-2023", endDate: "6-9-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 61, currencyPair: 'ETHUSDT', capitalSize: 1350, creditLeverage: 9, startDate: "7-9-2023", endDate: "8-9-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 62, currencyPair: 'ETHUSDT', capitalSize: 1900, creditLeverage: 6, startDate: "9-9-2023", endDate: "10-9-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 63, currencyPair: 'BTCUSDT', capitalSize: 1250, creditLeverage: 11, startDate: "11-9-2023", endDate: "12-9-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 64, currencyPair: 'ETHUSDT', capitalSize: 1650, creditLeverage: 8, startDate: "13-9-2023", endDate: "14-9-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 65, currencyPair: 'ETHUSDT', capitalSize: 1950, creditLeverage: 5, startDate: "15-9-2023", endDate: "16-9-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 66, currencyPair: 'BTCUSDT', capitalSize: 1200, creditLeverage: 12, startDate: "17-9-2023", endDate: "18-9-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 67, currencyPair: 'ETHUSDT', capitalSize: 1300, creditLeverage: 7, startDate: "19-9-2023", endDate: "20-9-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 68, currencyPair: 'ETHUSDT', capitalSize: 1700, creditLeverage: 10, startDate: "21-9-2023", endDate: "22-9-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 69, currencyPair: 'BTCUSDT', capitalSize: 1000, creditLeverage: 9, startDate: "23-9-2023", endDate: "24-9-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 70, currencyPair: 'ETHUSDT', capitalSize: 1500, creditLeverage: 6, startDate: "25-9-2023", endDate: "26-9-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 71, currencyPair: 'ETHUSDT', capitalSize: 1850, creditLeverage: 11, startDate: "27-9-2023", endDate: "28-9-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 72, currencyPair: 'BTCUSDT', capitalSize: 950, creditLeverage: 8, startDate: "29-9-2023", endDate: "30-9-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 73, currencyPair: 'ETHUSDT', capitalSize: 1400, creditLeverage: 9, startDate: "1-10-2023", endDate: "2-10-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 74, currencyPair: 'ETHUSDT', capitalSize: 1800, creditLeverage: 7, startDate: "3-10-2023", endDate: "4-10-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 75, currencyPair: 'BTCUSDT', capitalSize: 1100, creditLeverage: 12, startDate: "5-10-2023", endDate: "6-10-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 76, currencyPair: 'ETHUSDT', capitalSize: 1600, creditLeverage: 8, startDate: "7-10-2023", endDate: "8-10-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 77, currencyPair: 'ETHUSDT', capitalSize: 2000, creditLeverage: 5, startDate: "9-10-2023", endDate: "10-10-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 78, currencyPair: 'BTCUSDT', capitalSize: 1050, creditLeverage: 11, startDate: "11-10-2023", endDate: "12-10-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 79, currencyPair: 'ETHUSDT', capitalSize: 1750, creditLeverage: 6, startDate: "13-10-2023", endDate: "14-10-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 80, currencyPair: 'ETHUSDT', capitalSize: 2100, creditLeverage: 10, startDate: "15-10-2023", endDate: "16-10-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 81, currencyPair: 'BTCUSDT', capitalSize: 980, creditLeverage: 7, startDate: "17-10-2023", endDate: "18-10-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 82, currencyPair: 'ETHUSDT', capitalSize: 1450, creditLeverage: 10, startDate: "19-10-2023", endDate: "20-10-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 83, currencyPair: 'ETHUSDT', capitalSize: 1850, creditLeverage: 8, startDate: "21-10-2023", endDate: "22-10-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 84, currencyPair: 'BTCUSDT', capitalSize: 1150, creditLeverage: 5, startDate: "23-10-2023", endDate: "24-10-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 85, currencyPair: 'ETHUSDT', capitalSize: 1700, creditLeverage: 9, startDate: "25-10-2023", endDate: "26-10-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 86, currencyPair: 'ETHUSDT', capitalSize: 2100, creditLeverage: 6, startDate: "27-10-2023", endDate: "28-10-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 87, currencyPair: 'BTCUSDT', capitalSize: 1100, creditLeverage: 8, startDate: "29-10-2023", endDate: "30-10-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 88, currencyPair: 'ETHUSDT', capitalSize: 1600, creditLeverage: 11, startDate: "31-10-2023", endDate: "1-11-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 89, currencyPair: 'ETHUSDT', capitalSize: 2000, creditLeverage: 7, startDate: "2-11-2023", endDate: "3-11-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 90, currencyPair: 'BTCUSDT', capitalSize: 1200, creditLeverage: 6, startDate: "4-11-2023", endDate: "5-11-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 91, currencyPair: 'ETHUSDT', capitalSize: 1550, creditLeverage: 9, startDate: "6-11-2023", endDate: "7-11-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 92, currencyPair: 'ETHUSDT', capitalSize: 1950, creditLeverage: 8, startDate: "8-11-2023", endDate: "9-11-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 93, currencyPair: 'BTCUSDT', capitalSize: 1250, creditLeverage: 7, startDate: "10-11-2023", endDate: "11-11-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 94, currencyPair: 'ETHUSDT', capitalSize: 1650, creditLeverage: 10, startDate: "12-11-2023", endDate: "13-11-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 95, currencyPair: 'ETHUSDT', capitalSize: 2050, creditLeverage: 6, startDate: "14-11-2023", endDate: "15-11-2023", strategyType: 'martingale', transactionType: 'isolated-margin' },
    { id: 96, currencyPair: 'BTCUSDT', capitalSize: 1300, creditLeverage: 8, startDate: "16-11-2023", endDate: "17-11-2023", strategyType: 'anti-martingale', transactionType: 'futures' },
    { id: 97, currencyPair: 'ETHUSDT', capitalSize: 1750, creditLeverage: 9, startDate: "18-11-2023", endDate: "19-11-2023", strategyType: 'martingale', transactionType: 'cross-margin' },
    { id: 98, currencyPair: 'ETHUSDT', capitalSize: 2150, creditLeverage: 7, startDate: "20-11-2023", endDate: "21-11-2023", strategyType: 'anti-martingale', transactionType: 'isolated-margin' },
    { id: 99, currencyPair: 'BTCUSDT', capitalSize: 1350, creditLeverage: 6, startDate: "22-11-2023", endDate: "23-11-2023", strategyType: 'martingale', transactionType: 'futures' },
    { id: 100, currencyPair: 'ETHUSDT', capitalSize: 1700, creditLeverage: 10, startDate: "24-11-2023", endDate: "25-11-2023", strategyType: 'anti-martingale', transactionType: 'cross-margin' },
    { id: 101, currencyPair: 'BTCUSDT', capitalSize: 1000, creditLeverage: 10, startDate: "10-5-2023", endDate: "11-5-2023", strategyType: 'martingale', transactionType: 'futures' }
]

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.get(`/api/data`, (req, res) => {
    console.log("Query params:", req.query)

    const { currencyPairs, strategyType, transactionType, capitalSize, creditLeveraging, startDate, endDate } = req.query

    const filteredData = data.filter(order => {
        return (
            (!currencyPairs || order.currencyPair === currencyPairs) &&
            (!strategyType || order.strategyType === strategyType) &&
            (!transactionType || order.transactionType === transactionType) &&
            (!capitalSize || order.capitalSize === Number(capitalSize)) &&
            (!creditLeveraging || order.creditLeverage === Number(creditLeveraging)) &&
            (!startDate || moment(order.startDate, "DD-MM-YYYY").isSameOrAfter(moment(startDate, "YYYY-MM-DD"))) &&
            (!endDate || moment(order.endDate, "DD-MM-YYYY").isSameOrBefore(moment(endDate, "YYYY-MM-DD")))
        )
    })

    res.json(filteredData)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})