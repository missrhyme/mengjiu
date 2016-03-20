import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'
import List from '../components/ActivityList'
import { TagGroup, Tag } from '../components/Tag'

import * as ActivityActions from '../actions/activity'

const tagList = [{
  icon : 'work',
  title : '工作实习',
  to : '/list/2/20011'
},{
  icon : 'inschool',
  title : '校内招募',
  to : '/list/2/20012'
},{
  icon : 'otherRec',
  title : '其他招募',
  to : '/list/2/20013'
}]

class SchoolActivity extends Component {
  componentWillMount(){
    this.props.activityActions.getActivities({
      type : 2
    });
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
