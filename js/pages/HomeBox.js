import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'
import Slider from 'react-slick'
import Header from '../components/Header'
import Footer from '../components/Footer'
//import { TagGroup, Tag } from '../components/Tag'
import { TabGroup, Tab } from '../components/Tab'

import * as ActivityActions from '../actions/activity'
import * as HomeActions from '../actions/home'

class HomeBox extends Component {
  componentWillMount(){
    //this.props.activityActions.getActivities();
    this.props.homeActions.getSliders();
  }
  render() {
    const settings = {
      dots : true,
      infinite : true,
      speed : 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const sliderStyle = {
      height: '145px'
    }
    const { user, home, actions } = this.props;
    const sliders = home.sliders.map( item => {
      return(
        <div style={sliderStyle} key={item.title}>
          <img src={item.imagePath} alt={item.title} height="145" width="100%"/>
        </div>
      )
    });
    //const tags = tagList.map( item=><Tag {...item} key={item.title} /> );
    return (
      <div className="fullpage-gray" style={{'overflowX':'hidden', paddingBottom: '50px'}}>
      	<Header title="同济大学" hasReturn={false} />
        <TabGroup>
          <Tab title="校园活动" to="/" />
          <Tab title="求职招募" to="/home/recruit" />
          <Tab title="兼职赚钱" to="/home/job" />
          <Tab title="生活周边" to="/home/life" />
        </TabGroup>
        <Slider {...settings} >
          {sliders}
        </Slider>
        {this.props.children}
	    	<Footer />
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    home    : state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(HomeActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeBox)
