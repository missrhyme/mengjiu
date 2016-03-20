import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import moment from 'moment'

export default class List extends Component{
  render(){
    const list = this.props.data.map( item => <Item key={item.id} {...item} />)
    return(
      <ul className="activity-list">
        {list}
      </ul>
    )
  }
}

class Item extends Component{
  constructor(props){
    super(props);
    this.getType = this.getType.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  render(){
    const { id, title, type, subType, location, personNum, hot, startTime, effective, releaseTime, salary } = this.props;
    const myType = this.getType(type);
    return(
      <li>
        <Link to={`/activity/${id}`}>
          <section className="title-wrap">
            <span className="title">{title}</span>
            <i className="iconfont icon-next" />
          </section>
          <section className={`activity-item-option ${myType}`}>
            <i className="iconfont icon-fire activity-icon-hot" />
            <i className="iconfont icon-love activity-icon-favor" onClick={this.addLike} />
            <p className="activity-item-subinfo"><b>{personNum}</b>人</p>
            { myType == 'activity' && <p><i className="iconfont icon-time" />{moment(startTime).format('YYYY/MM/DD hh:mm')}</p> }
            { myType == 'job' && <p><i className="iconfont icon-time" />{`${effective}有效 ${releaseTime}更新`}</p> }
            { myType == 'job' && <p><i className="iconfont icon-info" />{salary}</p> }
            <p><i className="iconfont icon-location" />{location}</p>
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
    e.preventDefault();
    e.stopPropgation();
  }
}
