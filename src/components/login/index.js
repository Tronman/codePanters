import * as $ from 'jquery'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { api, save_user_token } from '../../utilities'
import Error from '../error'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      form: {},
      form_errors: {},
      error_text: false,
    }
  }

  handleChange (e) {
    let {value, name} = e.target
    let {form, form_errors} = this.state

    Object.assign(form, {[name]: value})
    !value
      ? Object.assign(form_errors, {[name]: 'Can not be empty'})
      : delete form_errors[name]

    this.setState({
      form,
      form_errors,
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.login()
  }

  login () {
    let {form} = this.state

    $.post(api.register_link, {
      ...form,
    })
      .then(results => {
        save_user_token(results)
        this.props.history.push('/home') //go to home
      })
      .catch(error => {
        this.setState({
          error_text: error.responseJSON.message,
        })
      })
  }

  render () {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group">
            <input type="email" name='email'
                   onChange={this.handleChange.bind(this)} placeholder='Email'/>
          </div>
          <div className="input-group">
            <input type="company" name='company'
                   onChange={this.handleChange.bind(this)} placeholder='Company'/>
          </div>
          <div className="input-group">
            <input type="password" name='password'
                   onChange={this.handleChange.bind(this)} placeholder='Password'/>
          </div>
          {this.state.error_text &&
          <Error data={this.state.error_text}/>
          }
          <div className="controls">
            <button onClick={this.handleSubmit.bind(this)}>SIGN IN</button>
            <Link to='/auth/register'>Don't have an account</Link>
          </div>
        </form>
      </div>
    )
  }
}