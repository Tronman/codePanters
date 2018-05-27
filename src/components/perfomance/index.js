import Chartist from 'chartist'
import React, { Component } from 'react'
import './styles.css'

export default class Performance extends Component {
  componentDidMount () {
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [5, 2, 4, 2, 0],
      ],
    }

    new Chartist.Line('.chart', data)
  }

  render () {
    return (
      <div className="performance">
        <div className="heading">

        </div>
        <div className="chart-container">
          <div className="chart"/>
        </div>
      </div>
    )
  }
}