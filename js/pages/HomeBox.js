import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'
import Slider from 'react-slick'
import { HeaderBox, OptionList, OptionItem} from '../components/Header'
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
      const func = item.actId ? () => location.hash = `/activity/${item.actId}` : () => window.open(item.link);
      return(
        <div style={sliderStyle} key={item.title} onClick={func}>
          <img src={item.imagePath} alt={item.title} height="145" width="100%"/>
        </div>
      )
    });
    //const tags = tagList.map( item=><Tag {...item} key={item.title} /> );
    return (
      <div style={{'overflowX':'hidden', paddingBottom: '50px', background:'#f4f4f4', overflowY: 'scroll'}}>
      	<HeaderBox hasReturn={false} >
          <h2>同济大学</h2>
          <OptionList className="iconfont icon-location-solid">
            <OptionItem>同济大学</OptionItem>
            <OptionItem>同济大学本部</OptionItem>
            <OptionItem>同济大学嘉定校区</OptionItem>
          </OptionList>
        </HeaderBox>
        <TabGroup>
          <Tab title="校园活动" to="/" />
          <Tab title="求职招募" to="/home/recruit" />
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
