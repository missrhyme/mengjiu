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
    const { id, title, image, type, subType, location, personNum, hot, effective, releaseTime, info, author, needOrder } = this.props;
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
            { needOrder == 1 && <i className="activity-icon-order" /> }
            <section className="main-subinfo"><b>300</b>人</section>
            { myType == 'activity' && <p><i className="iconfont icon-people" /><strong>{author}</strong></p>}
            { myType == 'activity' &&
              <p><i className="iconfont icon-time" /><strong>{this.getTimeString()}</strong></p>
            }
            { myType == 'job' && <p><i className="iconfont icon-time" />{`${effective} ${releaseTime}更新`}</p> }
            { myType == 'job' && <p><i className="iconfont icon-tag" />{info}</p> }
            <p><i className="iconfont icon-location" /><strong>{location}</strong></p>
          </section>
        </Link>
      </li>
    )
  }

  getType(){
    switch (this.props.subType) {
      case 20012:
      case 20013:
        return 'job'
      default:
        return 'activity'
    }
  }

  getTimeString(){
    const { startTime, endTime } = this.props;
    if( moment(startTime).format('YYYY/MM/DD') == moment(endTime).format('YYYY/MM/DD') ){
      return `${moment(startTime).format('YYYY/MM/DD HH:mm')} - ${moment(endTime).format('HH:mm')}`
    }else{
      return `${moment(startTime).format('YYYY/MM/DD HH:mm')} - ${moment(endTime).format('YYYY/MM/DD HH:mm')}`
    }
  }
}
