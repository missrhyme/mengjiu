import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import List from '../components/ActivityFilterList'


const arr = [
	{"title":"同济樱花节大学生摄影大赛","id":1,"author":"同济大学电子与信息工程学院","image":"http://ww2.sinaimg.cn/small/7b254335gw1f24wt3ps5lj21kw0w07oo.jpg","location":"同济大学四平路校区: 樱花大道樱花大道樱花大道樱花大道樱花大道樱花大道樱花大道","startTime":1467386531000,"endTime":1467386591000,"personNum":0,"type":1,"subType":10012,"hot":0,"isActive":1,"effective":"还剩134天","salary":"200元/时","releaseTime":"刚刚"},
	{"title":"同济桃花节大学生摄影大赛","id":2,"author":"同济大学电子与信息工程学院","image":"http://ww2.sinaimg.cn/small/7b254335gw1f24wt3bb8wj21ao0q9afd.jpg","location":"同济大学四平路校区: 樱花大道","startTime":1467386531000,"endTime":1470064931000,"personNum":0,"type":3,"subType":10012,"hot":0,"isActive":1,"effective":"还剩134天","salary":"80元/时","releaseTime":"刚刚"}
]
export default class Discover extends Component{
	render() {
		return(
			<div className="fullpage-gray" style={{background:'#fff'}} >
				<Header title="我的收藏" />
        <section className="tab" style={{marginBottom : 0}}>
          <a href="javascript:;" className="current">活动类</a>
          <a href="javascript:;">信息类</a>
        </section>
				<List data={arr} />
      </div>
		);
	}
}
