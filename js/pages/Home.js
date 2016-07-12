 import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'
import Slider from 'react-slick'
import { HeaderBox, OptionList, OptionItem} from '../components/Header'
import Footer from '../components/Footer'
import { TagGroup, Tag } from '../components/Tag'
import List from '../components/ActivityList'
import ScrollFetch from '../components/ScrollFetch'

import * as ActivityActions from '../actions/activity'
import * as HomeActions from '../actions/home'

import { tag, locationList } from '../constants/HomeConstants'

import { userLogin } from '../api/user'

class HomeBox extends Component {

  constructor(props){
    super(props);
    this.getList = this.getList.bind(this);
    this.getNextList = this.getNextList.bind(this);
    this.collectShells = this.collectShells.bind(this);
    this.switchTab = this.switchTab.bind(this);
    this.switchExpired = this.switchExpired.bind(this);
    this.switchLocation = this.switchLocation.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    page : 0,
    expired: false, //活动是否过期
    type : this.props.location.query.type || 1 //1为校园活动 2为企业直通
  }

  componentWillMount(){
    this.getList();
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
    const { home } = this.props;
    const { title } = this.props.activity.campus;
    const { type } = this.state;
    const sliders = home.sliders.map( item => {
      const func = item.actId ? 
        () => this.context.router.push(`/activity/${item.actId}`) : 
        () => window.location.href = item.link;
      return(
        <div style={sliderStyle} key={item.title} onClick={func}>
          <img src={item.imagePath} alt={item.title} height="145" width="100%"/>
        </div>
      )
    });
    const tags = tag[type].map( item=><Tag {...item} key={item.title} /> );
    const location = locationList.map( item=><OptionItem key={item.id} onClick={ ()=>this.switchLocation(item) }>{item.title}</OptionItem> );
    return (
      <div style={{overflowX:'hidden', paddingBottom: '50px', background:'#f4f4f4', overflowY: 'scroll', minHeight: '100%'}}>

        <HeaderBox hasReturn={false} >
          <h1>{title}</h1>
          <OptionList className="iconfont icon-location-solid">
            {location}
          </OptionList>
        </HeaderBox>

        <section className="tab">
          <a
						href="javascript:;"
						className={this.state.type == 1? 'current' : false}
						onClick={ ()=> this.switchTab(1) }
					>校园活动</a>
          <a
						href="javascript:;"
						className={this.state.type == 2? 'current' : false}
						onClick={ ()=> this.switchTab(2) }
					>企业直通</a>
        </section>

        <Slider {...settings} >
          {sliders}
        </Slider>

        <TagGroup>{tags}</TagGroup>
        <section className="tab sub">
          <a className={!this.state.expired? 'current' : ''} onClick={ ()=>this.switchExpired(false) }>近期推荐</a>
          <a className={this.state.expired? 'current' : ''} onClick={ ()=>this.switchExpired(true) }>过期活动</a>
        </section>
        <List data={this.props.activity.activity} />

        {this.props.activity.activity.length == 10 * (this.state.page + 1) &&
          <ScrollFetch
            handle  ={ ()=> this.getNextList() }
            callback={ ()=> this.setState({page: this.state.page + 1}) }
          />
        }

	    	<Footer />

      </div>
    )
  }

  collectShells(obj){
    let defaultObj = {
      type  : this.state.type,
      p     : this.state.page,
      campus: this.props.activity.campus.id
    }
    return $.extend({}, defaultObj, obj);
  }

  getNextList(){
    const query = this.collectShells(params);
    return this.props.activityActions.getActivitiesNext(query);
  }

  getList(params){
    const query = this.collectShells(params);
    return (
      this.state.expired ?
      this.props.activityActions.getExpiredActivities(query) :
      this.props.activityActions.getActivities(query)
    )
  }

  switchTab(type){
    this.setState({
      type : type,
      page : 0
    }, ()=>{
      this.context.router.push({
        pathname: '/',
        query: { type: type }
      });
      this.getList();
    });
  }

  switchExpired(isExpired){
    this.setState({
      expired : isExpired,
      page    : 0
    }, this.getList)
  }

  switchLocation(item){
    const { updateCampus } = this.props.activityActions;
    updateCampus(item);
    this.getList({ campus: item.id });
  }

}


function mapStateToProps(state){
  return {
    home    : state.home,
    activity: state.activity
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(HomeActions, dispatch),
    activityActions: bindActionCreators(ActivityActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeBox)
