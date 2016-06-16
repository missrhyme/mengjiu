import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment';

import Header from '../components/Header'
import Slider from 'react-slick'

import * as ActivityActions from '../actions/activity'

export default class Detail extends Component{
  constructor(props){
    super(props);
    this.disableFavor = false;
    this.buttonMsg = {
      1 : '取消收藏',
      0 : '收藏',
      2 : '操作中...'
    };
    this.addFavor = this.addFavor.bind(this);
  }

  componentWillMount(){
    this.props.actions.getDetail(this.props.routeParams.id);
  }

	render() {
    const { images, title, author, time, location, tel, email, qq, detail, isFavor } = this.props.detail;
    const details = detail.split('\n').map((item, index) => <p key={index}>{item}</p>);
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
    const sliders = images.map( (item, index) => {
      return(
        <div style={sliderStyle} key={index}>
          <img src={item} alt="" height="180" width="100%"/>
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
          <p><i className="iconfont icon-time" />{ moment(time).format('YYYY/MM/DD HH:mm') }</p>
          <p><i className="iconfont icon-location-solid" />{location}</p>
        </section>
        <section className="detail-info">
          { tel!='' && <p><i className="iconfont icon-tel" />{tel}</p> }
          { email!='' && <p><i className="iconfont icon-message" />{email}</p> }
          { qq!='' && <p><i className="iconfont icon-qq" />{qq}</p> }
        </section>
        <section className="detail-intro">
          <h3>活动简介</h3>
          {details}
        </section>
        <button className="detail-collectButton" onClick={this.addFavor}>{this.buttonMsg[isFavor]}</button>
      </div>
		);
	}

  addFavor(){
    const { id } = this.props.routeParams;
    const { isFavor } = this.props.detail;
    const { addDetailFavor, removeDetailFavor } = this.props.actions;
    isFavor? removeDetailFavor(id) : addDetailFavor(id);
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
