import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import moment from 'moment'

export default class List extends Component{
  render(){
    const list = this.props.data.map( item => <Item key={item.id} {...item} />)
    return(
      <ul className="main-list">
        {list}
      </ul>
    )
  }
}

class Item extends Component{
  constructor(props){
    super(props);
    this.getType       = this.getType.bind(this);
    this.getTimeString = this.getTimeString.bind(this);
  }
  render(){
    const { id, title, image, type, subType, location, personNum, hot, effective, releaseTime, salary, author } = this.props;
    const myType = this.getType(type);
    return(
      <li>
        <Link to={`/activity/${id}`}>
          <section className="main-title">
            <img src={image} />
            <h2>{title}</h2>
          </section>
          <section className="main-content">
            <i className="iconfont icon-fire activity-icon-hot" />
            <section className="main-subinfo"><b>300</b>人</section>
            { myType == 'activity' && <p><i className="iconfont icon-people" /><strong>{author}</strong></p>}
            { myType == 'activity' &&
              <p><i className="iconfont icon-time" /><strong>{this.getTimeString()}</strong></p>
            }
            { myType == 'job' && <p><i className="iconfont icon-time" />{`${effective} ${releaseTime}更新`}</p> }
            { myType == 'job' && <p><i className="iconfont icon-rmb" />{salary}</p> }
            <p><i className="iconfont icon-location" /><strong>{location}</strong></p>
          </section>
        </Link>
      </li>
    )
  }

  getType(){
    //目前有2种列表 活动 & 兼职
    switch (this.props.type) {
      case 2:
      case 3:
        return 'job'
      case 1:
      case 4:
        return 'activity'
      default:
        return 'activity'
    }
  }

  getTimeString(){
    const { startTime, endTime } = this.props;
    if( moment(startTime).format('YYYY/MM/DD') == moment(endTime).format('YYYY/MM/DD') ){
      return `${moment(startTime).format('YYYY/MM/DD hh:mm')} - ${moment(endTime).format('hh:mm')}`
    }else{
      return `${moment(startTime).format('YYYY/MM/DD hh:mm')} - ${moment(endTime).format('YYYY/MM/DD hh:mm')}`
    }
  }
}
