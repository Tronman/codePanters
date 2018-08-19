import * as _ from 'lodash'
import React, { Component } from 'react'
import { resolve_profile_pic } from '../../utilities'
import './styles.css'
import rehive from 'rehive'
import { api, save_user_token } from '../../utilities'
import * as $ from 'jquery'


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


const token = localStorage.getItem('insure_rewards_user');
var json = JSON.parse(token);
// ["data"].token
console.log("your token is",json);
export default class Leaderboard extends Component {
  
  constructor (props) {
    super(props)
    

    this.state = {
      username:json.data.toString(),
      emp_number:'123445',
      credit:'68'
    }

  }



  componentDidMount(){
    $.get(`https://api.rehive.com/3/user/${api.save_user_token}`, (data)=>{
      console.log(data);
    })

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