import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './App.css'
import Auth from './containers/auth'
import Home from './containers/home'
import { checkLoggedIn } from './utilities'
import { HomeRouterRoute } from './utilities/routes'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    checkLoggedIn() === null
      ? this.props.history.push('/auth')
      : this.props.history.push('/home')
  }

  render () {
    return (
      <div className="App">
        <div>
          {checkLoggedIn() === null &&
          <div>
            <Auth/>
          </div>
          }

          {checkLoggedIn() &&
          <div>
            <Home/>
          </div>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(App)
