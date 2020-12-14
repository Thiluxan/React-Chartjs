import React from 'react'
import {Line} from 'react-chartjs-2'

function LineChart() {

    const data = {
        labels:['Monday','Tuesday','Wednesday',"Thursday","Friday"],
        datasets:[
            {
                label:'Weekly Sales Forecast - 2020 (M)',
                data:['10','5','8','11','13'],
                backgroundColor:'transparent',
                borderColor:'blue',
                pointBackgroundColor:'black'
            },
            {
                label:'Weekly Sales Forecast - 2019 (M)',
                data:['15','10','8','19','6'],
                backgroundColor:'transparent',
                borderColor:'red',
                pointBackgroundColor:'black'
            }
        ]
    }

    const options = {
        title:{
            display:true,
            text:'Line Chart'
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
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart
