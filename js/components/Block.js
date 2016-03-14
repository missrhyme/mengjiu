import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'

export class BlockGroup extends Component{
	render(){
		return(
			<ul className="blocks">
        	{this.props.children}
      </ul>
		);
	}
}

export class Block extends Component{
	static propTypes = {
		link  : PropTypes.string,
		title : PropTypes.string.isRequired,
	}

	render(){
		const { iconClass } = this.props;
		return(
      <li>
      	<Link to={this.props.link}>
				<b className={`iconfont ${iconClass}`} />
        <p>
          <span>{this.props.title}</span>
          <i className="iconfont icon-next"></i>
        </p>
        </Link>
      </li>
		);
	}
}
