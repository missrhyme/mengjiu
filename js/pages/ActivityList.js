import React, { Component } from 'react'

import { HeaderBox, OptionList, OptionItem} from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/ActivityFilterList'
import ScrollFetch from '../components/ScrollFetch'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { locationList } from '../constants/HomeConstants'
import * as ActivityActions from '../actions/activity'

export default class ActivityList extends Component{
	constructor(props){
		super(props);
		this.collectShells  = this.collectShells.bind(this);
		this.filterActivity = this.filterActivity.bind(this);
		this.getList = this.getList.bind(this);
		this.switchLocation = this.switchLocation.bind(this);
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
		const { title } = this.props.activity.campus;
		const location = locationList.map( item=><OptionItem key={item.id} onClick={ ()=>this.switchLocation(item) }>{item.title}</OptionItem> );
		return(
			<div style={{background:'#fff',overflowY:'scroll',minHeight:'100%'}} >
				<HeaderBox>
          <h1>{title}</h1>
          <OptionList className="iconfont icon-location-solid">
            {location}
          </OptionList>
        </HeaderBox>
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
            handle  ={ ()=>this.getList() }
            callback={ ()=>this.setState({page : this.state.page + 1}) }
          />
        }

      </div>
		);
	}

	collectShells( query = {} ){
		const { type, subtype } = this.props.routeParams;
		const { id } = this.props.activity.campus;
		const { page, sort } = this.state;
		let defaultQuery = {
			type : type,
			subtype : subtype,
			sort : sort,
			page : page + 1,
			campus : id
		}
		return $.extend({}, defaultQuery, query);
	}

	filterActivity(sort){
		const obj = {
			sort : sort,
			page : 0
		};
		this.setState(obj);
		this.getList(obj);
	}

	getList(params){
		const query = this.collectShells(params);
		this.props.actions.getActivities(query);
	}

	switchLocation(item){
    const { updateCampus } = this.props.actions;
    updateCampus(item);
   	this.getList({
   		campus: item.id,
   		page  : 0
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
