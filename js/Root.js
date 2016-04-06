import React, { Component } from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

import HomeBox from './pages/HomeBox'
import List from './pages/ActivityList'
import SchoolActivity from './pages/SchoolActivity'
import RecruitActivity from './pages/RecruitActivity'
import Discover from './pages/Discover'
import ActivityDetail from './pages/ActivityDetail'
import User from './pages/User'
import MyFavor from './pages/MyFavor'

export default class Root extends Component {
	render(){
		return(
			<Router history={hashHistory}>
				<Route component={HomeBox} >
					<Route path="/" component={SchoolActivity} />
					<Route path="/home/recruit" component={RecruitActivity} />
				</Route>
				<Route path="/list/:type/:subtype" component={List} />
				<Route path="/activity/:id" component={ActivityDetail} />
				<Route path="/discover" component={Discover} />
				<Route path="/user" component={User} />
				<Route path="/myfavor" component={MyFavor} />
			</Router>
		)
	}
}
