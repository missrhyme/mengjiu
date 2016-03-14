import React, {Component, PropTypes} from 'react'

export default class HiddenLayer extends Component {
	static defaultProps = {
		active : false
	}

	render () {
		const myClass = this.props.active? 'hidden hidden-slide' : 'hidden';
		return(
			<div className={myClass}>
				{this.props.children}
			</div>
		)
	}
}
