import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router' 

//普通头部
export default class Header extends Component {
	static defaultProps = {
		style      : {},
		hasReturn  : true,
		optionFunc : false,
		optionClass: false,
		optionText : '',
		returnClass: 'iconfont icon-prev',
		returnText : '',
		link       : false,
		returnFunc : null
	}

	static contextTypes = {
    router : PropTypes.object
  }

  constructor(props){
  	super(props)
  	this.returnFunc = props.returnFunc ?
  		props.returnFunc : 
  		() => this.context.router.goBack();
  }

	render () {
		return(
			<HeaderBox {...this.props} returnFunc={this.returnFunc} >
				<h1>{this.props.title}</h1>

				{this.props.optionFunc && 
					<HeaderOption
						className={this.props.optionClass}
						onClick  ={this.props.optionFunc}
					>
						{this.props.optionText}
					</HeaderOption>
				}
			</HeaderBox>
		);
	}
};

//头部壳子,内部可自定义
export class HeaderBox extends Component {
	static defaultProps = {
		style      : {},
		hasReturn  : true,
		link       : false,
		returnFunc : () => window.history.go(-1),
		returnClass: 'iconfont icon-prev',
		returnText : ''
	}

	render(){
		return(
			<header style={this.props.style}>
				{this.props.hasReturn && !this.props.link &&
					<i className={this.props.returnClass} onClick={this.props.returnFunc}>{this.props.returnText}</i>
				}
				{this.props.link &&
					<Link className={this.props.returnClass} to={this.props.link}>{this.props.returnText}</Link>
				}
				{this.props.children}
			</header>
		)
	}
}

//头部右方列表
export class HeaderOption extends Component {
	render(){
		const { className, onClick} = this.props;
		return(
			<section className={`header-option ${className}`} onClick={onClick}>
				{this.props.children}
			</section>
		)
	}
}

//头部功能列表
export class OptionList extends Component {
	state = {
		list : false
	}

	static defaultProps = {
		className: 'iconfont icon-more'
	}

	constructor(props){
		super(props);
		this.clickHandle = this.clickHandle.bind(this);
	}

	render(){
		return(
			<HeaderOption 
				className={this.props.className}
				onClick  ={this.clickHandle}
			>
				{this.state.list &&
					<ul className="header-option-list">
						{this.props.children}
					</ul>
				}
			</HeaderOption>
		)
	}

	clickHandle(){
		this.setState({ list : !this.state.list });
	}

}

//头部功能列表项
export class OptionItem extends Component {
	render(){
		return(
			<li onClick={this.props.onClick}>{this.props.children}</li>
		)
	}
}