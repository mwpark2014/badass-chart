import React from 'react'

import './App.css'
import Chart from '../Chart/Chart'

export default () =>
  <div className="App">
    <div className="App-header">
      <h2>Welcome to the</h2><h1>BAD ASS CHART</h1>
    </div>

    <div className="App-chart-container">
      <Chart />
    </div>
  </div>
