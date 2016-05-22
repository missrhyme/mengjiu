import React, { Component } from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

import Home from './pages/Home'
import List from './pages/ActivityList'
import Discover from './pages/Discover'
import ActivityDetail from './pages/ActivityDetail'
import User from './pages/User'
import MyFavor from './pages/MyFavor'
import AboutUs from './pages/AboutUs'

export default class Root extends Component {
	render(){
		return(
			<Router history={hashHistory}>
				<Route path="/" component={Home} />
				<Route path="/list/:type/:subtype" component={List} />
				<Route path="/activity/:id" component={ActivityDetail} />
				<Route path="/discover" component={Discover} />
				<Route path="/user" component={User} />
				<Route path="/myfavor" component={MyFavor} />
				<Route path="/aboutus" component={AboutUs} />
			</Router>
		)
	}
}
