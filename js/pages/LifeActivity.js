import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'
import List from '../components/ActivityList'
import { TagGroup, Tag } from '../components/Tag'

import * as ActivityActions from '../actions/activity'

const tagList = [{
  icon : 'entertainment',
  title : '生活娱乐',
  to : '/list/4/40011'
},{
  icon : 'food',
  title : '购物美食',
  to : '/list/4/40012'
},{
  icon : 'transport',
  title : '交通出行',
  to : '/list/4/40013'
}]

class SchoolActivity extends Component {
  componentWillMount(){
    this.props.activityActions.getActivities({
      type : 4
    });
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
