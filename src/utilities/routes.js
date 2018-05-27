import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Login from '../components/login'
import Register from '../components/register'

const AuthRouter = () => (
  <div className="routes-container">
    <Route exact path='/auth/' component={Login}/>
    <Route exact path='/auth/register' component={Register}/>
  </div>
)

const HomeRouter = () => (
  <div className="routes-container">
    <Switch>
      <Route path='/home/' component={Register}/>
      <Route path='/home/leaderboard' component={Register}/>
    </Switch>
  </div>
)

const AuthRouterRoute = withRouter(AuthRouter)
const HomeRouterRoute = withRouter(HomeRouter)
export {
  AuthRouterRoute,
  HomeRouterRoute,
}