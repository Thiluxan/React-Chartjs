import React from 'react'
import {Doughnut} from 'react-chartjs-2'

function DoughnutChart() {

    const data = {
        labels:['Monday','Tuesday','Wednesday',"Thursday","Friday"],
        datasets:[
            {
                label:'Weekly Sales Forecast - 2019 (M)',
                data:[15,18,7,11,9],
                backgroundColor:['blue','red','green','purple','grey']
            }
        ]
    }

    const options = {
        title:{
            display:true,
            text:'Doughnut Chart'
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
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChart
