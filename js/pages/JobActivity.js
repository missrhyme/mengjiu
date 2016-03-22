import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'
import List from '../components/ActivityList'
import { TagGroup, Tag } from '../components/Tag'

import * as ActivityActions from '../actions/activity'

const tagList = [{
  icon : 'teach',
  title : '补习家教',
  to : '/list/3/30011'
},{
  icon : 'relatedJob',
  title : '相关兼职',
  to : '/list/3/30012'
},{
  icon : 'project',
  title : '项目合作',
  to : '/list/3/30013'
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
        <section className="home-seg">近期推荐</section>
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
