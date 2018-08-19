import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import IssueCode from '../components/issue-code'
import Leaderboard from '../components/leader-board'
import Login from '../components/login'
import InventoryBoard from '../components/product-item'
import Points from '../components/points'
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
      <Route exact path='/home/' component={Points}/>
      <Route path='/home/leaderboard' component={Leaderboard}/>
      <Route path='/home/products' component={InventoryBoard}/>
      <Route path='/home/issue-code' component={IssueCode}/>
      <Route path='/home/products-details' component={ProductDetails}/>
    </Switch>
  </div>
)

const AuthRouterRoute = withRouter(AuthRouter)
const HomeRouterRoute = withRouter(HomeRouter)
export {
  AuthRouterRoute,
  HomeRouterRoute,
}