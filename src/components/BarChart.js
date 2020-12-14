import React from 'react'
import {Bar} from 'react-chartjs-2'

function BarChart() {

    const data = {
        labels:['Monday','Tuesday','Wednesday',"Thursday","Friday"],
        datasets:[
            {
                label:'Weekly Sales Forecast - 2020 (M)',
                data:[10,8,5,15,11],
                backgroundColor:['red','red','red','red','red']
            },
            {
                label:'Weekly Sales Forecast - 2019 (M)',
                data:[15,18,7,11,9],
                backgroundColor:['blue','blue','blue','blue','blue']
            }
        ]
    }

    const options = {
        title:{
            display:true,
            text:'Bar Chart'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max:22,
                    stepSize:2
                }
            }]
        }
    }

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarChart
