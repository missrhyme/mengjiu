import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'
import List from '../components/ActivityList'
import { TagGroup, Tag } from '../components/Tag'
import ScrollFetch from '../components/ScrollFetch'

import * as ActivityActions from '../actions/activity'

const tagList = [{
  icon : 'work',
  title : '企业宣讲',
  to : '/list/2/20011'
},{
  icon : 'inschool',
  title : '工作实习',
  to : '/list/2/20012'
},{
  icon : 'otherRec',
  title : '其他信息',
  to : '/list/2/20013'
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
      type : 2,
      p : this.state.page
    });
  }

  getList(){
    return this.props.activityActions.getActivities({
      type : 2,
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
