import Chartist from 'chartist'
import React, { Component } from 'react'
import './styles.css'

export default class Points extends Component {
  componentDidMount () {
    new Chartist.Pie('.chart', {
      series: [20, 80],
    }, {
      donut: true,
      donutWidth: 60,
      startAngle: 270,
      total: 200,
      showLabel: false,
    })
  }

  render () {
    return (
      <div className="points-container">
        <div className="chart-container">
          <div className="chart" style={{position: 'static'}}/>
          <div className="points">
            20<span>INS</span>
          </div>
        </div>
      </div>
    )
  }
}