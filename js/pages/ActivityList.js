import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/ActivityFilterList'


const arr = [
	{"title":"同济樱花","id":1,"image":"http://img5.imgtn.bdimg.com/it/u=1142119117,1666608334&fm=21&gp=0.jpg","location":"同济大学四平路校区: 樱花大道","startTime":1467386531000,"endTime":1470064931000,"personNum":0,"type":1,"subType":10012,"hot":0,"isActive":1,"effective":"还剩134天","salary":"200元/时","releaseTime":"刚刚"},
	{"title":"招钢琴教师","id":12,"image":"http://img5.imgtn.bdimg.com/it/u=1384606030,1235105707&fm=21&gp=0.jpg","location":"同济大学四平路校区: 樱花大道","startTime":1467386531000,"endTime":1470064931000,"personNum":0,"type":3,"subType":10012,"hot":0,"isActive":1,"effective":"还剩134天","salary":"80元/时","releaseTime":"刚刚"}
]
export default class Discover extends Component{
	render() {
		return(
			<div className="fullpage-gray" style={{background:'#fff'}} >
				<Header title="活动列表" />
        <section className="tab" style={{marginBottom : 0}}>
          <a href="javascript:;" className="current">按时间</a>
          <a href="javascript:;">按热度</a>
        </section>
				<List data={arr} />
      </div>
		);
	}
}
