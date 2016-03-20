import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export class TagGroup extends Component {
  render(){
    return(
      <ul className="taglist">
        {this.props.children}
      </ul>
    )
  }
}

export class Tag extends Component {
  render(){
    const { icon, title, to } = this.props;
    return(
      <li>
        <Link to={to}>
          <i className={icon} />
          <p>{title}</p>
        </Link>
      </li>
    )
  }
}
