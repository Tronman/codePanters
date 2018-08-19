import * as _ from 'lodash'
import React, { Component } from 'react'
import { resolve_profile_pic } from '../../utilities'
import './styles.css'

const LeaderBoardItem = ({data}) => (
  <div className="leader-board-item">
    <div className='profile-pic' style={{
      background: `url('${encodeURI(resolve_profile_pic(data.profilePic))}')`,
    }}/>
    <div className='name'>{data.name}</div>
    <div className='balance'>{data.balance}</div>
    <button id="get"> Get </button>
  </div>
)

export default class Leaderboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      leaderboard: [
        {name: 'Mac Book Pro', balance: 10, profilePic: ''},
        {name: 'Dell inspiron', balance: 4, profilePic: ''},
        {name: 'Lenovo', balance: 6, profilePic: ''},
        {name: 'Ipad', balance: 33, profilePic: ''},
        {name: 'Canon camera d3', balance: 2, profilePic: ''},
     
      ],
    }
  }

  render () {
    return (
      <div className="leader-board">
        {
          _.map(_.orderBy(this.state.leaderboard, ['balance'], ['desc']),
            (item, index) => (
              <LeaderBoardItem data={item} key={index}/>
            ))
        }
      </div>
    )
  }
}