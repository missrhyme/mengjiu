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
            <p><i className="iconfont icon-message" />{location}</p>
            <p><i className="iconfont icon-good" />{tel}</p>
            <p><i className="iconfont icon-good" />{tel}</p>
          </section>
        </Link>
      </li>
    )
  }
}
