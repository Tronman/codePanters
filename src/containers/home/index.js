import React, { Component } from 'react'
import { HomeRouter } from '../../utilities/routes'

export default class Home extends Component {
  render () {
    return (
      <div className="home">
        <HomeRouter/>
      </div>
    )
  }
}