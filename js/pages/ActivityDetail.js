import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../components/Header'
import Slider from 'react-slick'

import * as ActivityActions from '../actions/activity'

export default class Detail extends Component{
  componentWillMount(){
    this.props.actions.getDetail(this.props.routeParams.id);
  }

	render() {
    const { image, title, author, time, location, tel, email, qq, detail } = this.props.detail;
    const settings = {
      dots : true,
      infinite : true,
      speed : 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const sliderStyle = {
      height: '180px'
    }
    const sliders = image.map( item => {
      return(
        <div style={sliderStyle} key={item.title}>
          <img src={item.image} alt={item.title} height="180" width="100%"/>
        </div>
      )
    });
		return(
      <div className="fullpage-gray">
        <Header title="活动详情" />
        <Slider {...settings}>
          {sliders}
        </Slider>
        <section className="detail-title">
          <h2>{title}</h2>
          <p>{author}</p>
        </section>
        <section className="detail-info">
          <p><i className="iconfont icon-time" />{time}</p>
          <p><i className="iconfont icon-location-solid" />{location}</p>
        </section>
        <section className="detail-info">
          <p><i className="iconfont icon-tel" />{tel}</p>
          <p><i className="iconfont icon-message" />{email}</p>
          <p><i className="iconfont icon-qq" />{qq}</p>
        </section>
        <section className="detail-intro">
          <h3>活动简介</h3>
          <p>{detail}</p>
        </section>
        <button className="detail-collectButton">收藏</button>
      </div>
		);
	}
}


function mapStateToProps(state){
  return {
    detail: state.detail
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
)(Detail)
