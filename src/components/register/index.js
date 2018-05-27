import Icon, {User} from 'feather-icons'
import * as $ from 'jquery'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { api, save_user_token } from '../../utilities'
import Error from '../error'
import './styles.css'

export default class Register extends Component {
  constructor (props) {
    super(props)

    this.state = {
      form: {},
      form_errors: {},
      error_text: false,
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.registerUser()
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

  registerUser () {
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
            <span>
            </span>
            <input type="text" name='first_name'
                   onChange={this.handleChange.bind(this)}
                   placeholder='First Name'/>
          </div>
          <div className="input-group">
            <input type="text" name='last_name'
                   onChange={this.handleChange.bind(this)}
                   placeholder='Last Name'/>
          </div>
          <div className="input-group">
            <input type="email" name='email'
                   onChange={this.handleChange.bind(this)} placeholder='email'/>
          </div>
          <div className="input-group">
            <input type="text" name='company'
                   onChange={this.handleChange.bind(this)}
                   placeholder='company'/>
          </div>
          <div className="input-group">
            <input type="text" name='password1'
                   onChange={this.handleChange.bind(this)}
                   placeholder='password'/>
          </div>
          <div className="input-group">
            <input type="text" name='password2'
                   onChange={this.handleChange.bind(this)}
                   placeholder='Verify Password'/>
          </div>
          {this.state.error_text &&
          <Error data={this.state.error_text}/>
          }
          <div className="controls">
            <button onClick={this.handleSubmit.bind(this)}>SIGN
              IN
            </button>
            <Link to='/auth'>I have an account</Link>
          </div>
        </form>
      </div>
    )
  }
}