import React, { Component } from 'react'

import Header from '../components/Header'

const wordStyle={
  textAlign: 'center',
  fontSize: '1.4rem',
  borderBottom: '1px solid #eee',
  padding : '10px 0'
}

const subwordStyle = {
  paddingLeft : '50px',
  marginTop: '10px'
}

const ulStyle={
  margin: '20px 0 0 0'
}

export default class AboutUs extends Component{

	render() {
		return(
			<div>
				<Header title="关于我们" />
        <section>
          <p style={wordStyle}>我们来自同济，期待更多同济人的加入。</p>
          <p style={subwordStyle}>感谢您的关注，我们非常高兴为你提供协助。</p>
          <ul className="activity-list" style={ulStyle}>
            <li><p><i className="iconfont icon-tel"/> 13262986020（王）</p></li>
            <li><p><i className="iconfont icon-qq"/> 415929235@qq.com</p></li>
            <li><p><i className="iconfont icon-wx"/> 13262986020</p></li>
          </ul>
        </section>
      </div>
		);
	}

}
