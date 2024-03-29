import React, {useState} from 'react'
import Order from "./Order"
import {useSelector} from "react-redux"
import NotFoundOrders from "./NotFoundOrders"
import SortingMenu from "./SortingMenu"
import {Pagination, PaginationItem, Box} from "@mui/material"

const Statistics = () => {
    const orders = useSelector(state => state.orders.allOrders)
    const [sortedOrders, setSortedOrders] = useState(orders)

    const pageSize = 15
    const [currentPage, setCurrentPage] = useState(1)

    const paginate = (array, pageSize, currentPage) => {
        return array.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    }

    const paginatedOrders = paginate(sortedOrders, pageSize, currentPage)

    const setOrders = () => { setSortedOrders(orders) }

    const sortOrdersByCurrencyPairs = (currencyPair) => {
        const filteredOrders = orders.filter( order => order.currencyPair === currencyPair )
        setSortedOrders(filteredOrders)
    }

    const sortOrdersByCapitalSize = (sortOption) => {
        const sorted = [...orders]
        if (sortOption === "from bigger to smaller") {
            sorted.sort((a, b) => b.capitalSize - a.capitalSize)
        }
        if (sortOption === "from smaller to bigger") {
            sorted.sort((a, b) => a.capitalSize - b.capitalSize)
        }
        setSortedOrders(sorted)
    }

    const sortOrdersByCreditLeverage = (sortOption) => {
        const sorted = [...orders]
        if (sortOption === "from bigger to smaller") {
            sorted.sort((a, b) => b.creditLeverage - a.creditLeverage)
        }
        if (sortOption === "from smaller to bigger") {
            sorted.sort((a, b) => a.creditLeverage - b.creditLeverage)
        }
        setSortedOrders(sorted)
    }

    const sortOrdersByStrategyType = (strategyType) => {
        const filteredOrders = orders.filter( order => order.strategyType === strategyType )
        setSortedOrders(filteredOrders)
    }

    const sortOrdersByTransactionType = (transactionType) => {
        const filteredOrders = orders.filter( order => order.transactionType === transactionType )
        setSortedOrders(filteredOrders)
    }

    const sortByDate = (sortOption) => {
        const sorted = [...orders]
        sorted.sort((a, b) => {
            const dateA = new Date(a.startDate).getTime()
            const dateB = new Date(b.startDate).getTime()

            if (sortOption === "from earlier to later") {
                return dateA - dateB
            } else if (sortOption === "from later to earlier") {
                return dateB - dateA
            }
            return 0
        })
        setSortedOrders(sorted)
    }

    const handleChange = (selectName, selectedValue) => {
        switch (selectName) {
            case "currency pairs":
                sortOrdersByCurrencyPairs(selectedValue)
                break
            case "capital size":
                sortOrdersByCapitalSize(selectedValue)
                break
            case "credit leverage":
                sortOrdersByCreditLeverage(selectedValue)
                break
            case "strategy type":
                sortOrdersByStrategyType(selectedValue)
                break
            case "transaction type":
                sortOrdersByTransactionType(selectedValue)
                break
            case "start date":
                sortByDate(selectedValue)
                break
            case "end date":
                sortByDate(selectedValue)
                break
            case "none":
                break
            default:
                return orders
        }
        console.log(sortedOrders)
    }

    const onChangePage = (event, page) => {
        setCurrentPage(page)
    }

    return (
        <Box>
            <SortingMenu handleChange={handleChange}/>
            {
                sortedOrders.length !== 0
                    ?
                    <Box>
                        {paginatedOrders.map(order =>
                            <Order
                                key={order.id}
                                id={order.id}
                                currencyPair={order.currencyPair}
                                capitalSize={order.capitalSize}
                                creditLeverage={order.creditLeverage}
                                strategyType={order.strategyType}
                                transactionType={order.transactionType}
                                startDate={order.startDate}
                                endDate={order.endDate}
                            />
                        )}
                        <Pagination
                            count={Math.ceil(orders.length / pageSize)}
                            page={currentPage}
                            onChange={onChangePage}
                            renderItem={(item) => (
                                <PaginationItem
                                    component="div"
                                    {...item}
                                />
                            )}
                        />
                    </Box>
                    :
                    <NotFoundOrders setOrders={setOrders}/>
            }
        </Box>
    )
}

export default Statistics