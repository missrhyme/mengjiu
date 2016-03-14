import React, { Component } from 'react'
import { Link } from 'react-router'

export class TabGroup extends Component{
	render() {
		return(
			<section className="tab">
				{this.props.children}
			</section>
		);
	}
}

export class Tab extends Component{
	static defaultProps = {
		to : ''
	}

	render() {
		return(
			<Link
				activeClassName='current'
			  to={this.props.to}
			>
				{this.props.title}
			</Link>
		);
	}
}
