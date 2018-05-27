import faBalanceScale from '@fortawesome/fontawesome-free-solid/faBalanceScale'
import faChartLine from '@fortawesome/fontawesome-free-solid/faChartLine'
import faPercentage from '@fortawesome/fontawesome-free-solid/faPercentage'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from '../../components/logo'
import { active_link } from '../../utilities'
import { HomeRouter, HomeRouterRoute } from '../../utilities/routes'
import './styles.css'

class Home extends Component {
  render () {
    return (
      <div className="home">
        <Logo/>
        <div className="home-body">
          <HomeRouterRoute/>
        </div>
        {/*<HomeRouter/>*/}
        <div className="home-tabs">
          <Link to='/home' className={active_link('/home',
            this.props.location)}><FontAwesomeIcon icon={faPercentage}/> Points</Link>
          <Link to='/home/leaderboard'
                className={active_link('/home/leaderboard',
                  this.props.location)}><FontAwesomeIcon
            icon={faBalanceScale}/> Leaderboard</Link>
          <Link to='/home/performance'
                className={active_link('/home/performance',
                  this.props.location)}><FontAwesomeIcon
            icon={faChartLine}/> Performance</Link>
          <Link to='/home/issue-code'
                className={active_link('/home/issue-code',
                  this.props.location)}><FontAwesomeIcon
            icon={faChartLine}/> Issue Code</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)