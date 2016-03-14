import React, { Component } from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

import HomeBox from './pages/HomeBox'
import SchoolActivity from './pages/SchoolActivity'
import Discover from './pages/Discover'
import ActivityDetail from './pages/ActivityDetail'
import User from './pages/User'

export default class Root extends Component {
	render(){
		return(
			<Router history={hashHistory}>
				<Route component={HomeBox} >
					<Route path="/" component={SchoolActivity} />
				</Route>
				<Route path="/activity/:id" component={ActivityDetail} />
				<Route path="/discover" component={Discover} />
				<Route path="/user" component={User} />
			</Router>
		)
	}
}
