import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'
import List from '../components/ActivityList'
import { TagGroup, Tag } from '../components/Tag'

import * as ActivityActions from '../actions/activity'

const tagList = [{
  src : 'http://tp1.sinaimg.cn/1724597844/50/5727282860/1',
  title : '公共讲座',
  to : '/list/lecture'
},{
  src : 'http://tp4.sinaimg.cn/1886252463/50/40021607890/1',
  title : '文艺演出',
  to : 'xxx'
},{
  src : 'http://tp4.sinaimg.cn/2029177923/50/5711041271/0',
  title : '体育赛事',
  to : 'xxx'
},{
  src : 'http://tp4.sinaimg.cn/1886252463/50/40021607890/1',
  title : '节庆社交',
  to : 'xxx'
},{
  src : 'http://tp4.sinaimg.cn/2029177923/50/5711041271/0',
  title : '竞赛培训',
  to : 'xxx'
},{
  src : 'http://tp4.sinaimg.cn/1886252463/50/40021607890/1',
  title : '缤纷社团',
  to : 'xxx'
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
