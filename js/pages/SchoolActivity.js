import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'
import List from '../components/ActivityList'
import { TagGroup, Tag } from '../components/Tag'
import ScrollFetch from '../components/ScrollFetch'

import * as ActivityActions from '../actions/activity'

const tagList = [{
  icon : 'lecture',
  title : '讲座报告',
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
  title : '社团社交',
  to : '/list/1/10014'
},{
  icon : 'match',
  title : '竞赛培训',
  to : '/list/1/10015'
},{
  icon : 'corporation',
  title : '其他活动',
  to : '/list/1/10016'
}]

class SchoolActivity extends Component {
  constructor(props){
    super(props);
    this.getList = this.getList.bind(this);
    this.getNextList = this.getNextList.bind(this);
  }

  componentWillMount(){
    this.getList();
  }

  state = {
    page : 0
  }

  render() {
    const tags = tagList.map( item=><Tag {...item} key={item.title} /> );
    return (
      <div>
        <TagGroup>{tags}</TagGroup>
        <section className="home-seg">近期推荐</section>
        <List data={this.props.activity.activity} />

        {this.props.activity.activity.length == 10 * (this.state.page + 1) &&
          <ScrollFetch
            handle  ={ ()=> this.getNextList() }
            callback={ ()=>this.setState({page : this.state.page + 1}) }
          />
        }
      </div>
    )
  }

  getNextList(){
      return this.props.activityActions.getActivitiesNext({
        type : 1,
        p : this.state.page
      });
  }

  getList(){
    return this.props.activityActions.getActivities({
      type : 1,
      p : this.state.page
    });
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
