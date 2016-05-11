import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import moment from 'moment'

export default class List extends Component{
  render(){
    const list = this.props.data.length > 0 ?
      this.props.data.map( item => <Item key={item.id} {...item} />) :
      <section style={{textAlign: 'center', marginTop: 30}}>暂无数据</section>;
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

  state = {
    favor : this.props.favor? true : false
  }

  render(){
    const { id, title, type, subType, location, personNum, hot, startTime, effective, releaseTime, info } = this.props;
    const myType = this.getType(type);
    const favorClass = this.state.favor? 'icon-love-solid favor-active' : 'icon-love';
    return(
      <li>
        <Link to={`/activity/${id}`}>
          <section className="title-wrap">
            <span className="title">{title}</span>
            <i className="iconfont icon-next" />
          </section>
          <section className="activity-item-option">
            <i className="iconfont icon-fire activity-icon-hot" />
            <i className={`iconfont activity-icon-favor ${favorClass}`} onClick={this.addLike} />
            <section className="activity-item-subinfo"><b>{personNum}</b>人</section>
            { myType == 'activity' && <p><i className="iconfont icon-people"/>同济大学电信学院同济大学电信学院同济大学电信学院</p> }
            { myType == 'activity' && <p><i className="iconfont icon-time" />{moment(startTime).format('YYYY/MM/DD hh:mm')}</p> }
            { myType == 'job' && <p><i className="iconfont icon-time" />{`${effective}有效 ${releaseTime}更新`}</p> }
            { myType == 'job' && <p><i className="iconfont icon-tag" />{info}</p> }
            <p><i className="iconfont icon-location" />{location}</p>
          </section>
        </Link>
      </li>
    )
  }

  getType(){
    console.log(this.props.subType)
    //目前有2种列表 活动 & 兼职
    switch (this.props.subType) {
      case 20012:
      case 20013:
        return 'job'
      default:
        return 'activity'
    }
  }

  addLike(e){
    e.preventDefault();
    this.setState({
      favor : !this.state.favor
    })
  }
}
