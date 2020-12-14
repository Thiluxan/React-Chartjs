import './App.css';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';
import {useState} from 'react'

function App() {

  const[chart,setChart] = useState('bar')

  const onChartChange = e => {
    setChart(e.target.value)
  }

  return (
    <div className="App">
      <div className="selection">
        Choose a Chart:        
      <select name="charts" onChange={onChartChange}>
        <option value="bar">Bar Chart</option>
        <option value="line">Line Chart</option>
        <option value="doughnut">Doughnut Chart</option>
      </select>
      </div>
      <div className="chart">
          {
            chart === 'bar' ?
            <BarChart /> : 
            (
              chart === 'line' ? 
              <LineChart/>:<DoughnutChart/>
            )
          }
      </div>
    </div>
  );
}

export default App;
