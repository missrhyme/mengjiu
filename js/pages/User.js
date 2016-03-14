import React, { Component } from 'react'

import Header from '../components/Header'
import { BlockGroup, Block } from '../components/Block'
import Footer from '../components/Footer'

export default class User extends Component{
	render() {
		return(
			<div className="fullpage-gray">
        <Header title="我的" hasReturn={false} />
        <BlockGroup>
          <Block title="活动收藏" link="/123" />
          <Block title="联系我们" link="/123" />
          <Block title="意见反馈" link="/123" />
        </BlockGroup>
        <Footer />
      </div>
		);
	}
}
