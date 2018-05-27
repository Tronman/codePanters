import React, { Component } from 'react'
import Logo from '../../components/logo'
import { AuthRouterRoute } from '../../utilities/routes'
import './styles.css'

export default class Auth extends Component {
  render () {
    return (
      <div className="auth">
        <Logo/>
        <AuthRouterRoute/>
      </div>
    )
  }
}