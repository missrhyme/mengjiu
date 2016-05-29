import React, { Component } from 'react'

import Header from '../components/Header'

import dongtai from '../../img/0sir1s.jpg'
import wanglei from '../../img/PP.jpg'
import zhufeng from '../../img/zhfkt.jpg'
import wangxinxin from '../../img/xx.jpg'
import rhyme from '../../img/rhyme.jpg'

const wordStyle={
  textAlign: 'center',
  fontSize: '1.4rem',
  borderTop: '1px solid #eee',
  borderBottom: '1px solid #eee',
  padding : '10px 0'
}

const subwordStyle = {
  textAlign: 'center',
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
        <section>
          <p style={wordStyle}>团队成员</p>
          <ul className="aboutus-list">
            <li>
              <img src={dongtai}/>
              <span>0sir1s</span>
            </li>
            <li>
              <img src={wanglei}/>
              <span>PP</span>
            </li>
            <li>
              <img src={zhufeng}/>
              <span>zhfkt</span>
            </li>
            <li>
              <img src={wangxinxin}/>
              <span>欣大王</span>
            </li>
            <li>
              <img src={rhyme}/>
              <span>rhyme!</span>
            </li>
          </ul>
        </section>
      </div>
		);
	}

}
