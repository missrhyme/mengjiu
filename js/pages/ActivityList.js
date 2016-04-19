import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/ActivityFilterList'
import ScrollFetch from '../components/ScrollFetch'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ActivityActions from '../actions/activity'

export default class ActivityList extends Component{
	constructor(props){
		super(props);
		this.filterActivity = this.filterActivity.bind(this);
		this.getNext = this.getNext.bind(this);
	}

	state = {
		sort : 1,
		page : 0
	}

	componentWillMount(){
		const { type, subtype } = this.props.routeParams;
		this.filterActivity(1);
	}

	render() {
		return(
			<div style={{background:'#fff',overflowY:'scroll'}} >
				<Header title="活动列表" />
        <section className="tab" style={{marginBottom : 0}}>
          <a
						href="javascript:;"
						className={this.state.sort == 1? 'current' : false}
						onClick={ ()=> this.filterActivity(1) }
					>按时间</a>
          <a
						href="javascript:;"
						className={this.state.sort == 2? 'current' : false}
						onClick={ ()=> this.filterActivity(2) }
					>按热度</a>
        </section>
				<List data={this.props.activity.activity} />

				{this.props.activity.activity.length == 10 * (this.state.page + 1) &&
          <ScrollFetch
            handle  ={ ()=> this.getNext() }
            callback={ ()=>this.setState({page : this.state.page + 1}) }
          />
        }

      </div>
		);
	}

	filterActivity(sort){
		const { type, subtype } = this.props.routeParams;
		this.setState({
			sort : sort
		});
		this.props.actions.getActivities({
			type : type,
			subtype : subtype,
			sort : sort
		});
	}

	getNext(){
		const { type, subtype } = this.props.routeParams;
		return this.props.actions.getActivitiesNext({
			type : type,
			subtype : subtype,
			sort : this.state.sort,
			p : this.state.page + 1
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
