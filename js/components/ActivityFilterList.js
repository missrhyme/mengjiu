import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

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
  render(){
    const { id, image, title, view, like, location, tel } = this.props;
    return(
      <li>
        <Link to={`/activity/${id}`}>
          <section className="title-wrap">
            <span className="title">{title}</span>
            <i className="iconfont icon-next" />
          </section>
          <section className="activity-item-option">
            <i className="iconfont icon-start activity-icon-like" />
            <span className="activity-item-subinfo"><b>300</b>人</span>
            <p><i className="iconfont icon-time" />{location}</p>
            <p><i className="iconfont icon-message" />{tel}</p>
            <p><i className="iconfont icon-bus" />{location}</p>
          </section>
        </Link>
      </li>
    )
  }

  addLike(e){
    e.stopPropgation();
  }
}
