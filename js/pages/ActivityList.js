import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/ActivityFilterList'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ActivityActions from '../actions/activity'

export default class ActivityList extends Component{
	constructor(props){
		super(props);
		this.filterActivity = this.filterActivity.bind(this);
	}

	componentWillMount(){
		const { type, subtype } = this.props.routeParams;
		this.filterActivity(1);
	}

	render() {
		return(
			<div className="fullpage-gray" style={{background:'#fff'}} >
				<Header title="活动列表" />
        <section className="tab" style={{marginBottom : 0}}>
          <a href="javascript:;" className="current" onClick={ ()=> this.filterActivity(1) }>按时间</a>
          <a href="javascript:;" onClick={ ()=> this.filterActivity(2) }>按热度</a>
        </section>
				<List data={[]} />
      </div>
		);
	}

	filterActivity(sort){
		const { type, subtype } = this.props.routeParams;
		this.props.actions.getActivities({
			type : type,
			subtype : subtype,
			sort : sort
		});
	}
}

function mapStateToProps(state){
  return {
    activity: state.activity
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActivityActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityList)
