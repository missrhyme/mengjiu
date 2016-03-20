import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'
import List from '../components/ActivityList'
import { TagGroup, Tag } from '../components/Tag'

import * as ActivityActions from '../actions/activity'

const tagList = [{
  icon : 'lecture',
  title : '公共讲座',
  to : '/list/1/10011'
},{
  icon : 'art',
  title : '文艺演出',
  to : '/list/1/10012'
},{
  icon : 'sports',
  title : '体育赛事',
  to : '/list/1/10013'
},{
  icon : 'festival',
  title : '节庆社交',
  to : '/list/1/10014'
},{
  icon : 'match',
  title : '竞赛培训',
  to : '/list/1/10015'
},{
  icon : 'corporation',
  title : '缤纷社团',
  to : '/list/1/10016'
}]

class SchoolActivity extends Component {
  componentWillMount(){
    this.props.activityActions.getActivities();
    //this.props.homeActions.getSliders();
  }
  render() {
    const tags = tagList.map( item=><Tag {...item} key={item.title} /> );
    return (
      <div>
        <TagGroup>{tags}</TagGroup>
        <List data={this.props.activity.activity} />
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    activity: state.activity,
  //  home    : state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    activityActions: bindActionCreators(ActivityActions, dispatch),
  //  homeActions: bindActionCreators(SchoolActivityActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolActivity)
