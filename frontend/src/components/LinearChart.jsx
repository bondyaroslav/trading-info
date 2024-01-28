import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const LinearChart = () => {
    const symbol = 'BTCUSDT'
    const endDate = new Date().getTime()
    const startDate = endDate - 30 * 24 * 60 * 60 * 1000

    const chartRef = useRef(null)
    const myChart = useRef(null)

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1d&startTime=${startDate}&endTime=${endDate}`

            try {
                const response = await fetch(url)
                const data = await response.json()

                const pricesData = data.map((item) => item[1])
                const datesData = data.map((item) => new Date(item[0]))

                const ctx = chartRef.current

                if (myChart.current) {
                    myChart.current.destroy()
                }

                myChart.current = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: datesData.map(
                            (date) =>
                                `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                        ),
                        datasets: [
                            {
                                label: symbol,
                                backgroundColor: 'rgba(75,192,192,1)',
                                borderColor: 'rgba(0,0,0,1)',
                                borderWidth: 1,
                                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                                hoverBorderColor: 'rgba(0,0,0,1)',
                                data: pricesData,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: false,
                            },
                        },
                    },
                })
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchData()

        return () => {
            if (myChart.current) {
                myChart.current.destroy()
            }
        }
    }, [startDate, endDate, symbol])

    return (
        <div style={{ width: 700 }}>
            <h2>Chart</h2>
            <canvas ref={chartRef} />
        </div>
    )
}

export default LinearChart
