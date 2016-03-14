import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class Footer extends Component {
	static defaultProps = {
		num : 15
	}

	render () {
		return(
			<footer>
				<FooterTab icon='icon-customer' title='首页' link='/' />
				<FooterTab icon='icon-discover' title='发现' link='/discover'/>
				<FooterTab icon='icon-user' title='我的' link='/user' />
			</footer>
		);
	}
};


class FooterTab extends Component {
	static propTypes = {
		icon : PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		link : PropTypes.string.isRequired,
		num  : PropTypes.number
	}

	constructor(props){
		super(props);
	}

	render () {
		var cls = `iconfont ${this.props.icon}`;
		var num = this.props.num > 99? '99+': this.props.num;
		return(
			<Link to={this.props.link} activeClassName='active'>
				<i className={cls}></i>
				{ this.props.num > 0 ? <i className="icon-notebubble">{num}</i> : '' }
				<em>{this.props.title}</em>
			</Link>
		);
	}
};

export default Footer;
