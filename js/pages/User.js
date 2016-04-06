import React, { Component } from 'react'

import Header from '../components/Header'
import { BlockGroup, Block } from '../components/Block'
import Footer from '../components/Footer'

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

export default class User extends Component{
	render() {
		const { image, id, name, score } = USERINFO;
		return(
			<div className="fullpage-gray">
        <Header title="我的" hasReturn={false} />
				<section style={infoStyle}>
					<img src={image} width="60" height="60" style={imageStyle}/>
					<p>昵称：{name}</p>
					<p>积分：{score}</p>
					<i className="iconfont icon-next" style={iStyle}/>
				</section>
        <BlockGroup>
          <Block title="活动收藏" link="/myfavor" iconClass="icon-good-solid"/>
          <Block title="联系我们" link="/user" iconClass="icon-message-solid" />
          <Block title="意见反馈" link="/user" iconClass="icon-hint-solid" />
        </BlockGroup>
        <Footer />
      </div>
		);
	}
}
