import * as _ from 'lodash'
import React, { Component } from 'react'
import { resolve_profile_pic } from '../../utilities'
import './styles.css'

const UserProfile = (props) =>{
  return (
    <div className="dashboard">
      <div className="profile-pic avatar" ></div>
      <div className="user-infor">
        <div className='name'>{props.data.username}</div>
        <div className='balance'>{props.data.emp_number}</div></div>
        <vid className="bug-credit">
        <div className="credit-tag">
        BugCoin
        </div>
          {props.data.credit}
        
        </vid>
      </div>
  )
}

const Points = ({data}) => (
  <div className="leader-board-item">
    <div className='profile-pic' style={{
      background: `url('${encodeURI(resolve_profile_pic(data.profilePic))}')`,
    }}/>
    <div className='name'>{data.name}</div>
    <div className='balance'>{data.balance}</div>
  </div>
)

export default class Leaderboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user_details:{username:'User',
                    emp_number:'123445',
                    credit:'68'
    },
      leaderboard: [
        {name: 'Thulani Zondo', balance: 10, profilePic: ''},
        {name: 'Pride Musvaire', balance: 4, profilePic: ''},
        {name: 'John John', balance: 6, profilePic: ''},
        {name: 'James Mwali', balance: 33, profilePic: ''},
        {name: 'Simon W', balance: 2, profilePic: ''},
        {name: 'Dewet W', balance: 0, profilePic: ''},
        {name: 'Jonathan Moses', balance: 6, profilePic: ''},
        {name: 'Nathan Moses', balance: 17, profilePic: ''},
        {name: 'Neo Moses', balance: 20, profilePic: ''},
        {name: 'Neo Moses', balance: 20, profilePic: ''},
        {name: 'Neo Moses', balance: 20, profilePic: ''},
      ],
    }
  }

  render () {
    return (
      <div>
        <div className="leader-board">
        <UserProfile data={this.state.user_details}/>
          {
            _.map(_.orderBy(this.state.leaderboard, ['balance'], ['desc']),
              (item, index) => (
                <Points data={item} key={index}/>
              ))
          }
        </div>
      </div>
    )
  }
}