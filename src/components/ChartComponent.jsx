import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const ChartComponent = () => {
    const chartRef = useRef(null)
    let myChart = null

    const pricesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const data = {
        labels: pricesData.map((_, i) => `element ${i + 1}`),
        datasets: [
            {
                label: 'data',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(0,0,0,1)',
                data: pricesData
            },
        ],

    };

    useEffect(() => {
        const ctx = chartRef.current; // link to canvas object

        if (myChart) {
            myChart.destroy() // destroy previous chart
        }

        myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        })
    }, [pricesData])

    return (
        <div style={{
            width: 500,
            height: 500
        }}>
            <h2>Chart</h2>
            <canvas ref={chartRef} />
        </div>
    )
}

export default ChartComponent
