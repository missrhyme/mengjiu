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
    this.getType = this.getType.bind(this);
  }
  render(){
    const { id, title, image, type, subType, location, personNum, hot, startTime, effective, releaseTime, salary } = this.props;
    const myType = this.getType(type);
    return(
      <li>
        <Link to={`/activity/${id}`}>
          <img src={image} width="124" height="80"/>
          <section className="main-info">
            <h2 className="title">{title}</h2>
            <i className="iconfont icon-fire activity-icon-hot" />
            <section className="main-subinfo"><b>300</b>人</section>
            { myType == 'activity' &&
              <p><i className="iconfont icon-time" /><strong>{moment(this.props.startTime).format('YYYY/MM/DD hh:mm')} - {moment(this.props.endTime).format('YYYY/MM/DD hh:mm')}</strong></p>
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

  addLike(e){
    e.stopPropgation();
  }
}
