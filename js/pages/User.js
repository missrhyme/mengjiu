import React, { Component } from 'react'

import Header from '../components/Header'
import { BlockGroup, Block } from '../components/Block'
import Footer from '../components/Footer'
import HiddenLayer from '../components/HiddenLayer'

import { modifyUserName } from '../api/user'

const infoStyle={
	backgroundColor: '#fff',
  borderBottom: '1px solid #e0e0e0',
	position:'relative',
  padding: '20px 0 0 85px',
  height: '90px',
  lineHeight: '2.4rem',
	fontSize : '1.4rem'
}

const imageStyle={
	position: 'absolute',
	top : '15px',
	left: '15px',
	borderRadius: '30px'
}

const iStyle={
	position:'absolute',
	right	: 10,
	top   : 30
}

const inputStyle={
	width: '100%',
	border: 'none',
	background: 'transparent',
	height: '30px',
	lineHeight: '30px',
	outline: 'none'
}

const inputSectionStyle={
	padding : '5px 0 5px 10px',
	borderBottom : '1px solid #ccc'
}

export default class User extends Component{

	state = {
		active : false,
		userName : USERINFO.name
	}

	constructor(props){
		super(props);
		this.changeName = this.changeName.bind(this);
		this.nameHandle = this.nameHandle.bind(this);
	}

	render() {
		const { image, id, name, score } = USERINFO;
		const { userName } = this.state;
		return(
			<div className="fullpage-gray">

				<Header title="我的" hasReturn={false} />

				<HiddenLayer active={this.state.active}>
					<Header
						title="修改昵称"
						returnFunc={ ()=>this.setState({ active: false })}
						optionText="提交"
						optionFunc={this.changeName}
					/>
					<section style={inputSectionStyle}>
						<input type="text" value={userName} style={inputStyle} onChange={this.nameHandle}/>
					</section>
				</HiddenLayer>

				<section style={infoStyle} onClick={ ()=>this.setState({ active: true }) }>
					<img src={image} width="60" height="60" style={imageStyle}/>
					<p>昵称：{userName}</p>
					<p>积分：{score}</p>
					<i className="iconfont icon-next" style={iStyle}/>
				</section>

        <BlockGroup>
          <Block title="活动收藏" link="/myfavor" iconClass="icon-good-solid"/>
          <Block title="关于我们" link="/aboutus" iconClass="icon-message-solid" />
          { false && <Block title="意见反馈" link="/user" iconClass="icon-hint-solid" /> }
        </BlockGroup>
        <Footer />
      </div>
		);
	}

	nameHandle(e){
		this.setState({ userName : e.target.value });
	}

	changeName() {
		//modifyUserName(this.state.userName)
	}
}
