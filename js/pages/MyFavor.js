import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/ActivityFilterList'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as UserActions from '../actions/user'

export default class Favor extends Component{

	state = {
		currentTab : 1
	}

	constructor(props){
		super(props);
		this.switchTab = this.switchTab.bind(this);
	}

	componentWillMount(){
		this.props.actions.getFavorList();
	}

	render() {
		return(
			<div className="fullpage-gray" style={{background:'#fff'}} >
				<Header title="我的收藏" />
        <section className="tab" style={{marginBottom : 0}}>
          <a href="javascript:;" className={this.state.currentTab == 1? 'current' : ''} onClick={ ()=>this.switchTab(1) }>活动类</a>
          <a href="javascript:;" className={this.state.currentTab == 2? 'current' : ''} onClick={ ()=>this.switchTab(2) }>信息类</a>
        </section>
				<List data={this.props.activity.mainlist} />
      </div>
		);
	}

	switchTab(type){
		this.setState({
			currentTab : type
		})
		this.props.actions.getFavorList(type);
	}
}

function mapStateToProps(state){
  return {
    activity    : state.activity
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favor)
