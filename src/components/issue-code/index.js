import * as $ from 'jquery'
import React, { Component } from 'react'
import shortid from 'shortid'
import { api, save_user_token } from '../../utilities'
import './styles.css'

export default class IssueCode extends Component {
  constructor (props) {
    super(props)

    this.state = {
      issued_code: '',
    }
  }

  componentDidMount () {
    this.setState({issued_code: shortid.generate()})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.issueCode()
  }

  handleInput () {

  }

  issueCode () {
    let {form} = this.state

    $.post(api.login_link, {
      ...form,
    })
      .then(results => {
        save_user_token(results)
        this.props.history.push('/home') //go to home
      })
      .catch(error => {
        this.setState({
          error_text: error.responseJSON.message,
          loaded: true,
        })
      })
  }

  render () {
    return (
      <div className="issue-code">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group">
            <input type="text" placeholder='Clients Cell Number'/>
          </div>
          <div className="input-group">
            <input type="text" onChange={this.handleInput.bind(this)}
                   value={this.state.issued_code}
                   disabled={true}/>
          </div>
          <div className="input-group">
            <button>ISSUE CODE</button>
          </div>
        </form>
      </div>
    )
  }
}